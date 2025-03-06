// HomePage.js (Trang chủ)
import React from 'react';
import './style.scss'; // Import SCSS file
import { Link } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Đánh giá tâm lý học đường - Hỗ trợ và phát triển toàn diện</h1>
          <p>Hệ thống đánh giá tâm lý trực tuyến giúp bạn hiểu rõ bản thân và nhận được sự hỗ trợ cần thiết.</p>
          <button className="btn btn-primary" >Bắt đầu đánh giá ngay</button>
        </div>
      </section>

      <section className="system-intro">
        <h2>Hệ thống đánh giá tâm lý trực tuyến - Đồng hành cùng bạn</h2>
        <div className="features">
          <div className="feature">
            <i className="fas fa-chart-line"></i> {/* Font Awesome icon (cần cài đặt) */}
            <h3>Đánh giá toàn diện</h3>
            <p>Đánh giá lo âu, stress, trầm cảm và nhiều hơn nữa.</p>
          </div>
          <div className="feature">
            <i className="fas fa-users"></i>
            <h3>Tư vấn chuyên gia</h3>
            <p>Nhận hỗ trợ từ các chuyên gia tâm lý có kinh nghiệm.</p>
          </div>
          <div className="feature">
            <i className="fas fa-book"></i>
            <h3>Tài nguyên kiến thức</h3>
            <p>Truy cập các bài viết và tài liệu hữu ích.</p>
          </div>
          <div className="feature">
            <i className="fas fa-lock"></i>
            <h3>Bảo mật thông tin</h3>
            <p>Thông tin cá nhân của bạn được bảo mật tuyệt đối.</p>
          </div>
        </div>
      </section>

      <section className="school-intro">
        <h2>Trường THPT Kim Sơn B - Nơi ươm mầm tài năng</h2>
        <div className="school-info">
          <img src="school-image.jpg" alt="Trường THPT Kim Sơn B" className="school-image" /> {/* Thay thế bằng ảnh trường */}
          <div className="school-details">
            <p>Trường THPT Kim Sơn B là một ngôi trường có truyền thống lâu đời và chất lượng giáo dục hàng đầu.</p>
            <p>Với đội ngũ giáo viên tận tâm và môi trường học tập thân thiện, chúng tôi cam kết mang đến cho học sinh những trải nghiệm tốt nhất.</p>
            <Link to={ROUTERS.USER.SCHOOL}>Xem thêm về trường</Link>
          </div>
        </div>
      </section>

      <section className="join-us">
        <h2>Hãy cùng chúng tôi xây dựng một môi trường học đường hạnh phúc</h2>
      </section>

      <section className="testimonials">
        <h2>Phản hồi từ người dùng</h2>
        <div className="testimonial">
          <p>"Hệ thống đánh giá tâm lý đã giúp tôi hiểu rõ hơn về bản thân mình."</p>
          <p>- Học sinh A</p>
        </div>
        <div className="testimonial">
          <p>"Tôi rất hài lòng với sự hỗ trợ từ các chuyên gia tư vấn."</p>
          <p>- Phụ huynh B</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;