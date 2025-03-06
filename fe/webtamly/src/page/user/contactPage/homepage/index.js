import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosCall } from "react-icons/io"; // Import icon điện thoại
import MailOutlineIcon from '@mui/icons-material/MailOutline'; // Import icon email
import { FaLocationDot } from "react-icons/fa6";
import "./style.scss"

const Contact = () => {
  return (
    <main className="container py-5 mt-5 ">
      <div className="row">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h4 className="mb-4 h-custom ">GỬI LỜI NHẮN ĐẾN CHÚNG TÔI</h4>
          <form className="space-y-3">
            <input type="text" placeholder="Họ và tên" className="form-control input-custom mb-3" />
            <input type="email" placeholder="Địa chỉ email" className="form-control input-custom mb-3" />
            <input type="text" placeholder="Tiêu đề" className="form-control input-custom mb-3" />
            <textarea placeholder="Nội dung" className="form-control input-custom mb-3" rows="5"></textarea>
            <button type="submit" className="custom-button text-white">Gửi đi</button>
          </form>
        </div>
        <div className="col-12 col-md-6">
          <h4 className="mb-4 h-custom">LIÊN HỆ VỚI CHÚNG TÔI</h4>
          <div className="contact-custom p-4 rounded">
            <div className="d-flex align-items-center mb-3">
              <FaLocationDot className="text-gray me-2" size={20} />
              <span>Xã Hùng Tiến - Huyện Kim Sơn - Tỉnh Ninh Bình</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <MailOutlineIcon className="text-gray me-2" />
              <span>thptkimsonb.nb@gmail.com</span>
            </div>
            <div className="d-flex align-items-center">
              <IoIosCall className="text-gray me-2" size={20} />
              <span>02293862194</span>
            </div>
          </div>
        </div>
      </div>  
    </main>
  );
};

export default Contact;