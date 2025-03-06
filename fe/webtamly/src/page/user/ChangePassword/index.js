import React, { useState } from 'react';
import './style.scss';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Mật khẩu mới và mật khẩu xác nhận không khớp.');
      return;
    }

    // Gửi yêu cầu đổi mật khẩu lên API
    console.log({ oldPassword, newPassword });
    setMessage('Đổi mật khẩu thành công!'); // Thay thế bằng thông báo từ API
  };

  return (
    <div className="change-password-container">
      <h2 className="change-password-title">Đổi mật khẩu</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="oldPassword" className="form-label">Mật khẩu cũ</label>
          <input
            type="password"
            className="form-control"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">Mật khẩu mới</label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu mới</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Đổi mật khẩu</button>
      </form>
    </div>
  );
};

export default ChangePassword;