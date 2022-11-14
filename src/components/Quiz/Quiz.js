import React, {Component} from "react";
import './Quiz.css'
import QuestionCard from "../QuestionCard/QuestionCard";
import Question from "../Question/Question";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// class Quiz extends Component {
//   constructor() {
//     super()
//     this.state = {

//     }
//   }

//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }


const Quiz = ({ quizQuestions, showQuestion, currentQuestion, triviaType, isChecked }) => {
  const cards = quizQuestions.map(question => {
  
    return (
      <QuestionCard 
      questionNumber={question.questionNumber}
      question={question.question}
      showQuestion={showQuestion}
      id={question.id}
      key={question.id}
      />
      )
    })

  return (
   <>
    <div className="card-container">
      {cards}
    </div>
    <div className="question-container">
    {/* {currentQuestion.choices ? <>
    <h1>{currentQuestion.question}</h1>
      {<Question 
        choice1={currentQuestion.choices[0]}
        choice2={currentQuestion.choices[1]} 
        choice3={currentQuestion.choices[2]} 
        choice4={currentQuestion.choices[3]} 
        correctAnswer={currentQuestion.correctAnswer}
        checked={isChecked}
        id={currentQuestion.id}
     />}
    </> : null} */}
    </div>
    <NavLink>Previous Question</NavLink>
    <NavLink>Save</NavLink>
    <NavLink>Next Question</NavLink>
    <NavLink>See Results</NavLink>
   </>
 )
}

export default Quiz

Quiz.propType = {
  quizQuestions: PropTypes.arrayOf(PropTypes.object),
  currentQuestion: PropTypes.shape({
    choices: PropTypes.array,
    correctAnswer: PropTypes.string,
    difficulty: PropTypes.string,
    id: PropTypes.number,
    question: PropTypes.string,
    questionNumber: PropTypes.number,
    topic: PropTypes.string,
  }),
  showQuestion: PropTypes.any.isRequired
}