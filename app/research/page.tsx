import type { Metadata } from "next";
import Link from "next/link";
import { researchUrl } from "../site";
import VisitorCounter from "../visitor-counter";

const scholarUrl =
  "https://scholar.google.com/citations?user=F2RvQloAAAAJ&hl=zh-TW";
const orcidUrl = "https://orcid.org/0009-0003-5125-0771";
const linkedinUrl =
  "https://www.linkedin.com/in/%E5%B2%B3%E5%B2%91-%E4%BE%AF-676792114/";
const threadsUrl = "https://www.threads.com/@hou_care_you";
const youtubeUrl = "https://www.youtube.com/@hou_care_you";
const semBulletinUrl = "https://www.sem.org.tw/Ejournal/Detail/239";

const publications = [
  {
    year: "2026",
    title:
      "Comparative Performance of Reverse Shock Index Multiplied by Simplified Motor Score (RSI-SMS) and Conventional Indices For Predicting Outcomes in Trauma Patients: A Retrospective Analysis of A 13-Year Multicenter Prospectively Maintained Trauma Registry",
    journal: "Shock 66(1), 110–123",
    authors: [
      "YT Ho",
      "YC Yang",
      "HK Huang",
      "JL Hong",
      "DS Chien",
      "YT Hou",
      "PC Lin",
      "GT Yiang",
      "MY Wu",
    ],
    doi: "10.1097/SHK.0000000000002878",
  },
  {
    year: "2024",
    title:
      "Efficacy of a Sepsis Clinical Decision Support System in Identifying Patients with Sepsis in the Emergency Department",
    journal: "Shock 62(4), 480–487",
    authors: [
      "YT Hou",
      "MY Wu",
      "YL Chen",
      "TH Liu",
      "RT Cheng",
      "PL Hsu",
      "AK Chao",
      "CC Huang",
      "FW Cheng",
      "PL Lai",
      "IF Wu",
      "GT Yiang",
    ],
    doi: "10.1097/SHK.0000000000002394",
    coFirst: true,
  },
  {
    year: "2024",
    title:
      "Association between Time to Emergent Surgery and Outcomes in Trauma Patients: A 10-Year Multicenter Study",
    journal: "Medicina 60(6), 960",
    authors: [
      "CH Tsai",
      "MY Wu",
      "DS Chien",
      "PC Lin",
      "JY Chung",
      "CY Liu",
      "IS Tzeng",
      "YT Hou",
      "YL Chen",
      "GT Yiang",
    ],
    doi: "10.3390/medicina60060960",
  },
  {
    year: "2024",
    title:
      "Reverse shock index multiplied by simplified motor score as a predictor of clinical outcomes for patients with COVID-19",
    journal: "BMC Emergency Medicine 24(1), 26",
    authors: [
      "MY Wu",
      "YT Hou",
      "JY Chung",
      "GT Yiang",
    ],
    doi: "10.1186/s12873-024-00948-5",
    coFirst: true,
  },
  {
    year: "2024",
    title:
      "Use of Reverse Shock Index Multiplied by Simplified Motor Score in a Five-Level Triage System: Identifying Trauma in Adult Patients at a High Risk of Mortality",
    journal: "Medicina 60(4), 647",
    authors: [
      "PC Lin",
      "MY Wu",
      "DS Chien",
      "JY Chung",
      "CY Liu",
      "IS Tzeng",
      "YT Hou",
      "YL Chen",
      "GT Yiang",
    ],
    doi: "10.3390/medicina60040647",
  },
  {
    year: "2023",
    title:
      "A Ten-Year Retrospective Cohort Study on Neck Collar Immobilization in Trauma Patients with Head and Neck Injuries",
    journal: "Medicina 59(11), 1974",
    authors: [
      "SJ Lee",
      "L Jian",
      "CY Liu",
      "IS Tzeng",
      "DS Chien",
      "YT Hou",
      "PC Lin",
      "YL Chen",
      "MY Wu",
      "GT Yiang",
    ],
    doi: "10.3390/medicina59111974",
  },
  {
    year: "2023",
    title:
      "The impact of holiday season and weekend effect on traumatic injury mortality: Evidence from a 10-year analysis",
    journal: "Tzu Chi Medical Journal 35(1), 69–77",
    authors: [
      "PC Lin",
      "CY Liu",
      "IS Tzeng",
      "TH Hsieh",
      "CY Chang",
      "YT Hou",
      "YL Chen",
      "DS Chien",
      "GT Yiang",
      "MY Wu",
    ],
    doi: "10.4103/tcmj.tcmj_20_22",
  },
  {
    year: "2022",
    title:
      "Prehospital Shock Index Multiplied by AVPU Scale as a Predictor of Clinical Outcomes in Traumatic Injury",
    journal: "Shock 58(6), 524–533",
    authors: [
      "YC Yang",
      "PC Lin",
      "CY Liu",
      "IS Tzeng",
      "SJ Lee",
      "YT Hou",
      "YL Chen",
      "DS Chien",
      "GT Yiang",
      "MY Wu",
    ],
    doi: "10.1097/SHK.0000000000002018",
  },
  {
    year: "2022",
    title:
      "Shock index, modified shock index, age shock index score, and reverse shock index multiplied by Glasgow Coma Scale predicting clinical outcomes in traumatic brain injury: Evidence from a 10-year analysis in a single center",
    journal: "Frontiers in Medicine 9, 999481",
    authors: [
      "PC Lin",
      "CY Liu",
      "IS Tzeng",
      "TH Hsieh",
      "CY Chang",
      "YT Hou",
      "YL Chen",
      "DS Chien",
      "GT Yiang",
      "MY Wu",
    ],
    doi: "10.3389/fmed.2022.999481",
  },
  {
    year: "2022",
    title:
      "The association between blood pressure and in-hospital mortality in traumatic brain injury: Evidence from a 10-year analysis in a single-center",
    journal: "The American Journal of Emergency Medicine 58, 265–274",
    authors: [
      "HK Huang",
      "CY Liu",
      "IS Tzeng",
      "TH Hsieh",
      "CY Chang",
      "YT Hou",
      "PC Lin",
      "YL Chen",
      "DS Chien",
      "GT Yiang",
      "MY Wu",
    ],
    doi: "10.1016/j.ajem.2022.05.047",
  },
  {
    year: "2022",
    title:
      "Prediction of Compartment Syndrome after Protobothrops mucrosquamatus Snakebite by Diastolic Retrograde Arterial Flow: A Case Report",
    journal: "Medicina 58(8), 996",
    authors: [
      "YT Hou",
      "MC Chang",
      "C Yang",
      "YL Chen",
      "PC Lin",
      "GT Yiang",
      "MY Wu",
    ],
    doi: "10.3390/medicina58080996",
  },
  {
    year: "2022",
    title:
      "Association of In-Hospital Mortality and Trauma Team Activation: A 10-Year Study",
    journal: "Diagnostics 12(10), 2334",
    authors: [
      "DS Chien",
      "GT Yiang",
      "CY Liu",
      "IS Tzeng",
      "CY Chang",
      "YT Hou",
      "YL Chen",
      "PC Lin",
      "MY Wu",
    ],
    doi: "10.3390/diagnostics12102334",
  },
  {
    year: "2021",
    title:
      "Analysis of Clinical Outcome and Predictors of Mortality in Pediatric Trauma Population: Evidence from a 10 Year Analysis in a Single Center",
    journal: "Children 8(8), 688",
    authors: [
      "YC Yang",
      "TH Hsieh",
      "CY Liu",
      "CY Chang",
      "YT Hou",
      "PC Lin",
      "YL Chen",
      "DS Chien",
      "GT Yiang",
      "MY Wu",
    ],
    doi: "10.3390/children8080688",
  },
  {
    year: "2021",
    title:
      "The Spiked Helmet Sign Predicting a Poor Outcome in a Patient with Non-Myocardial Infarction ST-Segment Elevation",
    journal: "Medicina 57(11), 1184",
    authors: [
      "SY Shih",
      "YT Hou",
      "PC Lin",
      "YL Chen",
      "DS Chien",
      "GT Yiang",
      "MY Wu",
    ],
    doi: "10.3390/medicina57111184",
  },
  {
    year: "2021",
    title:
      "Gastropericardial fistula induced acute purulent pericarditis",
    journal: "The American Journal of Emergency Medicine 46, 801.e1–801.e3",
    authors: [
      "B Ni",
      "YL Chen",
      "PC Lin",
      "YT Hou",
      "YT Ho",
      "MY Wu",
    ],
    doi: "10.1016/j.ajem.2021.02.006",
  },
  {
    year: "2021",
    title:
      "Antiphospholipid Syndrome-Induced Leriche Syndrome in a Man with Lower Limbs Sensory and Motor Defect",
    journal: "Journal of Cardiovascular Development and Disease 8(9), 104",
    authors: [
      "JL Hong",
      "YT Hou",
      "PC Lin",
      "YL Chen",
      "DS Chien",
      "GT Yiang",
      "MY Wu",
    ],
    doi: "10.3390/jcdd8090104",
  },
  {
    year: "2020",
    title:
      "Analysis of Emergency Air Medical Services over 9 Years in the Penghu Archipelago of Taiwan",
    journal: "Tzu Chi Medical Journal 32(1), 82–87",
    authors: [
      "MY Wu",
      "CJ Li",
      "YT Hou",
      "YL Chen",
      "FW Chang",
      "GT Yiang",
    ],
    doi: "10.4103/tcmj.tcmj_216_18",
  },
  {
    year: "2020",
    title:
      "Case of Internal Jugular Vein Thrombosis and Fever: Lemierre's Syndrome or Trousseau's Syndrome?",
    journal: "Tzu Chi Medical Journal 32(1), 91–95",
    authors: [
      "MY Wu",
      "YT Hou",
      "JY Ke",
      "GT Yiang",
    ],
    doi: "10.4103/tcmj.tcmj_34_19",
    coFirst: true,
  },
  {
    year: "2020",
    title:
      "Two-Thumb or Two-Finger Technique in Infant Cardiopulmonary Resuscitation by a Single Rescuer? A Meta-Analysis with GOSH Analysis",
    journal: "International Journal of Environmental Research and Public Health 17(14), 5214",
    authors: [
      "CY Chang",
      "YT Hou",
      "YJ Chien",
      "YL Chen",
      "PC Lin",
      "CS Chen",
      "MY Wu",
    ],
    doi: "10.3390/ijerph17145214",
    coFirst: true,
  },
  {
    year: "2019",
    title:
      "Syncope as Initial Presentation in an Undifferentiated Type Acute Myeloid Leukemia Patient with Acute Intracranial Hemorrhage",
    journal: "Brain Sciences 9(8), 207",
    authors: [
      "MY Wu",
      "CH Lin",
      "YT Hou",
      "PC Lin",
      "GT Yiang",
      "YC Tien",
      "HC Yeh",
    ],
    doi: "10.3390/brainsci9080207",
  },
  {
    year: "2019",
    title:
      "Severe Type of Minocycline-Induced Hyperpigmentation Mimicking Peripheral Arterial Occlusive Disease in a Bullous Pemphigoid Patient",
    journal: "Antibiotics 8(3), 93",
    authors: [
      "MY Wu",
      "YT Hou",
      "GT Yiang",
      "AP Tsai",
      "CH Lin",
    ],
    doi: "10.3390/antibiotics8030093",
  },
  {
    year: "2018",
    title:
      "Type A Aortic Dissection Presenting with Neurological Symptoms Mimicking Stroke and Intracranial Hemorrhage",
    journal: "Reports 1(1), 6",
    authors: [
      "MY Wu",
      "YW Tsai",
      "LC Lee",
      "YC Chien",
      "YL Chen",
      "YT Hou",
      "GT Yiang",
    ],
    doi: "10.3390/reports1010006",
  },
  {
    year: "2018",
    title:
      "Molecular Regulation of Bone Metastasis Pathogenesis",
    journal: "Cellular Physiology and Biochemistry 46(4), 1423–1438",
    authors: [
      "MY Wu",
      "CJ Li",
      "GT Yiang",
      "YL Cheng",
      "AP Tsai",
      "YT Hou",
      "YC Ho",
      "MF Hou",
      "PY Chu",
    ],
    doi: "10.1159/000489184",
  },
  {
    year: "2018",
    title:
      "Ischemic Bowel Disease Due to Superior Mesenteric Artery Occlusion: A Case Report",
    journal: "Reports 1(1), 10",
    authors: [
      "MY Wu",
      "LC Lee",
      "YL Chen",
      "YC Chien",
      "BY Ni",
      "YT Hou",
      "GT Yiang",
    ],
    doi: "10.3390/reports1010010",
  },
  {
    year: "2018",
    title:
      "Klebsiella pneumoniae-Induced Multiple Infections in a Diabetes Mellitus Patient: Pneumonia, Liver Abscess, Endogenous Endophthalmitis, Urinary Tract Infection",
    journal: "Reports 1(1), 7",
    authors: [
      "MY Wu",
      "YT Hou",
      "GT Yiang",
    ],
    doi: "10.3390/reports1010007",
  },
  {
    year: "2018",
    title:
      "Acute Retroperitoneal Hemorrhage Induced by Giant Adrenal Myelolipoma Mimicking Renal Colic Pain: A Case Report",
    journal: "Reports 1(1), 4",
    authors: [
      "MY Wu",
      "YT Hou",
      "GT Yiang",
    ],
    doi: "10.3390/reports1010004",
  },
];

const researchProjects = [
  {
    year: "2026",
    title: "見微知著：利用深度學習預測腦出血患者未來之窗（IRB: 13-IRB085）",
    detail: "慈濟醫療財團法人院內研究計畫・TCRD-TPE-115-20・第 2/2 年",
  },
  {
    year: "2025",
    title: "見微知著：利用深度學習預測腦出血患者未來之窗（IRB: 13-IRB085）",
    detail: "慈濟醫療財團法人院內研究計畫・TCRD-TPE-114-20・第 1/2 年",
  },
  {
    year: "2024",
    title: "利用人工智慧辨認全口造影中的牙齒病症（IRB: 12-XD-092）",
    detail: "慈濟醫療財團法人院內研究計畫・TCRD-TPE-113-27",
  },
  {
    year: "2023",
    title: "以深度學習為基礎之 X 光異常偵測研究－急診醫囑系統臨床應用（IRB: 11-XD-098）",
    detail: "慈濟醫療財團法人院內研究計畫・TCRD-TPE-112-43",
  },
  {
    year: "2022",
    title:
      "以機器學習為基礎之臨床決策系統應用於醫院資訊系統之研究－單醫學中心十年資料庫大數據分析（IRB: 10-XD-092）",
    detail: "慈濟醫療財團法人院內研究計畫・TCRD-TPE-111-46",
  },
  {
    year: "2021",
    title: "外傷族群的臨床預後預測與處置分析（IRB: 09-XD-104）",
    detail: "慈濟醫療財團法人院內研究計畫・TCRD-TPE-110-48",
  },
  {
    year: "2020",
    title: "利用基因演算法優化監督式機器學習模型預測急診創傷病人預後（IRB: 08-XD-072）",
    detail: "慈濟醫療財團法人院內研究計畫・TCRD-TPE-109-13",
  },
];

const otherWorks = [
  {
    year: "2020",
    title: "冰凍傷口的處置與預防",
    authors: ["吳孟諭", "侯岳岑", "楊久滕"],
    detail:
      "台灣急診醫學通訊・第三卷第四期・Taiwan Emergency Medicine Bulletin 3(4): e2020030405",
    href: semBulletinUrl,
  },
];

const conferencePresentations = [
  {
    year: "2021",
    title: "機器學習應用於急診創傷病人預後預測－以基因演算法及離散化優化計算",
    detail:
      "侯岳岑。原著論文口頭發表，資料科學類。台灣急診醫學會第十四屆第二次線上會員大會暨學術研討會（OP-2021-12），獲口頭發表佳作。",
    links: [
      {
        label: "官方論文發表名單 PDF",
        href: "https://tsem.blob.core.windows.net/newscontainer/%E7%B7%9A%E4%B8%8A%E7%99%BC%E8%A1%A8-2021%E5%B9%B4%E6%8A%95%E7%A8%BF%E6%8E%A5%E5%8F%97%E5%90%8D%E5%96%AE%28%E5%85%AC%E5%91%8A%E7%B7%A8%E8%99%9F%290913.pdf",
      },
      {
        label: "官方口頭發表時間明細 PDF",
        href: "https://tsem.blob.core.windows.net/newscontainer/%E7%B7%9A%E4%B8%8A%E7%99%BC%E8%A1%A8-2021%E5%B9%B4%E5%8E%9F%E8%91%97%E8%AB%96%E6%96%87%E5%8F%A3%E9%A0%AD%E7%99%BC%E8%A1%A8%E6%98%8E%E7%B4%B0%28%E5%90%AB%E7%99%BC%E8%A1%A8%E6%99%82%E9%96%93%290913.pdf",
      },
      {
        label: "官方獲獎名單 PDF",
        href: "https://tsem.blob.core.windows.net/newscontainer/2021%E5%B9%B4%E6%9C%83%E7%8D%B2%E7%8D%8E%E5%90%8D%E5%96%AE%E5%85%AC%E5%91%8A.pdf",
      },
    ],
  },
  {
    year: "2020",
    title: "Progressive whole abdominal pain since traffic accident 4 days ago",
    detail:
      "侯岳岑。圖片展示海報。台灣急診醫學會第十四屆第一次會員大會暨學術研討會（Photo-33）。",
    links: [
      {
        label: "官方投稿接受名單 PDF",
        href: "https://tsem.blob.core.windows.net/newscontainer/2020%E5%B9%B4%E6%8A%95%E7%A8%BF%E6%8E%A5%E5%8F%97%E5%90%8D%E5%96%AE%28%E5%85%AC%E5%91%8A%E7%B7%A8%E8%99%9F%290716.pdf",
      },
    ],
  },
  {
    year: "2019",
    title: "不同機器學習模型應用於急診外傷病人之預後預測：回溯性世代研究",
    detail:
      "侯岳岑。原著論文海報，臨床類。台灣急診醫學會第十三屆第二次會員大會暨學術研討會（P-2019-09）。",
    links: [
      {
        label: "官方論文發表明細 PDF",
        href: "https://tsem.blob.core.windows.net/newscontainer/2019%E5%B9%B4%E6%8A%95%E7%A8%BF%E6%8E%A5%E5%8F%97%E5%90%8D%E5%96%AE%28%E5%85%AC%E5%91%8A%E7%B7%A8%E8%99%9F%29.pdf",
      },
    ],
  },
  {
    year: "2018",
    title:
      "內頸靜脈栓塞個案報告，Lemierre’s syndrome 與 Trousseau’s syndrome 之鑑別診斷",
    detail:
      "侯岳岑。病例報告海報。台灣急診醫學會2018年冬季學術討論會（18WC-31）。",
    links: [
      {
        label: "官方病例報告海報接受名單 PDF",
        href: "https://tsem.blob.core.windows.net/newscontainer/2018%E5%B9%B4%E5%86%AC%E5%AD%A3%E5%AD%B8%E8%A1%93%E8%A8%8E%E8%AB%96%E6%9C%83-%E7%97%85%E4%BE%8B%E5%A0%B1%E5%91%8A%E6%B5%B7%E5%A0%B1%E6%8E%A5%E5%8F%97%E5%90%8D%E5%96%AE.pdf",
      },
    ],
  },
];

const publicationYears = [...new Set(publications.map((publication) => publication.year))];

const footerLinks = [
  { label: "Google Scholar", href: scholarUrl },
  { label: "ORCID", href: orcidUrl },
  { label: "LinkedIn", href: linkedinUrl },
  { label: "Threads", href: threadsUrl },
  { label: "YouTube", href: youtubeUrl },
];

const ArrowUpRight = () => (
  <span className="arrow" aria-hidden="true">
    ↗
  </span>
);

export const metadata: Metadata = {
  title: "研究成果｜侯岳岑 Yueh-Tseng Hou",
  description:
    "侯岳岑的論文發表、學術會議發表與歷年研究計畫，涵蓋急診醫學、敗血症決策支援、外傷預後、休克指數與醫學影像 AI。",
  alternates: { canonical: researchUrl },
  robots: { index: true, follow: true },
};

export default function Research() {
  return (
    <>
      <a className="skip-link" href="#research-content">
        跳至主要內容
      </a>
      <header>
        <div className="wrap header-in">
          <Link className="mark" href="/" aria-label="回到首頁">
            侯岳岑醫師<small>YUEH-TSENG HOU</small>
          </Link>
          <nav aria-label="主要導覽">
            <Link href="/">首頁</Link>
            <Link href="/#experience">經歷</Link>
            <Link href="/#project">代表專案</Link>
            <Link href="/research" aria-current="page">
              研究成果
            </Link>
            <Link href="/#contact">聯絡</Link>
          </nav>
        </div>
      </header>

      <main className="wrap research-page" id="research-content" tabIndex={-1}>
        <div className="research-hero" id="top">
          <p className="kicker">PUBLICATIONS・PRESENTATIONS・PROJECTS</p>
          <h1>研究成果</h1>
          <p className="research-intro">
            研究從急診現場的問題出發，涵蓋敗血症決策支援、外傷與急診預後、休克指數，以及醫學影像
            AI。這裡收錄依正式期刊、PubMed 與 DOI metadata 核對的論文清單、台灣急診醫學通訊著作、學術會議發表，以及可由公開來源確認的歷年研究計畫。
          </p>
          <div className="research-overview" aria-label="研究成果摘要">
            <span>{publications.length} 篇論文</span>
            <span>{conferencePresentations.length} 項會議發表</span>
            <span>{researchProjects.length} 筆年度計畫紀錄</span>
          </div>
          <nav className="research-subnav" aria-label="研究成果頁內導覽">
            <a href="#publications">論文發表</a>
            <a href="#other-works">其他著作</a>
            <a href="#conference-presentations">學術會議發表</a>
            <a href="#projects">歷年研究計畫</a>
          </nav>
          <div className="links">
            <a href={scholarUrl} target="_blank" rel="noreferrer">
              Google Scholar <ArrowUpRight />
            </a>
            <a href={orcidUrl} target="_blank" rel="noreferrer">
              ORCID <ArrowUpRight />
            </a>
          </div>
        </div>

        <section className="research-section" id="publications">
          <div className="sec-title">
            <h2>論文發表</h2>
            <i aria-hidden="true"></i>
          </div>
          <p className="research-note">
            清單最後整理於 2026/08，依出版年份排列；引用次數會持續變動，因此不固定顯示於網站。
            <span className="publication-legend">† 侯岳岑為共同第一作者</span>
          </p>
          <div className="publication-groups">
            {publicationYears.map((year) => (
              <section className="publication-year" key={year} aria-labelledby={`year-${year}`}>
                <h3 id={`year-${year}`}>{year}</h3>
                <ol className="publication-list">
                  {publications
                    .filter((publication) => publication.year === year)
                    .map((publication) => (
                      <li className="publication-item" key={publication.doi}>
                        <strong className="publication-title">{publication.title}</strong>
                        <p className="publication-authors">
                          {publication.authors.map((author, index) => (
                            <span
                              className="publication-author"
                              key={`${publication.doi}-${author}-${index}`}
                            >
                              {index > 0 ? ", " : ""}
                              {author === "YT Hou" ? (
                                <strong className="self-author">
                                  {author}
                                  {publication.coFirst ? (
                                    <sup
                                      className="co-first-citation"
                                      aria-label="共同第一作者"
                                    >
                                      †
                                    </sup>
                                  ) : null}
                                </strong>
                              ) : (
                                author
                              )}
                            </span>
                          ))}
                        </p>
                        <div className="publication-source">
                          <span className="publication-journal">{publication.journal}</span>
                          <a
                            className="publication-doi"
                            href={`https://doi.org/${publication.doi}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            DOI: {publication.doi}
                          </a>
                        </div>
                      </li>
                    ))}
                </ol>
              </section>
            ))}
          </div>
        </section>

        <section className="research-section" id="other-works">
          <div className="sec-title">
            <h2>其他著作</h2>
            <i aria-hidden="true"></i>
          </div>
          <p className="research-note">
            收錄台灣急診醫學通訊刊登之文章。
          </p>
          <div className="other-work-list">
            {otherWorks.map((work) => (
              <article className="other-work-item" key={work.title}>
                <span className="other-work-year">{work.year}</span>
                <div>
                  <h3>
                    <a href={work.href} target="_blank" rel="noreferrer">
                      {work.title}
                    </a>
                  </h3>
                  <p className="other-work-authors">
                    {work.authors.map((author, index) => (
                      <span key={author}>
                        {index > 0 ? "、" : ""}
                        {author === "侯岳岑" ? <strong>{author}</strong> : author}
                      </span>
                    ))}
                  </p>
                  <p>{work.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="research-section" id="conference-presentations">
          <div className="sec-title">
            <h2>學術會議發表</h2>
            <i aria-hidden="true"></i>
          </div>
          <p className="research-note">
            收錄台灣急診醫學會之口頭、海報與病例報告發表；各筆附官方名單。
          </p>
          <div className="conference-list">
            {conferencePresentations.map((presentation) => (
              <article
                className="conference-item"
                key={`${presentation.year}-${presentation.title}`}
              >
                <span className="conference-year">{presentation.year}</span>
                <div>
                  <h3>{presentation.title}</h3>
                  <p>{presentation.detail}</p>
                  <p className="conference-links">
                    {presentation.links.map((link, index) => (
                      <span key={link.href}>
                        {index > 0 ? "｜" : null}
                        <a href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                      </span>
                    ))}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="research-section" id="projects">
          <div className="sec-title">
            <h2>歷年研究計畫</h2>
            <i aria-hidden="true"></i>
          </div>
          <p className="research-note">
            依年度列出公開可確認的院內研究計畫；多年期計畫保留各年度紀錄。
          </p>
          <div className="plan-list">
            {researchProjects.map((project) => (
              <article className="plan-item" key={`${project.year}-${project.detail}`}>
                <span className="plan-year">{project.year}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-in">
          <span>侯岳岑 Yueh-Tseng Hou</span>
          <div className="footer-links">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-meta">
            <span>© {new Date().getFullYear()} Yueh-Tseng Hou</span>
            <VisitorCounter />
          </div>
        </div>
      </footer>
    </>
  );
}
