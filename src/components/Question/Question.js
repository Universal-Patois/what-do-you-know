import React from "react"
import './Question.css'

const Question = ({id, choices, correctAnswer, checkAnswer}) => {
  return (
    <div className="choice-container">
      {choices.map((choice, index) => choice && 
        <button
          id={id}
          key={index}
          value={index}
          correctAnswer={correctAnswer}
          className="choice-button"
          onClick={checkAnswer}>{choice}
          </button>
            )}
    </div>
  )
}

export default Question