const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema(
  {
    assessmentID: { type: String, unique: true, required: true }, // Mã đề đánh giá
    title: { type: String, required: true }, // Tên đề đánh giá (ví dụ: Đánh giá tâm lý tổng quát 1)
    description: { type: String }, // Mô tả đề đánh giá
    level: { type: Number, enum: [1, 2, 3], required: true }, // Mức độ (1, 2, 3)
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }], // Danh sách câu hỏi (liên kết với bảng Câu Hỏi)
  },
  { timestamps: true }
);

const Assessment = mongoose.model("Assessment", assessmentSchema);
module.exports = Assessment;