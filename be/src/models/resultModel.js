const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true }, // Học sinh làm bài (liên kết với Student)
    testId: { type: mongoose.Schema.Types.ObjectId, ref: "Test", required: true }, // Bài đánh giá đã làm (liên kết với Test)
    totalScore: { type: Number, required: true }, // Tổng điểm (bắt buộc)
    level: { type: String, enum: ["normal", "mild", "moderate", "severe"], required: true }, // Mức độ tâm lý (bắt buộc)
  },
  { timestamps: true } // Thêm trường createdAt và updatedAt
);

module.exports = mongoose.model("Result", resultSchema);