import React from "react"

const Question = ({choice1, choice2, choice3, choice4, question}) => {
  return (
    <div className="question-container">
      <h2 className="question">{question}</h2>
       <input
          type="checkbox"
          id="question"
          name="topping"
          value={choice1}
          // checked={isChecked}
          // onChange={handleOnChange}
        />

        <input
          type="checkbox"
          id="question"
          name="topping"
          value={choice2}
          // checked={isChecked}
          // onChange={handleOnChange}
        />

        <input
          type="checkbox"
          id="question"
          name="topping"
          value={choice3}
          // checked={isChecked}
          // onChange={handleOnChange}
        />

        <input
          type="checkbox"
          id="question"
          name="topping"
          value={choice4}
          // checked={isChecked}
          // onChange={handleOnChange}
        />
    </div>
  )
}

export default Question