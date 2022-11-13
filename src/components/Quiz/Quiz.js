import React from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import Question from "../Question/Question";

const Quiz = ({ quizQuestions, showQuestion, currentQuestion }) => {
  const cards = quizQuestions.map(question => {
   console.log(quizQuestions[0].topic)
   return (
     <QuestionCard 
        questionNumber={question.questionNumber += 1}
        question={question.question}
        showQuestion={showQuestion}
        id={question.id}
        key={question.id}
     />
    )
  })

  const question = (currentQuestion) => {
    return Object.key(currentQuestion).map(keys => {
      return (
        <Question 
          question={}
          choice1={choices[0]}
          choice2={choices[1]}
          choice3={choices[2]}
          choice4={choices[3]}
          correctAnswer={key[correctAnswer]}
          id={question.id}
          checked={isChecked}
          onChange= {handleChage}
        />
      )
    })
  }
    

  return (
   <div>
     {cards}
     
   </div>
 )
}

export default Quiz