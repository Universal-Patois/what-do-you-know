import React from "react";
import './Results.css'

const Results = ({quizQuestions, score}) => {
  return (
    <div>
      <h1 className="header">Your Results</h1>
      <section>
        <h3 className="questions">Number of Questions: {quizQuestions.length}</h3>
        <h3 className="correct"> Questions Correct: {score}</h3>
        <h3 className="score">Percentage: {score / quizQuestions.length * 100} %</h3>
      </section>
    </div>
  )
}

export default Results;