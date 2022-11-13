import React from "react";
import './Quiz.css'
import QuestionCard from "../QuestionCard/QuestionCard";
import Question from "../Question/Question";
import PropTypes from "prop-types";

const Quiz = ({ quizQuestions, showQuestion, currentQuestion }) => {
  const cards = quizQuestions.map(question => {

    return (
      <QuestionCard 
      questionNumber={question.questionNumber += 1}
      question={question.question}
      showQuestion={showQuestion}
      id={question.id}
      key={question.id}
      />
      )
    })

  return (
   <>
    <div className="card-container">
      {cards}
    </div>
   { currentQuestion && <div className="question-container">
     <h1>{currentQuestion.question}</h1>
      {<Question 
        choice1={currentQuestion.choices[0]}
        choice2={currentQuestion.choices[1]} 
        choice3={currentQuestion.choices[2]} 
        choice4={currentQuestion.choices[3]} 
        correctAnswer={currentQuestion.correctAnswer}
        id={currentQuestion.id}
     />}
    </div> }
   </>
 )
}

export default Quiz

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
  showQuestion: PropTypes.any.isRequired
}