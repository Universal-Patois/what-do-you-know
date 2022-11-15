import React from "react"
import './Question.css'

const Question = ({id, choice, question, handleChange, isChecked}) => {
  return (
    <div className="question-container">
      <h2 className="question">{question}</h2>

      <label>
        <input
          type="checkbox"
          id={id}
          name="question"
          value={choice}
          checked={isChecked}
          onChange={handleChange}
        />
        {choice}
      </label>
    </div>
  )
}

export default Question