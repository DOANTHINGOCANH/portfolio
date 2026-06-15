# link
https://gemini.google.com/gem/coding-partner
# cau lenh
Tôi dự kiến xây dựng một website mini trình bày portfolio của cá nhân tôi với html, react js, tailwind css. Tôi dự kiến khi mở file index.html thì có thể tương tác chuyển tab, load nội dung. tất cả các file html, js, css, image, video,...đều nằm trong cùng một folder portfolio. Tất cả các đường dẫn đều được thiết kế theo dạng relative để khi tôi copy folder sang máy tính khác thì website portfolio của tôi vẫn hoạt động tốt. Hãy giúp tôi soạn prompt để nhờ claude code dùng chế độ /plan (chỉ lên plan không thực thi code) xây dựng trang index.html theo như hình index.png đính kèm (file index.png hiện đang nằm trong thư mục portfolio/index.png). Kết quả của plan xuất ra thành file plan.md để tôi đọc kiểm tra, và sửa tay nếu cần. Sau khi hoàn thiện file plan.md theo ý muốn, bước tiếp theo sau đó tôi sẽ nhờ claude code triển khai build code dựa trên file plan.md này.
# câu lệnh tiếp
Đây là file plan.md do claude code đề xuất, tôi muốn prompt nhờ claude code triển khai dựa trên file promt.md này, hãy giúp tôi viết prompt

# Sửa lại trang chủ
Tôi vừa cập nhật file `plan.md`, tập trung vào việc tinh chỉnh toàn bộ CSS cho phần Trang chủ (Bước 4: Component HomeSection) để đạt độ chính xác 100% so với bản thiết kế mẫu.

Hãy đọc lại file `plan.md` mới nhất và tiến hành viết lại mã CSS (Tailwind classes) cho Component `<HomeSection>` trong file `index.html`. 

Các điểm cần chú ý đặc biệt khi code:
1. Thu nhỏ `max-width` của container.
2. Giảm các chỉ số `font-size`, `line-height`, `margin/padding` và `gap` của cột text bên trái cho gọn gàng.
3. Thu nhỏ kích thước button và làm mỏng border của nút Liên hệ.
4. Thu nhỏ vùng chứa thẻ card ảnh, làm mềm viền (`rounded-2xl`) và giảm opacity của bóng đổ (`shadow-sm` hoặc shadow custom nhẹ nhàng).
5. Đảm bảo `<HomeSection>` vẫn đang đọc dữ liệu từ `props.data` để duy trì tính năng đa ngôn ngữ.

Chỉ chỉnh sửa CSS trong phần HomeSection, không làm thay đổi các khối HTML gốc quá nhiều. Báo lại cho tôi khi bạn đã lưu file thành công để tôi kiểm tra F5 nhé.