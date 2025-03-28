import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Card, Table,
  Button, Modal, Form, Pagination
} from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import './style.scss';
import axios from 'axios';

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
    fullName: '',
    dob: '',
    grade: selectedClass || (classes[0] ?? ''),
    address: '',
    phone: '',
    parentName: '',
    parentPhone: '',
    profilePicture: '',
    CCCD: ''
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;


//get all danh sach
  const fetchApi = async () => {
    try {
        const res = await axios.get('http://localhost:3001/user/getAll');
        // Nếu API trả về danh sách học sinh, cập nhật state students
        if (res.data && res.data.user && Array.isArray(res.data.user.data)) { // Kiểm tra res.data.user.data
          console.log('Dữ liệu API:', res.data.user.data);


        // Tạo danh sách học sinh từ API
        const studentList = res.data.user.data.map(student => ({
          studentID: student.studentID,
          username: student.username,
          fullName: student.fullName,
          dob: student.dob,
          grade: student.grade.toUpperCase(), // Chuyển về chữ in hoa
          address: student.address,
          phone: student.phone,
          parentName: student.parentName,
          parentPhone: student.parentPhone,
          isAdmin: student.isAdmin,
          profilePicture: student.profilePicture,
          CCCD: student.CCCD,
        }));

      // Hàm lấy chữ cuối cùng của tên
      const getLastName = (fullName) => {
        const parts = fullName.trim().split(/\s+/); // Tách tên theo khoảng trắng
        return parts[parts.length - 1]; // Lấy phần tử cuối cùng (tên)
      };

      // Sắp xếp theo chữ cái cuối của tên
      studentList.sort((a, b) => getLastName(a.fullName).localeCompare(getLastName(b.fullName)));

        // Lấy danh sách lớp từ API và loại bỏ trùng lặp
        const uniqueClasses = [...new Set(studentList.map(student => student.grade))];
        // Sắp xếp danh sách lớp theo thứ tự mong muốn (10A, 10B, 10C, 11A, ...)
        uniqueClasses.sort((a, b) => {
          const numA = parseInt(a.match(/\d+/)[0]); // Lấy số trong "10A"
          const numB = parseInt(b.match(/\d+/)[0]);
          const charA = a.match(/[A-Z]+/)[0]; // Lấy chữ trong "10A"
          const charB = b.match(/[A-Z]+/)[0];

          return numA === numB ? charA.localeCompare(charB) : numA - numB;
        });



          setStudents(studentList);
          setClasses(uniqueClasses);
        } else {
            console.warn(' Dữ liệu không hợp lệ:', res.data);
        }
    } catch (error) {
        console.error(' Lỗi khi gọi API:', error);
    }
  };

    useEffect(() => {
      fetchApi();

    }, [])


  // Lọc theo lớp và tìm kiếm
  const handleClassClick = (className) => {
    setSelectedClass(className);
    setSearchTerm('');
    setCurrentPage(1);
  };

  // Hàm chuyển đổi chuỗi có dấu thành không dấu
  const removeVietnameseTones = (str) => {
    return str
      .normalize("NFD") // Tách dấu khỏi ký tự gốc
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu
      .replace(/đ/g, "d") // Chuyển "đ" thành "d"
      .replace(/Đ/g, "D"); // Chuyển "Đ" thành "D"
  };

  // Tạo mảng học sinh đã lọc theo lớp & tìm kiếm không dấu
  const filteredStudents = students.filter((student) => {
    const isInSelectedClass = selectedClass ? student.grade === selectedClass : true;

    // Chuẩn hóa tên học sinh và từ khóa tìm kiếm
    const studentName = removeVietnameseTones(student.fullName.toLowerCase());
    const searchKeyword = removeVietnameseTones(searchTerm.toLowerCase());

    // Kiểm tra xem tên có chứa từ khóa không
    const matchesSearchTerm = searchKeyword ? studentName.includes(searchKeyword) : true;

    return isInSelectedClass && matchesSearchTerm;
  });

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
      fullName: '',
      dob: '',
      grade: selectedClass || (classes[0] ?? ''),
      address: '',
      phone: '',
      parentName: '',
      parentPhone: '',
      profilePicture: '',
      CCCD: ''
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
  const handleDeleteStudent = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa học sinh này?")) {
      try {
        await axios.delete(`http://localhost:3001/user/delete-user/${id}`);
        console.log('Học sinh đã được xóa:', id);

        // Cập nhật danh sách học sinh sau khi xóa
        setStudents((prevStudents) => prevStudents.filter((student) => student.studentID !== id));
        fetchApi(); // Tải lại dữ liệu sau khi xóa
      } catch (error) {
        console.error('Lỗi khi xóa học sinh:', error);
        alert(error.response?.data?.message || 'Lỗi khi xóa học sinh');
      }
    }
  };


  // Xử lý lưu dữ liệu khi thêm/sửa
  const handleAddEditSubmit = async () => {
    try {
      let response;
      if (isEditMode) {
        // Gọi API cập nhật người dùng
        response = await axios.put(`http://localhost:3001/user/update-user/${addEditData.studentID}`, addEditData);
        console.log('Người dùng được cập nhật:', response.data.user);

        // Cập nhật danh sách học sinh
        setStudents((prevStudents) =>
          prevStudents.map((student) =>
            student.studentID === addEditData.studentID ? response.data.user.use : student
          )
        );
      } else {
        // Gọi API tạo người dùng mới
        response = await axios.post('http://localhost:3001/user/create-user', addEditData);
        console.log('Người dùng được tạo:', response.data.user);

        // Thêm người dùng mới vào danh sách
        setStudents((prevStudents) => [...prevStudents, response.data.user]);
      }

      setShowAddEditModal(false); // Đóng modal
      fetchApi(); // Tải lại dữ liệu sau khi thêm/sửa
    } catch (error) {
      console.error('Lỗi:', error);
      alert(error.response?.data?.message || 'Lỗi khi xử lý dữ liệu');
    }
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
                    <th>STT</th>
                    <th>ID</th>
                    <th>Họ tên</th>
                    <th>Ngày sinh</th>
                    <th>Lớp</th>
                    <th>SĐT</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {currentStudents.map((student, index) => (
                    <tr key={student.studentID}>
                      <td>{(currentPage - 1) * itemsPerPage + index + 1}</td> {/* STT chính xác */}
                      <td>{student.studentID}</td>
                      <td>{student.fullName}</td>
                      <td>{new Date(student.dob).toLocaleDateString("vi-VN")}</td>
                      <td>{student.grade}</td>
                      <td>{student.phone}</td>
                      <td>
                        <Button variant="info" size="sm" onClick={() => handleView(student)}>
                          <FaEye />
                        </Button>{' '}
                        <Button variant="primary" size="sm" onClick={() => handleEditStudent(student)}>
                          <FaEdit />
                        </Button>{' '}
                        <Button variant="danger" size="sm" onClick={() => handleDeleteStudent(student.studentID)}>
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
            <div className="student-details" >
              {/* Ảnh chỉ hiển thị trong modal xem chi tiết */}
              <img
                src={viewModalData.profilePicture}
                alt="student"
                style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '1rem' }}
              />
               {/* Hiển thị toàn bộ thông tin */}
              <div style={{ textAlign: "left", paddingLeft: "15px" }}>
                <p><strong>ID:</strong> {viewModalData.studentID}</p>
                <p><strong>Họ tên:</strong> {viewModalData.fullName}</p>
                <p><strong>CCCD:</strong> {viewModalData.CCCD}</p>
                <p><strong>Ngày sinh:</strong> {new Date(viewModalData.dob).toLocaleDateString("vi-VN")}</p>
                <p><strong>Lớp:</strong> {viewModalData.grade}</p>
                <p><strong>Địa chỉ:</strong> {viewModalData.address}</p>
                <p><strong>Số điện thoại:</strong> {viewModalData.phone}</p>
                <p><strong>Họ tên phụ huynh:</strong> {viewModalData.parentName}</p>
                <p><strong>Số điện thoại phụ huynh:</strong> {viewModalData.parentPhone}</p>
              </div>
             
              
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseViewModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Thêm/Sửa Học sinh */}
      <Modal show={showAddEditModal} onHide={() => setShowAddEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? 'Sửa thông tin' : 'Thêm học sinh'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Label style={{ width: '150px', marginRight: '10px' }}>Họ tên</Form.Label>
                <Form.Control
                  type="text"
                  value={addEditData.fullName}
                  onChange={(e) => setAddEditData({ ...addEditData, fullName: e.target.value })}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Label style={{ width: '150px', marginRight: '10px' }}>Ngày sinh</Form.Label>
                <Form.Control
                  type="date"
                  value={addEditData.dob}
                  onChange={(e) => setAddEditData({ ...addEditData, dob: e.target.value })}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Label style={{ width: '150px', marginRight: '10px' }}>Lớp</Form.Label>
                <Form.Control
                  as="select"
                  value={addEditData.grade}
                  onChange={(e) => setAddEditData({ ...addEditData, grade: e.target.value })}
                >
                  {classes.map((className) => (
                    <option key={className} value={className}>
                      {className}
                    </option>
                  ))}
                </Form.Control>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Label style={{ width: '150px', marginRight: '10px' }}>Địa chỉ</Form.Label>
                <Form.Control
                  type="text"
                  value={addEditData.address}
                  onChange={(e) => setAddEditData({ ...addEditData, address: e.target.value })}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Label style={{ width: '150px', marginRight: '10px' }}>Số điện thoại</Form.Label>
                <Form.Control
                  type="text"
                  value={addEditData.phone}
                  onChange={(e) => setAddEditData({ ...addEditData, phone: e.target.value })}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Label style={{ width: '150px', marginRight: '10px' }}>Họ tên phụ huynh</Form.Label>
                <Form.Control
                  type="text"
                  value={addEditData.parentName}
                  onChange={(e) => setAddEditData({ ...addEditData, parentName: e.target.value })}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Label style={{ width: '150px', marginRight: '10px' }}>Số điện thoại phụ huynh</Form.Label>
                <Form.Control
                  type="text"
                  value={addEditData.parentPhone}
                  onChange={(e) => setAddEditData({ ...addEditData, parentPhone: e.target.value })}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Label style={{ width: '150px', marginRight: '10px' }}>Ảnh (URL)</Form.Label>
                <Form.Control
                  type="text"
                  value={addEditData.profilePicture}
                  onChange={(e) => setAddEditData({ ...addEditData, profilePicture: e.target.value })}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Label style={{ width: '150px', marginRight: '10px' }}>CCCD</Form.Label>
                <Form.Control
                  type="text"
                  value={addEditData.CCCD}
                  onChange={(e) => setAddEditData({ ...addEditData, CCCD: e.target.value })}
                />
              </div>
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
