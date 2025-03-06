import React from "react";
import "./style.scss";

function TestResultGuide() {
  return (
    <div className="test-result-guide-page">
      <section className="guide-section">
        <div className="container">
          <h2>Hướng dẫn đọc kết quả bài test</h2>

          {/* Giới thiệu chung */}
          <p className="intro-text">
            Sau khi hoàn thành bài test, bạn sẽ nhận được kết quả phân tích tình trạng tâm lý của mình. 
            Dưới đây là hướng dẫn giúp bạn hiểu rõ hơn về kết quả.
          </p>

          {/* Giải thích các thang điểm */}
          <div className="result-interpretation">
            <h3>Giải thích các thang điểm</h3>
            <p>
              Kết quả bài test được trình bày dưới dạng điểm số trên các thang đo tâm lý khác nhau (ví dụ: lo âu, stress, trầm cảm).
              Mỗi thang đo có các mức điểm tương ứng với mức độ biểu hiện của triệu chứng.
            </p>
            <ul className="levels">
              <li className="level mild">
                <span className="level-label">Mức độ bình thường:</span> Điểm số nằm trong khoảng từ X đến Y.
              </li>
              <li className="level moderate">
                <span className="level-label">Mức độ nhẹ:</span> Điểm số nằm trong khoảng từ Y đến Z.
              </li>
              <li className="level severe">
                <span className="level-label">Mức độ trung bình:</span> Điểm số nằm trong khoảng từ Z đến A.
              </li>
              <li className="level critical">
                <span className="level-label">Mức độ nặng:</span> Điểm số vượt quá A.
              </li>
            </ul>
          </div>

          {/* Ví dụ kết quả */}
          <div className="result-examples">
            <h3>Ví dụ về kết quả</h3>
            <div className="example mild">
              <h4>Ví dụ 1: Kết quả đánh giá lo âu</h4>
              <p>Điểm số: 15 (Mức độ trung bình)</p>
              <p>
                Bạn đang có những biểu hiện lo âu ở mức độ trung bình. Bạn nên tìm hiểu thêm về các phương pháp giảm lo âu và có thể liên hệ với chuyên gia tư vấn nếu cần thiết.
              </p>
            </div>
            <div className="example moderate">
              <h4>Ví dụ 2: Kết quả đánh giá stress</h4>
              <p>Điểm số: 8 (Mức độ nhẹ)</p>
              <p>
                Bạn đang có những biểu hiện stress ở mức độ nhẹ. Hãy thử áp dụng các kỹ thuật thư giãn và quản lý thời gian để giảm stress.
              </p>
            </div>
          </div>

          {/* Các bước tiếp theo */}
          <div className="next-steps">
            <h3>Các bước tiếp theo</h3>
            <ul>
              <li>Tìm hiểu thêm về các phương pháp tự chăm sóc sức khỏe tâm lý.</li>
              <li>Liên hệ với chuyên gia tư vấn để được hỗ trợ chuyên sâu.</li>
              <li>Tham gia các buổi tư vấn nhóm hoặc các khóa học kỹ năng.</li>
            </ul>
          </div>

          {/* Lưu ý */}
          <div className="disclaimer">
            <h3>Lưu ý</h3>
            <p>
              Kết quả bài test chỉ mang tính chất tham khảo. Để có kết quả chính xác nhất và nhận được sự tư vấn phù hợp, bạn nên tham khảo ý kiến của chuyên gia tâm lý.
            </p>
          </div>

          {/* Khu vực hỗ trợ */}
          <div className="support-section">
            <h3>Bạn cần hỗ trợ thêm?</h3>
            <p>
              Nếu bạn có bất kỳ câu hỏi nào về kết quả của mình, hãy liên hệ với đội ngũ chuyên gia của chúng tôi để được tư vấn.
            </p>
            <a href="/contact" className="btn btn-primary">Liên hệ ngay</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestResultGuide;
