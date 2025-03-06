import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./style.scss";

function TestGuide() {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate("/bai-test");
  };

  return (
    <div className="test-guide">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="guide-card">
              <Card.Body>
                <h1 className="guide-title">Hướng Dẫn Làm Bài Test</h1>
                <p className="intro-text">
                  Bài test tâm lý giúp bạn đánh giá mức độ căng thẳng, lo âu và sức khỏe tinh thần của bản thân. Hãy làm bài một cách trung thực để có kết quả chính xác nhất.
                </p>

                <h3 className="section-title">📌 Hướng dẫn từng bước</h3>
                <ul className="guide-list">
                  <li>✅ Bài test gồm cả câu hỏi <b>trắc nghiệm</b> và <b>tự luận</b>.</li>
                  <li>✅ Đọc kỹ từng câu hỏi và chọn câu trả lời phù hợp nhất với bản thân.</li>
                  <li>✅ Với câu hỏi tự luận, hãy viết câu trả lời càng chi tiết càng tốt.</li>
                  <li>✅ Không có câu trả lời đúng hay sai, chỉ có câu trả lời phản ánh đúng cảm xúc của bạn.</li>
                  <li>✅ Khi hoàn thành bài test, nhấn <b>"Nộp bài"</b> để nhận kết quả đánh giá.</li>
                </ul>

                <h3 className="section-title">⚠️ Lưu ý khi làm bài</h3>
                <ul className="guide-list warning">
                  <li>🚀 Hãy tìm một không gian yên tĩnh để tập trung làm bài.</li>
                  <li>⏳ Không giới hạn thời gian, nhưng hãy trả lời một cách cẩn thận.</li>
                  <li>🔄 Bạn có thể làm lại bài test bất cứ lúc nào.</li>
                </ul>

                <div className="start-btn-container">
                  <Button variant="primary" size="lg" onClick={handleStartTest}>
                    Bắt Đầu Bài Test
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestGuide;
