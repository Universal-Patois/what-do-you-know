import React from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import Question from "../Question/Question";

const Quiz = ({ quizQuestions, getQuestion }) => {
  const cards = quizQuestions.map(question => {
   console.log(quizQuestions[0].topic)
   return (
     <QuestionCard 
     questionNumber={question.questionNumber += 1}
     question={question.question}
     getQuestion={getQuestion}
     id={question.id}
     key={question.id}
     />
     )
    })

    return (
      <div>
        {cards}
      </div>
 )
}

export default Quiz