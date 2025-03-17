import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Modal,
  Pagination
} from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import './style.scss';

function StudentResult() {
  const [results, setResults] = useState([]);
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [showFullDetail, setShowFullDetail] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    // Tạo dữ liệu mẫu cho 30 học sinh
    const sampleResults = [];
    for (let i = 1; i <= 30; i++) {
      sampleResults.push({
        id: i,
        studentName: `Học sinh ${i}`,
        testName:
          i % 3 === 0
            ? 'Trắc nghiệm tính cách'
            : i % 3 === 1
            ? 'Khảo sát stress'
            : 'Đánh giá EQ',
        score: `${70 + (i % 30)}/100`,
        date: `2024-03-${(i % 28) + 1 < 10 ? '0' + ((i % 28) + 1) : (i % 28) + 1}`,
        class: i % 2 === 0 ? '10A1' : '11A2',
        status: i % 2 === 0 ? 'Lo âu nhẹ' : 'Trầm cảm trung bình',
        detail:
          'Chi tiết đánh giá: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
          `(Học sinh ${i} có thể cần được tư vấn thêm để cải thiện tâm lý.)`
      });
    }
    setResults(sampleResults);
    // Danh sách lớp giả định
    setClasses(['10A1', '10A2', '11A1', '11A2', '12A1', '12A2']);
  }, []);

  const handleClassClick = (className) => {
    setSelectedClass(className);
    setCurrentPage(1);
  };

  // Lọc theo lớp: nếu chưa chọn lớp thì hiển thị tất cả
  const filteredResults = selectedClass
    ? results.filter((result) => result.class === selectedClass)
    : results;

  // Phân trang: cắt mảng kết quả theo trang hiện tại
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentResults = filteredResults.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);

  const handleView = (item) => {
    setModalData(item);
    setShowFullDetail(false);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const toggleDetail = () => setShowFullDetail(!showFullDetail);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container className="student-result">
      <Row>
        <Col md={3}>
          <Card className="class-card">
            <Card.Body>
              <Card.Title>Danh sách lớp</Card.Title>
              <div
                className={`class-item ${selectedClass === null ? 'active' : ''}`}
                onClick={() => { setSelectedClass(null); setCurrentPage(1); }}
              >
                Tất cả
              </div>
              {classes.map((className) => (
                <div
                  key={className}
                  className={`class-item ${selectedClass === className ? 'active' : ''}`}
                  onClick={() => handleClassClick(className)}
                >
                  {className}
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <Card className="result-card">
            <Card.Body>
              <Card.Title>
                Kết quả đánh giá tâm lý học sinh {selectedClass ? `lớp ${selectedClass}` : 'tất cả'}
              </Card.Title>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tên học sinh</th>
                    <th>Bài kiểm tra</th>
                    <th>Điểm</th>
                    <th>Ngày làm</th>
                    <th>Lớp</th>
                    <th>Tình trạng</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {currentResults.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.studentName}</td>
                      <td>{item.testName}</td>
                      <td>{item.score}</td>
                      <td>{item.date}</td>
                      <td>{item.class}</td>
                      <td>{item.status}</td>
                      <td>
                        <Button variant="info" size="sm" onClick={() => handleView(item)}>
                          <FaEye /> Xem
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              {totalPages > 1 && (
                <Pagination className="justify-content-center mt-3">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Pagination.Item
                      key={page}
                      active={page === currentPage}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Pagination.Item>
                  ))}
                </Pagination>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal xem chi tiết */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết kết quả</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalData && (
            <div className="student-details">
              <p><strong>Họ tên:</strong> {modalData.studentName}</p>
              <p><strong>Bài kiểm tra:</strong> {modalData.testName}</p>
              <p><strong>Điểm:</strong> {modalData.score}</p>
              <p><strong>Ngày làm:</strong> {modalData.date}</p>
              <p><strong>Lớp:</strong> {modalData.class}</p>
              <p><strong>Tình trạng:</strong> {modalData.status}</p>
              <hr />
              <p>
                <strong>Chi tiết:</strong>{' '}
                {modalData.detail.length > 100 && !showFullDetail
                  ? `${modalData.detail.substring(0, 100)}...`
                  : modalData.detail}
              </p>
              {modalData.detail.length > 100 && (
                <Button variant="link" onClick={toggleDetail}>
                  {showFullDetail ? 'Rút gọn' : 'Xem thêm'}
                </Button>
              )}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default StudentResult;
