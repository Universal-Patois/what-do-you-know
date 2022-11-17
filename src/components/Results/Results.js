import React from "react";
import PropTypes from "prop-types";
import "./Results.css";

const Results = ({ quizQuestions, score }) => {
  return (
    <div className="container">
      <h1 className="header">Your Results</h1>
      <section>
        <h3 className="questions">
          Number of Questions: {quizQuestions.length}
        </h3>
        <h3 className="correct"> Questions Correct: {score}</h3>
        <h3 className="score">
          Percentage: {(score / quizQuestions.length) * 100} %
        </h3>
      </section>
    </div>
  );
};

export default Results;

Results.propType = {
  quizQuestions: PropTypes.arrayOf(PropTypes.object),
  score: PropTypes.number,
};
