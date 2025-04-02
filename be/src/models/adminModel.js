const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema(
  {
//adminID: { type: String, unique: true, required: true }, // Mã quản trị viên (duy nhất, bắt buộc)
    username: { type: String, unique: true, required: true }, // Tên đăng nhập (duy nhất, bắt buộc)
    password: { type: String, required: true }, // Mật khẩu (đã mã hóa, bắt buộc)
    fullName: { type: String, required: true }, // Họ và tên (bắt buộc)
    email: { type: String, unique: true, required: true }, // Email (duy nhất, bắt buộc)
    phone: { type: String, required: true }, // Số điện thoại (bắt buộc)
    isAdmin: { type: Boolean, default: true }, // Quyền quản trị (mặc định là true)
    profilePicture: { type: String },
  },
  { timestamps: true } // Thêm trường createdAt và updatedAt
);

// Middleware trước khi lưu để mã hóa mật khẩu
adminSchema.pre("save", async function (next) {
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

module.exports = mongoose.model("Admin", adminSchema);