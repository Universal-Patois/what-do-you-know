import React from "react";
import SavedQuestion from "../SavedQuestion/SavedQuestion";
import "./SavedQuestionsContainer.css"

const SavedQuestionsContainer = ({savedQuestions, removeQuestion}) =>{
  const savedQuestionsCards = savedQuestions.map((question, index) => {
    return (
      <SavedQuestion
        questionNumber={index +1}
        questionTopic={question.topic}
        question={question.question}
        removeQuestion={removeQuestion}
        id={question.id}
        key={question.id}
      />
    )
  })

  return (
    <div className="saved-questions-container">
      {savedQuestionsCards}
    </div>
  )
}

export default SavedQuestionsContainer;