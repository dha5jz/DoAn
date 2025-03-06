import React from 'react';
import './style.scss'; // Import SCSS file
import { Link } from 'react-router-dom';
import { ROUTERS } from "../../../utils/router";

function SupportPage() {
  const supportItems = [
    { path: ROUTERS.USER.CONSULTATIONFORM, title: "Đăng ký tư vấn", desc: "Đăng ký để nhận tư vấn từ chuyên gia tâm lý." },
    { path: ROUTERS.USER.FAQ, title: "Câu hỏi thường gặp", desc: "Tìm câu trả lời cho các câu hỏi thường gặp." },
    { path: ROUTERS.USER.RESULTGUIDE, title: "Hướng dẫn đọc kết quả", desc: "Hướng dẫn chi tiết về cách đọc và hiểu kết quả bài test." },
    { path: ROUTERS.USER.PSYCHOLOGYQA, title: "Hỏi đáp tâm lý", desc: "Đặt câu hỏi và nhận câu trả lời từ chuyên gia." },
    { path: ROUTERS.USER.REFERENCEMATERIALS, title: "Tư liệu", desc: "Truy cập các tài liệu tham khảo hữu ích." }
  ];

  return (
    <div className="support-page">
      <section className="support-section">
        <div className="container">
          <h2 >Hỗ trợ</h2>
          <p>Chúng tôi luôn sẵn sàng hỗ trợ bạn. Vui lòng chọn một trong các tùy chọn sau:</p>

          <div className="support-options">
            {supportItems.map((item, index) => (
              <div key={index} className="option">
                <Link to={item.path} className="option-link">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SupportPage;
