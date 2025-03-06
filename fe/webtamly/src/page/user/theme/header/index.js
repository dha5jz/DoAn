import { memo } from "react";
import "./style.scss";
import { Row, Col, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { GiHamburgerMenu } from 'react-icons/gi'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { IoIosCall } from "react-icons/io";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FaTiktok } from "react-icons/fa";
import { ROUTERS } from "../../../../utils/router";
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <>
        {/* Header Top */}
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
                        <div className="d-flex gap-3">
                            <a href="https://www.facebook.com/profile.php?id=100070215815404" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                            <a href="https://www.youtube.com/@thptkimsonb" target="_blank" rel="noopener noreferrer"><YouTubeIcon /></a>
                            <a href="https://www.instagram.com/ksbconfessions/" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                            <a href="https://www.tiktok.com/@thptkimsonb" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        {/* Header Bottom - Navbar */}
        <Navbar expand="lg" className="header_bottom shadow-sm py-3">
            <Container>
                {/* Logo */}
                <Navbar.Brand href="#" className="d-flex align-items-center gap-4">
                    <div className="col-auto">
                        <img src="https://storage-vnportal.vnpt.vn/nbh-ubnd/1/Logo/thptkimsonb-ninhbinh.png" alt="Logo" className="d-inline-block align-top" />
                    </div>
                    <div className="col">
                        <span className="fw-bold text-uppercase d-block text-white">SỞ GIÁO DỤC VÀ ĐÀO TẠO NINH BÌNH</span>
                        <span className="fw-bold text-uppercase d-block text-white">TRƯỜNG THPT KIM SƠN B</span>
                    </div>
                </Navbar.Brand>

                {/* Toggle menu cho mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto">
                    <GiHamburgerMenu style={{ color: 'white' }} />
                </Navbar.Toggle>                

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-3 text-center">
            
                        {/* Dropdown TRANG CHỦ */}
                        <NavDropdown title={<Link to={ROUTERS.USER.HOME} className="dropdown-title">TRANG CHỦ</Link>} id="nav-dropdown"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                            <NavDropdown.Item as={Link} to={ROUTERS.USER.SCHOOL} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Giới thiệu trường</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={ROUTERS.USER.SYSTEM} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Giới thiệu hệ thống</NavDropdown.Item>
                        </NavDropdown>

                        {/* Dropdown ĐÁNH GIÁ */}
                        <NavDropdown title={<Link to={ROUTERS.USER.ASSESSMENT} className="dropdown-title">ĐÁNH GIÁ</Link>} id="nav-dropdown"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                            <NavDropdown.Item as={Link} to={ROUTERS.USER.DEPRESSION_TEST} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Đánh giá tâm lý</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={ROUTERS.USER.TESTGUIDE} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Hướng dẫn làm bài đánh giá </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={ROUTERS.USER.HOME} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Các bài đánh giá khác </NavDropdown.Item>
                        </NavDropdown>

                        {/* Dropdown HỖ TRỢ */}
                        <NavDropdown title={<Link to={ROUTERS.USER.SUPPORT} className="dropdown-title">HỖ TRỢ</Link>} id="nav-dropdown"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                            <NavDropdown.Item as={Link} to={ROUTERS.USER.CONSULTATIONFORM} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>  Đăng ký tư vấn</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={ROUTERS.USER.FAQ} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Câu hỏi thường gặp </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={ROUTERS.USER.RESULTGUIDE} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Hướng dẫn đọc kết quả đánh giá </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={ROUTERS.USER.PSYCHOLOGYQA} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>  Hỏi đáp tâm lý</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={ROUTERS.USER.REFERENCEMATERIALS} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Tư liệu</NavDropdown.Item>
                        </NavDropdown>

                        {/* Dropdown TÀI KHOẢN */}
                        <NavDropdown title="TÀI KHOẢN" id="nav-dropdown"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                            <NavDropdown.Item as={Link} to={ROUTERS.USER.PROFILE} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Cập nhật thông tin cá nhân  </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={ROUTERS.USER.CHANGEPASSWORD} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>  Đổi mật khẩu </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={ROUTERS.USER.AssessmentHistory} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>  Lịch sử đánh giá</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={ROUTERS.USER.HOME} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Đăng xuất  </NavDropdown.Item>
                        </NavDropdown>

                        {/* Liên hệ */}
                        <Nav.Link as={Link} to={ROUTERS.USER.CONTACT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>    LIÊN HỆ </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
   
        </div>
        </>     
    );
};

export default memo(Header);
