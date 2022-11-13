import React from "react"

const QuestionCard = ({questionNumber, showQuestion, id}) => {
  return (
    <div className="question-card">
      <button onClick={() => showQuestion(id)}>Question {questionNumber}</button>
    </div>
  )
}

export default QuestionCard