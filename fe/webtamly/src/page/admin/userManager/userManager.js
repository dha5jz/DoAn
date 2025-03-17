import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Card, Table,
  Button, Modal, Form, Pagination
} from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import './style.scss';

function StudentManagement() {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Modal xem chi tiết
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);

  // Modal thêm/sửa học sinh
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  // Dữ liệu tạm cho form thêm/sửa
  const [addEditData, setAddEditData] = useState({
    name: '',
    dob: '',
    class: '',
    startYear: '',
    endYear: '',
    phone: '',
    photo: '',
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    // Danh sách lớp
    setClasses(['10A1', '10A2', '11A1', '11A2', '12A1', '12A2']);

    // Tạo dữ liệu giả cho 30 học sinh để phân trang (2 trang x 15 học sinh)
    const dummyStudents = [];
    for (let i = 1; i <= 30; i++) {
      dummyStudents.push({
        id: i,
        name: `Học sinh ${i}`,
        dob: '2006-01-01',
        class: i % 2 === 0 ? '10A1' : '11A2', // Tùy ý chia lớp
        startYear: '2021',
        endYear: '2024',
        phone: `01234567${(i < 10 ? '0' : '') + i}`,
        photo: 'https://via.placeholder.com/100', // Chỉ hiển thị khi Xem/Chỉnh sửa
      });
    }
    setStudents(dummyStudents);
  }, []);

  // Lọc theo lớp và tìm kiếm
  const handleClassClick = (className) => {
    setSelectedClass(className);
    setSearchTerm('');
    setCurrentPage(1);
  };

  // Tạo mảng học sinh đã lọc theo lớp & tìm kiếm
  const filteredStudents = selectedClass
    ? students.filter(
        (student) =>
          student.class === selectedClass &&
          student.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  // Pagination - cắt mảng theo trang
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  // Modal xem chi tiết
  const handleView = (student) => {
    setViewModalData(student);
    setShowViewModal(true);
  };
  const handleCloseViewModal = () => setShowViewModal(false);

  // Modal thêm học sinh
  const handleAddStudent = () => {
    setIsEditMode(false);
    setAddEditData({
      name: '',
      dob: '',
      class: selectedClass || (classes[0] ?? ''),
      startYear: '',
      endYear: '',
      phone: '',
      photo: '',
    });
    setShowAddEditModal(true);
  };

  // Modal sửa học sinh
  const handleEditStudent = (student) => {
    setIsEditMode(true);
    setAddEditData(student);
    setShowAddEditModal(true);
  };

  // Xóa học sinh
  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Xử lý lưu dữ liệu khi thêm/sửa
  const handleAddEditSubmit = () => {
    if (isEditMode) {
      setStudents(students.map((student) =>
        student.id === addEditData.id ? addEditData : student
      ));
    } else {
      setStudents([
        ...students,
        { ...addEditData, id: students.length + 1 },
      ]);
    }
    setShowAddEditModal(false);
  };

  // Chuyển trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container className="student-management">
      <Row>
        {/* Cột bên trái: danh sách lớp */}
        <Col md={3}>
          <Card className="class-card">
            <Card.Body>
              <Card.Title>Danh sách lớp</Card.Title>
              {classes.map((className) => (
                <div
                  key={className}
                  className={`class-item ${
                    selectedClass === className ? 'active' : ''
                  }`}
                  onClick={() => handleClassClick(className)}
                >
                  {className}
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>

        {/* Cột bên phải: danh sách học sinh */}
        <Col md={9}>
          <Card className="student-card">
            <Card.Body>
              <Row className="mb-3">
                <Col>
                  <Card.Title>
                    Danh sách học sinh{' '}
                    {selectedClass ? `lớp ${selectedClass}` : 'tất cả'}
                  </Card.Title>
                </Col>
                <Col className="text-end">
                  <Button variant="primary" onClick={handleAddStudent}>
                    <FaPlus /> Thêm học sinh
                  </Button>
                </Col>
              </Row>
              <Form className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </Form>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    {/* Ẩn cột Ảnh trong bảng */}
                    <th>Họ tên</th>
                    <th>Ngày sinh</th>
                    <th>Lớp</th>
                    <th>Khóa học</th>
                    <th>SĐT</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {currentStudents.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.dob}</td>
                      <td>{student.class}</td>
                      <td>
                        {student.startYear} - {student.endYear}
                      </td>
                      <td>{student.phone}</td>
                      <td>
                        <Button variant="info" size="sm" onClick={() => handleView(student)}>
                          <FaEye />
                        </Button>{' '}
                        <Button variant="primary" size="sm" onClick={() => handleEditStudent(student)}>
                          <FaEdit />
                        </Button>{' '}
                        <Button variant="danger" size="sm" onClick={() => handleDeleteStudent(student.id)}>
                          <FaTrash />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              {/* Phân trang */}
              {totalPages > 1 && (
                <Pagination className="justify-content-center mt-3">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Pagination.Item
                      key={page}
                      active={page === currentPage}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Pagination.Item>
                  ))}
                </Pagination>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal Xem Chi tiết (hiển thị ảnh) */}
      <Modal show={showViewModal} onHide={handleCloseViewModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin chi tiết</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {viewModalData && (
            <div className="student-details">
              {/* Ảnh chỉ hiển thị trong modal xem chi tiết */}
              <img
                src={viewModalData.photo}
                alt="student"
                style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '1rem' }}
              />
              <p><strong>Họ tên:</strong> {viewModalData.name}</p>
              <p><strong>Ngày sinh:</strong> {viewModalData.dob}</p>
              <p><strong>Lớp:</strong> {viewModalData.class}</p>
              <p>
                <strong>Khóa học:</strong> {viewModalData.startYear} - {viewModalData.endYear}
              </p>
              <p><strong>SĐT:</strong> {viewModalData.phone}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseViewModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Thêm/Sửa Học sinh (có trường photo, nếu muốn xem trước ảnh có thể code thêm) */}
      <Modal show={showAddEditModal} onHide={() => setShowAddEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? 'Sửa thông tin' : 'Thêm học sinh'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Họ tên</Form.Label>
              <Form.Control
                type="text"
                value={addEditData.name}
                onChange={(e) => setAddEditData({ ...addEditData, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ngày sinh</Form.Label>
              <Form.Control
                type="date"
                value={addEditData.dob}
                onChange={(e) => setAddEditData({ ...addEditData, dob: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lớp</Form.Label>
              <Form.Control
                as="select"
                value={addEditData.class}
                onChange={(e) => setAddEditData({ ...addEditData, class: e.target.value })}
              >
                {classes.map((className) => (
                  <option key={className} value={className}>
                    {className}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Khóa từ</Form.Label>
                  <Form.Control
                    type="text"
                    value={addEditData.startYear}
                    onChange={(e) => setAddEditData({ ...addEditData, startYear: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>đến</Form.Label>
                  <Form.Control
                    type="text"
                    value={addEditData.endYear}
                    onChange={(e) => setAddEditData({ ...addEditData, endYear: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                type="text"
                value={addEditData.phone}
                onChange={(e) => setAddEditData({ ...addEditData, phone: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ảnh (URL)</Form.Label>
              <Form.Control
                type="text"
                value={addEditData.photo}
                onChange={(e) => setAddEditData({ ...addEditData, photo: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAddEditSubmit}>
            {isEditMode ? 'Lưu' : 'Thêm'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default StudentManagement;
