---
class: chapter
---

# Vivliostyle base theme サンプル {#section1}

<div class="flush-right">
石原晶子(高野)
</div>

マークダウンよりpdf出力する記法サンプルです。 出力結果は2025jawsugbgnr.pdf、または npm run build で生成したpdfをご確認ください。

## Demonstration of inline tags

以下文中の強調に使えるサンプルです。

_斜体_ / **太字** / **_車体太字_** /
`インラインコード` / ~~取り消し線~~ /
<big>でっかい文字</big> / <small>小さい文字</small> /
H<sub>2</sub>O / x<sup>2</sup> / {Ruby|ルビー} /
[Inline link](https://vivliostyle.org) / [Block link]
$E = mc^2$

- 見出し
  
H1 は文中で使わないようにしてください。

## Heading 2 {#section2}

### Heading 3 {#section3}

#### Heading 4

##### Heading 5

###### Heading 6

---

## リスト

- 第一
- 第一
- 第一
  - 第二
  - 第二
    - 第三

1. ほげ
2. ほげほげ
3. ふが
4. ふがふが
5. にゃんこ

<dl>
  <dt>段落htmlタグ</dt>
  <dd>
    なんかTipsみたいに書きたいときに使おう
  </dd>
</dl>

## 引用や文献や概要

> echo "Kiro"
> echo "Kiro waitlist…"
> echo "zenzinrui Kiro de asonderu iina 20250715"

## コードブロック

```
https://kiro.dev/downloads/
```

## 図

![Takano Logo](./images/takano0131.jpg){#figure1}

## テーブル

<figure id="table1">
<figcaption>Markdown table</figcaption>
<div>

| aaa                           |                          bbb |
| :---------------------------- | ---------------------------: |
| loooooooooooooooooooooooooong | taaaaaaaaaaaaaaaaaaaaaaaable |

</div>
</figure>

<figure id="table2">
<figcaption>HTML complex table</figcaption>

<table>
  <thead>
    <tr>
      <th colspan="3">Quarterly Earnings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Q1</td>
      <td>Net Income</td>
      <td>$50,000</td>
    </tr>
    <tr>
      <td>Total Revenue</td>
      <td>$100,000</td>
    </tr>
    <tr>
      <td rowspan="2">Q2</td>
      <td>Net Income</td>
      <td>$60,000</td>
    </tr>
    <tr>
      <td>Total Revenue</td>
      <td>$110,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total Earnings</td>
      <td>$110,000</td>
    </tr>
  </tfoot>
</table>
</figure>

## 脚注に出したいとき

となりに小さい数字が出ます
<span class="footnote">ちょっとこうすると技術書っぽいですよね.</span>
<span class="footnote">うん.</span>

## 章節項を自動で数字を出したいとき

章番号 <a href="#section1" data-ref="sec"></a>, 節番号 <a href="#section2" data-ref="sec"></a> and 項番号 <a href="#section3" data-ref="sec"></a>.

## 図番号 自動で数字を出したいとき

画像 <a href="#figure1" data-ref="fig"></a> and テーブル <a href="#table1" data-ref="tbl"></a>.

## 参考文献

参考文献として FootNoteに出したいときその2[^test] の書き方はこうです。

[^test]: やっぱりこうすると技術書っぽいですよね.

<br>

著者紹介は形式を真似して書いてください。好きなリンクも適宜入れてOKです。

#### 著者紹介

---

<div class="author-profile">
    <img src="images/takano0131.jpg">
    <div>
        <div>
            <b>高野(石原晶子) </b>
            <a href="https://twitter.com/takano0131">X@takano0131</a>
        </div>
        <div>
            サークル名：とりむねにく
        </div>
    </div>
</div>
<p style="margin-top: 0.5em; margin-bottom: 2em;">
主にコミケと技術書典と都内ライブハウスと目黒に出没するインフラエンジニア。おうちだいすきインドア。<br>
JAWS-UGでは初心者支部の運営、所属会社は週５出社が義務付けられたことで話題のAPN企業です。会社が家に来い…
</p>