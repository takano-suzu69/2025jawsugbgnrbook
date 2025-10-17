# 2025 jaws-ug 紹介本 (初心者支部有志)

この企画については以下ご参照ください。<br>
https://sites.google.com/view/2025jawsbeginner/%E3%83%9B%E3%83%BC%E3%83%A0

## 参加方法 (運営)

直接プルリクを上げて頂いてOKです。<br>
ただし、休眠中の支部は掲載予定はありませんのでご了承ください。<br>
リブート予定の方はご相談ください。

## 参加方法 (非運営)

参加フォーム申請を撤廃しました。
直接プルリクを上げて頂いてOKです。<br>


## 原稿の書き方

当リポジトリをクローン、またはファイルをDLし<br>
\src ディレクトリ内の chap-markdownsample.md、chap-naosan-06jawsnasa.md を参考に原稿執筆お願いします。

## 原稿の提出方法

### 前提
  
Githubアカウントが必要になります。登録をお願いします。

### 原稿の作り方(マークダウンで執筆)

1. 当プロジェクト(2025jawsugbgnrbook)をフォーク（自分のアカウントにコピー）。

GitHubのWeb画面から対象リポジトリ（[takano-suzu69/2025jawsugbgnrbook](https://github.com/takano-suzu69/2025jawsugbgnrbook)）の**「Fork」ボタン**をクリックし、自分のアカウントにフォークします

2. 自分のリポジトリでブランチを作成し、変更内容をコミット。
   
```
# フォークしたリポジトリをローカルにクローン
git clone https://github.com/<あなたのGitHubユーザー名>/2025jawsugbgnrbook.git
cd 2025jawsugbgnrbook

# 新しいブランチを作成し、切り替え
git checkout -b feature/my-change

# ファイルを編集し、変更をステージング
git add .

# 変更内容をコミット
git commit -m "Add my changes"

# ブランチをリモートにプッシュ
git push origin feature/my-change
```
※ コミットやプッシュは複数回行ってもOKです。feature/my-change 等のブランチ名は適宜変更してください。

3. プルリクエストを作成して、Slack/DMにてご連絡ください。

GitHubの自身のリポジトリページを開き、**「Compare & pull request」または「Pull requests」**から新規プルリクエストを作成します。
タイトル・内容を記載し、送信。

### 原稿の作り方(psdで執筆)

高野に直接原稿を送付ください。

## 原稿の生成確認方法

前提：Node.jsが入っていること、適切なフォントがある事<br>
プロジェクトを丸ごとクローンしたディレクトリで、vivliostyle.config.js を
書いたマークダウンファイル名を書き、以下打鍵ください

```
> npm install

> npm run build
```
2025jawsugbgnr.pdf が生成されると思います。<br>
フォント動作がおかしい場合、フォントをリポジトリにUPしますのでご連絡ください。

## 問い合わせ先

Twitter(X)： <a href="https://twitter.com/takano0131">X@takano0131</a><br>
Mail:　akiko.ishihara0131@gmail.com　(個人)<br>
Slack(JAWS-UG)： 石原晶子(高野)[初心者支部]<br>

## スペシャルサンクス
Nao さん <a href="https://x.com/nananaonana7">https://x.com/nananaonana7</a><br>
朝会レポ文章をサンプルにお借りしました！
