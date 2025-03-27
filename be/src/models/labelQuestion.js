const mongoose = require("mongoose");

const labelSchema = new mongoose.Schema(
  {
    labelID: { type: String, unique: true, required: true }, // Mã nhãn tâm lý
    labelName: { type: String, required: true }, // Tên nhãn (ví dụ: căng thẳng, lo âu, trầm cảm)
  },
  { timestamps: true }
);

const Label = mongoose.model("Label", labelSchema);
module.exports = Label;