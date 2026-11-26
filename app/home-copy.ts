import type { Locale } from "./i18n";

const en: Record<string, string> = {
  "2026/03—2026/09": "Mar 2026–Sep 2026",
  "2024/02—2024/08": "Feb 2024–Aug 2024",
  "2022/09—至今": "Sep 2022–Present",
  "2012/06—2013/06": "Jun 2012–Jun 2013",
  "2022/03—2024/12": "Mar 2022–Dec 2024",
  "2022/10—2024/12": "Oct 2022–Dec 2024",
  "2018/09—2022/08": "Sep 2018–Aug 2022",
  "2017/09—2018/08": "Sep 2017–Aug 2018",
  "2019/09—2021/01": "Sep 2019–Jan 2021",
  "2009/09—2016/06": "Sep 2009–Jun 2016",
  "跳至主要內容": "Skip to main content",
  "回到首頁": "Back to home",
  "侯岳岑醫師": "Yueh-Tseng Hou, M.D.",
  "主要導覽": "Main navigation",
  "關於我": "About",
  "經歷": "Experience",
  "代表專案": "Featured Project",
  "研究成果": "Research",
  "感謝與回饋": "Patient Feedback",
  "聯絡": "Contact",
  "急診醫學・臨床 AI": "EMERGENCY MEDICINE · CLINICAL AI",
  "急診醫師・臨床 AI 研究者": "Emergency Physician · Clinical AI Researcher",
  "我是台北慈濟醫院急診部專任主治醫師，同時於國立臺灣大學生醫電資所攻讀博士。在分秒必爭的急診現場，我致力於推動醫療與人工智慧的深度結合。過去幾年，我與跨領域團隊將敗血症預測模型成功落地至常態臨床流程中。我的核心角色，是精準轉譯臨床痛點、資料脈絡與工程邊界，讓演算法不只是高分的模型，而是醫護團隊真正敢用、好用的臨床決策工具。":
    "I am an attending emergency physician at Taipei Tzu Chi Hospital and a Ph.D. candidate in Biomedical Electronics and Bioinformatics at National Taiwan University. In the time-critical environment of emergency care, I work to bring medicine and artificial intelligence together. Over the past several years, our multidisciplinary team has integrated a sepsis prediction model into routine clinical practice. My role is to translate clinical pain points, data context, and engineering constraints with precision—so an algorithm becomes more than a high-performing model and serves as a decision-support tool clinicians can trust and use.",
  "平常也在": "I also share approachable medical knowledge on",
  "與": "and",
  "經營逛街學醫學——把醫學知識寫得貼近日常。":
    "through “Learning Medicine on the Go,” connecting medical knowledge with everyday life.",
  "侯岳岑醫師形象照": "Portrait of Yueh-Tseng Hou, M.D.",
  "現職與身分": "Current roles",
  "現職": "CURRENT",
  "學術": "ACADEMIC",
  "研究進修": "RESEARCH",
  "專任主治醫師": "Attending Physician",
  "台北慈濟醫院急診部": "Department of Emergency Medicine, Taipei Tzu Chi Hospital",
  "博士候選人": "Ph.D. Candidate",
  "國立臺灣大學生醫電子與資訊學研究所":
    "Graduate Institute of Biomedical Electronics and Bioinformatics, National Taiwan University",
  "臨床研究人員": "Clinical Research Fellow",
  "順天堂醫院救急科・2026/03—09":
    "Department of Emergency and Disaster Medicine, Juntendo University Hospital · Mar–Sep 2026",
  "在急診第一線與演算法之間，做引路與翻譯的人。":
    "Guiding and translating between frontline emergency care and algorithms.",
  "我關心的不只是模型評估指標（Metrics），而是它能否真正挽救急診病人的生命。":
    "I care about more than model metrics—I care whether a system can truly improve outcomes for emergency patients.",
  "臨床端理解病患與照護流程的痛點，技術端掌握數據與演算法的極限；而智慧醫療最關鍵的挑戰，是將兩端的認知盲區轉化為同一套":
    "Clinicians understand patients and the friction points in care delivery; technical teams understand the limits of data and algorithms. The central challenge in digital health is turning the blind spots on both sides into a solution that is ",
  "做得出、驗得了、且符合急診工作流":
    "feasible, verifiable, and compatible with emergency workflows",
  "的解決方案。": ".",
  "因此，我的研究與實作涵蓋了全流程：從臨床痛點的精準定義、研究與驗證架構設計、數據脈絡的醫學判讀，到模型可解釋性與上線後的跨部門流程整合。結合急診重症、離島緊急後送以及法學研習的跨域背景，我重視系統的安全性與合規性，也致力於在跨領域團隊中建立開放、互信且高效的共創文化。":
    "My research and implementation work therefore spans the full pathway: defining clinical problems, designing study and validation frameworks, interpreting data in its medical context, explaining model behavior, and coordinating workflows after deployment. Drawing on experience in emergency critical care, offshore medical transport, and legal studies, I value safety and compliance while fostering open, trusted, and effective collaboration across disciplines.",
  "研究經歷": "Research Experience",
  "臨床經歷": "Clinical Experience",
  "學歷與進修": "Education & Continuing Studies",
  "專業資格": "Professional Qualifications",
  "順天堂大學醫學部附屬順天堂醫院": "Juntendo University Hospital",
  "臨床研究人員・": "Clinical Research Fellow · ",
  "救急科救急災害医学講座": "Department of Emergency and Disaster Medicine",
  "・到院前預測分析、敗血症預測分析・指導教授：近藤豊":
    " · Prehospital outcome prediction and sepsis prediction · Supervisor: Yutaka Kondo",
  "日本國立情報學研究所（NII）": "National Institute of Informatics (NII), Japan",
  "訪問研究員・": "Visiting Researcher · ",
  "計算成像與電腦視覺實驗室": "Computational Imaging and Vision Laboratory",
  "・腎臟類器官 3D 影像建模與生長分析・指導教授：佐藤いまり":
    " · 3D imaging and growth analysis of kidney organoids · Supervisor: Imari Sato",
  "演算法與計算生物學實驗室（ACB Laboratory）":
    "Algorithms and Computational Biology Laboratory (ACB Laboratory)",
  "・指導教授：趙坤茂": " · Supervisor: Kun-Mao Chao",
  "慈濟大學醫學系藥毒所": "Institute of Pharmacology and Toxicology, Tzu Chi University",
  "小鼠行為研究室・專題研究：The pathophysiological roles of Mcl-1 in learning & memory function with Camk2α-cre derived mutant mouse":
    "Mouse Behavior Laboratory · Project: The pathophysiological roles of Mcl-1 in learning & memory function with Camk2α-cre derived mutant mouse",
  "・指導教授：陳松鶴": " · Supervisor: Sung-Ho Chen",
  "專任主治醫師・急診醫學、敗血症與臨床 AI":
    "Attending Physician · Emergency medicine, sepsis, and clinical AI",
  "三軍總醫院澎湖分院": "Tri-Service General Hospital Penghu Branch",
  "兼任主治醫師・離島急診支援":
    "Part-time Attending Physician · Emergency care support for an offshore island community",
  "衛生福利部空中轉診審核中心":
    "Ministry of Health and Welfare Air Medical Referral Review Center",
  "諮詢指導醫師": "Consulting Physician",
  "住院醫師": "Resident Physician",
  "台北慈濟醫院一般科": "Department of General Medicine, Taipei Tzu Chi Hospital",
  "博士班（博士候選人）": "Ph.D. Program (Ph.D. Candidate)",
  "國立臺灣大學進修推廣學院": "School of Professional Education and Continuing Studies, National Taiwan University",
  "法律學分班第三十四期結訓": "Completed the 34th Law Credit Program",
  "慈濟大學醫學系": "School of Medicine, Tzu Chi University",
  "學士": "M.D. Program",
  "通過一般科醫學師資培訓（PGY 指導醫師資格）":
    "Completed General Medical Education Faculty Training (PGY Supervisor Qualification)",
  "從事勞工健康服務醫師資格（健檢醫/廠醫執照）":
    "Physician Qualification for Occupational Health Services",
  "中華賽車會｜賽車醫官證照":
    "Chinese Taipei Motor Sports Association | Race Medical Officer Certificate",
  "衛福部急診醫學科專科甄審合格（急診專科執照）":
    "Board-Certified Emergency Medicine Specialist, Ministry of Health and Welfare",
  "考試院醫師高考考試及格（醫師執照）":
    "Passed the National Senior Examination for Physicians (Medical License)",
  "敗血症 AI 臨床決策支援系統": "AI Clinical Decision Support System for Sepsis",
  "敗血症是急診高致死率的危急重症，黃金治療時間稍縱即逝。此專案核心在於：如何提早辨識隱匿性高風險患者，並在不干擾醫護搶救節奏的前提下，將警示無縫嵌入急診日常。":
    "Sepsis is a life-threatening emergency in which every minute matters. This project asks how we can identify hidden high-risk patients earlier and embed alerts seamlessly into routine emergency care without disrupting resuscitation workflows.",
  "我作為臨床需求提出者與研究計畫主持人，整合三年急診臨床數據建立改善標竿，協同 ASUS AICS 資料團隊、院內資訊部、急診護理與主管團隊，推進模型建置與 HIS 整合。模型與演算法由專業工程團隊操刀；我的任務，是確保每一行演算法，都精準回應急診第一線的真實難題。":
    "As the clinical initiator and principal investigator, I consolidated three years of emergency care data to establish a baseline for improvement and worked with the ASUS AICS data team, hospital IT, emergency nursing staff, and department leaders to develop the model and integrate it into the HIS. The engineering team built the model and algorithms; my responsibility was to ensure that the system addressed genuine problems at the frontline of emergency care.",
  "臨床問題定義": "Clinical Problem Definition",
  "提煉真實臨床盲點，規劃風險分級、警示閾值與無痛嵌入急診 HIS 的亮燈互動機制。":
    "Identify genuine clinical blind spots and design risk tiers, alert thresholds, and an unobtrusive visual-alert workflow within the emergency HIS.",
  "跨領域轉譯與驗證": "Cross-Disciplinary Translation & Validation",
  "判讀偽陽性與偽陰性案例的臨床成因，將模型黑盒限制翻譯為醫療人員能信任與理解的語言。":
    "Interpret the clinical causes of false positives and false negatives, translating black-box limitations into language clinicians can understand and trust.",
  "系統落地與閉環優化": "Deployment & Closed-Loop Improvement",
  "實際導入急診日常運作，追蹤臨床使用成效與工作流反饋，實現醫學研究、技術演進與照護品質的三贏。":
    "Deploy the system in routine emergency care, monitor clinical outcomes and workflow feedback, and continually align research, technical development, and quality of care.",
  "專案摘要": "Project highlights",
  "已導入院內 HIS，進入日常臨床使用": "Integrated into the hospital HIS and used in routine clinical care",
  "成果以第一作者發表於《Shock》期刊": "Results published in Shock with first authorship",
  "2022、2025 NHQA 標章獎": "NHQA Quality Label Awards in 2022 and 2025",
  "研究與分享": "Research & Knowledge Sharing",
  "研究主題：": "Research areas: ",
  "敗血症決策支援、外傷與急診預後、休克指數、醫學影像 AI。完整著作見":
    "sepsis decision support, trauma and emergency outcomes, shock indices, and medical imaging AI. View the complete publication record on",
  "完整論文與歷年研究計畫": "the full publications and research project archive",
  "查看完整論文與歷年研究計畫": "View All Publications & Research Projects",
  "獎項與補助": "Awards & Grants",
  "演講與教學": "Invited Talks & Teaching",
  "公共溝通": "Public Communication",
  "逛街學醫學——把醫學知識寫得貼近日常。":
    "Learning Medicine on the Go—bringing medical knowledge closer to everyday life.",
  "武田科學振興財團留學助成 Fellow": "Takeda Science Foundation Overseas Research Fellowship",
  "導入創新模型優化策略：打造新世代敗血症預測利器":
    "Implementing Innovative Model Optimization Strategies: Building a Next-Generation Sepsis Prediction Tool",
  "料症如神－智慧科技即時預測敗血症":
    "Real-Time Sepsis Prediction with Intelligent Technology",
  "NHQA 標章獎": "NHQA Quality Label Award",
  "住院醫師研究論文發表競賽－口頭報告組第三名":
    "Third Place, Resident Research Paper Competition—Oral Presentation",
  "急診醫學年會－口頭報告組佳作":
    "Honorable Mention, Annual Meeting of Emergency Medicine—Oral Presentation",
  "住院醫師研究論文發表競賽－海報演講組優勝":
    "Excellence Award, Resident Research Paper Competition—Poster Presentation",
  "臺北市立聯合醫院忠孝院區": "Taipei City Hospital, Zhongxiao Branch",
  "受邀演講｜從零開始：醫療人員應該具備的 AI 常識":
    "Invited Talk | AI Essentials for Healthcare Professionals: Starting from Zero",
  "台北慈濟醫院": "Taipei Tzu Chi Hospital",
  "PGY 專業訓練課程｜生成式 AI 在臨床與學習上的應用":
    "PGY Training | Applications of Generative AI in Clinical Practice and Learning",
  "兩岸企業家峰會年會": "Cross-Strait CEO Summit Annual Meeting",
  "受邀代表台北慈濟擔任講者｜敗血症智慧預測與人工智慧在急診的應用":
    "Invited Speaker Representing Taipei Tzu Chi Hospital | Intelligent Sepsis Prediction and AI Applications in Emergency Medicine",
  "急診聯合學術研討會": "Joint Emergency Medicine Symposium",
  "受邀演講｜The role of Brosym® in the treatment of Pneumonia":
    "Invited Talk | The role of Brosym® in the treatment of Pneumonia",
  "來自病人與家屬的文字，提醒我在忙碌的急診日常中，持續珍惜每一次信任與託付。":
    "Words from patients and families remind me to value every act of trust, even amid the pace of emergency care. The original feedback is presented in Chinese.",
  "醫療專業，也有人情的溫度": "Clinical Expertise with a Human Touch",
  "兩位認真的付出，讓我們深深感受到醫療不只有專業，更有人情的溫度。":
    "Your dedication showed us that healthcare is not only professional, but also deeply humane.",
  "家屬回饋": "Family feedback",
  "凌晨急診的細心照護": "Attentive Care in the Early-Morning ED",
  "感謝侯醫師的治療，以及該時段男性護理師的協助，十分感謝您們。":
    "Thank you, Dr. Hou, for your treatment and to the male nurse on duty for his assistance. We are deeply grateful.",
  "病人回饋": "Patient feedback",
  "急診現場的熱誠與耐心": "Dedication and Patience in Emergency Care",
  "侯醫師能維持看病的熱誠與耐心真的很不容易。":
    "It is truly remarkable that Dr. Hou continues to care for patients with such dedication and patience.",
  "文字版本": "Text version (Chinese)",
  "中文原文翻譯": "Translated from the original Chinese",
  "蔣○○家屬回饋的文字截圖，感謝侯岳岑醫師與護理師的照護，落款民國 115 年 10 月 10 日。":
    "Screenshot of feedback in Chinese from a family member, 蔣○○, thanking Dr. Yueh-Tseng Hou and a nurse for their care; dated October 10, 2026.",
  "李○○病人回饋的文字截圖，感謝侯岳岑醫師與該時段男性護理師在凌晨急診的照護，落款民國 113 年 11 月 20 日。":
    "Screenshot of feedback in Chinese from a patient, 李○○, thanking Dr. Yueh-Tseng Hou and the male nurse on duty for their care during an overnight emergency visit; dated November 20, 2024.",
  "林○○家屬回饋的文字截圖，感謝侯岳岑醫師與護理人員耐心處理母親傷口，落款民國 113 年 8 月 29 日。":
    "Screenshot of feedback in Chinese from a family member, 林○○, thanking Dr. Yueh-Tseng Hou and the nursing staff for patiently caring for the writer’s mother’s wound; dated August 29, 2024.",
  "閱讀原始回饋": "View original feedback",
  "開啟原尺寸": "open full size",
  "點圖查看原尺寸": "Open image at full size",
  "聯絡區介紹": "Contact introduction",
  "無論您來自醫療科技產業、學術研究單位、醫療機構或創投團隊，若您正在尋找能深度對接臨床與技術的合作夥伴，非常歡迎來信交流：":
    "Whether you work in health technology, academic research, healthcare delivery, or venture investment, I welcome conversations with teams seeking a partner who can connect clinical practice and technology in depth.",
  "臨床 AI 與數位醫療產品：": "Clinical AI & Digital Health Products: ",
  "需求定義、落地可行性評估、SaMD 臨床驗證設計":
    "needs definition, implementation feasibility, and SaMD clinical validation design",
  "學術研究與跨國合作：": "Academic & International Collaboration: ",
  "敗血症預測、急診重症預後、多模態醫學資料分析":
    "sepsis prediction, emergency critical-care outcomes, and multimodal medical data analysis",
  "專題演講與專業授課：": "Invited Talks & Professional Education: ",
  "臨床人員 AI 素養培訓、智慧醫療落地實務分享":
    "AI literacy for clinicians and practical lessons from digital health implementation",
  "📬 商務與學術合作：歡迎透過": "📬 For professional and academic collaboration, connect with me on",
  "或來信": "or email",
  "洽詢。": ".",
  "☕ 醫學科普與生活交流：也歡迎造訪我的":
    "☕ For medical education and everyday conversation, visit my",
  "，與我一起「逛街學醫學」。": ", and join me in “Learning Medicine on the Go.”",
};

const ja: Record<string, string> = {
  "2026/03—2026/09": "2026年3月—2026年9月",
  "2024/02—2024/08": "2024年2月—2024年8月",
  "2022/09—至今": "2022年9月—現在",
  "2012/06—2013/06": "2012年6月—2013年6月",
  "2022/03—2024/12": "2022年3月—2024年12月",
  "2022/10—2024/12": "2022年10月—2024年12月",
  "2018/09—2022/08": "2018年9月—2022年8月",
  "2017/09—2018/08": "2017年9月—2018年8月",
  "2019/09—2021/01": "2019年9月—2021年1月",
  "2009/09—2016/06": "2009年9月—2016年6月",
  "跳至主要內容": "本文へ移動",
  "回到首頁": "ホームへ戻る",
  "侯岳岑醫師": "侯岳岑 医師",
  "主要導覽": "メインナビゲーション",
  "關於我": "自己紹介",
  "經歷": "経歴",
  "代表專案": "代表プロジェクト",
  "研究成果": "研究業績",
  "感謝與回饋": "患者さんの声",
  "聯絡": "お問い合わせ",
  "急診醫學・臨床 AI": "救急医学・臨床AI",
  "急診醫師・臨床 AI 研究者": "救急医・臨床AI研究者",
  "我是台北慈濟醫院急診部專任主治醫師，同時於國立臺灣大學生醫電資所攻讀博士。在分秒必爭的急診現場，我致力於推動醫療與人工智慧的深度結合。過去幾年，我與跨領域團隊將敗血症預測模型成功落地至常態臨床流程中。我的核心角色，是精準轉譯臨床痛點、資料脈絡與工程邊界，讓演算法不只是高分的模型，而是醫護團隊真正敢用、好用的臨床決策工具。":
    "台北慈済病院救急部の専任主治医として勤務しながら、国立台湾大学の生物医学電子・情報学研究所で博士課程に在籍しています。一刻を争う救急医療の現場で、医療と人工知能を深く結びつけることに取り組んでいます。近年は多職種チームとともに、敗血症予測モデルを日常診療へ実装しました。私の役割は、臨床上の課題、データの背景、工学上の制約を的確に翻訳し、アルゴリズムを単なる高精度モデルではなく、医療者が信頼して使える臨床意思決定支援ツールにすることです。",
  "平常也在": "普段は",
  "與": "と",
  "經營逛街學醫學——把醫學知識寫得貼近日常。":
    "で「街歩きで学ぶ医学」を発信し、医学知識を日常に近い言葉で届けています。",
  "侯岳岑醫師形象照": "侯岳岑医師のポートレート",
  "現職與身分": "現在の役職",
  "現職": "現職",
  "學術": "学術",
  "研究進修": "研究研修",
  "專任主治醫師": "専任主治医",
  "台北慈濟醫院急診部": "台北慈済病院 救急部",
  "博士候選人": "博士候補",
  "國立臺灣大學生醫電子與資訊學研究所": "国立台湾大学 生物医学電子・情報学研究所",
  "臨床研究人員": "臨床研究員",
  "順天堂醫院救急科・2026/03—09": "順天堂医院 救急科・2026年3月—9月",
  "在急診第一線與演算法之間，做引路與翻譯的人。":
    "救急医療の最前線とアルゴリズムの間をつなぎ、導く翻訳者。",
  "我關心的不只是模型評估指標（Metrics），而是它能否真正挽救急診病人的生命。":
    "私が重視するのはモデルの評価指標だけではなく、それが救急患者の転帰を本当に改善できるかどうかです。",
  "臨床端理解病患與照護流程的痛點，技術端掌握數據與演算法的極限；而智慧醫療最關鍵的挑戰，是將兩端的認知盲區轉化為同一套":
    "臨床側は患者と診療プロセスの課題を理解し、技術側はデータとアルゴリズムの限界を把握しています。スマートヘルスケアの最も重要な課題は、双方の認識の隔たりを、",
  "做得出、驗得了、且符合急診工作流": "実装でき、検証でき、救急診療のワークフローに適合する",
  "的解決方案。": "解決策へ変えることです。",
  "因此，我的研究與實作涵蓋了全流程：從臨床痛點的精準定義、研究與驗證架構設計、數據脈絡的醫學判讀，到模型可解釋性與上線後的跨部門流程整合。結合急診重症、離島緊急後送以及法學研習的跨域背景，我重視系統的安全性與合規性，也致力於在跨領域團隊中建立開放、互信且高效的共創文化。":
    "そのため、私の研究と実装は、臨床課題の定義、研究・検証設計、データ背景の医学的解釈、モデルの説明可能性、導入後の部門横断的な業務統合までを一貫して扱います。救急重症診療、離島からの緊急搬送、法学研修という分野横断的な経験を生かし、安全性とコンプライアンスを重視するとともに、開かれた信頼関係に基づく効率的な共創を目指しています。",
  "研究經歷": "研究経歴",
  "臨床經歷": "臨床経歴",
  "學歷與進修": "学歴・研修",
  "專業資格": "専門資格",
  "順天堂大學醫學部附屬順天堂醫院": "順天堂大学医学部附属順天堂医院",
  "臨床研究人員・": "臨床研究員・",
  "救急科救急災害医学講座": "救急科・救急災害医学講座",
  "・到院前預測分析、敗血症預測分析・指導教授：近藤豊":
    "・病院前予測分析、敗血症予測分析・指導教授：近藤 豊",
  "日本國立情報學研究所（NII）": "国立情報学研究所（NII）",
  "訪問研究員・": "訪問研究員・",
  "計算成像與電腦視覺實驗室": "計算イメージング・コンピュータビジョン研究室",
  "・腎臟類器官 3D 影像建模與生長分析・指導教授：佐藤いまり":
    "・腎オルガノイドの3D画像モデリングと成長解析・指導教授：佐藤 いまり",
  "演算法與計算生物學實驗室（ACB Laboratory）":
    "アルゴリズム・計算生物学研究室（ACB Laboratory）",
  "・指導教授：趙坤茂": "・指導教授：趙坤茂",
  "慈濟大學醫學系藥毒所": "慈済大学 医学部 薬理学・毒性学研究所",
  "小鼠行為研究室・專題研究：The pathophysiological roles of Mcl-1 in learning & memory function with Camk2α-cre derived mutant mouse":
    "マウス行動研究室・研究課題：The pathophysiological roles of Mcl-1 in learning & memory function with Camk2α-cre derived mutant mouse",
  "・指導教授：陳松鶴": "・指導教授：陳松鶴",
  "專任主治醫師・急診醫學、敗血症與臨床 AI": "専任主治医・救急医学、敗血症、臨床AI",
  "三軍總醫院澎湖分院": "三軍総医院 澎湖分院",
  "兼任主治醫師・離島急診支援": "非常勤主治医・離島救急医療支援",
  "衛生福利部空中轉診審核中心": "衛生福利部 空中転院審査センター",
  "諮詢指導醫師": "相談指導医",
  "住院醫師": "研修医",
  "台北慈濟醫院一般科": "台北慈済病院 一般医学科",
  "博士班（博士候選人）": "博士課程（博士候補）",
  "國立臺灣大學進修推廣學院": "国立台湾大学 進修推広学院",
  "法律學分班第三十四期結訓": "法律単位プログラム第34期 修了",
  "慈濟大學醫學系": "慈済大学 医学部",
  "學士": "医学士",
  "通過一般科醫學師資培訓（PGY 指導醫師資格）":
    "一般医学指導者研修修了（PGY指導医資格）",
  "從事勞工健康服務醫師資格（健檢醫/廠醫執照）": "労働者健康サービス医師資格（産業医）",
  "中華賽車會｜賽車醫官證照": "中華賽車会｜レース医務官認定",
  "衛福部急診醫學科專科甄審合格（急診專科執照）":
    "衛生福利部 救急医学専門医認定",
  "考試院醫師高考考試及格（醫師執照）": "考試院 医師国家試験合格（医師免許）",
  "敗血症 AI 臨床決策支援系統": "敗血症AI臨床意思決定支援システム",
  "敗血症是急診高致死率的危急重症，黃金治療時間稍縱即逝。此專案核心在於：如何提早辨識隱匿性高風險患者，並在不干擾醫護搶救節奏的前提下，將警示無縫嵌入急診日常。":
    "敗血症は死亡率の高い救急疾患で、治療開始までの時間が転帰を左右します。本プロジェクトでは、潜在的な高リスク患者を早期に捉え、救命処置の流れを妨げずに警告を日常の救急診療へ組み込む方法を追求しました。",
  "我作為臨床需求提出者與研究計畫主持人，整合三年急診臨床數據建立改善標竿，協同 ASUS AICS 資料團隊、院內資訊部、急診護理與主管團隊，推進模型建置與 HIS 整合。模型與演算法由專業工程團隊操刀；我的任務，是確保每一行演算法，都精準回應急診第一線的真實難題。":
    "臨床ニーズの提案者兼研究責任者として、3年間の救急診療データから改善の基準を構築し、ASUS AICSのデータチーム、院内情報部門、救急看護師、管理職と連携してモデル開発とHIS統合を進めました。モデルとアルゴリズムの実装は専門の技術チームが担い、私はシステムが救急現場の実際の課題に正確に応えることを担保しました。",
  "臨床問題定義": "臨床課題の定義",
  "提煉真實臨床盲點，規劃風險分級、警示閾值與無痛嵌入急診 HIS 的亮燈互動機制。":
    "臨床上の見落とされやすい課題を抽出し、リスク分類、警告閾値、救急HISへ自然に組み込む表示設計を行いました。",
  "跨領域轉譯與驗證": "分野横断の翻訳と検証",
  "判讀偽陽性與偽陰性案例的臨床成因，將模型黑盒限制翻譯為醫療人員能信任與理解的語言。":
    "偽陽性・偽陰性の臨床的背景を読み解き、ブラックボックスの限界を医療者が理解し信頼できる言葉へ翻訳しました。",
  "系統落地與閉環優化": "臨床実装と継続改善",
  "實際導入急診日常運作，追蹤臨床使用成效與工作流反饋，實現醫學研究、技術演進與照護品質的三贏。":
    "救急診療へ実装し、臨床効果とワークフローのフィードバックを追跡して、研究・技術・医療品質を継続的に改善しました。",
  "專案摘要": "プロジェクト概要",
  "已導入院內 HIS，進入日常臨床使用": "院内HISへ統合し、日常診療で運用中",
  "成果以第一作者發表於《Shock》期刊": "成果を第一著者として『Shock』誌に発表",
  "2022、2025 NHQA 標章獎": "2022年・2025年 NHQA標章賞",
  "研究與分享": "研究・発信",
  "研究主題：": "研究テーマ：",
  "敗血症決策支援、外傷與急診預後、休克指數、醫學影像 AI。完整著作見":
    "敗血症意思決定支援、外傷・救急予後、ショックインデックス、医用画像AI。全業績は",
  "完整論文與歷年研究計畫": "全論文・研究プロジェクト一覧",
  "查看完整論文與歷年研究計畫": "論文・研究プロジェクト一覧を見る",
  "獎項與補助": "受賞・助成",
  "演講與教學": "講演・教育",
  "公共溝通": "一般向け発信",
  "逛街學醫學——把醫學知識寫得貼近日常。":
    "「街歩きで学ぶ医学」——医学知識を日常に近い言葉で届けます。",
  "武田科學振興財團留學助成 Fellow": "武田科学振興財団 海外留学助成フェロー",
  "導入創新模型優化策略：打造新世代敗血症預測利器":
    "革新的なモデル最適化戦略の導入：次世代敗血症予測ツールの構築",
  "料症如神－智慧科技即時預測敗血症": "スマート技術による敗血症リアルタイム予測",
  "NHQA 標章獎": "NHQA標章賞",
  "住院醫師研究論文發表競賽－口頭報告組第三名": "研修医研究発表コンテスト・口演部門 第3位",
  "急診醫學年會－口頭報告組佳作": "救急医学年次大会・口演部門 佳作",
  "住院醫師研究論文發表競賽－海報演講組優勝": "研修医研究発表コンテスト・ポスター口演部門 優勝",
  "臺北市立聯合醫院忠孝院區": "台北市立聯合病院 忠孝院区",
  "受邀演講｜從零開始：醫療人員應該具備的 AI 常識":
    "招待講演｜ゼロから学ぶ、医療者に必要なAI基礎知識",
  "台北慈濟醫院": "台北慈済病院",
  "PGY 專業訓練課程｜生成式 AI 在臨床與學習上的應用":
    "PGY専門研修｜臨床と学習における生成AIの活用",
  "兩岸企業家峰會年會": "両岸企業家サミット年次総会",
  "受邀代表台北慈濟擔任講者｜敗血症智慧預測與人工智慧在急診的應用":
    "台北慈済病院代表・招待講演｜敗血症スマート予測と救急医療におけるAI活用",
  "急診聯合學術研討會": "救急医学合同学術セミナー",
  "受邀演講｜The role of Brosym® in the treatment of Pneumonia":
    "招待講演｜The role of Brosym® in the treatment of Pneumonia",
  "來自病人與家屬的文字，提醒我在忙碌的急診日常中，持續珍惜每一次信任與託付。":
    "患者さんとご家族の言葉は、慌ただしい救急診療の中でも、一つひとつの信頼を大切にすることを思い出させてくれます。原文は中国語で掲載しています。",
  "醫療專業，也有人情的溫度": "専門性と人の温かさ",
  "兩位認真的付出，讓我們深深感受到醫療不只有專業，更有人情的溫度。":
    "お二人の献身から、医療には専門性だけでなく、人の温かさがあることを深く感じました。",
  "家屬回饋": "ご家族の声",
  "凌晨急診的細心照護": "深夜の救急外来での丁寧な診療",
  "感謝侯醫師的治療，以及該時段男性護理師的協助，十分感謝您們。":
    "侯医師の治療と、その時間帯を担当した男性看護師のご対応に心より感謝します。",
  "病人回饋": "患者さんの声",
  "急診現場的熱誠與耐心": "救急現場での熱意と忍耐",
  "侯醫師能維持看病的熱誠與耐心真的很不容易。":
    "侯医師が熱意と忍耐をもって診療を続けていることは、本当にすばらしいと思います。",
  "文字版本": "原文（中国語）",
  "中文原文翻譯": "中国語原文からの翻訳",
  "蔣○○家屬回饋的文字截圖，感謝侯岳岑醫師與護理師的照護，落款民國 115 年 10 月 10 日。":
    "中国語で書かれた蔣○○さんのご家族からの感謝メッセージ。侯岳岑医師と看護師の診療に対する謝意が記され、日付は2026年10月10日。",
  "李○○病人回饋的文字截圖，感謝侯岳岑醫師與該時段男性護理師在凌晨急診的照護，落款民國 113 年 11 月 20 日。":
    "中国語で書かれた李○○さんからの感謝メッセージ。深夜の救急診療を担当した侯岳岑医師と男性看護師への謝意が記され、日付は2024年11月20日。",
  "林○○家屬回饋的文字截圖，感謝侯岳岑醫師與護理人員耐心處理母親傷口，落款民國 113 年 8 月 29 日。":
    "中国語で書かれた林○○さんのご家族からの感謝メッセージ。母親の傷を丁寧に処置した侯岳岑医師と看護スタッフへの謝意が記され、日付は2024年8月29日。",
  "閱讀原始回饋": "原文を見る",
  "開啟原尺寸": "原寸で開く",
  "點圖查看原尺寸": "クリックして原寸表示",
  "聯絡區介紹": "お問い合わせ",
  "無論您來自醫療科技產業、學術研究單位、醫療機構或創投團隊，若您正在尋找能深度對接臨床與技術的合作夥伴，非常歡迎來信交流：":
    "医療テクノロジー、学術研究、医療機関、ベンチャー投資など、臨床と技術を深くつなぐパートナーをお探しの方は、ぜひご連絡ください。",
  "臨床 AI 與數位醫療產品：": "臨床AI・デジタルヘルス製品：",
  "需求定義、落地可行性評估、SaMD 臨床驗證設計": "ニーズ定義、実装可能性評価、SaMD臨床検証設計",
  "學術研究與跨國合作：": "学術研究・国際共同研究：",
  "敗血症預測、急診重症預後、多模態醫學資料分析": "敗血症予測、救急重症予後、マルチモーダル医療データ解析",
  "專題演講與專業授課：": "講演・専門教育：",
  "臨床人員 AI 素養培訓、智慧醫療落地實務分享": "医療者向けAIリテラシー研修、スマートヘルスケア実装の実務共有",
  "📬 商務與學術合作：歡迎透過": "📬 ビジネス・学術連携は",
  "或來信": "またはメール",
  "洽詢。": "でお問い合わせください。",
  "☕ 醫學科普與生活交流：也歡迎造訪我的": "☕ 医学情報と日常の発信は",
  "，與我一起「逛街學醫學」。": "で「街歩きで学ぶ医学」をご覧ください。",
};

export function homeText(locale: Locale, text: string) {
  if (locale === "zh") {
    return text;
  }

  return (locale === "en" ? en : ja)[text] ?? text;
}

export function localizeHomeData<T>(locale: Locale, value: T): T {
  if (locale === "zh") {
    return value;
  }

  if (typeof value === "string") {
    return homeText(locale, value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => localizeHomeData(locale, item)) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localizeHomeData(locale, item)]),
    ) as T;
  }

  return value;
}
