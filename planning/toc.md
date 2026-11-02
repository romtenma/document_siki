# 目次案

作成日：2026-11-02。以下はページ候補です。パスはリポジトリルートからの配置案で、公開URLは生成基盤と公開先の確定後に決めます。存在しないページへのリンクは作っていません。

同日に[スレッドを読む](../manual/basics/threads.md)、[設定の探し方と適用範囲](../manual/customization/settings.md)、[NG・強調・ミュート・マーク](../manual/features/ng-and-mute.md)を試作しました。その後、導入・基本操作・主要機能・対処・移行の先行原稿を追加しました。その後の機能別・カスタマイズ整備により、以下の全50候補に本文を用意しました。現在の掲載範囲は [詳細原稿の整備結果](detail-guide-results.md) を参照してください。掲載済みのページも、1.0.0の動作確認はこれからです。

「先行」は導入から普段の操作まで通して読める状態にするための執筆順、「次」は機能別の説明、「専門」は詳細なカスタマイズ・参照資料を示します。初版から外す指定ではありません。重複する説明は執筆時に統合し、保留事項は対応表で管理します。

## 最初の導線

初めて使う人には「Sikiとは → インストールと更新 → 初回起動 → 画面の見方 → 板を開く → スレッドを読む → 書き込む」を案内します。トップにはこの導線と、検索・目的別の入口、旧版からの移行案内を置きます。

| ページ候補 | パス | 読者ができるようになること | 順 |
| --- | --- | --- | --- |
| マニュアルの入口 | `manual/index.md` | 基本操作・目的別の説明・移行ガイドへ進む | 先行 |
| Sikiとは・基本用語 | `manual/getting-started/overview.md` | 板、スレッド、レスとSikiの役割を理解する | 先行 |
| インストールと更新 | `manual/getting-started/install.md` | OSと配布形式を選び、導入・更新する | 先行 |
| 初回起動 | `manual/getting-started/first-launch.md` | 初期設定を済ませて最初の板を開く | 先行 |
| 画面の見方 | `manual/getting-started/screen.md` | メニュー、タブ、パネルの役割を把握する | 先行 |

## 基本操作

| ページ候補 | パス | 読者ができるようになること | 順 |
| --- | --- | --- | --- |
| 板を開く・スレッドを探す | `manual/basics/boards.md` | 板の登録、更新、並び替えを行う | 先行 |
| スレッドを読む | `manual/basics/threads.md` | 更新、既読・未読、新着、返信ツリーを使う | 先行 |
| 書き込む・スレッドを作る | `manual/basics/posting.md` | 投稿、返信、新規・継続スレッド作成を行う | 先行 |
| 板・スレッド内を検索する | `manual/basics/search.md` | 表示中の内容を検索し、結果間を移動する | 先行 |
| 画像・動画を見る | `manual/basics/media.md` | ポップアップとビューア、一覧表示・保存を使う | 先行 |
| タブを管理する | `manual/basics/tabs.md` | 開く、切り替える、閉じる、復元する | 先行 |

## 便利に使う

| ページ候補 | パス | 読者ができるようになること | 順 |
| --- | --- | --- | --- |
| お気に入り | `manual/features/bookmarks.md` | 登録・整理・巡回の入口を使う | 先行 |
| ワークスペース | `manual/features/workspaces.md` | 用途ごとにタブや配置を使い分ける | 次 |
| NG・強調・ミュート・マーク | `manual/features/ng-and-mute.md` | 条件と一時的な指定を使い分け、解除する | 先行 |
| フィルターとミニマップ | `manual/features/filters-and-minimap.md` | 表示を絞り込み、レス位置へ移動する | 次 |
| 保存ログ検索 | `manual/features/log-search.md` | 保存済みレスを条件・期間・範囲で探す | 先行 |
| 自動更新と実況 | `manual/features/live.md` | 更新・スクロール・動画上のコメント表示を使う | 次 |
| 画像のアップロード・編集 | `manual/features/uploads.md` | 画像を用意して投稿し、履歴を確認する | 次 |
| ローカル板 | `manual/features/local-boards.md` | ローカルスレッドへ内容を保存・整理する | 次 |
| ブラウザビュー | `manual/features/browser.md` | 内蔵ページの表示、固定、外部ブラウザとの使い分けを行う | 次 |
| AIサイドパネル | `manual/features/ai.md` | 接続設定、要約、質問、参照レスの確認を行う | 次 |
| 同期 | `manual/features/sync.md` | 対応サービス、同期対象、手動・自動の使い方を把握する | 次 |
| コマンドパレット | `manual/features/command-palette.md` | 板・スレッド・コマンドを探して開く | 次 |

## 設定・カスタマイズ

| ページ候補 | パス | 読者ができるようになること | 順 |
| --- | --- | --- | --- |
| 設定の探し方と適用範囲 | `manual/customization/settings.md` | 共通・サイト・板・タブの設定と継承を使い分ける | 先行 |
| レイアウト | `manual/customization/layout.md` | 並び・単体表示・パネルの配置を変更する | 先行 |
| テーマ・配色・背景 | `manual/customization/themes.md` | アプリ全体の見た目を調整する | 次 |
| レススキン | `manual/customization/response-skins.md` | 文字・余白・部品配置を編集して適用する | 次 |
| キーボードショートカット | `manual/customization/keyboard.md` | 対象エリアと競合を確認し、割り当てを変更する | 次 |
| マウスジェスチャー | `manual/customization/mouse.md` | 対象エリアごとに方向と操作を割り当てる | 次 |
| ホイールジェスチャー | `manual/customization/wheel.md` | 組み合わせと操作を確認し、割り当てを変更する | 次 |
| クリック・ドラッグ・パネルの操作 | `manual/customization/actions.md` | クイック操作やパネルアクションを調整する | 専門 |
| ユーザーコマンド | `manual/customization/user-commands.md` | コマンドを登録し、適用対象・実行条件を指定する | 専門 |
| プラグインを使う | `manual/customization/plugins.md` | 導入、有効・無効、設定、取り外しを行う | 専門 |
| カスタムCSS | `manual/customization/css.md` | 適用範囲を理解して表示を調整・復元する | 専門 |

## 困ったとき

| ページ候補 | パス | 読者ができるようになること | 順 |
| --- | --- | --- | --- |
| 困ったときの入口 | `manual/troubleshooting/index.md` | 症状から確認手順へ進み、必要な情報を集める | 先行 |
| 表示・配置・動作が変 | `manual/troubleshooting/display.md` | 表示設定、テーマ、個別指定を確認する | 先行 |
| 書き込めない | `manual/troubleshooting/posting.md` | 投稿エラーや認証、待機状態の原因を切り分ける | 先行 |
| 板・スレッドを取得できない | `manual/troubleshooting/network.md` | サイト対応、通信、認証、URLを確認する | 先行 |
| 画像・動画が表示されない | `manual/troubleshooting/media.md` | 取得失敗、ぼかし、NG、形式の違いを確認する | 次 |
| 更新できない | `manual/troubleshooting/updates.md` | 配布形式と更新方式を確認して対処する | 先行 |
| バックアップと復元 | `manual/troubleshooting/backup.md` | 設定とデータを区別して保管・復元する | 先行 |

## 移行ガイド

| ページ候補 | パス | 読者ができるようになること | 順 |
| --- | --- | --- | --- |
| 旧バージョンから1.0.0へ | `manual/migration/from-previous.md` | 互換性、設定し直す項目、廃止機能を確認する | 先行 |
| 別のPC・OSへの移行 | `manual/migration/move-data.md` | 移行対象と環境差を確認してデータを引き継ぐ | 次 |

## リファレンス

| ページ候補 | パス | 読者ができるようになること | 順 |
| --- | --- | --- | --- |
| 対応サイトと制限 | `manual/reference/supported-sites.md` | 閲覧・投稿・認証の対応範囲を調べる | 先行 |
| 保存先とファイル構成 | `manual/reference/data-locations.md` | 通常・ポータブルの保存先とデータの役割を調べる | 先行 |
| 起動オプション・ポータブルモード | `manual/reference/command-line.md` | 起動引数、設定ファイル、モードの条件を調べる | 専門 |
| コマンド一覧 | `manual/reference/commands.md` | 操作の意味、対象、パラメーターを調べる | 専門 |
| 設定リファレンス | `manual/reference/settings.md` | 項目の意味、既定値、適用範囲を調べる | 専門 |
| 外部ツールとの連携 | `manual/reference/external-integration.md` | 入出力・変換・外部サービスの利用条件を調べる | 専門 |
| 画像URLの補正 | `manual/reference/media-url-rules.md` | ImageViewURLReplaceの対応範囲と書式を調べる | 専門 |

設定・コマンド一覧は静的な画面定義・表示用メタデータから生成しました。抽出範囲と制約は[詳細原稿の整備結果](detail-guide-results.md)を参照してください。意味・引数・実際の既定値や適用範囲の確認は引き続き行います。機能や外部連携の最終的な掲載範囲は、1.0.0での提供状況を確認して調整します。

## 開発支援（2026-11-03追加）

当初の50ページに加え、追加依頼により次のページを掲載しました。上部メニュー・サイドバー・トップページから案内します。

| ページ | パス | 読者ができること |
| --- | --- | --- |
| [寄付・開発支援](../manual/donate.md) | `manual/donate.md` | Ko-fi・Amazonギフト券・Bitcoinによる支援方法を確認する |
