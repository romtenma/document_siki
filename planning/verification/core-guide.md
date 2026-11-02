# 先行原稿の確認記録

対象版：1.0.0。調査日：2026-11-02。状態：`checking`。アプリ側の照合対象は0.99.25の実装・既存資料です。正式版の全手順を確認した記録ではありません。

## 実機で確認した範囲

WindowsでSiki-devを作業用データフォルダーへ別起動しました。通常利用のプロファイルや開いているタブは変更していません。初回起動中のウィンドウタイトルは `Siki` で、実行元はプロジェクトの `node_modules/electron/dist/electron.exe`、データは指定した作業用フォルダーであることを確認しました。

- 初回案内の、ようこそ・レイアウト・カラー・スケーリング・完了の各画面。
- 案内を閉じた後のURL入力欄、板一覧・BBSMenu・履歴などの画面。
- 一般設定の音声出力ボリュームの変更と `user.js` への保存。
- 名前と本文の条件を指定したNGルールの作成、「保存」での一覧への追加、`filters.db` への保存。

初回の設定値は基準テーマ1種類で確認し、別テーマとの外観比較は行っていません。

## 新規原稿の状態

| 原稿 | 確認した根拠・範囲 | 残る確認 |
| --- | --- | --- |
| `getting-started/overview.md` | 基本概念・既存の公式説明 | 各説明との整合を継続確認 |
| `getting-started/install.md` | 現行の配布設定・更新処理・原稿 | 各OSの導入、更新の実行 |
| `getting-started/first-launch.md` | 作業用プロファイルで案内を完了 | 設定値を変更する各分岐、1.0.0 |
| `getting-started/screen.md` | 空の環境と通常の画面、レイアウト定義 | 各領域の表示切り替え・保存 |
| `basics/boards.md` | 板・BBSMenu・メニューの説明と定義 | 外部板の登録・並び替えの一連の操作 |
| `basics/posting.md` | 投稿欄・ボタン・メニュー・待機処理 | 外部サイトへの投稿・認証・スレッド作成は未実行 |
| `basics/search.md` | 検索欄、方式、キー処理の実装 | 取得したスレッド上での各方式・移動 |
| `basics/media.md` | 新しい画像ビューアの操作定義 | 実画像の取得・保存・動画再生 |
| `basics/tabs.md` | タブの閉じる・復元・ロックの定義 | 保存・復元とワークスペース間の移動 |
| `features/bookmarks.md` | 旧原稿・メニュー・保存処理 | 新規登録・整理・解除 |
| `features/log-search.md` | 条件、比較、期間、表示先の実装 | 作業用ログを使った実検索と再起動後の復元 |
| `customization/layout.md` | 現行の操作・保存仕様と既存原稿 | 配置の変更・共通と独自の切り替え |
| `troubleshooting/index.md` | 症状ごとに新しい原稿へ案内 | 実際の障害事例での見直し |
| `troubleshooting/display.md` | 個別設定・フィルター・移行仕様 | 症状の再現と復旧 |
| `troubleshooting/network.md` | 閲覧と接続・対応方式の区別 | サイト別の接続・認証エラー再現 |
| `troubleshooting/posting.md` | 投稿待機・エラーの扱い | 外部サイトへの投稿は未実行 |
| `troubleshooting/media.md` | 取得と非表示、ビューアの対象の区別 | 実際のメディアの失敗と再試行 |
| `troubleshooting/updates.md` | 配布形式別の更新実装 | 新版のダウンロード・インストール |
| `troubleshooting/backup.md` | ZIPの対象・全体コピーの区別、バックアップ実装 | ZIP作成と復元の一連の操作 |
| `migration/from-previous.md` | 変更点資料と新しい保存・更新方式 | 旧版データからの移行と旧版への復旧 |
| `reference/data-locations.md` | 初期化処理と作業用プロファイルの生成ファイル | 他OS・別保存先・ポータブル実機 |
| `reference/supported-sites.md` | 内蔵対応の代表例と制限 | サイト別・機能別の接続確認。網羅表は後工程 |

既存3ページの記録は [threads.md](threads.md)、[settings.md](settings.md)、[ng-and-mute.md](ng-and-mute.md)を参照してください。ページが掲載されたことを、全操作や外部接続の確認済みという意味には扱いません。
