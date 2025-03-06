// SystemIntro.js
import React from "react";
import "./style.scss"; // Import SCSS file

function SystemIntro() {
  return (
    <div className="system-intro-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Hệ thống đánh giá tâm lý học đường - Đồng hành cùng bạn</h1>
          <p>Chúng tôi cung cấp một nền tảng trực tuyến giúp học sinh, sinh viên đánh giá và cải thiện sức khỏe tâm lý.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Các tính năng nổi bật</h2>
          <div className="row g-3">
            {[
              { icon: "chart-line", title: "Đánh giá toàn diện", desc: "Đánh giá lo âu, stress, trầm cảm và nhiều hơn nữa." },
              { icon: "users", title: "Tư vấn chuyên gia", desc: "Nhận hỗ trợ từ các chuyên gia tâm lý." },
              { icon: "book", title: "Tài nguyên kiến thức", desc: "Truy cập các bài viết và tài liệu hữu ích." },
              { icon: "lock", title: "Bảo mật thông tin", desc: "Thông tin cá nhân của bạn được bảo mật tuyệt đối." },
              { icon: "user-shield", title: "Tài khoản cá nhân", desc: "Quản lý thông tin và lịch sử đánh giá của bạn." },
              { icon: "comments", title: "Hỗ trợ trực tuyến", desc: "Liên hệ với chúng tôi qua chatbot hoặc form liên hệ." }
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="feature-item">
                  <i className={`fas fa-${feature.icon}`}></i>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>Quy trình đánh giá</h2>
          <ol>
            <li>Chọn bài kiểm tra phù hợp.</li>
            <li>Trả lời các câu hỏi trắc nghiệm và câu hỏi mở.</li>
            <li>Nhận kết quả đánh giá sơ bộ.</li>
            <li>Nhận tư vấn cá nhân hóa (nếu cần).</li>
          </ol>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Phản hồi từ người dùng</h2>
          {[
            { feedback: "Hệ thống đánh giá tâm lý đã giúp tôi hiểu rõ hơn về bản thân mình.", user: "Học sinh A" },
            { feedback: "Tôi rất hài lòng với sự hỗ trợ từ các chuyên gia tư vấn.", user: "Phụ huynh B" }
          ].map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <p>"{testimonial.feedback}"</p>
              <p>- {testimonial.user}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SystemIntro;
