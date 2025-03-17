import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookSquare, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaCircle } from "react-icons/fa";
import { Container } from "react-bootstrap";
import "./style.scss"
const Footer = () => {
  return (
    <div className="footer py-5 text-white mt-5">
    <Container>
        {/* Logo + Social Links */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
            <div className="d-flex align-items-center mb-3 mb-md-0">
                <img
                    src="https://storage-vnportal.vnpt.vn/nbh-ubnd/1/Logo/thptkimsonb-ninhbinh.png"
                    alt="KSB logo"
                    className="me-3"
                    width="80"
                    height="80"
                />
                <div>
                    <h1 className="h5 fw-bold mb-1">SỞ GIÁO DỤC VÀ ĐÀO TẠO NINH BÌNH</h1>
                    <p className="mb-0 ">TRƯỜNG THPT KIM SƠN B</p>
                </div>
            </div>
            <div className="d-flex gap-3">
                <a href="https://www.facebook.com/profile.php?id=100070215815404" target="_blank" rel="noopener noreferrer" className=" text-white text-decoration-none d-flex align-items-center gap-2">
                    <FaFacebookSquare size={24} />
                    <span>Facebook</span>
                </a>
                <a href="https://www.youtube.com/@thptkimsonb" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none d-flex align-items-center gap-2">
                    <FaYoutube size={24} />
                    <span>Youtube</span>
                </a>
            </div>
        </div>

        {/* Main Footer Grid */}
        <div className="row text-center text-md-start mt-4">
            <div className="col-md-3 mb-4">
                <h5 className="fw-bold">THÔNG TIN LIÊN HỆ</h5>
                <p><FaMapMarkerAlt />  Xã Hùng Tiến - Huyện Kim Sơn - Tỉnh Ninh Bình</p>
                <p><FaPhone />  02293862194</p>
                <p><FaEnvelope />  thptkimsonb.nb@gmail.com</p>
                <p><FaGlobe /> <a href="http://thptkimsonb.edu.vn/" className="text-decoration-none text-white">http://thptkimsonb.edu.vn/</a></p>
            </div>

            <div className="col-md-3 mb-4">
                <h5 className="fw-bold">GIỚI THIỆU CHUNG</h5>
                <p>Tại sao nên chọn Kim Sơn B?</p>
                <p>Giới thiệu về Trường</p>
                <p>Đội ngũ giáo viên</p>
            </div>

            <div className="col-md-3 mb-4">
                <h5 className="fw-bold">HỌC TẬP TẠI KIM SƠN B</h5>
                <p>Chương trình giáo dục phổ thông</p>
                <p>Chương trình giáo dục hướng nghiệp</p>
                <p>Hoạt động ngoại khóa và bồi dưỡng năng khiếu</p>
                <p>Học bổng - Học phí</p>
            </div>

            <div className="col-md-3 mb-4">
                <h5 className="fw-bold">ĐƠN VỊ TRỰC THUỘC</h5>
                <p>Ban giám hiệu</p>
                <p>Các tổ bộ môn</p>
            </div>
        </div>

        {/* Copyright & Online Users */}
        <div className="text-center text-md-start mt-4">
            <p className="mb-1">© 2025 Trường THPT Kim Sơn B</p>
        </div>
    </Container>
    </div>
   

  );
};

export default Footer;
