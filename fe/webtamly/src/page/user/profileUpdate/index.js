import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./style.scss";

const ProfileUpdate = () => {
  const [formData, setFormData] = useState({
    fullName: "Nguyễn Văn A",
    dob: "2009-01-01",
    grade: "10",
    school: "Trường THPT X",
    address: "123 Đường ABC, Quận XYZ",
    phone: "0912345678",
    parentName: "Trần Thị B",
    parentPhone: "0901234567",
    parentAddress: "456 Đường DEF, Quận UVW",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu cập nhật:", formData);
    alert("Thông tin cá nhân đã được cập nhật!");
  };

  return (
    <div className="profile-update">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="profile-card">
              <Card.Body>
                <h2 className="profile-title">Cập Nhật Thông Tin Cá Nhân</h2>
                <Form onSubmit={handleSubmit}>
                  {/* Họ tên (Chỉ xem) */}
                  <Form.Group className="mb-3">
                    <Form.Label>Họ và Tên</Form.Label>
                    <Form.Control type="text" value={formData.fullName} readOnly />
                  </Form.Group>

                  {/* Ngày sinh (Chỉ xem) */}
                  <Form.Group className="mb-3">
                    <Form.Label>Ngày Sinh</Form.Label>
                    <Form.Control type="date" value={formData.dob} readOnly />
                  </Form.Group>

                  {/* Lớp (Chỉ xem) */}
                  <Form.Group className="mb-3">
                    <Form.Label>Lớp</Form.Label>
                    <Form.Control type="text" value={formData.grade} readOnly />
                  </Form.Group>

                  {/* Trường (Chỉ xem) */}
                  <Form.Group className="mb-3">
                    <Form.Label>Trường</Form.Label>
                    <Form.Control type="text" value={formData.school} readOnly />
                  </Form.Group>

                  {/* Địa chỉ (Có thể sửa) */}
                  <Form.Group className="mb-3">
                    <Form.Label>Địa Chỉ</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  {/* Số điện thoại (Có thể sửa) */}
                  <Form.Group className="mb-3">
                    <Form.Label>Số Điện Thoại</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  {/* Họ tên phụ huynh (Chỉ xem) */}
                  <Form.Group className="mb-3">
                    <Form.Label>Họ và Tên Phụ Huynh</Form.Label>
                    <Form.Control type="text" value={formData.parentName} readOnly />
                  </Form.Group>

                  {/* Số điện thoại phụ huynh (Có thể sửa) */}
                  <Form.Group className="mb-3">
                    <Form.Label>Số Điện Thoại Phụ Huynh</Form.Label>
                    <Form.Control
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  {/* Địa chỉ phụ huynh (Có thể sửa) */}
                  <Form.Group className="mb-3">
                    <Form.Label>Địa Chỉ Phụ Huynh</Form.Label>
                    <Form.Control
                      type="text"
                      name="parentAddress"
                      value={formData.parentAddress}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  {/* Nút lưu thay đổi */}
                  <div className="submit-btn-container">
                    <Button type="submit" variant="primary" size="lg">
                      Cập Nhật
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileUpdate;
