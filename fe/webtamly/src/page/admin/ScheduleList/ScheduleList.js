import React, { useState, useEffect } from 'react';
import { Container, Card, Table, Button, Modal } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './ScheduleList.scss';

function ScheduleList() {
  const [schedules, setSchedules] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    // Dữ liệu giả định cho lịch đánh giá
    const sampleSchedules = [
      {
        id: 1,
        studentName: 'Nguyễn Văn A',
        teacher: 'Thầy Hoàng',
        date: '2024-04-05',
        time: '09:00',
        room: 'Phòng 101',
      },
      {
        id: 2,
        studentName: 'Trần Thị B',
        teacher: 'Cô Lan',
        date: '2024-04-05',
        time: '10:30',
        room: 'Phòng 102',
      },
      {
        id: 3,
        studentName: 'Lê Văn C',
        teacher: 'Thầy Minh',
        date: '2024-04-06',
        time: '14:00',
        room: 'Phòng 103',
      },
      // Thêm dữ liệu nếu cần
    ];
    setSchedules(sampleSchedules);
  }, []);

  const handleEdit = (schedule) => {
    setModalData(schedule);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setSchedules(schedules.filter(s => s.id !== id));
  };

  const handleClose = () => {
    setShowModal(false);
    setModalData(null);
  };

  return (
    <Container className="schedule-list">
      <Card>
        <Card.Body>
          <Card.Title>Lịch đánh giá</Card.Title>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Họ tên học sinh</th>
                <th>Giáo viên</th>
                <th>Ngày</th>
                <th>Giờ</th>
                <th>Phòng</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((sch) => (
                <tr key={sch.id}>
                  <td>{sch.id}</td>
                  <td>{sch.studentName}</td>
                  <td>{sch.teacher}</td>
                  <td>{sch.date}</td>
                  <td>{sch.time}</td>
                  <td>{sch.room}</td>
                  <td>
                    <Button variant="primary" size="sm" onClick={() => handleEdit(sch)}>
                      <FaEdit /> Sửa
                    </Button>{' '}
                    <Button variant="danger" size="sm" onClick={() => handleDelete(sch.id)}>
                      <FaTrash /> Xóa
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal chỉnh sửa lịch đánh giá */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa lịch đánh giá</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalData && (
            <div className="schedule-details">
              <p><strong>Họ tên học sinh:</strong> {modalData.studentName}</p>
              <p><strong>Giáo viên:</strong> {modalData.teacher}</p>
              <p><strong>Ngày:</strong> {modalData.date}</p>
              <p><strong>Giờ:</strong> {modalData.time}</p>
              <p><strong>Phòng:</strong> {modalData.room}</p>
              {/* Bạn có thể thêm form chỉnh sửa ở đây nếu cần */}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          {/* Có thể thêm nút Lưu nếu chỉnh sửa lịch */}
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ScheduleList;
