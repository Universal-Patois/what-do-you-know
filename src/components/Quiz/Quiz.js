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
      correctAnswers: [],
      incorrectAnswers: []
    }
  }

 handleChange = (event, correctAnswer) => {
  const { value, isChecked} = event.target
  if(isChecked && value === correctAnswer) {
    this.setState({correctAnswers: [...this.state.correctAnswers, value]})
  } else if (isChecked && value !== correctAnswer) {
    this.setState({incorrectAnswers: [...this.state.incorrectAnswers, value]})
  } else if (!isChecked) {
    this.setState({
      correctAnswers: [this.state.correctAnswers.filter((event) => event !== value )], 
      incorrectAnswers: [this.state.incorrectAnswers.filter((event) => event !== value)]
    })
  }
 }

 submitResults = () => {

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
              choice={this.props.currentQuestion.choices}
              correctAnswer={this.props.currentQuestion.correctAnswer}
              id={this.props.currentQuestion.id}
              onChange={this.handleChange}
              isChecked={false}
          />
        </> : <h1>'Please Wait. If nothing loads please go back'</h1>}
      </div>
    <NavLink>Previous Question</NavLink>
    <NavLink>Save</NavLink>
    <NavLink>Next Question</NavLink>
    <NavLink onClick={() => this.submitResults}>See Results</NavLink>
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