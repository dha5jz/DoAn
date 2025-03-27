const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const studentSchema = new mongoose.Schema(
  {
    studentID: { type: String, unique: true, required: true }, // Mã học sinh (duy nhất, bắt buộc)
    username: { type: String, unique: true, required: true }, // Tên đăng nhập (duy nhất, bắt buộc)
    password: { type: String, required: true }, // Mật khẩu (đã mã hóa, bắt buộc)
    fullName: { type: String, required: true }, // Họ và tên (bắt buộc)
    dob: { type: Date, required: true }, // Ngày sinh (bắt buộc)
    grade: { type: String, required: true }, // Lớp (bắt buộc)
    address: { type: String, required: true }, // Địa chỉ (bắt buộc)
    phone: { type: String, required: true }, // Số điện thoại (bắt buộc)
    parentName: { type: String, required: true }, // Tên phụ huynh (bắt buộc)
    parentPhone: { type: String, required: true }, // Số điện thoại phụ huynh (bắt buộc)
    isAdmin: { type: Boolean, default: false }, // Quyền quản trị (mặc định là false)
    profilePicture: { type: String },
    CCCD: { type: String, unique: true },
  },
  { timestamps: true } // Thêm trường createdAt và updatedAt
);

// Middleware trước khi lưu để mã hóa mật khẩu
studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});



module.exports = mongoose.model("Student", studentSchema);