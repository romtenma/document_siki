import { test, expect } from '@playwright/test'

test('サブパスから各ページを直接開き、画像と関連リンクをたどれる', async ({ page }) => {
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`) })
  for (const [url, heading] of [
    ['basics/threads.html', 'スレッドを読む'],
    ['customization/settings.html', '設定の探し方と適用範囲'],
    ['features/ng-and-mute.html', 'NG・強調・ミュート・マーク']
  ]) {
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
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 })
    for (const url of ['./', 'basics/threads.html', 'customization/settings.html', 'features/ng-and-mute.html']) {
      await page.goto(url)
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)
      expect(overflow, `${url} at ${width}px`).toBe(false)
    }
    await page.goto('customization/settings.html')
    await page.screenshot({ path: `verification-output/settings-${width}.png` })
  }
  await page.getByRole('button', { name: '目次', exact: true }).click()
  await page.locator('.VPSidebar').getByRole('link', { name: 'スレッドを読む', exact: true }).click()
  await expect(page.getByRole('heading', { level: 1, name: /^スレッドを読む/ })).toBeVisible()
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto('./')
  await page.screenshot({ path: 'verification-output/home-1440.png', fullPage: true })
})

test('編集資料と未作成ページを配信せず、404から入口へ戻れる', async ({ page, request }) => {
  for (const url of ['planning/source-map.md', '../planning/source-map.md', 'getting-started/install.html']) {
    const response = await request.get(url)
    expect(response.status()).toBe(404)
    expect(await response.text()).not.toContain('M01')
  }
  await page.goto('missing-page.html')
  await expect(page.getByText('ページが見つかりません', { exact: true })).toBeVisible()
  await page.getByRole('link', { name: 'マニュアルの入口へ', exact: true }).click()
  await expect(page).toHaveURL(/\/document_siki\/$/)
})
