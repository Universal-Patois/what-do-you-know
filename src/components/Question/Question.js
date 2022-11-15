import React from "react"
import './Question.css'

const Question = ({id, choices, handleChange, checked, correctAnswer}) => {
  return (
    <div className="question-container">
      {choices.map(choice => choice && 
      <label>
        <input
          type="checkbox"
          id={id}
          key={id}
          name="question"
          value={choice}
          checked={checked}
          onChange={(event) => handleChange(event, correctAnswer)}
          />
        {choice}
      </label>
            )}
    </div>
  )
}

export default Question