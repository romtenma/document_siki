# 既存資料との対応表

調査日：2026-11-02。新版の行き先は[目次案](toc.md)の配置案です。以下の対応付けは編集上の初期判断であり、個々の機能を1.0.0で検証した結果ではありません。

同日の次工程で、スレッド閲覧・設定の適用範囲・NG/ミュートの代表3ページを試作しました。以降の確認状況は [verification/](verification/) に記録します。この表の初期判断を、操作の検証済みという意味には更新しません。

## 調査基準と見方

| 資料群 | 確認範囲 | 現時点で言えること |
| --- | --- | --- |
| M：旧公式資料 | `../siki-manual/docs/` のMarkdown全47ファイル、目次、主要ページの内容 | ファイルの存在と新版の配置候補を確認。本文と仕様の全面照合はこれから |
| D：アプリ側原稿 | `../Siki/docs/manual/` のMarkdown全11ファイル、目次、主要原稿 | 下書きの存在と対象機能を確認。移植前に操作と名称を再確認する |
| W：非公式Wiki | MenuBar、FrontPage、初期設定、FAQ、データ移行、NG機能の確認と、メニューからの候補抽出 | 主な入口を把握。未精読の項目は以下に明記。全ページ・添付画像の棚卸しではない |
| N：新仕様の確認先 | 0.99.xの変更点、0.99.24・0.99.25等のリリースノート、関連実装の所在 | 不足する説明と確認先を抽出。試作3ページの画面構成・名称等を一部実機確認。保存・反映等は未確認 |

確認時のアプリは0.99.25です。旧公式資料の `changes-0.99.md` は0.99.21までを対象としており、それ以降の変更は別途照合します。両参照リポジトリには未コミットの変更もあるため、この表は作業コピーの観測結果です。

| 初期判断 | 意味 |
| --- | --- |
| 書き直し | 対応する旧説明がある。内容・手順・画像を現行仕様に合わせて再構成する |
| 統合 | ほかの資料と合わせて新版ページへまとめる |
| 新規 | 新版でまとまった説明を追加する。確認先はあるが完成原稿ではない |
| 仕様確認待ち | 利用可否・範囲・現行の操作が未確定。確認後に掲載先と扱いを決める |
| 対象外 | 今回のマニュアル移行に含めない。既存側を維持・参照する |
| 廃止候補 | 変更点資料では廃止とされる。最終実装を確認し、通常の操作説明には移さない |

「書き直し」「統合」は既存の文章・画像の転載許可や、現行仕様との一致を意味しません。公開原稿は[編集方針](editorial-policy.md)に従って作成します。

## M：旧公式資料

参照元は `../siki-manual/docs/` です。ファイル名は参照元内の相対パス、新版パスはこのリポジトリルート基準です。

| ID | ファイル | 新版の主な行き先 | 初期判断 | 確認・再構成する点 |
| --- | --- | --- | --- | --- |
| M01 | `bbsmenu.md` | `manual/basics/boards.md` | 書き直し | 板の追加、BBSMenu、サイト設定の入口 |
| M02 | `board.md` | `manual/basics/boards.md` | 書き直し | 一覧、並び替え、更新、優先表示 |
| M03 | `bookmarks.md` | `manual/features/bookmarks.md`、`manual/features/sync.md` | 書き直し | お気に入りの管理と同期の説明を分ける |
| M04 | `changes-0.99.md` | `manual/migration/from-previous.md`、各機能ページ | 統合 | 0.99.21以降との差分。変更理由と通常操作を分ける |
| M05 | `command.md` | `manual/reference/commands.md` | 書き直し | 実行対象、パラメーター、現行コマンドの有無 |
| M06 | `commandpallet.md` | `manual/features/command-palette.md` | 書き直し | 開き方、検索対象、割り当て |
| M07 | `contact.md` | 既存公式ページへのリンク | 対象外 | 困ったときの連絡先は必要な位置から案内する |
| M08 | `createthread.md` | `manual/basics/posting.md` | 統合 | 新規・継続スレッド、サイトごとの制限 |
| M09 | `custom_css.md` | `manual/customization/css.md` | 書き直し | 現行DOM、適用範囲、解除方法 |
| M10 | `donate.md` | 既存公式ページへのリンク | 対象外 | 寄付案内は公式サイト側を維持する |
| M11 | `download.md` | 既存配布案内へのリンク | 対象外 | OS・配布形式の選び方だけ導入ページへ新たに説明する |
| M12 | `faq.md` | `manual/troubleshooting/index.md`、`manual/troubleshooting/display.md`、関連する操作ページ | 統合 | 旧メニュー名と古い回避策を再検証する |
| M13 | `image.md` | `manual/basics/media.md`、`manual/troubleshooting/media.md` | 書き直し | 新しいビューア・一覧・保存・ポップアップ |
| M14 | `imageviewurlreplace.md` | `manual/reference/media-url-rules.md` | 仕様確認待ち | 実装の存在は確認。構文・モード・現行の利用条件を調べる |
| M15 | `index.md` | `manual/getting-started/overview.md` | 統合 | アプリの概念・用語を抽出。公式トップは移さない |
| M16 | `install.md` | `manual/getting-started/install.md` | 書き直し | OS・CPU・配布形式と更新手順、旧ASAR方式の扱い |
| M17 | `kakikomi_conv.md` | `manual/reference/external-integration.md` | 仕様確認待ち | 変換対象・出力形式とツールの提供場所 |
| M18 | `keymapping.md` | `manual/customization/keyboard.md`、`manual/reference/commands.md` | 書き直し | 新エディター、対象エリア、競合、既定割り当て |
| M19 | `layout.md` | `manual/customization/layout.md` | 書き直し | ヘッダの操作、単体・並列、配置交換、ワークスペース |
| M20 | `license.md` | 既存公式ページへのリンク | 対象外 | マニュアル自体の利用条件は別途整備する |
| M21 | `linkclick.md` | `manual/customization/actions.md` | 仕様確認待ち | 現行のクリック操作設定の所在と対象 |
| M22 | `manual.md` | `manual/index.md`、`manual/getting-started/screen.md` | 統合 | 旧入口・画像を再利用せず、新しい導線に再構成する |
| M23 | `mark.md` | `manual/features/ng-and-mute.md` | 書き直し | マーク・ミュート・NGの違い、期限、解除、保存範囲 |
| M24 | `mousegesture.md` | `manual/customization/mouse.md` | 書き直し | 新エディター、ブラウザビュー、エリア、保存・反映 |
| M25 | `ng.md` | `manual/features/ng-and-mute.md` | 書き直し | 条件、範囲、表示効果、管理画面と画像NG |
| M26 | `plugin-development.md` | 開発者資料として別途検討 | 対象外 | 破棄せず台帳に残す。利用手順を先に整備する |
| M27 | `plugins.md` | `manual/customization/plugins.md` | 書き直し | 導入・有効化、配布元、現行の利用条件 |
| M28 | `portable.md` | `manual/getting-started/install.md`、`manual/reference/command-line.md` | 統合 | 保存先、起動条件、通常版との違い、更新手順 |
| M29 | `proxyboard.md` | `manual/migration/from-previous.md` | 廃止候補 | 変更点資料で削除済み。最終実装を確認し移行上の説明に限る |
| M30 | `release-notes-0.1.md` | 既存サイトに残す | 対象外 | 旧版の更新履歴 |
| M31 | `release-notes-beta-latest.md` | 既存サイトに残す | 対象外 | β版最新履歴の配信 |
| M32 | `release-notes-beta.md` | 既存サイトに残す | 対象外 | β版履歴の配信 |
| M33 | `release-notes-latest.md` | 既存サイトに残す | 対象外 | 最新版履歴の配信 |
| M34 | `release-notes.md` | 既存サイトに残す | 対象外 | 履歴の公開、フィード生成との依存関係 |
| M35 | `resskin.md` | `manual/customization/response-skins.md` | 書き直し | 新編集画面、適用対象、管理一覧の確定方法 |
| M36 | `settings.md` | `manual/reference/data-locations.md`、`manual/troubleshooting/backup.md` | 書き直し | 新しい保存形式、保存先、通常・ポータブルの差 |
| M37 | `startup.md` | `manual/reference/command-line.md` | 書き直し | 引数名、ファイル指定、実装とOSごとの条件 |
| M38 | `superdrag.md` | `manual/customization/actions.md` | 仕様確認待ち | クイック操作との関係、現在の設定方法 |
| M39 | `support.md` | `manual/reference/supported-sites.md` | 書き直し | 対応終了サイト、閲覧・投稿・認証の違い |
| M40 | `theme.md` | `manual/customization/themes.md` | 書き直し | 新しい配色・背景のUI、複製、共有と復元 |
| M41 | `thread.md` | `manual/basics/threads.md`、`manual/features/filters-and-minimap.md` | 書き直し | ツリー、既読・新着、ミニマップ、絞り込み |
| M42 | `todo.md` | 既存サイトに残す | 対象外 | 計画を利用可能な機能として扱わない |
| M43 | `upload.md` | `manual/features/uploads.md` | 書き直し | アップロード先、履歴・削除、画像編集、サイト固有手順 |
| M44 | `usercommand.md` | `manual/customization/user-commands.md` | 書き直し | 登録と実行、対象、シェルや外部アプリへの引数 |
| M45 | `wall.md` | `manual/features/local-boards.md` | 書き直し | SQLite移行後の管理、追加・保存・復元 |
| M46 | `wheelgesture.md` | `manual/customization/wheel.md` | 書き直し | 既定操作、設定エリア、競合と保存 |
| M47 | `workspace.md` | `manual/features/workspaces.md` | 書き直し | 共通・独自の配置、タブ、パネル、切り替えと保存 |

## D：アプリ側の原稿

参照元は `../Siki/docs/manual/` です。新版への採用後は、このリポジトリ側で編集を継続します。

| ID | ファイル | 新版の主な行き先 | 初期判断 | 確認・再構成する点 |
| --- | --- | --- | --- | --- |
| D01 | `README.md` | `README.md`、編集方針 | 統合 | 旧siki-manualへ反映する前提を新しい正本・公開方法へ変更する |
| D02 | `index.md` | `manual/index.md` | 書き直し | 初心者だけでなく目的別・詳細説明の入口を設ける |
| D03 | `01_install-and-update.md` | `manual/getting-started/install.md` | 統合 | Windows・Linuxの記述を検証し、macOS等の不足を補う |
| D04 | `02_first-launch.md` | `manual/getting-started/first-launch.md`、`manual/getting-started/screen.md` | 統合 | 初期設定と画面説明を分け、現行画面で確認する |
| D05 | `03_basic-usage.md` | `manual/basics/threads.md`、`manual/basics/tabs.md`、`manual/basics/search.md` | 統合 | 目的別に分け、検索の種類と入口を明記する |
| D06 | `04_posting.md` | `manual/basics/posting.md` | 統合 | 実際の投稿操作、サイト差、待機、エラー時の案内 |
| D07 | `05_media.md` | `manual/basics/media.md`、`manual/features/uploads.md` | 書き直し | 0.99.25のビューア刷新を反映。閲覧と編集を分ける |
| D08 | `06_settings-basics.md` | `manual/customization/settings.md`、`manual/customization/layout.md`、`manual/features/log-search.md` | 統合 | 新しい継承・保存の説明を照合し、詳細を機能別へ分ける |
| D09 | `07_troubleshooting.md` | `manual/troubleshooting/index.md`、各症状ページ | 書き直し | 一般的な助言から、確認できる原因と対処の手順へ具体化する |
| D10 | `08_advanced-overview.md` | `manual/customization/themes.md`、`manual/customization/plugins.md`、関連機能 | 統合 | 概要だけでなく、各機能の入口と操作を整備する |
| D11 | `09_resskin.md` | `manual/customization/response-skins.md` | 統合 | 作成・編集・適用の違い、自動保存と一覧の保存を再確認する |

## W：非公式Wiki

MenuBarから主なページを抽出した候補表です。「入口確認」は構成・主題の確認、「一部精読」は該当ページの一部の内容を読んだ状態です。実装照合や手順の検証済みを意味しません。未精読のページと配下ページは、章の執筆時に確認します。

| ID | 参照ページ | 新版の主な行き先 | 確認状況 | 扱い |
| --- | --- | --- | --- | --- |
| W01 | [FrontPage](https://wikiwiki.jp/siki-app/) | `manual/getting-started/overview.md` | 入口確認 | 利用目的と案内先を確認する |
| W02 | [MenuBar](https://wikiwiki.jp/siki-app/MenuBar) | 目次と棚卸し | 入口確認 | 主なトピックの抽出元。Wiki全体の網羅とはしない |
| W03 | [対応サイト](https://wikiwiki.jp/siki-app/対応サイト) | `manual/reference/supported-sites.md` | 未精読 | サイトごとに現行の閲覧・投稿を確認する |
| W04 | [初期設定](https://wikiwiki.jp/siki-app/初期設定) | `manual/getting-started/first-launch.md`、`manual/getting-started/install.md` | 一部精読 | 初心者が迷う点を抽出し、旧版固有の助言を再検証する |
| W05 | [たまにある質問](https://wikiwiki.jp/siki-app/たまにある質問) | `manual/troubleshooting/index.md`、機能別ページ | 一部精読 | 質問単位で必要な章へ割り振る。配下の未抽出トピックも追跡する |
| W06 | [NG機能](https://wikiwiki.jp/siki-app/NG機能) | `manual/features/ng-and-mute.md` | 一部精読 | NG・ミュートの違いと例を検証。旧設定の入口は引き継がない |
| W07 | [NG機能/Siki Guard](https://wikiwiki.jp/siki-app/NG機能/Siki%20Guard) | `manual/features/ng-and-mute.md` | 未精読 | 自動NGの提供条件・対象を別途確認する |
| W08 | [タブ・ワークスペース・お気に入り](https://wikiwiki.jp/siki-app/たまにある質問/タブ・ワークスペース・お気に入り) | `manual/basics/tabs.md`、`manual/features/workspaces.md`、`manual/features/bookmarks.md` | 未精読 | 用途に分けて統合する |
| W09 | [画像・動画・メディア](https://wikiwiki.jp/siki-app/たまにある質問/画像・動画・メディア) | `manual/basics/media.md`、`manual/features/uploads.md` | 未精読 | 取得・保存・投稿・NGの質問を分ける |
| W10 | [フィルターとミニマップ](https://wikiwiki.jp/siki-app/フィルターとミニマップ) | `manual/features/filters-and-minimap.md` | 未精読 | ツリー表示・未読・新着の対応を確認する |
| W11 | [自動更新と実況](https://wikiwiki.jp/siki-app/自動更新と実況) | `manual/features/live.md` | 未精読 | 更新・スクロールと新しい動画上表示を区別する |
| W12 | [便利な操作](https://wikiwiki.jp/siki-app/便利な操作) | `manual/customization/actions.md`、各割り当てページ | 未精読 | 操作名、対象、既定値と変更方法を確認する |
| W13 | [レイアウト・テーマ・デザイン](https://wikiwiki.jp/siki-app/たまにある質問/レイアウト・テーマ・デザイン) | `manual/customization/layout.md`、`manual/customization/themes.md`、`manual/customization/response-skins.md` | 未精読 | レイアウト・テーマ・スキンを区別して統合する |
| W14 | [パネルアクション](https://wikiwiki.jp/siki-app/パネルアクション) | `manual/customization/actions.md` | 未精読 | 追加・移動・非表示と適用範囲を確認する |
| W15 | [配色のカスタマイズ](https://wikiwiki.jp/siki-app/配色のカスタマイズ) | `manual/customization/themes.md` | 未精読 | 現行UIでの設定を確認する |
| W16 | [カスタムCSS](https://wikiwiki.jp/siki-app/カスタムCSS) | `manual/customization/css.md` | 未精読 | 新しいDOM・メディア要素で例を確認する |
| W17 | [ユーザーコマンド](https://wikiwiki.jp/siki-app/ユーザーコマンド) | `manual/customization/user-commands.md` | 未精読 | 対象・構文と外部ツールへの引数を確認する |
| W18 | [プラグイン](https://wikiwiki.jp/siki-app/プラグイン) | `manual/customization/plugins.md` | 未精読 | 利用者向け手順と開発用資料を分ける |
| W19 | [外部連携](https://wikiwiki.jp/siki-app/外部連携) | `manual/reference/external-integration.md`、`manual/features/sync.md` | 未精読 | 対応継続の有無、提供元、設定を確認する |
| W20 | [特定掲示板対応](https://wikiwiki.jp/siki-app/たまにある質問/特定掲示板対応) | `manual/reference/supported-sites.md`、`manual/troubleshooting/network.md`、`manual/troubleshooting/posting.md` | 未精読 | 一時的な障害と恒常的な利用条件を分ける |
| W21 | [データ移行](https://wikiwiki.jp/siki-app/データ移行) | `manual/migration/move-data.md`、`manual/troubleshooting/backup.md` | 一部精読 | 古い保存構造・手作業を現在の保存形式と照合する |
| W22 | [TIPS](https://wikiwiki.jp/siki-app/TIPS) | 該当する機能別ページ | 未精読 | 内容を棚卸しし、現在も有効な操作だけ採用する |
| W23 | [余所でやってください。対策](https://wikiwiki.jp/siki-app/余所でやってください。対策) | `manual/troubleshooting/posting.md` | 未精読 | 投稿制限への古い回避策を一般手順として転載しない |
| W24 | [Sikiについて](https://wikiwiki.jp/siki-app/たまにある質問/Sikiについて) | `manual/getting-started/overview.md` | 未精読 | 利用に必要な概念を抽出。開発方針を現行の機能と混同しない |

## N：新規説明・仕様差分の確認先

以下は執筆時に照合する根拠の所在です。パスは `../Siki/` からの相対パスです。計画書は調査の入口に使い、実装済み・利用可能の根拠にはしません。

| ID | 主題と新版の行き先 | 確認先 | 初期判断・確認すること |
| --- | --- | --- | --- |
| N01 | 設定の継承：`manual/customization/settings.md` | `src/js/common/sitePreferences.ts`、`src/js/common/settingsContents2.tsx`、`src/js/render/sagas/SitePreferenceSagas.ts` | 書き直し。共通・サイト・板・タブ、保存と反映、解除時の動作 |
| N02 | 配置とワークスペース：`manual/customization/layout.md`、`manual/features/workspaces.md` | `src/js/common/layoutControls.ts`、`src/js/render/library/workspaceLayout.ts`、`docs/Workspace_Layout_Implementation_Plan.md` | 書き直し。単体・並列、共通・独自、コピー・復元、保存対象 |
| N03 | 検索：`manual/basics/search.md`、`manual/features/log-search.md` | `src/js/main/nnc/logsearch/engine.ts`、`src/js/render/containers/LogSearchPanel.tsx`、`docs/Local_Log_Search_Implementation_Plan.md` | 新規。表示中検索とログ検索、条件・表示先・復元の違い |
| N04 | メディア：`manual/basics/media.md`、`manual/features/uploads.md` | `docs/release-notes/0.99.25.md`、`src/js/render/containers/MediaViewerWindow/MediaToolbar.tsx`、`src/js/render/components/MediaListContent.tsx` | 書き直し。0.99.25のビューア、検索・一覧・保存・再試行 |
| N05 | ブラウザビュー：`manual/features/browser.md` | `docs/release-notes/0.99.24.md`、`docs/release-notes/0.99.25.md`、`src/js/render/containers/BrowserPanel.tsx`、`src/js/main/lib/embeddedBrowser.ts` | 新規。認証・投稿の入口、固定・保存、ジェスチャー、外部表示 |
| N06 | AI：`manual/features/ai.md` | `docs/release-notes/0.99.24.md`、`src/js/render/containers/AIThreadPanel.tsx`、`src/js/render/library/aiThreadContext.ts`、`src/js/render/components/SikiContents/AISettingsEdit.tsx` | 新規。接続先・設定、機能別の送信対象、非表示レスの扱い、回答の参照 |
| N07 | 配布・更新：`manual/getting-started/install.md`、`manual/troubleshooting/updates.md` | `src/js/main/nnc/updater.ts`、`src/js/render/containers/UpdateCenter.tsx`、`docs/Software_Update_Procedure.md`、`docs/Linux_Packaging.md` | 書き直し。OS・配布形式・自動と手動の範囲、macOSのDMG化 |
| N08 | 操作割り当て・スキン：`manual/customization/keyboard.md`、`manual/customization/mouse.md`、`manual/customization/response-skins.md` | `docs/release-notes/0.99.24.md`、`docs/release-notes/0.99.25.md`、`src/js/render/components/SikiContents/KeyboardEdit.tsx`、`src/js/render/components/SikiContents/MouseGestureEdit.tsx`、`src/js/render/components/ResSkinEditorPanel.tsx` | 書き直し。刷新後の編集画面、保存、適用、競合・エラーと解除 |
| N09 | NG・ミュート：`manual/features/ng-and-mute.md` | `src/js/common/ngRules.ts`、`src/js/render/components/ng/NGSettings.tsx`、`src/js/main/gpbc/sikiguard.ts`、`docs/NG_UI_REFRESH_PLAN.md` | 書き直し。条件・範囲・表示効果、管理、類似画像NG、自動NGの条件 |
| N10 | 移行・保存：`manual/migration/from-previous.md`、`manual/reference/data-locations.md` | M04、`docs/TAB_COLLECTION_STATE.md`、`docs/Thread_View_State_Persistence_Implementation_Plan.md`、`src/js/main/nnc/usersettings.ts` | 書き直し。SQLite等の移行、互換性、バックアップ対象、旧版へ戻す条件 |
| N11 | 投稿待機：`manual/basics/posting.md`、`manual/troubleshooting/posting.md` | `docs/release-notes/0.99.25.md`、`src/js/common/postWait.ts`、`src/js/render/library/usePostWait.ts` | 新規。待機対象、残り時間、設定範囲、無効化とサイト固有の制限 |
| N12 | 同期・廃止機能：`manual/features/sync.md`、`manual/migration/from-previous.md` | M04、`src/js/main/nnc/sync2chnode.ts`、`src/js/main/nnc/sync.ts` | 仕様確認待ち。Sync2chの利用条件。bbsyncやプロキシボードを計画書だけで利用可能としない |
| N13 | 設定とコマンドの参照：`manual/reference/settings.md`、`manual/reference/commands.md` | `src/js/main/nnc/defaults/settings.default.ts`、`src/js/common/settingsLabels.ts`、`src/js/render/constants/commandDetails.ts`、`src/js/render/constants/commandMap.ts` | 新規。意味・既定値・適用範囲の定義を照合し、自動生成できる範囲と手書きの説明を分ける |

## 執筆時に更新する記録

この表は資料の入口と行き先を管理します。ページ単位の確認版・環境・操作・未解決事項は、[雛形](page-template.md)に従う検証記録へ残します。資料に未掲載の機能やWikiの配下ページを見つけたら、IDを追加して対応先を記録します。

サイト構築の設定・公開方法の根拠は[作業・公開計画](rollout.md)にまとめています。公開サイトのURL対応表は最終URLの確定後に追加します。
