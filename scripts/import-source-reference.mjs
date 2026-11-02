import fs from 'node:fs/promises'
import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { createHash } from 'node:crypto'

// Optional editorial import. Normal validation/build never reads the app checkout.
const root = fileURLToPath(new URL('../', import.meta.url))
const source = path.resolve(process.argv[2] || path.join(root, '../Siki'))
const requireSource = createRequire(path.join(source, 'package.json'))
const { parse } = requireSource('@babel/parser')
const inputs = {}
async function ast(relative) {
  const text = await fs.readFile(path.join(source, relative), 'utf8')
  inputs[relative] = createHash('sha256').update(text).digest('hex')
  return parse(text, { sourceType: 'module', plugins: ['typescript', 'jsx'] })
}
function walk(node, visit) {
  if (!node || typeof node !== 'object') return
  visit(node)
  for (const [key, value] of Object.entries(node)) {
    if (key === 'loc' || key === 'extra') continue
    if (Array.isArray(value)) value.forEach(child => walk(child, visit))
    else walk(value, visit)
  }
}
const name = node => node?.name ?? node?.value
const property = (node, key) => node?.properties?.find(p => p.type === 'ObjectProperty' && name(p.key) === key)?.value
function variables(tree) {
  const found = {}
  walk(tree, node => { if (node.type === 'VariableDeclarator' && node.id.type === 'Identifier') found[node.id.name] = node.init })
  return found
}
// Read literals only. Never import/evaluate the app or execute a default expression.
function literal(node) {
  if (!node) return undefined
  if (['StringLiteral', 'NumericLiteral', 'BooleanLiteral'].includes(node.type)) return node.value
  if (node.type === 'NullLiteral') return null
  if (node.type === 'UnaryExpression' && node.operator === '-' && node.argument.type === 'NumericLiteral') return -node.argument.value
  if (node.type === 'ArrayExpression') {
    const values = node.elements.map(literal)
    return values.every(value => value !== undefined) ? values : undefined
  }
  return undefined
}
function object(node) {
  if (node?.type === 'ObjectExpression') return Object.fromEntries(node.properties.filter(p => p.type === 'ObjectProperty').map(p => [name(p.key), object(p.value)]))
  if (node?.type === 'ArrayExpression') return node.elements.map(object)
  return literal(node)
}
const cell = value => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('|', '&#124;').replaceAll('`', '&#96;').replace(/\r?\n/g, '<br>')
const code = value => '`' + cell(value) + '`'
const categories = {
  system: 'システム', search: '検索', sidepanel: 'サイドパネル', thread: 'スレッド', board: '板',
  tab: 'タブ', res: 'レス', post: '書き込み', image: '画像', viewer: 'ビューア',
  favorite: 'お気に入り・同期', workspace: 'ワークスペース', layout: 'レイアウト',
  copy: 'コピー', window: 'ウィンドウ', browser: 'ブラウザ', url: 'URL',
  '-': '分類未指定', dataviewer: 'データビューア', stackviewer: 'スタック型画像ビューア',
  request: 'URL・タブを開く', usercommandedit: 'コマンド編集', postform: '書き込み欄',
  setting: '設定画面', scroll: 'スクロール', popup: 'ポップアップ',
  'image,viewer': '画像・ビューア', popupviewer: '画像ポップアップ', unique: '対象限定の操作'
}
const commandTree = variables(await ast('src/js/render/constants/commandDetails.ts')).details
if (commandTree?.type !== 'ObjectExpression' || commandTree.properties.some(p => p.type !== 'ObjectProperty' || p.computed)) {
  throw new Error('Command definition structure changed: review importer before updating')
}
const commands = commandTree.properties.filter(p => p.type === 'ObjectProperty').map(p => ({
  id: name(p.key), label: literal(property(p.value, 'label')),
  category: literal(property(p.value, 'category')) || 'other',
  params: literal(property(p.value, 'userparams')), dynamic: !!property(p.value, 'f')
}))
if (commands.some(c => typeof c.id !== 'string' || typeof c.label !== 'string')) throw new Error('Nonliteral command: review importer before updating')
if (new Set(commands.map(c => c.id)).size !== commands.length) throw new Error('Duplicate command ID')
let commandPage = `---
title: コマンド一覧
description: コマンドの表示名とIDを分類別に調べ、パラメーターや実行対象を確認する方法を説明します。
---

# コマンド一覧

キー、ジェスチャー、パネル、ユーザーコマンドの割り当てで使う操作を調べるための一覧です。名前から探す場合はマニュアル検索も利用できます。

## 一覧の読み方 {#reading}

表示名は基本の名称です。実際のメニューでは対象や状態に応じて名前が変わったり、実行できなかったりします。「動的」は対象・状態に応じた定義を持つ印です。「動的」のない操作も、常に実行可能という意味ではありません。

IDは割り当て先を識別する名前です。末尾が似ていても、対象のレス、カーソル、複数選択などが異なります。割り当てる画面で説明とパラメーターを確認してください。

引数の列は、定義に数値で記載されたユーザーパラメーター数だけを示します。「—」は引数不要の断定ではありません。この一覧は引数の型・順序・自動補完される対象までを定義するAPI仕様ではありません。

[ユーザーコマンド](../customization/user-commands.md)で追加した操作やプラグインなどの実行時の追加は含みません。下表は準備版の定義から抽出した${commands.length}件で、1.0.0正式版との照合はこれからです。横長の表は左右へスクロールして読めます。

`
for (const category of [...new Set(commands.map(c => c.category))]) {
  commandPage += `## ${cell(categories[category] || (category === 'other' ? 'その他・対象限定の操作' : category))} {#commands-${category.replace(/[^a-z0-9-]/gi, '-')}}\n\n| 表示名 | コマンドID | 引数 | 状態依存 |\n| --- | --- | --- | --- |\n`
  for (const c of commands.filter(c => c.category === category)) commandPage += `| ${cell(c.label)} | ${code(c.id)} | ${typeof c.params === 'number' ? c.params : '—'} | ${c.dynamic ? '動的' : '—'} |\n`
  commandPage += '\n'
}

const definitions = variables(await ast('src/js/common/settingsContents2.tsx'))
const preferenceTree = variables(await ast('src/js/common/sitePreferences.ts'))
const groups = object(preferenceTree.preferenceGroups)
const labels = object(preferenceTree.preferenceLabels)
const sectionData = {}
let hidden = 0
for (const [key, value] of Object.entries(definitions)) {
  if (!key.endsWith('Settings') || value?.type !== 'ArrayExpression') continue
  sectionData[key] = value.elements.map(section => ({ sub: literal(property(section, 'sub')), items: (property(section, 'sets')?.elements || []).flatMap(item => {
    if (item.type !== 'ObjectExpression') return []
    if (property(item, 'nop')) { hidden++; return [] }
    const id = literal(property(item, 'setid'))
    if (!id || id.startsWith('_') || ['button', 'event', 'message', 'padding'].includes(literal(property(item, 'formType')))) return []
    return [{ id, title: literal(property(item, 'description')) || literal(property(item, 'title')), type: literal(property(item, 'formType')), initial: literal(property(item, 'formDefault')), hasInitial: !!property(item, 'formDefault'), advanced: literal(property(item, 'advanced')), reboot: literal(property(item, 'needReboot')) }]
  }) }))
}
const scoped = sectionData.siteeditSettings.flatMap(s => s.items)
const sections = [
  ['common', 'システム', 'commonSettings'], ['layout', 'レイアウト', 'layoutSettings'], ['focus', '集中モード', 'focusSettings'],
  ['network', 'ネットワーク', 'networkSettings'], ['mouse', 'マウス', 'mouseSettings'], ['keyboard', 'キーボード', 'keyboardSettings'],
  ['tab', 'タブ', 'tabSettings'], ['board', '板', 'boardSettings'], ['thread', 'スレッド', 'threadSettings'],
  ['post', '書き込み', 'postSettings'], ['bbsmenu', 'BBSMenu', 'bbsmenuSettings'], ['notify', '通知', 'notifySettings'],
  ['image', '画像/映像', 'imageSettings'], ['translate', '翻訳', 'translateSettings'], ['resstate', 'NG/強調', 'resstateSettings'],
  ['edittheme', 'テーマ編集', 'editThemeSettings'], ['workspace', 'ワークスペース', 'workspaceSettings']
]
let settingsPage = `---
title: 設定リファレンス
description: 設定項目の説明・保存用ID・入力形式・定義上の初期値と、共通・サイト・板・ワークスペースの適用範囲を調べます。
---

# 設定リファレンス

設定の場所が分からない場合は、まず[設定の探し方と適用範囲](../customization/settings.md)を参照してください。この一覧は設定項目の検索と照合に使います。

## 値と範囲の読み方 {#reading}

「入力欄の初期値」は画面定義に直接書かれた値です。インストール後の保存値、サイトの標準値、継承・移行済みの現在値とは一致しない場合があります。数値の選択肢やフラグの意味は設定画面で確認してください。

空文字は空欄、true／falseはオン／オフです。「式による」は値が計算式や他の定義に依存し、「指定なし」はこの項目に初期値の記載がないことを示します。どちらも既定値を推測していません。

IDに含まれる \`siteedit.*.{id}\` は共通・サイト・板・スレッドで継承する設定です。一覧では通常の分類へまとめています。\`render.workspace.{id}\` はワークスペース、\`theme\` を含む項目はテーマなど、ほかのIDの範囲も項目によって異なります。すべてをサイト・板ごとに変えられるわけではありません。

独立した編集画面の[AI](../features/ai.md)、[NGルール](../features/ng-and-mute.md)、[レススキン](../customization/response-skins.md)、[ユーザーコマンド](../customization/user-commands.md)、[プラグイン](../customization/plugins.md)などの内部項目は一覧外です。非表示条件付きの項目や、計算で追加する選択肢も含めて完全な全設定一覧ではありません。

下表は準備版の画面定義から抽出しています。正式版の値と動作確認はこれからです。横長の表は左右へスクロールして読めます。

`
let settingsCount = 0
for (const [mode, title, key] of sections) {
  const rows = []
  for (const group of groups.filter(g => g.mode === mode)) {
    for (const key of group.keys) {
      const item = scoped.find(i => i.id.endsWith('.{id}.' + key))
      // Explicitly hidden/debug-only items are intentionally absent.
      if (item) rows.push({ ...item, title: labels[key] || item.title, sub: group.sub })
    }
  }
  for (const section of sectionData[key] || []) rows.push(...section.items.map(i => ({ ...i, sub: section.sub })))
  if (!rows.length) continue
  settingsPage += `## ${title} {#settings-${mode}}\n\n| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |\n| --- | --- | --- | --- | --- |\n`
  for (const item of rows) {
    const initial = item.initial === undefined ? (item.hasInitial ? '式による' : '指定なし') : code(JSON.stringify(item.initial))
    const notes = [item.sub, item.advanced ? '上級設定' : '', item.reboot ? '再起動が必要' : ''].filter(Boolean).map(cell).join('／')
    settingsPage += `| ${cell(item.title || item.id)} | ${code(item.id)} | ${cell(item.type)} | ${initial} | ${notes} |\n`
  }
  settingsCount += rows.length
  settingsPage += '\n'
}
const packageJson = JSON.parse(await fs.readFile(path.join(source, 'package.json'), 'utf8'))
const snapshot = { sourceVersion: packageJson.version, inputs, commands: commands.length, settings: settingsCount, omittedConditionalSettings: hidden,
  policy: 'AST literal metadata only; no app evaluation; no runtime extensions; formDefault is not effective default; formal 1.0.0 verification pending' }
await fs.writeFile(path.join(root, 'manual/reference/commands.md'), commandPage)
await fs.writeFile(path.join(root, 'manual/reference/settings.md'), settingsPage)
await fs.writeFile(path.join(root, 'planning/reference-snapshot.json'), JSON.stringify(snapshot, null, 2) + '\n')
console.log(`Imported ${commands.length} commands and ${settingsCount} setting entries from ${packageJson.version}. Review Markdown changes before publication.`)
