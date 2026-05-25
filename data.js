window.PORTFOLIO_DATA = {

  /* ============================  TIẾNG VIỆT  ============================ */
  vi: {
    nav: ["Trang chủ", "Giới thiệu", "Kỹ năng", "Liên hệ"],

    hero: {
      tagline:     "XIN CHÀO, TÔI LÀ",
      name:        "Đoàn Thị Ngọc Ánh",
      title:       "Business Analyst",
      description: "Phân tích nghiệp vụ, mô hình hóa quy trình và xây dựng giải pháp dựa trên dữ liệu và nhu cầu người dùng, nhằm tạo ra giá trị thực tiễn và tối ưu hóa vận hành.",
      cvLink:      "#",
      btnCV:       "Tải xuống CV",
      btnContact:  "Liên hệ"
    },

    about: {
      title1:     "GIỚI THIỆU",
      title2:     "BẢN THÂN",
      intro: [
        "Tôi là người chủ động, có tinh thần tự học cao và luôn quan tâm đến việc tìm hiểu nhu cầu nghiệp vụ cũng như cách hệ thống vận hành trong nhiều lĩnh vực khác nhau. Tôi có khả năng làm việc nhóm hiệu quả, chú trọng trao đổi và học hỏi lẫn nhau nhằm hướng đến các giải pháp phù hợp và kết quả chất lượng.",
        "Trong 1–2 năm tới, tôi định hướng tiếp tục nâng cao năng lực chuyên môn và phát triển lên vị trí Middle Business Analyst."
      ],
      fieldTitle: "LĨNH VỰC",
      fields:     ["Sản xuất", "Kho vận", "Bán hàng", "Nhân sự", "Tài chính"],
      btnCV:      "Tải xuống CV"
    },

    skills: {
      title: "KỸ NĂNG",
      items: [
        {
          id: 1,
          iconType:    "analysis",
          icon:        '<i class="bi bi-file-earmark-text"></i>',
          title:       "Phân tích Nghiệp vụ",
          tags:        ["Khơi gợi & Thu thập yêu cầu", "BRD", "SRS", "User Story"],
          description: "Có nền tảng vững chắc trong việc thu thập, phân tích và làm rõ yêu cầu nghiệp vụ thông qua trao đổi với các bên liên quan, nhằm đảm bảo sự đồng thuận, nhất quán về mục tiêu và giải pháp. Thành thạo xây dựng các tài liệu như BRD, SRS, và User Story nhằm hỗ trợ mô tả yêu cầu hệ thống một cách rõ ràng, nhất quán và phù hợp.",
          borderColor: "border-blue-500",
          hasButton:   true,
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
          id: 2,
          iconType:    "modeling",
          icon:        '<i class="bi bi-diagram-2-fill"></i>',
          title:       "Mô hình hóa Hệ thống",
          tags:        ["BPMN", "UC", "UCS", "AD", "SD", "DFD", "ERD"],
          description: "Có kinh nghiệm mô hình hóa quy trình nghiệp vụ và hệ thống bằng BPMN, UML, DFD và ERD nhằm mô tả trực quan luồng xử lý, tương tác hệ thống và cấu trúc dữ liệu. Hỗ trợ hiệu quả cho quá trình phân tích, thiết kế và phát triển giải pháp.",
          borderColor: "border-emerald-400",
          hasButton:   true,
          projects: [
            {
              name:        "CÔNG TY TNHH WONDERWOOD",
              system:      "Hệ thống ERP",
              scope:       "Phạm vi: Toàn bộ hệ thống",
              description: "Mô hình hóa quy trình nghiệp vụ và hệ thống ERP thông qua việc sử dụng các công cụ nhằm trực quan hóa luồng xử lý, tương tác hệ thống và cấu trúc dữ liệu phục vụ phân tích và phát triển giải pháp.",
              tags:        ["BPMN", "UC", "UCS", "SD", "DFD", "ERD"],
              logo:        "./go_logo.png"
            },
            {
              name:        "CÔNG TY TNHH NAM VIỆT PHƯƠNG",
              system:      "Hệ thống ERP",
              scope:       "Phạm vi: Quản lý bán hàng & nhân sự",
              description: "Mô hình hóa quy trình nghiệp vụ cho phân hệ quản lý bán hàng và nhân sự thông qua việc sử dụng sơ đồ UC nhằm mô tả các chức năng mà người dùng có thể tương tác trực tiếp với hệ thống.",
              tags:        ["UC"],
              logo:        "./yen_logo.png"
            },
            {
              name:        "THƯƠNG HIỆU THỜI TRANG THE SHEA",
              system:      "Hệ thống quản lý vị trí hàng hóa",
              scope:       "Phạm vi: Quản lý kho & hàng hóa",
              description: "Mô hình hóa quy trình nghiệp vụ cho hệ thống quản lý vị trí hàng hóa nhằm mô tả các chức năng và luồng tương tác giữa người dùng với hệ thống.",
              tags:        ["UC", "UCS", "AD"],
              logo:        "./shea_logo.jpg"
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
          icon:        '<i class="bi bi-people-fill"></i>',
          title:       "Kỹ năng mềm",
          tags:        [],
          description: "Có khả năng giao tiếp và phối hợp hiệu quả với các bên liên quan trong quá trình làm việc nhóm. Chủ động học hỏi, tư duy phân tích tốt và linh hoạt trong việc giải quyết vấn đề nhằm hướng đến kết quả chất lượng và phù hợp với mục tiêu dự án.",
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
      description: "Analyzing business needs, modeling processes, and building solutions based on data and user requirements to create practical value and optimize operations.",
      cvLink:      "#",
      btnCV:       "Download CV",
      btnContact:  "Contact"
    },

    about: {
      title1:     "ABOUT",
      title2:     "ME",
      intro: [
        "I am proactive, highly self-motivated, and always interested in understanding business needs and how systems operate across various industries. I am able to work effectively in teams, emphasizing communication and mutual learning to achieve appropriate solutions and quality results.",
        "Over the next 1–2 years, I aim to continue enhancing my professional competencies and advance to a Middle Business Analyst position."
      ],
      fieldTitle: "EXPERTISE",
      fields:     ["Manufacturing", "Logistics", "Sales", "Human Resources", "Finance"],
      btnCV:      "Download CV"
    },

    skills: {
      title: "SKILLS",
      items: [
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
              name:        "CÔNG TY TNHH WONDER WOOD",
              system:      "ERP System",
              scope:       "Full System",
              description: "Business analysis for ERP system in a plywood manufacturing enterprise...",
              tags:        ["Elicitation & Requirements Gathering", "BRD", "SRS", "User stories"],
              logo:        "./go_logo.png"
            },
            {
              name:        "CÔNG TY TNHH NAM VIỆT PHƯƠNG",
              system:      "ERP System",
              scope:       "Sales & HR Management",
              description: "Business analysis and participation in building sales and HR modules for the ERP system of an enterprise operating in the supply and distribution of Vietnamese bird's nest products...",
              tags:        ["Elicitation & Requirements Gathering"],
              logo:        "./yen_logo.png"
            },
            {
              name:        "THƯƠNG HIỆU TÀU HỦ SINGAPORE YUMMY",
              system:      "ERP System",
              scope:       "Finance Management",
              description: "Business analysis and participation in building the finance module for the ERP system of a brand specializing in fresh tofu products...",
              tags:        ["Elicitation & Requirements Gathering"],
              logo:        "./yummy_logo.jpg"
            },
            {
              name:        "THƯƠNG HIỆU THỜI TRANG THE SHEA",
              system:      "Inventory Location Management System",
              scope:       "Warehouse & Goods Management",
              description: "Business analysis and participation in building the warehouse and goods management module for The Shea fashion brand...",
              tags:        ["Elicitation & Requirements Gathering"],
              logo:        "./shea_logo.jpg"
            }
          ]
        },
        {
          id: 2,
          iconType:    "modeling",
          icon:        '<i class="bi bi-diagram-2-fill"></i>',
          title:       "System Modeling",
          tags:        ["BPMN", "UC", "UCS", "AD", "SD", "DFD", "ERD"],
          description: "Experienced in modeling business processes and systems using BPMN, UML, DFD, and ERD to visually represent processing flows, system interactions, and data structures. Effectively supports analysis, design, and solution development.",
          borderColor: "border-emerald-400",
          hasButton:   true,
          projects: [
            {
              name:        "CÔNG TY TNHH WONDERWOOD",
              system:      "ERP System",
              scope:       "Scope: Full System",
              description: "Business process and system modeling for the ERP system using various tools to visualize processing flows, system interactions, and data structures for analysis and solution development.",
              tags:        ["BPMN", "UC", "UCS", "SD", "DFD", "ERD"],
              logo:        "./go_logo.png"
            },
            {
              name:        "CÔNG TY TNHH NAM VIỆT PHƯƠNG",
              system:      "ERP System",
              scope:       "Scope: Sales & HR Management",
              description: "Business process modeling for the sales and HR management modules using UC diagrams to describe the functions that users can directly interact with in the system.",
              tags:        ["UC"],
              logo:        "./yen_logo.png"
            },
            {
              name:        "THƯƠNG HIỆU THỜI TRANG THE SHEA",
              system:      "Inventory Location Management System",
              scope:       "Scope: Warehouse & Goods Management",
              description: "Business process modeling for the inventory location management system to describe functions and interaction flows between users and the system.",
              tags:        ["UC", "UCS", "AD"],
              logo:        "./shea_logo.jpg"
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
