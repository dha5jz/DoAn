import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Logout.scss';

function Logout() {
  const [showConfirm, setShowConfirm] = useState(true);
  const navigate = useNavigate();

  const handleConfirm = () => {
    // Xóa thông tin lưu trữ
    localStorage.clear();
    sessionStorage.clear();
    setShowConfirm(false);
    // Chuyển hướng về trang đăng nhập sau khi đăng xuất
    navigate('/login');
  };

  const handleCancel = () => {
    // Quay lại trang trước nếu hủy đăng xuất
    navigate(-1);
  };

  return (
    <>
      <Modal show={showConfirm} onHide={handleCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>Đăng xuất</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn đăng xuất không?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Đăng xuất
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Logout;
