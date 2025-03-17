import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Badge, Form, Pagination } from 'react-bootstrap';
import { Bar, Pie } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, LinearScale, ArcElement, BarElement, Title, Tooltip, Legend 
} from 'chart.js';
import { FaUserGraduate, FaQuestionCircle, FaEnvelopeOpenText, FaSearch } from 'react-icons/fa'; // Thêm icon
import './style.scss';
// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, Title, Tooltip, Legend); 
function AdminHomePage() {
  const [studentCount, setStudentCount] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [assessmentData, setAssessmentData] = useState({
    labels: ['Lo âu', 'Trầm cảm', 'Căng thẳng'],
    datasets: [{
      label: 'Số lượng học sinh',
      data: [50, 20, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
      ],
      borderWidth: 1,
    }],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const requestsPerPage = 5;

  useEffect(() => {
    setStudentCount(150);
    setQuestionCount(200);
    setPendingRequests([
      { id: 1, studentName: 'Nguyễn Văn A', message: 'Em muốn được tư vấn về lo âu.', date: '2024-10-27' },
      { id: 2, studentName: 'Trần Thị B', message: 'Em gặp khó khăn trong học tập.', date: '2024-10-26' },
      { id: 3, studentName: 'Lê C', message: 'Em gặp vấn đề về bạn bè.', date: '2024-10-25' },
      { id: 4, studentName: 'Phạm D', message: 'Em không tập trung học được.', date: '2024-10-24' },
      { id: 5, studentName: 'Hoàng E', message: 'Em hay mất ngủ.', date: '2024-10-23' },
      { id: 6, studentName: 'Vũ F', message: 'Em sợ đám đông.', date: '2024-10-22' },
      { id: 7, studentName: 'Trương G', message: 'Em hay buồn vô cớ.', date: '2024-10-21' },
      { id: 8, studentName: 'Đỗ H', message: 'Em cảm thấy cô đơn.', date: '2024-10-20' },
      { id: 9, studentName: 'Cao I', message: 'Em không muốn đến trường.', date: '2024-10-19' },
      { id: 10, studentName: 'Bùi K', message: 'Em hay lo lắng về tương lai.', date: '2024-10-18' },
    ]);
  }, []);

  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = pendingRequests.slice(indexOfFirstRequest, indexOfLastRequest);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="admin-dashboard">
      <Row>
        <Col md={4}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title><FaUserGraduate /> Tổng số học sinh</Card.Title>
              <Card.Text>{studentCount}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title><FaQuestionCircle /> Tổng số câu hỏi</Card.Title>
              <Card.Text>{questionCount}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title><FaEnvelopeOpenText /> Yêu cầu tư vấn mới</Card.Title>
              <Card.Text>{pendingRequests.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={8}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Yêu cầu hỗ trợ đang chờ xử lý</Card.Title>
              <Form className="mb-3">
                <Form.Control type="text" placeholder="Tìm kiếm..." />
              </Form>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Học sinh</th>
                    <th>Nội dung</th>
                    <th>Ngày</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRequests.map((request) => (
                    <tr key={request.id}>
                      <td>{request.id}</td>
                      <td>{request.studentName}</td>
                      <td>{request.message}</td>
                      <td>{request.date}</td>
                      <td><Badge bg="warning">Chờ xử lý</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Pagination>
                {Array(Math.ceil(pendingRequests.length / requestsPerPage)).fill().map((_, index) => (
                  <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Thống kê đánh giá</Card.Title>
              <Pie data={assessmentData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Thống kê số lượng học sinh tham gia đánh giá theo tháng</Card.Title>
              <Bar
                data={{
                  labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
                  datasets: [{
                    label: 'Số lượng học sinh',
                    data: [10, 15, 20, 25, 30, 35],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderWidth: 1,
                  }],
                }}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                  plugins: {
                    tooltip: {
                      callbacks: {
                        label: (context) => {
                          return `Số học sinh: ${context.parsed.y}`;
                        },
                      },
                    },
                  },
                }}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          {/* Thêm biểu đồ thống kê khác nếu cần */}
        </Col>
      </Row>
    </Container>
  );
}

export default AdminHomePage;