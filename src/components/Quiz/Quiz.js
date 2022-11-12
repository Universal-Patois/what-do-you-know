import React from "react";
import QuestionCard from "../QuestionCard/QuestionCard";

const Quiz = ({quizQuestions}) => {

 const cards = quizQuestions.map(question => {
  return (
    <QuestionCard 
      questionNumber={question.questionNumber += 1}
      key={question.id}
    />
  )
 })

 return (
  <div question-card-container>
    {cards}
  </div>
 )
}

export default Quiz