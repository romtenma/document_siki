---
title: 設定リファレンス
description: 設定項目の説明・保存用ID・入力形式・定義上の初期値と、共通・サイト・板・ワークスペースの適用範囲を調べます。
---

# 設定リファレンス

設定の場所が分からない場合は、まず[設定の探し方と適用範囲](../customization/settings.md)を参照してください。この一覧は設定項目の検索と照合に使います。

## 値と範囲の読み方 {#reading}

「入力欄の初期値」は画面定義に直接書かれた値です。インストール後の保存値、サイトの標準値、継承・移行済みの現在値とは一致しない場合があります。数値の選択肢やフラグの意味は設定画面で確認してください。

空文字は空欄、true／falseはオン／オフです。「式による」は値が計算式や他の定義に依存し、「指定なし」はこの項目に初期値の記載がないことを示します。どちらも既定値を推測していません。

IDに含まれる `siteedit.*.{id}` は共通・サイト・板・スレッドで継承する設定です。一覧では通常の分類へまとめています。`render.workspace.{id}` はワークスペース、`theme` を含む項目はテーマなど、ほかのIDの範囲も項目によって異なります。すべてをサイト・板ごとに変えられるわけではありません。

独立した編集画面の[AI](../features/ai.md)、[NGルール](../features/ng-and-mute.md)、[レススキン](../customization/response-skins.md)、[ユーザーコマンド](../customization/user-commands.md)、[プラグイン](../customization/plugins.md)などの内部項目は一覧外です。非表示条件付きの項目や、計算で追加する選択肢も含めて完全な全設定一覧ではありません。

下表は準備版の画面定義から抽出しています。正式版の値と動作確認はこれからです。横長の表は左右へスクロールして読めます。

## システム {#settings-common}

| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |
| --- | --- | --- | --- | --- |
| 板・スレッドの日付表示の言語 | `siteedit.render.{id}.dlocale` | select | `"ja"` | 日付表示／上級設定 |
| アップデートの確認タイミング | `user.system.autoupdate.enable` | select | `"init"` | アップデートの確認／再起動が必要 |
| βバージョンを受信する | `user.system.autoupdate.channel` | select | `"latest"` | アップデートの確認／上級設定 |
| アプリアイコン<br>変更は再起動後に反映されます<br>タスクバーに固定している場合などは反映されない場合もあります | `config.system.app_icon` | select | `"default"` | インターフェース／再起動が必要 |
| スムーズスクロールの設定 | `config.system.smooth_scrolling` | select | `3` | インターフェース／再起動が必要 |
| システムのテーマカラー(Dark/Light/System)<br>右クリックメニューの色やデフォルトテーマに影響します | `user.system.nativetheme` | select | `"system"` | インターフェース／再起動が必要 |
| 音声出力のボリューム | `user.interface.speech_volume` | range | `0.7` | インターフェース |
| 自動バックアップの有効化<br>起動時に前回のバックアップからの間隔が設定時間以上開いていた場合にバックアップします | `user.system.backup.enable` | checkbox | `true` | バックアップ／再起動が必要 |
| バックアップ間隔(Hours) | `user.system.backup.interval` | number | `24` | バックアップ／再起動が必要 |
| 保存するバックアップの個数<br>自動バックアップの際古いものから消されます | `user.system.backup.quantity` | number | `7` | バックアップ／再起動が必要 |
| 表示する動作ログのレベル | `user.system.log.visible_level` | select | `"info"` | ログ／再起動が必要 |
| 表示する動作ログの多さ | `user.system.log.view_lines` | select | `50` | ログ／上級設定／再起動が必要 |
| 保存する動作ログのレベル | `user.system.log.save_level` | select | `"verbose"` | ログ／上級設定／再起動が必要 |
| ネットワークログでクエリ情報も保存する<br>[query]: {保存されるクエリ情報} という形式で記録されます | `config.system.netlog_save_query` | checkbox | `false` | ログ／再起動が必要 |
| 実行されたコマンドをコンソールに表示 | `user.system.console.executed` | checkbox | `false` | ログ／上級設定 |
| スレッドや板のログが保存される場所 | `config.system.log_dir` | directory | 指定なし | ファイルの場所 |
| スレッドの画像やサムネイルが保存される場所 | `config.system.img_dir` | directory | 指定なし | ファイルの場所 |
| 画像を保存する場所 | `config.system.save_dir` | directory | 指定なし | ファイルの場所 |
| プラグインを保存する場所 | `config.system.plugin_dir` | directory | 指定なし | ファイルの場所 |
| バックアップを保存する場所 | `config.system.backup_dir` | directory | 指定なし | ファイルの場所 |
| セッションファイルが自動保存されるまでのアイドル時間(ミリ秒)を設定します<br>小さくするとより頻繁にディスクへの書き込みが発生します | `config.system.session_interval_time` | number | `20000` | セッション／上級設定 |
| 起動時に実行するコマンド1 | `user.system.startup.command1` | command | `""` | 起動コマンド |
| 起動時に実行するコマンド2 | `user.system.startup.command2` | command | `""` | 起動コマンド |
| 起動時に実行するコマンド3 | `user.system.startup.command3` | command | `""` | 起動コマンド |
| コンテキストメニューにアイコンを表示 | `user.system.contextmenu.iconset` | checkbox | `true` | コンテキストメニュー |
| 各パネルの右クリックメニューに大きさを変更するメニューを追加する | `user.interface.contextmenu.sizer` | checkbox | `true` | コンテキストメニュー |
| コンテキストメニューのアイコンの大きさ(システム) | `user.system.contextmenu.iconsize` | select | `16` | コンテキストメニュー／上級設定 |
| コンテキストメニューにアクセスキーを設定する<br>コンテキストメニューを開いている時に表示されているキーを押すと実行されます | `user.system.contextmenu.accesskey` | checkbox | 式による | コンテキストメニュー／上級設定 |
| コンテキストメニューの右側にアクセスキーを表示する | `user.system.contextmenu.print_accesskey` | checkbox | 式による | コンテキストメニュー／上級設定 |
| スレッドや板内の検索/フィルタにmigemoを利用する<br>標準状態では辞書が無いため漢字の検索には対応していません<br>miscディレクトリに&#96;migemo-compact-dict&#96;という名前の辞書ファイルを配置することで漢字の検索に対応します | `user.system.search.migemo` | checkbox | `false` | 検索／再起動が必要 |
| ハードウェアアクセラレーションを有効にする | `config.system.hardware_acceleration` | checkbox | `true` | Chromium／再起動が必要 |
| 通常はあまり使わないと思われる上級者向け設定を表示します | `user.system.advanced_settings` | checkbox | `false` | 上級設定 |

## レイアウト {#settings-layout}

| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |
| --- | --- | --- | --- | --- |
| コンパクトモードをオンにする<br>スレッド、板のボタンがヘッダに集約された状態を初期値に変えます | `user.interface.action.compact` | checkbox | `false` | アクション |
| 最大化、最小化、閉じるのアイコンを小さくする(カスタムタイトルバーでのみ有効) | `user.interface.titlebar.smallicon` | checkbox | `false` | ウィンドウ |
| タブで設定画面を開く | `user.system.settingwindow.intab` | checkbox | `false` | ウィンドウ |
| ウィンドウが非アクティブな時の背景透過率<br>100に近づくほど透明になります | `user.system.window.unfocused_opacity_rate` | number | `0` | ウィンドウ／再起動が必要 |
| user.system.window.title | `user.system.window.title` | text | `"${title} - ${appName}"` | ウィンドウ |
| ワークスペース変更時にワークスペース名を表示する | `user.interface.workspace.screencast` | checkbox | `false` | 画面表示 |
| 保存ログ検索を開く場所を選択します。変更は次に検索を開くときから反映されます。 | `user.interface.logsearch.open_in` | select | `"sidepanel"` | 検索 |
| オン: スレッド/板分割サイズをピクセル固定で保持します<br>オフ: 画面/パネル幅に応じて比率でリサイズします | `user.interface.layout.size_fixed_mode` | checkbox | `true` | レイアウトサイズ |
| URLバーのタイトル表示フォーマット | `user.interface.urlbar.titleformat` | select | `0` | URLバー |
| ブラウザビューの幅(%) | `user.interface.webcontent.width` | number | `70` | ブラウザビュー(ちょっと見る)／上級設定 |
| ブラウザビューの高さ(%) | `user.interface.webcontent.height` | number | `85` | ブラウザビュー(ちょっと見る)／上級設定 |

## 集中モード {#settings-focus}

| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |
| --- | --- | --- | --- | --- |
| 集中モードを有効にする | `user.interface.focus_mode.enabled` | checkbox | `false` | 表示設定 |
| 集中モードで非表示にする領域 | `user.interface.focus_mode.hidden_regions` | checklist | `["footer","bookmarkBar","sidepanel","secondarySidepanel","threadFooter","boardFooter"]` | 表示設定 |
| 集中モードを有効にする際に表示される初回説明モーダルを表示しない | `user.interface.focus_mode.hide_description_modal` | checkbox | `false` | 説明 |

## ネットワーク {#settings-network}

| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |
| --- | --- | --- | --- | --- |
| 全ワークスペースで同じネットワークセッションを使う | `config.system.single_persist_session` | checkbox | `false` | セッション／上級設定／再起動が必要 |
| スレッドや板のタイムアウト(ミリ秒) | `user.interface.tab.request_timeout` | number | `15000` | ネットワーク／上級設定 |
| スレッドや板の更新間隔の制限(ミリ秒) | `user.interface.tab.request_interval` | number | `3000` | ネットワーク／上級設定 |
| アプリケーション全体で使われるプロキシ設定<br>画像、ブラウザビューなどで使用されます<br>ワークスペースのプロキシ設定がある場合はそちらが優先されます | `config.system.proxy` | text_history | `""` | ネットワーク |
| IPv4によるネットワーク接続を優先する | `user.system.net.ipv4_first` | checkbox | `false` | ネットワーク |
| Cloudflareによる認証が入った時に自動で認証用のページを表示する | `user.system.net.auto_clouflare_challenge` | checkbox | `true` | ネットワーク |
| HTTP/2を利用する | `config.system.http2` | checkbox | `true` | ネットワーク |
| 画像取得時にHTTP/2を利用する | `config.system.image_http2` | checkbox | `true` | ネットワーク／再起動が必要 |
| 画像サーバーの証明書エラーを無視する | `user.system.image.ignore_tls_unauthorized` | checkbox | `false` | ネットワーク／上級設定／再起動が必要 |
| ネットワークエラー時のアラートを表示しない | `user.system.net.hide.error_alert` | checkbox | `false` | ネットワーク |
| 新着チェック時に同時に確認する板の数 | `user.system.checkserver.chunk_size` | number | `20` | 新着チェック |
| 新着チェック時の同時チェックの間隔(ミリ秒) | `user.system.checkserver.chunk_wait` | number | `0` | 新着チェック |
| 起動時に同期を行う | `user.system.sync.after_init` | select | `0` | 同期設定／上級設定 |
| 終了前に同期を行う | `user.system.sync.before_quit` | select | `0` | 同期設定／上級設定 |
| サスペンド前に同期を行う | `user.system.sync.before_suspend` | checkbox | `false` | 同期設定／上級設定／再起動が必要 |
| レジューム後に同期を行う | `user.system.sync.after_resume` | checkbox | `false` | 同期設定／上級設定／再起動が必要 |
| 外部ブラウザで開く際のコマンドを設定できます<br>userコマンドを設定することで標準でchromeのシークレットモードで開く等の挙動に変更できます | `user.system.open_external_command` | command | `""` | 外部ブラウザ設定／上級設定 |
| インラインURL設定<br>twitterやyoutube等のインラインで展開されるコンテンツをクリックしたときの挙動 | `user.system.inline_url_command` | select | `"uri:open-browserview"` | 外部ブラウザ設定 |
| 外部ブラウザで開くことの出来るURLのスキームのリスト<br> | `user.system.open_external_scheme` | textlist | `["http","https","ftp","ftps","steam","mms"]` | 外部ブラウザ設定／上級設定 |
| デフォルトの検索エンジン設定<br>&lt;text&gt;の位置に検索文字列が入ります | `user.system.url.searchengine` | datalist | `"https://www.google.com/search?q=&lt;text&gt;"` | 検索 |
| デフォルトのスレッド検索設定<br>&lt;text&gt;の位置に検索文字列が入ります | `user.system.url.searchthread` | datalist | `"https://ff5ch.syoboi.jp/?q=&lt;text&gt;"` | 検索 |
| アドレスバーで実行するコマンド1 | `user.interface.urlbar.command1` | command | `"uri:open.searchthread"` | 検索 |
| アドレスバーで実行するコマンド2 | `user.interface.urlbar.command2` | command | `""` | 検索 |
| アドレスバーで実行するコマンド3 | `user.interface.urlbar.command3` | command | `""` | 検索 |
| ブラウザビューに広告ブロックを適用<br>miscディレクトリ内にadblock_filter.txtという名前でAdblock Plus形式のフィルターテキストを配置してください | `config.system.adblock_on` | checkbox | `false` | 広告ブロック／再起動が必要 |

## マウス {#settings-mouse}

| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |
| --- | --- | --- | --- | --- |
| マウスジェスチャの有効化<br>マウスジェスチャは右クリックを押しながらマウスを上下左右に移動させることで各種コマンドを実行できる機能です | `user.interface.mousegesture.enable` | checkbox | `true` | マウスジェスチャ |
| ジェスチャとして認知するマウスの移動距離(px) | `user.interface.mousegesture.stroke` | range | `30` | マウスジェスチャ／再起動が必要 |
| マウスジェスチャの実行コマンドを画面に表示<br>アクションパネルに表示する場合はパネルのコマンド設定のテキストからマウスジェスチャを設定してください | `user.interface.mousegesture.screencast` | select | `1` | マウスジェスチャ |
| ジェスチャの画面表示をジェスチャ開始位置を中心に表示します | `user.interface.mousegesture.screencast.at_startpoint` | checkbox | `true` | マウスジェスチャ |
| Mouse Gesture Meta Key Mode | `user.interface.mousegesture.metakeymode` | checkbox | 式による | マウスジェスチャ／再起動が必要 |
| マウスジェスチャで使用するボタンを選択 | `user.interface.mousegesture.trigger.button` | select | `"right"` | マウスジェスチャ |
| コンテキストメニューのトリガーボタンを押したときに対象のレス、スレッドを選択状態にする | `user.interface.mousegesture.rightclick_select` | checkbox | `false` | マウスジェスチャ |
| 中ボタンクリック(ホイール)を押したときに対象のレス、スレッドを選択状態にする | `user.interface.mousegesture.middleclick_select` | checkbox | `false` | マウスジェスチャ |
| スーパードラッグ機能を有効化<br>リンクやID等をドラッグすることでコマンドを実行できる機能です | `user.interface.superdrag.enable` | checkbox | `false` | スーパードラッグ |
| スーパードラッグで表示される円の最大直径 | `user.interface.superdrag.radius.max` | range | `200` | スーパードラッグ／上級設定 |
| スレッドや板を選択可能な状態にする<br>Ctrlを押しながらクリックで追加、Shiftを押しながらクリックで始点から連続選択 | `user.interface.mouse.selection.enable` | checkbox | `true` | マウスによる選択 |
| マウスボタンを押した瞬間にコンテキストメニューを表示します<br>マウスジェスチャとの干渉に注意してください | `user.interface.contextmenu.mousedown_popup` | checkbox | `false` | マウス全般／上級設定 |
| コンテキストメニューを開くボタンを選択 | `user.interface.contextmenu.trigger.button` | select | `"right"` | マウス全般／上級設定／再起動が必要 |
| マウスカーソル下のペインをアクティブにする | `user.interface.pane.hover_focus` | checkbox | `true` | マウス全般 |
| ホイール回転時のスクロールを制御する | `user.system.mouse.control_wheel` | checkbox | `false` | ホイール回転時のスクロール |
| ホイール回転時のスクロールの移動距離 | `user.system.mouse.wheel_distance` | range | `120` | ホイール回転時のスクロール |
| ホイール回転時のスクロールの加速度 | `user.system.mouse.wheel_acceralator` | range | `1` | ホイール回転時のスクロール |
| スムーススクロールの滑らかさ | `user.system.mouse.wheel_rate` | select | 式による | ホイール回転時のスクロール |
| マウスの中ボタン(ホイールクリック)で起動するコマンド設定<br>※オートスクロールと競合する場合うまく動かない可能性があります。 | `user.system.mouse.button2command` | command | `""` | 5ボタンマウス／上級設定 |
| マウスの第4ボタンで起動するコマンド設定 | `user.system.mouse.button4command` | command | `""` | 5ボタンマウス |
| マウスの第5ボタンで起動するコマンド設定 | `user.system.mouse.button5command` | command | `""` | 5ボタンマウス |
| トラックパッドを使う<br>チェックを入れるとスクロール更新が暴発するのを防ぎます | `config.system.trace_trackpad_event` | checkbox | 式による | トラックパッド |
| スワイプ操作によるコマンドを実行 | `config.system.swipe_detected` | checkbox | 式による | トラックパッド／再起動が必要 |
| タッチジェスチャー機能を有効化<br>タブレット環境でタッチジェスチャを使えるようにします | `user.interface.touchgesture.enable` | checkbox | `true` | タッチジェスチャー |

## キーボード {#settings-keyboard}

| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |
| --- | --- | --- | --- | --- |
| キーを押し続けたときのコマンド実行間隔(ms)です<br>描画にもたつきが見られる場合は大きい値にしてください | `user.system.key.repeat_interval` | number | `50` | キーボード／上級設定 |
| キーボード入力を画面に表示します | `user.system.screencast.enable` | select | `0` | キーボード／上級設定 |

## タブ {#settings-tab}

| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |
| --- | --- | --- | --- | --- |
| 新規タブを作ったときの挙動 | `user.interface.tab.created_activation` | select | `"last"` | タブ |
| スレッド内のリンクから新規タブを作ったときの挙動 | `user.interface.tab.created_activation_from_thread` | select | `"next"` | タブ |
| タブを閉じた時にどのタブをアクティブにするか | `user.interface.tab.closed_activation` | select | `"prev"` | タブ |
| 一度のリクエストで同時に開くことが出来るタブの数 | `user.interface.tab.multi_request_limit` | number | `10` | タブ／上級設定 |
| 板のスレッド一覧からスレッドを開いたときのタブの開き方 | `user.interface.tab.thread.single_replace` | select | `0` | スレッドのタブ |
| ワークスペースのスレッドタブの最大数 | `user.interface.thread.tab_limit` | number | `300` | スレッドのタブ |
| タブが最大数に達したときに新規タブを作った時の挙動 | `user.interface.thread.tab_limit_replace` | select | `0` | スレッドのタブ |
| 閉じたスレッドタブの保存件数 | `user.interface.thread.closed_limit` | number | `30` | スレッドのタブ |
| スレッドタブ上でのホイール動作時にコマンド(デフォルトでは表示タブの前後移動)を実行する | `user.interface.thread.tab_wheelexec` | checkbox | `true` | スレッドのタブ |
| スレッドタブ上でのホイール動作時スクロールさせない | `user.interface.thread.tab_prevent_scroll` | checkbox | `true` | スレッドのタブ |
| スレッドをアクティブにした時板があれば同時にアクティブにする | `user.interface.tab.synchronous_board` | checkbox | `false` | スレッドのタブ |
| スレッドのタブ履歴で表示する最大数<br>大きいほどパフォーマンスが下がります | `user.interface.tab.recently_limit` | select | `200` | スレッドのタブ／再起動が必要 |
| サイドパネルから板を開いたときのタブの開き方 | `user.interface.tab.board.single_replace` | select | `0` | 板のタブ |
| ワークスペースの板タブの最大数 | `user.interface.board.tab_limit` | number | `300` | 板のタブ |
| タブが最大数に達したときに新規タブを作った時の挙動 | `user.interface.board.tab_limit_replace` | select | `0` | 板のタブ |
| 閉じた板タブの保存件数 | `user.interface.board.closed_limit` | number | `20` | 板のタブ |
| 板タブ上でのホイール動作時にコマンド(デフォルトでは表示タブの前後移動)を実行する | `user.interface.board.tab_wheelexec` | checkbox | `true` | 板のタブ |
| 板タブ上でのホイール動作時スクロールさせない | `user.interface.board.tab_prevent_scroll` | checkbox | `true` | 板のタブ |

## 板 {#settings-board}

| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |
| --- | --- | --- | --- | --- |
| 板の表示スタイル | `siteedit.render.{id}.board.res_skin` | select | `"board_default"` | スレッド一覧の表示 |
| ヘッダーの表示状態 | `siteedit.render.{id}.board.list_header` | checkbox | `true` | スレッド一覧の表示 |
| ヘッダーに表示する項目 | `siteedit.render.{id}.board.header_flags` | flags | `9189` | スレッド一覧の表示 |
| スレッド一覧の並び順 | `siteedit.render.{id}.board.sortby` | select | `"incres"` | 並び順 |
| 第二の並び順 | `siteedit.render.{id}.board.sortby2` | select | `"lastres"` | 並び順 |
| サムネイル画像の大きさ | `siteedit.render.{id}.board.thumb_size` | select | `80` | サムネイル |
| スレッドの画像からサムネイルを作成する | `siteedit.option.{id}.t2b_thumb` | checkbox | `false` | サムネイル |
| 優先表示に含める項目を選択 | `siteedit.render.{id}.board.upper_flags` | flags | 式による | スレッドの優先表示 |
| 板一覧の優先表示にチェックが入っている項目をドラッグ&amp;ドロップで並べ替えます<br>左から優先度が高い順となります | `siteedit.option.{id}.board_priority_order` | order | `["keyword","posted","unread","read","newly","favorite"]` | スレッドの優先表示 |
| siteedit.render.{id}.board.keywords | `siteedit.render.{id}.board.keywords` | textlist | 指定なし | スレッドの優先表示 |
| 書けないスレを下へ | `siteedit.render.{id}.board.except_drop` | checkbox | `true` | スレッドの優先表示 |
| スレ立て時刻の表示フォーマット | `siteedit.render.{id}.board.fns_pub_format` | datalist | `"$$$"` | 一覧の表示の詳細 |
| 更新時刻の表示フォーマット | `siteedit.render.{id}.board.fns_last_format` | datalist | `"$$$"` | 一覧の表示の詳細 |
| 閲覧時刻の表示フォーマット | `siteedit.render.{id}.board.fns_read_format` | datalist | `"$$$"` | 一覧の表示の詳細 |
| 書き込み時刻の表示フォーマット | `siteedit.render.{id}.board.fns_post_format` | datalist | `"$$$"` | 一覧の表示の詳細 |
| タイトルに含まれる表示できない文字(&amp;#65279;など)除去する | `siteedit.option.{id}.remove_title_unvisible_char` | checkbox | `true` | 一覧の表示の詳細／上級設定 |
| スクロール/引っ張ってスレ一覧を更新させる。 | `user.interface.board.scroll_to_refresh` | checkbox | `true` | 板共通設定 |
| スクロール/引っ張って更新に必要なスクロール量<br> | `user.interface.board.scroll_to_refresh_threshold` | select | `30` | 板共通設定／再起動が必要 |
| 更新した際一番上へスクロールする | `user.interface.board.scroll_top_when_reload` | checkbox | `false` | 板共通設定 |
| スクロールにカーソルを追従させる | `user.interface.board.cursor.follow_scroll` | checkbox | `false` | 板共通設定 |
| スレッド一覧のサムネイルをポップアップさせる | `user.interface.image.board_thumbnail_popup` | checkbox | `false` | 板共通設定 |
| スレッド一覧をマウスで選択可能な状態にします<br>この設定がオンのとき板に対するスーパードラッグは無効化されます | `user.interface.board.selection.enable` | checkbox | `true` | 板共通設定 |
| スレッドのタイトルの一部分をマウスで選択出来るようにする | `user.interface.board.title_select` | checkbox | `false` | 板共通設定 |
| クリック | `linkclick.__d__bcon.L` | select | `"board:cursor-request"` | スレッドリストをクリックした時の挙動 |
| ダブルクリック | `linkclick.__d__bcon.W` | select | `""` | スレッドリストをクリックした時の挙動 |
| トリプルクリック | `linkclick.__d__bcon.T` | select | `""` | スレッドリストをクリックした時の挙動 |
| 中ボタン(ホイール)クリック | `linkclick.__d__bcon.M` | select | `""` | スレッドリストをクリックした時の挙動 |
| 左右同時クリック | `linkclick.__d__bcon.LR` | select | `""` | スレッドリストをクリックした時の挙動 |
| サイドメニューの最近読んだ板の履歴に表示させる板の数 | `user.interface.board.history_limit` | select | `25` | 読んだ板の履歴 |
| 最近読んだスレッドの最大保持数<br>この数字を超える数の履歴は切り捨てられます | `user.gpbc.recently.truncate` | select | `5000` | 最近読んだスレッド／再起動が必要 |

## スレッド {#settings-thread}

| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |
| --- | --- | --- | --- | --- |
| スレッドの表示方法 | `siteedit.render.{id}.thread.view_mode` | select | `"timeline"` | 表示方法 |
| スレッドの表示スタイル(スキン) | `siteedit.render.{id}.thread.res_skin` | select | `"default_thread"` | 表示方法 |
| フィルターを開いた状態でスレッドを開く | `siteedit.render.{id}.thread.filter_opened` | checkbox | `true` | フィルター |
| フィルタに表示する対象 | `siteedit.render.{id}.thread.filter_checked` | flags | `65535` | フィルター |
| 人気フィルタで表示する最低のレス数<br>0にするとレス数に応じて自動で表示数が決まります | `siteedit.option.{id}.popular_max` | number | `0` | フィルター |
| 返信フィルタで表示する最低のレス数<br>0にするとレス数に応じて自動で表示数が決まります | `siteedit.option.{id}.ancnum_max` | number | `0` | フィルター |
| スレッドのミニマップを表示 | `siteedit.render.{id}.thread.minimap_opened` | checkbox | `true` | ミニマップ |
| ミニマップにプロットする対象 | `siteedit.render.{id}.thread.minimap_flags` | flags | 式による | ミニマップ |
| ミニマップを左へ表示させる | `siteedit.render.{id}.thread.scrollbar_left` | checkbox | `false` | ミニマップ |
| 最後にスレッド情報を表示 | `siteedit.render.{id}.thread.bottom_info` | select | `1` | 読み終えた後の動作 |
| 次スレッド候補を表示<br>スレッドを読み終えた時最新のスレッドへ移動する | `siteedit.render.{id}.thread.track_auto` | select | 式による | 読み終えた後の動作 |
| 名無し(標準で表示される名前欄)を置換する | `siteedit.render.{id}.thread.nanashi_replace` | checkbox | `false` | レス表示 |
| 名無しの置換先 | `siteedit.render.{id}.thread.nanashi_default` | text | `""` | レス表示 |
| ID隠しに擬似的なID(__NULL__)を表示させる | `siteedit.render.{id}.thread.mark_hidden_id` | checkbox | `true` | レス表示 |
| 単発IDは省略する<br>スレッド内で一度しか出現しないIDを表示しないようにします | `siteedit.render.{id}.thread.hide_single_id` | checkbox | `false` | レス表示 |
| カウントを表示する対象の選択 | `siteedit.render.{id}.thread.id_count_target` | flags | 式による | レス表示 |
| レスより先のアンカーをポップアップさせる | `siteedit.option.{id}.future_anchor` | checkbox | `false` | 返信とツリー表示 |
| ツリー構造に含めない返信数の上限<br>この数以上アンカーがあるレスはツリーに含めません | `siteedit.option.{id}.anchor_fobidden` | number | `10` | 返信とツリー表示 |
| 数値参照文字は数値参照(&amp;#XXXX;)として表示 | `siteedit.option.{id}.apply_numref` | checkbox | `true` | 返信の判定の詳細／再起動が必要 |
| siteedit.option.{id}.regexp_anchor_comp | `siteedit.option.{id}.regexp_anchor_comp` | regexp | `""` | 返信の判定の詳細／上級設定／再起動が必要 |
| siteedit.option.{id}.regexp_aa_decision | `siteedit.option.{id}.regexp_aa_decision` | regexp | `""` | 返信の判定の詳細／上級設定／再起動が必要 |
| スクロール/引っ張ってスレッドを更新させる | `user.interface.thread.scroll_to_refresh` | checkbox | `true` | スレッド共通設定 |
| スクロール/引っ張って更新に必要なスクロール量<br> | `user.interface.thread.scroll_to_refresh_threshold` | select | `30` | スレッド共通設定／再起動が必要 |
| オートスクロール状態でスレッドが一番下にスクロールされているときのホイール動作でオートスクロールを再開/停止させる | `user.interface.thread.autoscroll_wheel_switch` | checkbox | `true` | スレッド共通設定 |
| 更新のあるスレッドのタブを開いたとき自動でリロードする | `user.interface.thread.forecast_reload` | checkbox | `true` | スレッド共通設定 |
| スクロールにカーソルを追従させる | `user.interface.thread.cursor.follow_scroll` | checkbox | `false` | スレッド共通設定 |
| スレッド更新時に新着レスの場所へスクロールする<br>更新前の画面下端からレス末尾までの残りが半画面以内の場合に移動します | `user.interface.thread.update_scroll` | select | `3` | スレッド共通設定 |
| スレッド表示中に数字を入力することでその場所へ移動 | `user.interface.thread.goto_inputted_number` | select | `1` | スレッド共通設定／再起動が必要 |
| アンカー等でレスへスクロール移動した先の画面内位置 | `user.interface.thread.scroll_res_position` | select | `0` | スレッド共通設定 |
| URLの一部をマウスで選択する際に同時に押す必要のあるキー | `user.interface.thread.select_modifier` | select | `"alt"` | スレッド共通設定／上級設定 |
| 人気や返信フィルタの表示方法 | `user.interface.thread.filter_indication` | select | `"tree"` | スレッド共通設定 |
| 自分のレスフィルタの表示方法 | `user.interface.thread.filter_myres_indication` | select | `"tree"` | スレッド共通設定 |
| URI内のエンコードされた部分を読めるようにする | `user.gpbc.thread.decode_uri_encoded` | checkbox | `true` | レス表示／上級設定／再起動が必要 |
| 国際化ドメインで表されたURLをリンクとして表示する | `user.gpbc.thread.decode_uri_idn` | checkbox | `false` | レス表示／上級設定／再起動が必要 |
| URI内のピュニコード部分を読めるようにする | `user.gpbc.thread.decode_uri_punycode` | checkbox | `true` | レス表示／上級設定／再起動が必要 |
| &#96;&#96;&#96;で囲われた領域をコードとして扱う | `user.gpbc.thread.code_block` | checkbox | `true` | レス表示 |
| http://の無いドメインをリンクとして扱うトップレベルドメインの設定<br>xxx.yyy.comのようなドメインのみの文字には反応せず、xxx.yyy.com/zzzzのようにスラッシュの入っているものが対象です | `user.gpbc.thread.domain_httplize` | datalist | `""` | レス表示／上級設定／再起動が必要 |
| レスのID色を変更するID数(第一段階) | `user.interface.thread.id_colored1` | number | `5` | IDのカウント表示 |
| レスのID色を変更するID数(第二段階) | `user.interface.thread.id_colored2` | number | `10` | IDのカウント表示 |
| レスのID色を変更するID数(第三段階) | `user.interface.thread.id_colored3` | number | `15` | IDのカウント表示 |
| カウントがそのスレッドの一定以上を占めるときカウントを表示させない | `user.interface.thread.collection_omit` | checkbox | `true` | IDのカウント表示 |
| ポップアップのヘッダーを表示 | `user.interface.thread.popup_hide_header` | select | `1` | ポップアップ |
| ポップアップの最大幅 | `user.interface.thread.popup_width` | number | `800` | ポップアップ |
| ポップアップの最大の高さ | `user.interface.thread.popup_maxheight` | number | `900` | ポップアップ |
| ポップアップレス内のNGを表示させない | `user.interface.thread.popup_hide_ng` | select | `0` | ポップアップ |
| マウスホバーで自動でポップアップさせる対象 | `user.interface.popup.hover_target` | flags | 式による | ポップアップ |
| 返信アンカーのマウスホバー時の遅延時間(ミリ秒) | `user.interface.popup.anchor_delay` | number | `100` | ポップアップ |
| ID等のマウスホバー時の遅延時間(ミリ秒) | `user.interface.popup.col_delay` | number | `100` | ポップアップ |
| スレッドURLのマウスホバー時の遅延時間(ミリ秒) | `user.interface.popup.url_delay` | number | `100` | ポップアップ |
| 数字を選択した際にその数字のレス番号のポップアップを表示 | `user.interface.thread.selected_anchor` | checkbox | `true` | ポップアップ |
| レス番号をクリックした時の挙動 | `user.interface.thread.resnum_click` | select | `0` | ポップアップ |
| ミニマップクリック時の動作 | `user.interface.minimap.click_move` | select | `0` | ミニマップ |
| ミニマップに勢いのグラフを表示させる | `user.interface.minimap.speed_graph` | checkbox | `true` | ミニマップ |
| メニューにローカルスレッドへ送るを追加する | `user.interface.thread.enable_send_wall` | checkbox | `false` | ローカルスレッド |

## 書き込み {#settings-post}

| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |
| --- | --- | --- | --- | --- |
| 新しく開くスレッドの書き込み欄を表示 | `siteedit.render.{id}.thread.form_opened` | checkbox | `false` | 書き込み欄の初期設定 |
| 書き込み欄が固定の時の書き込み欄の大きさの初期値 | `siteedit.render.{id}.thread.postform_size` | range | `90` | 書き込み欄の初期設定 |
| 書き込み欄の初期状態 | `siteedit.render.{id}.thread.postform_flag` | flags | 式による | 書き込み欄の初期設定 |
| 新しい書き込み欄の名前 | `siteedit.render.{id}.thread.post_name` | text | `""` | 書き込み欄の初期設定 |
| 新しい書き込み欄のメール | `siteedit.render.{id}.thread.post_mail` | text | `""` | 書き込み欄の初期設定 |
| 新しい書き込み欄でsageを使う | `siteedit.render.{id}.thread.post_sage` | checkbox | `false` | 書き込み欄の初期設定 |
| 自分自身の書き込みにマークを付ける | `siteedit.render.{id}.thread.detect_my_post` | checkbox | `true` | 投稿時と投稿後の動作 |
| IP表示スレッドへの投稿警告 | `siteedit.render.{id}.thread.post_alert_ip` | select | `1` | 投稿時と投稿後の動作 |
| 書き込んだ後のスレッドリロード待機時間(ミリ秒) | `siteedit.option.{id}.reload_wait` | number | `0` | 投稿時と投稿後の動作 |
| 書き込んだ後に次の書き込みまで待機する時間(秒)<br>連投規制を避けるため、同じサイトの書き込みボタンを無効にします。0で待機しません。 | `siteedit.option.{id}.post_wait` | number | `0` | 投稿時と投稿後の動作 |
| 書き込みウィンドウをメインより前面にする | `user.interface.postform.ontop` | checkbox | `false` | 書き込みウィンドウ／再起動が必要 |
| user.system.save_kakikomi | `user.system.save_kakikomi` | checkbox | `false` | 書き込み履歴 |
| Enterキーと同時押しで書き込みするキー | `user.interface.thread.post_modifier_key` | select | 式による | 書き込みフォーム |
| 書き込み欄でEscapeキーを入力した時の挙動 | `user.interface.thread.post_esc_key` | select | `"blur"` | 書き込みフォーム |
| 次スレッドを作成する際のパート番号フォーマット<br>%dに次のパート番号が入ります | `user.interface.thread.part_format` | text | `" Part%d"` | 書き込みフォーム |
| AAList.txtの文字コードをShift_JISにする<br>他の専用ブラウザとの互換が保たれますが、Unicodeの文字が使えなくなります | `user.system.phrase.shiftjis` | checkbox | `false` | 定型文(AAList)／上級設定 |

## BBSMenu {#settings-bbsmenu}

| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |
| --- | --- | --- | --- | --- |
| BBSMENUのリスト<br>複数のURLを設定できます<br> | `user.gpbc.bbsmenu.list` | textlist | `[]` | BBSMenu |
| BBSMENU Headline Filter | `user.system.bbsmenu.filter_headlines` | checkbox | `true` | BBSMenu |

## 通知 {#settings-notify}

| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |
| --- | --- | --- | --- | --- |
| イベントへ効果音をつける | `user.interface.sound_enable` | checkbox | `false` | 通知 |
| 効果音のボリューム | `user.interface.sound_volume` | range | `0.3` | 通知 |
| トースト通知の表示位置 | `user.interface.notify_toast.position` | select | `"bottom-right"` | トースト通知 |

## 画像/映像 {#settings-image}

| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |
| --- | --- | --- | --- | --- |
| 新規画像をぼかして表示 | `siteedit.render.{id}.thread.image_blur` | checkbox | `false` | スレ内画像 |
| アンカーによるグロ等の警告があった時に画像/映像をぼかす | `siteedit.option.{id}.r18g_anchor` | checkbox | `true` | 警告によるぼかし |
| 警告文字(正規表現)<br>アンカーと一緒に該当する文字があった時画像/映像をぼかす | `siteedit.option.{id}.r18g_reg` | text | `"(?:グロ(?!ー)&#124;ぐろ&#124;注意&#124;虐待&#124;死体)"` | 警告によるぼかし／上級設定 |
| 画像URLをクリックしたときに使用する画像ビューア<br> | `user.interface.image.viewer_select` | select | `"mediaviewer"` | 画像ビューア/スタック型画像ビューア |
| 画像サムネイルをクリックしたときに使用する画像ビューア | `user.interface.image.viewer_select_thumbnail` | select | `"popup"` | 画像ビューア/スタック型画像ビューア |
| スタック型画像ビューアの最大登録数<br>この数を超えた場合は古いURLから非表示になります | `user.interface.stackviewer.max_list_size` | number | `500` | 画像ビューア/スタック型画像ビューア |
| 画像のダウンロード後にスタック型画像ビューアに自動で追加する | `user.interface.stackviewer.auto_add` | checkbox | `false` | 画像ビューア/スタック型画像ビューア |
| サムネイル画像ホバー時のツールチップ表示 | `user.system.image.tooltip_enable` | checkbox | `true` | サムネイル表示／再起動が必要 |
| レス表示時に自動でダウンロード | `user.interface.thread.image_auto_download` | select | `2` | スレ内画像 |
| スレッドを更新後新着画像を自動でダウンロード<br>新着レスに画像があった場合、レスを表示しなくても自動でダウンロードします | `user.interface.thread.image_download_on_newres` | checkbox | `false` | スレ内画像 |
| 新着画像の自動ダウンロードを行うレスの期間(日数)<br>この時間を過ぎているレスの画像は自動でダウンロードされなくなります<br>0にすると期間制限無し | `user.interface.thread.image_download_on_newres_date_limit` | number | `7` | スレ内画像 |
| 新着画像の自動ダウンロードを行うURL数の制限<br>0にすると数の制限無し | `user.interface.thread.image_download_on_newres_number_limit` | number | `30` | スレ内画像 |
| 自動ダウンロードする画像サイズの制限(KB)<br>0にすると無制限 | `user.interface.thread.image_auto_download_limit_size` | number | `10000` | スレ内画像 |
| 画像URLを読む際にheadリクエストを送る<br>チェックを外すと画像のサイズを取得しなくなります | `user.interface.image.head_request` | checkbox | `true` | スレ内画像 |
| ImgurのギャラリーURLを展開して表示<br>利用制限により、すべて展開しない場合があります | `user.interface.thread.imgur_gallery_expand` | checkbox | `true` | スレ内画像／再起動が必要 |
| サムネイル画像の解像度 | `user.system.image.thumbnail_quality` | select | `200` | スレ内画像／上級設定／再起動が必要 |
| 背景の透過可能設定<br>オフにするとポップアップ画像の背景が透過されなくなり、ウィンドウの枠が付くなどの効果が発生します<br>画像表示に問題があるときにオフにしてください | `user.system.image.popup.window_mode` | checkbox | `true` | ポップアップ／再起動が必要 |
| ポップアップ画像の出現位置をマウスカーソルの位置か固定にするかを選択 | `user.system.image.popup.fixedposition` | select | `0` | ポップアップ |
| ポップアップ画像の最大の幅<br>0にすると現在のモニタサイズになります | `user.system.image.popup.maxwidth` | number | `0` | ポップアップ／上級設定 |
| ポップアップ画像の最大の高さ<br>0にすると現在のモニタサイズになります | `user.system.image.popup.maxheight` | number | `0` | ポップアップ／上級設定 |
| ポップアップ画像の最低のサイズ<br>小さい画像はこのサイズまで拡大して表示します<br>0にすると無効化 | `user.system.image.popup.minsize` | number | `150` | ポップアップ／上級設定 |
| ポップアップからフォーカスが外れたときに画像を隠す | `user.system.image.popup.blur_hide` | checkbox | `false` | ポップアップ |
| ポップアップ画像の右上に位置を表示 | `user.system.image.popup.position_indicator` | select | `1` | ポップアップ |
| ポップアップ画像を画面のスケーリング100%の状態で表示する<br>画面の拡大率を変更している時に物理ピクセル基準で画像を表示します | `user.system.image.popup.scale100` | checkbox | `false` | ポップアップ |
| ポップアップ画像の回転状態を保持する | `user.system.image.popup.rotate_hold` | checkbox | `false` | ポップアップ／上級設定 |
| 画像をクリックしたときの動作 | `user.system.image.popup.click_action` | select | `"popupviewer:close"` | ポップアップ／再起動が必要 |
| 画像を中クリックしたときの動作 | `user.system.image.popup.middle_click_action` | select | `""` | ポップアップ／再起動が必要 |
| 画像を右クリックしたときの動作<br>動作を割り当てた場合Shiftを押しながら右クリックで右クリックメニューを開きます | `user.system.image.popup.right_click_action` | select | `""` | ポップアップ／再起動が必要 |
| ホバーポップアップさせる画像の大きさを設定<br>Ctrlを押したままにするとポップアップさせません | `user.interface.image.url_hover_popup` | number | `400` | ホバーポップアップ |
| ポップアップ元の選択 | `user.interface.image.url_hover_source` | select | `1` | ホバーポップアップ |
| 画像取得時にPerceptual Hashを生成し、NGに活用する | `user.system.image.phash.enable` | checkbox | `true` | NG/ぼかし |
| NG画像を投稿していたID/BBSSLIPを自動的にミュート状態にする | `user.system.image.ng_to_ngid` | checkbox | `true` | NG/ぼかし／再起動が必要 |
| 画像をNGにしたとき、その画像を投稿していたレスをミュート状態にする対象の選択<br>選択をすべて解除することで機能を無効化します<br>レス単体は他の要素が無いレスの場合にそのレス番号でミュートにします | `user.system.image.ng_to_mute_target` | flags | 式による | NG/ぼかし |
| NGを解除した際にぼかし状態にする | `user.system.image.ng_to_blur` | checkbox | `true` | NG/ぼかし |
| ぼかしの強度 | `user.interface.image.r18g_blur_level` | range | `7` | NG/ぼかし |
| モノクロで表示させる | `user.interface.image.r18g_grayscale` | checkbox | `true` | NG/ぼかし |
| 画像ビューアの新着画像をぼかして表示 | `user.system.image.blur_new_image` | checkbox | `false` | 画像ビューア |
| 開いているスレッドの画像を画像ビューアに連動して表示させる | `user.system.imageviewer.link_thread` | checkbox | `false` | 画像ビューア |
| Image Save Format | `user.system.image.save_format` | datalist | `""` | 画像の保存 |
| 画像キャッシュの保持日数。起動時に自動的に削除されます。<br>0にすると常に削除、-1にすると削除されません。 | `user.system.image.expire_day` | number | `30` | 画像キャッシュ |
| クリップボードからの画像アップロードを有効化<br>レス投稿フォームでCtrl+Vまたは右クリックメニューから画像をアップロードできます | `user.interface.image.upload.enable` | checkbox | `true` | 画像アップロード |
| Youtube動画の遅延読み込み | `user.interface.movie.lazy_load` | select | `0` | 動画 |
| 動画サムネイルの事前読み込みを有効化<br>無効にするとクリックするまで動画データを読み込みません | `user.interface.movie.preload` | checkbox | `true` | 動画 |

## NG/強調 {#settings-resstate}

| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |
| --- | --- | --- | --- | --- |
| 板一覧で追加するミュートを透明にする | `siteedit.render.{id}.board.mute_noprint` | checkbox | `false` | マーク／ミュート |
| レスに追加するミュートを透明にする | `siteedit.render.{id}.thread.mute_noprint` | checkbox | `false` | マーク／ミュート |
| ミュートされたレスへのレスを連鎖でミュートする | `siteedit.render.{id}.thread.mute_chain` | checkbox | `true` | マーク／ミュート |
| Siki Guardを有効にする | `user.interface.sikiguard.enable` | checkbox | `false` | Siki Guard |
| Siki Guardの対象レスを透明にする | `user.interface.sikiguard.transparent` | checkbox | `false` | Siki Guard |
| 画像ロードをブロックする<br>攻撃を受けている状態のスレッドの画像ロードが自動で行われなくなり、画像を取得したときにぼかし状態になります | `user.interface.sikiguard.image_block` | checkbox | `true` | Siki Guard |
| 自分のレスかマークされたレスがNG対象であった場合NGを適用しない | `user.gpbc.thread.ignore_ng_marked` | checkbox | `true` | NG/強調／再起動が必要 |
| スレッドの最初のレスがNG対象であった場合NGを適用しない | `user.gpbc.thread.ignore_ng_firstres` | checkbox | `false` | NG/強調／再起動が必要 |
| NG/ミュート等で透明化されたレスが4件以上連続した時に件数を表示する | `user.interface.thread.transparent_group_indicator` | checkbox | `true` | NG/強調 |
| ミュートと強調が重なったときに強調を優先する | `user.gpbc.thread.mute_empha_priority` | checkbox | `true` | NG/強調／再起動が必要 |
| コマンドでNGを追加したときのデフォルトの適用方法 | `user.interface.thread.ng_instant_level` | select | 式による | NG/強調 |
| マークやミュートしたIDやワードの保存期間(日数) | `user.gpbc.mute.expire` | number | `14` | マーク/ミュート／再起動が必要 |
| 同一レスとみなす曖昧さの度合い<br>レベルが高いほどNG確率が上がります | `user.gpbc.thread.digest_level` | select | `1` | 自動非表示 |
| 重複によるNG対象の表示方法 | `user.interface.thread.ng_dup_level` | select | 式による | 自動非表示 |
| 非表示にする重複レスの出現回数<br>この数以上重複レスがあった時に非表示化<br>0にすると無効化 | `user.interface.thread.ng_dup_threshold` | number | `5` | 自動非表示 |
| 出現数に関係なく非表示にする重複レスの行数<br>0にすると無効化 | `user.interface.thread.ng_dup_linesover` | number | `8` | 自動非表示 |

## テーマ編集 {#settings-edittheme}

| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |
| --- | --- | --- | --- | --- |
| テーマ名の変更 | `theme.{id}.name` | text | 指定なし | テーマ |
| 色の出力フォーマット | `user.system.theme.outputformat` | select | `"none"` | テーマ／上級設定 |
| ライト/ダーク | `theme.{id}.colorSet.type` | select | 指定なし | カラー |
| ベースの色 | `theme.{id}.colorSet.theme` | color | 指定なし | カラー |
| 文字の色 | `theme.{id}.colorSet.baseForeground` | color | 指定なし | カラー |
| コンテンツの背景色 | `theme.{id}.colorSet.contentBackground` | color | 指定なし | カラー |
| コンテンツの文字色 | `theme.{id}.colorSet.contentForeground` | color | 指定なし | カラー |
| ウィンドウの境界、チェックボックス、スライダー等のUI | `theme.{id}.colorSet.systemAccent` | color | 指定なし | カラー |
| フォーカスカラー、ID数大 | `theme.{id}.colorSet.accent` | color | 指定なし | カラー |
| ID数中 | `theme.{id}.colorSet.accent2` | color | 指定なし | カラー |
| ID数少、取得済みスレ | `theme.{id}.colorSet.accent3` | color | 指定なし | カラー |
| 名前欄等 | `theme.{id}.colorSet.accent4` | color | 指定なし | カラー |
| 自分自身のレス | `theme.{id}.colorSet.myself` | color | 指定なし | カラー |
| アンカー | `theme.{id}.colorSet.anchor` | color | 指定なし | カラー |
| 外部リンク | `theme.{id}.colorSet.outLink` | color | 指定なし | カラー |
| 内部リンク | `theme.{id}.colorSet.inLink` | color | 指定なし | カラー |
| 画像リンク | `theme.{id}.colorSet.imgLink` | color | 指定なし | カラー |
| 動画リンク | `theme.{id}.colorSet.movLink` | color | 指定なし | カラー |
| アクティブなタブの背景 | `theme.{id}.colorSet.tabActive` | color | 指定なし | カラー |
| 非アクティブなタブの背景 | `theme.{id}.colorSet.tabInactive` | color | 指定なし | カラー |
| 未読タブ | `theme.{id}.colorSet.unread` | color | 指定なし | カラー |
| 終了タブ | `theme.{id}.colorSet.readonly` | color | 指定なし | カラー |
| 見つからないタブ | `theme.{id}.colorSet.notfound` | color | 指定なし | カラー |
| 過去ログタブ | `theme.{id}.colorSet.archived` | color | 指定なし | カラー |
| エラータブ | `theme.{id}.colorSet.error` | color | 指定なし | カラー |
| キーワード強調色1 | `theme.{id}.colorSet.keyword` | color | 指定なし | カラー |
| キーワード強調色2 | `theme.{id}.colorSet.keyword2` | color | 指定なし | カラー |
| キーワード強調色3 | `theme.{id}.colorSet.keyword3` | color | 指定なし | カラー |
| キーワード強調色4 | `theme.{id}.colorSet.keyword4` | color | 指定なし | カラー |
| キーワード強調色5 | `theme.{id}.colorSet.keyword5` | color | 指定なし | カラー |
| キーワード強調色6 | `theme.{id}.colorSet.keyword6` | color | 指定なし | カラー |
| キーワード強調色7 | `theme.{id}.colorSet.keyword7` | color | 指定なし | カラー |
| 板欄の奇数行の背景を変更する | `theme.{id}.layout.boardOddBackground` | checkbox | `false` | カラー |
| 奇数行の背景色 | `theme.{id}.colorSet.oddBackground` | color | 指定なし | カラー |
| 自分のレスの背景を変更する | `theme.{id}.layout.threadMyresBackground` | checkbox | `false` | カラー |
| アクリル効果で背景を透過させる背景設定を上書きします<br>この設定はアクリル効果の設定がONの時に表示されます | `-` | backimage_acrylic | 指定なし | 背景 |
| 背景以外の要素の透過度 | `theme.{id}.effect.bodyOpacity` | number | `1` | 背景 |
| 全体の背景 | `theme.{id}.backimage.body` | backimage | `""` | 背景 |
| ヘッダーの背景 | `theme.{id}.backimage.header` | backimage | `""` | 背景 |
| フッターの背景 | `theme.{id}.backimage.footer` | backimage | `""` | 背景 |
| スレッドの背景 | `theme.{id}.backimage.thread` | backimage | `""` | 背景 |
| スレッドタブの背景 | `theme.{id}.backimage.threadTab` | backimage | `""` | 背景 |
| 板の背景 | `theme.{id}.backimage.board` | backimage | `""` | 背景 |
| 板タブの背景 | `theme.{id}.backimage.boardTab` | backimage | `""` | 背景 |
| サイドパネルの背景 | `theme.{id}.backimage.sidePane` | backimage | `""` | 背景 |
| アクティビティバーの背景 | `theme.{id}.backimage.activities` | backimage | `""` | 背景 |
| ブックマークバーの背景 | `theme.{id}.backimage.bookmarkBar` | backimage | `""` | 背景 |
| ポップアップレスの背景 | `theme.{id}.backimage.popupRes` | backimage | `""` | 背景 |
| 基本のフォント | `theme.{id}.font.regular` | font | 指定なし | フォント |
| スレッド本文 | `theme.{id}.font.res` | font | 指定なし | フォント |
| Ascii Artに適用されるフォント | `theme.{id}.font.aa` | font | 指定なし | フォント |
| コードに適用されるフォント | `theme.{id}.font.code` | font | 指定なし | フォント／上級設定 |
| 板欄に適用されるフォント | `theme.{id}.font.board` | font | 指定なし | フォント |
| タブに適用されるフォント | `theme.{id}.font.tab` | font | 指定なし | フォント |
| インターフェース全般に適用されるフォント | `theme.{id}.font.ui` | font | 指定なし | フォント |
| 書き込み欄に適用されるフォント | `theme.{id}.font.input` | font | 指定なし | フォント |
| コンテキストメニューに適用されるフォント | `theme.{id}.font.contextmenu` | font | 指定なし | フォント |
| 絵文字のフォント ☺♨❄🇮🇳 | `theme.{id}.font.emoji` | font | 指定なし | フォント |
| スレッドタブを表示 | `theme.{id}.layout.threadTabVisible` | checkbox | `true` | レイアウト |
| スレッドタブの位置 | `theme.{id}.layout.threadTabPosition` | select | `"up"` | レイアウト |
| スレッドタブの表示形式 | `theme.{id}.layout.threadTabStyle` | select | `0` | レイアウト |
| スレッドタブの幅固定 | `theme.{id}.layout.threadTabFixed` | checkbox | `false` | レイアウト |
| スレッドタブのアイコン | `theme.{id}.layout.threadTabFavicon` | checkbox | `true` | レイアウト |
| スレッドタブのホバー時にタイトルをポップアップ表示 | `theme.{id}.layout.threadTabTitlePopup` | checkbox | `true` | レイアウト |
| スレッドタブに閉じるボタンを表示する | `theme.{id}.layout.threadTabCloseButton` | checkbox | `true` | レイアウト |
| スレッドタブに検索ボタンを表示する | `theme.{id}.layout.threadTabSearchButton` | checkbox | `true` | レイアウト |
| スレッドタブの省略表記。【速報】等のタグ表記を表示させない | `theme.{id}.layout.threadTabOmitTitle` | checkbox | `true` | レイアウト |
| スレッドがパートスレッドであった場合にスレッドの番号を表示する | `theme.{id}.layout.threadTabPartNumber` | checkbox | `false` | レイアウト |
| 書き込んだスレッドに書き込んだ回数を表示する | `theme.{id}.layout.threadTabMarkPosted` | checkbox | `true` | レイアウト |
| 自分への返信回数を表示する | `theme.{id}.layout.threadTabMarkResponsed` | checkbox | `false` | レイアウト |
| スレッドタブの文字サイズ | `theme.{id}.size.threadTab` | number | `12` | レイアウト |
| スレッドタブの幅 | `theme.{id}.size.threadTabWidth` | number | `180` | レイアウト |
| スレッドタブの余白 | `theme.{id}.size.threadTabPadding` | number | `6` | レイアウト |
| 各スレッドタブの間隔 | `theme.{id}.size.threadTabGap` | number | `4` | レイアウト |
| スレッドタブペインの余白 | `theme.{id}.size.threadTabAroundPadding` | number | `5` | レイアウト |
| 板タブを表示 | `theme.{id}.layout.boardTabVisible` | checkbox | `true` | レイアウト |
| 板タブの位置 | `theme.{id}.layout.boardTabPosition` | select | `"up"` | レイアウト |
| 板タブの表示形式 | `theme.{id}.layout.boardTabStyle` | select | `0` | レイアウト |
| 板タブの幅固定 | `theme.{id}.layout.boardTabFixed` | checkbox | `false` | レイアウト |
| 板タブのアイコン | `theme.{id}.layout.boardTabFavicon` | checkbox | `true` | レイアウト |
| 板タブのホバー時にタイトルをポップアップ表示 | `theme.{id}.layout.boardTabTitlePopup` | checkbox | `true` | レイアウト |
| 板タブに閉じるボタンを表示する | `theme.{id}.layout.boardTabCloseButton` | checkbox | `true` | レイアウト |
| 板タブに検索ボタンを表示する | `theme.{id}.layout.boardTabSearchButton` | checkbox | `false` | レイアウト |
| 板タブの文字サイズ | `theme.{id}.size.boardTab` | number | `12` | レイアウト |
| 板タブの幅 | `theme.{id}.size.boardTabWidth` | number | `180` | レイアウト |
| 板タブの余白 | `theme.{id}.size.boardTabPadding` | number | `6` | レイアウト |
| 各板タブの間隔 | `theme.{id}.size.boardTabGap` | number | `4` | レイアウト |
| 板タブペインの余白 | `theme.{id}.size.boardTabAroundPadding` | number | `5` | レイアウト |
| コンテキストメニューの背景を半透明にする | `theme.{id}.layout.contextmenuBackdrop` | checkbox | `false` | レイアウト |
| レスの文字に縁取りをつける | `theme.{id}.effect.threadTextShadowOn` | checkbox | `false` | エフェクト |
| レスの影の色 | `theme.{id}.effect.threadTextShadowColor` | color | `"#0f0f0f"` | エフェクト |
| 文字の色(通常の色を上書きします) | `theme.{id}.effect.threadTextShadowForeground` | color | `"#e0e0e0"` | エフェクト |
| ぼかし | `theme.{id}.effect.threadTextShadowBlur` | number | `2` | エフェクト／上級設定 |
| 縁取りの幅 | `theme.{id}.effect.threadTextShadowWeight` | number | `0.5` | エフェクト／上級設定 |
| スレタイ文字に縁取りをつける | `theme.{id}.effect.boardTextShadowOn` | checkbox | `false` | エフェクト |
| スレタイの影の色 | `theme.{id}.effect.boardTextShadowColor` | color | `"#0f0f0f"` | エフェクト |
| スレタイ文字の色(通常の色を上書きします) | `theme.{id}.effect.boardTextShadowForeground` | color | `"#e0e0e0"` | エフェクト |
| ぼかし | `theme.{id}.effect.boardTextShadowBlur` | number | `2` | エフェクト／上級設定 |
| 縁取りの幅 | `theme.{id}.effect.boardTextShadowWeight` | number | `0.5` | エフェクト／上級設定 |
| ロード中の背景効果 | `theme.{id}.effect.loadingFilter` | select | `"opacity(70%)"` | エフェクト／上級設定 |
| ツイッター埋め込みのテーマ | `theme.{id}.value.twitter_theme` | select | `0` | エフェクト |
| ミニマップの幅 | `theme.{id}.size.minimapWidth` | number | `30` | サイズ |
| ミニマップの点の大きさ | `theme.{id}.value.minimapPointSize` | number | `4` | サイズ |
| スレッドのスクロールバーの幅 | `theme.{id}.size.threadScrollbarWidth` | number | `10` | サイズ |
| 書き込み欄の文字サイズ | `theme.{id}.size.postbody` | number | `14` | サイズ |
| 書き込み欄ヘッダの文字サイズ | `theme.{id}.size.postheader` | number | `12` | サイズ |
| 書き込み欄フッタの文字サイズ | `theme.{id}.size.postfooter` | number | `12` | サイズ |
| スレタイの文字サイズ | `theme.{id}.size.boardbody` | number | `13` | サイズ |
| スレタイの文字の高さ | `theme.{id}.value.boardbody_lineheight` | number | `1.3` | サイズ |
| スレッドリストの余白 | `theme.{id}.value.boardbody_padding` | number | `5` | サイズ |
| スレッドリストの上下境界線の幅 | `theme.{id}.size.boardBorderTop` | number | `1` | サイズ |
| スレタイの文字間隔 | `theme.{id}.size.boardLetterSpacing` | number | `0` | サイズ |
| 板上部のテーブルヘッダーの文字サイズ | `theme.{id}.size.boardTableHeader` | number | `14` | サイズ |
| 板のスクロールバーの幅 | `theme.{id}.size.boardScrollbarWidth` | number | `10` | サイズ |
| 開いているスレッドのマークの幅 | `theme.{id}.size.boardActivemarker` | number | `3` | サイズ |
| サイドパネルの文字サイズ | `theme.{id}.size.panel` | number | `12` | サイズ |
| サイドパネルのアイコンサイズ | `theme.{id}.size.sidePanelIcon` | number | `46` | サイズ |
| スレッド上部のパネルサイズ | `theme.{id}.size.threadHeaderAction` | number | `10` | サイズ |
| スレッド上部の文字サイズ | `theme.{id}.size.threadHeader` | number | `12` | サイズ |
| スレッド下部のパネルサイズ | `theme.{id}.size.threadFooterAction` | number | `14` | サイズ |
| スレッド下部の文字サイズ | `theme.{id}.size.threadFooter` | number | `12` | サイズ |
| 板上部のパネルサイズ | `theme.{id}.size.boardHeaderAction` | number | `10` | サイズ |
| 板上部の文字サイズ | `theme.{id}.size.boardHeader` | number | `12` | サイズ |
| 板下部のパネルサイズ | `theme.{id}.size.boardFooterAction` | number | `14` | サイズ |
| 板下部の文字サイズ | `theme.{id}.size.boardFooter` | number | `12` | サイズ |
| アプリヘッダーのパネルサイズ | `theme.{id}.size.headerPanelIcon` | number | `22` | サイズ |
| アプリヘッダーの文字サイズ | `theme.{id}.size.appHeader` | number | `14` | サイズ |
| アプリフッターのパネルサイズ | `theme.{id}.size.footerPanelIcon` | number | `20` | サイズ |
| アプリフッターの文字サイズ | `theme.{id}.size.appFooter` | number | `10` | サイズ |
| ブックマークバーの要素の幅 | `theme.{id}.size.bookmarkBarSize` | number | `120` | サイズ |
| ブックマークバーの文字サイズ | `theme.{id}.size.bookmarkBar` | number | `14` | サイズ |
| 板やスレッドの境界線の幅 | `theme.{id}.size.appSplitter` | number | `3` | サイズ |
| アクティブな場所を示すラインの幅 | `theme.{id}.size.sightline` | number | `3` | サイズ |
| 流しコメントの文字サイズ | `theme.{id}.size.flowComment` | number | `22` | サイズ |
| コンテキストメニューの文字サイズ | `theme.{id}.size.contextmenuFont` | number | `12` | サイズ |
| コンテキストメニューの余白の大きさ | `theme.{id}.size.contextmenuPadding` | number | `5` | サイズ |
| コンテキストメニューのアイコンの大きさ | `theme.{id}.size.contextmenuIcon` | number | `14` | サイズ |

## ワークスペース {#settings-workspace}

| 項目・説明 | 保存用ID | 入力形式 | 入力欄の初期値 | 補足 |
| --- | --- | --- | --- | --- |
| ワークスペース名 | `render.workspace.{id}.title` | text | `""` | ワークスペース |
| レイアウト：共通（ワークスペース0）／このワークスペース独自 | `render.workspace.{id}.layout_mode` | workspace_layout | 指定なし | ワークスペース |
| ワークスペースのアイコン | `render.workspace.{id}.icon` | icon | `""` | ワークスペース |
| アクティブなスレッドは常にオートロード状態にする | `render.workspace.{id}.autoload_always` | checkbox | `false` | ワークスペース |
| 画像投稿時の警告を表示する | `render.workspace.{id}.image_post_confirm` | checkbox | `true` | ワークスペース |
| 終了時にスレッドタブを保持しない<br>ロック・お気に入りのスレッド以外は保持されず削除されます | `render.workspace.{id}.thread_tabs_clear` | checkbox | `false` | ワークスペース／上級設定 |
| 終了時に板タブを保持しない<br>ロック・お気に入りの板以外は保持されず削除されます | `render.workspace.{id}.board_tabs_clear` | checkbox | `false` | ワークスペース／上級設定 |
| 読み込み用プロキシ | `render.workspace.{id}.read_proxy` | text_history | `""` | ワークスペース |
| 書き込み用プロキシ | `render.workspace.{id}.write_proxy` | text_history | `""` | ワークスペース |
| 読み込み用ユーザーエージェント(UA) | `render.workspace.{id}.read_useragent` | text_history | `""` | ワークスペース |
| 書き込み用ユーザーエージェント(UA) | `render.workspace.{id}.write_useragent` | text_history | `""` | ワークスペース |
| 通信を制御するプラグインの有効化<br>plugins/request-hook | `render.workspace.{id}.plugin_request-hook` | checkbox | `false` | プラグイン |

