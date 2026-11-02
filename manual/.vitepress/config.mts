import { defineConfig } from 'vitepress'
import { tokenizeJapanese } from './search.mjs'

const base = process.env.MANUAL_BASE_PATH || '/document_siki/'
if (!/^\/(?:[a-zA-Z0-9_-]+\/)*$/.test(base)) {
  throw new Error('MANUAL_BASE_PATH must be / or a slash-delimited path such as /document_siki/')
}

export default defineConfig({
  lang: 'ja-JP',
  title: 'Siki マニュアル',
  description: 'Siki 1.0.0の使い方。スレッドの閲覧、設定の適用範囲、NG・ミュートを目的から調べられます。',
  base,
  cleanUrls: false,
  lastUpdated: false,
  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
    ['meta', { name: 'theme-color', content: '#227bc4' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}images/siki.svg` }]
  ],
  markdown: {
    headers: { level: [2, 3] }
  },
  themeConfig: {
    logo: '/images/siki.svg',
    siteTitle: 'Siki マニュアル',
    nav: [
      { text: '使い方', link: '/basics/threads' },
      { text: '設定', link: '/customization/settings' },
      { text: '公式サイト', link: 'https://sikiapp.net/' }
    ],
    sidebar: [
      { text: 'マニュアル', items: [{ text: 'はじめに', link: '/' }] },
      { text: '基本操作', items: [{ text: 'スレッドを読む', link: '/basics/threads' }] },
      { text: '設定・カスタマイズ', items: [{ text: '設定の探し方と適用範囲', link: '/customization/settings' }] },
      { text: '便利に使う', items: [{ text: 'NG・強調・ミュート・マーク', link: '/features/ng-and-mute' }] }
    ],
    outline: { level: [2, 3], label: 'このページの内容' },
    docFooter: { prev: '前のページ', next: '次のページ' },
    sidebarMenuLabel: '目次',
    returnToTopLabel: '先頭に戻る',
    darkModeSwitchLabel: '表示テーマ',
    lightModeSwitchTitle: '明るい表示にする',
    darkModeSwitchTitle: '暗い表示にする',
    skipToContentLabel: '本文へ移動',
    search: {
      provider: 'local',
      options: {
        disableQueryPersistence: true,
        miniSearch: {
          options: { tokenize: tokenizeJapanese },
          searchOptions: { prefix: true, fuzzy: false, combineWith: 'AND' }
        },
        translations: {
          button: { buttonText: 'マニュアルを検索', buttonAriaLabel: 'マニュアルを検索' },
          modal: {
            displayDetails: '本文の抜粋を表示',
            resetButtonTitle: '検索語を消す',
            backButtonTitle: '検索を閉じる',
            noResultsText: '該当する説明が見つかりませんでした',
            footer: { selectText: '開く', selectKeyAriaLabel: 'Enter', navigateText: '選択', navigateUpKeyAriaLabel: '上矢印', navigateDownKeyAriaLabel: '下矢印', closeText: '閉じる', closeKeyAriaLabel: 'Esc' }
          }
        }
      }
    },
    footer: { message: 'Siki 1.0.0向けマニュアル · 作成中' },
    notFound: {
      code: '404', title: 'ページが見つかりません',
      quote: '目次から目的の説明を探すか、マニュアル内を検索してください。',
      linkLabel: 'マニュアルの入口へ', linkText: 'マニュアルの入口へ'
    }
  }
})
