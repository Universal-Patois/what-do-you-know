import React from "react"
import './Question.css'

const Question = ({choice1, choice2, choice3, choice4, question}) => {
  return (
    <div className="question-container">
      <h2 className="question">{question}</h2>

      <label className="input-label">
        <input
          type="checkbox"
          id="question"
          name="question"
          value={choice1}
          // checked={isChecked}
          // onChange={handleOnChange}
        />
        {choice1}
      </label>

      <label className="input-label">
        <input
          type="checkbox"
          id="question"
          name="question"
          value={choice2}
          // checked={isChecked}
          // onChange={handleOnChange}
        />
        {choice2}
      </label>

      <label className="input-label">
        <input
          type="checkbox"
          id="question"
          name="question"
          value={choice3}
          // checked={isChecked}
          // onChange={handleOnChange}
        />
        {choice3}
      </label>

      <label className="input-label">
        <input
          type="checkbox"
          id="question"
          name="question"
          value={choice4}
          // checked={isChecked}
          // onChange={handleOnChange}
        />
        {choice4}
      </label>
    </div>
  )
}

export default Question