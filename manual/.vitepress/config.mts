import { defineConfig } from 'vitepress'
import { tokenizeJapanese } from './search.mjs'

const base = process.env.MANUAL_BASE_PATH || '/document_siki/'
if (!/^\/(?:[a-zA-Z0-9_-]+\/)*$/.test(base)) {
  throw new Error('MANUAL_BASE_PATH must be / or a slash-delimited path such as /document_siki/')
}

export default defineConfig({
  lang: 'ja-JP',
  title: 'Siki マニュアル',
  description: 'Siki 1.0.0の使い方。導入から閲覧・投稿・検索、設定、バックアップと旧版からの移行まで、目的から調べられます。',
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
      { text: 'はじめる', link: '/getting-started/overview' },
      { text: '基本操作', link: '/basics/threads' },
      { text: '設定', link: '/customization/settings' },
      { text: '困ったとき', link: '/troubleshooting/' },
      { text: '公式サイト', link: 'https://sikiapp.net/' }
    ],
    sidebar: [
      {
        "text": "マニュアル",
        "items": [
          {
            "text": "はじめに",
            "link": "/"
          }
        ]
      },
      {
        "text": "はじめに",
        "items": [
          {
            "text": "Sikiとは・基本用語",
            "link": "/getting-started/overview"
          },
          {
            "text": "インストールと更新",
            "link": "/getting-started/install"
          },
          {
            "text": "初回起動",
            "link": "/getting-started/first-launch"
          },
          {
            "text": "画面の見方",
            "link": "/getting-started/screen"
          }
        ]
      },
      {
        "text": "基本操作",
        "items": [
          {
            "text": "板を開く・スレッドを探す",
            "link": "/basics/boards"
          },
          {
            "text": "スレッドを読む",
            "link": "/basics/threads"
          },
          {
            "text": "書き込む・スレッドを作る",
            "link": "/basics/posting"
          },
          {
            "text": "板・スレッド内を検索する",
            "link": "/basics/search"
          },
          {
            "text": "画像・動画を見る",
            "link": "/basics/media"
          },
          {
            "text": "タブを管理する",
            "link": "/basics/tabs"
          }
        ]
      },
      {
        "text": "便利に使う",
        "items": [
          {
            "text": "お気に入り",
            "link": "/features/bookmarks"
          },
          {
            "text": "NG・強調・ミュート・マーク",
            "link": "/features/ng-and-mute"
          },
          {
            "text": "保存ログ検索",
            "link": "/features/log-search"
          }
        ]
      },
      {
        "text": "設定・カスタマイズ",
        "items": [
          {
            "text": "設定の探し方と適用範囲",
            "link": "/customization/settings"
          },
          {
            "text": "レイアウト",
            "link": "/customization/layout"
          }
        ]
      },
      {
        "text": "困ったとき",
        "items": [
          {
            "text": "困ったときの入口",
            "link": "/troubleshooting/"
          },
          {
            "text": "表示・配置・動作が変",
            "link": "/troubleshooting/display"
          },
          {
            "text": "板・スレッドを取得できない",
            "link": "/troubleshooting/network"
          },
          {
            "text": "書き込めない",
            "link": "/troubleshooting/posting"
          },
          {
            "text": "画像・動画が表示されない",
            "link": "/troubleshooting/media"
          },
          {
            "text": "更新できない",
            "link": "/troubleshooting/updates"
          },
          {
            "text": "バックアップと復元",
            "link": "/troubleshooting/backup"
          }
        ]
      },
      {
        "text": "移行・リファレンス",
        "items": [
          {
            "text": "旧バージョンから1.0.0へ",
            "link": "/migration/from-previous"
          },
          {
            "text": "保存先とファイル構成",
            "link": "/reference/data-locations"
          },
          {
            "text": "対応サイトと制限",
            "link": "/reference/supported-sites"
          }
        ]
      }
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
