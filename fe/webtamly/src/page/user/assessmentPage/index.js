import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";
import "./style.scss"; 

const assessments = [
  {
    title: "Đánh giá trầm cảm",
    description: "Đánh giá mức độ trầm cảm của bạn.",
    link: ROUTERS.USER.DEPRESSION_TEST,
  },
  {
    title: "Hướng dẫn làm bài test",
    description: "Hướng dẫn chi tiết về cách làm bài đánh giá.",
    link: ROUTERS.USER.RESULTGUIDE,
  },
  {
    title: "Các bài đánh giá khác",
    description: "Khám phá thêm các bài đánh giá tâm lý khác.",
    link: ROUTERS.USER.HOME,
  },
];

function AssessmentPage() {
  return (
    <div className="assessment-page ">
      <section className="assessment-section">
        <div className="container ">
            <h2 className="text-center ">Đánh giá tâm lý</h2>
            <p className="text-center">
                Hãy chọn bài đánh giá phù hợp với nhu cầu của bạn:
            </p>

            <div className="assessment-options">
            {assessments.map((test, index) => (
                <div key={index} className="option">
                <Link to={test.link} className="option-link">
                    <h3>{test.title}</h3>
                    <p>{test.description}</p>
                </Link>
                </div>
            ))}
            </div>

        </div>
       
      </section>
    </div>
  );
}

export default AssessmentPage;
