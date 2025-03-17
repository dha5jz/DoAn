import React, { memo } from "react";
import "./style.scss";
import { Row, Col, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { IoIosCall } from "react-icons/io";
import { ROUTERS } from "../../../../utils/router";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <>
      {/* Header Top (giữ nguyên nếu cần) */}
      <div className="header">
        <div className="header_top shadow-sm">
          <Container>
            <Row className="align-items-center justify-content-between py-2 px-4">
              <Col xs={12} sm={6} className="header_top_left d-flex align-items-center">
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center gap-1">
                    <MailOutlineIcon />
                    <span>thptkimsonb.nb@gmail.com</span>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <IoIosCall />
                    <span>02293862194</span>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} className="header_top_right d-none d-md-flex justify-content-end">
                {/* Bạn có thể thêm các icon mạng xã hội ở đây nếu cần */}
              </Col>
            </Row>
          </Container>
        </div>

        {/* Header Bottom - Navbar (sửa đổi) */}
        <Navbar expand="lg" className="header_bottom shadow-sm py-3">
          <Container>
            {/* Logo (giữ nguyên) */}
            <Navbar.Brand href="#" className="d-flex align-items-center gap-4">
              <div className="col-auto">
                <img src="https://storage-vnportal.vnpt.vn/nbh-ubnd/1/Logo/thptkimsonb-ninhbinh.png" alt="Logo" className="d-inline-block align-top" />
              </div>
              <div className="col">
                <span className="fw-bold text-uppercase d-block text-white">SỞ GIÁO DỤC VÀ ĐÀO TẠO NINH BÌNH</span>
                <span className="fw-bold text-uppercase d-block text-white">TRƯỜNG THPT KIM SƠN B (ADMIN)</span>
              </div>
            </Navbar.Brand>

            {/* Toggle menu cho mobile (giữ nguyên) */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto">
              <GiHamburgerMenu style={{ color: 'white' }} />
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto gap-3 text-center">
            
                {/* Trang chủ */}
                <Nav.Link as={Link} to={ROUTERS.ADMIN.HOME}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Trang chủ</Nav.Link>


                {/* Quản lý Người dùng */}
                <NavDropdown title="Quản lý người dùng" id="admin-dropdown">
                  <NavDropdown.Item as={Link} to= {ROUTERS.ADMIN.USERMANAGEMENT}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Quản lý thông tin học sinh</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={ROUTERS.ADMIN.STUDENTRESULT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Xem kết quả đánh giá</NavDropdown.Item>
                </NavDropdown>

                {/* Quản lý Câu hỏi */}
                <NavDropdown title={<Link to={ROUTERS.ADMIN.MANAGERQUESTION} className="dropdown-title">Quản lý câu hỏi</Link>} id="admin-dropdown"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  <NavDropdown.Item as={Link} to={ROUTERS.ADMIN.ADDQUESTION}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Thêm câu hỏi</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={ROUTERS.ADMIN.EDITQUESTION} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Chỉnh sửa/Xóa câu hỏi</NavDropdown.Item>
                </NavDropdown>

                {/* Lịch đánh giá */}
                <NavDropdown title="Lịch đánh giá" id="admin-dropdown"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  <NavDropdown.Item as={Link} to={ROUTERS.ADMIN.SCHEDULEREQUESTS} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Yêu cầu đặt lịch</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={ROUTERS.ADMIN.SCHEDULELIST}  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Lịch đánh giá</NavDropdown.Item>
                </NavDropdown>

                {/* Báo cáo */}
                <NavDropdown title="Báo cáo" id="admin-dropdown"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  <NavDropdown.Item as={Link} to={ROUTERS.ADMIN.GENERALREPORT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Báo cáo tổng hợp</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={ROUTERS.ADMIN.INDIVIDUALREPORT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Báo cáo cá nhân</NavDropdown.Item>
                </NavDropdown>

                {/* Đăng xuất */}
                <NavDropdown title="Tài khoản" id="admin-dropdown"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  <NavDropdown.Item as={Link} to={ROUTERS.ADMIN.CHANGEPASSWORD} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Đổi mật khẩu</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={ROUTERS.ADMIN.LOGOUT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Đăng xuất</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default memo(AdminHeader);