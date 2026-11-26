import type { Locale } from "./i18n";

const en: Record<string, string> = {
  "跳至主要內容": "Skip to main content",
  "回到首頁": "Back to home",
  "侯岳岑醫師": "Yueh-Tseng Hou, M.D.",
  "主要導覽": "Primary navigation",
  "首頁": "Home",
  "經歷": "Experience",
  "代表專案": "Featured Project",
  "研究成果": "Research",
  "聯絡": "Contact",
  "研究從急診現場的問題出發，涵蓋敗血症決策支援、外傷與急診預後、休克指數，以及醫學影像 AI。這裡收錄依正式期刊、PubMed 與 DOI metadata 核對的論文清單、台灣急診醫學通訊著作、學術會議發表，以及可由公開來源確認的歷年研究計畫。":
    "My research begins with clinical questions from the emergency department and spans sepsis decision support, trauma and emergency care outcomes, shock indices, and medical imaging AI. This page includes publications verified against journal records, PubMed, and DOI metadata; an article in the Taiwan Emergency Medicine Bulletin; conference presentations; and research projects by year confirmed through public sources.",
  "研究成果摘要": "Research summary",
  "研究成果頁內導覽": "Research page navigation",
  "論文發表": "Publications",
  "其他著作": "Other Writing",
  "學術會議發表": "Conference Presentations",
  "歷年研究計畫": "Research Projects by Year",
  "清單最後整理於 2026/08，依出版年份排列；引用次數會持續變動，因此不固定顯示於網站。":
    "Last reviewed in August 2026 and arranged by publication year. Citation counts change over time and are therefore not displayed as fixed values.",
  "† 侯岳岑為共同第一作者": "† Yueh-Tseng Hou is a co-first author",
  "共同第一作者": "Co-first author",
  "收錄台灣急診醫學通訊刊登之文章。":
    "Articles published in the Taiwan Emergency Medicine Bulletin.",
  "冰凍傷口的處置與預防": "Management and Prevention of Frostbite",
  "台灣急診醫學通訊・第三卷第四期・Taiwan Emergency Medicine Bulletin 3(4): e2020030405":
    "Taiwan Emergency Medicine Bulletin 3(4): e2020030405",
  "收錄台灣急診醫學會之口頭、海報與病例報告發表；各筆附官方名單。":
    "Oral, poster, and case-report presentations at meetings of the Taiwan Society of Emergency Medicine; each record links to the official list.",
  "會議譯名說明":
    "Presentation titles and meeting names are descriptive website translations; original Chinese presentation titles are retained below.",
  "機器學習應用於急診創傷病人預後預測－以基因演算法及離散化優化計算":
    "Machine Learning for Prognosis Prediction in Emergency Trauma Patients: Optimization Using a Genetic Algorithm and Discretization",
  "侯岳岑。原著論文口頭發表，資料科學類。台灣急診醫學會第十四屆第二次線上會員大會暨學術研討會（OP-2021-12），獲口頭發表佳作。":
    "侯岳岑. Original research oral presentation, Data Science category. Second Online General Assembly and Scientific Meeting of the 14th Term, Taiwan Society of Emergency Medicine (OP-2021-12). Honorable Mention in the oral presentation category.",
  "官方論文發表名單 PDF": "Official presentation list (PDF)",
  "官方口頭發表時間明細 PDF": "Official oral-presentation schedule (PDF)",
  "官方獲獎名單 PDF": "Official award list (PDF)",
  "侯岳岑。圖片展示海報。台灣急診醫學會第十四屆第一次會員大會暨學術研討會（Photo-33）。":
    "侯岳岑. Image-presentation poster. First General Assembly and Scientific Meeting of the 14th Term, Taiwan Society of Emergency Medicine (Photo-33).",
  "官方投稿接受名單 PDF": "Official submission acceptance list (PDF)",
  "不同機器學習模型應用於急診外傷病人之預後預測：回溯性世代研究":
    "Prognostic Prediction in Emergency Trauma Patients Using Different Machine-Learning Models: A Retrospective Cohort Study",
  "侯岳岑。原著論文海報，臨床類。台灣急診醫學會第十三屆第二次會員大會暨學術研討會（P-2019-09）。":
    "侯岳岑. Original research poster, Clinical category. Second General Assembly and Scientific Meeting of the 13th Term, Taiwan Society of Emergency Medicine (P-2019-09).",
  "官方論文發表明細 PDF": "Official presentation details (PDF)",
  "內頸靜脈栓塞個案報告，Lemierre’s syndrome 與 Trousseau’s syndrome 之鑑別診斷":
    "Internal Jugular Vein Thrombosis: A Case Report and Differential Diagnosis of Lemierre’s Syndrome and Trousseau’s Syndrome",
  "侯岳岑。病例報告海報。台灣急診醫學會2018年冬季學術討論會（18WC-31）。":
    "侯岳岑. Case-report poster. 2018 Winter Scientific Meeting of the Taiwan Society of Emergency Medicine (18WC-31).",
  "官方病例報告海報接受名單 PDF": "Official accepted case-report poster list (PDF)",
  "依年度列出公開可確認的院內研究計畫；多年期計畫保留各年度紀錄。":
    "Publicly verifiable intramural research projects are listed by year. Multi-year projects retain a separate record for each funding year.",
  "計畫譯名說明":
    "Project titles are website translations; original Chinese titles and all IRB and TCRD identifiers are retained below.",
  "見微知著：利用深度學習預測腦出血患者未來之窗（IRB: 13-IRB085）":
    "Foreseeing Outcomes from Subtle Signs: Deep-Learning Prediction of the Clinical Course of Patients with Brain Hemorrhage (IRB: 13-IRB085)",
  "慈濟醫療財團法人院內研究計畫・TCRD-TPE-115-20・第 2/2 年":
    "Intramural research project, 慈濟醫療財團法人 · TCRD-TPE-115-20 · Year 2 of 2",
  "慈濟醫療財團法人院內研究計畫・TCRD-TPE-114-20・第 1/2 年":
    "Intramural research project, 慈濟醫療財團法人 · TCRD-TPE-114-20 · Year 1 of 2",
  "利用人工智慧辨認全口造影中的牙齒病症（IRB: 12-XD-092）":
    "Artificial-Intelligence Identification of Dental Conditions in Full-Mouth Imaging (IRB: 12-XD-092)",
  "慈濟醫療財團法人院內研究計畫・TCRD-TPE-113-27":
    "Intramural research project, 慈濟醫療財團法人 · TCRD-TPE-113-27",
  "以深度學習為基礎之 X 光異常偵測研究－急診醫囑系統臨床應用（IRB: 11-XD-098）":
    "Deep-Learning-Based X-Ray Abnormality Detection: Clinical Application in an Emergency Department Order-Entry System (IRB: 11-XD-098)",
  "慈濟醫療財團法人院內研究計畫・TCRD-TPE-112-43":
    "Intramural research project, 慈濟醫療財團法人 · TCRD-TPE-112-43",
  "以機器學習為基礎之臨床決策系統應用於醫院資訊系統之研究－單醫學中心十年資料庫大數據分析（IRB: 10-XD-092）":
    "Application of a Machine-Learning-Based Clinical Decision System in a Hospital Information System: Big-Data Analysis of a Ten-Year Single-Center Database (IRB: 10-XD-092)",
  "慈濟醫療財團法人院內研究計畫・TCRD-TPE-111-46":
    "Intramural research project, 慈濟醫療財團法人 · TCRD-TPE-111-46",
  "外傷族群的臨床預後預測與處置分析（IRB: 09-XD-104）":
    "Clinical Outcome Prediction and Management Analysis in Trauma Patients (IRB: 09-XD-104)",
  "慈濟醫療財團法人院內研究計畫・TCRD-TPE-110-48":
    "Intramural research project, 慈濟醫療財團法人 · TCRD-TPE-110-48",
  "利用基因演算法優化監督式機器學習模型預測急診創傷病人預後（IRB: 08-XD-072）":
    "Optimizing a Supervised Machine-Learning Model with a Genetic Algorithm to Predict Outcomes in Emergency Trauma Patients (IRB: 08-XD-072)",
  "慈濟醫療財團法人院內研究計畫・TCRD-TPE-109-13":
    "Intramural research project, 慈濟醫療財團法人 · TCRD-TPE-109-13",
  "網站翻譯": "Website translation",
  "原題": "Original title",
};

const ja: Record<string, string> = {
  "跳至主要內容": "本文へスキップ",
  "回到首頁": "ホームへ戻る",
  "侯岳岑醫師": "侯岳岑 医師",
  "主要導覽": "メインナビゲーション",
  "首頁": "ホーム",
  "經歷": "経歴",
  "代表專案": "代表プロジェクト",
  "研究成果": "研究業績",
  "聯絡": "お問い合わせ",
  "研究從急診現場的問題出發，涵蓋敗血症決策支援、外傷與急診預後、休克指數，以及醫學影像 AI。這裡收錄依正式期刊、PubMed 與 DOI metadata 核對的論文清單、台灣急診醫學通訊著作、學術會議發表，以及可由公開來源確認的歷年研究計畫。":
    "私の研究は救急現場の臨床課題から出発し、敗血症の意思決定支援、外傷・救急診療の転帰、ショックインデックス、医用画像AIを扱っています。本ページには、学術誌、PubMed、DOIメタデータで確認した論文、Taiwan Emergency Medicine Bulletin掲載記事、学会発表、公開情報で確認できる年度別研究計画を収録しています。",
  "研究成果摘要": "研究業績の概要",
  "研究成果頁內導覽": "研究ページ内ナビゲーション",
  "論文發表": "論文",
  "其他著作": "その他の著作",
  "學術會議發表": "学会発表",
  "歷年研究計畫": "年度別研究計画",
  "清單最後整理於 2026/08，依出版年份排列；引用次數會持續變動，因此不固定顯示於網站。":
    "最終更新は2026年8月。出版年順に掲載しています。被引用数は変動するため、固定値として表示していません。",
  "† 侯岳岑為共同第一作者": "† 侯岳岑は共同筆頭著者",
  "共同第一作者": "共同筆頭著者",
  "收錄台灣急診醫學通訊刊登之文章。":
    "Taiwan Emergency Medicine Bulletinに掲載された記事です。",
  "冰凍傷口的處置與預防": "凍傷の処置と予防",
  "台灣急診醫學通訊・第三卷第四期・Taiwan Emergency Medicine Bulletin 3(4): e2020030405":
    "Taiwan Emergency Medicine Bulletin 3(4): e2020030405",
  "收錄台灣急診醫學會之口頭、海報與病例報告發表；各筆附官方名單。":
    "台湾救急医学会における口頭発表、ポスター発表、症例報告を収録し、各記録に公式一覧へのリンクを付しています。",
  "會議譯名說明":
    "発表題名と学会名はウェブサイト上の説明訳です。中国語の原題は各項目に併記しています。",
  "機器學習應用於急診創傷病人預後預測－以基因演算法及離散化優化計算":
    "救急外傷患者の予後予測における機械学習の応用：遺伝的アルゴリズムと離散化による最適化",
  "侯岳岑。原著論文口頭發表，資料科學類。台灣急診醫學會第十四屆第二次線上會員大會暨學術研討會（OP-2021-12），獲口頭發表佳作。":
    "侯岳岑。原著論文口頭発表、データサイエンス部門。台湾救急医学会 第14期第2回オンライン会員総会・学術集会（OP-2021-12）。口頭発表部門佳作。",
  "官方論文發表名單 PDF": "公式論文発表一覧（PDF）",
  "官方口頭發表時間明細 PDF": "公式口頭発表スケジュール（PDF）",
  "官方獲獎名單 PDF": "公式受賞者一覧（PDF）",
  "侯岳岑。圖片展示海報。台灣急診醫學會第十四屆第一次會員大會暨學術研討會（Photo-33）。":
    "侯岳岑。画像展示ポスター。台湾救急医学会 第14期第1回会員総会・学術集会（Photo-33）。",
  "官方投稿接受名單 PDF": "公式投稿採択一覧（PDF）",
  "不同機器學習模型應用於急診外傷病人之預後預測：回溯性世代研究":
    "異なる機械学習モデルを用いた救急外傷患者の予後予測：後ろ向きコホート研究",
  "侯岳岑。原著論文海報，臨床類。台灣急診醫學會第十三屆第二次會員大會暨學術研討會（P-2019-09）。":
    "侯岳岑。原著論文ポスター、臨床部門。台湾救急医学会 第13期第2回会員総会・学術集会（P-2019-09）。",
  "官方論文發表明細 PDF": "公式発表詳細（PDF）",
  "內頸靜脈栓塞個案報告，Lemierre’s syndrome 與 Trousseau’s syndrome 之鑑別診斷":
    "内頸静脈血栓症の症例報告：Lemierre症候群とTrousseau症候群の鑑別診断",
  "侯岳岑。病例報告海報。台灣急診醫學會2018年冬季學術討論會（18WC-31）。":
    "侯岳岑。症例報告ポスター。台湾救急医学会2018年冬季学術集会（18WC-31）。",
  "官方病例報告海報接受名單 PDF": "公式症例報告ポスター採択一覧（PDF）",
  "依年度列出公開可確認的院內研究計畫；多年期計畫保留各年度紀錄。":
    "公開情報で確認できる院内研究計画を年度別に掲載しています。複数年度にわたる計画は、各年度の記録を分けて掲載しています。",
  "計畫譯名說明":
    "研究計画名はウェブサイト訳です。中国語の原題、IRB番号、TCRD番号は各項目に併記しています。",
  "見微知著：利用深度學習預測腦出血患者未來之窗（IRB: 13-IRB085）":
    "微細な兆候から転帰を見通す：深層学習による脳出血患者の臨床経過予測（IRB: 13-IRB085）",
  "慈濟醫療財團法人院內研究計畫・TCRD-TPE-115-20・第 2/2 年":
    "慈濟醫療財團法人 院内研究計画・TCRD-TPE-115-20・2年計画の2年目",
  "慈濟醫療財團法人院內研究計畫・TCRD-TPE-114-20・第 1/2 年":
    "慈濟醫療財團法人 院内研究計画・TCRD-TPE-114-20・2年計画の1年目",
  "利用人工智慧辨認全口造影中的牙齒病症（IRB: 12-XD-092）":
    "全口腔画像における歯科疾患のAI識別（IRB: 12-XD-092）",
  "慈濟醫療財團法人院內研究計畫・TCRD-TPE-113-27":
    "慈濟醫療財團法人 院内研究計画・TCRD-TPE-113-27",
  "以深度學習為基礎之 X 光異常偵測研究－急診醫囑系統臨床應用（IRB: 11-XD-098）":
    "深層学習に基づくX線異常検出：救急診療オーダーシステムへの臨床応用（IRB: 11-XD-098）",
  "慈濟醫療財團法人院內研究計畫・TCRD-TPE-112-43":
    "慈濟醫療財團法人 院内研究計画・TCRD-TPE-112-43",
  "以機器學習為基礎之臨床決策系統應用於醫院資訊系統之研究－單醫學中心十年資料庫大數據分析（IRB: 10-XD-092）":
    "機械学習に基づく臨床意思決定システムの病院情報システムへの応用：単一医療センター10年データベースのビッグデータ解析（IRB: 10-XD-092）",
  "慈濟醫療財團法人院內研究計畫・TCRD-TPE-111-46":
    "慈濟醫療財團法人 院内研究計画・TCRD-TPE-111-46",
  "外傷族群的臨床預後預測與處置分析（IRB: 09-XD-104）":
    "外傷患者集団における臨床転帰予測と診療内容の分析（IRB: 09-XD-104）",
  "慈濟醫療財團法人院內研究計畫・TCRD-TPE-110-48":
    "慈濟醫療財團法人 院内研究計画・TCRD-TPE-110-48",
  "利用基因演算法優化監督式機器學習模型預測急診創傷病人預後（IRB: 08-XD-072）":
    "遺伝的アルゴリズムで教師あり機械学習モデルを最適化し、救急外傷患者の予後を予測する（IRB: 08-XD-072）",
  "慈濟醫療財團法人院內研究計畫・TCRD-TPE-109-13":
    "慈濟醫療財團法人 院内研究計画・TCRD-TPE-109-13",
  "網站翻譯": "ウェブサイト訳",
  "原題": "原題",
};

export function researchText(locale: Locale, text: string) {
  if (locale === "zh") {
    return text;
  }

  return (locale === "en" ? en : ja)[text] ?? text;
}

export function researchCount(
  locale: Locale,
  kind: "publications" | "conferences" | "projects",
  count: number,
) {
  if (locale === "zh") {
    return kind === "publications"
      ? `${count} 篇論文`
      : kind === "conferences"
        ? `${count} 項會議發表`
        : `${count} 筆年度計畫紀錄`;
  }

  if (locale === "ja") {
    return kind === "publications"
      ? `論文 ${count}編`
      : kind === "conferences"
        ? `学会発表 ${count}件`
        : `年度別研究計画 ${count}件`;
  }

  const label =
    kind === "publications"
      ? "publication"
      : kind === "conferences"
        ? "conference presentation"
        : "project-year record";
  return `${count} ${label}${count === 1 ? "" : "s"}`;
}

export function localizeResearchData<T>(locale: Locale, value: T): T {
  if (locale === "zh") {
    return value;
  }

  if (typeof value === "string") {
    return researchText(locale, value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => localizeResearchData(locale, item)) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localizeResearchData(locale, item)]),
    ) as T;
  }

  return value;
}
