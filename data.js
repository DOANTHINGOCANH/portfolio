window.PORTFOLIO_DATA = {

  /* ============================  TIẾNG VIỆT  ============================ */
  vi: {
    nav: ["Trang chủ", "Giới thiệu", "Kỹ năng", "Liên hệ"],

    hero: {
      tagline:     "XIN CHÀO, TÔI LÀ",
      name:        "Đoàn Thị Ngọc Ánh",
      title:       "Business Analyst",
      description: "Tôi là một Business Analyst yêu thích phân tích nghiệp vụ, làm rõ yêu cầu hệ thống và kết nối các bên liên quan để tạo ra giá trị cho tổ chức. Với tinh thần chủ động và học hỏi liên tục, tôi đang từng bước phát triển năng lực để trở thành Middle Business Analyst trong 1–2 năm tới.",
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
      fields:     ["SẢN XUẤT B2B", "SẢN XUẤT B2C", "THỰC PHẨM & ĐỒ UỐNG", "QUẢN LÝ KHO VẬN", "AI AGENT & TỰ ĐỘNG HÓA"],
      cvLink:     "./ngocanh_tv.pdf",
      btnCV:      "Tải xuống CV"
    },

    skills: {
      title: "KỸ NĂNG",
      items: [
        {
          id: 2,
          iconType:    "modeling",
          icon:        '<i class="bi bi-gear-fill"></i>',
          title:       "Thiết kế Hệ thống",
          tags:        ["BPMN", "User stories", "UC", "UCS", "AD", "SD", "DFD", "ERD"],
          description: "Có kinh nghiệm xây dựng User Stories và mô hình hóa quy trình nghiệp vụ, hệ thống bằng BPMN, UML, DFD và ERD nhằm làm rõ yêu cầu, trực quan hóa luồng xử lý, tương tác hệ thống và cấu trúc dữ liệu. Hỗ trợ hiệu quả cho quá trình phân tích, thiết kế và phát triển giải pháp.",
          borderColor: "border-emerald-400",
          hasButton:   true,
          projects: [
            {
              name:        "HỆ THỐNG ERP - CÔNG TY TNHH WONDERWOOD",
              system:      "Sản xuất B2B",
              scope:       "Phạm vi: Toàn bộ hệ thống",
              description: "Thiết kế hệ thống ERP thông qua việc phân tích yêu cầu và sử dụng các công cụ mô hình hóa nhằm trực quan hóa quy trình nghiệp vụ, luồng xử lý, tương tác hệ thống và cấu trúc dữ liệu phục vụ phân tích và phát triển giải pháp.",
              tags:        ["BPMN", "User Stories", "UC", "UCS", "SD", "DFD", "ERD"],
              logo:        "./go_logo.png",
              href:        "#wonderwood-detail"
            },
            {
              name:        "HỆ THỐNG ERP - CÔNG TY TNHH NAM VIỆT PHƯƠNG",
              system:      "Sản xuất B2C",
              scope:       "Phạm vi: Quản lý bán hàng & nhân sự",
              description: "Phân tích và mô tả các chức năng của phân hệ quản lý bán hàng và nhân sự trong hệ thống ERP thông qua sơ đồ Use Case (UC).",
              tags:        ["UC"],
              logo:        "./yen_logo.png",
              href:        "#namvietphuong-detail"
            },
            {
              name:        "HỆ THỐNG QUẢN LÝ VỊ TRÍ HÀNG HÓA - THE SHEA",
              system:      "Quản lý kho vận",
              scope:       "Phạm vi: Quản lý kho & hàng hóa",
              description: "Phân tích và mô tả các chức năng cho hệ thống quản lý vị trí hàng hóa thông qua các công cụ nhằm làm rõ luồng nghiệp vụ và tương tác giữa người dùng với hệ thống.",
              tags:        ["UC", "UCS", "AD"],
              logo:        "./shea_logo.jpg",
              href:        "#theshea-detail"
            },
            {
              name:        "HỆ THỐNG AGENTIC AI ĐẦU TƯ TÀI CHÍNH TỰ ĐỘNG",
              system:      "AI Agent & Tự động hóa",
              scope:       "Phạm vi: Toàn bộ hệ thống",
              description: "Phân tích và mô tả hệ thống nhằm làm rõ quy trình quản lý dữ liệu thị trường, tương tác giữa nhà đầu tư và hệ thống, cùng luồng xử lý từ phân tích dữ liệu đến thực hiện giao dịch đầu tư tự động.",
              tags:        ["BPMN", "UC", "UCS", "AD", "DFD"],
              logo:        "./ailogo.jpg",
              href:        "#ai-detail"
            }
          ]
        },
        {
          id: 3,
          iconType:    "design",
          icon:        "./figma.png",
          title:       "Thiết kế UX/UI",
          tags:        ["Figma"],
          description: "Thành thạo thiết kế UX/UI bằng Figma để tạo wireframe, luồng người dùng và prototype tương tác. Tập trung tạo trải nghiệm trực quan, phù hợp với nhu cầu người dùng và mục tiêu kinh doanh, đồng thời hỗ trợ hiệu quả cho việc xác thực yêu cầu và kiểm thử khả năng sử dụng ngay từ giai đoạn đầu.",
          borderColor: "border-orange-400",
          hasButton:   true
        },
        {
          id: 6,
          iconType:    "vibe",
          icon:        '<i class="bi bi-code"></i>',
          title:       "Vibe Coding",
          tags:        [],
          description: "Ứng dụng AI để chuyển đổi các tài liệu phân tích và thiết kế hệ thống thành các bản demo chức năng trên môi trường local. Hỗ trợ trực quan hóa giải pháp, xác nhận yêu cầu với stakeholder và giúp người dùng hình dung rõ hơn về sản phẩm trước khi bước vào giai đoạn phát triển chính thức.",
          borderColor: "border-green-500",
          hasButton:   true,
          projects: [
            {
              name:        "HỆ THỐNG ERP - CÔNG TY TNHH WONDERWOOD",
              system:      "Sản xuất B2B",
              scope:       "Phạm vi: Quản lý sản xuất",
              description: "Xây dựng demo một số chức năng của phân hệ quản lý sản xuất bằng AI dựa trên các tài liệu phân tích và thiết kế đã hoàn thiện. Giúp trực quan hóa quy trình nghiệp vụ, hỗ trợ stakeholder đánh giá giải pháp và hình dung rõ hơn về hệ thống trước khi phát triển chính thức.",
              tags:        [],
              logo:        "./go_logo.png",
              href:        "#wonderwood-vibe"
            }
          ]
        },
        {
          id: 1,
          iconType:    "analysis",
          icon:        '<i class="bi bi-file-earmark-text"></i>',
          title:       "Khơi gợi & Thu thập yêu cầu",
          tags:        [],
          description: "Có nền tảng vững chắc trong việc thu thập, phân tích và làm rõ yêu cầu nghiệp vụ thông qua trao đổi và phối hợp với các bên liên quan. Thành thạo trong việc xác định nhu cầu, làm rõ phạm vi và đảm bảo sự đồng thuận về mục tiêu cũng như giải pháp đề xuất. Từ đó xây dựng các tài liệu như BRD, PRD và SRS chất lượng, hỗ trợ đội ngũ phát triển hiểu đúng yêu cầu và triển khai giải pháp hiệu quả.",
          borderColor: "border-blue-500",
          hasButton:   false,
          projects: [
            {
              name:        "CÔNG TY TNHH WONDERWOOD",
              system:      "Hệ thống ERP",
              scope:       "Phạm vi: Toàn bộ hệ thống",
              description: "Phân tích nghiệp vụ và tham gia xây dựng các phân hệ bán hàng và nhân sự cho hệ thống ERP của doanh nghiệp hoạt động trong lĩnh vực cung cấp và phân phối sản phẩm từ yến Việt, hỗ trợ quản lý vận hành và tối ưu quy trình kinh doanh.",
              tags:        ["Khơi gợi & Thu thập yêu cầu", "BRD", "SRS", "User stories"],
              logo:        "./go_logo.png"
            },
            {
              name:        "CÔNG TY TNHH NAM VIỆT PHƯƠNG",
              system:      "Hệ thống ERP",
              scope:       "Phạm vi: Quản lý bán hàng & nhân sự",
              description: "Phân tích nghiệp vụ và tham gia xây dựng các phân hệ bán hàng và nhân sự cho hệ thống ERP của doanh nghiệp hoạt động trong lĩnh vực cung cấp và phân phối sản phẩm từ yến Việt, hỗ trợ quản lý vận hành và tối ưu quy trình kinh doanh.",
              tags:        ["Khơi gợi & Thu thập yêu cầu"],
              logo:        "./yen_logo.png"
            },
            {
              name:        "THƯƠNG HIỆU TÀU HỦ SINGAPORE YUMMY",
              system:      "Hệ thống ERP",
              scope:       "Phạm vi: Quản lý tài chính",
              description: "Phân tích nghiệp vụ và tham gia xây dựng phân hệ tài chính cho hệ thống ERP của thương hiệu chuyên cung cấp tàu hủ tươi, hỗ trợ quản lý thu chi và theo dõi hoạt động kinh doanh.",
              tags:        ["Khơi gợi & Thu thập yêu cầu"],
              logo:        "./yummy_logo.jpg"
            },
            {
              name:        "THƯƠNG HIỆU THỜI TRANG THE SHEA",
              system:      "Hệ thống quản lý vị trí hàng hóa",
              scope:       "Phạm vi: Quản lý kho & hàng hóa",
              description: "Phân tích nghiệp vụ và tham gia xây dựng phân hệ quản lý kho và hàng hóa cho thương hiệu thời trang The Shea, hỗ trợ theo dõi vị trí hàng hóa trên kệ trưng bày và kệ kho.",
              tags:        ["Khơi gợi & Thu thập yêu cầu"],
              logo:        "./shea_logo.jpg"
            }
          ]
        },
        {
          id: 4,
          iconType:    "agile",
          icon:        "./agile.png",
          title:       "Agile / Scrum",
          tags:        [],
          description: "Hiểu rõ các nguyên tắc làm việc trong môi trường Agile và Scrum. Có kinh nghiệm phối hợp với các nhóm đa chức năng để mang lại hiệu quả hoạt động thông qua các hoạt động lập kế hoạch sprint, đánh giá và cải tiến sau mỗi vòng lặp.",
          borderColor: "border-blue-400",
          hasButton:   false
        },
        {
          id: 5,
          iconType:    "soft",
          icon:        "portfolio_ngocanh/testing.png",
          title:       "KIỂM THỬ",
          tags:        [],
          description: "Có kiến thức và kinh nghiệm trong việc xây dựng kịch bản kiểm thử, thực hiện kiểm thử chức năng (Functional Testing) và kiểm thử chấp nhận người dùng (UAT) nhằm đảm bảo hệ thống đáp ứng đầy đủ yêu cầu nghiệp vụ. Thành thạo trong việc xác minh kết quả, phát hiện lỗi, theo dõi quá trình khắc phục và phối hợp với đội ngũ phát triển để đảm bảo chất lượng sản phẩm trước khi triển khai.",
          borderColor: "border-emerald-400",
          hasButton:   false
        }
      ]
    },

    contact: {
      title1: "THÔNG TIN",
      title2: "LIÊN HỆ",
      items: [
        { iconType: "email",    icon: '<i class="bi bi-envelope-fill"></i>',  label: "Email",      value: "doana838@gmail.com",           href: "mailto:doana838@gmail.com" },
        { iconType: "phone",    icon: '<i class="bi bi-telephone-fill"></i>', label: "Điện thoại", value: "035 569 8767",                 href: "tel:0355698767" },
        { iconType: "linkedin", icon: '<i class="bi bi-linkedin"></i>',       label: "LinkedIn",   value: "linkedin.com/in/ngocanh-doan", href: "https://www.linkedin.com/in/ánh-đoàn-76251b2b6/" }
      ]
    }
  },

  /* ==============================  ENGLISH  ============================= */
  en: {
    nav: ["Home", "About", "Skills", "Contact"],

    hero: {
      tagline:     "HELLO, I AM",
      name:        "Doan Thi Ngoc Anh",
      title:       "Business Analyst",
      description: "I am a Business Analyst passionate about understanding business needs, clarifying system requirements, and delivering value-driven solutions. With a proactive mindset and continuous learning, I am working toward becoming a Middle Business Analyst within the next 1–2 years.",
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
      fields:     ["B2B Manufacturing", "B2C Manufacturing", "Food & Beverage (F&B)", "Warehouse Management", "AI Agents & Automation"],
      cvLink:     "./ngocanh_ta.pdf",
      btnCV:      "Download CV"
    },

    skills: {
      title: "SKILLS",
      items: [
        {
          id: 2,
          iconType:    "modeling",
          icon:        '<i class="bi bi-gear-fill"></i>',
          title:       "System Modeling",
          tags:        ["BPMN", "User Stories", "UC", "UCS", "AD", "SD", "DFD", "ERD"],
          description: "Experienced in building User Stories and modeling business processes and systems using BPMN, UML, DFD, and ERD to clarify requirements, visualize processing flows, system interactions, and data structures. Effectively supports analysis, design, and solution development.",
          borderColor: "border-emerald-400",
          hasButton:   true,
          projects: [
            {
              name:        "ERP SYSTEM — WONDERWOOD CO., LTD.",
              system:      "B2B Manufacturing",
              scope:       "Scope: Full System",
              description: "Designed the ERP system through requirements analysis and the application of modeling tools to visualize business processes, processing flows, system interactions, and data structures for analysis and solution development.",
              tags:        ["BPMN", "User Stories", "UC", "UCS", "SD", "DFD", "ERD"],
              logo:        "./go_logo.png",
              href:        "#wonderwood-detail"
            },
            {
              name:        "ERP SYSTEM — NAM VIET PHUONG CO., LTD.",
              system:      "B2C Manufacturing",
              scope:       "Scope: Sales & HR Management",
              description: "Analyzed and described the functions of the sales and HR management modules in the ERP system through Use Case (UC) diagrams.",
              tags:        ["UC"],
              logo:        "./yen_logo.png",
              href:        "#namvietphuong-detail"
            },
            {
              name:        "INVENTORY LOCATION MGMT SYSTEM — THE SHEA",
              system:      "Warehouse Management",
              scope:       "Scope: Warehouse & Goods Management",
              description: "Analyzed and described system functions for the inventory location management system using modeling tools to clarify business flows and user-system interactions.",
              tags:        ["UC", "UCS", "AD"],
              logo:        "./shea_logo.jpg",
              href:        "#theshea-detail"
            },
            {
              name:        "AUTOMATED FINANCIAL INVESTMENT AGENTIC AI SYSTEM",
              system:      "AI Agent & Automation",
              scope:       "Scope: Full System",
              description: "Analyzed and modeled the system to clarify market data management workflows, investor-system interactions, and the processing pipeline from data analysis to automated investment execution.",
              tags:        ["BPMN", "UC", "UCS", "AD", "DFD"],
              logo:        "./ailogo.jpg",
              href:        "#ai-detail"
            }
          ]
        },
        {
          id: 3,
          iconType:    "design",
          icon:        "./figma.png",
          title:       "UX/UI Design",
          tags:        ["Figma"],
          description: "Proficient in UX/UI design using Figma to create wireframes, user flows, and interactive prototypes. Focused on creating intuitive experiences aligned with user needs and business goals, while effectively supporting requirement validation and usability testing from the early stages.",
          borderColor: "border-orange-400",
          hasButton:   true
        },
        {
          id: 6,
          iconType:    "vibe",
          icon:        '<i class="bi bi-code"></i>',
          title:       "Vibe Coding",
          tags:        [],
          description: "Leverages AI to transform analysis and system design documents into functional demos on a local environment. Supports solution visualization, stakeholder requirement validation, and helps users develop a clearer understanding of the product prior to entering the formal development phase.",
          borderColor: "border-green-500",
          hasButton:   true,
          projects: [
            {
              name:        "ERP SYSTEM — WONDERWOOD CO., LTD.",
              system:      "B2B Manufacturing",
              scope:       "Scope: Manufacturing Management",
              description: "Built AI-powered demos for key functions of the manufacturing management module based on completed analysis and design documents. Supported visualization of business workflows, enabled stakeholder evaluation, and provided a clearer picture of the system prior to formal development.",
              tags:        [],
              logo:        "./go_logo.png",
              href:        "#wonderwood-vibe"
            }
          ]
        },
        {
          id: 1,
          iconType:    "analysis",
          icon:        '<i class="bi bi-file-earmark-text"></i>',
          title:       "Business Analysis",
          tags:        ["Elicitation & Requirements Gathering", "BRD", "SRS", "User Story"],
          description: "Strong foundation in gathering, analyzing, and clarifying business requirements through stakeholder engagement to ensure alignment and consistency in goals and solutions. Proficient in producing documents such as BRD, SRS, and User Story to clearly and consistently describe system requirements.",
          borderColor: "border-blue-500",
          hasButton:   true,
          projects: [
            {
              name:        "WONDERWOOD CO., LTD.",
              system:      "ERP System",
              scope:       "Scope: Full System",
              description: "Conducted business analysis and contributed to building the sales and HR modules for the ERP system of a plywood manufacturing enterprise, supporting operational management and business process optimization.",
              tags:        ["Elicitation & Requirements Gathering", "BRD", "SRS", "User Stories"],
              logo:        "./go_logo.png"
            },
            {
              name:        "NAM VIET PHUONG CO., LTD.",
              system:      "ERP System",
              scope:       "Scope: Sales & HR Management",
              description: "Conducted business analysis and contributed to building the sales and HR modules for the ERP system of an enterprise specializing in the supply and distribution of Vietnamese bird's nest products, supporting operational management and business process optimization.",
              tags:        ["Elicitation & Requirements Gathering"],
              logo:        "./yen_logo.png"
            },
            {
              name:        "YUMMY SINGAPORE TOFU BRAND",
              system:      "ERP System",
              scope:       "Scope: Finance Management",
              description: "Conducted business analysis and contributed to building the finance module for the ERP system of a brand specializing in fresh tofu products, supporting revenue and expense tracking and business activity monitoring.",
              tags:        ["Elicitation & Requirements Gathering"],
              logo:        "./yummy_logo.jpg"
            },
            {
              name:        "THE SHEA FASHION BRAND",
              system:      "Inventory Location Mgmt System",
              scope:       "Scope: Warehouse & Goods Management",
              description: "Conducted business analysis and contributed to building the warehouse and goods management module for The Shea fashion brand, supporting real-time tracking of product locations on display shelves and storage racks.",
              tags:        ["Elicitation & Requirements Gathering"],
              logo:        "./shea_logo.jpg"
            }
          ]
        },
        {
          id: 4,
          iconType:    "agile",
          icon:        "./agile.png",
          title:       "Agile / Scrum",
          tags:        [],
          description: "Well-versed in Agile and Scrum principles. Experienced in collaborating with cross-functional teams to drive operational efficiency through sprint planning, reviews, and retrospectives.",
          borderColor: "border-blue-400",
          hasButton:   false
        },
        {
          id: 5,
          iconType:    "soft",
          icon:        '<i class="bi bi-people-fill"></i>',
          title:       "Soft Skills",
          tags:        [],
          description: "Capable of communicating and coordinating effectively with stakeholders throughout teamwork. Proactively self-learning, with strong analytical thinking and flexibility in problem-solving to deliver quality results aligned with project goals.",
          borderColor: "border-emerald-400",
          hasButton:   false
        }
      ]
    },

    contact: {
      title1: "CONTACT",
      title2: "INFORMATION",
      items: [
        { iconType: "email",    icon: '<i class="bi bi-envelope-fill"></i>',  label: "Email",    value: "doana838@gmail.com",           href: "mailto:doana838@gmail.com" },
        { iconType: "phone",    icon: '<i class="bi bi-telephone-fill"></i>', label: "Phone",    value: "035 569 8767",                 href: "tel:0355698767" },
        { iconType: "linkedin", icon: '<i class="bi bi-linkedin"></i>',       label: "LinkedIn", value: "linkedin.com/in/ngocanh-doan", href: "https://www.linkedin.com/in/ánh-đoàn-76251b2b6/" }
      ]
    }
  }

};

/* ================================================================
   DETAIL_CONTENT — toàn bộ text cho các trang chi tiết (SkillDetail,
   FigmaDetail). Cấu trúc song song VI/EN để dễ cập nhật tương lai.
================================================================ */
window.DETAIL_CONTENT = {

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
      figurePrefix:   "Hình ảnh:",
    },

    analysis: {
      wonderwood: {
        bannerTitle: "HỆ THỐNG ERP - CÔNG TY TNHH WONDERWOOD",
        bannerScope: "PHẠM VI: TOÀN BỘ HỆ THỐNG",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItems:  [
          { text: "Khơi gợi và làm rõ yêu cầu với chủ doanh nghiệp." },
          { text: "Thiết kế prototype giao diện cho phân hệ quản lý sản xuất bằng Figma nhằm trực quan hóa quy trình thao tác và tối ưu trải nghiệm người dùng trong hệ thống ERP." }
        ]
      },
      namVietPhuong: {
        bannerTitle: "HỆ THỐNG ERP - CÔNG TY TNHH NAM VIỆT PHƯƠNG",
        bannerScope: "PHẠM VI: QUẢN LÝ BÁN HÀNG & NHÂN SỰ",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItems:  [
          { pre: "Chuẩn bị danh sách câu hỏi khảo sát nhằm khơi gợi, thu thập và làm rõ yêu cầu nghiệp vụ cho ", highlight: "phân hệ bán hàng và nhân sự", post: " với chủ doanh nghiệp." }
        ]
      },
      yummy: {
        bannerTitle: "HỆ THỐNG ERP - THƯƠNG HIỆU TÀU HỦ SINGAPORE YUMMY",
        bannerScope: "PHẠM VI: QUẢN LÝ TÀI CHÍNH",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItems:  [
          { pre: "Chuẩn bị danh sách câu hỏi khảo sát nhằm khơi gợi, thu thập và làm rõ yêu cầu nghiệp vụ cho ", highlight: "phân hệ tài chính", post: " với chủ doanh nghiệp." }
        ]
      },
      theShea: {
        bannerTitle: "HỆ THỐNG QUẢN LÝ VỊ TRÍ HÀNG HÓA - THE SHEA",
        bannerScope: "PHẠM VI: QUẢN LÝ KHO VÀ HÀNG HÓA",
        descParts:   ["Hệ thống được xây dựng nhằm hỗ trợ theo dõi, ", "quản lý vị trí sản phẩm trên kệ trưng bày và kệ kho", " theo thời gian thực, tối ưu quy trình kiểm kê, sắp xếp và nâng cao hiệu quả quản lý hàng hóa trong cửa hàng cho thương hiệu thời trang The Shea."],
        scopeItems:  [
          { text: "Khơi gợi và làm rõ yêu cầu nghiệp vụ quản lý kho và hàng hóa với chủ cửa hàng thời trang." }
        ]
      }
    },

    modeling: {
      wonderwood: {
        bannerTitle: "HỆ THỐNG ERP - CÔNG TY TNHH WONDERWOOD",
        bannerScope: "PHẠM VI: TOÀN BỘ HỆ THỐNG",
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
        bannerScope: "PHẠM VI: QUẢN LÝ BÁN HÀNG & NHÂN SỰ",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItem:   "Phân tích và mô tả các chức năng của phân hệ quản lý bán hàng và nhân sự trong hệ thống ERP thông qua sơ đồ Use Case (UC).",
        captions: {
          ucSales: "Hình ảnh: Sơ đồ Use Case - Phân hệ Quản lý bán hàng",
          ucHR:    "Hình ảnh: Sơ đồ Use Case - Phân hệ Quản lý nhân sự"
        }
      },
      theShea: {
        bannerTitle: "HỆ THỐNG QUẢN LÝ VỊ TRÍ HÀNG HÓA - THE SHEA",
        bannerScope: "PHẠM VI: QUẢN LÝ KHO VÀ HÀNG HÓA",
        descParts:   ["Hệ thống được xây dựng nhằm hỗ trợ theo dõi, ", "quản lý vị trí sản phẩm trên kệ trưng bày và kệ kho", " theo thời gian thực, tối ưu quy trình kiểm kê, sắp xếp và nâng cao hiệu quả quản lý hàng hóa trong cửa hàng cho thương hiệu thời trang The Shea."],
        scopeItem:   "Phân tích và mô tả các chức năng cho hệ thống quản lý vị trí hàng hóa thông qua các công cụ.",
        captions: {
          uc:  "Hình ảnh: Sơ đồ Use Case",
          ucs: "Hình ảnh: Bảng đặc tả UCS - Tính năng thêm mới giá kệ",
          ad:  "Hình ảnh: Sơ đồ AD - Tính năng Lọc vị trí hàng hóa theo màu và theo size"
        }
      },
      ai: {
        bannerTitle: "HỆ THỐNG AGENTIC AI ĐẦU TƯ TÀI CHÍNH TỰ ĐỘNG",
        bannerScope: "PHẠM VI: TOÀN BỘ HỆ THỐNG",
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
        bannerScope: "PHẠM VI: QUẢN LÝ SẢN XUẤT",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItem:   "Xây dựng demo một số chức năng của phân hệ quản lý sản xuất bằng AI dựa trên các tài liệu phân tích và thiết kế đã hoàn thiện, bao gồm: quản lý nhóm nguyên vật liệu, quản lý nguyên vật liệu, quản lý nhà cung cấp, quản lý kế hoạch sản xuất.",
        videoCaption:"Video: Demo chức năng trên web (Vibe Coding)"
      }
    },

    figma: {
      breadcrumbTitle: "THIẾT KẾ UX/UI",
      projects: [
        { name: "HỆ THỐNG ERP - CÔNG TY TNHH WONDERWOOD",               system: "Sản xuất B2B",       scope: "Phạm vi: Quản lý sản xuất",           description: "Thiết kế prototype giao diện bằng Figma cho phân hệ quản lý sản xuất trong hệ thống ERP nhằm mô phỏng quy trình thao tác, trực quan hóa luồng nghiệp vụ và tối ưu trải nghiệm người dùng trong quá trình vận hành hệ thống.",   tags: ["Figma"], logo: "./go_logo.png",    href: "#wonderwood-figma" },
        { name: "HỆ THỐNG ERP - CÔNG TY TNHH NAM VIỆT PHƯƠNG",          system: "Sản xuất B2C",       scope: "Phạm vi: Quản lý bán hàng & nhân sự", description: "Thiết kế prototype giao diện bằng Figma cho phân hệ quản lý bán hàng và nhân sự trong hệ thống ERP nhằm mô phỏng quy trình thao tác, trực quan hóa luồng nghiệp vụ và tối ưu trải nghiệm người dùng trong quá trình vận hành hệ thống.", tags: ["Figma"], logo: "./yen_logo.png",   href: "#namvietphuong-figma" },
        { name: "HỆ THỐNG ERP - THƯƠNG HIỆU TÀU HỦ SINGAPORE YUMMY",   system: "Thực phẩm & Đồ uống", scope: "Phạm vi: Quản lý tài chính",          description: "Thiết kế prototype giao diện cho phân hệ quản lý tài chính bằng Figma nhằm trực quan hóa quy trình thao tác và tối ưu trải nghiệm người dùng trong hệ thống ERP.",                                                                          tags: ["Figma"], logo: "./yummy_logo.jpg", href: "#yummy-figma" },
        { name: "HỆ THỐNG QUẢN LÝ VỊ TRÍ HÀNG HÓA - THE SHEA",         system: "Quản lý kho vận",    scope: "Phạm vi: Quản lý kho & hàng hóa",    description: "Thiết kế prototype bằng Figma cho hệ thống quản lý vị trí hàng hóa của The Shea nhằm mô phỏng giao diện và luồng thao tác quản lý kho, hàng hóa.",                                                                                           tags: ["Figma"], logo: "./shea_logo.jpg",  href: "#theshea-figma" }
      ],
      wonderwood: {
        bannerTitle: "HỆ THỐNG ERP - CÔNG TY TNHH WONDERWOOD",
        bannerScope: "PHẠM VI: QUẢN LÝ SẢN XUẤT",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItem:   "Thiết kế UX/UI cho phân hệ quản lý sản xuất thuộc hệ thống ERP thông qua việc xây dựng wireframe, luồng người dùng và prototype tương tác bằng Figma.",
        captions:    ["Hình ảnh: Giao diện trang đăng nhập", "Hình ảnh: Giao diện trang xem dashboard", "Hình ảnh: Giao diện trang danh sách - Tính năng quản lý kế hoạch sản xuất", "Hình ảnh: Giao diện trang thêm mới - Tính năng quản lý kế hoạch sản xuất"]
      },
      namVietPhuong: {
        bannerTitle: "HỆ THỐNG ERP - CÔNG TY TNHH NAM VIỆT PHƯƠNG",
        bannerScope: "PHẠM VI: QUẢN LÝ BÁN HÀNG & NHÂN SỰ",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItem:   "Thiết kế UX/UI cho phân hệ quản lý bán hàng và nhân sự thuộc hệ thống ERP thông qua việc xây dựng wireframe, luồng người dùng và prototype tương tác bằng Figma.",
        captions:    ["Hình ảnh: Giao diện trang danh sách - Tính năng quản lý chấm công", "Hình ảnh: Giao diện trang chỉnh sửa thông tin - Tính năng quản lý chấm công", "Hình ảnh: Giao diện trang thêm mới - Tính năng quản lý đơn hàng", "Hình ảnh: Giao diện trang thêm mới - Tính năng quản lý dữ liệu bán sỉ"]
      },
      yummy: {
        bannerTitle: "HỆ THỐNG ERP - THƯƠNG HIỆU TÀU HỦ SINGAPORE YUMMY",
        bannerScope: "PHẠM VI: QUẢN LÝ TÀI CHÍNH",
        descParts:   ["Hệ thống được xây dựng nhằm ", "quản lý tập trung các hoạt động sản xuất, bán hàng, nhân sự và tài chính trên cùng một nền tảng", ", hỗ trợ đồng bộ dữ liệu theo thời gian thực, tối ưu quy trình vận hành và nâng cao hiệu quả quản lý trong doanh nghiệp."],
        scopeItem:   "Thiết kế UX/UI cho phân hệ quản lý tài chính thuộc hệ thống ERP thông qua việc xây dựng wireframe, luồng người dùng và prototype tương tác bằng Figma.",
        captions:    ["Hình ảnh: Giao diện trang xem dashboard", "Hình ảnh: Giao diện trang xem danh sách - Tính năng quản lý nguồn quỹ", "Hình ảnh: Giao diện trang danh sách - Tính năng quản lý công nợ nhà cung cấp", "Hình ảnh: Giao diện trang thêm mới - Tính năng quản lý phiếu thu"]
      },
      theShea: {
        bannerTitle: "HỆ THỐNG QUẢN LÝ VỊ TRÍ HÀNG HÓA - THE SHEA",
        bannerScope: "PHẠM VI: QUẢN LÝ KHO VÀ HÀNG HÓA",
        descParts:   ["Hệ thống được xây dựng nhằm hỗ trợ theo dõi, ", "quản lý vị trí sản phẩm trên kệ trưng bày và kệ kho", " theo thời gian thực, tối ưu quy trình kiểm kê, sắp xếp và nâng cao hiệu quả quản lý hàng hóa trong cửa hàng cho thương hiệu thời trang The Shea."],
        scopeItem:   "Thiết kế UX/UI cho hệ thống quản lý vị trí hàng hóa của The Shea thông qua việc xây dựng wireframe, luồng người dùng và prototype tương tác bằng Figma.",
        caption:     "Hình ảnh: Giao diện hệ thống quản lý vị trí hàng hóa"
      }
    }
  },

  /* ==========================  ENGLISH  ========================= */
  en: {
    ui: {
      backBtn:        "Back",
      skillLabel:     "SKILL",
      projectsDone:   "Projects completed",
      viewDetail:     "View details",
      viewPrototype:  "View prototype",
      sortOptions:    ["Newest", "Oldest"],
      projectOverview:"PROJECT DESCRIPTION",
      workScope:      "Scope of work",
      bpmnAsIs:       "CURRENT STATE BPMN (AS-IS)",
      bpmnToBe:       "PROPOSED PROCESS BPMN (TO-BE)",
      demoVibe:       "VIBE CODING DEMO",
      figurePrefix:   "Figure:",
    },

    analysis: {
      wonderwood: {
        bannerTitle: "ERP SYSTEM — WONDERWOOD CO., LTD.",
        bannerScope: "SCOPE: FULL SYSTEM",
        descParts:   ["The system was built to ", "centrally manage manufacturing, sales, HR, and financial operations on a unified platform", ", supporting real-time data synchronization, streamlining operational processes, and enhancing management efficiency within the enterprise."],
        scopeItems:  [
          { text: "Elicited and clarified requirements with the business owner." },
          { text: "Designed interface prototypes for the manufacturing management module using Figma to visualize operational workflows and optimize the user experience within the ERP system." }
        ]
      },
      namVietPhuong: {
        bannerTitle: "ERP SYSTEM — NAM VIET PHUONG CO., LTD.",
        bannerScope: "SCOPE: SALES & HR MANAGEMENT",
        descParts:   ["The system was built to ", "centrally manage manufacturing, sales, HR, and financial operations on a unified platform", ", supporting real-time data synchronization, streamlining operational processes, and enhancing management efficiency within the enterprise."],
        scopeItems:  [
          { pre: "Prepared a survey questionnaire to elicit, gather, and clarify business requirements for the ", highlight: "sales and HR modules", post: " with the business owner." }
        ]
      },
      yummy: {
        bannerTitle: "ERP SYSTEM — YUMMY SINGAPORE TOFU BRAND",
        bannerScope: "SCOPE: FINANCE MANAGEMENT",
        descParts:   ["The system was built to ", "centrally manage manufacturing, sales, HR, and financial operations on a unified platform", ", supporting real-time data synchronization, streamlining operational processes, and enhancing management efficiency within the enterprise."],
        scopeItems:  [
          { pre: "Prepared a survey questionnaire to elicit, gather, and clarify business requirements for the ", highlight: "finance module", post: " with the business owner." }
        ]
      },
      theShea: {
        bannerTitle: "INVENTORY LOCATION MGMT SYSTEM — THE SHEA",
        bannerScope: "SCOPE: WAREHOUSE & GOODS MANAGEMENT",
        descParts:   ["The system was built to support ", "real-time tracking and management of product locations on display shelves and storage racks", ", optimizing inventory and arrangement processes, and enhancing goods management efficiency in-store for The Shea fashion brand."],
        scopeItems:  [
          { text: "Elicited and clarified warehouse and inventory management requirements with the fashion store owner." }
        ]
      }
    },

    modeling: {
      wonderwood: {
        bannerTitle: "ERP SYSTEM — WONDERWOOD CO., LTD.",
        bannerScope: "SCOPE: FULL SYSTEM",
        descParts:   ["The system was built to ", "centrally manage manufacturing, sales, HR, and financial operations on a unified platform", ", supporting real-time data synchronization, streamlining operational processes, and enhancing management efficiency within the enterprise."],
        scopeItem:   "Designed the ERP system through requirements analysis and the application of modeling tools",
        captions: {
          bpmnAsIs:   "Figure: Current State BPMN (As-Is) — Manufacturing Management Module",
          bpmnToBe:   "Figure: Proposed Process BPMN (To-Be) — Manufacturing Management Module",
          userStories:"Figure: User Stories table by user role",
          ucOverview: "Figure: Overview Use Case diagram",
          ucDetails:  ["Figure: Level 1 Use Case diagram", "Figure: Level 2 Use Case diagram", "Figure: Level 3 Use Case diagram"],
          ucAlt:      ["Level 1 UC diagram", "Level 2 UC diagram", "Level 3 UC diagram"],
          ucs:        "Figure: UCS specification — Add new order feature",
          sd:         ["Figure: SD diagram — Add new order feature", "Figure: SD diagram — Add account feature"],
          dfdContext: "Figure: Context DFD diagram",
          dfdLevel0:  "Figure: Level 0 DFD diagram",
          erd:        "Figure: ERD diagram — Sales Management Module"
        }
      },
      namVietPhuong: {
        bannerTitle: "ERP SYSTEM — NAM VIET PHUONG CO., LTD.",
        bannerScope: "SCOPE: SALES & HR MANAGEMENT",
        descParts:   ["The system was built to ", "centrally manage manufacturing, sales, HR, and financial operations on a unified platform", ", supporting real-time data synchronization, streamlining operational processes, and enhancing management efficiency within the enterprise."],
        scopeItem:   "Analyzed and described the functions of the sales and HR management modules in the ERP system through Use Case (UC) diagrams.",
        captions: {
          ucSales: "Figure: Use Case diagram — Sales Management Module",
          ucHR:    "Figure: Use Case diagram — HR Management Module"
        }
      },
      theShea: {
        bannerTitle: "INVENTORY LOCATION MGMT SYSTEM — THE SHEA",
        bannerScope: "SCOPE: WAREHOUSE & GOODS MANAGEMENT",
        descParts:   ["The system was built to support ", "real-time tracking and management of product locations on display shelves and storage racks", ", optimizing inventory and arrangement processes, and enhancing goods management efficiency in-store for The Shea fashion brand."],
        scopeItem:   "Analyzed and described system functions for the inventory location management system using modeling tools.",
        captions: {
          uc:  "Figure: Use Case diagram",
          ucs: "Figure: UCS specification — Add new shelf feature",
          ad:  "Figure: AD diagram — Filter inventory location by color and size"
        }
      },
      ai: {
        bannerTitle: "AUTOMATED FINANCIAL INVESTMENT AGENTIC AI SYSTEM",
        bannerScope: "SCOPE: FULL SYSTEM",
        descParts:   ["The system was built to support ", "management and automation of financial investment activities", " through market data monitoring, investment opportunity analysis, and automated trade execution based on selected strategies, enhancing portfolio management efficiency and optimizing the investment process."],
        scopeItem:   "Analyzed and modeled the system to clarify market data management workflows, investor-system interactions, and the processing pipeline from data analysis to automated investment execution.",
        captions: {
          bpmn:       ["Figure: BPMN diagram — User management feature", "Figure: BPMN diagram — Securities data management feature", "Figure: BPMN diagram — Investment management feature"],
          ucOverview: "Figure: Overview UC diagram",
          ucLevel2:   "Figure: Level 2 UC diagram",
          ucs:        "Figure: UCS specification — View investment list feature",
          ad:         "Figure: AD diagram — View investment list feature",
          dfdContext: "Figure: Context DFD diagram",
          dfdLevel0:  "Figure: Level 0 DFD diagram"
        }
      }
    },

    vibe: {
      wonderwood: {
        bannerTitle: "ERP SYSTEM — WONDERWOOD CO., LTD.",
        bannerScope: "SCOPE: MANUFACTURING MANAGEMENT",
        descParts:   ["The system was built to ", "centrally manage manufacturing, sales, HR, and financial operations on a unified platform", ", supporting real-time data synchronization, streamlining operational processes, and enhancing management efficiency within the enterprise."],
        scopeItem:   "Built AI-powered demos for key functions of the manufacturing management module based on completed analysis and design documents, including: material group management, material management, supplier management, production plan management.",
        videoCaption:"Video: Web feature demo (Vibe Coding)"
      }
    },

    figma: {
      breadcrumbTitle: "UX/UI DESIGN",
      projects: [
        { name: "ERP SYSTEM — WONDERWOOD CO., LTD.",               system: "B2B Manufacturing",    scope: "Scope: Manufacturing Management",    description: "Designed interface prototypes using Figma for the manufacturing management module in the ERP system to simulate operational workflows, visualize business flows, and optimize user experience.",                        tags: ["Figma"], logo: "./go_logo.png",    href: "#wonderwood-figma" },
        { name: "ERP SYSTEM — NAM VIET PHUONG CO., LTD.",          system: "B2C Manufacturing",    scope: "Scope: Sales & HR Management",       description: "Designed interface prototypes using Figma for the sales and HR management modules in the ERP system to simulate operational workflows, visualize business flows, and optimize user experience.",                 tags: ["Figma"], logo: "./yen_logo.png",   href: "#namvietphuong-figma" },
        { name: "ERP SYSTEM — YUMMY SINGAPORE TOFU BRAND",         system: "Food & Beverage",      scope: "Scope: Finance Management",          description: "Designed interface prototypes for the finance management module using Figma to visualize operational workflows and optimize user experience in the ERP system.",                                               tags: ["Figma"], logo: "./yummy_logo.jpg", href: "#yummy-figma" },
        { name: "INVENTORY LOCATION MGMT SYSTEM — THE SHEA",       system: "Warehouse Management", scope: "Scope: Warehouse & Goods Management", description: "Designed Figma prototypes for The Shea's inventory location management system to simulate the interface and operational flows for warehouse and goods management.",                                       tags: ["Figma"], logo: "./shea_logo.jpg",  href: "#theshea-figma" }
      ],
      wonderwood: {
        bannerTitle: "ERP SYSTEM — WONDERWOOD CO., LTD.",
        bannerScope: "SCOPE: MANUFACTURING MANAGEMENT",
        descParts:   ["The system was built to ", "centrally manage manufacturing, sales, HR, and financial operations on a unified platform", ", supporting real-time data synchronization, streamlining operational processes, and enhancing management efficiency within the enterprise."],
        scopeItem:   "Designed UX/UI for the manufacturing management module in the ERP system by building wireframes, user flows, and interactive prototypes using Figma.",
        captions:    ["Figure: Login page interface", "Figure: Dashboard page interface", "Figure: List page — Manufacturing plan management feature", "Figure: Add new page — Manufacturing plan management feature"]
      },
      namVietPhuong: {
        bannerTitle: "ERP SYSTEM — NAM VIET PHUONG CO., LTD.",
        bannerScope: "SCOPE: SALES & HR MANAGEMENT",
        descParts:   ["The system was built to ", "centrally manage manufacturing, sales, HR, and financial operations on a unified platform", ", supporting real-time data synchronization, streamlining operational processes, and enhancing management efficiency within the enterprise."],
        scopeItem:   "Designed UX/UI for the sales and HR management modules in the ERP system by building wireframes, user flows, and interactive prototypes using Figma.",
        captions:    ["Figure: List page — Attendance management feature", "Figure: Edit info page — Attendance management feature", "Figure: Add new page — Order management feature", "Figure: Add new page — Wholesale data management feature"]
      },
      yummy: {
        bannerTitle: "ERP SYSTEM — YUMMY SINGAPORE TOFU BRAND",
        bannerScope: "SCOPE: FINANCE MANAGEMENT",
        descParts:   ["The system was built to ", "centrally manage manufacturing, sales, HR, and financial operations on a unified platform", ", supporting real-time data synchronization, streamlining operational processes, and enhancing management efficiency within the enterprise."],
        scopeItem:   "Designed UX/UI for the finance management module in the ERP system by building wireframes, user flows, and interactive prototypes using Figma.",
        captions:    ["Figure: Dashboard page interface", "Figure: List page — Fund management feature", "Figure: List page — Supplier debt management feature", "Figure: Add new page — Receipt management feature"]
      },
      theShea: {
        bannerTitle: "INVENTORY LOCATION MGMT SYSTEM — THE SHEA",
        bannerScope: "SCOPE: WAREHOUSE & GOODS MANAGEMENT",
        descParts:   ["The system was built to support ", "real-time tracking and management of product locations on display shelves and storage racks", ", optimizing inventory and arrangement processes, and enhancing goods management efficiency in-store for The Shea fashion brand."],
        scopeItem:   "Designed UX/UI for The Shea's inventory location management system by building wireframes, user flows, and interactive prototypes using Figma.",
        caption:     "Figure: Inventory location management system interface"
      }
    }
  }

};
