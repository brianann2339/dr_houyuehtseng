import Link from "next/link";
import { homeUrl, siteUrl } from "./site";
import VisitorCounter from "./visitor-counter";

const ArrowUpRight = () => (
  <span className="arrow" aria-hidden="true">
    ↗
  </span>
);

const scholarUrl =
  "https://scholar.google.com/citations?user=F2RvQloAAAAJ&hl=zh-TW";
const orcidUrl = "https://orcid.org/0009-0003-5125-0771";
const linkedinUrl =
  "https://www.linkedin.com/in/%E5%B2%B3%E5%B2%91-%E4%BE%AF-676792114/";
const threadsUrl = "https://www.threads.com/@hou_care_you";
const youtubeUrl = "https://www.youtube.com/@hou_care_you";
const niiLabUrl = "https://research.nii.ac.jp/pbv/";
const acbUrl = "https://www.csie.ntu.edu.tw/~kmchao/students/index.html";
const juntendoEmergencyUrl =
  "https://hosp.juntendo.ac.jp/clinic/department/kyukyu/staff.html";

const profilePageStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: homeUrl,
  mainEntity: {
    "@type": "Person",
    "@id": `${homeUrl}#person`,
    name: "侯岳岑",
    alternateName: "Yueh-Tseng Hou",
    honorificSuffix: "M.D.",
    description: "急診醫師・臨床 AI 研究者",
    url: homeUrl,
    image: `${siteUrl}/portrait.jpg`,
    jobTitle: "專任主治醫師",
    worksFor: {
      "@type": "Hospital",
      name: "台北慈濟醫院",
    },
    sameAs: [scholarUrl, orcidUrl, linkedinUrl, threadsUrl, youtubeUrl],
  },
};

const footerLinks = [
  { label: "Google Scholar", href: scholarUrl },
  { label: "ORCID", href: orcidUrl },
  { label: "LinkedIn", href: linkedinUrl },
  { label: "Threads", href: threadsUrl },
  { label: "YouTube", href: youtubeUrl },
];

const positions = [
  { label: "現職", role: "專任主治醫師", org: "台北慈濟醫院急診部" },
  {
    label: "學術",
    role: "博士候選人",
    org: "國立臺灣大學生醫電子與資訊學研究所",
  },
  {
    label: "研究進修",
    role: "臨床研究人員",
    org: "順天堂醫院救急科・2026/03—09",
  },
];

const researchExperience = [
  {
    period: "2026/03—2026/09",
    title: "順天堂大學醫學部附屬順天堂醫院",
    detailPrefix: "臨床研究人員・",
    detail: "救急科救急災害医学講座",
    note: "・到院前預測分析、敗血症預測分析・指導教授：近藤豊",
    href: juntendoEmergencyUrl,
  },
  {
    period: "2024/02—2024/08",
    title: "日本國立情報學研究所（NII）",
    detailPrefix: "訪問研究員・",
    detail: "計算成像與電腦視覺實驗室",
    note: "・腎臟類器官 3D 影像建模與生長分析・指導教授：佐藤いまり",
    href: niiLabUrl,
  },
  {
    period: "2022/09—至今",
    title: "國立臺灣大學生醫電子與資訊學研究所",
    detailPrefix: "",
    detail: "演算法與計算生物學實驗室（ACB Laboratory）",
    note: "・指導教授：趙坤茂",
    href: acbUrl,
  },
  {
    period: "2012/06—2013/06",
    title: "慈濟大學醫學系藥毒所",
    detailPrefix: "",
    detail:
      "小鼠行為研究室・專題研究：The pathophysiological roles of Mcl-1 in learning & memory function with Camk2α-cre derived mutant mouse",
    note: "・指導教授：陳松鶴",
    href: null,
  },
];

const clinicalExperience = [
  {
    period: "2022/09—至今",
    title: "台北慈濟醫院急診部",
    detail: "專任主治醫師・急診醫學、敗血症與臨床 AI",
  },
  {
    period: "2022/03—2024/12",
    title: "三軍總醫院澎湖分院",
    detail: "兼任主治醫師・離島急診支援",
  },
  {
    period: "2022/10—2024/12",
    title: "衛生福利部空中轉診審核中心",
    detail: "諮詢指導醫師",
  },
  {
    period: "2018/09—2022/08",
    title: "台北慈濟醫院急診部",
    detail: "住院醫師",
  },
  {
    period: "2017/09—2018/08",
    title: "台北慈濟醫院一般科",
    detail: "住院醫師",
  },
];

const education = [
  {
    period: "2022/09—至今",
    title: "國立臺灣大學生醫電子與資訊學研究所",
    detail: "博士班（博士候選人）",
  },
  {
    period: "2019/09—2021/01",
    title: "國立臺灣大學進修推廣學院",
    detail: "法律學分班第三十四期結訓",
  },
  {
    period: "2009/09—2016/06",
    title: "慈濟大學醫學系",
    detail: "學士",
  },
];

const qualifications = [
  { period: "", title: "中華賽車會｜賽車醫官" },
  {
    period: "2025",
    title: "通過一般科醫學師資培訓（PGY 指導醫師資格）",
  },
  {
    period: "2025",
    title: "從事勞工健康服務醫師資格（健檢醫/廠醫執照）",
  },
  {
    period: "2022",
    title: "衛福部急診醫學科專科甄審合格（急診專科執照）",
  },
  { period: "2017", title: "考試院醫師高考考試及格（醫師執照）" },
];

const projectFacets = [
  {
    num: "01",
    title: "臨床問題定義",
    detail:
      "提煉真實臨床盲點，規劃風險分級、警示閾值與無痛嵌入急診 HIS 的亮燈互動機制。",
  },
  {
    num: "02",
    title: "跨領域轉譯與驗證",
    detail:
      "判讀偽陽性與偽陰性案例的臨床成因，將模型黑盒限制翻譯為醫療人員能信任與理解的語言。",
  },
  {
    num: "03",
    title: "系統落地與閉環優化",
    detail:
      "實際導入急診日常運作，追蹤臨床使用成效與工作流反饋，實現醫學研究、技術演進與照護品質的三贏。",
  },
];

const projectFacts = [
  "已導入院內 HIS，進入日常臨床使用",
  "成果以第一作者發表於《Shock》期刊",
  "2022、2025 NHQA 標章獎",
];

const awards = [
  { year: "2026", title: "武田科學振興財團留學助成 Fellow", note: "" },
  {
    year: "2025",
    title: "導入創新模型優化策略：打造新世代敗血症預測利器",
    note: "NHQA 標章獎",
  },
  {
    year: "2022",
    title: "料症如神－智慧科技即時預測敗血症",
    note: "NHQA 標章獎",
  },
  {
    year: "2022",
    title:
      "Continuously Prediction Machine Learning Model Application in Emergency Sepsis Prediction",
    note: "住院醫師研究論文發表競賽－口頭報告組第三名",
  },
  {
    year: "2022",
    title:
      "Machine Learning Application in Emergency Trauma Patients Prognosis Prediction: Optimization with a Genetic Algorithm and Discretization",
    note: "急診醫學年會－口頭報告組佳作",
  },
  {
    year: "2020",
    title:
      "Machine Learning Application in Emergency Trauma Patients Prognosis Prediction: Optimization with a Genetic Algorithm and Discretization",
    note: "住院醫師研究論文發表競賽－海報演講組優勝",
  },
];

const talks = [
  {
    year: "2025/08/06",
    title: "臺北市立聯合醫院忠孝院區",
    note: "受邀演講｜從零開始：醫療人員應該具備的 AI 常識",
  },
  {
    year: "2025/04/24",
    title: "台北慈濟醫院",
    note: "PGY 專業訓練課程｜生成式 AI 在臨床與學習上的應用",
  },
  {
    year: "2024/12/09",
    title: "兩岸企業家峰會年會",
    note: "受邀代表台北慈濟擔任講者｜敗血症智慧預測與人工智慧在急診的應用",
  },
  {
    year: "2023/10/21",
    title: "急診聯合學術研討會",
    note: "受邀演講｜The role of Brosym® in the treatment of Pneumonia",
  },
];

const feedbackEntries = [
  {
    title: "醫療專業，也有人情的溫度",
    quote:
      "兩位認真的付出，讓我們深深感受到醫療不只有專業，更有人情的溫度。",
    author: "蔣○○",
    role: "家屬回饋",
    date: "2026-10-10",
    sources: [
      {
        label: "感謝信照片",
        src: "/feedback/2026-10-10-letter.png",
        alt: "蔣○○家屬致台北慈濟急診團隊的感謝信照片，分享細心評估與溫柔照護帶來的溫暖。",
        width: 1477,
        height: 1108,
      },
      {
        label: "文字版本",
        src: "/feedback/2026-10-10-text.png",
        alt: "蔣○○家屬回饋的文字截圖，感謝侯岳岑醫師與護理師的照護，落款民國 115 年 10 月 10 日。",
        width: 1468,
        height: 1222,
      },
    ],
  },
  {
    title: "急診現場的熱誠與耐心",
    quote: "侯醫師能維持看病的熱誠與耐心真的很不容易。",
    author: "林○○",
    role: "家屬回饋",
    date: "2024-08-29",
    sources: [
      {
        label: "文字版本",
        src: "/feedback/2024-08-29-text.png",
        alt: "林○○家屬回饋的文字截圖，感謝侯岳岑醫師與護理人員耐心處理母親傷口，落款民國 113 年 8 月 29 日。",
        width: 1494,
        height: 648,
      },
    ],
  },
];

const SectionTitle = ({ title }: { title: string }) => (
  <div className="sec-title">
    <h2>{title}</h2>
    <i aria-hidden="true"></i>
  </div>
);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageStructuredData),
        }}
      />
      <a className="skip-link" href="#content">
        跳至主要內容
      </a>
      <header>
        <div className="wrap header-in">
          <a className="mark" href="#top" aria-label="回到首頁">
            侯岳岑醫師<small>YUEH-TSENG HOU</small>
          </a>
          <nav aria-label="主要導覽">
            <a href="#about">關於我</a>
            <a href="#experience">經歷</a>
            <a href="#project">代表專案</a>
            <Link href="/research">研究成果</Link>
            <a href="#feedback">感謝與回饋</a>
            <a href="#contact">聯絡</a>
          </nav>
        </div>
      </header>

      <main className="wrap" id="content" tabIndex={-1}>
        <div className="hero" id="top">
          <div>
            <p className="kicker">急診醫學・臨床 AI</p>
            <h1>侯岳岑</h1>
            <p className="en-name">Yueh-Tseng Hou, M.D.</p>
            <p className="idline">急診醫師・臨床 AI 研究者</p>
            <p className="intro">
              我是台北慈濟醫院急診部專任主治醫師，同時於國立臺灣大學生醫電資所攻讀博士。在分秒必爭的急診現場，我致力於推動醫療與人工智慧的深度結合。過去幾年，我與跨領域團隊將敗血症預測模型成功落地至常態臨床流程中。我的核心角色，是精準轉譯臨床痛點、資料脈絡與工程邊界，讓演算法不只是高分的模型，而是醫護團隊真正敢用、好用的臨床決策工具。
            </p>
            <div className="links">
              <a href={scholarUrl} target="_blank" rel="noreferrer">
                Google Scholar <ArrowUpRight />
              </a>
              <a href={orcidUrl} target="_blank" rel="noreferrer">
                ORCID <ArrowUpRight />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight />
              </a>
              <a href={youtubeUrl} target="_blank" rel="noreferrer">
                YouTube <ArrowUpRight />
              </a>
            </div>
            <p className="threads-note">
              平常也在{" "}
              <a href={threadsUrl} target="_blank" rel="noreferrer">
                Threads
              </a>{" "}
              與{" "}
              <a href={youtubeUrl} target="_blank" rel="noreferrer">
                YouTube
              </a>{" "}
              經營逛街學醫學——把醫學知識寫得貼近日常。
            </p>
          </div>
          <div className="photo-frame">
            <div className="photo">
              {/* eslint-disable-next-line @next/next/no-img-element -- 部署目標無 next/image 最佳化服務，靜態單圖用原生 img */}
              <img src="/portrait.jpg" alt="侯岳岑醫師形象照" />
            </div>
          </div>
        </div>

        <div className="facts" aria-label="現職與身分">
          {positions.map((item) => (
            <div key={item.role}>
              <em>{item.label}</em>
              <strong>{item.role}</strong>
              <span>{item.org}</span>
            </div>
          ))}
        </div>

        <div className="pull">
          <p>
            <span>在急診第一線與演算法之間，做引路與翻譯的人。</span>
            <small>Bridging the gap between clinical reality and machine learning.</small>
          </p>
        </div>

        <section id="about">
          <SectionTitle title="關於我" />
          <p className="lede">
            我關心的不只是模型評估指標（Metrics），而是它能否真正挽救急診病人的生命。
          </p>
          <div className="cols">
            <p>
              臨床端理解病患與照護流程的痛點，技術端掌握數據與演算法的極限；而智慧醫療最關鍵的挑戰，是將兩端的認知盲區轉化為同一套「<strong>做得出、驗得了、且符合急診工作流</strong>」的解決方案。
            </p>
            <p>
              因此，我的研究與實作涵蓋了全流程：從臨床痛點的精準定義、研究與驗證架構設計、數據脈絡的醫學判讀，到模型可解釋性與上線後的跨部門流程整合。結合急診重症、離島緊急後送以及法學研習的跨域背景，我重視系統的安全性與合規性，也致力於在跨領域團隊中建立開放、互信且高效的共創文化。
            </p>
          </div>
        </section>

        <section id="experience">
          <SectionTitle title="經歷" />
          <h3 className="sub-h">研究經歷</h3>
          <div className="rows">
            {researchExperience.map((item) => (
              <div className="row" key={`${item.period}-${item.title}`}>
                <span className="yr">{item.period}</span>
                <div>
                  <strong>{item.title}</strong>
                  <span>
                    {item.detailPrefix}
                    {item.href ? (
                      <a
                        className="detail-link"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      item.detail
                    )}{item.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <h3 className="sub-h">臨床經歷</h3>
          <div className="rows">
            {clinicalExperience.map((item) => (
              <div className="row" key={`${item.period}-${item.title}-${item.detail}`}>
                <span className="yr">{item.period}</span>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
          <h3 className="sub-h">學歷與進修</h3>
          <div className="rows">
            {education.map((item) => (
              <div className="row" key={item.title}>
                <span className="yr">{item.period}</span>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
          <h3 className="sub-h">專業資格</h3>
          <div className="rows">
            {qualifications.map((item) => (
              <div className="row" key={item.title}>
                <span className="yr">{item.period}</span>
                <div>
                  <strong>{item.title}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="project">
          <SectionTitle title="代表專案" />
          <p className="proj-name">敗血症 AI 臨床決策支援系統</p>
          <p className="proj-with">台北慈濟醫院 × ASUS AICS</p>
          <p className="proj-lede">
            敗血症是急診高致死率的危急重症，黃金治療時間稍縱即逝。此專案核心在於：如何提早辨識隱匿性高風險患者，並在不干擾醫護搶救節奏的前提下，將警示無縫嵌入急診日常。
          </p>
          <p className="proj-role">
            我作為臨床需求提出者與研究計畫主持人，整合三年急診臨床數據建立改善標竿，協同 ASUS AICS 資料團隊、院內資訊部、急診護理與主管團隊，推進模型建置與 HIS 整合。模型與演算法由專業工程團隊操刀；我的任務，是確保每一行演算法，都精準回應急診第一線的真實難題。
          </p>
          <div className="facets">
            {projectFacets.map((facet) => (
              <div key={facet.num}>
                <em>{facet.num}</em>
                <strong>{facet.title}</strong>
                <p>{facet.detail}</p>
              </div>
            ))}
          </div>
          <div className="proj-facts" aria-label="專案摘要">
            {projectFacts.map((fact) => (
              <div key={fact}>{fact}</div>
            ))}
          </div>
        </section>

        <section id="research">
          <SectionTitle title="研究與分享" />
          <p className="topics">
            研究主題：敗血症決策支援、外傷與急診預後、休克指數、醫學影像
            AI。完整著作見{" "}
            <a href={scholarUrl} target="_blank" rel="noreferrer">
              Google Scholar
            </a>{" "}
            與{" "}
            <a href={orcidUrl} target="_blank" rel="noreferrer">
              ORCID
            </a>
            。
          </p>
          <Link className="research-page-link" href="/research">
            查看完整論文與歷年研究計畫 <ArrowUpRight />
          </Link>
          <h3 className="sub-h">獎項與補助</h3>
          <div className="rows">
            {awards.map((item) => (
              <div className="row" key={`${item.year}-${item.title}-${item.note}`}>
                <span className="yr">{item.year}</span>
                <div>
                  <strong>{item.title}</strong>
                  {item.note ? <span>{item.note}</span> : null}
                </div>
              </div>
            ))}
          </div>
          <h3 className="sub-h">演講與教學</h3>
          <div className="rows">
            {talks.map((item) => (
              <div className="row" key={item.title}>
                <span className="yr">{item.year}</span>
                <div>
                  <strong>{item.title}</strong>
                  {item.note ? <span>{item.note}</span> : null}
                </div>
              </div>
            ))}
          </div>
          <h3 className="sub-h">公共溝通</h3>
          <p className="topics">
            <a href={threadsUrl} target="_blank" rel="noreferrer">
              Threads
            </a>{" "}
            與{" "}
            <a href={youtubeUrl} target="_blank" rel="noreferrer">
              YouTube
            </a>{"｜逛街學醫學——把醫學知識寫得貼近日常。"}
          </p>
        </section>

        <section id="feedback">
          <SectionTitle title="感謝與回饋" />
          <p className="feedback-intro">
            來自病人與家屬的文字，提醒我在忙碌的急診日常中，持續珍惜每一次信任與託付。
          </p>
          <div className="feedback-grid">
            {feedbackEntries.map((entry) => (
              <article className="feedback-card" key={`${entry.date}-${entry.author}`}>
                <h3>{entry.title}</h3>
                <blockquote>{entry.quote}</blockquote>
                <div className="feedback-meta">
                  <span>{entry.author} · {entry.role}</span>
                  <time dateTime={entry.date}>{entry.date.replaceAll("-", ".")}</time>
                </div>
                <details className="feedback-details">
                  <summary>閱讀原始回饋</summary>
                  <div className="feedback-sources">
                    {entry.sources.map((source) => (
                      <figure key={source.src}>
                        <a
                          href={source.src}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${source.label}（開啟原尺寸）`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element -- 靜態匯出保留完整原圖，無 next/image 最佳化服務 */}
                          <img
                            src={source.src}
                            alt={source.alt}
                            width={source.width}
                            height={source.height}
                            loading="lazy"
                          />
                        </a>
                        <figcaption>{source.label} · 點圖查看原尺寸</figcaption>
                      </figure>
                    ))}
                  </div>
                </details>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <SectionTitle title="聯絡" />
          <p className="contact-copy">
            無論您來自醫療科技產業、學術研究單位、醫療機構或創投團隊，若您正在尋找能深度對接臨床與技術的合作夥伴，非常歡迎來信交流：
          </p>
          <ul className="contact-topics">
            <li>
              <strong>臨床 AI 與數位醫療產品：</strong>
              需求定義、落地可行性評估、SaMD 臨床驗證設計
            </li>
            <li>
              <strong>學術研究與跨國合作：</strong>
              敗血症預測、急診重症預後、多模態醫學資料分析
            </li>
            <li>
              <strong>專題演講與專業授課：</strong>
              臨床人員 AI 素養培訓、智慧醫療落地實務分享
            </li>
          </ul>
          <div className="contact-actions">
            <p>
              📬 商務與學術合作：歡迎透過{" "}
              <a href={linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn
              </a>{" "}
              或來信 <a href="mailto:xde03012@tzuchi.com.tw">xde03012@tzuchi.com.tw</a> 洽詢。
            </p>
            <p>
              ☕ 醫學科普與生活交流：也歡迎造訪我的{" "}
              <a href={threadsUrl} target="_blank" rel="noreferrer">
                Threads
              </a>{" "}
              與{" "}
              <a href={youtubeUrl} target="_blank" rel="noreferrer">
                YouTube
              </a>，與我一起「逛街學醫學」。
            </p>
          </div>
          <address className="contact-details">
            <span>Taipei Tzu Chi Hospital</span>
            <span>Department of Emergency Medicine</span>
            <span>
              Office:{" "}
              <a href="tel:+886266289779;ext=47288">+886-2-6628-9779 #47288</a>
            </span>
            <span>
              Email: <a href="mailto:xde03012@tzuchi.com.tw">xde03012@tzuchi.com.tw</a>
            </span>
            <span>No. 289, Jianguo Rd., Xindian Dist., New Taipei City 23142, Taiwan (R.O.C)</span>
          </address>
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
