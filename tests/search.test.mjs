import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import test from 'node:test'
import MarkdownIt from 'markdown-it'
import MiniSearch from 'minisearch'
import { tokenizeJapanese } from '../manual/.vitepress/search.mjs'

const parser = new MarkdownIt()
const documents = await Promise.all([
  ['threads', 'basics/threads.md'],
  ['settings', 'customization/settings.md'],
  ['ng-and-mute', 'features/ng-and-mute.md'],
  ['install', 'getting-started/install.md'],
  ['first-launch', 'getting-started/first-launch.md'],
  ['posting', 'basics/posting.md'],
  ['log-search', 'features/log-search.md'],
  ['backup', 'troubleshooting/backup.md'],
  ['from-previous', 'migration/from-previous.md']
].map(async ([id, file]) => {
  const source = await fs.readFile(new URL(`../manual/${file}`, import.meta.url), 'utf8')
  return { id, text: parser.render(source.replace(/^---[\s\S]*?---/, '')).replace(/<[^>]+>/g, ' ') }
}))
const search = new MiniSearch({ fields: ['text'], tokenize: tokenizeJapanese, searchOptions: { prefix: true, fuzzy: false, combineWith: 'AND' } })
search.addAll(documents)

for (const [query, expected] of [
  ['ミュート', 'ng-and-mute'], ['ﾐｭｰﾄ', 'ng-and-mute'], ['ミュー', 'ng-and-mute'],
  ['共通設定', 'settings'], ['上書き 解除', 'settings'], ['既読', 'threads'],
  ['返信 ツリー', 'threads'], ['ＮＧ', 'ng-and-mute'],
  ['ポータブル', 'install'], ['初期設定', 'first-launch'], ['sage', 'posting'],
  ['保存ログ', 'log-search'], ['復元', 'backup'], ['SQLite', 'from-previous']
]) {
  test(`「${query}」で${expected}を探せる`, () => {
    assert.ok(search.search(query).some(result => result.id === expected))
  })
}

test('無関係な語を結果に混ぜない', () => {
  assert.equal(search.search('火星探査機の軌道計算').length, 0)
})

test('ブラウザへシリアライズされた関数でも同じ索引を検索できる', () => {
  const browserTokenizer = new Function(`return (${tokenizeJapanese.toString()})`)()
  const restored = MiniSearch.loadJSON(JSON.stringify(search), {
    fields: ['text'], tokenize: browserTokenizer,
    searchOptions: { prefix: true, fuzzy: false, combineWith: 'AND' }
  })
  assert.ok(restored.search('ﾐｭｰﾄ').some(result => result.id === 'ng-and-mute'))
})
