import React, { useState } from 'react';
import './style.scss'; // Import SCSS file

function FAQ() {
  const [faqs, setFaqs] = useState([
    {
      question: 'Hệ thống đánh giá tâm lý này dành cho ai?',
      answer:
        'Hệ thống được thiết kế dành cho học sinh, sinh viên có nhu cầu tìm hiểu và cải thiện sức khỏe tâm lý.',
    },
    {
      question: 'Tôi có phải trả phí để sử dụng hệ thống không?',
      answer: 'Hiện tại, hệ thống cung cấp các bài đánh giá và tài liệu miễn phí.',
    },
    {
      question: 'Thông tin cá nhân của tôi có được bảo mật không?',
      answer:
        'Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân của người dùng. Dữ liệu được mã hóa và lưu trữ an toàn.',
    },
    {
      question: 'Kết quả đánh giá có chính xác không?',
      answer:
        'Kết quả đánh giá chỉ mang tính chất tham khảo. Để có kết quả chính xác nhất, bạn nên tham khảo ý kiến của chuyên gia tâm lý.',
    },
    {
      question: 'Tôi có thể liên hệ với ai nếu có thắc mắc?',
      answer:
        'Bạn có thể liên hệ với chúng tôi qua email hoặc số điện thoại được cung cấp trên trang Liên hệ.',
    },
  ]);

  const toggleAnswer = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div className="faq-page">
      <section className="faq-section">
        <div className="container">
          <h2>Câu hỏi thường gặp</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div
                  className="question"
                  onClick={() => toggleAnswer(index)}
                >
                  {faq.question}
                  <i
                    className={`fas ${faq.isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                  ></i>
                </div>
                {faq.isOpen && <div className="answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
