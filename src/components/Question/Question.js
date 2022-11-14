import React from "react"
import './Question.css'

const Question = ({choice1, choice2, choice3, choice4, question, isChecked}) => {
  return (
    <div className="question-container">
      <h2 className="question">{question}</h2>

      <label className="input-label">
        <input
          type="checkbox"
          id="question"
          name="question"
          value={choice1}
          checked={isChecked}
        />
        {choice1}
      </label>

      <label className="input-label">
        <input
          type="checkbox"
          id="question"
          name="question"
          value={choice2}
          checked={isChecked}
        />
        {choice2}
      </label>

      <label className="input-label">
        <input
          type="checkbox"
          id="question"
          name="question"
          value={choice3}
          checked={isChecked}
        />
        {choice3}
      </label>

      <label className="input-label">
        <input
          type="checkbox"
          id="question"
          name="question"
          value={choice4}
          checked={isChecked}
        />
        {choice4}
      </label>
    </div>
  )
}

export default Question


// {<Question 
//   choice1={currentQuestion.choices["answer_a"]}
//   choice2={currentQuestion.choices['answer_b']} 
//   choice3={currentQuestion.choices['answer_c']} 
//   choice4={currentQuestion.choices['answer_d']} 
//   correctAnswer={currentQuestion.correctAnswer}
//   id={currentQuestion.id}
// />}