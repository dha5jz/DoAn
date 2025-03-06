import React, { useState } from 'react';
import './style.scss';

const DepressionTest = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    essayQuestion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi câu trả lời lên API
    console.log(answers);
    alert('Bài đánh giá đã được nộp!');
  };

  return (
    <div className="depression-test-container">
      <h2 className="depression-test-title">Bài đánh giá tâm lý</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">1. Bạn có thường xuyên cảm thấy buồn bã hoặc tuyệt vọng không?</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="question1" value="có" onChange={handleChange} />
            <label className="form-check-label">Có</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="question1" value="không" onChange={handleChange} />
            <label className="form-check-label">Không</label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">2. Bạn có mất hứng thú với những hoạt động mà bạn từng yêu thích không?</label>
          <select className="form-select" name="question2" value={answers.question2} onChange={handleChange}>
            <option value="">Chọn mức độ</option>
            <option value="thường xuyên">Thường xuyên</option>
            <option value="thỉnh thoảng">Thỉnh thoảng</option>
            <option value="không bao giờ">Không bao giờ</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">3. Hãy viết về những điều khiến bạn cảm thấy buồn bã hoặc tuyệt vọng.</label>
          <textarea className="form-control" name="essayQuestion" rows="5" value={answers.essayQuestion} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Nộp bài</button>
      </form>
    </div>
  );
};

export default DepressionTest;