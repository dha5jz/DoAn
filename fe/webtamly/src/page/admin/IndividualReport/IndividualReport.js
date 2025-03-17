import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Row, Col, Table } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './IndividualReport.scss';

function IndividualReport() {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [studentInfo, setStudentInfo] = useState(null);
  const [evaluationHistory, setEvaluationHistory] = useState([]);
  const [chartData, setChartData] = useState({});

  // Giả định dữ liệu
  useEffect(() => {
    // Danh sách lớp
    setClasses(["10A1", "10A2", "11A1", "11A2", "12A1", "12A2"]);

    // Danh sách học sinh (bao gồm thuộc tính mã số)
    setStudents([
      { id: '1', name: "Nguyễn Văn A", class: "10A1", dob: "2006-05-15", contact: "0123456789" },
      { id: '2', name: "Trần Thị B", class: "10A1", dob: "2006-07-20", contact: "0987654321" },
      { id: '3', name: "Lê Văn C", class: "10A2", dob: "2006-11-11", contact: "0112233445" },
      { id: '4', name: "Phạm Thị D", class: "11A1", dob: "2005-08-08", contact: "0223344556" },
      { id: '5', name: "Hoàng Văn E", class: "11A2", dob: "2005-12-12", contact: "0334455667" },
      { id: '6', name: "Vũ Thị F", class: "12A1", dob: "2005-03-03", contact: "0445566778" },
      // Thêm dữ liệu nếu cần
    ]);

    // Danh sách lịch sử đánh giá (mỗi bản ghi chứa: id, studentId, date, result, detail)
    const sampleHistory = [
      { id: 1, studentId: "1", date: "2024-01-10", result: 75, detail: "Cảm thấy khá ổn định." },
      { id: 2, studentId: "1", date: "2024-02-10", result: 80, detail: "Tâm lý cải thiện so với tháng trước." },
      { id: 3, studentId: "1", date: "2024-03-10", result: 85, detail: "Có lúc căng thẳng, cần tư vấn thêm." },
      { id: 4, studentId: "2", date: "2024-01-15", result: 60, detail: "Cảm thấy mệt mỏi và buồn bã." },
      { id: 5, studentId: "2", date: "2024-02-15", result: 65, detail: "Không thay đổi nhiều so với tháng trước." },
      { id: 6, studentId: "2", date: "2024-03-15", result: 70, detail: "Có dấu hiệu cải thiện nhẹ." },
      // Thêm dữ liệu nếu cần
    ];
    setEvaluationHistory(sampleHistory);
  }, []);

  // Khi chọn lớp, reset học sinh đã chọn
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedStudentId("");
    setStudentInfo(null);
    setChartData({});
  };

  // Lọc học sinh theo lớp đã chọn
  const filteredStudents = selectedClass ? students.filter(s => s.class === selectedClass) : students;

  // Khi chọn học sinh, cập nhật thông tin chi tiết và biểu đồ
  const handleStudentChange = (e) => {
    setSelectedStudentId(e.target.value);
  };

  useEffect(() => {
    if (selectedStudentId) {
      const info = students.find(s => s.id === selectedStudentId);
      setStudentInfo(info);
      const history = evaluationHistory.filter(e => e.studentId === selectedStudentId);
      const sortedHistory = history.sort((a, b) => new Date(a.date) - new Date(b.date));
      const labels = sortedHistory.map(e => e.date);
      const dataPoints = sortedHistory.map(e => e.result);
      setChartData({
        labels,
        datasets: [
          {
            label: "Kết quả đánh giá",
            data: dataPoints,
            borderColor: "#007bff",
            backgroundColor: "rgba(0,123,255,0.2)",
            fill: true,
          },
        ],
      });
    } else {
      setStudentInfo(null);
      setChartData({});
    }
  }, [selectedStudentId, students, evaluationHistory]);

  return (
    <Container className="individual-report">
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Báo cáo Cá nhân</Card.Title>
          <Form>
            <Form.Group controlId="classSelect">
              <Form.Label>Chọn lớp</Form.Label>
              <Form.Control as="select" value={selectedClass} onChange={handleClassChange}>
                <option value="">Chọn lớp</option>
                {classes.map((cls, index) => (
                  <option key={index} value={cls}>{cls}</option>
                ))}
              </Form.Control>
            </Form.Group>
            {selectedClass && (
              <Form.Group controlId="studentSelect" className="mt-3">
                <Form.Label>Chọn học sinh (Tên - Mã số)</Form.Label>
                <Form.Control as="select" value={selectedStudentId} onChange={handleStudentChange}>
                  <option value="">Chọn học sinh</option>
                  {filteredStudents.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} - {s.id}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            )}
          </Form>
        </Card.Body>
      </Card>

      {studentInfo && (
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Thông tin học sinh</Card.Title>
            <Row>
              <Col md={6}>
                <p><strong>Họ tên:</strong> {studentInfo.name}</p>
                <p><strong>Lớp:</strong> {studentInfo.class}</p>
              </Col>
              <Col md={6}>
                <p><strong>Ngày sinh:</strong> {studentInfo.dob}</p>
                <p><strong>Liên hệ:</strong> {studentInfo.contact}</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}

      {evaluationHistory.filter(e => e.studentId === selectedStudentId).length > 0 && (
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Lịch sử đánh giá</Card.Title>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Ngày</th>
                  <th>Kết quả</th>
                  <th>Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {evaluationHistory.filter(e => e.studentId === selectedStudentId).map((e, index) => (
                  <tr key={e.id}>
                    <td>{index + 1}</td>
                    <td>{e.date}</td>
                    <td>{e.result}</td>
                    <td>{e.detail}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}

      {chartData.labels && chartData.labels.length > 0 && (
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Sự thay đổi kết quả đánh giá theo thời gian</Card.Title>
            <div className="chart-container">
              <Line data={chartData} />
            </div>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default IndividualReport;
