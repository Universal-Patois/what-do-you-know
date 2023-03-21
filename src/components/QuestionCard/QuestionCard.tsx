import React from "react";
import PropTypes from "prop-types";
import "./QuestionCard.css";

const QuestionCard = ({ questionNumber, showQuestion, id }) => {
  return (
    <div className="question-card">
      <button className="card-button" onClick={() => showQuestion(id)}>
        Question {questionNumber}
      </button>
    </div>
  );
};

export default QuestionCard;

QuestionCard.propType = {
  questionNumber: PropTypes.number,
  showQuestion: PropTypes.func.isRequired,
  id: PropTypes.number,
};
