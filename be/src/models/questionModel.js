const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    questionID: { type: String, unique: true, required: true }, // Mã câu hỏi
    content: { type: String, required: true }, // Nội dung câu hỏi
    type: { type: String, enum: ["tracNghiem", "dungSai", "tuLuan"], required: true }, // Loại câu hỏi
    options: [{ content: String, isCorrect: Boolean }], // Các lựa chọn (cho trắc nghiệm và đúng/sai)
    labelIDs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Label" }], // Danh sách mã nhãn tâm lý (liên kết với bảng Nhãn Tâm Lý)
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;