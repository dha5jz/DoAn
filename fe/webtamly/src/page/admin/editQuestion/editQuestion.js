import React, { useState, useEffect } from 'react';
import { 
  Container, Card, Table, Button, Modal, Form, Nav 
} from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './style.scss';

function EditQuestions() {
  const [questions, setQuestions] = useState([]);
  const [selectedExam, setSelectedExam] = useState('Đề 1');
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    // Dữ liệu mẫu cho câu hỏi với trường assessment để xác định đề
    setQuestions([
      {
        id: 1,
        content: 'Bạn cảm thấy thế nào khi đối mặt với áp lực?',
        type: 'multiple',
        options: ['Tuyệt vời', 'Bình thường', 'Khó chịu', 'Rất khó chịu'],
        assessment: 'Đề 1'
      },
      {
        id: 2,
        content: 'Bạn có cảm thấy buồn bã trong thời gian qua không?',
        type: 'open',
        options: [],
        assessment: 'Đề 2'
      },
      {
        id: 3,
        content: 'Bạn thường xử lý stress như thế nào?',
        type: 'multiple',
        options: ['Thư giãn', 'Tập thể dục', 'Nói chuyện', 'Không rõ'],
        assessment: 'Đề 1'
      },
      {
        id: 4,
        content: 'Bạn có hay mất ngủ không?',
        type: 'multiple',
        options: ['Có', 'Không'],
        assessment: 'Đề 3'
      },
      {
        id: 5,
        content: 'Bạn cảm thấy tự tin như thế nào?',
        type: 'open',
        options: [],
        assessment: 'Đề 2'
      },
      // Thêm dữ liệu nếu cần...
    ]);
  }, []);

  // Lọc danh sách câu hỏi theo đề được chọn
  const filteredQuestions = questions.filter(q => q.assessment === selectedExam);

  const handleExamChange = (exam) => {
    setSelectedExam(exam);
  };

  const handleEdit = (question) => {
    setEditData(question);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEditData(null);
  };

  const handleSave = () => {
    setQuestions(questions.map(q => q.id === editData.id ? editData : q));
    handleModalClose();
  };

  return (
    <Container className="edit-questions-by-exam">
      <Card>
        <Card.Body>
          <Card.Title>Chỉnh sửa/Xóa câu hỏi theo đề</Card.Title>
          <Nav variant="tabs" activeKey={selectedExam} onSelect={(selectedKey) => handleExamChange(selectedKey)}>
            <Nav.Item>
              <Nav.Link eventKey="Đề 1">Đề 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Đề 2">Đề 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Đề 3">Đề 3</Nav.Link>
            </Nav.Item>
          </Nav>
          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Nội dung câu hỏi</th>
                <th>Loại câu hỏi</th>
                <th>Đề đánh giá</th>
                <th>Đáp án</th>
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
                  <td>{q.type === 'multiple' ? q.options.join(' | ') : 'N/A'}</td>
                  <td>
                    <Button variant="primary" size="sm" onClick={() => handleEdit(q)}>
                      <FaEdit /> Sửa
                    </Button>{' '}
                    <Button variant="danger" size="sm" onClick={() => handleDelete(q.id)}>
                      <FaTrash /> Xóa
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal chỉnh sửa câu hỏi */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa câu hỏi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editData && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nội dung câu hỏi</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={editData.content}
                  onChange={(e) => setEditData({ ...editData, content: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Loại câu hỏi</Form.Label>
                <Form.Control
                  as="select"
                  value={editData.type}
                  onChange={(e) => setEditData({ ...editData, type: e.target.value })}
                >
                  <option value="multiple">Trắc nghiệm</option>
                  <option value="open">Tự luận</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Đề đánh giá</Form.Label>
                <Form.Control
                  as="select"
                  value={editData.assessment}
                  onChange={(e) => setEditData({ ...editData, assessment: e.target.value })}
                >
                  <option value="Đề 1">Đề 1</option>
                  <option value="Đề 2">Đề 2</option>
                  <option value="Đề 3">Đề 3</option>
                </Form.Control>
              </Form.Group>
              {editData.type === 'multiple' && (
                <Form.Group className="mb-3">
                  <Form.Label>Đáp án (ngăn cách bởi dấu phẩy)</Form.Label>
                  <Form.Control
                    type="text"
                    value={editData.options.join(', ')}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        options: e.target.value.split(',').map(opt => opt.trim())
                      })
                    }
                  />
                </Form.Group>
              )}
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default EditQuestions;
