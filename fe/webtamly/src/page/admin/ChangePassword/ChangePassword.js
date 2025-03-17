import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ChangePassword.scss';

function ChangePassword1() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("Mật khẩu mới và xác nhận mật khẩu không khớp.");
      return;
    }

    // Giả lập API đổi mật khẩu (thay thế bằng API thật)
    console.log("Đổi mật khẩu:", { currentPassword, newPassword });
    setSuccess("Đổi mật khẩu thành công!");

    // Sau khi đổi thành công, chuyển hướng về trang đăng nhập sau 2 giây
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <Container className="change-password">
      <Card className="change-password-card">
        <Card.Body>
          <Card.Title>Đổi mật khẩu</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="currentPassword">
              <Form.Label>Mật khẩu hiện tại</Form.Label>
              <Form.Control
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Nhập mật khẩu hiện tại"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="newPassword">
              <Form.Label>Mật khẩu mới</Form.Label>
              <Form.Control
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Nhập mật khẩu mới"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Xác nhận mật khẩu mới</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Xác nhận mật khẩu mới"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Lưu mật khẩu
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ChangePassword1;
