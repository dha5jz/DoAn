import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import './style.scss';

function AddQuestion() {
  const [questionType, setQuestionType] = useState('multiple'); // 'multiple' hoặc 'open'
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']); // Mặc định 4 đáp án
  const [assessment, setAssessment] = useState('Đề 1'); // Chọn đề đánh giá

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi dữ liệu (ví dụ: gọi API)
    console.log('Thêm câu hỏi:', {
      questionText,
      questionType,
      assessment,
      options: questionType === 'multiple' ? options : []
    });
    // Reset form nếu cần
    setQuestionText('');
    setOptions(['', '', '', '']);
    setAssessment('Đề 1');
    setQuestionType('multiple');
  };

  return (
    <Container className="add-question">
      <Card>
        <Card.Body>
          <Card.Title>Thêm câu hỏi mới</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nội dung câu hỏi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="Nhập nội dung câu hỏi..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Loại câu hỏi</Form.Label>
              <Form.Control
                as="select"
                value={questionType}
                onChange={(e) => setQuestionType(e.target.value)}
              >
                <option value="multiple">Trắc nghiệm</option>
                <option value="open">Tự luận</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Đề đánh giá</Form.Label>
              <Form.Control
                as="select"
                value={assessment}
                onChange={(e) => setAssessment(e.target.value)}
              >
                <option value="Đề 1">Đề 1</option>
                <option value="Đề 2">Đề 2</option>
                <option value="Đề 3">Đề 3</option>
              </Form.Control>
            </Form.Group>
            {questionType === 'multiple' && (
              <div className="options-section">
                <Form.Label>Các đáp án</Form.Label>
                {options.map((opt, index) => (
                  <Form.Group className="mb-2" key={index}>
                    <Form.Control
                      type="text"
                      value={opt}
                      onChange={(e) => handleOptionChange(index, e.target.value)}
                      placeholder={`Đáp án ${index + 1}`}
                    />
                  </Form.Group>
                ))}
                <Button variant="secondary" onClick={handleAddOption}>
                  <FaPlus /> Thêm đáp án
                </Button>
              </div>
            )}
            <Button variant="primary" type="submit" className="mt-3">
              Lưu câu hỏi
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AddQuestion;
