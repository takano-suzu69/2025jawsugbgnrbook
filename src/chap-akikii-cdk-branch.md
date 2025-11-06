---
class: chapter
---

# 実践的なTipsが盛りだくさん！ JAWS-UG CDK支部のすすめ

<div class="flush-right">
アキキー │ 池田 晃尚(@akikii__)
</div>

AWS CDKを初めて扱ったとき、その設計思想に感銘を受けた一方で、少し使いづらさも感じていました。AWS CDKの専門支部「JAWS-UG CDK支部」[^connpass]に参加し、たくさんの開発に役立つTipsや仕組みを学んだことで、よりAWS CDKの魅力に惹かれるようになりました。\
そんなAWS CDKを盛り上げるイベントを数多く開催しているCDK支部について紹介させていただきます！

[^connpass]: JAWS-UG CDK支部のConnpassページ：https://jawsug-cdk.connpass.com/

## AWS CDKとは？

JAWS-UG CDK支部を語る前に、AWS CDKについて紹介します。\
AWS CDKは、AWSが提供するIaCサービスの1つです。[^docs]

[^docs]: AWS CDK とは：https://docs.aws.amazon.com/ja_jp/cdk/v2/guide/home.html

IaC(Infrastructure as Code)とは、サーバーやネットワークなどのITインフラをコードで定義し、リソースの作成や設定変更を管理する仕組みです。AWS CDKでは、AWSサービスの設定をTypeScriptやPythonなどのプログラミング言語で定義します。プログラミング言語の恩恵を受けることで、より柔軟・効率的にAWSサービスを構築できます。

AWS CDKはAWSが管理しているプロジェクトですが、OSSであることも特徴のひとつです。ソースコードが公開されていて[^gh_repo]、誰でも機能追加のリクエストや機能の実装ができます。

[^gh_repo]: AWS CDK GitHubリポジトリ：https://github.com/aws/aws-cdk

## どんなイベントをやってるの？

### LT会

AWS CDKに関することなら何でもOKなLT会を開催していることが多いです。例えば、AWS CDKのTipsや初めて使ってみた感想、OSS活動などのトピックが話されています。

LT会はテーマを設けて開催されることもあります。AWS CDKはAWSの特定の技術分野によらないサービスなので、過去のテーマでは生成AI[^genai]やマネジメントコンソールとの比較[^console]、はたまた別のJAWS-UG支部であるOps-JAWSともコラボした実績[^opsjaws]もあります。

[^genai]: JAWS-UG CDK支部 #15 生成AI祭り：https://jawsug-cdk.connpass.com/event/324263/
[^console]: JAWS-UG CDK支部 #20 マネコン支部!? VS CDK支部：https://jawsug-cdk.connpass.com/event/348953/
[^opsjaws]: CDK支部 and Ops-JAWS コラボイベント！！：https://jawsug-cdk.connpass.com/event/356559/

### AWS CDK Conferenceについて

AWS CDKのカンファレンスであるAWS CDK Conference(以下、CDK Conf)が2022年から毎年開催されています。AWS CDKに情熱を捧げるスピーカーによる最新動向やベストプラクティスを共有するセッションが次から次へと繰り広げられます。

2025年のCDK Confでは他にもさまざまなサブイベントがあり、どれも賑わっていました。

- 初心者ワークショップ[^beginner]
- CDKコントリビュートワークショップ[^contribute]
- Amplifyワークショップ[^amplify]
- CDK Vibe Coding Fes!![^vibe]

[^beginner]: 初心者ワークショップ ：https://jawsug-cdk.connpass.com/event/356361/
[^contribute]: CDKコントリビュートワークショップ ：https://jawsug-cdk.connpass.com/event/356362/
[^amplify]: Amplifyワークショップ ：https://jawsug-cdk.connpass.com/event/356363/
[^vibe]: CDK Vibe Coding Fes!!：https://jawsug-cdk.connpass.com/event/356357/

実は、AWS CDK関連の年次カンファレンスで毎年続いているのは世界を見ても日本のCDK Confだけです。世界一熱狂的！？なAWS CDKのイベントと言っても過言ではないのでしょうか？？

## おすすめLT/セッション

これまでCDK支部では、たくさんのLTやセッションが繰り広げられてきました。その中でも、CDK支部に参加したことがない方にもおすすめしたいものをピックアップしました！

- **AWS CDK 入門ガイド - これだけは知っておきたいヒント集**[^start-guide] (@anan_kikuchi) \
    CDKを使った開発に必要な知識が網羅できます！次に読むべきリンクも載っているので、読み込めばCDKマスター間違いなし！？

[^start-guide]: AWS CDK 入門ガイド - これだけは知っておきたいヒント集：https://speakerdeck.com/anank/aws-cdk-introduction

- **保守性を高める AWS CDK のセオリー・ベストプラクティス**[^maintenability] (@ren_yamanashi)\
    CDKを長く使うと困ってくる保守性を高めるベストプラクティスがまとまっています！仕組みを知らないと思いつかないようなプラクティスがたくさんあります。

[^maintenability]: 保守性を高める AWS CDK のセオリー・ベストプラクティス:https://speakerdeck.com/yamanashi_ren01/bao-shou-xing-wogao-meru-aws-cdk-noseoribesutopurakuteisu

- **AIエージェントが書くのなら直接CloudFormationを書かせればいいじゃないですか何故AWS CDKを使う必要があるのさ**[^ai-agent] (@_watany)\
    AIコーディング時代にAWS CDKを扱うことのメリットや、AIでCDKをどのように扱うべきかがわかりやすくまとまっています！

[^ai-agent]:AIエージェントが書くのなら直接CloudFormationを書かせればいいじゃないですか何故AWS CDKを使う必要があるのさ：https://speakerdeck.com/watany/do-we-need-cdk2

- **AWS CDKの仕組み**[^structure] (@365_step_tech)\
    CDKが動いている仕組みを実装の詳細まで踏み込んで解説されています！CDKにDeep Diveしたい人は必見です。

[^structure]: https://speakerdeck.com/gotok365/how-aws-cdk-works

## さいごに

僕はCDK支部に参加して、自分では思い付かないような実用的なTipsにたくさん出会えました。\
AWS CDKはどなたにでも扉を開いています。みなさんもJAWS-UG CDK支部に参加して、AWS CDKに入門・実用的なTipsを持ち帰る・自分の中に眠っているTipsを放流してみませんか？\
共にAWS CDKを盛り上げていきましょう！

#### 著者紹介

---

<div class="author-profile">
    <img src="images/akikii.jpg" width="60%">
    <div>
        <div>
            <b>アキキー │ 池田晃尚</b></br> 
            X：<a href="https://x.com/akikii__">https://x.com/akikii__</a></br> 
        </div>
    </div>
</div>
<p style="margin-top: 0.5em; margin-bottom: 2em;">

2025 Japan All AWS Certifications Engineers \
好きなもの： JAWS-UG、コーヒー、クラフトコーラ \
AWS CDKが好きすぎてCDK転職（？）を果たしました。
