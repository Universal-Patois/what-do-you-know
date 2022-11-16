import React from "react";

const SavedQuestionsContainer = ({saveQuestions}) =>{
  const savedQuestionsCards = savedQuestions.map((question, index) => {
    return (
      <SavedQuestions
        questionNumber={index +1}
        questionTopic={question.topic}
        question={question.question}
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