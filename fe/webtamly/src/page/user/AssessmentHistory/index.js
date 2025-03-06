import React from "react";
import { Container, Row, Col, Card, Table, Badge } from "react-bootstrap";
import "./style.scss";

const AssessmentHistory = () => {
  // Dữ liệu giả lập lịch sử đánh giá
  const assessmentHistory = [
    {
      date: "2024-02-01",
      score: 85,
      level: "Trung bình",
      details: "Học sinh có mức độ căng thẳng trung bình, cần duy trì cân bằng.",
    },
    {
      date: "2024-01-15",
      score: 70,
      level: "Thấp",
      details: "Học sinh không có dấu hiệu căng thẳng nghiêm trọng.",
    },
    {
      date: "2023-12-20",
      score: 95,
      level: "Cao",
      details: "Học sinh có mức độ căng thẳng cao, cần hỗ trợ từ gia đình và nhà trường.",
    },
  ];

  return (
    <div className="assessment-history">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="history-card">
              <Card.Body>
                <h2 className="history-title">Lịch Sử Đánh Giá Cá Nhân</h2>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Ngày đánh giá</th>
                      <th>Điểm số</th>
                      <th>Mức độ căng thẳng</th>
                      <th>Chi tiết</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assessmentHistory.map((assessment, index) => (
                      <tr key={index}>
                        <td>{assessment.date}</td>
                        <td>
                          <Badge bg={assessment.score > 90 ? "danger" : assessment.score > 75 ? "warning" : "success"}>
                            {assessment.score}
                          </Badge>
                        </td>
                        <td>{assessment.level}</td>
                        <td>{assessment.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AssessmentHistory;
