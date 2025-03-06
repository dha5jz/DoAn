import React from "react";
import "./style.scss";

const materials = [
  {
    title: "Hiểu về lo âu và cách kiểm soát",
    type: "Bài viết",
    link: "#",
    description: "Bài viết cung cấp thông tin chi tiết về lo âu và các phương pháp kiểm soát hiệu quả.",
    category: "Lo âu",
  },
  {
    title: "Kỹ năng quản lý stress trong học tập",
    type: "Video",
    link: "#",
    description: "Video hướng dẫn các kỹ năng quản lý stress hiệu quả dành cho học sinh, sinh viên.",
    category: "Stress",
  },
  {
    title: "Tài liệu về trầm cảm và các dấu hiệu nhận biết",
    type: "PDF",
    link: "#",
    description: "Tài liệu cung cấp thông tin về trầm cảm, các dấu hiệu nhận biết và cách hỗ trợ.",
    category: "Trầm cảm",
  },
  {
    title: "Các bài tập thư giãn và giảm căng thẳng",
    type: "Bài viết",
    link: "#",
    description: "Bài viết hướng dẫn các bài tập thư giãn và giảm căng thẳng đơn giản có thể thực hiện tại nhà.",
    category: "Phát triển bản thân",
  },
  {
    title: "Tâm lý học tích cực",
    type: "Sách",
    link: "#",
    description: "Khám phá sức mạnh của tâm lý học tích cực trong việc nâng cao hạnh phúc.",
    category: "Phát triển bản thân",
  },
];

function ReferenceMaterials() {
  return (
    <div className="reference-materials-page">
      <section className="materials-section">
        <div className="container">
          <h2>Tư liệu tham khảo</h2>
          <p className="intro-text">
            Dưới đây là các tài liệu, bài viết và video hữu ích giúp bạn hiểu rõ hơn về sức khỏe tâm lý.
          </p>

          <div className="materials-grid">
            {materials.map((material, index) => (
              <div key={index} className="material-item">
                <h3>{material.title}</h3>
                <p className="material-type">
                  <strong>Loại:</strong> {material.type}
                </p>
                <p className="material-description">{material.description}</p>
                <span className={`category ${material.category.toLowerCase().replace(/\s/g, "-")}`}>
                  {material.category}
                </span>
                <a href={material.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Xem tài liệu
                </a>
              </div>
            ))}
          </div>

          {/* Gợi ý tìm thêm tài liệu */}
          <div className="suggestions">
            <h3>Bạn cần thêm tài liệu?</h3>
            <p>
              Nếu bạn muốn tìm hiểu thêm, hãy liên hệ với chúng tôi hoặc xem thư viện tài liệu mở.
            </p>
            <a href="/contact" className="btn btn-secondary">
              Liên hệ hỗ trợ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReferenceMaterials;
