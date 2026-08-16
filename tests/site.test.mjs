import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const siteRoot = "https://brianann2339.github.io/dr_houyuehtseng";
const siteUrl = `${siteRoot}/`;
const researchUrl = `${siteRoot}/research/`;

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "http://localhost/"), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

function visibleText(html) {
  return html
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ");
}

test("renders the finished personal website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  const text = visibleText(html);
  assert.match(html, /<html lang="zh-Hant">/i);
  assert.match(html, /<title>侯岳岑 Yueh-Tseng Hou｜急診醫師・臨床 AI 研究者<\/title>/i);
  assert.match(html, new RegExp(`<link rel="canonical" href="${siteUrl}"`));
  assert.doesNotMatch(html, /noindex/i);
  const profileJson = html.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
  );
  assert.ok(profileJson);
  const profilePage = JSON.parse(profileJson[1]);
  assert.equal(profilePage["@type"], "ProfilePage");
  assert.equal(profilePage.url, siteUrl);
  assert.equal(profilePage.mainEntity["@type"], "Person");
  assert.equal(profilePage.mainEntity.name, "侯岳岑");
  assert.equal(profilePage.mainEntity.image, `${siteRoot}/portrait.jpg`);
  assert.deepEqual(profilePage.mainEntity.sameAs, [
    "https://scholar.google.com/citations?user=F2RvQloAAAAJ&hl=zh-TW",
    "https://orcid.org/0009-0003-5125-0771",
    "https://www.linkedin.com/in/%E5%B2%B3%E5%B2%91-%E4%BE%AF-676792114/",
    "https://www.threads.com/@hou_care_you",
    "https://www.youtube.com/@hou_care_you",
  ]);
  assert.match(html, /class="mark"[^>]*>\s*侯岳岑醫師<small>YUEH-TSENG HOU<\/small>/i);
  assert.match(html, /<h1>侯岳岑<\/h1>/);
  assert.match(html, /Yueh-Tseng Hou, M\.D\./);
  assert.match(html, /敗血症 AI 臨床決策支援系統/);
  assert.match(html, /在急診與演算法之間，做翻譯的人/);
  assert.match(html, /2017\/09—2018\/08/);
  assert.match(html, /台北慈濟醫院一般科/);
  assert.match(text, /研究經歷/);
  assert.match(text, /臨床經歷/);
  assert.match(text, /學歷與進修/);
  assert.match(text, /研究經歷 .* 臨床經歷 .* 學歷與進修/);
  assert.match(
    text,
    /2019\/09—2021\/01 國立臺灣大學進修推廣學院 法律學分班第三十四期/,
  );
  assert.doesNotMatch(text, /修習 21 學分/);
  assert.match(html, /2025\/08\/06/);
  assert.match(html, /順天堂醫院救急科・2026\/03—09/);
  assert.match(
    text,
    /2026\/03—2026\/09 順天堂大學醫學部附屬順天堂醫院 臨床研究人員・\s*救急科救急災害医学講座\s*・到院前預測分析、敗血症預測分析・指導教授：近藤豊/,
  );
  assert.match(
    html,
    /href="https:\/\/hosp\.juntendo\.ac\.jp\/clinic\/department\/kyukyu\/staff\.html"[^>]*>救急科救急災害医学講座<\/a>/,
  );
  assert.match(
    text,
    /日本國立情報學研究所（NII） 訪問研究員・\s*計算成像與電腦視覺實驗室\s*・腎臟類器官 3D 影像建模與生長分析・指導教授：佐藤いまり/,
  );
  assert.match(
    html,
    /<a[^>]*href="https:\/\/research\.nii\.ac\.jp\/pbv\/"[^>]*>計算成像與電腦視覺實驗室<\/a>/,
  );
  assert.doesNotMatch(html, /researchmap\.jp\/y_wada73\/research_experience\/51236129/);
  assert.doesNotMatch(
    html,
    /<a[^>]*href="https:\/\/research\.nii\.ac\.jp\/pbv\/"[^>]*>訪問研究員/,
  );
  assert.match(
    text,
    /國立臺灣大學生醫電子與資訊學研究所 演算法與計算生物學實驗室（ACB Laboratory）\s*・指導教授：趙坤茂/,
  );
  assert.match(
    html,
    /href="https:\/\/www\.csie\.ntu\.edu\.tw\/~kmchao\/students\/index\.html"/,
  );
  assert.match(
    text,
    /2012\/06—2013\/06 慈濟大學醫學系藥毒所 小鼠行為研究室・專題研究：The pathophysiological roles of Mcl-1 in learning & memory function with Camk2α-cre derived mutant mouse・指導教授：陳松鶴/,
  );
  assert.match(text, /法律學分班第三十四期結訓/);
  assert.doesNotMatch(text, /臨床與研究/);
  assert.doesNotMatch(text, /急救科/);
  assert.match(text, /台北慈濟醫院急診部 專任主治醫師/);
  assert.match(text, /現為台北慈濟醫院急診部專任主治醫師/);
  assert.match(text, /2022\/03—2024\/12 三軍總醫院澎湖分院/);
  assert.match(text, /2025 通過一般科醫學師資培訓（PGY 指導醫師資格）/);
  assert.match(text, /2025 從事勞工健康服務醫師資格（健檢醫\/廠醫執照）/);
  assert.match(text, /2022 衛福部急診醫學科專科甄審合格（急診專科執照）/);
  assert.match(text, /2017 考試院醫師高考考試及格（醫師執照）/);
  assert.doesNotMatch(text, /2022\/03 起|2025 起|PGY 指導教師資格/);
  assert.match(
    text,
    /2024\/12\/09 兩岸企業家峰會年會 受邀代表台北慈濟擔任講者｜敗血症智慧預測與人工智慧在急診的應用/,
  );
  assert.match(
    text,
    /2025\/04\/24 台北慈濟醫院 PGY專業訓練課程｜生成式AI在臨床與學習上的應用/,
  );
  assert.match(
    text,
    /2023\/10\/21 急診聯合學術研討會 受邀演講｜The role of Brosym® in the treatment of Pneumonia/,
  );
  assert.doesNotMatch(text, /[「」]/);
  assert.match(
    text,
    /2025\/08\/06 .* 2025\/04\/24 .* 2024\/12\/09 .* 2023\/10\/21/,
  );
  assert.doesNotMatch(text, /擔任講者，分享敗血症智慧預測與人工智慧在急診的應用/);
  assert.match(
    text,
    /2022 Continuously Prediction Machine Learning Model Application in Emergency Sepsis Prediction 住院醫師研究論文發表競賽－口頭報告組第三名/,
  );
  assert.match(
    text,
    /2022 Machine Learning Application in Emergency Trauma Patients Prognosis Prediction: Optimization with a Genetic Algorithm and Discretization 急診醫學年會－口頭報告組佳作/,
  );
  assert.match(
    text,
    /2020 Machine Learning Application in Emergency Trauma Patients Prognosis Prediction: Optimization with a Genetic Algorithm and Discretization 住院醫師研究論文發表競賽－海報演講組優勝/,
  );
  assert.equal(
    (
      text.match(
        /Machine Learning Application in Emergency Trauma Patients Prognosis Prediction: Optimization with a Genetic Algorithm and Discretization/g,
      ) ?? []
    ).length,
    2,
  );
  assert.doesNotMatch(html, /讓醫療 AI，/);
  assert.match(html, /Google Scholar/);
  assert.match(html, /與我聯繫/);
  assert.match(html, /portrait\.jpg/);
  assert.match(html, /href="\/research"/);
  assert.match(html, /<main[^>]*id="content"[^>]*tabindex="-1"/i);
  assert.equal(
    (html.match(/href="https:\/\/www\.threads\.com\/@hou_care_you"/g) ?? []).length,
    4,
  );
  assert.equal(
    (html.match(/href="https:\/\/www\.youtube\.com\/@hou_care_you"/g) ?? []).length,
    4,
  );
  assert.equal((text.match(/Threads 與 YouTube/g) ?? []).length, 2);
  assert.match(
    text,
    /平常也在 Threads 與 YouTube 經營逛街學醫學——把醫學知識寫得貼近日常。/,
  );
  assert.match(
    html,
    /<a href="https:\/\/www\.youtube\.com\/@hou_care_you" target="_blank" rel="noreferrer">YouTube<\/a>｜逛街學醫學——把醫學知識寫得貼近日常。/,
  );
  assert.equal((text.match(/把醫學知識寫得貼近日常/g) ?? []).length, 3);
  assert.doesNotMatch(text, /寫給一般讀者的醫學筆記/);
  assert.match(
    text,
    /Taipei Tzu Chi Hospital Department of Emergency Medicine Office: \+886-2-6628-9779 #47288 Email: xde03012@tzuchi\.com\.tw No\. 289, Jianguo Rd\., Xindian Dist\., New Taipei City 23142, Taiwan \(R\.O\.C\)/,
  );
  assert.match(html, /href="tel:\+886266289779;ext=47288"/);
  assert.match(html, /href="mailto:xde03012@tzuchi\.com\.tw"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/i);
});

test("keeps the footer fixed without covering page content", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /--footer-reserve:\s*78px/);
  assert.match(css, /body\s*{[^}]*padding-bottom:\s*var\(--footer-reserve\)/s);
  assert.match(css, /footer\s*{[^}]*bottom:\s*0;[^}]*position:\s*fixed;/s);
  assert.match(css, /--footer-reserve:\s*calc\(106px \+ env\(safe-area-inset-bottom\)\)/);
  assert.doesNotMatch(css, /content:\s*"[「」]"/);
});

test("renders the complete research archive", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const response = await render("/research");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>研究成果｜侯岳岑 Yueh-Tseng Hou<\/title>/i);
  assert.match(
    html,
    new RegExp(`<link rel="canonical" href="${researchUrl}"`),
  );
  assert.doesNotMatch(html, /noindex/i);
  assert.match(html, /<main[^>]*id="research-content"[^>]*tabindex="-1"/i);
  assert.match(html, /論文發表/);
  assert.match(html, /其他著作/);
  assert.match(html, /歷年研究計畫/);
  assert.match(html, /class="mark"[^>]*>\s*侯岳岑醫師<small>YUEH-TSENG HOU<\/small>/i);
  assert.match(
    css,
    /\.publication-title,\s*\.plan-item h3,\s*\.other-work-item h3\s*{[^}]*font-family:\s*inherit;[^}]*font-size:\s*16\.5px;[^}]*font-weight:\s*700;[^}]*line-height:\s*1\.75;/s,
  );
  assert.match(
    css,
    /\.publication-year h3\s*{[^}]*font-family:\s*inherit;[^}]*font-size:\s*14px;[^}]*font-weight:\s*700;/s,
  );
  assert.match(css, /\.plan-year,\s*\.other-work-year\s*{[^}]*font-size:\s*14px;/s);
  assert.equal((html.match(/class="publication-item"/g) ?? []).length, 26);
  assert.equal((html.match(/class="publication-year"/g) ?? []).length, 8);
  assert.match(html, /class="publication-groups"/);
  assert.equal(
    (html.match(/href="https:\/\/www\.youtube\.com\/@hou_care_you"/g) ?? []).length,
    1,
  );
  const expectedAuthors = [
    "YT Ho, YC Yang, HK Huang, JL Hong, DS Chien, YT Hou, PC Lin, GT Yiang, MY Wu",
    "YT Hou, MY Wu, YL Chen, TH Liu, RT Cheng, PL Hsu, AK Chao, CC Huang, FW Cheng, PL Lai, IF Wu, GT Yiang",
    "CH Tsai, MY Wu, DS Chien, PC Lin, JY Chung, CY Liu, IS Tzeng, YT Hou, YL Chen, GT Yiang",
    "MY Wu, YT Hou, JY Chung, GT Yiang",
    "PC Lin, MY Wu, DS Chien, JY Chung, CY Liu, IS Tzeng, YT Hou, YL Chen, GT Yiang",
    "SJ Lee, L Jian, CY Liu, IS Tzeng, DS Chien, YT Hou, PC Lin, YL Chen, MY Wu, GT Yiang",
    "PC Lin, CY Liu, IS Tzeng, TH Hsieh, CY Chang, YT Hou, YL Chen, DS Chien, GT Yiang, MY Wu",
    "YC Yang, PC Lin, CY Liu, IS Tzeng, SJ Lee, YT Hou, YL Chen, DS Chien, GT Yiang, MY Wu",
    "PC Lin, CY Liu, IS Tzeng, TH Hsieh, CY Chang, YT Hou, YL Chen, DS Chien, GT Yiang, MY Wu",
    "HK Huang, CY Liu, IS Tzeng, TH Hsieh, CY Chang, YT Hou, PC Lin, YL Chen, DS Chien, GT Yiang, MY Wu",
    "YT Hou, MC Chang, C Yang, YL Chen, PC Lin, GT Yiang, MY Wu",
    "DS Chien, GT Yiang, CY Liu, IS Tzeng, CY Chang, YT Hou, YL Chen, PC Lin, MY Wu",
    "YC Yang, TH Hsieh, CY Liu, CY Chang, YT Hou, PC Lin, YL Chen, DS Chien, GT Yiang, MY Wu",
    "SY Shih, YT Hou, PC Lin, YL Chen, DS Chien, GT Yiang, MY Wu",
    "B Ni, YL Chen, PC Lin, YT Hou, YT Ho, MY Wu",
    "JL Hong, YT Hou, PC Lin, YL Chen, DS Chien, GT Yiang, MY Wu",
    "MY Wu, CJ Li, YT Hou, YL Chen, FW Chang, GT Yiang",
    "MY Wu, YT Hou, JY Ke, GT Yiang",
    "CY Chang, YT Hou, YJ Chien, YL Chen, PC Lin, CS Chen, MY Wu",
    "MY Wu, CH Lin, YT Hou, PC Lin, GT Yiang, YC Tien, HC Yeh",
    "MY Wu, YT Hou, GT Yiang, AP Tsai, CH Lin",
    "MY Wu, YW Tsai, LC Lee, YC Chien, YL Chen, YT Hou, GT Yiang",
    "MY Wu, CJ Li, GT Yiang, YL Cheng, AP Tsai, YT Hou, YC Ho, MF Hou, PY Chu",
    "MY Wu, LC Lee, YL Chen, YC Chien, BY Ni, YT Hou, GT Yiang",
    "MY Wu, YT Hou, GT Yiang",
    "MY Wu, YT Hou, GT Yiang",
  ];
  const renderedAuthors = [
    ...html.matchAll(/<p class="publication-authors">([\s\S]*?)<\/p>/g),
  ].map((match) =>
    visibleText(match[1])
      .replace(/\s*†/g, "")
      .replace(/\s+,/g, ",")
      .trim(),
  );
  assert.deepEqual(renderedAuthors, expectedAuthors);
  assert.equal((html.match(/class="self-author"/g) ?? []).length, 26);
  assert.equal((html.match(/class="co-first-citation"/g) ?? []).length, 4);
  const coFirstDois = [
    ...html.matchAll(/<li class="publication-item">([\s\S]*?)<\/li>/g),
  ]
    .filter((match) => match[1].includes('class="co-first-citation"'))
    .map((match) => match[1].match(/https:\/\/doi\.org\/([^"<]+)/)?.[1]);
  assert.deepEqual(coFirstDois, [
    "10.1097/SHK.0000000000002394",
    "10.1186/s12873-024-00948-5",
    "10.4103/tcmj.tcmj_34_19",
    "10.3390/ijerph17145214",
  ]);

  const expectedDois = [
    "10.1097/SHK.0000000000002878",
    "10.1097/SHK.0000000000002394",
    "10.3390/medicina60060960",
    "10.1186/s12873-024-00948-5",
    "10.3390/medicina60040647",
    "10.3390/medicina59111974",
    "10.4103/tcmj.tcmj_20_22",
    "10.1097/SHK.0000000000002018",
    "10.3389/fmed.2022.999481",
    "10.1016/j.ajem.2022.05.047",
    "10.3390/medicina58080996",
    "10.3390/diagnostics12102334",
    "10.3390/children8080688",
    "10.3390/medicina57111184",
    "10.1016/j.ajem.2021.02.006",
    "10.3390/jcdd8090104",
    "10.4103/tcmj.tcmj_216_18",
    "10.4103/tcmj.tcmj_34_19",
    "10.3390/ijerph17145214",
    "10.3390/brainsci9080207",
    "10.3390/antibiotics8030093",
    "10.3390/reports1010006",
    "10.1159/000489184",
    "10.3390/reports1010010",
    "10.3390/reports1010007",
    "10.3390/reports1010004",
  ];
  const renderedDois = [
    ...html.matchAll(
      /<a class="publication-doi" href="https:\/\/doi\.org\/([^"]+)"/g,
    ),
  ].map((match) => match[1]);
  assert.deepEqual(renderedDois, expectedDois);
  assert.match(html, /href="https:\/\/doi\.org\/10\.3390\/reports1010004"/);
  assert.match(html, /href="https:\/\/doi\.org\/10\.3390\/ijerph17145214"/);
  assert.match(html, /href="https:\/\/doi\.org\/10\.1097\/SHK\.0000000000002394"/);
  assert.match(html, /href="https:\/\/doi\.org\/10\.1097\/SHK\.0000000000002878"/);
  assert.match(html, /Tzu Chi Medical Journal 32\(1\), 82–87/);
  assert.match(html, /Tzu Chi Medical Journal 32\(1\), 91–95/);
  assert.match(html, /Tzu Chi Medical Journal 35\(1\), 69–77/);
  assert.doesNotMatch(html, /Tzu-Chi Medical Journal/);
  assert.doesNotMatch(visibleText(html), /\bet al\./i);
  assert.equal((html.match(/class="plan-item"/g) ?? []).length, 7);
  assert.equal((html.match(/class="other-work-item"/g) ?? []).length, 1);
  assert.match(
    html,
    /<a href="https:\/\/www\.sem\.org\.tw\/Ejournal\/Detail\/239"[^>]*>冰凍傷口的處置與預防<\/a>/,
  );
  assert.match(
    visibleText(html),
    /吳孟諭\s*、\s*侯岳岑\s*、\s*楊久滕\s+台灣急診醫學通訊・第三卷第四期・Taiwan Emergency Medicine Bulletin 3\(4\): e2020030405/,
  );
  assert.match(html, /Efficacy of a Sepsis Clinical Decision Support System/);
  assert.match(
    html,
    /Comparative Performance of Reverse Shock Index Multiplied by Simplified Motor Score \(RSI-SMS\) and Conventional Indices For Predicting Outcomes in Trauma Patients: A Retrospective Analysis of A 13-Year Multicenter Prospectively Maintained Trauma Registry/,
  );
  assert.doesNotMatch(html, /\(rSI-sMS\)/);
  assert.match(html, /TCRD-TPE-111-46/);
  assert.match(html, /TCRD-TPE-115-20/);
  assert.match(html, /見微知著：利用深度學習預測腦出血患者未來之窗（IRB: 13-IRB085）/);
  assert.match(html, /利用人工智慧辨認全口造影中的牙齒病症（IRB: 12-XD-092）/);
  assert.match(html, /以深度學習為基礎之 X 光異常偵測研究－急診醫囑系統臨床應用（IRB: 11-XD-098）/);
  assert.match(html, /單醫學中心十年資料庫大數據分析（IRB: 10-XD-092）/);
  assert.match(html, /外傷族群的臨床預後預測與處置分析（IRB: 09-XD-104）/);
  assert.match(html, /TCRD-TPE-110-48/);
  assert.match(html, /利用基因演算法優化監督式機器學習模型預測急診創傷病人預後（IRB: 08-XD-072）/);
  assert.match(html, /TCRD-TPE-109-13/);
  assert.equal((visibleText(html).match(/（IRB: /g) ?? []).length, 7);
  assert.doesNotMatch(html, /TRCD-TPE-/);
});

test("exposes crawl rules and the public sitemap", async () => {
  const [robotsResponse, sitemapResponse] = await Promise.all([
    render("/robots.txt"),
    render("/sitemap.xml"),
  ]);

  assert.equal(robotsResponse.status, 200);
  assert.match(robotsResponse.headers.get("content-type") ?? "", /^text\/plain\b/i);
  const robots = await robotsResponse.text();
  assert.match(robots, /User-Agent: \*/i);
  assert.match(robots, /Allow: \//i);
  assert.match(robots, new RegExp(`Sitemap: ${siteRoot}/sitemap\\.xml`));

  assert.equal(sitemapResponse.status, 200);
  assert.match(
    sitemapResponse.headers.get("content-type") ?? "",
    /^(application|text)\/xml\b/i,
  );
  const sitemap = await sitemapResponse.text();
  assert.deepEqual(
    [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]),
    [siteUrl, researchUrl],
  );
});

test("keeps private source material out of the public page", async () => {
  const responses = await Promise.all([render(), render("/research")]);
  const html = (await Promise.all(responses.map((response) => response.text()))).join(" ");
  const text = visibleText(html);

  assert.doesNotMatch(text, /Gmail|2025NHQA-|CV 202509|手機|地址/);
  assert.doesNotMatch(text, /342|129,213|6039|18\.6|14\.4/);
  assert.doesNotMatch(text, /brianann75@gmail\.com/i);
  assert.doesNotMatch(text, /0916-697288/);
  assert.doesNotMatch(text, /09\d{2}[-\s]?\d{3}[-\s]?\d{3}/);
  assert.doesNotMatch(text, /\.pptx\b|預算|經費|萬元/i);
  assert.doesNotMatch(text, /新北市新店區|建國路/i);
  assert.doesNotMatch(
    text,
    /身分證統一編號|出生日期|證書字號|急專醫字第|醫字第|補照次數/,
  );
  assert.doesNotMatch(text, /學號|臺推教字第/);
});
