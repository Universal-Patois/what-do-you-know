import React from "react"

const Question = ({question}) => {
  return (
    <div className="question-container">
      <h2 className="question">{question.question}</h2>
       <input
          type="checkbox"
          id="question"
          name="topping"
          value={question.choices[0]}
          // checked={isChecked}
          // onChange={handleOnChange}
        />

        <input
          type="checkbox"
          id="question"
          name="topping"
          value={question.choices[1]}
          // checked={isChecked}
          // onChange={handleOnChange}
        />

        <input
          type="checkbox"
          id="question"
          name="topping"
          value={question.choices[2]}
          // checked={isChecked}
          // onChange={handleOnChange}
        />

        <input
          type="checkbox"
          id="question"
          name="topping"
          value={question.choices[3]}
          // checked={isChecked}
          // onChange={handleOnChange}
        />
    </div>
  )
}

export default Question