import React, { useState, useEffect } from 'react';
import { Container, Card, Table, Button, Modal, Nav } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import './style.scss';

function ManageQuestions() {
  const [questions, setQuestions] = useState([]);
  const [selectedExam, setSelectedExam] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    // Dữ liệu giả định cho câu hỏi với trường assessment (đề đánh giá)
    const sampleQuestions = [
      { id: 1, content: 'Bạn cảm thấy thế nào khi đối mặt với áp lực?', type: 'multiple', assessment: 'Đề 1' },
      { id: 2, content: 'Bạn có cảm thấy buồn bã trong thời gian qua không?', type: 'open', assessment: 'Đề 1' },
      { id: 3, content: 'Bạn thường xử lý stress như thế nào?', type: 'multiple', assessment: 'Đề 2' },
      { id: 4, content: 'Bạn có hay mất ngủ không?', type: 'multiple', assessment: 'Đề 2' },
      { id: 5, content: 'Bạn có thường xuyên cảm thấy lo lắng?', type: 'open', assessment: 'Đề 3' },
      { id: 6, content: 'Bạn cảm nhận thế nào về sự tự tin của mình?', type: 'open', assessment: 'Đề 3' },
      // Có thể thêm dữ liệu khác...
    ];
    setQuestions(sampleQuestions);
  }, []);

  const handleView = (question) => {
    setModalData(question);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setModalData(null);
  };

  // Lọc câu hỏi dựa trên đề đã chọn
  const filteredQuestions =
    selectedExam === 'All'
      ? questions
      : questions.filter((q) => q.assessment === selectedExam);

  // Lấy danh sách các đề (assessment) từ dữ liệu
  const examOptions = Array.from(new Set(questions.map((q) => q.assessment)));

  return (
    <Container className="manage-questions-by-exam">
      <Card>
        <Card.Body>
          <Card.Title>Quản lý câu hỏi theo đề đánh giá</Card.Title>
          <Nav variant="tabs" activeKey={selectedExam} onSelect={(selectedKey) => setSelectedExam(selectedKey)}>
            <Nav.Item>
              <Nav.Link eventKey="All">Tất cả</Nav.Link>
            </Nav.Item>
            {examOptions.map((exam, index) => (
              <Nav.Item key={index}>
                <Nav.Link eventKey={exam}>{exam}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Nội dung câu hỏi</th>
                <th>Loại câu hỏi</th>
                <th>Đề đánh giá</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuestions.map((q) => (
                <tr key={q.id}>
                  <td>{q.id}</td>
                  <td>{q.content}</td>
                  <td>{q.type === 'multiple' ? 'Trắc nghiệm' : 'Tự luận'}</td>
                  <td>{q.assessment}</td>
                  <td>
                    <Button variant="info" size="sm" onClick={() => handleView(q)}>
                      <FaEye /> Xem
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal xem chi tiết câu hỏi */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết câu hỏi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalData && (
            <div className="question-details">
              <p><strong>Nội dung:</strong> {modalData.content}</p>
              <p>
                <strong>Loại:</strong> {modalData.type === 'multiple' ? 'Trắc nghiệm' : 'Tự luận'}
              </p>
              <p><strong>Đề đánh giá:</strong> {modalData.assessment}</p>
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

export default ManageQuestions;
