import React, { useState } from "react";
import "./Quiz.css";
import QuestionCard from "../QuestionCard/QuestionCard";
import Question from "../Question/Question";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Results from "../Results/Results";


const Quiz = ({ correctAnswer, currentQuestion, quizQuestions, showQuestion, saveQuestion }) => {

  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const checkAnswer = (event) => {
    if (
      event.currentTarget.value === currentQuestion.correctAnswer &&
      !correctAnswers.includes(event.currentTarget.value)
    ) {
      setCorrectAnswers([...correctAnswers, correctAnswer]);
      setScore(score + 1);
    }
  };

  return (
    <>
      {!submitted ? (
        <>
          <div className="card-container">
            {quizQuestions.map((question, index) => (
              <QuestionCard
                questionNumber={index + 1}
                question={question.question}
                showQuestion={showQuestion}
                id={question.id}
                key={question.id}
              />
            ))}
          </div>
          <div className="question-container">
            {currentQuestion.choices &&
            currentQuestion.choices.length ? (
              <>
                <h3 className="question-number">
                  Question {currentQuestion.questionNumber}
                </h3>
                <h2 className="question">
                  {currentQuestion.question}
                </h2>
                <Question
                  choices={currentQuestion.choices}
                  id={currentQuestion.id}
                  checkAnswer={checkAnswer}
                />

                <h3 className="message">
                  The Last Answer that is Clicked will be Saved
                </h3>
              </>
            ) : (
              <h2 className="load-message">
                Please Wait. If Nothing Loads Please Go Back to the Trivia
                Selection or Form Page and Make a Selection Again
              </h2>
            )}
          </div>
        </>
      ) : (
        <Results
          quizQuestions={quizQuestions}
          score={score}
        />
      )}

      <nav className="nav-bar">
        {submitted && (
          <>
            <NavLink className="saved" to="/saved-questions">
              Saved Questions
            </NavLink>
          </>
        )}
        <NavLink className="trivia-selection" to="/">
          Back to Trivia Selection
        </NavLink>
        <NavLink className="form" to="/form">
          Form Page
        </NavLink>
        {!submitted && (
          <>
            <NavLink className="save" onClick={saveQuestion}>
              Save Question
            </NavLink>
            <NavLink
              className="results"
              onClick={() => setSubmitted(true)}
            >
              See Results
            </NavLink>
          </>
        )}
      </nav>
    </>
  );
}


export default Quiz;

Quiz.propType = {
  quizQuestions: PropTypes.arrayOf(PropTypes.object),
  currentQuestion: PropTypes.shape({
    choices: PropTypes.array,
    correctAnswer: PropTypes.string,
    difficulty: PropTypes.string,
    id: PropTypes.number,
    question: PropTypes.string,
    questionNumber: PropTypes.number,
    topic: PropTypes.string,
  }),
};
