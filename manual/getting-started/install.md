---
title: インストールと更新
description: Windows・macOS・Linuxの配布形式の選び方と、インストール、アプリ内更新、手動更新の違いを説明します。
---

# インストールと更新

[公式の配布案内](https://sikiapp.net/download/)または[GitHub Releases](https://github.com/romtenma/siki-release/releases)から、お使いのOSとCPUに合うファイルを取得します。ファイル名のバージョンは、取得する版によって変わります。

## 配布形式を選ぶ {#choose-package}

| 環境 | 形式 | 使い方 |
| --- | --- | --- |
| Windows x64 / arm64 | `setup.exe` | インストーラーで導入する |
| Windows x64 / arm64 | `portable.zip` | 展開して使う。更新は手動 |
| macOS Intel / Apple Silicon | `.dmg` | アプリをApplicationsへ配置する |
| Linux x64 | `.AppImage` | 実行権限を付けて起動する |
| Debian・Ubuntu系 | `.deb` | パッケージ管理機能で導入する |
| Fedora等のRPM環境 | `.rpm` | パッケージ管理機能で導入する |

Linuxの対応範囲は、配布案内の検証済み環境も確認してください。形式を開けることだけで、すべてのディストリビューションで同じ動作を保証するものではありません。

## Windows {#windows}

### インストーラー版 {#windows-installer}

取得した `Siki-<version>-windows-<arch>-setup.exe` を実行し、導入後にSikiを起動します。`<arch>` は `x64` または `arm64` です。すでに使っている場合は、同じ形式の新版で更新します。

### ポータブル版 {#windows-portable}

ZIPを任意のフォルダーへ展開し、`Siki.exe` を起動します。実行に必要なファイルを含むため、EXEだけを取り出さず、展開した一式を使います。

ポータブル配布と、データを実行ファイルの近くに保存するポータブルモードは区別します。実行ファイルと同じ場所に `data` フォルダーがある構成では、その中にデータを保存します。別の保存先を指定している場合は、[現在の保存先](../reference/data-locations.md#find-location)を確認してください。

更新時は、新しいZIPを別のフォルダーへ展開してからSikiを終了します。旧フォルダーの `data` を使っていた場合は、新しい側へコピーしてから新版を起動します。外部のログ・画像保存先がある場合は、それらも引き続き参照できることを確認します。

## macOS {#macos}

Intel Macは `x64`、Apple Siliconは `arm64` のDMGを選びます。DMGを開いてSikiをApplicationsへコピーし、Applications側のアプリを起動します。

更新するときはSikiを終了し、新しいDMGのアプリでApplications内のSikiを置き換えます。起動時にOSの確認が表示される場合は、提供元と取得したファイルを確認し、OSの案内に従ってください。

## Linux {#linux}

### AppImage {#appimage}

ファイルに実行権限を付けて、通常のユーザーで起動します。ファイル名の例は `Siki-<version>-linux-x86_64.AppImage` です。必要な実行環境は配布案内を確認してください。

### deb / rpm {#linux-packages}

取得したファイルがあるディレクトリで、該当するコマンドを実行します。`<version>` は実際のファイル名に置き換えます。

```sh
# Debian・Ubuntu系
sudo apt install ./Siki-<version>-linux-x64.deb
```

```sh
# Fedora
sudo dnf install ./Siki-<version>-linux-x64.rpm
```

導入後はアプリケーションメニューのSiki、または `siki` コマンドから通常ユーザーで起動します。apt / dnf用の配布リポジトリを登録する手順ではありません。更新時も新版のパッケージを取得して導入します。

## 更新を確認する {#updates}

1. メインメニューの「ヘルプ」から更新の確認を開きます。
2. 現在のバージョン、新版、変更内容、表示される操作を確認します。
3. アプリ内更新に対応する形式では、ダウンロード後に「Sikiを終了して更新」を選んで反映します。
4. 手動更新の形式では、案内されたファイルを取得し、Sikiを終了してから置き換え・導入します。

| 形式 | 主な更新方法 |
| --- | --- |
| Windowsインストーラー / Linux AppImage | 更新画面からダウンロードし、明示的に更新を開始する |
| Windowsポータブル | 新しいZIP一式へ切り替える |
| macOS DMG | 新しいDMGのアプリで置き換える |
| Linux deb / rpm | 同じ形式の新版パッケージを導入する |

「後で」を選んだ状態では、通常の終了だけで更新をインストールしません。β版を受信するか、起動時に確認するかは、設定の「システム」→「アップデートの確認」で選びます。

更新できない場合は[更新の対処](../troubleshooting/updates.md)、旧版から移る場合は[移行ガイド](../migration/from-previous.md)を参照してください。
