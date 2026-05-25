# plan.md — Portfolio Website: Đoàn Thị Ngọc Ánh

---

## Phần 1 — Phân tích UI/UX (từ trangchu.png)

### 1.1 Bố cục tổng thể
Trang web có dạng **Single Page**, cuộn dọc, điều hướng qua thanh tab cố định ở trên cùng. Có **5 khu vực (section) chính**:

| # | Tên Section | Mô tả |
|---|-------------|-------|
| 1 | **Header / Navigation** | Thanh điều hướng sticky, chứa logo và 4 tabs |
| 2 | **Hero (Trang chủ)** | Giới thiệu ngắn, ảnh đại diện, nút CTA |
| 3 | **About (Giới thiệu)** | Giới thiệu bản thân + danh sách lĩnh vực |
| 4 | **Skills (Kỹ năng)** | Lưới thẻ kỹ năng trên nền tối |
| 5 | **Contact (Liên hệ)** | 3 thẻ thông tin liên hệ |

---

### 1.2 Header / Navigation
- **Nền:** Trắng `#FFFFFF`, có đường viền mỏng ở dưới (border-bottom màu xám nhạt), gọn gàng, không dư khoảng trắng.
- **Layout:** Flexbox 3 phần để căn giữa tuyệt đối. Nằm trong container width cố định.
- **Logo (trái):** Chữ "ANH DOAN", font đậm nhưng gọn, cỡ chữ ~22px, màu `#14213D`, căn trái.
- **Tabs (giữa):** Menu nằm chính giữa. Khoảng cách vừa phải. Cỡ chữ nhỏ (~16px), font-weight medium.
  - Tab **active**: màu `#285ECC`. Có đường gạch chân (underline) mỏng (2px), ngắn đúng bằng chiều dài chữ, nằm sát ngay dưới chữ.
  - Tab **inactive**: màu `#14213D`.
- **Cụm bên phải (Ngôn ngữ):** Căn phải.
  - Đường kẻ dọc (Divider): Mỏng, màu xám nhạt, cách đều menu và cụm ngôn ngữ.
  - Icon quả địa cầu: Nhỏ, cân đối.
  - Chữ: Cỡ ~16px. "VI" màu đen/đậm. Dấu "|" màu xám nhạt. "EN" màu xám nhạt hơn "VI".
- **Chiều cao header:** ~80px, căn giữa toàn bộ phần tử theo chiều dọc.

---

### 1.3 Hero Section (Trang chủ)
- **Nền:** Dùng ảnh `home_nen.png` làm nền.
- **Layout tổng thể:** Hero section cao hơn để tạo cảm giác "đầy" màn hình. Container mở rộng hơn một chút. Căn giữa content và ảnh theo chiều dọc. Giảm khoảng trắng thừa ở giữa, đẩy text và avatar lại gần nhau hơn.
- **Cột trái (Text - chiếm nhiều diện tích hơn):**
  - Dòng nhỏ: "XIN CHÀO, TÔI LÀ" font nhỏ, màu nhạt.
  - Tên lớn: "Đoàn Thị Ngọc Ánh" kích thước cực lớn (khoảng 72-82px), font-weight bold, line-height chặt.
  - Chức danh: "Business Analyst" lớn, nổi bật, màu xanh.
  - Mô tả: Tăng font-size nhẹ, width rộng hơn để dễ đọc, màu xám nhẹ.
  - **2 nút CTA:** Tăng size button, padding cân đối, font-size to rõ (~18px).
    - "Tải xuống CV": nền xanh, chữ trắng.
    - "Liên hệ": nền trắng, chữ đen, viền outline mỏng.
- **Cột phải (Ảnh):**
  - Card ảnh lớn và nổi bật (width khoảng 420-480px, height proportional). Border-radius mềm. Shadow nhẹ và mềm mại.

---

### 1.4 About Section (Giới thiệu)
- **Nền:** Trắng `#FFFFFF`
- **Layout:** 2 cột ngang, mỗi cột chiếm 45% không gian (dùng justify-between để tạo khoảng trống ở giữa).
- **Cột trái — "GIỚI THIỆU BẢN THÂN":**
  - Tiêu đề uppercase, font bold. Chữ "GIỚI THIỆU" màu đen, chữ "BẢN THÂN" màu xanh `#3B82F6`. Có gạch chân dưới tiêu đề.
  - 2 đoạn văn cách nhau một khoảng (gap), màu `#475569`.
  - Nút "Tải xuống CV": Thiết kế giống hệt nút ở Trang chủ (nền xanh, chữ trắng, padding to, có icon `<i className="bi bi-download"></i>`).
- **Cột phải — "LĨNH VỰC":**
  - Tiêu đề uppercase, font bold, có gạch chân.
  - Danh sách 5 thẻ (card). Mỗi thẻ có:
    - Nền trắng, bo góc, có viền mờ/shadow.
    - Icon `<i className="bi bi-check-circle-fill"></i>` màu xanh `#3B82F6`.
    - Chữ mô tả: Viết in hoa toàn bộ, màu `#475569`.
    - Số thứ tự (01, 02...) mờ ở góc phải thẻ.

---

### 1.5 Skills Section (Kỹ năng)
- **Nền section:** Navy đậm `#0F172A`
- **Tiêu đề "KỸ NĂNG":** Chữ trắng, font bold, uppercase, căn giữa, có **2 đường kẻ ngang** hai bên (dạng divider)
- **Lưới thẻ:** 2 cột, 5 thẻ tổng (thẻ cuối chiếm full width nếu lẻ)
- **Mỗi SkillCard:**
  - **Nền thẻ:** `#1E293B` (slate-800), bo góc `rounded-xl`
  - **Icon:** SVG màu sắc riêng (xanh, hồng, xanh lá, tím) trong ô nền `#0F172A`
  - **Tiêu đề kỹ năng:** Chữ trắng, font bold
  - **Tags:** Mỗi tag là badge nhỏ — nền `#3B82F6` pha mờ 20%, chữ xanh nhạt `#93C5FD`
  - **Mô tả:** Chữ xám nhạt `#94A3B8`, font regular
  - **Link "Xem thêm →":** Màu xanh `#60A5FA`, hover sáng hơn
  - Hiệu ứng hover: nền thẻ sáng nhẹ lên `#334155`

---

### 1.6 Contact Section (Liên hệ)
- **Nền:** Xám rất nhạt `#F1F5F9`
- **Tiêu đề "THÔNG TIN LIÊN HỆ":** Căn giữa, uppercase, có 3 chấm trang trí phía trên (chấm giữa màu xanh đậm, hai chấm bên xanh nhạt)
- **3 thẻ ContactCard nằm ngang:**
  - Nền trắng, shadow, bo góc `rounded-xl`
  - Hover: shadow đậm hơn + nhấc lên nhẹ (`-translate-y-1`)
  - Icon lớn (~32px) màu xanh `#3B82F6`
  - Label: uppercase, xám nhạt, nhỏ
  - Value: chữ đậm, màu `#334155`

---

### 1.7 Bảng màu & Typography

| Yếu tố | Giá trị |
|--------|---------|
| **Màu xanh accent** | `#3B82F6` (blue-500) |
| **Màu navy đậm** | `#0F172A` (slate-900) |
| **Màu navy card** | `#1E293B` (slate-800) |
| **Nền sáng** | `#F1F5F9` (slate-100) |
| **Text chính** | `#1E293B` (slate-800) |
| **Text phụ** | `#64748B` (slate-500) |
| **Text mờ** | `#94A3B8` (slate-400) |
| **Font chính** | Inter (Google Fonts CDN) — weights: 400, 500, 600, 700, 800 |

---

## Phần 2 — Cấu trúc File & Thư mục

```
portfolio/
│
├── index.html        ← File duy nhất mở trên trình duyệt; chứa toàn bộ React
├── data.js           ← Dữ liệu tĩnh (gán vào window.PORTFOLIO_DATA)
├── av.png            ← Ảnh đại diện (đã có sẵn)
└── trangchu.png      ← Ảnh tham khảo thiết kế (không dùng trong production)
```

**Giải thích lý do tách `data.js`:**
- Giữ `index.html` gọn, không bị lẫn logic và nội dung
- Dễ chỉnh sửa văn bản (tên, mô tả, kỹ năng, liên hệ) mà không cần động vào React code
- Dữ liệu được nạp vào `window.PORTFOLIO_DATA` trước khi Babel compile JSX

**Quy tắc đường dẫn bắt buộc:**
- Ảnh: `./av.png` (KHÔNG dùng `av.png` hay `/av.png`)
- Script data: `./data.js`
- Tất cả tài nguyên đều dùng prefix `./`

**CDN cần dùng (trong `<head>` của index.html):**

| Thư viện | URL CDN |
|----------|---------|
| Google Fonts Inter | `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap` |
| Tailwind CSS | `https://cdn.tailwindcss.com` |
| React 18 | `https://unpkg.com/react@18/umd/react.development.js` |
| ReactDOM 18 | `https://unpkg.com/react-dom@18/umd/react-dom.development.js` |
| Babel Standalone | `https://unpkg.com/@babel/standalone/babel.min.js` |

---

## Phần 3 — Kiến trúc React Component

### 3.1 Sơ đồ cây Component

```
<App>                          ← Root, quản lý state activeTab
 ├── <Navigation>              ← Header sticky, truyền activeTab + onTabChange
 └── <main key={activeTab}>    ← key thay đổi → React tự re-mount → trigger fade-in
      ├── <HomeSection>        ← render khi activeTab === 'home'
      ├── <AboutSection>       ← render khi activeTab === 'about'
      ├── <SkillsSection>      ← render khi activeTab === 'skills'
      │    └── <SkillCard>[]   ← 1 card / kỹ năng, nhận props: iconType, title, tags, description
      └── <ContactSection>     ← render khi activeTab === 'contact'
           └── <ContactCard>[] ← 1 card / kênh liên hệ, nhận props: iconType, label, value, href
```

### 3.2 Mô tả từng Component

| Component | Trách nhiệm | Props nhận vào |
|-----------|-------------|----------------|
| `App` | Giữ state `activeTab`, xử lý `handleTabChange`, scroll to top khi đổi tab | — |
| `Navigation` | Render logo + 4 tab buttons; highlight tab active | `activeTab`, `onTabChange` |
| `HomeSection` | Layout 2 cột: text giới thiệu + ảnh `av.png`; 2 nút CTA | `onContactClick` |
| `AboutSection` | Layout 2 cột: đoạn văn giới thiệu + danh sách lĩnh vực | — |
| `SkillsSection` | Nền tối, tiêu đề với divider, lưới `SkillCard` | — |
| `SkillCard` | Card đơn lẻ, hiển thị icon + tên + tags + mô tả + link | `skill` object |
| `ContactSection` | Nền sáng, tiêu đề có dots, hàng 3 `ContactCard` | — |
| `ContactCard` | Card liên kết clickable | `contact` object |

### 3.3 Luồng quản lý State

**State duy nhất:** `activeTab` (string) — giá trị có thể là: `'home'` | `'about'` | `'skills'` | `'contact'`

**Luồng hoạt động:**
1. `App` khởi tạo `activeTab = 'home'` bằng `React.useState`
2. `App` truyền `activeTab` và hàm `handleTabChange` xuống `Navigation`
3. Khi user click tab → `Navigation` gọi `onTabChange(tabKey)` → `App` cập nhật state
4. State thay đổi → React re-render → `<main key={activeTab}>` được mount lại → CSS animation `fadeInUp` kích hoạt
5. Nút "Liên hệ" ở `HomeSection` cũng gọi `onContactClick` → chuyển sang tab `'contact'`

**Kỹ thuật fade-in khi đổi tab:**
- Thêm `key={activeTab}` vào thẻ `<main>` wrapper
- Khi `key` thay đổi, React unmount component cũ và mount mới → class CSS `fade-in` chạy animation từ đầu
- Animation: `@keyframes fadeInUp` — opacity 0→1, translateY 15px→0, duration 300ms

### 3.4 Cấu trúc data.js (schema song ngữ)

```javascript
window.PORTFOLIO_DATA = {
  vi: {
    nav: ["Trang chủ", "Giới thiệu", "Kỹ năng", "Liên hệ"],
    hero: { tagline: "XIN CHÀO, TÔI LÀ", name: "Đoàn Thị Ngọc Ánh", title: "Business Analyst", description: "...", btnCV: "Tải xuống CV", btnContact: "Liên hệ" },
    about: { title1: "GIỚI THIỆU", title2: "BẢN THÂN", intro: [...], fieldTitle: "LĨNH VỰC", fields: [...] },
    skills: { title: "KỸ NĂNG", items: [...] },
    contact: { title: "THÔNG TIN LIÊN HỆ", items: [...] }
  },
  en: {
    nav: ["Home", "About", "Skills", "Contact"],
    hero: { tagline: "HELLO, I AM", name: "Doan Thi Ngoc Anh", title: "Business Analyst", description: "...", btnCV: "Download CV", btnContact: "Contact" },
    // Tương tự cho các phần about, skills, contact bằng tiếng Anh
  }
}


---

## Phần 4 — Hướng dẫn từng bước (Step-by-step)

> Mỗi bước dưới đây là một **lượt chat độc lập** có thể yêu cầu thực thi.

---

### Bước 1: Tạo file `data.js`
**Mục tiêu:** Khai báo toàn bộ dữ liệu nội dung vào `window.PORTFOLIO_DATA`

Nội dung cần có:
- Thông tin cá nhân: 
  + name: "Đoàn Thị Ngọc Ánh"
  + title: "Business Analyst"
  + tagline: "XIN CHÀO, TÔI LÀ"
  + description: "Phân tích nghiệp vụ, mô hình hóa quy trình và xây dựng giải pháp dựa trên dữ liệu và nhu cầu người dùng, nhằm tạo ra giá trị thực tiễn và tối ưu hóa vận hành."
  + cvLink: "#")
- `about.intro`: 2 đoạn văn giới thiệu.
  + Đoạn 1: "Tôi là người chủ động, có tinh thần tự học cao và luôn quan tâm đến việc tìm hiểu nhu cầu nghiệp vụ cũng như cách hệ thống vận hành trong nhiều lĩnh vực khác nhau. Tôi có khả năng làm việc nhóm hiệu quả, chú trọng trao đổi và học hỏi lẫn nhau nhằm hướng đến các giải pháp phù hợp và kết quả chất lượng."
  + Đoạn 2: "Trong 1–2 năm tới, tôi định hướng tiếp tục nâng cao năng lực chuyên môn và phát triển lên vị trí Middle Business Analyst."
- `about.fields`: 5 lĩnh vực chuyên môn
- `skills`: 5 kỹ năng với đầy đủ tags và mô tả chi tiết
- `contact`: 3 kênh liên hệ (dùng placeholder, điền sau)

**Output:** File `./data.js` hoàn chỉnh

---

### Bước 2: Tạo `index.html` — Skeleton + CDN + CSS nền
**Mục tiêu:** Tạo khung HTML, nhúng CDN, định nghĩa CSS tùy chỉnh

Nội dung cần có:
- Thẻ `<head>` với đầy đủ meta, title, Google Fonts link
- `tailwind.config` tùy chỉnh (nếu cần màu custom)
- 5 thẻ `<script>`/`<link>` CDN (Fonts, Tailwind, React, ReactDOM, Babel)
- Thẻ `<style>` chứa: `@keyframes fadeInUp`, class `.fade-in`, custom scrollbar
- `<div id="root"></div>`
- `<script src="./data.js"></script>`
- `<script type="text/babel">` trống (để điền component vào các bước sau)

**Output:** `index.html` với skeleton hoàn chỉnh, mở trình duyệt thấy trang trắng (chưa có React content)

---

### Bước 3: Component `Navigation`
**Mục tiêu:** Render thanh điều hướng chính xác 100% theo thiết kế gọn gàng, hiện đại.

Yêu cầu Tailwind CSS chi tiết:
- `position: sticky; top: 0; z-index: 50; bg-white; border-b border-gray-200`. Bỏ shadow to cũ.
- Set chiều cao fix: `h-[80px]`.
- Container layout: `max-w-[1200px] h-full w-full px-6 mx-auto flex items-center justify-between`.
- Dùng Flexbox chia 3 phần để căn giữa menu tuyệt đối:
  1. **Logo (Trái):** `<div className="w-1/3 flex justify-start">`. Chữ "ANH DOAN" với class `text-[22px] font-bold text-[#14213D] tracking-tight`.
  2. **Tabs (Giữa):** `<nav className="w-1/3 flex justify-center gap-x-8">`. Các nút tab: `text-[16px] font-medium relative py-1`.
     - Tab active: `text-[#285ECC]`. Gạch chân mỏng sát chữ: `<span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#285ECC]"></span>`.
     - Tab inactive: `text-[#14213D] hover:text-[#285ECC] transition-colors`.
  3. **Right section (Ngôn ngữ):** `<div className="w-1/3 flex justify-end items-center">`.
     - Thanh chia cắt dọc (Divider): `<div className="h-6 w-[1px] bg-gray-300 mx-6"></div>`.
     - Cụm chuyển đổi (Clickable): `flex items-center gap-x-2 cursor-pointer`.
     - Icon quả địa cầu: `text-[18px] text-[#14213D]`.
     - Chữ "VI | EN": `text-[15px]`. "VI" là `font-bold text-[#14213D]`. Dấu "|" là `text-gray-300 mx-1`. "EN" là `font-medium text-gray-400`.
- Tích hợp sự kiện `onClick` vào cụm chữ ngôn ngữ để gọi hàm `toggleLanguage()`.

**Output:** Component `Navigation` trong `<script type="text/babel">` + component `App` tối giản với `useState('home')`

---

### Bước 4: Component `HomeSection`
**Mục tiêu:** Render Hero section to, rõ ràng, "đầy" màn hình và cân đối chuẩn 95-100% tỉ lệ ảnh mẫu.

Yêu cầu Tailwind CSS chi tiết:
- Nền dùng ảnh `home_nen.png`. Tăng chiều cao section (dùng `min-h-[85vh]` hoặc padding-y lớn như `py-20`), `flex items-center`.
- Container bọc nội dung: Rộng rãi hơn (`max-w-[1300px] w-full px-6 mx-auto`).
- Layout chia cột: Sử dụng Grid để ép khoảng cách gần nhau hơn: `grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center`.
- **Cột trái (Text - Chiếm 7 phần):** `<div className="lg:col-span-7">`
  - Tagline: `text-sm font-semibold text-gray-400 tracking-widest mb-4 uppercase`.
  - Tên lớn: Kích thước cực lớn (`text-[64px] lg:text-[80px] font-bold text-[#14213D] leading-[1.1] mb-4`).
  - Chức danh: `text-3xl lg:text-[36px] font-bold text-[#285ECC] mb-6`.
  - Mô tả: Mở rộng width và cỡ chữ (`max-w-[600px] text-[18px] text-[#475569] leading-relaxed mb-10`).
  - Khối Buttons: `flex gap-5`.
    - Nút Tải CV: `bg-[#285ECC] text-white px-8 py-3.5 rounded-xl flex items-center gap-2 text-[18px] font-medium hover:bg-blue-700 transition`.
    - Nút Liên hệ: `bg-transparent text-[#14213D] border border-gray-300 px-8 py-3.5 rounded-xl flex items-center gap-2 text-[18px] font-medium hover:bg-gray-50 transition`.
- **Cột phải (Ảnh - Chiếm 5 phần):** `<div className="lg:col-span-5 flex justify-end">`
  - Container card ảnh lớn: `w-full max-w-[460px] aspect-[4/5] p-3 bg-white rounded-3xl shadow-[0_15px_40px_rgb(0,0,0,0.06)] mx-auto lg:mx-0`.
- Đảm bảo đọc dữ liệu text từ `props.data` để đồng bộ tính năng chuyển đổi ngôn ngữ toàn trang.

**Output:** Component `HomeSection` + cập nhật `App` để truyền `onContactClick`

---

### Bước 5: Component `AboutSection`
**Mục tiêu:** Render section Giới thiệu theo thiết kế chia cột 45-45 và dạng thẻ

Yêu cầu:
- Nền trắng, padding dọc đủ rộng. Bọc trong container `max-w-[1440px] w-full px-4 xl:px-[100px] mx-auto`.
- Grid 2 cột: Chia layout flex/grid sao cho cột trái 45%, cột phải 45% (ở giữa tự tạo khoảng trống). Responsive: 1 cột mobile.
- Cột trái:
  - Tiêu đề: "GIỚI THIỆU" (màu đen) và "BẢN THÂN" (text-blue-500). Gạch chân dưới tiêu đề.
  - Nội dung: 2 đoạn `<p>` text màu `#475569`, dùng space-y-4 hoặc mb-6 để cách nhau một khoảng.
  - Nút button: Đổi chữ thành "Tải xuống CV", thêm icon `<i className="bi bi-download"></i>`, style giống hệt nút ở Trang chủ.
- Cột phải:
  - Danh sách thẻ (card). Mỗi lĩnh vực là 1 thẻ div có class: `flex items-center justify-between border border-gray-100 shadow-sm rounded-xl p-4 mb-4`.
  - Nhóm bên trái của thẻ: Icon `<i className="bi bi-check-circle-fill text-blue-500 mr-4"></i>` và Text uppercase màu `#475569`.
  - Nhóm bên phải của thẻ: Số thứ tự (01, 02, 03, 04, 05) màu xanh nhạt.

**Output:** Component `AboutSection`

---

### Bước 6: Component `SkillCard` + `SkillsSection`
**Mục tiêu:** Render section Kỹ năng với nền tối và lưới thẻ

Yêu cầu cho `SkillsSection`:
- Nền `bg-slate-900`, padding dọc rộng
- Nội dung bọc trong container rộng: `max-w-[1440px] w-full px-4 xl:px-[100px] mx-auto`
- Tiêu đề "KỸ NĂNG": flex row với 2 `<hr>` hai bên (dùng `flex-1 border-white/20`)
- Grid 2 cột (responsive: 1 cột mobile)

Yêu cầu cho `SkillCard`:
- Nền `bg-slate-800`, bo góc, hover sáng lên
- Icon SVG riêng cho từng `iconType` (5 loại icon)
- Danh sách tags dạng badge xanh nhạt
- Mô tả màu `text-slate-400`
- Link "Xem thêm →" màu `text-blue-400`

**Output:** Component `SkillCard` + `SkillsSection`

---

### Bước 7: Component `ContactCard` + `ContactSection`
**Mục tiêu:** Render section Liên hệ với 3 thẻ

Yêu cầu cho `ContactSection`:
- Nền `bg-slate-100`, padding dọc rộng
- Nội dung bọc trong container rộng: `max-w-[1440px] w-full px-4 xl:px-[100px] mx-auto`
- Tiêu đề với 3 chấm trang trí (chấm giữa `bg-blue-600`, 2 bên `bg-blue-300`)
- Grid 3 cột (responsive: 1 cột mobile, 3 cột từ `md:`)

Yêu cầu cho `ContactCard`:
- Nền trắng, shadow, bo góc, toàn bộ là thẻ `<a>` clickable
- Hover: shadow đậm + nhấc lên `-translate-y-1`
- Icon SVG tương ứng (email, phone, LinkedIn) màu xanh `#3B82F6`

**Output:** Component `ContactCard` + `ContactSection`

---

### Bước 8: Lắp ráp `App` + Kiểm tra toàn bộ
**Mục tiêu:** Kết nối tất cả components và kích hoạt tính năng Đa ngôn ngữ (Global Language).

Yêu cầu:
- `App` khai báo state mới: `const [lang, setLang] = React.useState('vi');`.
- Tạo biến lấy dữ liệu hiện tại: `const currentData = window.PORTFOLIO_DATA[lang];`.
- Truyền `currentData`, `lang`, và hàm `toggleLanguage` (đổi qua lại giữa 'vi' và 'en') xuống `<Navigation>`.
- Truyền `currentData` tương ứng xuống TẤT CẢ các component con (`<HomeSection data={currentData.hero} />`, `<AboutSection data={currentData.about} />`, v.v.).
- Các component con cần được cập nhật để đọc dữ liệu từ `props.data` thay vì đọc trực tiếp từ window.
- Đảm bảo giữ nguyên tính năng cuộn mượt (smooth scroll).

**Kiểm tra checklist:**
- [ ] Mở `index.html` bằng double-click, không cần server → trang hiển thị
- [ ] Click 4 tabs → nội dung thay đổi, không reload trang
- [ ] Ảnh `av.png` hiển thị đúng trên Hero
- [ ] Fade-in animation hoạt động khi chuyển tab
- [ ] Copy folder sang Desktop → mở lại vẫn hoạt động bình thường
- [ ] F12 Console → không có lỗi đỏ
- [ ] Resize cửa sổ xuống nhỏ → layout chuyển sang 1 cột

---

### Bước 9 (Tùy chọn): Điền thông tin thực + hoàn thiện
**Mục tiêu:** Cập nhật nội dung thực tế sau khi khung hoàn chỉnh

Các mục cần cập nhật trong `data.js`:
- Thông tin liên hệ thực: email, số điện thoại, URL LinkedIn
- `cvLink`: đường dẫn `./cv.pdf` khi có file CV
- Văn bản giới thiệu chi tiết hơn nếu cần

---

*Kế hoạch này được tạo bởi Claude Code — phiên bản: 2026-05-22*
