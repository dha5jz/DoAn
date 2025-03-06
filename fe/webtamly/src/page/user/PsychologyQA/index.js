import React, { useState } from "react";
import "./style.scss"; // Import SCSS file
import { Button, Form } from "react-bootstrap";

function PsychologyQA() {
  const [questions, setQuestions] = useState([
    {
      question: "Làm thế nào để tôi giảm bớt lo âu trước kỳ thi?",
      answer:
        "Bạn có thể thử các kỹ thuật thư giãn như hít thở sâu, thiền định hoặc tập yoga. Ngoài ra, hãy đảm bảo bạn có đủ thời gian để ôn tập và ngủ đủ giấc.",
    },
    {
      question:
        "Tôi thường xuyên cảm thấy buồn bã và mất hứng thú với mọi thứ, tôi có bị trầm cảm không?",
      answer:
        "Các triệu chứng bạn mô tả có thể là dấu hiệu của trầm cảm. Tuy nhiên, để có chẩn đoán chính xác, bạn nên tham khảo ý kiến của chuyên gia tâm lý.",
    },
    {
      question: "Làm thế nào để tôi cải thiện kỹ năng giao tiếp?",
      answer:
        "Bạn có thể tham gia các khóa học kỹ năng giao tiếp, đọc sách về chủ đề này hoặc thực hành giao tiếp với bạn bè và người thân.",
    },
  ]);

  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setQuestions([
        ...questions,
        { question: newQuestion, answer: newAnswer || "Chờ phản hồi từ chuyên gia..." },
      ]);
      setNewQuestion("");
      setNewAnswer("");
    }
  };

  return (
    <div className="psychology-qa-page">
      <section className="qa-section">
        <div className="container">
          <h2>Hỏi đáp tâm lý</h2>
          <p className="description">
            Hãy gửi câu hỏi về tâm lý của bạn, các chuyên gia sẽ trả lời sớm nhất có thể.
          </p>

          {/* Danh sách câu hỏi */}
          <div className="qa-list">
            {questions.map((qa, index) => (
              <div key={index} className="qa-item">
                <h5 className="question">{qa.question}</h5>
                <p className="answer">
                  <strong>Trả lời:</strong> {qa.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Biểu mẫu đặt câu hỏi */}
          <div className="ask-question-form">
            <h3>Đặt câu hỏi của bạn</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Câu hỏi:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  required
                  placeholder="Nhập câu hỏi của bạn..."
                />
              </Form.Group>

              

              <Button variant="primary" type="submit">
                Gửi câu hỏi
              </Button>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PsychologyQA;
