import Link from "next/link";
import { homeUrl, siteUrl } from "./site";

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
const biochemistryLabUrl =
  "https://researchmap.jp/y_wada73/research_experience/51236129";

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
    detailPrefix: "臨床研究人員（Research Fellow）・",
    detail: "救急科",
    note: "・到院前資料 AI 預測分析、敗血症預測分析・指導教授：近藤豊",
    href: juntendoEmergencyUrl,
  },
  {
    period: "2024/02—2024/08",
    title: "日本國立情報學研究所（NII）",
    detailPrefix: "訪問研究員・",
    detail: "計算成像與電腦視覺實驗室",
    note: (
      <>
        ・腎臟類器官 3D 影像與生長分析・與順天堂醫院
        <a href={biochemistryLabUrl} target="_blank" rel="noopener noreferrer">
          生化学第二講座
        </a>
        合作・指導教授：佐藤いまり
      </>
    ),
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
    title: "定義臨床問題",
    detail: "提出研究與產品需求，設計敗血症風險分級、臨床警示與亮燈提示的情境。",
  },
  {
    num: "02",
    title: "連結臨床與技術",
    detail:
      "判讀資料的臨床脈絡與偽陽性、偽陰性案例，把模型的運作方式與限制，翻譯成醫療端聽得懂的語言。",
  },
  {
    num: "03",
    title: "推動落地與優化",
    detail: "評估模型是否貼合臨床需求，與跨部門團隊共同推動系統與照護流程的改善。",
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
    note: "PGY專業訓練課程｜生成式AI在臨床與學習上的應用",
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
              我是急診醫師，現為台北慈濟醫院急診部專任主治醫師，也是國立臺灣大學生醫電子與資訊學研究所的博士候選人。過去幾年，我和資料科學家、工程師及院內夥伴，一起把敗血症預測模型帶進急診的日常流程。我的角色，是把臨床問題、資料脈絡與技術限制說清楚，讓跨領域團隊更容易一起工作。
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
          <p>在急診與演算法之間，做翻譯的人。</p>
        </div>

        <section id="about">
          <SectionTitle title="關於我" />
          <p className="lede">我關心的不只是模型表現，也在意它能不能被臨床真正使用。</p>
          <div className="cols">
            <p>
              臨床人員知道問題在哪裡，技術團隊知道系統能怎麼做。最難的部分，往往是把兩邊的知識變成同一個東西——一個做得出來、驗證得了，也真的貼近照護需求的工具。
            </p>
            <p>
              所以我的工作常常橫跨好幾層：問題定義、研究設計、資料的臨床脈絡判讀、模型結果的解釋，以及上線之後的流程協作。我喜歡把複雜的事講清楚，也在意一個團隊能不能長久、舒服地一起合作。
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
            這個專案從一個具體的臨床問題出發：如何辨識敗血症高風險病人，並把風險分級與警示整合進日常急診流程？
          </p>
          <p className="proj-role">
            我提出臨床需求並擔任研究計畫主持人，先以初期成果與三年臨床資料建立改善依據，再和
            ASUS AICS
            的資料與工程團隊、急診主任、護理長、資訊部及院級主管，一起推動模型、HIS
            與臨床流程的優化。模型與程式的實作由專業的工程與資料科學團隊完成；我的責任，是確保這套系統回答的是臨床真正的問題。
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

        <section id="contact">
          <SectionTitle title="聯絡" />
          <p className="contact-copy">
            如果您在醫療 AI、醫療資訊、數位健康或醫藥產業，想聊聊研究、產品或跨域合作的可能，歡迎透過{" "}
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}
            與我聯繫；也歡迎到{" "}
            <a href={threadsUrl} target="_blank" rel="noreferrer">
              Threads
            </a>{" "}
            逛逛，我也在那裡把醫學知識寫得貼近日常。
          </p>
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
          <span>© {new Date().getFullYear()} Yueh-Tseng Hou</span>
        </div>
      </footer>
    </>
  );
}
