<p align="center">
  <img src="manual/public/images/siki-wordmark-blue.svg" alt="Siki" width="380">
</p>

# Siki マニュアル

Siki 1.0.0向けの日本語マニュアルを管理する専用リポジトリです。公開先はGitHub Pagesとし、マニュアルの原稿・構成・公開設定の正本をここに集約します。

現在はトップを含む50ページの原稿を整備しています。導入・基本操作に加え、機能別の説明、カスタマイズ、移行・対処、設定・コマンドの参照資料を掲載しています。VitePress 1.6.4で表示・日本語検索・サブパスを検証しました。原稿は0.99.25の画面と実装を参照して整備中で、1.0.0での最終確認はこれからです。GitHub Pagesの公開先は https://romtenma.github.io/document_siki/ です。作成中のマニュアルとして公開するワークフローを用意しています。

## 決定済みの方針

- 対象は1.0.0の利用者です。0.99.xは仕様確認に使う準備版として扱います。
- 今回の移行対象はマニュアルのみです。公式サイト全体、配布物、更新履歴の配信は移しません。
- 通常の利用から設定・カスタマイズまで扱い、旧版からの変更説明は移行ガイドにまとめます。
- 原稿はMarkdownとし、将来のRAGに備えてURL・用語・見出しを整えます。
- RAG、チャット、ベクトルDBの構築は今回の対象外です。
- 公開基盤は試作で確認したVitePress 1.6.4を採用します。依存バージョンとロックファイルを管理します。

## 試作を確認する

Node.js 24.11.1とnpmで検証しています。使用するNode.jsは `.node-version` に記録しています。

```sh
npm ci
npm run docs:dev
```

表示されたローカルURLの `/document_siki/` を開きます。開発サーバーの既定ポートは5173です。ビルドしたサイトを確認するときは次を実行します。

```sh
npm run verify
npm run docs:preview
```

プレビューの既定URLは `http://localhost:4173/document_siki/` です。公開先を変更する場合は、ビルド時と起動時に同じ `MANUAL_BASE_PATH` を指定します。値は `/` または `/リポジトリ名/` の形式です。GitHub上のリポジトリは [romtenma/document_siki](https://github.com/romtenma/document_siki) で、独自ドメインは使用しません。

Windows PowerShellでルート配信を確認する例：

```powershell
$env:MANUAL_BASE_PATH = '/'
npm run docs:build
npm run docs:preview
```

既定のサブパスに戻すときは環境変数を解除して、再ビルドします。

```powershell
Remove-Item Env:MANUAL_BASE_PATH
npm run docs:build
```

## 原稿と検査

| 作業 | コマンド・場所 |
| --- | --- |
| 初めて使う | [導入・基本用語](manual/getting-started/overview.md) |
| 板を開く・投稿する | [板](manual/basics/boards.md)・[書き込み](manual/basics/posting.md) |
| バックアップ・旧版からの移行 | [バックアップ](manual/troubleshooting/backup.md)・[移行](manual/migration/from-previous.md) |
| スレッドを読む | [原稿](manual/basics/threads.md) |
| 設定の探し方と適用範囲 | [原稿](manual/customization/settings.md) |
| NG・強調・ミュート・マーク | [原稿](manual/features/ng-and-mute.md) |
| 原稿・内部リンク・画像・明示アンカーを検査 | `npm run docs:check` |
| 日本語検索をテスト | `npm test` |
| 原稿検査・検索テスト・ビルド | `npm run verify` |
| 実ブラウザでサブパス・検索・画面幅を検査 | `npm run test:browser` |
| アプリの定義から参照資料を更新（編集時のみ） | `node scripts/import-source-reference.mjs ../Siki` |

ブラウザ検査はビルド後に実行します。Windowsではインストール済みMicrosoft Edgeを、その他の環境ではPlaywrightのChromiumを使います。Chromiumがない環境では、先に `npx playwright install chromium` を実行します。既定の検査用ポート4173を使用します。`MANUAL_BROWSER_CHANNEL=chrome` などでブラウザを指定することもできます。

参照資料の更新には、アプリ側のチェックアウトと、その開発環境にある `@babel/parser` が必要です。抽出範囲・除外・初期値の扱いは[詳細原稿の整備結果](planning/detail-guide-results.md)を確認してください。通常のビルド・検査はアプリ側に依存しません。

ブラウザ検査は明るい表示1種類、1440pxと390pxの幅で全ページを確認します。テスト自身がポート4173のVitePressプレビューを起動・終了します。先に同じポートで起動しているプレビューは終了してください。結果の画面画像は `verification-output/` に保存し、Git管理から除外します。GitHub Actionsの `Check manual` は原稿検査・検索テスト・ビルドを行います。ブラウザ検査はローカルで実行します。

## GitHub Pagesへ公開する

GitHubの Settings → Pages → Build and deployment → Source で `GitHub Actions` を指定します。公開ブランチは `main`、公開URLは https://romtenma.github.io/document_siki/ です。

`.github/workflows/deploy.yml` の `Deploy manual` は、`main` へのpushまたはActionsからの手動実行で動作します。`npm ci` と `npm run verify` に成功した場合だけ、`manual/.vitepress/dist/` を `github-pages` 環境へ配置します。PRでは `Check manual` による検査のみを行い、公開しません。

更新時は原稿を編集し、`npm run verify` と必要に応じて `npm run test:browser` を実行してから `main` に反映します。Actionsの成功後、公開サイトの直接アクセス・画像・日本語検索を確認します。公開内容に問題があれば、原因の変更を修正またはrevertして `main` に反映し、再デプロイします。

試作中は検索エンジン向けに `noindex, nofollow` を指定しています。正式公開時に、原稿と公開URLの確認と合わせて見直します。

## 計画資料

| 資料 | 内容 |
| --- | --- |
| [編集方針](planning/editorial-policy.md) | 読者、対象範囲、記述・検証・出典のルール |
| [目次案](planning/toc.md) | 分類、ページ候補、想定する読者の目的、執筆順 |
| [既存資料との対応表](planning/source-map.md) | 旧公式資料・アプリ内原稿・Wikiと新版の対応 |
| [作業・公開計画](planning/rollout.md) | 工程、試作の確認項目、GitHub Pagesへの移行と更新 |
| [ページの雛形](planning/page-template.md) | 操作説明の基本構成と検証記録の例 |
| [試作の検証結果](planning/prototype-results.md) | 最初の代表3ページの試作記録 |
| [先行原稿の整備結果](planning/core-guide-results.md) | 導入・基本操作の整備時点の記録 |
| [詳細原稿の整備結果](planning/detail-guide-results.md) | 50ページの構成、参照資料の更新方法、確認範囲 |
| [ローカル操作の実機確認](planning/verification/local-operations.md) | キー・ワークスペース・スキン・ローカル板の保存と反映、再起動の確認 |

`planning/` は編集・制作のための資料です。公開サイトのビルド対象は `manual/` のみです。目次案の全50候補に本文があり、未作成ページへのリンクを置いていません。掲載原稿の操作確認は継続中です。

## 参照元

このリポジトリと同じ親ディレクトリに、次の作業コピーがある構成を前提に調査しています。公開サイトのビルドは、それらの存在に依存させません。

- `../siki-manual/docs/`：既存の公式サイト・マニュアル。
- `../Siki/docs/manual/`：アプリ側にある新しい説明の下書き。
- `../Siki/docs/release-notes/` とアプリ実装：変更点と操作の確認先。
- [非公式Wiki](https://wikiwiki.jp/siki-app/)：利用者の疑問、応用例、関連資料。

調査基準日は2026-11-02です。確認時のアプリは0.99.25です。1.0.0の実機確認を済ませたことを示すものではありません。

次の工程は各手順・保存・解除・復元の実機確認と、1.0.0に向けた仕様の再照合です。現在の掲載範囲と参照資料の更新方法は [詳細原稿の整備結果](planning/detail-guide-results.md) を参照してください。確認した条件は [planning/verification/](planning/verification/) に記録します。具体的な工程は[作業・公開計画](planning/rollout.md)を参照してください。
