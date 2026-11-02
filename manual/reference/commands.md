---
title: コマンド一覧
description: コマンドの表示名とIDを分類別に調べ、パラメーターや実行対象を確認する方法を説明します。
---

# コマンド一覧

キー、ジェスチャー、パネル、ユーザーコマンドの割り当てで使う操作を調べるための一覧です。名前から探す場合はマニュアル検索も利用できます。

## 一覧の読み方 {#reading}

表示名は基本の名称です。実際のメニューでは対象や状態に応じて名前が変わったり、実行できなかったりします。「動的」は対象・状態に応じた定義を持つ印です。「動的」のない操作も、常に実行可能という意味ではありません。

IDは割り当て先を識別する名前です。末尾が似ていても、対象のレス、カーソル、複数選択などが異なります。割り当てる画面で説明とパラメーターを確認してください。

引数の列は、定義に数値で記載されたユーザーパラメーター数だけを示します。「—」は引数不要の断定ではありません。この一覧は引数の型・順序・自動補完される対象までを定義するAPI仕様ではありません。

[ユーザーコマンド](../customization/user-commands.md)で追加した操作やプラグインなどの実行時の追加は含みません。下表は準備版の定義から抽出した812件で、1.0.0正式版との照合はこれからです。横長の表は左右へスクロールして読めます。

## 検索 {#commands-search}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| 保存ログ検索を開く | `logsearch:open` | 2 | — |
| 選択文字等を保存ログから検索 | `logsearch:open.exec` | 2 | 動的 |
| 新しいログ検索 | `logsearch:new` | — | — |
| 保存ログ検索を実行 | `logsearch:submit` | — | — |
| 保存ログ検索を停止 | `logsearch:cancel` | — | — |
| 保存ログ検索を開く（旧コマンド） | `sidepanel:search.target_ex` | — | — |
| 保存ログから検索（旧コマンド） | `sidepanel:search.setword` | — | 動的 |
| 保存ログから検索（旧コマンド） | `sidepanel:search.setword.exec` | — | — |
| 保存ログの本文から検索（旧コマンド） | `sidepanel:search.setword.body` | — | — |
| 保存ログ検索を開く（旧コマンド） | `sidepanel:search.focus` | — | — |

## サイドパネル {#commands-sidepanel}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| サイドパネルのログ検索を開閉 | `sidepanel:logsearch` | — | — |
| 第2サイドパネルのログ検索を開閉 | `sidepanel:secondary.logsearch` | — | — |
| サイドパネルを表示 | `sidepanel:show` | — | — |
| サイドパネルを閉じる | `sidepanel:close` | — | — |
| サイドパネルの開閉切り替え | `sidepanel:toggle` | — | — |
| サイドパネル:タブ一覧 | `sidepanel:tablist` | — | — |
| サイドパネル:BBSMenu | `sidepanel:bbsmenu` | — | — |
| サイドパネル:アプリモニタ | `sidepanel:appmonitor` | — | — |
| サイドパネル:お気に入り | `sidepanel:bookmarks` | — | — |
| サイドパネル:AI | `sidepanel:ai` | — | — |
| タブ一覧:ツリー構造 | `sidepanel:tablist.tree` | — | 動的 |
| タブ一覧:タイトルをすべて表示 | `sidepanel:tablist.ellipsis` | — | 動的 |
| タブ一覧:タグ表記省略 | `sidepanel:tablist.omit_title_tag` | — | 動的 |
| お気に入り:タイトルをすべて表示 | `sidepanel:favorites.ellipsis` | — | 動的 |
| サイドパネル:メディアリストを再読み込み | `sidepanel:medialist.refresh` | — | — |
| サイドパネル:上へカーソル移動 | `sidepanel:cursor.up` | — | — |
| サイドパネル:下へカーソル移動 | `sidepanel:cursor.down` | — | — |
| サイドパネル:カーソル位置を閉じる | `sidepanel:cursor.close` | — | — |
| サイドパネル:カーソル位置を開閉 | `sidepanel:cursor.switch` | — | 動的 |
| サイドパネル:カーソル位置を開く | `sidepanel:cursor.open` | — | — |
| サイドパネル:カーソル位置で実行 | `sidepanel:cursor.enter` | — | — |
| サイドパネル:カーソル位置で実行+ | `sidepanel:cursor.enter_ex` | — | — |
| 前のサイドパネルへ切り替え | `sidepanel:prev` | — | — |
| 次のサイドパネルへ切り替え | `sidepanel:next` | — | — |
| 板一覧で開いている板だけ表示 | `sidepanel:boardlist.only_opened` | — | — |
| 板一覧で開いているスレッドだけ表示 | `sidepanel:boardlist.only_threads` | — | — |
| 板一覧で最近閉じた板を隠す | `sidepanel:boardlist.hide_closed` | — | — |
| 板一覧で開いているスレッドを表示 | `sidepanel:boardlist.show_thread` | — | — |
| サイドパネル:過去ログ倉庫を開く | `sidepanel:archivewarehouse.open` | — | — |

## システム {#commands-system}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| 画面クリア | `core:clear` | — | — |
| 設定を開く | `core:window.open.setting` | — | 動的 |
| Aboutを開く | `core:window.open.about` | — | — |
| マニュアルを開く | `core:window.open.manual` | — | — |
| テーマツールを開く | `core:window.open.themetool` | — | — |
| 常に手前に表示 | `core:window.alwaysontop` | — | — |
| SikiGuardを有効化 | `sikiguard:enable` | — | 動的 |
| SikiGuardの対象を透明化 | `sikiguard:target.transparent` | — | 動的 |
| 攻撃を受けている最中のスレッド画像読み込みをブロック | `sikiguard:image_block` | — | 動的 |
| アプリケーションを終了 | `core:quit` | — | — |
| メインウィンドウにフォーカス | `core:window.focus.main` | — | — |
| ウィンドウを閉じる | `core:window.close` | — | — |
| 最小化 | `core:window.minimize` | — | — |
| 最小化解除 | `core:window.unminimize` | — | — |
| 最大化 | `core:window.maximize` | — | — |
| 最大化解除 | `core:window.unmaximize` | — | — |
| フルスクリーン | `core:window.fullscreen` | — | — |
| リロード | `core:window.reload` | — | — |
| リフレッシュ | `core:window.refresh` | — | — |
| アプリケーションの再起動 | `core:window.relaunch` | — | — |
| 開発ツールの切り替え | `core:window.devtools` | — | — |
| 設定をバックアップする | `core:backup.make` | — | — |
| メインメニューを開く | `core:popup.mainmenu` | — | — |
| 任意のコマンド実行 | `core:execute` | 8 | — |
| キーボードショートカット一覧 | `core:shortcut.show` | — | — |
| マウスジェスチャ一覧 | `core:gesture.show` | — | — |
| 上級設定切り替え | `core:advanced` | — | 動的 |
| 5ch.net -&gt; 5ch.io ドメイン置換を実行 | `core:domain.replace.5ch.net_io.execute` | — | — |
| メニューアイコンをアップデート | `core:create.iconset` | — | — |
| イントロページを起動 | `core:appintro.open` | — | — |
| リリースノートを表示 | `core:release-notes.open` | — | — |
| Sikiのアップデートを確認 | `updater:check.server` | — | — |
| 板の設定を開く | `settingwindow:open.sitesetting` | — | — |
| サイトの設定を開く | `settingwindow:open.sitesetting.site` | — | — |
| 設定ウィンドウを閉じる | `settingwindow:close` | — | — |
| 設定の検索へフォーカス | `settingwindow:search.focus` | — | — |
| データビューアを開く | `core:window.open.dataviewer` | 1 | — |
| スタックビューアを開く | `core:window.open.stackviewer` | — | — |
| 動画ビューアを開く | `core:window.open.videoviewer` | 1 | — |
| 書き込みウィンドウを閉じる | `postformwindow:close` | — | — |
| カラースキームの選択 | `theme:colorscheme.select` | — | — |
| テーマの色設定をファイルに保存 | `theme:output.colors` | — | — |
| 動作ログを開く | `file:open.log` | — | — |
| ネットワークログを開く | `file:open.netlog` | — | — |
| ユーザー設定を開く | `file:open.user` | — | — |
| スレッドのログを開く | `file:open.thread` | — | — |
| 板のログを開く | `file:open.board` | — | — |
| ユーザー設定の場所を開く | `file:open.userdir` | — | — |
| スレッドログの場所を開く | `file:open.threaddir` | — | — |
| 画像直接保存の場所を開く | `file:open.savedir` | — | — |
| テーマの場所を開く | `file:open.themedir` | — | — |
| バックアップの場所を開く | `file:open.backupdir` | — | — |
| 画像の場所を開く | `file:open.imagedir` | — | — |
| お絵かきの画像の場所を開く | `file:open.drawingdir` | — | — |
| コンポーネントの場所を開く | `file:open.componentsdir` | — | — |
| 実行ファイルの場所を開く | `file:open.exedir` | — | — |
| コピー | `clipboard:copy` | 1 | — |
| 引用符付きでコピー | `clipboard:copy.quot` | — | — |
| データをコピー | `clipboard:copy.dataset` | — | — |
| 画像をクリップボードにコピー | `clipboard:copy.image` | — | 動的 |
| 貼り付けて移動 | `clipboard:paste.request` | — | — |
| クリップボードの内容を貼り付ける | `clipboard:paste` | — | — |
| クリップボードの内容を引用符付きで貼り付ける | `clipboard:paste.quot` | — | — |
| すべて選択状態にする | `tab:selection.check.all` | — | — |
| カーソルのあるレスを選択状態にする | `tab:selection.cursor.check` | — | — |
| カーソルのあるレスまでを選択状態にする | `tab:selection.cursor.range` | — | — |
| メッセージを表示 | `message:pop` | 1 | — |
| 実行中のシーケンスを停止 | `sequence:cancel` | — | — |
| モーダルウィンドウを一つ消す | `modal:close_surface` | — | — |
| モーダルウィンドウを消す | `modal:clear` | — | — |
| datインポート | `modal:datimport.init` | — | — |
| お気に入りインポート | `modal:favorites.init` | — | — |
| bbsmenuの更新 | `bbsmenu:update` | — | — |
| Cookieを消去 | `session:cookie.clear` | — | — |
| すべてのCookieを消去 | `session:cookie.clear.all` | — | — |
| HTTPキャッシュを消去 | `session:cache.clear` | — | — |
| mainのキャッシュを消去 | `session:cache.clear.main` | — | — |
| Cookie情報を表示 | `session:cookie.show` | — | 動的 |
| QRコード生成 | `qrcode:generate` | 1 | — |
| 動作ログをクリア | `log:clear` | — | — |
| テストコマンド | `test:command` | — | — |

## レイアウト {#commands-layout}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| コマンドパレットを開く | `control:focus.commandpallet` | — | — |
| レイアウト:リフレッシュ | `layout:refresh` | — | — |
| 表示:拡大 | `layout:zoom.in` | — | — |
| 表示:縮小 | `layout:zoom.out` | — | — |
| 表示:元に戻す | `layout:zoom.reset` | — | — |
| 画面のスケーリングを変更 | `layout:zoom.menu` | — | — |
| レイアウト:左右に配置 | `layout:change.horizontal` | — | — |
| レイアウト:上下に配置 | `layout:change.vertical` | — | — |
| レイアウト:単一配置 | `layout:change.single` | — | — |
| レイアウト:切り替え | `layout:change.toggle` | — | — |
| レイアウト:板とスレッド配置交換 | `layout:change.swap` | — | — |
| 板とスレッドの上下／左右並びを切り替える | `layout:orientation.toggle` | — | — |
| 板とスレッドの単体／並列表示を切り替える | `layout:split.toggle` | — | — |
| 板とスレッドの配置・単体表示を切り替える | `layout:order.toggle` | — | — |
| レイアウト:スレッド単一配置 | `layout:change.single.thread` | — | — |
| レイアウト:板単一配置 | `layout:change.single.board` | — | — |
| レイアウト:左右/板優先 | `layout:change.horizontal.board` | — | — |
| レイアウト:上下/板優先 | `layout:change.vertical.board` | — | — |
| レイアウト:左右/スレ優先 | `layout:change.horizontal.thread` | — | — |
| レイアウト:上下/スレ優先 | `layout:change.vertical.thread` | — | — |
| レイアウト:スレッド全体表示切り替え | `layout:change.entire.thread` | — | — |
| レイアウト:板全体表示切り替え | `layout:change.entire.board` | — | — |
| サイドパネル表示位置切り替え | `layout:sidepanel.position` | — | — |
| サイドパネル表示切り替え | `layout:sidepanel.toggle` | — | — |
| サイドパネルをオーバーレイ表示 | `layout:sidepanel.overlay` | — | 動的 |
| サイドパネルを自動的に閉じる | `layout:sidepanel.overlay.autohide` | — | 動的 |
| 集中モード切り替え | `layout:focusmode.toggle` | — | 動的 |
| フッターログ全部表示 | `layout:footer.log.full` | — | — |
| フッターログフロート表示 | `layout:footer.log.float` | — | 動的 |
| フッターログをサイドパネルに表示 | `layout:footer.log.sidepanel` | — | 動的 |
| フッターログをセカンダリサイドパネルに表示 | `layout:footer.log.secondary` | — | 動的 |
| フッターログ非表示 | `layout:footer.log.none` | — | 動的 |
| スレッドタブ:タブの位置変更 | `layout:change.tabposition.thread` | — | — |
| 板タブ:タブの位置変更 | `layout:change.tabposition.board` | — | — |
| スレッドタブ:タブエリアの表示切り替え | `layout:toggle.tabarea.thread` | — | — |
| 板タブ:タブエリアの表示切り替え | `layout:toggle.tabarea.board` | — | — |
| 書き込み欄のウィンドウ化 | `layout:postform.switch` | — | 動的 |
| 書き込み欄を上に配置 | `layout:postform.dock.top` | — | 動的 |
| 書き込み欄を下に配置 | `layout:postform.dock.bottom` | — | 動的 |
| 書き込み欄を左に配置 | `layout:postform.dock.left` | — | 動的 |
| 書き込み欄を右に配置 | `layout:postform.dock.right` | — | 動的 |
| 書き込み欄をフロート表示 | `layout:postform.float` | — | 動的 |
| 書き込み欄をウィンドウ化 | `layout:postform.windowed` | — | 動的 |
| セカンダリサイドパネルを開く | `sidepanel:secondary.toggle` | — | 動的 |
| フォーカスをスレッドと板で切り替え | `control:focus-toggle-thread-board` | — | — |
| アクティブペインを変更 | `control:focus.cycle` | — | — |
| フォーカスをスレッドへ変更 | `control:focus.thread` | — | — |
| フォーカスをボードへ変更 | `control:focus.board` | — | — |
| フォーカスをパネルへ変更 | `control:focus.panel` | — | — |
| フォーカスをURIバーへ変更 | `control:focus.uribar` | — | — |

## 分類未指定 {#commands--}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| コマンドを履歴から削除 | `commandpallet:history.remove` | — | 動的 |
| フォントを適用する | `core:fontlist.add` | — | — |
| フォントをURLから取り込む | `core:font.import.url` | — | — |
| フォントファイルを取り込む | `core:font.import.file` | — | — |
| 取り込みフォント一覧を開く | `core:font.remove.list` | — | — |
| フォント履歴から削除 | `core:fontlist.clear` | — | 動的 |
| 板をピン止め | `sidepanel:boardlist.pin_board` | — | 動的 |
| リストの板を更新 | `sidepanel:boardlist.reload` | — | 動的 |
| 一時表示を戻す | `tab:vflag.switch` | — | — |
| フィルタセット | `filter:set.pp` | — | — |
| 画像として保存 | `tab:capture.res` | — | — |
| 今の表示を板の基本設定にする | `boardheader:overwrite` | — | — |
| ヘッダ表示をリセット | `boardheader:reset` | — | — |
| レス履歴から削除 | `reshistory:delete` | — | 動的 |
| 閉じたスレ履歴を削除 | `workspace:closed.rm` | — | 動的 |
| レスツリーをポップアップ | `popup:res.talk` | — | — |
| 画像を再取得する | `image:request.multi` | — | — |
| 画像を削除 | `image:delete.multi` | — | — |
| 複数の画像をNGにする | `image:ng.multi` | — | — |
| 画像をぼかす | `image:mosaic.multi` | — | — |
| ミュート | `mark:set.mute` | — | — |
| 画像を選択してアップロード | `upload:modal.filesystem` | — | — |

## ビューア {#commands-viewer}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| メディアビューアのメニューを開く | `viewer:popup.mainmenu` | — | — |
| スレッド更新 | `viewer:thread.reload` | — | — |
| 次のスレッド | `viewer:thread.next` | — | — |
| 前のスレッド | `viewer:thread.prev` | — | — |
| スレッドを閉じる | `viewer:thread.close` | — | — |
| 指定番号へ移動 | `viewer:page.set` | — | — |
| 次の画像 | `viewer:page.next` | — | — |
| 前の画像 | `viewer:page.prev` | — | — |
| 上の画像 | `viewer:page.tileup` | — | — |
| 下の画像 | `viewer:page.tiledown` | — | — |
| 10個前の画像 | `viewer:page.pageup` | — | — |
| 10個先の画像 | `viewer:page.pagedown` | — | — |
| 最初の画像 | `viewer:page.first` | — | — |
| 最後の画像 | `viewer:page.last` | — | — |
| ズームアップ | `viewer:tile.zoom.in` | — | 動的 |
| ズームアウト | `viewer:tile.zoom.out` | — | 動的 |
| 元の大きさにする | `viewer:tile.zoom.reset` | — | 動的 |
| すべて選択 | `viewer:tile.select.all` | — | 動的 |
| 選択解除 | `viewer:tile.select.clear` | — | — |
| 元のレスを開く | `viewer:send.res` | — | — |
| 画像をポップアップ | `viewer:send.imagepopup` | — | 動的 |
| 外部アプリケーションで開く | `viewer:send.application` | — | 動的 |
| 外部ブラウザで開く | `viewer:send.browser` | — | 動的 |
| コンテキストメニューを開く | `viewer:popup.contextmenu` | — | — |
| フルスクリーン | `viewer:window.fullscreen` | — | — |
| 画像ビューアを閉じる | `viewer:window.close` | — | — |
| 検索モード | `viewer:searchmode.toggle` | — | 動的 |
| シングルモード | `viewer:layout.single` | — | 動的 |
| タイルモード | `viewer:layout.tile` | — | 動的 |
| キャッシュモード | `viewer:layout.cache` | — | 動的 |
| サイドパネルを表示 | `viewer:sidepanel.toggle` | — | 動的 |
| フィルムストリップを表示 | `viewer:filmstrip.toggle` | — | 動的 |
| パネルを自動非表示 | `viewer:sidepanel.pinned` | — | 動的 |
| 画像を自動取得 | `viewer:autoload.toggle` | — | 動的 |
| 重複する画像URLは表示しない | `viewer:hide_dup.toggle` | — | 動的 |
| スレッドの画像に連動させる | `viewer:linkthread.toggle` | — | 動的 |

## データビューア {#commands-dataviewer}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| 次ページ | `dataviewer:page.next` | — | — |
| 前ページ | `dataviewer:page.prev` | — | — |
| 先頭ページ | `dataviewer:page.first` | — | — |
| 末尾ページ | `dataviewer:page.last` | — | — |
| スクロールアップ | `dataviewer:scroll.up` | — | — |
| スクロールダウン | `dataviewer:scroll.down` | — | — |
| 一番上へスクロール | `dataviewer:scroll.top` | — | — |
| 一番下へスクロール | `dataviewer:scroll.bottom` | — | — |
| リフレッシュ | `dataviewer:refresh` | — | — |
| クリア | `dataviewer:clear` | — | — |
| 選択をクリア | `dataviewer:selection.clear` | — | — |
| コンテキストメニューを開く | `dataviewer:contextmenu` | — | — |

## スタック型画像ビューア {#commands-stackviewer}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| 次の画像へ | `stackviewer:move.next` | — | — |
| 前の画像へ | `stackviewer:move.prev` | — | — |
| 先頭へ | `stackviewer:move.first` | — | — |
| 末尾へ | `stackviewer:move.last` | — | — |
| 指定のサムネを選択 | `stackviewer:select` | — | — |
| この画像を閉じる | `stackviewer:close.target` | — | — |
| 左側を閉じる | `stackviewer:close.left` | — | — |
| 右側を閉じる | `stackviewer:close.right` | — | — |
| すべて閉じる | `stackviewer:close.all` | — | — |
| スタックビューアで開く | `stackviewer:open` | — | — |
| 元のスレッドを開く | `stackviewer:open.source_res` | — | — |
| 外部アプリケーションで開く | `stackviewer:open.application` | — | — |
| 画像を拡大 | `stackviewer:image.zoom.in` | — | — |
| 画像を縮小 | `stackviewer:image.zoom.out` | — | — |
| 画像を元のサイズに戻す(100%) | `stackviewer:image.zoom.reset` | — | — |
| 実寸表示(100%) | `stackviewer:image.view.actual` | — | — |
| 枠に合わせた表示 | `stackviewer:image.view.fit` | — | — |

## その他・対象限定の操作 {#commands-other}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| 画像を拡大/縮小 | `stackviewer:image.zoom.sizer` | — | — |
| テーマのサイズを更新 | `theme:size.update` | — | — |
| テーマの値を変更 | `theme:setid.update` | — | — |
| レススキンの値を更新 | `resskin:value.update` | — | — |
| 画面のスケーリングを変更 | `layout:zoom` | — | — |
| カテゴリをすべて開く | `sidepanel:cursor.open_child` | — | 動的 |
| カテゴリをすべて閉じる | `sidepanel:cursor.close_child` | — | 動的 |
| タブを開くか更新 | `uri:request.active_or_reload` | — | — |
| タブを開いて更新 | `uri:request.active_and_reload` | — | — |
| 動画に名前を付けて保存 | `uri:download.movie` | — | 動的 |
| YouTube動画情報 | `video:youtube.info` | — | — |
| 現在のフレームを画像として保存 | `video:capture.frame` | — | — |
| URLをコピー | `clipboard:copy.link` | — | — |
| テキストをコピー | `clipboard:copy.linklabel` | — | 動的 |
| フレームをクリップボードにコピー | `clipboard:copy.image.dataurl` | — | 動的 |
| リクエスト | `post:unique` | — | — |
| 次スレ候補を閉じる | `thread:track.close` | — | — |
| このタブで書き込み欄を表示 | `tab:post.form.opened` | — | 動的 |
| IDでミュート | `thread:range.mute.id` | — | — |
| BBSSLIPでミュート | `thread:range.mute.id2` | — | — |
| BEでミュート | `thread:range.mute.bebase` | — | — |
| IPでミュート | `thread:range.mute.ip` | — | — |
| レス番号でミュート | `thread:range.mute.num` | — | — |
| IDでミュート | `thread:range.mute.unset.id` | — | — |
| BBSSLIPでミュート | `thread:range.mute.unset.id2` | — | — |
| BEでミュート | `thread:range.mute.unset.bebase` | — | — |
| IPでミュート | `thread:range.mute.unset.ip` | — | — |
| レス番号でミュート | `thread:range.mute.unset.num` | — | — |
| 画像をNGにする | `thread:range.ng.image` | — | — |
| 画像をNGにする | `thread:range.ng.unset.image` | — | — |
| ぼかし状態にする | `thread:range.blur.image` | — | — |
| ぼかし状態にする | `thread:range.blur.unset.image` | — | — |
| リンクの編集 | `action:linkbutton.update` | — | 動的 |
| すべてタブで開く | `favorites:open.children` | — | — |
| 板として開く | `favorites:open.asboard` | — | — |
| 開く | `favorites:open.url` | — | — |
| フォルダを追加 | `favorites:add.folder` | — | — |
| フォルダを削除 | `favorites:delete.folder` | — | 動的 |
| 板の履歴から削除 | `bbsmenu:history.remove` | — | 動的 |
| 画像を直接保存 | `image:save.multi.directly` | — | — |
| 場所を選択して保存 | `image:save.multi` | — | — |
| exif情報をコピー | `image:copy.exif` | — | 動的 |
| 画像の情報を表示 | `image:info.show` | — | 動的 |
| 画像一覧を開く | `viewer:thread.load` | — | — |
| 元のスレッドを開く | `viewer:send.thread` | — | — |
| 画像をクリップボードにコピー | `viewer:clipboard.copy` | — | 動的 |
| 画像をNGにする | `viewer:image.ng` | — | 動的 |
| 画像を再読み込み | `viewer:image.reload` | — | 動的 |
| 画像を削除 | `viewer:image.delete` | — | 動的 |
| 画像をぼかす | `viewer:image.blur` | — | 動的 |
| 名前をつけて保存 | `viewer:send.save` | — | 動的 |
| 直接保存 | `viewer:send.save.directly` | — | 動的 |
| フォルダを選択して保存(複数) | `viewer:send.save.multi` | — | — |
| 直接保存(複数) | `viewer:send.save.directly.multi` | — | — |
| 再読み込み(複数) | `viewer:image.reload.multi` | — | — |
| 画像を削除(複数) | `viewer:image.delete.multi` | — | — |
| NGにする(複数) | `viewer:image.ng.multi` | — | — |
| NGを解除(複数) | `viewer:image.ng.multi.clear` | — | — |
| ぼかす(複数) | `viewer:image.blur.multi` | — | — |
| ぼかし解除(複数) | `viewer:image.blur.multi.clear` | — | — |
| 翻訳 | `tooltip:popup.translate` | — | — |
| ローカルレスを削除 | `wall:delete.res` | — | — |
| ローカルスレッドを削除 | `wall:delete.thread` | — | — |
| レスポップアップ | `_system:respopup` | — | — |
| タブ内容をリフレッシュ | `_system:contents.clear` | — | — |
| sss test | `tab:scroll.set` | — | — |

## タブ {#commands-tab}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| 文字サイズを大きくする | `tab:fontsize.up` | — | — |
| 文字サイズを小さくする | `tab:fontsize.down` | — | — |
| 文字サイズをリセットする | `tab:fontsize.reset` | — | — |
| タブを閉じる | `tab:close` | — | 動的 |
| タブを閉じてログを削除 | `tab:close.rm` | — | 動的 |
| タブを閉じてミュート | `tab:close.mute` | — | 動的 |
| タブを閉じてミュート+ログ削除 | `tab:close.mute_rm` | — | 動的 |
| 板に所属しているスレッドをすべて閉じる | `tab:close.child` | — | — |
| 閉じたタブを開く | `tab:reopen` | — | — |
| 閉じたスレッドタブを開く | `tab:reopen.thread` | — | — |
| 閉じた板タブを開く | `tab:reopen.board` | — | — |
| 板を開く | `tab:open.asboard` | — | — |
| 落ちたスレッドを閉じる | `tab:close.archived` | — | — |
| すべてのタブを閉じる | `tab:close.all` | — | — |
| その他のタブを閉じる | `tab:close.others` | — | — |
| 以前のタブをすべて閉じる | `tab:close.left` | — | — |
| 以降のタブをすべて閉じる | `tab:close.right` | — | — |
| タブを表示 | `tab:activate` | — | — |
| 前のタブを表示 | `tab:prev` | — | — |
| 次のタブを表示 | `tab:next` | — | — |
| 前のスレッドタブを表示 | `tab:prev.thread` | — | — |
| 次のスレッドタブを表示 | `tab:next.thread` | — | — |
| 前の板タブを表示 | `tab:prev.board` | — | — |
| 次の板タブを表示 | `tab:next.board` | — | — |
| 前の未読タブを表示 | `tab:newly-prev` | — | — |
| 次の未読タブを表示 | `tab:newly-next` | — | — |
| 次の未読タブを表示(全体) | `tab:newly-next.whole` | — | — |
| 前の未読タブを表示(全体) | `tab:newly-prev.whole` | — | — |
| タブを右へ移動 | `tab:moveto.right` | — | — |
| タブを左へ移動 | `tab:moveto.left` | — | — |
| タブを最初へ移動 | `tab:moveto.top` | — | — |
| タブを最後へ移動 | `tab:moveto.bottom` | — | — |
| タブのロック切り替え | `tab:toggle-lock` | — | 動的 |
| タブをロックする | `tab:lock` | — | — |
| タブのロック解除 | `tab:unlock` | — | — |
| タブ名を変更 | `tab:edit.title` | — | — |
| タブのメニューを開く | `tab:contextmenu.open` | — | — |
| スレッドの閲覧履歴を表示 | `thread:tab.history` | — | — |
| 板の閲覧履歴を表示 | `board:tab.history` | — | — |
| 検索を開く | `search:open` | — | — |
| 検索を閉じる | `search:close` | — | — |
| 検索を切り替える | `search:toggle` | — | — |
| 次の検索結果 | `search:goto.next` | — | — |
| 前の検索結果 | `search:goto.prev` | — | — |
| 次の検索履歴 | `search:history.next` | — | — |
| 前の検索履歴 | `search:history.prev` | — | — |
| 単語をスレッド内検索 | `search:set.word` | — | — |
| 単語をフィルターにセット | `filter:set.word` | 1 | — |
| オートスクロール:ON | `tab:autoscroll.on` | — | — |
| オートスクロール:OFF | `tab:autoscroll.off` | — | — |
| オートスクロール:開始 | `tab:autoscroll.play` | — | — |
| オートスクロール:停止 | `tab:autoscroll.stop` | — | — |
| オートスクロール:開始/停止 | `tab:autoscroll.switch` | — | — |
| オートスクロール:切り替え | `tab:autoscroll.toggle` | — | — |
| オートスクロール:速度アップ | `tab:autoscroll.speed.up` | — | — |
| オートスクロール:速度ダウン | `tab:autoscroll.speed.down` | — | — |
| オートスクロール:動作モード変更 | `tab:autoscroll.changemode` | — | — |
| 新規スレッド作成 | `tab:post.thread` | — | 動的 |
| 新規スレッド作成+補助 | `tab:post.thread.support` | — | 動的 |
| ミニマップの位置を変更 | `tab:scrollbar.position.toggle` | — | — |
| 新着レスのチェック | `tab:thread.check` | — | — |
| 全ワークスペースの新着レスのチェック | `tab:thread.check.whole` | — | — |
| 新着レスと板のチェック | `tab:board.check` | — | — |
| 全ワークスペースの新着レスと板のチェック | `tab:board.check.whole` | — | — |
| タブをせいとん | `tab:sort.workspace` | — | — |
| タブ内容をテキストとしてコピー | `tab:copy.astext` | — | — |
| タブの設定をリセット | `tab:siteedit.reset` | — | — |
| 開いているスレッドタブをコピー | `tab:tablist.thread.copy` | — | — |
| すべての開いているスレッドタブをコピー | `tab:tablist.thread.copy.whole` | — | — |
| 開いている板タブをコピー | `tab:tablist.board.copy` | — | — |
| すべての開いている板タブをコピー | `tab:tablist.board.copy.whole` | — | — |
| お気に入りの新着をチェック | `tab:bookmark.check` | — | — |
| スレッドタブのメニューを開く | `contextmenu:tab.thread` | — | — |
| 板タブのメニューを開く | `contextmenu:tab.board` | — | — |
| 閉じたスレッドタブのメニューを開く | `contextmenu:tab.closed_thread` | — | — |
| タブ位置変更メニュー | `contextmenu:tabposition_menu` | — | — |
| 関連スレッド | `contextmenu:similar_thread` | — | — |
| セッションメニュー | `contextmenu:session_menu` | — | — |
| コンテキストメニュー | `contextmenu:cursor` | — | — |
| マーク/ミュートリスト | `contextmenu:mark_list` | — | — |
| レス履歴メニュー | `contextmenu:reshistory` | — | — |
| お気に入りメニュー | `contextmenu:favorites` | — | — |
| レス履歴の一括削除メニュー | `contextmenu:reshistory_delete` | — | 動的 |
| マーク履歴の一括削除メニュー | `contextmenu:markhistory_delete` | — | 動的 |
| 新規ミュートの透明化切り替え | `thread:mute.noprint` | — | 動的 |

## URL・タブを開く {#commands-request}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| タブで開く | `uri:request` | 1 | — |
| 別ウィンドウで開く | `uri:request.floating` | — | — |
| バックグラウンドで開く | `uri:request.background` | — | — |
| 新しいタブで開く | `uri:request.newtab` | — | — |
| 同じタブで開く | `uri:request.replace` | — | — |
| 直後のタブで開く | `uri:request.next` | — | — |
| 外部ブラウザで開く | `uri:open-external` | 1 | 動的 |
| 外部ブラウザで検索 | `uri:open-external.search` | 1 | — |
| ブラウザビューで開く | `uri:open-browserview` | 1 | 動的 |
| ブラウザビューで検索 | `uri:open-browserview.search` | 1 | — |
| スレッドタイトル検索(外部) | `uri:open-browserview.searchthread` | 1 | — |
| Welcomeタブを開く | `uri:open.welcome` | — | — |
| ライセンス情報を開く | `uri:open.library` | — | — |
| 書き込み履歴を開く | `uri:open.res-history` | — | — |
| マークされたレス履歴を開く | `uri:open.res-marked` | — | — |
| 最近読んだスレッド履歴を開く | `uri:open.recently` | — | — |
| 最近書き込んだスレッド履歴を開く | `uri:open.posted` | — | — |
| スレッド検索を板で開く | `uri:open.searchthread` | — | — |
| URLを無効化 | `uri:disable.add` | 1 | — |
| URLの無効化を解除 | `uri:disable.remove` | 1 | — |
| NGURLを含んだレスを自動的にミュート | `uri:disable.mute_switch` | — | 動的 |
| タブを更新 | `tab:reload` | — | 動的 |
| タブの所属する板を更新 | `tab:reload.board` | — | — |
| タブの表示リフレッシュ | `tab:refresh` | — | — |
| タブの表示リフレッシュ+ | `tab:refresh.clear` | — | — |
| ログを削除して再読み込み | `tab:superreload` | — | — |

## コマンド編集 {#commands-usercommandedit}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| 選択中のテキストを置き換えて貼り付ける | `text:paste.replace` | 1 | — |
| クリップボードの内容を置き換えて貼り付ける | `clipboard:paste.replace` | 1 | — |
| 渡された時間(ミリ秒)だけ待機する | `sequence:wait` | 1 | — |
| メッセージウィンドウを表示 | `message:alert` | 3 | — |
| 通知を表示 | `notification:push` | 2 | — |
| プロンプトを表示 | `ui:prompt` | 3 | — |

## スレッド {#commands-thread}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| スレッド内の画像をすべて自動ダウンロード | `thread:image.autodownload.all` | — | — |
| 画像フィルター | `filter:switch.image` | — | — |
| 動画フィルター | `filter:switch.movie` | — | — |
| 内部リンクフィルター | `filter:switch.ilink` | — | — |
| 外部リンクフィルター | `filter:switch.olink` | — | — |
| 自分のレスフィルター | `filter:switch.myself` | — | — |
| 人気レスフィルター | `filter:switch.popular` | — | — |
| 返信フィルター | `filter:switch.ancnum` | — | — |
| レス数フィルター | `filter:switch.resnum` | — | — |
| フィルター入力 | `filter:switch.input` | — | — |
| フィルターを解除する | `filter:clear` | — | — |
| フィルターを開く | `filter:open` | — | — |
| NG/強調を一時的に無効化 | `thread:ng.invalidate` | — | 動的 |
| NGになっているレスのみ表示 | `thread:ng.only` | — | 動的 |
| 単語をNGリストに入れる | `thread:ng.add.word` | — | — |
| スレッド情報を表示 | `thread:bottominfo.on` | — | — |
| スレッド情報を非表示 | `thread:bottominfo.off` | — | — |
| スレッド情報をスレッドが落ちた時に表示 | `thread:bottominfo.bottom` | — | — |
| スレッド情報表示切り替え | `thread:bottominfo.toggle` | — | 動的 |
| このタブだけ:ツリーと時系列を切り替え | `tab:viewmode.toggle` | — | — |
| このタブだけ:ツリー表示 | `tab:viewmode.tree` | — | — |
| このタブだけ:時系列表示 | `tab:viewmode.timeline` | — | — |
| レスツリー:カーソル位置の返信を開閉 | `thread:tree.toggle` | — | — |
| レスツリー:すべての返信を表示 | `thread:tree.expand_all` | — | — |
| オートスクロール:ティック | `tab:autoscroll.mode.tick` | — | — |
| オートスクロール:スクロール | `tab:autoscroll.mode.scroll` | — | — |
| オートスクロール:カーソル | `tab:autoscroll.mode.cursor` | — | — |
| オートスクロール:読み上げ | `tab:autoscroll.mode.speaker` | — | — |
| オートスクロール:リロード間隔自動 | `tab:autoscroll.interval.auto` | — | — |
| オートスクロール:リロード間隔設定 | `tab:autoscroll.interval.prompt` | — | — |
| オートロード:ON | `tab:autoload.on` | — | — |
| オートロード:OFF | `tab:autoload.off` | — | — |
| オートロード:切り替え | `tab:autoload.toggle` | — | — |
| オートロード(WS):一時停止 | `tab:ws-autoload.off` | — | — |
| オートロード(WS):再開 | `tab:ws-autoload.on` | — | — |
| 書き込み欄:切り替え | `tab:post.toggle` | — | — |
| 書き込み欄:開く | `tab:post.open` | — | — |
| 書き込み欄:閉じる | `tab:post.close` | — | — |
| 書き込み欄:ヘッダー表示 | `tab:post.form.header` | — | — |
| 書き込み欄:入力欄を拡張 | `tab:post.form.expand` | — | 動的 |
| 書き込み欄:アンカーを表示 | `tab:post.form.anchor` | — | 動的 |
| 書き込み欄:投稿後に閉じる | `tab:post.form.close` | — | 動的 |
| 書き込み欄:お絵かきを表示 | `tab:post.form.drawing` | — | — |
| 書き込み欄:文字数のカウントを表示 | `tab:post.form.charcount` | — | — |
| 書き込み欄:アスキーアート表示 | `tab:post.form.aa` | — | 動的 |
| 書き込み欄:プレビュー表示 | `tab:post.form.preview` | — | 動的 |
| 書き込み欄:返信で開く | `tab:post.open.anchor` | — | 動的 |
| 書き込み欄:本文引用で開く | `tab:post.open.quot` | — | 動的 |
| 書き込み欄:返信+引用で開く | `tab:post.open.anchor_quot` | — | 動的 |
| 書き込み欄:選択箇所 | `tab:post.open.selected` | — | — |
| 書き込み欄:選択箇所を引用 | `tab:post.open.qselected` | — | — |
| 書き込み欄:返信+選択箇所を引用 | `tab:post.open.anchor_qselected` | — | — |
| タブを別ウィンドウで開く | `tab:floating.init` | — | — |
| 画像をスレッドのサムネイルにする | `thumbnail:update` | — | 動的 |
| スレッドのサムネイルを削除する | `thumbnail:delete` | — | — |
| 非表示レスのリスト | `thread:nop.list` | — | — |
| NGレスのリスト | `thread:ng.list` | — | — |
| スレッドのミュートワードへ追加 | `thread:mute.prompt` | — | — |
| スレッドのマークワードへ追加 | `thread:mark.prompt` | — | — |
| ミニマップ切り替え | `thread:minimap.toggle` | — | 動的 |
| 透明レスのグループを透明化切り替え | `thread:ng.transparent_group.toggle` | — | 動的 |
| 画像サムネイル表示 | `thread:thumbnail.image` | — | 動的 |
| 動画サムネイル表示 | `thread:thumbnail.movie` | — | 動的 |
| サイトカード表示 | `thread:thumbnail.card` | — | 動的 |
| Twitterサムネイル表示 | `thread:thumbnail.twit` | — | 動的 |
| 次スレッド候補を開く | `thread:track` | — | — |
| 画像URL非表示 | `thread:image.hide_url` | — | 動的 |
| ツリー時のアンカー非表示 | `thread:anchor.omit` | — | 動的 |
| 単発IDを表示しない | `thread:hide.singleid` | — | 動的 |
| 定型文メニュー | `contextmenu:phrase_menu` | — | 動的 |
| 定型文編集メニュー | `contextmenu:phrase_menu.edit` | — | 動的 |
| 連鎖ミュート切り替え | `thread:mute.chain` | — | 動的 |
| 表示しているスキンを板のデフォルトにする | `thread:resskin.set.default` | — | — |
| 人気レスをポップアップ | `popup:res.filtered.popular` | — | — |
| 返信の多いレスをポップアップ | `popup:res.filtered.ancnum` | — | — |
| 画像を含むレスをポップアップ | `popup:res.filtered.image` | — | — |
| 動画を含むレスをポップアップ | `popup:res.filtered.movie` | — | — |
| Sikiで開けるURLを含むレスをポップアップ | `popup:res.filtered.ilink` | — | — |
| 外部URLを含むレスをポップアップ | `popup:res.filtered.olink` | — | — |
| マークしたレスをポップアップ | `popup:res.filtered.mark` | — | — |
| 自分のレスをポップアップ | `popup:res.filtered.myself` | — | — |
| サーバーからNGIDを取り込んでミュートする | `ngid:import.id.mute` | — | — |

## レス {#commands-res}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| URLコピー | `res:copy.url` | — | 動的 |
| 名前コピー | `res:copy.name` | — | 動的 |
| トリップコピー | `res:copy.trip` | — | 動的 |
| メール欄コピー | `res:copy.mail` | — | 動的 |
| IDコピー | `res:copy.id` | — | 動的 |
| ID(冗長)コピー | `res:copy.id_verbose` | — | 動的 |
| BBSSLIPコピー | `res:copy.id2` | — | 動的 |
| IPコピー | `res:copy.ip` | — | 動的 |
| HOSTコピー | `res:copy.host` | — | 動的 |
| シーケンス番号コピー | `res:copy.seq` | — | 動的 |
| 時間コピー | `res:copy.date` | — | 動的 |
| 本文コピー | `res:copy.body` | — | 動的 |
| 引用付き本文コピー | `res:copy.quot` | — | 動的 |
| レスコピー | `res:copy.res` | — | 動的 |
| URL+レスコピー | `res:copy.url_res` | — | 動的 |
| タイトル+URL+レスコピー | `res:copy.title_url_res` | — | 動的 |
| レスをマーク | `thread:cursor.mark.res` | — | — |
| レスを★1でマーク | `thread:cursor.mark.res.star1` | — | 動的 |
| レスを★2でマーク | `thread:cursor.mark.res.star2` | — | 動的 |
| レスを★3でマーク | `thread:cursor.mark.res.star3` | — | 動的 |
| レスを★4でマーク | `thread:cursor.mark.res.star4` | — | 動的 |
| レスを★5でマーク | `thread:cursor.mark.res.star5` | — | 動的 |
| レスの★を削除 | `thread:cursor.mark.res.unset` | — | 動的 |
| 自分のレスとしてマーク | `thread:cursor.mark.myself` | — | 動的 |
| Ascii Artとして扱う | `thread:cursor.mark.aa` | — | 動的 |
| IDをマーク | `thread:cursor.mark.id` | — | 動的 |
| BBSSLIPをマーク | `thread:cursor.mark.id2` | — | 動的 |
| BEをマーク | `thread:cursor.mark.bebase` | — | 動的 |
| 名前をマーク | `thread:cursor.mark.mname` | — | 動的 |
| トリップをマーク | `thread:cursor.mark.trip` | — | 動的 |
| IPをマーク | `thread:cursor.mark.ip` | — | 動的 |
| HOSTをマーク | `thread:cursor.mark.host` | — | 動的 |
| レスを上に固定 | `thread:cursor.mark.sticky` | — | 動的 |
| 単語をマーク | `thread:cursor.mark.word` | — | — |
| 数値参照切り替え | `thread:cursor.mark.numref` | — | 動的 |
| ミュートするテキストを追加 | `thread:mute.add.word` | — | — |
| 通常ミュートに変更 | `thread:mute.effect.normal` | — | — |
| 透明ミュートに変更 | `thread:mute.effect.nop` | — | — |
| マークするテキストを追加 | `thread:mark.add.word` | — | — |
| マークするテキストを編集 | `thread:mark.edit` | — | 動的 |
| 単語をミュート | `thread:cursor.mute.word` | — | — |
| IDをミュート | `thread:cursor.mute.id` | — | — |
| BBSSLIPをミュート | `thread:cursor.mute.id2` | — | — |
| BBSSLIPをミュート(前半) | `thread:cursor.mute.id2_pre` | — | 動的 |
| BBSSLIPをミュート(後半) | `thread:cursor.mute.id2_post` | — | 動的 |
| BEをミュート | `thread:cursor.mute.bebase` | — | — |
| IPをミュート | `thread:cursor.mute.ip` | — | — |
| HOSTをミュート | `thread:cursor.mute.host` | — | — |
| 名前をミュート | `thread:cursor.mute.mname` | — | — |
| トリップをミュート | `thread:cursor.mute.trip` | — | — |
| ターゲットをミュート | `thread:cursor.mute.dataset` | — | — |
| IDメニュー | `thread:cursor.menu.id` | — | — |
| BBSSLIPメニュー | `thread:cursor.menu.id2` | — | — |
| BEメニュー | `thread:cursor.menu.bebase` | — | — |
| 名前メニュー | `thread:cursor.menu.mname` | — | — |
| IPメニュー | `thread:cursor.menu.ip` | — | — |
| Hostメニュー | `thread:cursor.menu.host` | — | — |
| トリップメニュー | `thread:cursor.menu.trip` | — | — |
| レスツリーメニュー | `thread:cursor.menu.tree` | — | — |
| サムネイルメニュー | `thread:cursor.menu.thumb` | — | — |
| IDポップアップ | `thread:cursor.popup.id` | — | — |
| BBSSLIPポップアップ | `thread:cursor.popup.id2` | — | — |
| BEポップアップ | `thread:cursor.popup.bebase` | — | — |
| 名前ポップアップ | `thread:cursor.popup.mname` | — | — |
| IPポップアップ | `thread:cursor.popup.ip` | — | — |
| Hostポップアップ | `thread:cursor.popup.host` | — | — |
| トリップポップアップ | `thread:cursor.popup.trip` | — | — |
| レスツリーポップアップ | `thread:cursor.popup.tree` | — | — |
| サムネイルポップアップ | `thread:cursor.popup.thumb` | — | — |
| レスポップアップ | `thread:cursor.popup.an` | — | — |
| 選択中のレスをコピー | `thread:range.copy` | — | — |
| 選択中のレスをミュート切り替え | `thread:range.mute` | — | — |
| 選択中のレスを通常ミュート | `thread:range.mute.normal` | — | — |
| 選択中のレスを透明ミュート | `thread:range.mute.nop` | — | — |
| ローカルスレッド追加メニュー | `res:wall.pin` | — | 動的 |
| レス内フォーカスを次へ移動 | `control:resfocus.next` | — | — |
| レス内フォーカスを前へ移動 | `control:resfocus.prev` | — | — |
| レス内フォーカスを実行 | `control:resfocus.exec` | — | — |
| レス内フォーカスのメニュー | `control:resfocus.menu` | — | — |
| レスをローカルスレッドへ追加 | `wall:pin.res` | — | — |
| フレーズに追加 | `phrase:add` | 1 | 動的 |
| クリップボードからフレーズに追加 | `phrase:add.clipboard` | — | — |

## 書き込み欄 {#commands-postform}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| 書き込み欄の文を消去 | `postform:clear` | — | — |
| お絵かきを起動 | `drawing:init` | — | — |
| お絵かき画像を削除 | `drawing:delete` | — | 動的 |
| お絵かき画像をファイルから開く | `drawing:select` | — | — |
| お絵かきを閉じる | `drawing:close` | — | 動的 |
| 書き込みIPを確認 | `post:ip.check` | — | — |
| 書き込み欄と同期するファイル選択 | `post:filesync.inputfile` | — | — |
| 同期ファイルを開く | `post:filesync.openfile` | — | — |
| 同期ファイルクリア | `post:filesync.clear` | — | — |
| 削除パスを変更 | `post:delpass.input` | — | — |
| 本文へ文字をセット | `post:body.set.template` | 1 | — |
| 書き込みを実行 | `tab:post.execute` | — | — |

## 板 {#commands-board}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| スレッドのタイトルコピー | `board:copy.title` | — | — |
| スレッドのURLコピー | `board:copy.url` | — | — |
| スレッドのタイトル+URLコピー | `board:copy.title_url` | — | — |
| ソート:標準 | `tab:sortby.default` | — | — |
| ソート:通し番号 | `tab:sortby.an` | — | — |
| ソート:増レス | `tab:sortby.delta` | — | — |
| ソート:勢い | `tab:sortby.speed` | — | — |
| ソート:レス数 | `tab:sortby.resnum` | — | — |
| ソート:最終レス | `tab:sortby.lastres` | — | — |
| ソート:作成日時 | `tab:sortby.pubdate` | — | — |
| ソート:タイトル | `tab:sortby.title` | — | — |
| ソート:発行者名 | `tab:sortby.publisher` | — | — |
| ソート:書き込み回数 | `tab:sortby.posted` | — | — |
| ソート(強制):標準 | `tab:sortby.force.default` | — | — |
| ソート(強制):通し番号 | `tab:sortby.force.an` | — | — |
| ソート(強制):増レス | `tab:sortby.force.delta` | — | — |
| ソート(強制):勢い | `tab:sortby.force.speed` | — | — |
| ソート(強制):レス数 | `tab:sortby.force.resnum` | — | — |
| ソート(強制):最終レス | `tab:sortby.force.lastres` | — | — |
| ソート(強制):作成日時 | `tab:sortby.force.pubdate` | — | — |
| ソート(強制):タイトル | `tab:sortby.force.title` | — | — |
| ソート(強制):発行者名 | `tab:sortby.force.publisher` | — | — |
| ソート(強制):書き込み回数 | `tab:sortby.force.posted` | — | — |
| カーソルのあるスレを開く | `board:cursor-request` | — | — |
| カーソルのあるスレをバックグラウンドで開く | `board:cursor-request.background` | — | — |
| カーソルのあるスレを置き換えて開く | `board:cursor-request.replace` | — | — |
| カーソルのあるスレをミュート | `board:cursor-request.mute.threadkey` | — | 動的 |
| カーソルのあるスレの投稿者をミュート | `board:cursor-request.mute.publisher` | — | 動的 |
| カーソルのあるスレを削除 | `board:cursor-request.delete` | — | — |
| カーソルのあるスレを開いて新着へ移動 | `board:cursor-request.latest` | — | — |
| カーソルのあるスレを開いて一番下へ移動 | `board:cursor-request.bottom` | — | — |
| 過去ログ切り替え | `board:logmode.switch` | — | — |
| ログ表示をライブスレッドへ変更 | `board:logmode.live` | — | — |
| ログ表示を過去スレッドへ変更 | `board:logmode.past` | — | — |
| 過去スレッドを再構築 | `board:pastlog.rebuild` | — | — |
| ヘッダーを表示 | `board:switch.header` | — | 動的 |
| 未読スレ優先切り替え | `board:switch.upper_unread` | — | 動的 |
| 新着スレ優先切り替え | `board:switch.upper_newly` | — | 動的 |
| 既読スレ優先切り替え | `board:switch.upper_read` | — | 動的 |
| 優先ワード優先切り替え | `board:switch.upper_keyword` | — | 動的 |
| お気に入り優先切り替え | `board:switch.upper_favorite` | — | 動的 |
| 書き込み優先切り替え | `board:switch.upper_posted` | — | 動的 |
| 書けないスレを下へ | `board:switch.drop` | — | 動的 |
| 書けないスレを下へ(強制) | `board:switch.drop_force` | — | 動的 |
| 板情報の更新 | `board:settings.update` | — | — |
| 落ちたスレッドを削除 | `board:log.clear.drop` | — | — |
| 開いていないスレッドをすべて削除 | `board:log.clear.all` | — | — |
| 板のデータをすべて削除 | `board:delete` | — | — |
| 新規ミュートを透明化 | `board:mute.noprint` | — | 動的 |
| NG/強調を一時的に無効化 | `board:ng.invalidate` | — | 動的 |
| NGになっているスレッドのみ表示 | `board:ng.only` | — | 動的 |
| 非表示レスのリスト | `board:nop.list` | — | 動的 |
| NGレスのリスト | `board:ng.list` | — | — |
| 優先ワード設定 | `board:keywords.modal` | — | — |
| 未読スレッドをすべて開く | `board:unread.open` | — | — |
| 新着スレッドをすべて開く | `board:new_arrival.open` | — | — |
| 選択したスレッドをすべて開く | `board:range.open` | — | — |
| 開いているスレッドを閉じる | `board:range.close` | — | — |
| ログを削除 | `board:range.delete` | — | — |
| URLをコピー | `board:range.copy.url` | — | — |
| タイトルをコピー | `board:range.copy.title` | — | — |
| タイトルとURLをコピー | `board:range.copy.title_url` | — | — |

## 設定画面 {#commands-setting}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| スキン編集 | `resskin:edit` | — | — |
| スキン再読込 | `resskin:reload` | — | — |
| 設定:次のフィールドへ移動 | `setting:cursor.next` | — | — |
| 設定:前のフィールドへ移動 | `setting:cursor.prev` | — | — |
| 設定:次のタブへフォーカス | `setting:tab.next` | — | — |
| 設定:前のタブへフォーカス | `setting:tab.prev` | — | — |
| 設定:タブへ移動 | `setting:tab.enter` | — | — |
| 設定:一番上へスクロール | `setting:scroll.top` | — | — |
| 設定:一番下へスクロール | `setting:scroll.bottom` | — | — |
| IPv4によるネットワーク接続を優先する | `setting:switch.ipv4_first` | — | 動的 |

## ワークスペース {#commands-workspace}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| 新規ワークスペース作成 | `workspace:create` | — | — |
| 次のワークスペースへ移動 | `workspace:next` | — | — |
| 前のワークスペースへ移動 | `workspace:prev` | — | — |
| 指定したワークスペースへ移動 | `workspace:activate` | 1 | — |
| ワークスペースを閉じる | `workspace:close` | — | 動的 |
| ワークスペース:ロック切り替え | `workspace:lock-toggle` | — | 動的 |
| ワークスペース:ロック | `workspace:lock` | — | — |
| ワークスペース:ロック解除 | `workspace:unlock` | — | — |
| 入力履歴(スレッド)削除 | `workspace:input_history.clear.thread` | — | — |
| 入力履歴(板)削除 | `workspace:input_history.clear.board` | — | — |
| 閉じたスレッド履歴をすべて消去 | `workspace:closed.thread.truncate` | — | — |
| 閉じた板履歴をすべて消去 | `workspace:closed.board.truncate` | — | — |
| スレッドタブの多段切り替え | `workspace:threadtab.nowrap` | — | — |
| 板タブの多段切り替え | `workspace:boardtab.nowrap` | — | — |
| スレッドタブの表示切り替え | `workspace:threadtab.visible` | — | — |
| 板タブの表示切り替え | `workspace:boardtab.visible` | — | — |
| アクティブスレッドのオートロード切り替え | `workspace:thread.autoload` | — | 動的 |

## お気に入り・同期 {#commands-favorite}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| お気に入りに追加 | `favorites:add` | — | 動的 |
| お気に入りから削除 | `favorites:delete` | — | 動的 |
| お気に入りの切り替え | `favorites:toggle` | — | 動的 |
| お気に入りに★1で追加 | `favorites:add.star1` | — | — |
| お気に入りに★2で追加 | `favorites:add.star2` | — | — |
| お気に入りに★3で追加 | `favorites:add.star3` | — | — |
| お気に入りに★4で追加 | `favorites:add.star4` | — | — |
| お気に入りに★5で追加 | `favorites:add.star5` | — | — |
| 全てのタブをお気に入りに追加 | `favorites:add.alltabs` | — | — |
| お気に入りのスレッドを更新 | `favorites:thread.reload` | — | — |
| お気に入りを購読状態にする | `favorites:edit.subscribe` | — | — |
| お気に入りを同期状態にする | `favorites:edit.sync` | — | — |
| 未読のお気に入りを開く | `favorites:open.unread` | — | — |
| 未読のお気に入りをすべて開く | `favorites:open.unread.all` | — | — |
| お気に入りのスレッドをすべてコピー | `favorites:copy.urls` | — | — |
| スレッド同期 | `sync:update` | — | 動的 |
| Sync2ch設定 | `sync:setting` | — | — |

## スクロール {#commands-scroll}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| 一番下へスクロール | `control:scroll-bottom` | — | — |
| 一番上へスクロール | `control:scroll-top` | — | — |
| 1行下へスクロール | `control:scroll-down` | — | — |
| 1行上へスクロール | `control:scroll-up` | — | — |
| 1ページ下へスクロール | `control:scroll-pagedown` | — | — |
| 1ページ上へスクロール | `control:scroll-pageup` | — | — |
| 終始点へスクロール | `control:scroll-toggle` | — | — |
| ここまで読んだ | `control:cursor-force-set` | — | — |
| 新着へ移動 | `control:goto-new` | — | — |
| 読んだ場所へ移動 | `control:goto-koko` | — | — |
| 板:一番下へスクロール | `control:scroll-board-bottom` | — | — |
| 板:一番上へスクロール | `control:scroll-board-top` | — | — |
| 板:1行下へスクロール | `control:scroll-board-down` | — | — |
| 板:1行上へスクロール | `control:scroll-board-up` | — | — |
| 板:1ページ下へスクロール | `control:scroll-board-pagedown` | — | — |
| 板:1ページ上へスクロール | `control:scroll-board-pageup` | — | — |
| 板:終始点へスクロール | `control:scroll-board-toggle` | — | — |
| スレッド:一番下へスクロール | `control:scroll-thread-bottom` | — | — |
| スレッド:一番上へスクロール | `control:scroll-thread-top` | — | — |
| スレッド:1行下へスクロール | `control:scroll-thread-down` | — | — |
| スレッド:1行上へスクロール | `control:scroll-thread-up` | — | — |
| スレッド:1ページ下へスクロール | `control:scroll-thread-pagedown` | — | — |
| スレッド:1ページ上へスクロール | `control:scroll-thread-pageup` | — | — |
| スレッド:終始点へスクロール | `control:scroll-thread-toggle` | — | — |
| スレッド:カーソルを下へ移動 | `control:cursor-thread-down` | — | — |
| スレッド:カーソルを上へ移動 | `control:cursor-thread-up` | — | — |
| スレッド:次のランドマーク位置へ移動 | `control:cursor-thread-landmark-down` | — | — |
| スレッド:前のランドマーク位置へ移動 | `control:cursor-thread-landmark-up` | — | — |
| 下方向へのホイールスクロール | `control:scroll.wheel.down` | — | — |
| 上方向へのホイールスクロール | `control:scroll.wheel.up` | — | — |
| 板:カーソルを下へ移動 | `control:cursor-board-down` | — | — |
| 板:カーソルを上へ移動 | `control:cursor-board-up` | — | — |

## ポップアップ {#commands-popup}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| ポップアップ:1行下へスクロール | `control:scroll-popup-down` | — | — |
| ポップアップ:1行上へスクロール | `control:scroll-popup-up` | — | — |
| ポップアップ:1ページ下へスクロール | `control:scroll-popup-pagedown` | — | — |
| ポップアップ:1ページ上へスクロール | `control:scroll-popup-pageup` | — | — |
| ポップアップ:一番下へスクロール | `control:scroll-popup-bottom` | — | — |
| ポップアップ:一番上へスクロール | `control:scroll-popup-top` | — | — |
| スレッドの最初をポップアップ | `popup:res.head` | — | — |
| ポップアップを消す | `popup:clear` | — | — |
| ポップアップを閉じる | `popup:close` | — | — |
| 抽出ポップアップ | `popup:res.extract` | — | — |

## 画像・ビューア {#commands-image-viewer}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| 画像ビューアを起動 | `imagewindow:open` | — | — |
| 画像ビューアを閉じる | `imagewindow:close` | — | — |

## 画像 {#commands-image}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| 画像を名前をつけて保存 | `image:save` | — | 動的 |
| 画像を直接保存 | `image:save.directly` | — | 動的 |
| 画像を再取得する | `image:request.manual` | — | 動的 |
| 画像のロックを切り替え | `image:lock` | — | 動的 |
| 画像を削除 | `image:delete` | — | 動的 |
| 画像をNGにする | `image:ng` | — | 動的 |
| 画像をぼかす | `image:mosaic` | — | 動的 |
| 画像の整合性をチェック | `image:consistency.check` | — | — |
| 孤立した画像ファイルを削除 | `image:cleanup.orphans` | — | — |
| アップロード履歴 | `upload:modal.history` | — | — |

## 画像ポップアップ {#commands-popupviewer}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| 画像をポップアップで開く | `popupimage:popup` | — | 動的 |
| 次の画像 | `popupviewer:image.next` | — | — |
| 前の画像 | `popupviewer:image.prev` | — | — |
| ウィンドウを閉じる | `popupviewer:close_window` | — | — |
| 画像ポップアップを隠す | `popupviewer:close` | — | — |
| 画像を再読み込み | `popupviewer:image.reload` | — | 動的 |
| 画像を削除 | `popupviewer:image.delete` | — | 動的 |
| 画像をロック | `popupviewer:image.lock` | — | 動的 |
| 画像をぼかす | `popupviewer:image.blur` | — | 動的 |
| 画像をNG | `popupviewer:image.ng` | — | 動的 |
| ズームアップ | `popupviewer:image.zoom.up` | — | — |
| ズームアウト | `popupviewer:image.zoom.out` | — | — |
| 100%の大きさにする | `popupviewer:image.zoom.actual` | — | — |
| 元の大きさにする | `popupviewer:image.zoom.reset` | — | — |
| 明るさを上げる | `popupviewer:image.brightness.up` | — | — |
| 明るさを下げる | `popupviewer:image.brightness.down` | — | — |
| 明るさを戻す | `popupviewer:image.brightness.reset` | — | — |
| 右回転 | `popupviewer:image.rotate.right` | — | — |
| 左回転 | `popupviewer:image.rotate.left` | — | — |
| 回転をリセット | `popupviewer:image.rotate.reset` | — | — |
| 外部アプリケーションで開く | `popupviewer:send.application` | — | 動的 |
| 外部ブラウザで開く | `popupviewer:send.browser` | — | 動的 |
| 元のレスを開く | `popupviewer:send.res` | — | 動的 |
| 画像ビューアで開く | `popupviewer:send.media` | — | 動的 |
| 画像を保存 | `popupviewer:send.save` | — | 動的 |
| 画像を直接保存 | `popupviewer:send.save.directly` | — | 動的 |
| キャッシュファイルの場所を開く | `popupviewer:send.cache_file` | — | 動的 |
| 画像の出現位置を固定 | `popupviewer:window.switch.fixed` | — | — |
| 最大幅、高さをリセット | `popupviewer:window.resetsize` | — | — |
| コンテキストメニューを開く | `popupviewer:contextmenu` | — | — |

## 対象限定の操作 {#commands-unique}

| 表示名 | コマンドID | 引数 | 状態依存 |
| --- | --- | --- | --- |
| どんぐり大砲を撃つ | `uc:5ch_net.acorn.cannon` | — | 動的 |
| 偵察する | `uc:5ch_net.acorn.scout` | — | 動的 |
| ハンターのステータスを確認 | `uc:5ch_net.acorn.hunter.status` | — | 動的 |
| ハンターとしてログイン | `uc:5ch_net.acorn.hunter.login` | — | 動的 |
| どんぐり大砲の速射モード | `uc:5ch_net.acorn.hunter.quickmode` | — | 動的 |
| IDをSikiguardから除外する | `uc:5ch_net.sikiguard.ignore_id` | — | — |

