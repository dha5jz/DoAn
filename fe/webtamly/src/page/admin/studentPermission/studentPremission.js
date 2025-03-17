import React, { useState, useEffect } from 'react';
import { Container, Table, Card, Form, Button } from 'react-bootstrap';
import './style.scss'; // Import file SCSS

function StudentPermission() {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    // Giả định dữ liệu phân quyền
    const samplePermissions = [
      { id: 1, studentName: 'Nguyễn Văn A', viewResults: true, editData: false },
      { id: 2, studentName: 'Trần Thị B', viewResults: false, editData: true },
      { id: 3, studentName: 'Lê Văn C', viewResults: true, editData: true },
      // ...thêm dữ liệu mẫu
    ];
    setPermissions(samplePermissions);
  }, []);

  const handlePermissionChange = (id, field, value) => {
    setPermissions(permissions.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const handleSavePermissions = () => {
    // Logic lưu phân quyền (gửi API, cập nhật state...)
    console.log('Phân quyền đã lưu:', permissions);
  };

  return (
    <Container className="student-permission">
      <Card>
        <Card.Body>
          <Card.Title>Phân quyền dữ liệu</Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Tên học sinh</th>
                <th>Xem kết quả</th>
                <th>Sửa dữ liệu</th>
              </tr>
            </thead>
            <tbody>
              {permissions.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.studentName}</td>
                  <td>
                    <Form.Check
                      type="checkbox"
                      checked={p.viewResults}
                      onChange={(e) => handlePermissionChange(p.id, 'viewResults', e.target.checked)}
                    />
                  </td>
                  <td>
                    <Form.Check
                      type="checkbox"
                      checked={p.editData}
                      onChange={(e) => handlePermissionChange(p.id, 'editData', e.target.checked)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="primary" onClick={handleSavePermissions}>Lưu phân quyền</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default StudentPermission;