import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import SavedQuestion from "../SavedQuestion/SavedQuestion";
import "./SavedQuestionsContainer.css";

const SavedQuestionsContainer = ({
  savedQuestions,
  removeQuestion,
  startReview,
}) => {
  const savedQuestionsCards = savedQuestions.map((question, index) => {
    return (
      <SavedQuestion
        questionNumber={index + 1}
        questionTopic={question.topic}
        question={question.question}
        removeQuestion={removeQuestion}
        id={question.id}
        key={question.id}
      />
    );
  });

  return (
    <div className="saved-questions-container">
      {!savedQuestions.length && (
        <p className="message">
          There are Currently no Saved Questions! Please Take a Quiz to Find
          Questions You Would like to Save
        </p>
      )}
      {savedQuestionsCards}
      <nav className="nav">
        <NavLink className="trivia" to="/">
          Trivia Selection
        </NavLink>
        <NavLink className="form" to="/form">
          Form Page
        </NavLink>
        <>
          {savedQuestions.length && (
            <NavLink className="review" to="/quiz" onClick={startReview}>
              Review Questions
            </NavLink>
          )}
        </>
      </nav>
    </div>
  );
};

export default SavedQuestionsContainer;

SavedQuestionsContainer.propType = {
  savedQuestions: PropTypes.arrayOf(PropTypes.object),
  removeQuestion: PropTypes.func.isRequired,
  startReview: PropTypes.func.isRequired
}
