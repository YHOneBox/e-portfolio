if (new URLSearchParams(location.search).get("preview") === "1") {
    document.documentElement.classList.add("is-preview-embed");
}

const I18N = {
    en: {
        skip: "Skip to main content",
        logoAria: "Yi-Ho Chang, back to top",
        navAria: "Primary",
        navNow: "Now",
        navHome: "Home",
        navAbout: "About",
        navProjects: "Projects",
        navEducation: "Education",
        navExperience: "Experience",
        navCertificates: "Certificates",
        navContact: "Contact",
        langGroup: "Language",
        themeToLight: "Switch to light mode",
        themeToDark: "Switch to dark mode",
        openMenu: "Open navigation menu",
        closeMenu: "Close navigation menu",
        heroEyebrow: "AI Engineer",
        heroStatus: "ML · LLM · Computer Vision",
        heroName: "Yi-Ho Chang",
        tagline: "I develop and deploy machine learning systems for operational environments, including real-time computer vision, large language models, and containerized applications on edge devices.",
        valueProp: "MEng, Computer Science (AI minor), Oregon State University. AI Engineer at E-Ranyx, responsible for production AI architecture and for taking models from research through deployment.",
        ctaProjects: "View Projects",
        ctaResume: "Download Resume",
        ctaContact: "Contact Me",
        aboutEyebrow: "About",
        aboutTitle: "Professional profile",
        aboutP1: "I am an AI engineer and a Master of Engineering student in Computer Science at Oregon State University. My work focuses on machine learning, computer vision, large language models, and systems that must operate outside laboratory conditions, including remote and edge deployments.",
        aboutP2: "As AI Engineer at E-Ranyx, I am responsible for how AI is implemented in the company’s platforms and for guiding work from research through production. My primary expertise is at the intersection of models and product systems: real-time vision (CNN, YOLO), generative and LLM pipelines including RAG, and the surrounding containerized software.",
        aboutP3: "I emphasize architectures that can be documented, interfaces that expose rather than conceal complexity, and results that can be measured—including 93% weed-detection accuracy, a 90% improvement in LLM response accuracy, and an 80% reduction in client processing time. I seek roles in which I own features from initial investigation through production release.",
        portraitAlt: "Portrait of Yi-Ho Chang",
        skillsAria: "Core technical competencies",
        skillsTitle: "Core competencies",
        skillsLang: "Languages",
        skillsFw: "AI / ML",
        skillsTools: "Deployment",
        skillsDomains: "Core domains",
        projectsEyebrow: "Projects",
        projectsTitle: "Selected projects",
        projectsLede: "The following case studies cover multimodal interaction, computer vision, and production software platforms. Each entry documents context, method, and results.",
        readCase: "Read case study",
        backProjects: "Back to projects",
        closeMedia: "Close preview",
        addMedia: "Add an image or video",
        startLabel: "Start",
        endLabel: "End",
        durationLabel: "Duration",
        featuresTitle: "Key features",
        techUsed: "Tech stack",
        approachTitle: "Method",
        p1Kicker: "Jun 2026 – Present",
        p1Title: "Interactive AI Avatar",
        p1Summary: "An end-to-end multimodal avatar system. Speech, text, and visual input are processed through a low-latency interface and API gateway, then ASR, NLP, and a multimodal LLM, and returned as synchronized speech and animation.",
        p2Kicker: "May 2026 – Present",
        p2Title: "LINE Official Account Manager",
        p2Summary: "A self-hosted LINE Official Account management system that unifies inbound messaging, human handover, automated replies, knowledge retrieval, and draft generation. Messages are transmitted only after explicit confirmation.",
        p3Kicker: "Jan 2026 – Mar 2026",
        p3Title: "Precision Agriculture Weed Detection",
        p3Summary: "An object-detection pipeline for identifying weeds in high-resolution drone imagery of perennial ryegrass and tall fescue, using YOLO26 and a controlled study of tiling and input resolution.",
        ctaResumePdf: "Download Resume (PDF)",
        eduEyebrow: "Education",
        eduTitle: "Education",
        eduLede: "Academic training relevant to the design and deployment of AI systems.",
        edu1Meta: "MEng · Computer Science, AI minor",
        edu1Dates: "Sep 2025 – Dec 2026 · Advanced AI, Computer Vision, Machine Learning",
        edu2Name: "National Taichung University of Education",
        edu2Meta: "BS · Dual major in Digital Content Technology & Computer Science",
        edu2Dates: "Sep 2021 – Jun 2025",
        expEyebrow: "Experience",
        expTitle: "Professional experience",
        expLede: "Professional appointments in applied AI, including industry positions, internships, and instructional work. A formatted résumé is available as a PDF.",
        exp1Title: "AI Engineer · E-Ranyx",
        exp1Meta: "Sep 2025 – Present",
        exp1Body: "Responsible for technical direction of AI-driven software, including large language models and computer vision in client platforms. Delivered an enterprise integration that reduced processing time by 80% and cost by 50%.",
        exp2Title: "AI Engineer · DHT Solution",
        exp2Meta: "Part-time · Sep 2024 – Jul 2025",
        exp2Body: "Designed and deployed machine learning systems. Evaluated LLM applications on a dataset of more than 10,000 examples and improved response accuracy by 90%.",
        exp3Title: "AI Intern · Claireye Intelligence",
        exp3Meta: "Jul 2024 – Aug 2024 · CNN, YOLO",
        exp3Body: "Contributed to computer vision and LLM product development, including image recognition, collaboration with research and development on web and application interfaces, and frontend stability informed by user feedback.",
        exp4Title: "AI Edge Course · ITRI",
        exp4Meta: "Jul 2024 – Aug 2024 · NVIDIA Jetson",
        exp4Body: "Designed and delivered edge-AI instruction for industry engineers, covering Linux, DeepStream SDK, Docker, and Azure IoT Edge on NVIDIA Jetson.",
        certEyebrow: "Certificates",
        certTitle: "Course credentials",
        certLede: "Completed coursework in generative artificial intelligence and machine learning.",
        cert1Meta: "DeepLearning.AI · AWS · Feb 2025",
        cert2Meta: "IBM · Jan 2025",
        openCert: "Open credential",
        contactEyebrow: "Contact",
        contactTitle: "Contact",
        contactLede: "Please write with inquiries regarding positions, collaboration, or technical discussion. Correspondence is reviewed directly.",
        emailAria: "Email Yi-Ho Chang",
        linkedinAria: "Yi-Ho Chang on LinkedIn",
        githubAria: "YHOneBox on GitHub",
        labelEmail: "Email",
        labelEmailField: "Email",
        labelName: "Name",
        labelMessage: "Message",
        sendMessage: "Send message",
        formNote: "Your message is sent directly to my inbox. Nothing is stored on this site.",
        formNeedFields: "Please fill in your name, a valid email, and a message.",
        formSending: "Sending your message…",
        formOpened: "Message sent. I will reply by email.",
        formActivate: "Check Gmail (and spam) for a FormSubmit email, click Activate Form, then send again.",
        formFailed: "Could not send right now. Email me at onebox663269@gmail.com, or try again.",
        footer: "Built for the web, hosted on GitHub Pages.",
        ctxProblem: "Context & problem",
        role: "My role & contributions",
        impact: "Impact & results",
        prevSlide: "Previous image",
        nextSlide: "Next image",
        slideN: "Show image"
    },
    zh: {
        skip: "跳到主要內容",
        logoAria: "張翊禾，回到頂端",
        navAria: "主要導覽",
        navNow: "目前",
        navHome: "首頁",
        navAbout: "關於",
        navProjects: "專案",
        navEducation: "學歷",
        navExperience: "經歷",
        navCertificates: "證照",
        navContact: "聯絡",
        langGroup: "語言",
        themeToLight: "切換為淺色模式",
        themeToDark: "切換為深色模式",
        openMenu: "開啟選單",
        closeMenu: "關閉選單",
        heroEyebrow: "AI 工程師",
        heroStatus: "機器學習 · LLM · 電腦視覺",
        heroName: "張翊禾",
        tagline: "我開發並部署可於實際環境運作的機器學習系統，涵蓋即時電腦視覺、大型語言模型，以及邊緣裝置上的容器化應用。",
        valueProp: "Oregon State University 電腦科學碩士（AI 輔系）。現任 E-Ranyx AI 工程師，負責生產環境之 AI 架構，並主導模型自研究至部署之全程。",
        ctaProjects: "查看專案",
        ctaResume: "下載履歷",
        ctaContact: "與我聯絡",
        aboutEyebrow: "關於",
        aboutTitle: "專業簡介",
        aboutP1: "我是 AI 工程師，亦為 Oregon State University 電腦科學碩士生。研究與實務重點為機器學習、電腦視覺、大型語言模型，以及必須在實驗室之外運作的系統，包含遠端與邊緣部署。",
        aboutP2: "於 E-Ranyx 擔任 AI 工程師，負責公司平台之 AI 實作，並主導自研究至上線之流程。專長位於模型與產品系統之交會：即時視覺（CNN、YOLO）、生成式與 LLM 管線（含 RAG），以及外圍之容器化軟體。",
        aboutP3: "我重視可被文件化的架構、不隱匿複雜度的介面，以及可量化的成果——雜草偵測準確率 93%、LLM 回覆準確率提升 90%、客戶處理時間減少 80%。尋求能自前期評估至上線全程負責功能的職位。",
        portraitAlt: "張翊禾的肖像",
        skillsAria: "核心技術能力",
        skillsTitle: "核心能力",
        skillsLang: "語言",
        skillsFw: "AI / ML",
        skillsTools: "部署",
        skillsDomains: "核心領域",
        projectsEyebrow: "專案",
        projectsTitle: "精選專案",
        projectsLede: "下列案例涵蓋多模態互動、電腦視覺與生產軟體平台。各篇說明問題脈絡、方法與結果。",
        readCase: "閱讀案例",
        backProjects: "回到專案",
        closeMedia: "關閉預覽",
        addMedia: "請添加影片或圖片",
        startLabel: "開始時間",
        endLabel: "結束時間",
        durationLabel: "總時長",
        featuresTitle: "主要功能",
        techUsed: "使用技術",
        approachTitle: "方法",
        p1Kicker: "2026/6 – 至今",
        p1Title: "Interactive AI Avatar",
        p1Summary: "端到端多模態 avatar 系統。語音、文字與視覺輸入經低延遲介面與 API gateway，進入 ASR、NLP 與多模態 LLM，再以同步語音與動畫輸出。",
        p2Kicker: "2026/5 – 至今",
        p2Title: "LINE Official Account Manager",
        p2Summary: "可自架之 LINE Official Account 管理系統，整合進線、人工接管、自動回覆、知識檢索與草稿產生。訊息僅在明確確認後送出。",
        p3Kicker: "2026/1 – 2026/3",
        p3Title: "Precision Agriculture Weed Detection",
        p3Summary: "以 YOLO26 於 Perennial Rye 與 Tall Fescue 之高解析無人機影像進行雜草物件偵測，並以控制實驗比較拼貼與輸入解析度。",
        ctaResumePdf: "下載履歷（PDF）",
        eduEyebrow: "學歷",
        eduTitle: "教育背景",
        eduLede: "與 AI 系統設計及部署相關之學歷與課程。",
        edu1Meta: "碩士 · 電腦科學，AI 輔系",
        edu1Dates: "2025/9 – 2026/12 · Advanced AI、Computer Vision、Machine Learning",
        edu2Name: "國立臺中教育大學",
        edu2Meta: "學士 · 數位內容科技與資訊工程雙主修",
        edu2Dates: "2021/9 – 2025/6",
        expEyebrow: "經歷",
        expTitle: "工作經歷",
        expLede: "應用 AI 相關職務，包含產業職位、實習與教學。格式化履歷請下載 PDF。",
        exp1Title: "AI 工程師 · E-Ranyx",
        exp1Meta: "2025/9 – 至今",
        exp1Body: "負責 AI 軟體技術方向，將大型語言模型與電腦視覺導入客戶平台。完成企業整合，處理時間減少 80%、成本減少 50%。",
        exp2Title: "AI 工程師 · DHT Solution",
        exp2Meta: "兼職 · 2024/9 – 2025/7",
        exp2Body: "設計並部署機器學習系統。以超過 10,000 筆資料評估 LLM 應用，回覆準確率提升 90%。",
        exp3Title: "AI 實習生 · Claireye Intelligence",
        exp3Meta: "2024/7 – 2024/8 · CNN、YOLO",
        exp3Body: "參與電腦視覺與 LLM 產品開發，包含影像辨識、與研發單位協作網頁與應用介面，並依使用者回饋提升前端穩定度。",
        exp4Title: "AI Edge Course · ITRI",
        exp4Meta: "2024/7 – 2024/8 · NVIDIA Jetson",
        exp4Body: "為產業工程師規劃並講授邊緣 AI 課程，內容包含 Linux、DeepStream SDK、Docker 與 Azure IoT Edge 於 NVIDIA Jetson 平台。",
        certEyebrow: "證照",
        certTitle: "證書",
        certLede: "生成式人工智慧與機器學習相關課程證書。",
        cert1Meta: "DeepLearning.AI · AWS · 2025/2",
        cert2Meta: "IBM · 2025/1",
        openCert: "開啟證書",
        contactEyebrow: "聯絡",
        contactTitle: "聯絡",
        contactLede: "如有職缺、合作或技術討論，歡迎來信。來件將直接審閱。",
        emailAria: "寄信給張翊禾",
        linkedinAria: "張翊禾的 LinkedIn",
        githubAria: "YHOneBox 的 GitHub",
        labelEmail: "電子郵件",
        labelEmailField: "電子郵件",
        labelName: "姓名",
        labelMessage: "訊息",
        sendMessage: "送出訊息",
        formNote: "訊息會直接寄到我的信箱。本站不會儲存任何資料。",
        formNeedFields: "請填寫姓名、有效電子郵件與訊息。",
        formSending: "正在送出訊息…",
        formOpened: "訊息已送出，我會用電子郵件回覆。",
        formActivate: "請到 Gmail（含垃圾郵件）點開 FormSubmit 的啟用信，再送一次。",
        formFailed: "目前無法送出。請改寄 onebox663269@gmail.com，或稍後再試。",
        footer: "為網頁打造，托管於 GitHub Pages。",
        ctxProblem: "脈絡與問題",
        role: "角色與貢獻",
        impact: "影響與成果",
        prevSlide: "上一張",
        nextSlide: "下一張",
        slideN: "顯示圖片"
    }
};

const PROJECTS = {
    avatar: {
        kickerKey: "p1Kicker",
        titleKey: "p1Title",
        cover: "files/projects/avatar/Realtime_ai_avatar.jpg",
        media: [
            { type: "image", src: "files/projects/avatar/Realtime_ai_avatar.jpg", alt: { en: "Interactive AI avatar UI", zh: "Interactive AI Avatar 介面" }, caption: { en: "Live camera, avatar, voice meter, and conversation in one UI", zh: "鏡頭、avatar、語音偵測與對話同屏" } },
            { type: "image", src: "files/projects/avatar/visual.png", alt: { en: "Architecture and interaction flow diagram", zh: "架構與互動流程圖" }, caption: { en: "Speech, text, and vision through API, multimodal LLM, TTS, and avatar rendering", zh: "語音、文字與視覺經 API、multimodal LLM、TTS 到 avatar rendering" } }
        ],
        context: {
            en: "This project implements a real-time interactive avatar that accepts speech, text, and visual input within a single interface and returns a low-latency spoken, animated response, rather than a delayed text-only chatbot.",
            zh: "本專案實作即時 Interactive AI Avatar：於單一介面接收語音、文字與視覺輸入，並以低延遲之語音與動畫回覆，而非延遲的純文字 chatbot。"
        },
        role: {
            en: "I designed the architecture and interaction flow: capture on kiosk, desktop, or mobile devices; a secure API gateway; a multimodal backend; and text-to-speech with avatar animation. Emphasis was placed on scalable API and user-interface deployment in order to preserve real-time performance under load.",
            zh: "我負責架構與互動流程：於 kiosk、桌機或行動裝置擷取輸入；經 secure API gateway 進入多模態後端；再進行 TTS 與 avatar animation。重點在於可擴充之 API 與介面部署，以在負載下維持即時效能。"
        },
        approach: {
            en: "Requests are captured and encoded in the user-interface layer, then routed through a secure API gateway. The backend performs automatic speech recognition, natural-language processing, multimodal LLM fusion of text, audio, and video, and conversation-context management. Formatted replies are delivered to text-to-speech and avatar rendering so that lip synchronization and gesture remain aligned with audio.",
            zh: "請求於使用者介面層擷取並編碼，再經 secure API gateway 路由。後端執行 ASR、NLP、文字／音訊／影像之 multimodal LLM fusion，以及 conversation-context management。格式化回覆送至 TTS 與 avatar rendering，使 lip-sync 與 gesture 與音訊對齊。"
        },
        features: {
            en: [
                "Speech, text, and live visual input",
                "Low-latency capture on kiosk, desktop, and mobile",
                "Secure API gateway with scalable API and interface deployment",
                "Multimodal engine: ASR, NLP, LLM fusion, and conversation context",
                "Text-to-speech with real-time lip synchronization and gesture"
            ],
            zh: [
                "語音、文字與即時視覺輸入",
                "kiosk、桌機與行動裝置上之低延遲擷取",
                "Secure API Gateway，支援可擴充之 API 與介面部署",
                "Multimodal engine：ASR、NLP、LLM fusion 與 conversation context",
                "TTS，並即時對齊 lip-sync 與 gesture"
            ]
        },
        tech: ["ASR", "NLP", "Multimodal LLM", "TTS", "Secure API Gateway", "Avatar rendering"],
        timeline: { start: { en: "Jun 2026", zh: "2026/6" }, end: { en: "Present", zh: "至今" }, duration: { en: "Ongoing", zh: "進行中" } },
        impact: {
            en: "The system closes a full interaction loop: a user may speak, type, or be observed by camera, and receives a voiced, animated reply. Low-latency delivery constrained the design of each layer.",
            zh: "系統形成完整互動迴路：使用者可說話、輸入文字，或由鏡頭擷取畫面，並獲得具語音與動畫之回覆。各層設計均受低延遲需求約束。"
        }
    },
    line: {
        kickerKey: "p2Kicker",
        titleKey: "p2Title",
        cover: "files/projects/line/line_system.jpg",
        media: [
            { type: "image", src: "files/projects/line/line_system.jpg", alt: { en: "LINE Official Account Manager chat desk", zh: "LINE Official Account Manager 聊天工作台" }, caption: { en: "Chat desk with AI knowledge, suggest, and search", zh: "聊天工作台：知識庫、AI Suggest 與 Search" } }
        ],
        context: {
            en: "LINE is the primary messaging channel for many users. This project provides a private operations console that combines inbound messages, human replies, and automated assistance, with isolated accounts, no public registration, and no outbound draft until an operator confirms transmission.",
            zh: "LINE 為多數使用者之主要通訊管道。本專案提供私有營運工作台，整合進線、人工回覆與自動化處理；帳號資料隔離、無公開註冊，且草稿須經操作者確認始得送出。"
        },
        role: {
            en: "I designed a self-hosted LINE Official Account console with isolated accounts. Each account is assigned a dedicated webhook, encrypted channel credentials, and imported language-model keys with explicit routing. Automatic reply, suggestion, and search are independent tasks, each with its own credentials, models, and fallbacks.",
            zh: "我設計可自架、帳號隔離之 LINE Official Account 工作台。各帳號具備專屬 webhook、加密頻道憑證，以及可明確指定路由之語言模型金鑰。自動回覆、Suggest 與 Search 為獨立任務，金鑰、模型與備援可分別設定。"
        },
        approach: {
            en: "Inbound LINE events are signature-verified, persisted, and broadcast to the console. In automated mode, keyword rules are evaluated first; remaining text is debounced, retrieved against contact-scoped knowledge (lexical RAG over PDF, text, Markdown, and Word documents), and returned by push message. Human mode disables the language model. Suggestion drafts a reply; search answers from the transcript. Neither function transmits to LINE until send is confirmed.",
            zh: "進線事件經簽章驗證後入庫，並推播至工作台。自動化模式下先比對關鍵字規則；其餘文字經合併等待，並以聯絡人範圍之知識庫（PDF、純文字、Markdown、Word 之 lexical RAG）產生回覆後推播。人工模式不呼叫語言模型。Suggest 功能產生草稿；Search 僅依據對話紀錄。兩者皆須確認傳送始送至 LINE。"
        },
        features: {
            en: [
                "Separated administration and operations views so that accounts remain isolated",
                "Per-conversation automated or human handling; closing the browser does not interrupt the webhook",
                "Keyword rules for predetermined replies, with rate limits and debounce",
                "Shared and per-contact knowledge documents for grounded generation",
                "Suggestion and search tools; Gemini, OpenAI, Claude, or OpenAI-compatible endpoints with failover"
            ],
            zh: [
                "管理與營運畫面分離，帳號資料互不可見",
                "各對話可採自動化或人工處理；關閉瀏覽器不中斷 webhook",
                "關鍵字規則處理既定回覆，並設頻率限制與 debounce",
                "共用與單人知識文件，供有根據之生成",
                "Suggest 與 Search 工具；支援 Gemini、OpenAI、Claude 或 OpenAI-compatible 端點，並可備援"
            ]
        },
        tech: ["LINE Messaging API", "Gemini", "OpenAI", "Claude", "RAG", "WebSocket desk", "SQLite"],
        timeline: { start: { en: "May 2026", zh: "2026/5" }, end: { en: "Present", zh: "至今" }, duration: { en: "Ongoing", zh: "進行中" } },
        impact: {
            en: "The console can receive, reply, transfer to a human operator, and run automated assistance in one place. Data remain on the host machine. API keys are imported and assigned in settings and are not silently replaced by a server environment default.",
            zh: "工作台可於同一介面收訊、回覆、改由人工處理並執行自動化。資料留於架設主機。金鑰於設定中匯入並指派，不以伺服器環境變數暗中取代。"
        }
    },
    weed: {
        kickerKey: "p3Kicker",
        titleKey: "p3Title",
        cover: "files/projects/weed/image1.png",
        media: [
            { type: "image", src: "files/projects/weed/image1.png", alt: { en: "YOLO weed boxes on a drone tile", zh: "無人機拼貼上的 YOLO 雜草框" }, caption: { en: "Detected weeds on a drone tile", zh: "無人機拼貼上的雜草偵測" } },
            { type: "image", src: "files/projects/weed/image2.png", alt: { en: "Second drone tile with weed detections", zh: "第二張拼貼的雜草偵測" }, caption: { en: "Same field, adjacent tile", zh: "同一田區的相鄰拼貼" } }
        ],
        context: {
            en: "This work was completed as the AI-535 Deep Learning final project with Tz-Jie Dai and Yu-Yu Chiang, under the instruction of Fuxin Li. The objective was to detect weeds mixed into crop rows from drone RGB imagery, rather than from laboratory photographs. The dataset comprised 171 LabelMe-annotated frames of approximately 6,000 by 5,000–6,000 pixels from perennial ryegrass and tall fescue fields.",
            zh: "本工作為 AI-535 Deep Learning 期末專案，與 Tz-Jie Dai、Yu-Yu Chiang 共同完成，指導教授為 Fuxin Li。目標為自無人機 RGB 影像中，於實際作物行列偵測雜草，而非實驗室拍攝影像。資料集為 171 張 LabelMe 標註畫面，解析度約 6,000 × 5,000–6,000 像素，取自 Perennial Rye 與 Tall Fescue 田區。"
        },
        role: {
            en: "I developed the detection pipeline: converting polygons to YOLO bounding boxes, tiling large orthophotos so that a detector could be trained, and comparing training configurations. Bounding boxes that straddled tile boundaries were a principal failure mode; each box was therefore assigned to the tile containing its center.",
            zh: "我負責偵測管線：將多邊形轉換為 YOLO 邊界框、將大型正射影像切分為可訓練之拼貼，並比較訓練設定。跨越拼貼邊界之框為主要失效模式，故各框僅歸入其中心所在之拼貼。"
        },
        approach: {
            en: "YOLO26n was trained under GPU memory constraints (the s and m variants showed no material gain), comparing tiling with crop, tiling with center anchoring, and scale-and-pad, at 640, 1,280, and 2,560 pixels (5,120 exhausted video memory). Separate training on ryegrass versus fescue, compared with a merged set, produced little difference on the training split and a modest test gain for the unified model. Performance peaked at 1,280 pixels; 2,560 pixels failed because labels became too small relative to the frame.",
            zh: "於 GPU 記憶體限制下訓練 YOLO26n（s 與 m 無明顯增益），比較 tiling with crop、tiling with center anchoring 與 scale-and-pad，以及 640、1,280、2,560 像素（5,120 顯存不足）。Perennial Rye 與 Tall Fescue 分開訓練相對於合併訓練，於訓練集差異不大，合併模型於測試集略優。1,280 像素表現最佳；2,560 像素失效，因標註相對整張影像過小。"
        },
        features: {
            en: [
                "171 drone images, two crop types, and a weed class derived from LabelMe polygons",
                "Tiling with center anchoring to avoid fragmented boxes",
                "Resolution comparison at 640, 1,280, and 2,560 pixels",
                "Merged versus split-field training to assess generalization",
                "Early stopping (patience 100, maximum 1,000 epochs)"
            ],
            zh: [
                "171 張無人機影像、Perennial Rye 與 Tall Fescue、由 LabelMe 多邊形轉換之雜草類別",
                "切塊並以中心錨定，避免 YOLO bounding box 被切碎",
                "解析度比較：640、1,280、2,560 像素",
                "合併與分田訓練以評估泛化",
                "Early stopping（patience 100，最多 1,000 個 epoch）"
            ]
        },
        tech: ["YOLO26", "Python", "LabelMe", "OpenCV", "Drone RGB"],
        timeline: { start: { en: "Jan 2026", zh: "2026/1" }, end: { en: "Mar 2026", zh: "2026/3" }, duration: { en: "3 months", zh: "3個月" } },
        impact: {
            en: "Tiling with center anchoring outperformed naive cropping by a small margin. Scale-and-pad appeared strong during training but overfit. No configuration dominated all metrics; tile size should match weed scale. The practical operating point was 1,280-pixel tiles with merged data. The strongest test loop reached 93% detection.",
            zh: "切塊中心錨定略優於直接裁切。Scale-and-pad 於訓練階段表現較佳，但有過擬合。無單一設定全面勝出；拼貼尺寸應對應雜草尺度。實務操作點為 1,280 像素拼貼加合併資料。最佳測試迴圈達 93% 偵測率。"
        }
    }
};

let lang = document.documentElement.getAttribute("data-lang") === "zh" ? "zh" : "en";
let openProjectId = null;
const carouselTimers = new Set();
const CAROUSEL_MS = 4500;

function t(key) {
    return I18N[lang][key] || I18N.en[key] || key;
}

function applyI18n() {
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    document.documentElement.setAttribute("data-lang", lang);
    document.title = lang === "zh" ? "張翊禾 — AI 工程師" : "Yi-Ho Chang — AI Engineer";

    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
        desc.setAttribute("content", lang === "zh"
            ? "張翊禾（YH）— AI 工程師作品集：機器學習、LLM、電腦視覺與邊緣部署。"
            : "Yi-Ho Chang (YH) — AI engineer: machine learning, LLMs, computer vision, and edge deployment.");
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
        if (el.id === "theme-toggle" || el.id === "menu-toggle") return;
        el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
        el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });

    document.querySelectorAll("[data-lang-set]").forEach((btn) => {
        btn.setAttribute("aria-pressed", String(btn.dataset.langSet === lang));
    });

    const theme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const themeBtn = document.getElementById("theme-toggle");
    themeBtn?.setAttribute("aria-label", theme === "light" ? t("themeToDark") : t("themeToLight"));
    themeBtn?.setAttribute("aria-pressed", String(theme === "light"));

    const navOpen = document.getElementById("site-nav")?.classList.contains("is-open");
    document.getElementById("menu-toggle")?.setAttribute("aria-label", navOpen ? t("closeMenu") : t("openMenu"));
    const currentName = document.getElementById("nav-current-name");
    const activeLabel = document.querySelector(".nav-list a[aria-current='page'] [data-i18n]");
    if (currentName && activeLabel) currentName.textContent = activeLabel.textContent;

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#f3f6f9" : "#0b0d12");

    if (openProjectId) fillProjectPage(openProjectId);
}

function setLang(next) {
    lang = next === "zh" ? "zh" : "en";
    localStorage.setItem("lang", lang);
    applyI18n();
}

document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    applyI18n();
    setupTheme();
    setupLang();
    setupNav();
    setupAnchorScroll();
    setupScrollSpy();
    setupPanelFx();
    setupProjectPage();
    setupContactForm();
    if (!document.documentElement.classList.contains("is-preview-embed")) {
        setupHoverPreviews();
    }
});

function setupPanelFx() {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = (event) => {
        if (reduced.matches) {
            root.style.setProperty("--fx-px", "0px");
            root.style.setProperty("--fx-py", "0px");
            return;
        }
        const x = (event.clientX / window.innerWidth - 0.5) * 28;
        const y = (event.clientY / window.innerHeight - 0.5) * 20;
        root.style.setProperty("--fx-px", `${x.toFixed(1)}px`);
        root.style.setProperty("--fx-py", `${y.toFixed(1)}px`);
    };
    window.addEventListener("pointermove", apply, { passive: true });
}

function setupTheme() {
    const root = document.documentElement;
    const toggle = document.getElementById("theme-toggle");
    if (!root.dataset.theme) {
        const stored = localStorage.getItem("theme");
        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
        root.dataset.theme = stored || (prefersLight ? "light" : "dark");
    }

    toggle?.addEventListener("click", () => {
        const next = root.dataset.theme === "light" ? "dark" : "light";
        root.dataset.theme = next;
        localStorage.setItem("theme", next);
        applyI18n();
    });
}

function setupLang() {
    document.querySelectorAll("[data-lang-set]").forEach((btn) => {
        btn.addEventListener("click", () => setLang(btn.dataset.langSet));
    });
}

function headerOffset() {
    const header = document.querySelector(".site-header");
    return header ? Math.round(header.getBoundingClientRect().height) : 0;
}

function scrollToSection(id, behavior) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = Math.max(0, Math.round(window.scrollY + el.getBoundingClientRect().top - headerOffset()));
    window.scrollTo({ top, left: 0, behavior });
}

function setupAnchorScroll() {
    const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sectionIds = new Set(["home", "about", "experience", "projects", "education", "certificates", "contact"]);

    const goSection = (id, behavior) => {
        showMainSections();
        scrollToSection(id, behavior ?? (reduceMotion() ? "auto" : "smooth"));
    };

    const applyHash = (behavior) => {
        const raw = decodeURIComponent((location.hash || "").replace(/^#/, ""));
        const projectId = raw.startsWith("project/") ? raw.slice(8) : "";
        if (projectId && PROJECTS[projectId]) {
            openProjectPage(projectId, behavior ?? "auto");
            return;
        }
        showMainSections();
        if (sectionIds.has(raw)) {
            scrollToSection(raw, behavior ?? (reduceMotion() ? "auto" : "smooth"));
        }
    };

    document.addEventListener("click", (event) => {
        const link = event.target.closest('a[href^="#"]');
        if (!link || link.getAttribute("href") === "#") return;
        const raw = link.getAttribute("href").slice(1);
        const projectId = raw.startsWith("project/") ? raw.slice(8) : "";
        if (projectId && PROJECTS[projectId]) {
            event.preventDefault();
            if (location.hash !== `#${raw}`) history.pushState(null, "", `#${raw}`);
            openProjectPage(projectId, reduceMotion() ? "auto" : "smooth");
            return;
        }
        if (!sectionIds.has(raw) || !document.getElementById(raw)) return;
        event.preventDefault();
        if (location.hash !== `#${raw}`) history.pushState(null, "", `#${raw}`);
        goSection(raw);
    });

    window.addEventListener("popstate", () => applyHash("auto"));
    requestAnimationFrame(() => applyHash("auto"));
}

function setupNav() {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("site-nav");
    const backdrop = document.getElementById("nav-backdrop");
    const links = nav?.querySelectorAll("a") ?? [];

    const setOpen = (open) => {
        nav?.classList.toggle("is-open", open);
        document.body.classList.toggle("nav-open", open);
        toggle?.setAttribute("aria-expanded", String(open));
        toggle?.setAttribute("aria-label", open ? t("closeMenu") : t("openMenu"));
        if (backdrop) backdrop.hidden = !open;
    };

    const close = () => setOpen(false);

    toggle?.addEventListener("click", () => {
        setOpen(!nav?.classList.contains("is-open"));
    });

    backdrop?.addEventListener("click", close);
    links.forEach((link) => link.addEventListener("click", () => close()));
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") close();
    });
    window.matchMedia("(min-width: 1024px)").addEventListener("change", (event) => {
        if (event.matches) close();
    });
}

function setupScrollSpy() {
    const ids = ["home", "about", "experience", "projects", "education", "certificates", "contact"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const list = document.querySelector(".nav-list");
    const items = [...document.querySelectorAll(".nav-list li")];
    const links = [...document.querySelectorAll(".nav-list a")];
    const currentName = document.getElementById("nav-current-name");
    let activeId = "";

    const setActive = (id) => {
        if (!id || id === activeId) return;
        activeId = id;
        const activeIndex = ids.indexOf(id);

        items.forEach((item, index) => {
            item.classList.toggle("is-past", index < activeIndex);
            item.classList.toggle("is-active", index === activeIndex);
            item.classList.toggle("is-upcoming", index > activeIndex);
        });

        links.forEach((link) => {
            const active = link.getAttribute("href") === `#${id}`;
            if (active) link.setAttribute("aria-current", "page");
            else link.removeAttribute("aria-current");
        });

        const label = document.querySelector(`.nav-list a[href="#${id}"] [data-i18n]`);
        if (currentName && label) currentName.textContent = label.textContent;

        if (list) {
            list.style.setProperty("--active-index", String(Math.max(activeIndex, 0)));
            list.style.setProperty("--item-count", String(items.length));
        }
        document.documentElement.dataset.fxSection = id;
    };

    const update = () => {
        if (document.body.classList.contains("is-project-view")) {
            setActive("projects");
            return;
        }
        const probe = window.innerHeight * 0.32;
        let current = sections[0];
        for (const section of sections) {
            if (section.getBoundingClientRect().top <= probe) current = section;
        }
        setActive(current?.id);
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    links.forEach((link) => {
        link.addEventListener("click", () => {
            const id = link.getAttribute("href")?.slice(1);
            if (id) setActive(id);
        });
    });
    update();
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function localized(value) {
    if (!value) return "";
    if (typeof value === "string") return value;
    return value[lang] || value.en || "";
}

function projectImages(data) {
    return (data.media || []).filter((item) => item.type === "image");
}

function applyProjectCovers() {
    document.querySelectorAll("[data-project-thumb]").forEach((thumb) => {
        const data = PROJECTS[thumb.dataset.projectThumb];
        const images = data ? projectImages(data) : [];
        const cover = data?.cover || images[0]?.src || "";
        thumb.querySelectorAll("img").forEach((el) => el.remove());
        thumb.classList.toggle("has-cover", Boolean(cover));
        if (!cover) return;
        const img = document.createElement("img");
        img.src = cover;
        img.alt = "";
        img.classList.add("is-active");
        thumb.append(img);
    });
}

function setupHoverPreviews() {
    const pop = document.getElementById("hover-preview");
    const frame = document.getElementById("hover-preview-frame");
    const urlLabel = document.getElementById("hover-preview-url");
    if (!pop || !frame) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let showTimer = 0;
    let hideTimer = 0;
    let currentSrc = "";

    const encodePath = (path) => path.split("/").map((part) => encodeURIComponent(part)).join("/");

    const hide = () => {
        clearTimeout(showTimer);
        pop.hidden = true;
        pop.setAttribute("aria-hidden", "true");
        pop.classList.remove("is-file");
        frame.src = "about:blank";
        currentSrc = "";
        document.querySelectorAll(".is-previewing").forEach((el) => el.classList.remove("is-previewing"));
    };

    const place = (anchor) => {
        const rect = anchor.getBoundingClientRect();
        const gap = 14;
        const width = pop.offsetWidth || 352;
        const height = pop.offsetHeight || 260;
        let left = rect.right + gap;
        let top = rect.top;
        if (left + width > window.innerWidth - 12) left = rect.left - width - gap;
        if (left < 12) left = Math.max(12, (window.innerWidth - width) / 2);
        if (top + height > window.innerHeight - 12) top = window.innerHeight - height - 12;
        if (top < 12) top = 12;
        pop.style.left = `${Math.round(left)}px`;
        pop.style.top = `${Math.round(top)}px`;
    };

    const show = (anchor, src, label, isFile) => {
        clearTimeout(hideTimer);
        document.querySelectorAll(".is-previewing").forEach((el) => el.classList.remove("is-previewing"));
        anchor.classList.add("is-previewing");
        pop.classList.toggle("is-file", Boolean(isFile));
        if (urlLabel) urlLabel.textContent = label;
        if (src !== currentSrc) {
            currentSrc = src;
            frame.src = src;
        }
        pop.hidden = false;
        pop.setAttribute("aria-hidden", "false");
        place(anchor);
    };

    const scheduleShow = (anchor, src, label, isFile) => {
        clearTimeout(hideTimer);
        clearTimeout(showTimer);
        showTimer = window.setTimeout(() => show(anchor, src, label, isFile), 160);
    };

    const scheduleHide = () => {
        clearTimeout(showTimer);
        hideTimer = window.setTimeout(hide, 80);
    };

    const bind = (el, src, label, isFile) => {
        el.addEventListener("pointerenter", () => scheduleShow(el, src, label, isFile));
        el.addEventListener("pointerleave", scheduleHide);
        el.addEventListener("focusin", () => scheduleShow(el, src, label, isFile));
        el.addEventListener("focusout", (event) => {
            if (!el.contains(event.relatedTarget)) scheduleHide();
        });
        el.addEventListener("click", hide);
    };

    document.querySelectorAll("[data-preview]").forEach((card) => {
        const src = card.getAttribute("data-preview");
        if (!src) return;
        const encoded = encodePath(src);
        const href = card.getAttribute("href") || src;
        let label = href;
        try {
            label = decodeURIComponent(href.split("/").pop() || href);
        } catch {
            label = href.replace(/^files\//, "");
        }
        const previewSrc = /\.pdf$/i.test(src) ? `${encoded}#toolbar=0&navpanes=0&view=FitH` : encoded;
        bind(card, previewSrc, label, true);
    });

    frame.addEventListener("load", () => {
        if (pop.hidden) return;
        const anchor = document.querySelector(".is-previewing");
        if (anchor) place(anchor);
    });

    window.addEventListener("scroll", () => {
        if (!pop.hidden) hide();
    }, { passive: true });
}

function renderImageSlide(item, title, active) {
    const caption = escapeHtml(localized(item.caption));
    const alt = escapeHtml(localized(item.alt) || localized(item.caption) || title);
    return `<button type="button" class="carousel-slide media-open${active ? " is-active" : ""}" data-full="${escapeHtml(item.src)}" data-alt="${alt}" aria-hidden="${active ? "false" : "true"}"${active ? "" : " hidden"}><img src="${escapeHtml(item.src)}" alt="${alt}">${caption ? `<p class="hero-image-caption">${caption}</p>` : ""}</button>`;
}

function renderProjectMedia(data) {
    const items = data.media || [];
    if (!items.length) {
        return `<div class="hero-placeholder">${t("addMedia")}</div>`;
    }

    const video = items.find((item) => item.type === "youtube" || item.type === "video");
    const images = items.filter((item) => item.type === "image");
    const title = t(data.titleKey);
    let html = "";

    if (video) {
        const caption = escapeHtml(localized(video.caption));
        const alt = escapeHtml(localized(video.alt) || localized(video.caption) || title);
        if (video.type === "youtube") {
            html += `<div class="hero-video"><div class="video-wrapper"><iframe src="${escapeHtml(video.src)}" title="${alt}" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>${caption ? `<p class="hero-caption">${caption}</p>` : ""}</div>`;
        } else {
            const poster = video.poster ? ` poster="${escapeHtml(video.poster)}"` : "";
            html += `<div class="hero-video"><video controls playsinline preload="metadata"${poster}><source src="${escapeHtml(video.src)}"></video>${caption ? `<p class="hero-caption">${caption}</p>` : ""}</div>`;
        }
    }

    if (images.length === 1 && !video) {
        const item = images[0];
        const caption = escapeHtml(localized(item.caption));
        const alt = escapeHtml(localized(item.alt) || localized(item.caption) || title);
        html += `<div class="hero-image"><button type="button" class="media-open" data-full="${escapeHtml(item.src)}" data-alt="${alt}"><img src="${escapeHtml(item.src)}" alt="${alt}"></button>${caption ? `<p class="hero-image-caption">${caption}</p>` : ""}</div>`;
        return html;
    }

    if (images.length > 1) {
        const slides = images.map((item, index) => renderImageSlide(item, title, index === 0)).join("");
        const dots = images.map((_, index) => `<button type="button" class="carousel-dot${index === 0 ? " is-active" : ""}" data-carousel-goto="${index}" aria-label="${t("slideN")} ${index + 1}"></button>`).join("");
        html += `<div class="media-carousel" data-carousel>
            <div class="carousel-viewport">${slides}</div>
            <button type="button" class="carousel-nav prev" data-carousel-dir="-1" aria-label="${t("prevSlide")}"></button>
            <button type="button" class="carousel-nav next" data-carousel-dir="1" aria-label="${t("nextSlide")}"></button>
            <div class="carousel-dots">${dots}</div>
        </div>`;
    } else if (images.length === 1 && video) {
        const item = images[0];
        const caption = escapeHtml(localized(item.caption));
        const alt = escapeHtml(localized(item.alt) || localized(item.caption) || title);
        html += `<div class="hero-image"><button type="button" class="media-open" data-full="${escapeHtml(item.src)}" data-alt="${alt}"><img src="${escapeHtml(item.src)}" alt="${alt}"></button>${caption ? `<p class="hero-image-caption">${caption}</p>` : ""}</div>`;
    }

    return html || `<div class="hero-placeholder">${t("addMedia")}</div>`;
}

function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function stopCarousels(root) {
    if (!root) return;
    const nodes = [root, ...root.querySelectorAll("[data-carousel-bound]")];
    nodes.forEach((el) => {
        if (el._carouselCleanup) el._carouselCleanup();
    });
}

function startCarousel(root, slideNodes) {
    const slides = [...(slideNodes && slideNodes.length
        ? slideNodes
        : root.querySelectorAll(".carousel-slide"))];
    if (slides.length < 2) return;
    if (root._carouselCleanup) root._carouselCleanup();

    const dots = [...root.querySelectorAll("[data-carousel-goto]")];
    let index = 0;
    let timer = null;

    const show = (next) => {
        index = (next + slides.length) % slides.length;
        slides.forEach((slide, i) => {
            const active = i === index;
            slide.classList.toggle("is-active", active);
            slide.hidden = !active;
            if (slide.hasAttribute("aria-hidden")) slide.setAttribute("aria-hidden", String(!active));
        });
        dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
    };

    const play = () => {
        stop();
        if (prefersReducedMotion() || document.hidden) return;
        timer = setInterval(() => show(index + 1), CAROUSEL_MS);
        carouselTimers.add(timer);
    };

    const stop = () => {
        if (timer) {
            clearInterval(timer);
            carouselTimers.delete(timer);
            timer = null;
        }
    };

    const onDir = (event) => {
        const btn = event.target.closest("[data-carousel-dir]");
        if (!btn || !root.contains(btn)) return;
        show(index + Number(btn.dataset.carouselDir));
        play();
    };

    const onDot = (event) => {
        const btn = event.target.closest("[data-carousel-goto]");
        if (!btn || !root.contains(btn)) return;
        show(Number(btn.dataset.carouselGoto));
        play();
    };

    const onEnter = () => stop();
    const onLeave = () => play();
    const onVisibility = () => (document.hidden ? stop() : play());

    root.addEventListener("click", onDir);
    root.addEventListener("click", onDot);
    root.addEventListener("mouseenter", onEnter);
    root.addEventListener("mouseleave", onLeave);
    root.addEventListener("focusin", onEnter);
    root.addEventListener("focusout", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    root.dataset.carouselBound = "true";
    root._carouselCleanup = () => {
        stop();
        root.removeEventListener("click", onDir);
        root.removeEventListener("click", onDot);
        root.removeEventListener("mouseenter", onEnter);
        root.removeEventListener("mouseleave", onLeave);
        root.removeEventListener("focusin", onEnter);
        root.removeEventListener("focusout", onLeave);
        document.removeEventListener("visibilitychange", onVisibility);
        delete root.dataset.carouselBound;
        delete root._carouselCleanup;
    };

    play();
}

function projectPageHtml(id) {
    const data = PROJECTS[id];
    const features = (data.features?.[lang] || data.features?.en || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    const tech = (data.tech || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    const time = data.timeline || {};
    const timeRows = [
        time.start ? `<div class="timeline-item"><span>${t("startLabel")}</span><span>${escapeHtml(localized(time.start))}</span></div>` : "",
        time.end ? `<div class="timeline-item"><span>${t("endLabel")}</span><span>${escapeHtml(localized(time.end))}</span></div>` : "",
        time.duration ? `<div class="timeline-item"><span>${t("durationLabel")}</span><span>${escapeHtml(localized(time.duration))}</span></div>` : ""
    ].join("");

    return `
        <div class="project-detail-grid">
            <div class="project-detail-main">
                <section class="detail-card">
                    <h3>${t("ctxProblem")}</h3>
                    <p>${data.context[lang]}</p>
                </section>
                <section class="detail-card">
                    <h3>${t("role")}</h3>
                    <p>${data.role[lang]}</p>
                </section>
                ${data.approach ? `<section class="detail-card"><h3>${t("approachTitle")}</h3><p>${data.approach[lang]}</p></section>` : ""}
                ${features ? `<section class="detail-card"><h3>${t("featuresTitle")}</h3><ul class="detail-list">${features}</ul></section>` : ""}
                <section class="detail-card">
                    <h3>${t("impact")}</h3>
                    <p>${data.impact[lang]}</p>
                </section>
            </div>
            <aside class="project-detail-side">
                ${timeRows ? `<section class="detail-card"><div class="timeline-summary">${timeRows}</div></section>` : ""}
                ${tech ? `<section class="detail-card"><h3>${t("techUsed")}</h3><ul class="chip-list compact">${tech}</ul></section>` : ""}
            </aside>
        </div>
    `;
}

function showMainSections() {
    document.body.classList.remove("is-project-view");
    document.querySelectorAll("main > .panel").forEach((panel) => {
        panel.hidden = panel.id === "project-page";
    });
    document.querySelectorAll("#project-page video, #project-page iframe").forEach((el) => {
        if (el.tagName === "VIDEO") {
            el.pause();
            el.currentTime = 0;
        } else {
            el.src = el.src;
        }
    });
    stopCarousels(document.getElementById("project-page-media"));
    openProjectId = null;
    document.title = lang === "zh" ? "張翊禾 — AI 工程師" : "Yi-Ho Chang — AI Engineer";
}

function fillProjectPage(id) {
    const data = PROJECTS[id];
    const page = document.getElementById("project-page");
    if (!data || !page) return;
    openProjectId = id;
    document.getElementById("project-page-kicker").textContent = t(data.kickerKey);
    document.getElementById("project-page-title").textContent = t(data.titleKey);
    const media = document.getElementById("project-page-media");
    stopCarousels(media);
    const html = renderProjectMedia(data);
    media.innerHTML = html;
    media.hidden = false;
    media.querySelectorAll("[data-carousel]").forEach((el) => {
        startCarousel(el, el.querySelectorAll(".carousel-slide"));
    });
    document.getElementById("project-page-body").innerHTML = projectPageHtml(id);
    document.title = `${t(data.titleKey)} — ${t("heroName")}`;
}

function openProjectPage(id, behavior) {
    if (!PROJECTS[id]) return;
    document.body.classList.add("is-project-view");
    document.querySelectorAll("main > .panel").forEach((panel) => {
        panel.hidden = panel.id !== "project-page";
    });
    fillProjectPage(id);
    window.scrollTo({ top: 0, left: 0, behavior: behavior || "auto" });
}

function setupProjectPage() {
    applyProjectCovers();
    const mediaDialog = document.getElementById("media-dialog");
    const mediaImg = document.getElementById("media-dialog-img");
    const closeMedia = mediaDialog?.querySelector("[data-close-media]");

    document.querySelectorAll("[data-project-card]").forEach((card) => {
        card.addEventListener("click", (event) => {
            if (event.target.closest("a, button")) return;
            const id = card.dataset.projectCard;
            if (!PROJECTS[id]) return;
            if (location.hash !== `#project/${id}`) history.pushState(null, "", `#project/${id}`);
            openProjectPage(id);
        });
        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                card.querySelector('a[href^="#project/"]')?.click();
            }
        });
    });

    document.getElementById("project-page-media")?.addEventListener("click", (event) => {
        const opener = event.target.closest(".media-open");
        if (!opener || !mediaDialog || !mediaImg) return;
        mediaImg.src = opener.dataset.full;
        mediaImg.alt = opener.dataset.alt || "";
        if (typeof mediaDialog.showModal === "function") mediaDialog.showModal();
    });

    const close = () => mediaDialog?.close();
    closeMedia?.addEventListener("click", close);
    mediaDialog?.addEventListener("click", (event) => {
        if (event.target === mediaDialog) close();
    });
    mediaDialog?.addEventListener("close", () => {
        if (mediaImg) mediaImg.src = "";
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape" || mediaDialog?.open) return;
        if (!document.body.classList.contains("is-project-view")) return;
        history.pushState(null, "", "#projects");
        showMainSections();
        applyI18n();
        scrollToSection("projects", "auto");
    });
}

function setupContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    const submitBtn = form?.querySelector("[type='submit']");
    const inbox = "onebox663269@gmail.com";

    const fieldValue = (id) => document.getElementById(id)?.value.trim() || "";

    const setStatus = (key, isError = false) => {
        if (!status) return;
        status.hidden = false;
        status.classList.toggle("is-error", isError);
        status.textContent = t(key);
    };

    form?.addEventListener("submit", async (event) => {
        event.preventDefault();
        const name = fieldValue("name");
        const email = fieldValue("email");
        const message = fieldValue("message");
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!name || !validEmail || !message) {
            setStatus("formNeedFields", true);
            return;
        }

        setStatus("formSending");
        if (submitBtn) submitBtn.disabled = true;

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(inbox)}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    _replyto: email,
                    _subject: `Portfolio message from ${name}`,
                    _template: "table",
                    _captcha: "false",
                    _honey: ""
                })
            });
            const result = await response.json().catch(() => ({}));
            const resultMessage = String(result.message || "");
            const ok = response.ok && result.success !== false && result.success !== "false";

            if (/activat/i.test(resultMessage)) {
                setStatus("formActivate");
                return;
            }
            if (!ok) throw new Error(resultMessage || "send-failed");

            setStatus("formOpened");
            form.reset();
        } catch {
            const subject = encodeURIComponent(`Portfolio message from ${name}`);
            const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
            window.location.href = `mailto:${inbox}?subject=${subject}&body=${body}`;
            setStatus("formFailed", true);
        } finally {
            if (submitBtn) submitBtn.disabled = false;
        }
    }, true);
}
