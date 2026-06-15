/* ================================================================
   data.js — Single Source of Truth (SSoT)

   Cách tổ chức:
   ① _SHARED        — Dữ liệu cấu trúc, phi văn bản: id, iconType, icon,
                      borderColor, hasButton, logo, href.
                      Định nghĩa MỘT LẦN, dùng cho cả VI lẫn EN.
   ② _TEXT          — Nội dung văn bản theo ngôn ngữ (vi / en).
                      Thứ tự items[] trong skills & contact PHẢI khớp _SHARED.
   ③ _DETAIL_TEXT   — Nội dung văn bản cho các trang chi tiết.
   ④ _build()       — Ghép _SHARED + _TEXT[lang] thành đối tượng đầy đủ.
   ⑤ _buildDetail() — Ghép _SHARED.figmaProjects + _DETAIL_TEXT[lang].

   → Khi thêm dự án mới:
     1. Thêm { logo, href } vào _SHARED.skillItems[n].projects  (1 lần)
     2. Thêm text VI vào _TEXT.vi.skills.items[n].projects
     3. Thêm text EN vào _TEXT.en.skills.items[n].projects
     (Không còn sao chép id / iconType / borderColor / logo / href ở 2 nơi)
================================================================ */

/* ────────────────────────────────────────────────────────────────
   ① _SHARED — Dữ liệu cấu trúc (không phụ thuộc ngôn ngữ)
   Thứ tự skillItems[] phải khớp với _TEXT.vi/en.skills.items[]
──────────────────────────────────────────────────────────────── */
var _SHARED = {

  skillItems: [
    /* [0] id=2 — Thiết kế Hệ thống / System Modeling */
    {
      id:          2,
      iconType:    "modeling",
      icon:        '<i class="bi bi-gear-fill"></i>',
      borderColor: "#3B82F6",
      hasButton:   true,
      projects: [
        { logo: "./go_logo.png",   href: "#wonderwood-detail" },
        { logo: "./yen_logo.png",  href: "#namvietphuong-detail" },
        { logo: "./shea_logo.jpg", href: "#theshea-detail" },
        { logo: "./ailogo.jpg",    href: "#ai-detail" }
      ]
    },
    /* [1] id=3 — Thiết kế UX/UI */
    {
      id:          3,
      iconType:    "design",
      icon:        "./figma.png",
      borderColor: "#10B981",
      hasButton:   true,
      projects:    []
    },
    /* [2] id=6 — Vibe Coding */
    {
      id:          6,
      iconType:    "vibe",
      icon:        '<i class="bi bi-code"></i>',
      borderColor: "#F97316",
      hasButton:   true,
      projects: [
        { logo: "./go_logo.png", href: "#wonderwood-vibe" }
      ]
    },
    /* [3] id=1 — Khơi gợi & Thu thập yêu cầu / Business Analysis */
    {
      id:          1,
      iconType:    "analysis",
      icon:        '<i class="bi bi-file-earmark-text"></i>',
      borderColor: "#8B5CF6",
      hasButton:   false,
      projects: [
        { logo: "./go_logo.png" },
        { logo: "./yen_logo.png" },
        { logo: "./yummy_logo.jpg" },
        { logo: "./shea_logo.jpg" }
      ]
    },
    /* [4] id=4 — Agile / Scrum */
    {
      id:          4,
      iconType:    "agile",
      icon:        "./agile.png",
      borderColor: "#EC4899",
      hasButton:   false,
      projects:    []
    },
    /* [5] id=5 — Kiểm thử / Testing */
    {
      id:          5,
      iconType:    "soft",
      icon:        '<i class="bi bi-list-check text-blue-500"></i>',
      borderColor: "#EF4444",
      hasButton:   false,
      projects:    []
    }
  ],

  /* Liên hệ — thứ tự khớp với _TEXT.vi/en.contact.items[] */
  contactItems: [
    { iconType: "email",    icon: '<i class="bi bi-envelope-fill"></i>',  value: "doana838@gmail.com",           href: "mailto:doana838@gmail.com" },
    { iconType: "phone",    icon: '<i class="bi bi-telephone-fill"></i>', value: "035 569 8767",                 href: "tel:0355698767" },
    { iconType: "linkedin", icon: '<i class="bi bi-linkedin"></i>',       value: "linkedin.com/in/ngocanh-doan", href: "https://www.linkedin.com/in/ánh-đoàn-76251b2b6/" }
  ],

  /* Figma projects — logo, href, tags dùng chung cho cả VI lẫn EN */
  figmaProjects: [
    { logo: "./go_logo.png",    href: "#wonderwood-figma",    tags: ["Figma"] },
    { logo: "./yen_logo.png",   href: "#namvietphuong-figma", tags: ["Figma"] },
    { logo: "./yummy_logo.jpg", href: "#yummy-figma",         tags: ["Figma"] },
    { logo: "./shea_logo.jpg",  href: "#theshea-figma",       tags: ["Figma"] }
  ]
};


/* ────────────────────────────────────────────────────────────────
   ② _TEXT — Nội dung văn bản (chỉ chứa text, không chứa logo/href)
──────────────────────────────────────────────────────────────── */
var _TEXT = {

  /* ==========================  TIẾNG VIỆT  ========================== */
  vi: {
    nav: ["Trang chủ", "Giới thiệu", "Kỹ năng", "Liên hệ"],

    hero: {
      tagline:     "XIN CHÀO, TÔI LÀ",
      name:        "Đoàn Thị Ngọc Ánh",
      title:       "Business Analyst",
      description: "Business Analyst với tư duy phân tích và tinh thần học hỏi cao. Có kinh nghiệm tìm hiểu nghiệp vụ, thu thập và làm rõ yêu cầu hệ thống, đồng thời phối hợp hiệu quả với các bên liên quan để xây dựng giải pháp phù hợp. Định hướng phát triển trở thành Middle Business Analyst trong 1–2 năm tới.",
      cvLink:      "./ngocanh_tv.pdf",
      btnCV:       "Tải xuống CV",
      btnContact:  "Liên hệ"
    },

    about: {
      title1:     "GIỚI THIỆU",
      title2:     "BẢN THÂN",
      intro: [
        "Tôi là người chủ động, có tư duy phân tích và tinh thần học hỏi cao, yêu thích việc tìm hiểu nhu cầu nghiệp vụ, làm rõ yêu cầu hệ thống để không ngừng mở rộng kiến thức và thích nghi với nhiều lĩnh vực khác nhau. Tôi có khả năng làm việc hiệu quả với các bên liên quan, chủ động trao đổi và làm rõ yêu cầu để đảm bảo sự thống nhất trong quá trình triển khai, hướng đến những giải pháp phù hợp và mang lại giá trị cho tổ chức.",
        "Trong 1–2 năm tới, tôi định hướng phát triển chuyên sâu, từng bước nâng cao năng lực chuyên môn để trở thành Middle Business Analyst."
      ],
      fieldTitle: "LĨNH VỰC",
      fields:     ["SẢN XUẤT B2B", "SẢN XUẤT B2C", "THỰC PHẨM & ĐỒ UỐNG (F&B)", "QUẢN LÝ KHO", "AI AGENT"],
      cvLink:     "./ngocanh_tv.pdf",
      btnCV:      "Tải xuống CV"
    },

    skills: {
      title: "KỸ NĂNG",
      /* Thứ tự PHẢI khớp với _SHARED.skillItems[] */
      items: [
        /* [0] id=2 */
        {
          title:       "Thiết kế Hệ thống",
          tags:        ["BPMN", "User stories", "UC", "UCS", "AD", "SD", "DFD", "ERD"],
          description: "Có kinh nghiệm xây dựng User Stories và mô hình hóa quy trình nghiệp vụ, hệ thống bằng BPMN, UML, DFD và ERD nhằm làm rõ yêu cầu, trực quan hóa luồng xử lý, tương tác hệ thống và cấu trúc dữ liệu. Hỗ trợ hiệu quả cho quá trình phân tích, thiết kế và phát triển giải pháp.",
          projects: [
            {
              name:        "HỆ THỐNG ERP - CÔNG TY TNHH WONDERWOOD",
              system:      "Lĩnh vực: Sản xuất B2B",
              scope:       "Phạm vi: Toàn bộ hệ thống",
              description: "Thiết kế hệ thống ERP thông qua việc phân tích yêu cầu và sử dụng các công cụ mô hình hóa nhằm trực quan hóa quy trình nghiệp vụ, luồng xử lý, tương tác hệ thống và cấu trúc dữ liệu phục vụ phân tích và phát triển giải pháp.",
              tags:        ["BPMN", "User Stories", "UC", "UCS", "SD", "DFD", "ERD"]
            },
            {
              name:        "HỆ THỐNG ERP - CÔNG TY TNHH NAM VIỆT PHƯƠNG",
              system:      "Lĩnh vực: Sản xuất B2C",
              scope:       "Phạm vi: Quản lý bán hàng & nhân sự",
              description: "Phân tích và mô tả các chức năng của phân hệ quản lý bán hàng và nhân sự trong hệ thống ERP thông qua sơ đồ Use Case (UC).",
              tags:        ["UC"]
            },
            {
              name:        "HỆ THỐNG ERP - CÔNG TY TNHH THE SHEA",
              system:      "Lĩnh vực: Quản lý kho",
              scope:       "Phạm vi: Quản lý kho & hàng hóa",
              description: "Tham gia xây dựng hệ thống ERP, phụ trách phân tích và mô tả các chức năng quản lý vị trí lưu kho và trưng bày hàng hóa cho doanh nghiệp thông qua các công cụ.",
              tags:        ["UC", "UCS", "AD"]
            },
            {
              name:        "HỆ THỐNG AGENTIC AI ĐẦU TƯ TÀI CHÍNH TỰ ĐỘNG",
              system:      "Lĩnh vực: AI Agent",
              scope:       "Phạm vi: Toàn bộ hệ thống",
              description: "Phân tích và mô tả hệ thống nhằm làm rõ quy trình quản lý dữ liệu thị trường, tương tác giữa nhà đầu tư và hệ thống, cùng luồng xử lý từ phân tích dữ liệu đến thực hiện giao dịch đầu tư tự động.",
              tags:        ["BPMN", "UC", "UCS", "AD", "DFD"]
            }
          ]
        },
        /* [1] id=3 */
        {
          title:       "Thiết kế UX/UI",
          tags:        ["Figma"],
          description: "Thành thạo thiết kế UX/UI bằng Figma để tạo wireframe, luồng người dùng và prototype tương tác. Tập trung tạo trải nghiệm trực quan, phù hợp với nhu cầu người dùng và mục tiêu kinh doanh, đồng thời hỗ trợ hiệu quả cho việc xác thực yêu cầu và kiểm thử khả năng sử dụng ngay từ giai đoạn đầu.",
          projects:    []
        },
        /* [2] id=6 */
        {
          title:       "Vibe Coding",
          tags:        [],
          description: "Ứng dụng AI để chuyển đổi các tài liệu phân tích và thiết kế hệ thống thành các bản demo chức năng trên môi trường local. Hỗ trợ trực quan hóa giải pháp, xác nhận yêu cầu với stakeholder và giúp người dùng hình dung rõ hơn về sản phẩm trước khi bước vào giai đoạn phát triển chính thức.",
          projects: [
            {
              name:        "HỆ THỐNG ERP - CÔNG TY TNHH WONDERWOOD",
              system:      "Lĩnh vực: Sản xuất B2B",
              scope:       "Phạm vi: Quản lý sản xuất",
              description: "Xây dựng demo một số chức năng của phân hệ quản lý sản xuất bằng AI dựa trên các tài liệu phân tích và thiết kế đã hoàn thiện. Giúp trực quan hóa quy trình nghiệp vụ, hỗ trợ stakeholder đánh giá giải pháp và hình dung rõ hơn về hệ thống trước khi phát triển chính thức.",
              tags:        []
            }
          ]
        },
        /* [3] id=1 */
        {
          title:       "Khơi gợi & Thu thập yêu cầu",
          tags:        [],
          description: "Có nền tảng vững chắc trong việc thu thập, phân tích và làm rõ yêu cầu nghiệp vụ thông qua trao đổi và phối hợp với các bên liên quan. Thành thạo trong việc xác định nhu cầu, làm rõ phạm vi và đảm bảo sự đồng thuận về mục tiêu cũng như giải pháp đề xuất. Từ đó xây dựng các tài liệu như BRD, PRD và SRS chất lượng, hỗ trợ đội ngũ phát triển hiểu đúng yêu cầu và triển khai giải pháp hiệu quả.",
          projects: [
            {
              name:        "CÔNG TY TNHH WONDERWOOD",
              system:      "Hệ thống ERP",
              scope:       "Phạm vi: Toàn bộ hệ thống",
              description: "Phân tích nghiệp vụ và tham gia xây dựng các phân hệ bán hàng và nhân sự cho hệ thống ERP của doanh nghiệp hoạt động trong lĩnh vực cung cấp và phân phối sản phẩm từ yến Việt, hỗ trợ quản lý vận hành và tối ưu quy trình kinh doanh.",
              tags:        ["Khơi gợi & Thu thập yêu cầu", "BRD", "SRS", "User stories"]
            },
            {
              name:        "CÔNG TY TNHH NAM VIỆT PHƯƠNG",
              system:      "Hệ thống ERP",
              scope:       "Phạm vi: Quản lý bán hàng & nhân sự",
              description: "Phân tích nghiệp vụ và tham gia xây dựng các phân hệ bán hàng và nhân sự cho hệ thống ERP của doanh nghiệp hoạt động trong lĩnh vực cung cấp và phân phối sản phẩm từ yến Việt, hỗ trợ quản lý vận hành và tối ưu quy trình kinh doanh.",
              tags:        ["Khơi gợi & Thu thập yêu cầu"]
            },
            {
              name:        "THƯƠNG HIỆU TÀU HỦ SINGAPORE YUMMY",
              system:      "Hệ thống ERP",
              scope:       "Phạm vi: Quản lý tài chính",
              description: "Phân tích nghiệp vụ và tham gia xây dựng phân hệ tài chính cho hệ thống ERP của thương hiệu chuyên cung cấp tàu hủ tươi, hỗ trợ quản lý thu chi và theo dõi hoạt động kinh doanh.",
              tags:        ["Khơi gợi & Thu thập yêu cầu"]
            },
            {
              name:        "THƯƠNG HIỆU THỜI TRANG THE SHEA",
              system:      "Hệ thống quản lý vị trí hàng hóa",
              scope:       "Phạm vi: Quản lý kho & hàng hóa",
              description: "Phân tích nghiệp vụ và tham gia xây dựng phân hệ quản lý kho và hàng hóa cho thương hiệu thời trang The Shea, hỗ trợ theo dõi vị trí hàng hóa trên kệ trưng bày và kệ kho.",
              tags:        ["Khơi gợi & Thu thập yêu cầu"]
            }
          ]
        },
        /* [4] id=4 */
        {
          title:       "Agile / Scrum",
          tags:        [],
          description: "Hiểu rõ các nguyên tắc làm việc trong môi trường Agile và Scrum. Có kinh nghiệm phối hợp với các nhóm đa chức năng để mang lại hiệu quả hoạt động thông qua các hoạt động lập kế hoạch sprint, đánh giá và cải tiến sau mỗi vòng lặp.",
          projects:    []
        },
        /* [5] id=5 */
        {
          title:       "KIỂM THỬ",
          tags:        ["Functional Testing", "UAT"],
          description: "Có kiến thức về Functional Testing và UAT, hiểu quy trình xây dựng test case, thực hiện kiểm thử, ghi nhận lỗi và theo dõi kết quả kiểm thử. Nắm được vai trò của hoạt động kiểm thử trong việc đảm bảo chất lượng phần mềm và đáp ứng yêu cầu nghiệp vụ.",
          projects:    []
        }
      ]
    },

    contact: {
      title1: "THÔNG TIN",
      title2: "LIÊN HỆ",
      items: [
        { label: "Email" },
        { label: "Điện thoại" },
        { label: "LinkedIn" }
      ]
    }
  },

  /* ============================  ENGLISH  ============================ */
  en: {
    nav: ["Home", "About", "Skills", "Contact"],

    hero: {
      tagline:     "HELLO, I AM",
      name:        "Doan Thi Ngoc Anh",
      title:       "Business Analyst",
      description: "Business Analyst with strong analytical thinking and a proactive learning mindset. Experienced in business analysis, requirements gathering, and clarification. Skilled in collaborating with stakeholders to identify business needs and propose effective solutions. Aspiring to develop into a Middle Business Analyst within the next 1–2 years.",
      cvLink:      "./ngocanh_ta.pdf",
      btnCV:       "Download CV",
      btnContact:  "Contact"
    },

    about: {
      title1:     "ABOUT",
      title2:     "ME",
      intro: [
        "I am a proactive individual with strong analytical thinking and a continuous learning mindset, passionate about understanding business needs and clarifying system requirements in order to continuously expand my knowledge and adapt to different domains. I am able to work effectively with stakeholders, proactively communicating and clarifying requirements to ensure alignment throughout the implementation process, while aiming to deliver suitable solutions and create value for the organization.",
        "Over the next 1–2 years, I aim to deepen my expertise and gradually enhance my professional capabilities to become a Middle Business Analyst."
      ],
      fieldTitle: "DOMAINS",
      fields:     ["B2B Manufacturing", "B2C Manufacturing", "Food & Beverage (F&B)", "Warehouse Management", "AI Agent"],
      cvLink:     "./ngocanh_ta.pdf",
      btnCV:      "Download CV"
    },

    skills: {
      title: "SKILLS",
      items: [
        /* [0] id=2 */
        {
          title:       "System Modeling",
          tags:        ["BPMN", "User Stories", "UC", "UCS", "AD", "SD", "DFD", "ERD"],
          description: "Experienced in building User Stories and modeling business processes and systems using BPMN, UML, DFD, and ERD to clarify requirements, visualize processing flows, system interactions, and data structures. Effectively supports analysis, design, and solution development.",
          projects: [
            {
              name:        "ERP SYSTEM — WONDERWOOD CO., LTD.",
              system:      "Domain: B2B Manufacturing",
              scope:       "Scope: Full System",
              description: "Designed the ERP system through requirements analysis and the application of modeling tools to visualize business processes, processing flows, system interactions, and data structures for analysis and solution development.",
              tags:        ["BPMN", "User Stories", "UC", "UCS", "SD", "DFD", "ERD"]
            },
            {
              name:        "ERP SYSTEM — NAM VIET PHUONG CO., LTD.",
              system:      "Domain: B2C Manufacturing",
              scope:       "Scope: Sales & HR Management",
              description: "Analyzed and described the functions of the sales and HR management modules in the ERP system through Use Case (UC) diagrams.",
              tags:        ["UC"]
            },
            {
              name:        "ERP SYSTEM — THE SHEA CO., LTD.",
              system:      "Domain: Warehouse Management",
              scope:       "Scope: Warehouse & Goods Management",
              description: "Participated in the development of an ERP system, responsible for analyzing and documenting warehouse location and product display management features using business analysis artifacts.",
              tags:        ["UC", "UCS", "AD"]
            },
            {
              name:        "AGENTIC AI INVESTMENT ADVISORY SYSTEM",
              system:      "Domain: AI Agent",
              scope:       "Scope: Full System",
              description: "Analyzed and modeled the system to clarify market data management workflows, investor-system interactions, and the processing pipeline from data analysis to automated investment execution.",
              tags:        ["BPMN", "UC", "UCS", "AD", "DFD"]
            }
          ]
        },
        /* [1] id=3 */
        {
          title:       "UX/UI Design",
          tags:        ["Figma"],
          description: "Proficient in UX/UI design using Figma to create wireframes, user flows, and interactive prototypes. Focused on creating intuitive experiences aligned with user needs and business goals, while effectively supporting requirement validation and usability testing from the early stages.",
          projects:    []
        },
        /* [2] id=6 */
        {
          title:       "Vibe Coding",
          tags:        [],
          description: "Leverages AI to transform analysis and system design documents into functional demos on a local environment. Supports solution visualization, stakeholder requirement validation, and helps users develop a clearer understanding of the product prior to entering the formal development phase.",
          projects: [
            {
              name:        "ERP SYSTEM — WONDERWOOD CO., LTD.",
              system:      "Domain: B2B Manufacturing",
              scope:       "Scope: Manufacturing Management",
              description: "Built AI-powered demos for key functions of the manufacturing management module based on completed analysis and design documents. Supported visualization of business workflows, enabled stakeholder evaluation, and provided a clearer picture of the system prior to formal development.",
              tags:        []
            }
          ]
        },
        /* [3] id=1 */
        {
          title:       "Requirements Elicitation & Gathering",
          tags:        [],
          description: "Possess a strong foundation in eliciting, analyzing, and clarifying business requirements through effective communication and collaboration with stakeholders. Skilled in identifying business needs, defining scope, and ensuring alignment on objectives and proposed solutions. Capable of producing high-quality documentation such as BRDs, PRDs, and SRSs, enabling development teams to accurately understand requirements and implement effective solutions.",
          projects: [
            {
              name:        "WONDERWOOD CO., LTD.",
              system:      "ERP System",
              scope:       "Scope: Full System",
              description: "Conducted business analysis and contributed to building the sales and HR modules for the ERP system of a plywood manufacturing enterprise, supporting operational management and business process optimization.",
              tags:        ["Elicitation & Requirements Gathering", "BRD", "SRS", "User Stories"]
            },
            {
              name:        "NAM VIET PHUONG CO., LTD.",
              system:      "ERP System",
              scope:       "Scope: Sales & HR Management",
              description: "Conducted business analysis and contributed to building the sales and HR modules for the ERP system of an enterprise specializing in the supply and distribution of Vietnamese bird's nest products, supporting operational management and business process optimization.",
              tags:        ["Elicitation & Requirements Gathering"]
            },
            {
              name:        "YUMMY SINGAPORE TOFU BRAND",
              system:      "ERP System",
              scope:       "Scope: Finance Management",
              description: "Conducted business analysis and contributed to building the finance module for the ERP system of a brand specializing in fresh tofu products, supporting revenue and expense tracking and business activity monitoring.",
              tags:        ["Elicitation & Requirements Gathering"]
            },
            {
              name:        "THE SHEA FASHION BRAND",
              system:      "Inventory Location Mgmt System",
              scope:       "Scope: Warehouse & Goods Management",
              description: "Conducted business analysis and contributed to building the warehouse and goods management module for The Shea fashion brand, supporting real-time tracking of product locations on display shelves and storage racks.",
              tags:        ["Elicitation & Requirements Gathering"]
            }
          ]
        },
        /* [4] id=4 */
        {
          title:       "Agile / Scrum",
          tags:        [],
          description: "Well-versed in Agile and Scrum principles. Experienced in collaborating with cross-functional teams to drive operational efficiency through sprint planning, reviews, and retrospectives.",
          projects:    []
        },
        /* [5] id=5 */
        {
          title:       "TESTING",
          tags:        ["Functional Testing", "UAT"],
          description: "Possess knowledge of Functional Testing and UAT, understand the process of developing test cases, executing tests, logging bugs, and tracking test results. Understand the role of testing activities in ensuring software quality and meeting business requirements.",
          projects:    []
        }
      ]
    },

    contact: {
      title1: "CONTACT",
      title2: "INFORMATION",
      items: [
        { label: "Email" },
        { label: "Phone" },
        { label: "LinkedIn" }
      ]
    }
  }
};


/* ────────────────────────────────────────────────────────────────
   ③ _DETAIL_TEXT — Nội dung văn bản cho các trang chi tiết
──────────────────────────────────────────────────────────────── */
var _DETAIL_TEXT = {

  /* ========================  TIẾNG VIỆT  ======================== */
  vi: {
    ui: {
      backBtn:        "Quay lại",
      skillLabel:     "KỸ NĂNG",
      projectsDone:   "Dự án đã thực hiện",
      viewDetail:     "Xem chi tiết",
      viewPrototype:  "Chi tiết prototype",
      sortOptions:    ["Mới nhất", "Cũ nhất"],
      projectOverview:"MÔ TẢ DỰ ÁN",
      workScope:      "Phạm vi công việc",
      bpmnAsIs:       "BPMN THỰC TRẠNG HIỆN TẠI (AS-IS)",
      bpmnToBe:       "BPMN QUY TRÌNH ĐỀ XUẤT (TO-BE)",
      demoVibe:       "DEMO VIBE CODING",
      figurePrefix:   "Hình ảnh:"
    },

    analysis: {
      wonderwood: {
        bannerTitle: "HỆ THỐNG ERP - CÔNG TY TNHH WONDERWOOD",
        bannerScope: "LĨNH VỰC: SẢN XUẤT B2B",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItems:  [
          { text: "Khơi gợi và làm rõ yêu cầu với chủ doanh nghiệp." },
          { text: "Thiết kế prototype giao diện cho phân hệ quản lý sản xuất bằng Figma nhằm trực quan hóa quy trình thao tác và tối ưu trải nghiệm người dùng trong hệ thống ERP." }
        ]
      },
      namVietPhuong: {
        bannerTitle: "HỆ THỐNG ERP - CÔNG TY TNHH NAM VIỆT PHƯƠNG",
        bannerScope: "LĨNH VỰC: SẢN XUẤT B2C",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItems:  [
          { pre: "Chuẩn bị danh sách câu hỏi khảo sát nhằm khơi gợi, thu thập và làm rõ yêu cầu nghiệp vụ cho ", highlight: "phân hệ bán hàng và nhân sự", post: " với chủ doanh nghiệp." }
        ]
      },
      yummy: {
        bannerTitle: "HỆ THỐNG ERP - THƯƠNG HIỆU TÀU HỦ SINGAPORE YUMMY",
        bannerScope: "LĨNH VỰC: THỰC PHẨM & ĐỒ UỐNG (F&B)",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItems:  [
          { pre: "Chuẩn bị danh sách câu hỏi khảo sát nhằm khơi gợi, thu thập và làm rõ yêu cầu nghiệp vụ cho ", highlight: "phân hệ tài chính", post: " với chủ doanh nghiệp." }
        ]
      },
      theShea: {
        bannerTitle: "HỆ THỐNG ERP - CÔNG TY TNHH THE SHEA",
        bannerScope: "LĨNH VỰC: QUẢN LÝ KHO",
        descParts:   ["Hệ thống được xây dựng nhằm hỗ trợ theo dõi, ", "quản lý vị trí sản phẩm trên kệ trưng bày và kệ kho", " theo thời gian thực, tối ưu quy trình kiểm kê, sắp xếp và nâng cao hiệu quả quản lý hàng hóa trong cửa hàng cho thương hiệu thời trang The Shea."],
        scopeItems:  [
          { text: "Khơi gợi và làm rõ yêu cầu nghiệp vụ quản lý kho và hàng hóa với chủ cửa hàng thời trang." }
        ]
      }
    },

    modeling: {
      wonderwood: {
        bannerTitle: "HỆ THỐNG ERP - CÔNG TY TNHH WONDERWOOD",
        bannerScope: "LĨNH VỰC: SẢN XUẤT B2B",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItem:   "Thiết kế hệ thống ERP thông qua việc phân tích yêu cầu và sử dụng các công cụ mô hình hóa",
        captions: {
          bpmnAsIs:   "Hình ảnh: Sơ đồ BPMN thực trạng hiện tại (As-Is) - Phân hệ Quản lý sản xuất",
          bpmnToBe:   "Hình ảnh: Sơ đồ BPMN quy trình đề xuất (To-Be) - Phân hệ Quản lý sản xuất",
          userStories:"Hình ảnh: Bảng User Stories theo vai trò người dùng",
          ucOverview: "Hình ảnh: Sơ đồ Use Case tổng quan",
          ucDetails:  ["Hình ảnh: Sơ đồ Use Case cấp 1", "Hình ảnh: Sơ đồ Use Case cấp 2", "Hình ảnh: Sơ đồ Use Case cấp 3"],
          ucAlt:      ["Sơ đồ UC cấp 1", "Sơ đồ UC cấp 2", "Sơ đồ UC cấp 3"],
          ucs:        "Hình ảnh: Bảng đặc tả UCS - Tính năng thêm mới đơn hàng",
          sd:         ["Hình ảnh: Sơ đồ SD - Tính năng thêm mới đơn hàng", "Hình ảnh: Sơ đồ SD - Tính năng thêm tài khoản"],
          dfdContext: "Hình ảnh: Sơ đồ DFD ngữ cảnh",
          dfdLevel0:  "Hình ảnh: Sơ đồ DFD cấp 0",
          erd:        "Hình ảnh: Sơ đồ ERD - Phân hệ Quản lý bán hàng"
        }
      },
      namVietPhuong: {
        bannerTitle: "HỆ THỐNG ERP - CÔNG TY TNHH NAM VIỆT PHƯƠNG",
        bannerScope: "LĨNH VỰC: SẢN XUẤT B2C",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItem:   "Phân tích và mô tả các chức năng của <span class=\"text-blue-600 font-semibold\">phân hệ quản lý bán hàng và nhân sự</span> trong hệ thống ERP thông qua sơ đồ Use Case (UC).",
        captions: {
          ucSales: "Hình ảnh: Sơ đồ Use Case - Phân hệ Quản lý bán hàng",
          ucHR:    "Hình ảnh: Sơ đồ Use Case - Phân hệ Quản lý nhân sự"
        }
      },
      theShea: {
        bannerTitle: "HỆ THỐNG ERP - CÔNG TY TNHH THE SHEA",
        bannerScope: "LĨNH VỰC: QUẢN LÝ KHO",
        descParts:   ["Hệ thống được xây dựng nhằm hỗ trợ theo dõi, ", "quản lý vị trí sản phẩm trên kệ trưng bày và kệ kho", " theo thời gian thực, tối ưu quy trình kiểm kê, sắp xếp và nâng cao hiệu quả quản lý hàng hóa trong cửa hàng cho thương hiệu thời trang The Shea."],
        scopeItem:   "Tham gia xây dựng hệ thống ERP, phụ trách phân tích và mô tả các chức năng quản lý vị trí lưu kho và trưng bày hàng hóa cho doanh nghiệp thông qua các công cụ.",
        captions: {
          uc:  "Hình ảnh: Sơ đồ Use Case",
          ucs: "Hình ảnh: Bảng đặc tả UCS - Tính năng thêm mới giá kệ",
          ad:  "Hình ảnh: Sơ đồ AD - Tính năng Lọc vị trí hàng hóa theo màu và theo size"
        }
      },
      ai: {
        bannerTitle: "HỆ THỐNG AGENTIC AI ĐẦU TƯ TÀI CHÍNH TỰ ĐỘNG",
        bannerScope: "LĨNH VỰC: AI AGENT",
        descParts:   ["Hệ thống được xây dựng nhằm hỗ trợ ", "quản lý và tự động hóa hoạt động đầu tư tài chính", " thông qua việc theo dõi dữ liệu thị trường, phân tích cơ hội đầu tư và thực hiện giao dịch tự động theo chiến lược được lựa chọn, giúp nâng cao hiệu quả quản lý danh mục và tối ưu hóa quy trình đầu tư."],
        scopeItem:   "Phân tích và mô tả hệ thống nhằm làm rõ quy trình quản lý dữ liệu thị trường, tương tác giữa nhà đầu tư và hệ thống, cùng luồng xử lý từ phân tích dữ liệu đến thực hiện giao dịch đầu tư tự động.",
        captions: {
          bpmn:       ["Hình ảnh: Sơ đồ BPMN - Tính năng quản lý người dùng", "Hình ảnh: Sơ đồ BPMN - Tính năng quản lý dữ liệu chứng khoán", "Hình ảnh: Sơ đồ BPMN - Tính năng quản lý đầu tư"],
          ucOverview: "Hình ảnh: Sơ đồ UC tổng",
          ucLevel2:   "Hình ảnh: Sơ đồ UC cấp 2",
          ucs:        "Hình ảnh: Bảng đặc tả UCS - Tính năng xem danh sách mục đầu tư",
          ad:         "Hình ảnh: Sơ đồ AD - Tính năng xem danh sách mục đầu tư",
          dfdContext: "Hình ảnh: Sơ đồ DFD ngữ cảnh",
          dfdLevel0:  "Hình ảnh: Sơ đồ DFD cấp 0"
        }
      }
    },

    vibe: {
      wonderwood: {
        bannerTitle: "HỆ THỐNG ERP - CÔNG TY TNHH WONDERWOOD",
        bannerScope: "LĨNH VỰC: SẢN XUẤT B2B",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItem:   "Xây dựng demo một số chức năng của phân hệ quản lý sản xuất bằng AI dựa trên các tài liệu phân tích và thiết kế đã hoàn thiện, bao gồm: quản lý nhóm nguyên vật liệu, quản lý nguyên vật liệu, quản lý nhà cung cấp, quản lý kế hoạch sản xuất.",
        videoCaption:"Video: Demo chức năng trên web (Vibe Coding)"
      }
    },

    figma: {
      breadcrumbTitle: "THIẾT KẾ UX/UI",
      /* Chỉ text — logo/href/tags lấy tự động từ _SHARED.figmaProjects */
      projects: [
        { name: "HỆ THỐNG ERP - CÔNG TY TNHH WONDERWOOD",               system: "Lĩnh vực: Sản xuất B2B",       scope: "Phạm vi: Quản lý sản xuất",           description: "Thiết kế prototype giao diện bằng Figma cho phân hệ quản lý sản xuất trong hệ thống ERP nhằm mô phỏng quy trình thao tác, trực quan hóa luồng nghiệp vụ và tối ưu trải nghiệm người dùng trong quá trình vận hành hệ thống." },
        { name: "HỆ THỐNG ERP - CÔNG TY TNHH NAM VIỆT PHƯƠNG",          system: "Lĩnh vực: Sản xuất B2C",       scope: "Phạm vi: Quản lý bán hàng & nhân sự", description: "Thiết kế prototype giao diện bằng Figma cho phân hệ quản lý bán hàng và nhân sự trong hệ thống ERP nhằm mô phỏng quy trình thao tác, trực quan hóa luồng nghiệp vụ và tối ưu trải nghiệm người dùng trong quá trình vận hành hệ thống." },
        { name: "HỆ THỐNG ERP - THƯƠNG HIỆU TÀU HỦ SINGAPORE YUMMY",   system: "Thực phẩm & Đồ uống",          scope: "Phạm vi: Quản lý tài chính",          description: "Thiết kế prototype giao diện cho phân hệ quản lý tài chính bằng Figma nhằm trực quan hóa quy trình thao tác và tối ưu trải nghiệm người dùng trong hệ thống ERP." },
        { name: "HỆ THỐNG ERP - CÔNG TY TNHH THE SHEA",         system: "Lĩnh vực: Quản lý kho",         scope: "Phạm vi: Quản lý kho & hàng hóa",    description: "Thiết kế prototype bằng Figma cho các chức năng quản lý vị trí lưu kho và trưng bày hàng hóa, nhằm mô phỏng giao diện và luồng thao tác của người dùng trên hệ thống." }
      ],
      wonderwood: {
        bannerTitle: "HỆ THỐNG ERP - CÔNG TY TNHH WONDERWOOD",
        bannerScope: "LĨNH VỰC: SẢN XUẤT B2B",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItem:   "Thiết kế UX/UI cho <span class=\"text-blue-600 font-semibold\">phân hệ quản lý sản xuất</span> thuộc hệ thống ERP thông qua việc xây dựng wireframe, luồng người dùng và prototype tương tác bằng Figma.",
        captions:    ["Hình ảnh: Giao diện trang đăng nhập", "Hình ảnh: Giao diện trang xem dashboard", "Hình ảnh: Giao diện trang danh sách - Tính năng quản lý kế hoạch sản xuất", "Hình ảnh: Giao diện trang thêm mới - Tính năng quản lý kế hoạch sản xuất"]
      },
      namVietPhuong: {
        bannerTitle: "HỆ THỐNG ERP - CÔNG TY TNHH NAM VIỆT PHƯƠNG",
        bannerScope: "LĨNH VỰC: SẢN XUẤT B2C",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItem:   "Thiết kế UX/UI cho <span class=\"text-blue-600 font-semibold\">phân hệ quản lý bán hàng và nhân sự</span> thuộc hệ thống ERP thông qua việc xây dựng wireframe, luồng người dùng và prototype tương tác bằng Figma.",
        captions:    ["Hình ảnh: Giao diện trang danh sách - Tính năng quản lý chấm công", "Hình ảnh: Giao diện trang chỉnh sửa thông tin - Tính năng quản lý chấm công", "Hình ảnh: Giao diện trang thêm mới - Tính năng quản lý đơn hàng", "Hình ảnh: Giao diện trang thêm mới - Tính năng quản lý dữ liệu bán sỉ"]
      },
      yummy: {
        bannerTitle: "HỆ THỐNG ERP - THƯƠNG HIỆU TÀU HỦ SINGAPORE YUMMY",
        bannerScope: "LĨNH VỰC: THỰC PHẨM & ĐỒ UỐNG (F&B)",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItem:   "Thiết kế UX/UI cho <span class=\"text-blue-600 font-semibold\">phân hệ quản lý tài chính</span> thuộc hệ thống ERP thông qua việc xây dựng wireframe, luồng người dùng và prototype tương tác bằng Figma.",
        captions:    ["Hình ảnh: Giao diện trang xem dashboard", "Hình ảnh: Giao diện trang xem danh sách - Tính năng quản lý nguồn quỹ", "Hình ảnh: Giao diện trang danh sách - Tính năng quản lý công nợ nhà cung cấp", "Hình ảnh: Giao diện trang thêm mới - Tính năng quản lý phiếu thu"]
      },
      theShea: {
        bannerTitle: "HỆ THỐNG ERP - CÔNG TY TNHH THE SHEA",
        bannerScope: "LĨNH VỰC: QUẢN LÝ KHO",
        descParts:   ["Hệ thống được xây dựng nhằm hỗ trợ theo dõi, ", "quản lý vị trí sản phẩm trên kệ trưng bày và kệ kho", " theo thời gian thực, tối ưu quy trình kiểm kê, sắp xếp và nâng cao hiệu quả quản lý hàng hóa trong cửa hàng cho thương hiệu thời trang The Shea."],
        scopeItem:   "Thiết kế prototype bằng Figma cho các chức năng quản lý vị trí lưu kho và trưng bày hàng hóa, nhằm mô phỏng giao diện và luồng thao tác của người dùng trên hệ thống.",
        caption:     "Hình ảnh: Giao diện hệ thống quản lý vị trí hàng hóa"
      }
    }
  },

  /* ==========================  ENGLISH  ========================= */
  en: {
    ui: {
      backBtn:        "Back",
      skillLabel:     "SKILLS",
      projectsDone:   "Completed Projects",
      viewDetail:     "View Details",
      viewPrototype:  "View Prototype",
      sortOptions:    ["Newest", "Oldest"],
      projectOverview:"PROJECT OVERVIEW",
      workScope:      "Work Scope",
      bpmnAsIs:       "BPMN CURRENT STATE (AS-IS)",
      bpmnToBe:       "BPMN PROPOSED PROCESS (TO-BE)",
      demoVibe:       "VIBE CODING DEMO",
      figurePrefix:   "Figure:"
    },

    analysis: {
      wonderwood: {
        bannerTitle: "ERP SYSTEM — WONDERWOOD CO., LTD.",
        bannerScope: "DOMAIN: B2B MANUFACTURING",
        descParts:   ["The system was built to ", "centralize the management of manufacturing, sales, HR, and finance operations on a single platform", ", supporting real-time data synchronization, streamlined operational workflows, and improved management efficiency across the enterprise."],
        scopeItems:  [
          { text: "Elicit and clarify requirements with business owners." },
          { text: "Design UI/UX prototypes for the manufacturing management module in Figma to visualize operational workflows and optimize user experience within the ERP system." }
        ]
      },
      namVietPhuong: {
        bannerTitle: "ERP SYSTEM — NAM VIET PHUONG CO., LTD.",
        bannerScope: "DOMAIN: B2C MANUFACTURING",
        descParts:   ["The system was built to ", "centralize the management of manufacturing, sales, HR, and finance operations on a single platform", ", supporting real-time data synchronization, streamlined operational workflows, and improved management efficiency across the enterprise."],
        scopeItems:  [
          { pre: "Prepared a structured survey question list to elicit, gather, and clarify business requirements for ", highlight: "the sales and HR management modules", post: " with business owners." }
        ]
      },
      yummy: {
        bannerTitle: "ERP SYSTEM — YUMMY SINGAPORE TOFU BRAND",
        bannerScope: "DOMAIN: FOOD & BEVERAGE",
        descParts:   ["The system was built to ", "centralize the management of manufacturing, sales, HR, and finance operations on a single platform", ", supporting real-time data synchronization, streamlined operational workflows, and improved management efficiency across the enterprise."],
        scopeItems:  [
          { pre: "Prepared a structured survey question list to elicit, gather, and clarify business requirements for ", highlight: "the finance management module", post: " with business owners." }
        ]
      },
      theShea: {
        bannerTitle: "ERP SYSTEM — THE SHEA CO., LTD.",
        bannerScope: "DOMAIN: WAREHOUSE MANAGEMENT",
        descParts:   ["The system was built to support real-time tracking and ", "management of product locations on display shelves and storage racks", ", optimizing inventory and arrangement workflows while improving goods management efficiency at The Shea fashion brand's store."],
        scopeItems:  [
          { text: "Elicit and clarify warehouse and goods management requirements with the fashion store owner." }
        ]
      }
    },

    modeling: {
      wonderwood: {
        bannerTitle: "ERP SYSTEM — WONDERWOOD CO., LTD.",
        bannerScope: "DOMAIN: B2B MANUFACTURING",
        descParts:   ["The system was built to ", "centralize the management of manufacturing, sales, HR, and finance operations on a single platform", ", supporting real-time data synchronization, streamlined operational workflows, and improved management efficiency across the enterprise."],
        scopeItem:   "Designed the ERP system through requirements analysis and the application of system modeling tools",
        captions: {
          bpmnAsIs:   "Figure: BPMN As-Is Diagram — Manufacturing Management Module",
          bpmnToBe:   "Figure: BPMN To-Be Diagram — Manufacturing Management Module",
          userStories:"Figure: User Stories Table by User Role",
          ucOverview: "Figure: Overall Use Case Diagram",
          ucDetails:  ["Figure: Level 1 Use Case Diagram", "Figure: Level 2 Use Case Diagram", "Figure: Level 3 Use Case Diagram"],
          ucAlt:      ["Level 1 UC Diagram", "Level 2 UC Diagram", "Level 3 UC Diagram"],
          ucs:        "Figure: UCS Specification Table — Add New Order Feature",
          sd:         ["Figure: Sequence Diagram — Add New Order Feature", "Figure: Sequence Diagram — Add Account Feature"],
          dfdContext: "Figure: Context-Level DFD Diagram",
          dfdLevel0:  "Figure: Level-0 DFD Diagram",
          erd:        "Figure: ERD Diagram — Sales Management Module"
        }
      },
      namVietPhuong: {
        bannerTitle: "ERP SYSTEM — NAM VIET PHUONG CO., LTD.",
        bannerScope: "DOMAIN: B2C MANUFACTURING",
        descParts:   ["The system was built to ", "centralize the management of manufacturing, sales, HR, and finance operations on a single platform", ", supporting real-time data synchronization, streamlined operational workflows, and improved management efficiency across the enterprise."],
        scopeItem:   "Analyzed and described the functions of the sales and HR management modules in the ERP system through Use Case (UC) diagrams.",
        captions: {
          ucSales: "Figure: Use Case Diagram — Sales Management Module",
          ucHR:    "Figure: Use Case Diagram — HR Management Module"
        }
      },
      theShea: {
        bannerTitle: "ERP SYSTEM — THE SHEA CO., LTD.",
        bannerScope: "DOMAIN: WAREHOUSE MANAGEMENT",
        descParts:   ["The system was built to support real-time tracking and ", "management of product locations on display shelves and storage racks", ", optimizing inventory and arrangement workflows while improving goods management efficiency at The Shea fashion brand's store."],
        scopeItem:   "Participated in the development of an ERP system, responsible for analyzing and documenting warehouse location and product display management features using business analysis artifacts.",
        captions: {
          uc:  "Figure: Use Case Diagram",
          ucs: "Figure: UCS Specification Table — Add New Shelf Feature",
          ad:  "Figure: Activity Diagram — Filter Inventory by Color and Size Feature"
        }
      },
      ai: {
        bannerTitle: "AGENTIC AI INVESTMENT ADVISORY SYSTEM",
        bannerScope: "DOMAIN: AI AGENT",
        descParts:   ["The system was built to support ", "automated management of financial investment activities", " through market data monitoring, investment opportunity analysis, and automated trade execution based on selected strategies — enhancing portfolio management efficiency and optimizing the investment workflow."],
        scopeItem:   "Analyzed and modeled the system to clarify market data management workflows, investor-system interaction flows, and the processing pipeline from data analysis to automated trade execution.",
        captions: {
          bpmn:       ["Figure: BPMN Diagram — User Management Feature", "Figure: BPMN Diagram — Stock Data Management Feature", "Figure: BPMN Diagram — Investment Management Feature"],
          ucOverview: "Figure: Overall Use Case Diagram",
          ucLevel2:   "Figure: Level-2 Use Case Diagram",
          ucs:        "Figure: UCS Specification Table — View Investment Portfolio Feature",
          ad:         "Figure: Activity Diagram — View Investment Portfolio Feature",
          dfdContext: "Figure: Context-Level DFD Diagram",
          dfdLevel0:  "Figure: Level-0 DFD Diagram"
        }
      }
    },

    vibe: {
      wonderwood: {
        bannerTitle: "ERP SYSTEM — WONDERWOOD CO., LTD.",
        bannerScope: "DOMAIN: B2B MANUFACTURING",
        descParts:   ["The system was built to ", "centralize the management of manufacturing, sales, HR, and finance operations on a single platform", ", supporting real-time data synchronization, streamlined operational workflows, and improved management efficiency across the enterprise."],
        scopeItem:   "Built AI-powered demos for key functions of the manufacturing management module based on completed analysis and design documents, including: material group management, material management, supplier management, and production plan management.",
        videoCaption:"Video: Feature Demo on Web (Vibe Coding)"
      }
    },

    figma: {
      breadcrumbTitle: "UX/UI DESIGN",
      projects: [
        { name: "ERP SYSTEM — WONDERWOOD CO., LTD.",               system: "Domain: B2B Manufacturing",      scope: "Scope: Manufacturing Management",    description: "Designed Figma UI/UX prototypes for the manufacturing management module in the ERP system to simulate operational workflows, visualize business processes, and optimize user experience." },
        { name: "ERP SYSTEM — NAM VIET PHUONG CO., LTD.",          system: "Domain: B2C Manufacturing",      scope: "Scope: Sales & HR Management",       description: "Designed Figma UI/UX prototypes for the sales and HR management modules in the ERP system to simulate operational workflows, visualize business processes, and optimize user experience." },
        { name: "ERP SYSTEM — YUMMY SINGAPORE TOFU BRAND",         system: "Food & Beverage (F&B)",  scope: "Scope: Finance Management",          description: "Designed Figma UI/UX prototypes for the finance management module to visualize operational workflows and optimize user experience within the ERP system." },
        { name: "ERP SYSTEM — THE SHEA CO., LTD.",                  system: "Domain: Warehouse Management",   scope: "Scope: Warehouse & Goods Management",description: "Designed Figma prototypes for warehouse location and product display management features to simulate user interfaces and workflows within the system." }
      ],
      wonderwood: {
        bannerTitle: "ERP SYSTEM — WONDERWOOD CO., LTD.",
        bannerScope: "DOMAIN: B2B MANUFACTURING",
        descParts:   ["The system was built to ", "centralize the management of manufacturing, sales, HR, and finance operations on a single platform", ", supporting real-time data synchronization, streamlined operational workflows, and improved management efficiency across the enterprise."],
        scopeItem:   "Designed UX/UI for the <span class=\"text-blue-600 font-semibold\">manufacturing management module</span> of the ERP system through wireframing, user flow mapping, and interactive prototyping in Figma.",
        captions:    ["Figure: Login Page Interface", "Figure: Dashboard Page Interface", "Figure: List Page — Production Plan Management Feature", "Figure: Add New Page — Production Plan Management Feature"]
      },
      namVietPhuong: {
        bannerTitle: "ERP SYSTEM — NAM VIET PHUONG CO., LTD.",
        bannerScope: "DOMAIN: B2C MANUFACTURING",
        descParts:   ["The system was built to ", "centralize the management of manufacturing, sales, HR, and finance operations on a single platform", ", supporting real-time data synchronization, streamlined operational workflows, and improved management efficiency across the enterprise."],
        scopeItem:   "Designed UX/UI for the <span class=\"text-blue-600 font-semibold\">sales and HR management modules</span> of the ERP system through wireframing, user flow mapping, and interactive prototyping in Figma.",
        captions:    ["Figure: List Page — Attendance Management Feature", "Figure: Edit Info Page — Attendance Management Feature", "Figure: Add New Page — Order Management Feature", "Figure: Add New Page — Wholesale Data Management Feature"]
      },
      yummy: {
        bannerTitle: "ERP SYSTEM — YUMMY SINGAPORE TOFU BRAND",
        bannerScope: "DOMAIN: FOOD & BEVERAGE",
        descParts:   ["The system was built to ", "centralize the management of manufacturing, sales, HR, and finance operations on a single platform", ", supporting real-time data synchronization, streamlined operational workflows, and improved management efficiency across the enterprise."],
        scopeItem:   "Designed UX/UI for the <span class=\"text-blue-600 font-semibold\">finance management module</span> of the ERP system through wireframing, user flow mapping, and interactive prototyping in Figma.",
        captions:    ["Figure: Dashboard Page Interface", "Figure: List Page — Fund Management Feature", "Figure: List Page — Supplier Debt Management Feature", "Figure: Add New Page — Receipt Voucher Management Feature"]
      },
      theShea: {
        bannerTitle: "ERP SYSTEM — THE SHEA CO., LTD.",
        bannerScope: "DOMAIN: WAREHOUSE MANAGEMENT",
        descParts:   ["The system was built to support real-time tracking and ", "management of product locations on display shelves and storage racks", ", optimizing inventory and arrangement workflows while improving goods management efficiency at The Shea fashion brand's store."],
        scopeItem:   "Designed Figma prototypes for warehouse location and product display management features to simulate user interfaces and workflows within the system.",
        caption:     "Figure: Inventory Location Management System Interface"
      }
    }
  }
};


/* ────────────────────────────────────────────────────────────────
   ④ _build(lang) — Ghép _SHARED + _TEXT[lang] → đối tượng đầy đủ
──────────────────────────────────────────────────────────────── */
function _build(lang) {
  var t = _TEXT[lang];

  var skillItems = _SHARED.skillItems.map(function(base, i) {
    var textItem = t.skills.items[i] || {};
    var projects = base.projects.map(function(bp, pi) {
      var tp = (textItem.projects || [])[pi] || {};
      return Object.assign({}, bp, tp);
    });
    return Object.assign({}, base, textItem, { projects: projects });
  });

  var contactItems = _SHARED.contactItems.map(function(base, i) {
    var tp = (t.contact.items || [])[i] || {};
    return Object.assign({}, base, tp);
  });

  return {
    nav:     t.nav,
    hero:    t.hero,
    about:   t.about,
    skills:  Object.assign({}, t.skills, { items: skillItems }),
    contact: Object.assign({}, t.contact, { items: contactItems })
  };
}

/* ────────────────────────────────────────────────────────────────
   ⑤ _buildDetail(lang) — Ghép _SHARED.figmaProjects + _DETAIL_TEXT[lang]
──────────────────────────────────────────────────────────────── */
function _buildDetail(lang) {
  var dc = _DETAIL_TEXT[lang];

  var figmaProjects = _SHARED.figmaProjects.map(function(base, i) {
    var tp = (dc.figma.projects || [])[i] || {};
    return Object.assign({}, base, tp);
  });

  return Object.assign({}, dc, {
    figma: Object.assign({}, dc.figma, { projects: figmaProjects })
  });
}


/* ────────────────────────────────────────────────────────────────
   Export — gán vào window để React app sử dụng (API không đổi)
──────────────────────────────────────────────────────────────── */
window.PORTFOLIO_DATA = {
  vi: _build('vi'),
  en: _build('en')
};

window.DETAIL_CONTENT = {
  vi: _buildDetail('vi'),
  en: _buildDetail('en')
};
