import React, { useState } from 'react';
import './style.scss'; // Import SCSS file

function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    grade: '',
    email: '',
    phoneNumber: '',
    reason: '',
    preferredTime: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Đăng ký thành công! Chúng tôi sẽ liên hệ sớm nhất.");
    setFormData({
      fullName: '',
      studentId: '',
      grade: '',
      email: '',
      phoneNumber: '',
      reason: '',
      preferredTime: '',
    });
  };

  return (
    <div className="counseling-registration-page">
      <section className="hero-section">
        <div className="container text-center">
          <h1>Đăng ký tư vấn tâm lý</h1>
          <p>Hãy điền thông tin để đặt lịch gặp chuyên gia tư vấn.</p>
        </div>
      </section>

      <section className="registration-form">
        <div className="container">
          <h2>Thông tin đăng ký</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Họ và tên:</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="studentId" className="form-label">Mã học sinh:</label>
              <input
                type="text"
                className="form-control"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="grade" className="form-label">Lớp:</label>
              <input
                type="text"
                className="form-control"
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Số điện thoại:</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="reason" className="form-label">Lý do tư vấn:</label>
              <textarea
                className="form-control"
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="preferredTime" className="form-label">Thời gian mong muốn:</label>
              <input
                type="datetime-local"
                className="form-control"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Gửi đăng ký</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ConsultationForm;
