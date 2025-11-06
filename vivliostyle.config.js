import { VFM } from "@vivliostyle/vfm";

const isPrint = process.argv.includes("print.pdf");

const def = {
  //デフォルト２分でタイムアウトしちゃうので、ローカルコンパイル対応のため追加
  timeout: 300000, // 5 分

  title: "2025jawsugbgnr", // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
  author: "石原晶子(高野) <akiko.ishihara0131@gmail.com>", // default to `author` in `package.json` or undefined.
  language: "ja", // default to undefined.
  size: "A5", // JIS-B5: 教科書サイズ、A5: 最近流行りの小さいサイズの技術書
  theme: ["./theme-nice-techbook2"],
  entry: [
    "chap-markdownsample.md",
    "chap-naosan-06jawsnasa.md",
    "chap-tokyo-branch.md",
    "chap-sales-branch.md",
    "chap-cli-branch.md",
    "chap-systemsadmin-branch.md",
    "chap-niigata-branch.md",
    "chap-de&i-tarekatsureport.md",
    "chap-sh_fk2-yokohama_report.md", 
    "chap-storage-takano.md", 
    "chap-mobengineer-edujaws.md",
    "chap-akikii-cdk-branch.md",  
  ],
  entryContext: "./src",

  // output: [ // path to generate draft file(s). default to '{title}.pdf'
  //   './output.pdf', // the output format will be inferred from the name.
  //   {
  //     path: './book',
  //     format: 'webpub',
  //   },
  // ],
  workspaceDir: ".vivliostyle", // directory which is saved intermediate files.
  toc: {
    title: "目次", // title of table of contents. default to 'Contents'.
    sectionDepth: 2,
    includeCover: false, // include cover page in table of contents. default to 'false'.
  },
  // cover: './cover.png', // cover image. default to undefined.
  vfm: {
    // options of VFM processor
    //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
    //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  },
};

if (isPrint) {
  def.theme = [
    ...def.theme,
    // グレースケール印刷可能なPDF
    "./theme-nice-techbook2/theme-print-pdf.css",
  ];
} else {
  def.theme = [
    ...def.theme,
    // オンライン向けのフルカラーPDF
    "./theme-nice-techbook2/theme-online-pdf.css",
    "./theme-nice-techbook2/theme-base/css/lib/prism/base.css",
    "./theme-nice-techbook2/theme-base/css/lib/prism/theme-okaidia.css",
  ];
}

export default def;

