// SchoolIntro.js
import React from 'react';
import './style.scss'; // Import SCSS file

function SchoolIntro() {
  return (
    <div className="school-intro-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Trường THPT Kim Sơn B - Nơi ươm mầm tài năng</h1>
          <p>Trường THPT Kim Sơn B là một ngôi trường có truyền thống lâu đời và chất lượng giáo dục hàng đầu tỉnh Ninh Bình.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="school-image.jpg" alt="Trường THPT Kim Sơn B" className="school-image" /> {/* Thay thế bằng ảnh trường */}
            </div>
            <div className="col-md-6">
              <h2>Lịch sử và truyền thống</h2>
              <p>Trường THPT Kim Sơn B được thành lập vào năm ..., với bề dày lịch sử và truyền thống đáng tự hào. Trường đã đào tạo ra nhiều thế hệ học sinh thành đạt, góp phần xây dựng đất nước.</p>

              <h2>Đội ngũ giáo viên</h2>
              <p>Đội ngũ giáo viên của trường là những nhà giáo tâm huyết, giàu kinh nghiệm và chuyên môn cao. Các thầy cô luôn tận tình giúp đỡ học sinh, tạo môi trường học tập thân thiện và hiệu quả.</p>

              <h2>Thành tích nổi bật</h2>
              <p>Trường THPT Kim Sơn B đã đạt được nhiều thành tích cao trong các kỳ thi học sinh giỏi, các cuộc thi văn nghệ, thể thao. Trường cũng là một trong những trường có tỷ lệ học sinh đỗ đại học cao nhất tỉnh.</p>

              <h2>Môi trường học tập</h2>
              <p>Trường có cơ sở vật chất khang trang, hiện đại, đáp ứng tốt nhu cầu học tập và sinh hoạt của học sinh. Môi trường học tập thân thiện, an toàn và đầy tính sáng tạo.</p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SchoolIntro;