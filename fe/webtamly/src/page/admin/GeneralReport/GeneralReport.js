import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Table } from 'react-bootstrap';
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './GeneralReport.scss';

function GeneralReport() {
  const [classFilter, setClassFilter] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportData, setReportData] = useState([]);
  const [summaryStats, setSummaryStats] = useState({});

  useEffect(() => {
    // Dữ liệu mẫu cho báo cáo tổng hợp
    const sampleData = [
      { id: 1, studentName: "Nguyễn Văn A", class: "10A1", status: "Lo âu nhẹ", needSupport: false },
      { id: 2, studentName: "Trần Thị B", class: "10A2", status: "Trầm cảm", needSupport: true },
      { id: 3, studentName: "Lê Văn C", class: "11A1", status: "Bình thường", needSupport: false },
      { id: 4, studentName: "Phạm Thị D", class: "11A2", status: "Lo âu nhẹ", needSupport: false },
      { id: 5, studentName: "Hoàng Văn E", class: "12A1", status: "Trầm cảm", needSupport: true },
      { id: 6, studentName: "Vũ Thị F", class: "12A2", status: "Bình thường", needSupport: false },
      { id: 7, studentName: "Nguyễn Văn G", class: "10A1", status: "Lo âu nhẹ", needSupport: false },
      { id: 8, studentName: "Trần Thị H", class: "10A2", status: "Trầm cảm", needSupport: true },
      { id: 9, studentName: "Lê Văn I", class: "11A1", status: "Bình thường", needSupport: false },
      { id: 10, studentName: "Phạm Thị J", class: "11A2", status: "Lo âu nhẹ", needSupport: false },
    ];
    setReportData(sampleData);
    // Tính toán thống kê
    const statusCounts = {};
    let supportCount = 0;
    sampleData.forEach(item => {
      statusCounts[item.status] = (statusCounts[item.status] || 0) + 1;
      if (item.needSupport) supportCount++;
    });
    setSummaryStats({ statusCounts, supportCount, total: sampleData.length });
  }, []);

  // Lọc dữ liệu theo lớp (với filter ngày được bổ sung khi có API)
  const filteredData = classFilter === "All" ? reportData : reportData.filter(item => item.class === classFilter);

  // Chuẩn bị dữ liệu cho biểu đồ tròn
  const pieData = {
    labels: Object.keys(summaryStats.statusCounts || {}),
    datasets: [
      {
        data: Object.values(summaryStats.statusCounts || {}),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  // Biểu đồ cột cho số học sinh cần hỗ trợ
  const barData = {
    labels: ["Tổng số học sinh", "Cần hỗ trợ"],
    datasets: [
      {
        label: "Số lượng",
        data: [summaryStats.total || 0, summaryStats.supportCount || 0],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <Container className="general-report">
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Báo cáo Tổng Hợp</Card.Title>
          <Form className="filters mb-3">
            <Row>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Lọc theo lớp</Form.Label>
                  <Form.Control as="select" value={classFilter} onChange={(e) => setClassFilter(e.target.value)}>
                    <option value="All">Tất cả</option>
                    <option value="10A1">10A1</option>
                    <option value="10A2">10A2</option>
                    <option value="11A1">11A1</option>
                    <option value="11A2">11A2</option>
                    <option value="12A1">12A1</option>
                    <option value="12A2">12A2</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Từ ngày</Form.Label>
                  <Form.Control type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Đến ngày</Form.Label>
                  <Form.Control type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      <Row className="charts mb-3">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Phân bố tình trạng tâm lý</Card.Title>
              <div className="chart-container">
                <Pie data={pieData} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Số học sinh cần hỗ trợ</Card.Title>
              <div className="chart-container">
                <Bar data={barData} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card>
        <Card.Body>
          <Card.Title>Danh sách học sinh</Card.Title>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Họ tên</th>
                <th>Lớp</th>
                <th>Tình trạng</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.studentName}</td>
                  <td>{item.class}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default GeneralReport;
