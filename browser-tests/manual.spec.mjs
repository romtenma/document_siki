import { test, expect } from '@playwright/test'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const manualRoot = fileURLToPath(new URL('../manual/', import.meta.url))
async function findPages(dir) {
  const pages = []
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'public') continue
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) pages.push(...await findPages(file))
    else if (file.endsWith('.md')) pages.push(file)
  }
  return pages
}
const manualPages = await Promise.all((await findPages(manualRoot)).map(async file => {
  const source = await fs.readFile(file, 'utf8')
  return { url: path.relative(manualRoot, file).split(path.sep).join('/').replace(/index\.md$/, '').replace(/\.md$/, '.html'), title: /^title: (.+)$/m.exec(source)[1] }
}))

test('サブパスから各ページを直接開き、画像と関連リンクをたどれる', async ({ page }) => {
  test.setTimeout(60_000)
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`) })
  for (const { url, title: heading } of manualPages.filter(p => p.url)) {
    const response = await page.goto(url)
    expect(response.status()).toBe(200)
    await expect(page.getByRole('heading', { level: 1, name: new RegExp('^' + heading) })).toBeVisible()
    await page.reload()
    await expect(page.getByRole('heading', { level: 1, name: new RegExp('^' + heading) })).toBeVisible()
    for (const img of await page.locator('.vp-doc img').all()) {
      await expect(img).toHaveJSProperty('complete', true)
      expect(await img.evaluate(element => element.naturalWidth)).toBeGreaterThan(0)
    }
  }
  await page.goto('features/ng-and-mute.html')
  await page.locator('.vp-doc').getByRole('link', { name: '設定の探し方と適用範囲', exact: true }).click()
  await expect(page).toHaveURL(/\/document_siki\/customization\/settings\.html$/)
  expect(errors).toEqual([])
})

test('日本語・半角カナ・全角英字・複数語から見出しを検索できる', async ({ page }) => {
  await page.goto('./')
  for (const [query, target] of [
    ['共通設定', '/customization/settings.html#'],
    ['ミュート', '/features/ng-and-mute.html#'],
    ['ﾐｭｰﾄ', '/features/ng-and-mute.html#'],
    ['ミュー', '/features/ng-and-mute.html#'],
    ['既読', '/basics/threads.html#'],
    ['ＮＧ', '/features/ng-and-mute.html#'],
    ['上書き 解除', '/customization/settings.html#']
    ,['ポータブル', '/getting-started/install.html#']
    ,['スレッド 作成', '/basics/posting.html#']
    ,['バックアップ', '/troubleshooting/backup.html#']
    ,['保存ログ', '/features/log-search.html#']
  ]) {
    await page.getByRole('button', { name: 'マニュアルを検索', exact: true }).click()
    await page.locator('#localsearch-input').fill(query)
    await expect(page.locator(`a.result[href*="${target}"]`).first()).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.locator('#localsearch-input')).not.toBeVisible()
  }
  await page.getByRole('button', { name: 'マニュアルを検索', exact: true }).click()
  await page.locator('#localsearch-input').fill('火星探査機の軌道計算')
  await expect(page.locator('.no-results')).toContainText('該当する説明が見つかりませんでした')
})

test('検索をキーボードで開き、結果を選んで本文へ移動できる', async ({ page }) => {
  await page.goto('./')
  await page.keyboard.press('Control+k')
  await expect(page.locator('#localsearch-input')).toBeFocused()
  await page.keyboard.type('ミュート')
  const result = page.locator('a.result.selected')
  await expect(result).toBeVisible()
  const href = await result.getAttribute('href')
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$'))
  await expect(page.locator('#localsearch-input')).not.toBeVisible()
  expect(await page.locator(decodeURIComponent(new URL(page.url()).hash)).count()).toBe(1)
})

test('通常幅と狭い画面幅で横にはみ出さず、目次と図を読める', async ({ page }) => {
  test.setTimeout(60_000)
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 })
    for (const { url } of manualPages) {
      await page.goto(url)
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)
      expect(overflow, `${url} at ${width}px`).toBe(false)
    }
    await page.goto('customization/settings.html')
    await page.screenshot({ path: `verification-output/settings-${width}.png` })
    await page.goto('getting-started/install.html')
    await page.screenshot({ path: `verification-output/install-${width}.png` })
  }
  await page.getByRole('button', { name: '目次', exact: true }).click()
  await page.locator('.VPSidebar').getByRole('link', { name: 'スレッドを読む', exact: true }).click()
  await expect(page.getByRole('heading', { level: 1, name: /^スレッドを読む/ })).toBeVisible()
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto('./')
  await page.screenshot({ path: 'verification-output/home-1440.png', fullPage: true })
})

test('編集資料と未作成ページを配信せず、404から入口へ戻れる', async ({ page, request }) => {
  for (const url of ['planning/source-map.md', '../planning/source-map.md', 'customization/themes.html']) {
    const response = await request.get(url)
    expect(response.status()).toBe(404)
    expect(await response.text()).not.toContain('M01')
  }
  await page.goto('missing-page.html')
  await expect(page.getByText('ページが見つかりません', { exact: true })).toBeVisible()
  await page.getByRole('link', { name: 'マニュアルの入口へ', exact: true }).click()
  await expect(page).toHaveURL(/\/document_siki\/$/)
})

test('初めての利用から板・閲覧・投稿まで前後の案内で進める', async ({ page }) => {
  await page.goto('./')
  await page.getByRole('link', { name: '初めて使う', exact: true }).click()
  for (const expected of [
    'getting-started/overview.html', 'getting-started/install.html',
    'getting-started/first-launch.html', 'getting-started/screen.html',
    'basics/boards.html', 'basics/threads.html', 'basics/posting.html'
  ]) {
    await expect(page).toHaveURL(new RegExp('/document_siki/' + expected.replaceAll('.', '\\.') + '$'))
    await expect(page.locator('main h1')).toBeVisible()
    if (!expected.endsWith('posting.html')) await page.locator('.pager-link.next').click()
  }
})
