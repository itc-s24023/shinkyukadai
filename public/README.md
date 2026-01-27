# 背景画像の設定方法

## 背景画像を追加する手順

1. **画像ファイルを配置**
   - このディレクトリ（`public/`）に背景画像を配置してください
   - 推奨ファイル名: `background.jpg` または `background.png`
   - 推奨サイズ: 1920x1080px 以上

2. **CSSの設定を有効化**
   - `src/index.css` を開く
   - 以下のコメントアウトされた部分を解除:
   ```css
   body.custom-bg {
     background-image: url('/background.jpg');
     background-size: cover;
     background-position: center;
     background-attachment: fixed;
     background-repeat: no-repeat;
   }
   ```

3. **HTMLにクラスを追加**
   - `index.html` の `<body>` タグに `custom-bg` クラスを追加:
   ```html
   <body class="custom-bg">
   ```

## 現在の背景

デフォルトでは紫のグラデーション背景が設定されています。
画像を使用したい場合は上記の手順に従ってください。

## 画像ファイル形式

- JPG/JPEG (推奨: ファイルサイズが小さい)
- PNG (透過が必要な場合)
- WebP (最新ブラウザで最適)
