import React from "react"
import './QuestionCard.css'

const QuestionCard = ({questionNumber, showQuestion, id}) => {
  return (
    <div className="question-card">
      <button className='card-button'onClick={() => showQuestion(id)}>Question {questionNumber}</button>
    </div>
  )
}

export default QuestionCard