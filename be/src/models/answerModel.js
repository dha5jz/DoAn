const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema(
  {
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true }, // Học sinh trả lời (liên kết với Student)
    questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question", required: true }, // Câu hỏi được trả lời (liên kết với Question)
    answerText: { type: String }, // Câu trả lời tự luận
    selectedOptions: [{ type: String }], // Lựa chọn của học sinh (cho trắc nghiệm)
    isCorrect: { type: Boolean }, // Kết quả đúng/sai (cho đúng/sai)
    emotionAnalysis: {
      detectedEmotion: {
        type: String,
        enum: ["neutral", "stressed", "anxious", "depressed"],
      },
      confidenceScore: { type: Number },
    }, // Kết quả phân tích cảm xúc (cho tự luận)
  },
  { timestamps: true } // Thêm trường createdAt và updatedAt
);

module.exports = mongoose.model("Answer", answerSchema);