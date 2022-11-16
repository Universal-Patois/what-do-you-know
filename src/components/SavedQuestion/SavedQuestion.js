import React from "react";
import "./SavedQuestion.css"

const SavedQuestion = ({questionNumber, questionTopic, question,removeQuestion, id}) => {
  return (
    <div className="saved-question">
      <h2 className="number">Question {questionNumber}</h2>
      <h3 className="topic">{questionTopic}</h3>
      <h3 className="question">{question}</h3>
      <button onClick={() => removeQuestion(id)}>Remove Question</button>
    </div>
  )
}

export default SavedQuestion;