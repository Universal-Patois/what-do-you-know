import React from "react"

const QuestionCard = ({questionNumber, question, getQuestion, id}) => {
  return (
    <div className="question-card">
      <button onClick={() => getQuestion(id)}>Question {questionNumber}</button>
      <h2 className="quiz-question">{question}</h2>
    </div>
  )
}

export default QuestionCard