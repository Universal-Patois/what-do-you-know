import React, {Component} from "react";
import './Quiz.css'
import QuestionCard from "../QuestionCard/QuestionCard";
import Question from "../Question/Question";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

class Quiz extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <>
      <div className="card-container">
      { this.props.quizQuestions.map(question => ( 
        <QuestionCard 
          questionNumber={question.questionNumber}
          question={question.question}
          showQuestion={this.props.showQuestion}
          id={question.id}
          key={question.id}
        />
        ))
      }
      </div>
      <div className="question-container">
        {this.props.currentQuestion.choices && this.props.currentQuestion.choices.length ? 
          <>
          <h1>{this.props.currentQuestion.question}</h1>
            <Question 
              choice1={this.props.currentQuestion.choices[0]}
              choice2={this.props.currentQuestion.choices[1]} 
              choice3={this.props.currentQuestion.choices[2]} 
              choice4={this.props.currentQuestion.choices[3]} 
              correctAnswer={this.props.currentQuestion.correctAnswer}
              id={this.props.currentQuestion.id}
          />
        </> : <h1>'Please Wait. If nothing loads please go back'</h1>}
      </div>
    <NavLink>Previous Question</NavLink>
    <NavLink>Save</NavLink>
    <NavLink>Next Question</NavLink>
    <NavLink>See Results</NavLink>
      </>
    )
  }
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