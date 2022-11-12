import React from "react"

const QuestionCard = ({questionNumber}) => {
  return (
    <div className="question-card">
      <h3 className="question-card-number">{questionNumber}</h3>
    </div>
  )
}

export default QuestionCard