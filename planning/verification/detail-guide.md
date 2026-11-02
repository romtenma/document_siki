# 機能別・カスタマイズ原稿の確認記録

対象版：1.0.0。照合版：0.99.25。日付：2026-11-02。全体の状態：`checking`。

## 照合先と未確認範囲

パスはSikiリポジトリ基準です。ソース上のラベル・処理を確認したことと、UIで保存・実行まで確認したことを区別します。

| 原稿 | 主な根拠 | 残る確認 |
| --- | --- | --- |
| workspaces | `WorkspaceEdit.tsx`、ワークスペースの処理・コマンド、[実機確認](local-operations.md) | 引き継ぎ分岐、タブの移動・終了時の保持、他OS |
| filters-and-minimap | `ThreadMinimap.tsx`、`MinimapCanvas.tsx`、`sitePreferences.ts`、フィルターの定義 | 各条件の結果、解除、ミニマップの移動位置 |
| live | `FloatingWindow/Header.tsx` と `index.tsx`、オートスクロールのコマンド | 実動画への重ね合わせ、速度、モード切替、再起動後 |
| uploads | `UploadEditor.tsx`、`UploadHistory.tsx`、`main/nnc/uploader.ts`、`common/futabaUpload.ts` | 外部への送信・削除・結果再確認、各形式・送信先 |
| local-boards | `gpbc-plugin-siki_wall/siki_wall.ts`、`menutemplate.ts`、[作成・再起動の確認](local-operations.md) | レス追加、画像の保持、削除、他OS |
| browser | `BrowserPanel.tsx`、`mouseGestures.ts` | 固定・解除、位置・サイズの保存、ページのフォーカスとキー |
| ai | `AIThreadPanel.tsx`、`AISettingsEdit.tsx`、`main/nnc/ai/README.md` | 各接続先での応答、送信範囲、分割、参照番号移動、エラー復帰 |
| sync | `sync.ts`、`sync2chnode.ts`、`base.ts` の同期処理、ネットワーク設定 | 実サービスでの相互同期・既読・星・自動実行の挙動 |
| command-palette | `Buttons/Urlbar.tsx`、キー定義、[コマンド実行の確認](local-operations.md)。旧公式との差分を修正 | 新規環境と移行時の初期キー、板・スレッド候補、OS別のキー |
| themes | `WorkspaceEdit.tsx`、テーマ設定、`stylecomposer.ts` | 編集・反映・再起動後、背景画像の参照 |
| response-skins | `docs/manual/09_resskin.md`、スキン編集の実装、[作成・自動保存・タブへの適用・再起動の確認](local-operations.md) | 部品配置、一覧の保存・取消、共通設定への適用・解除、他OS |
| keyboard | `KeyboardEdit.tsx`、`keyboardShortcuts.ts`、[登録・保存・実行・再起動の確認](local-operations.md) | 競合・無効化・初期化、初期キーの保存形式、他OS |
| mouse | `MouseGestureEdit.tsx`、`mouseGestures.ts` | 各エリアでの実行、開始ボタン、保存・初期化 |
| wheel | `wheel.default.ts`、`mousedealer.ts` の `wheel__exec` | ファイル編集と読み込み、機器・OSごとの方向・修飾キー |
| actions | `PanelActionEdit.tsx`、`QuickqueryEdit.tsx`、`SuperdragEdit.tsx`、設定定義 | 各エディターの保存と割り当ての実行、競合 |
| user-commands | `UserCommandEdit.tsx`、テンプレートとコマンド定義 | 単一・シーケンス、表示場所・条件、引数の展開と実行 |
| plugins | `PluginEdit.tsx`、`base.ts` の読込・一覧、旧公式資料 | 配置・有効化・更新・取り外し、プラグインごとの対応版 |
| css | `base.ts` の `scss_loader`、旧公式CSS資料、0.99の移行資料 | CSSの読み込み・復元・テーマ別範囲、セレクターの描画確認 |
| move-data | 保存先・バックアップ・DBの処理と既存原稿 | 別PC・別OSへの完全な復元と認証・絶対パスの再設定 |
| command-line | `main/entry.ts`、保存先を構成する起動処理 | 配布形式・OSごとの起動、名前・パス・オプションファイルの組合せ |
| commands | `render/constants/commandDetails.ts` の静的メタデータ | 引数の型・順序とコンテキスト、正式版・実行時の追加 |
| settings | `settingsContents2.tsx` と `sitePreferences.ts` の静的メタデータ | 実際の既定値と継承値、独立編集画面・動的項目の追加 |
| external-integration | `docs/Shell_Command_Security.md`、コマンドとファイル同期処理 | 外部ツール実行、引数、ファイル同期の一連の操作 |
| media-url-rules | `gpbc/imgreplacer.ts`、旧公式 `imageviewurlreplace.md` | 正規表現・置換・抽出の互換性。照合・抽出時のエスケープ処理を要確認 |

外部サイトへの投稿・画像送信、AIリクエスト、同期は未実施です。これらの成功を前提に `verified` としません。認証やAPIキーを入力していません。

## 今回の実機観察

以下は詳細原稿を整備した時点の観察です。その後の操作確認は[ローカル操作の実機確認](local-operations.md)に追記し、ワークスペース、キー割り当て、レススキン、ローカル板について保存・反映・再起動まで確認した範囲を記録しました。未確認項目をすべて完了にしたものではありません。

Windowsの確認用プロファイルで起動し、板一覧の「機能」配下にある「ローカル板」と、空の履歴画面の「メモ/日記用スレを新規作成」を確認しました。設定の分類にキーボード、マウス、スキン編集、ワークスペースなどがあることも確認しました。

割り当て画面への入力操作は、UI制御で座標取得・入力検出の停止が発生したため完了していません。今回、キー・スキンの登録・保存・実行を確認済みにはしていません。確認用の設定画面とアプリを終了し、通常利用のプロファイルを変更していません。

## 参照資料の抽出範囲

コマンド一覧は表示用の情報から生成したもので、コマンドマップの引数対応まで自動検証していません。設定の `formDefault` はUI入力欄の初期値であり、有効な既定値を検証した記録ではありません。除外方針と件数は [生成スナップショット](../reference-snapshot.json) に記録しました。

旧公式・非公式Wikiは調査の入口として扱い、旧画像・旧手順の一括転載はしていません。画像URL補正の旧サンプルは実装との差が疑われるため、動作例としての転載を保留しました。アプリ本体の修正はこのマニュアル整備の作業に含めていません。
