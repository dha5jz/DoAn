import React, { useState, useEffect } from 'react';
import { Container, Card, Table, Button, Modal } from 'react-bootstrap';
import { FaEye, FaCheck, FaTimes } from 'react-icons/fa';
import './ScheduleRequests.scss';

function ScheduleRequests() {
  const [requests, setRequests] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    // Dữ liệu giả định cho yêu cầu đặt lịch từ học sinh
    const sampleRequests = [
      {
        id: 1,
        studentName: 'Nguyễn Văn A',
        date: '2024-04-01',
        time: '09:00',
        details: 'Em cần được tư vấn về stress do kỳ thi sắp diễn ra.',
        status: 'Chờ duyệt'
      },
      {
        id: 2,
        studentName: 'Trần Thị B',
        date: '2024-04-02',
        time: '10:30',
        details: 'Em muốn được đặt lịch tư vấn về trầm cảm nhẹ.',
        status: 'Chờ duyệt'
      },
      {
        id: 3,
        studentName: 'Lê Văn C',
        date: '2024-04-03',
        time: '14:00',
        details: 'Em gặp khó khăn trong việc kiểm soát cảm xúc.',
        status: 'Chờ duyệt'
      },
      // Thêm dữ liệu nếu cần
    ];
    setRequests(sampleRequests);
  }, []);

  const handleView = (request) => {
    setModalData(request);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  const handleAccept = (id) => {
    // Ở đây có thể gọi API để cập nhật trạng thái
    setRequests(requests.map(req => req.id === id ? { ...req, status: 'Đã chấp nhận' } : req));
  };

  const handleReject = (id) => {
    // Ở đây có thể gọi API để cập nhật trạng thái
    setRequests(requests.map(req => req.id === id ? { ...req, status: 'Từ chối' } : req));
  };

  return (
    <Container className="schedule-requests">
      <Card>
        <Card.Body>
          <Card.Title>Yêu cầu đặt lịch</Card.Title>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Họ tên học sinh</th>
                <th>Ngày</th>
                <th>Giờ</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req.id}>
                  <td>{req.id}</td>
                  <td>{req.studentName}</td>
                  <td>{req.date}</td>
                  <td>{req.time}</td>
                  <td>{req.status}</td>
                  <td>
                    <Button variant="info" size="sm" onClick={() => handleView(req)}>
                      <FaEye /> Xem
                    </Button>{' '}
                    {req.status === 'Chờ duyệt' && (
                      <>
                        <Button variant="success" size="sm" onClick={() => handleAccept(req.id)}>
                          <FaCheck /> Chấp nhận
                        </Button>{' '}
                        <Button variant="danger" size="sm" onClick={() => handleReject(req.id)}>
                          <FaTimes /> Từ chối
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal xem chi tiết yêu cầu */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết yêu cầu đặt lịch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalData && (
            <div className="request-details">
              <p><strong>Họ tên:</strong> {modalData.studentName}</p>
              <p><strong>Ngày:</strong> {modalData.date}</p>
              <p><strong>Giờ:</strong> {modalData.time}</p>
              <hr />
              <p><strong>Nội dung yêu cầu:</strong> {modalData.details}</p>
              <p><strong>Trạng thái:</strong> {modalData.status}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ScheduleRequests;
