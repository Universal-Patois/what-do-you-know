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
    console.log(`${value} is ${isChecked}`)
    this.setState({
      correctAnswers: [...this.state.correctAnswers, value]
    })
  } else if (isChecked && value !== correctAnswer) {
    console.log(`${value} is ${isChecked}`)
    this.setState({
      incorrectAnswers: [...this.state.incorrectAnswers, value]
      })
  } else if (!isChecked) {
    console.log(`${value} is ${isChecked}`)
    this.setState({
      correctAnswers: [this.state.correctAnswers.filter((event) => event !== value )], 
      incorrectAnswers: [this.state.incorrectAnswers.filter((event) => event !== value)]
    })
  }
 }

 saveQuestion = () => {

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
          <h1 className="question">{this.props.currentQuestion.question}</h1>
            <Question 
              choice={this.props.currentQuestion.choices.map(choice => choice)}
              correctAnswer={this.props.currentQuestion.correctAnswer}
              id={this.props.currentQuestion.id}
              onChange={this.handleChange}
              checked={false}
          />
        </> : <h1 className="message">'Please Wait. If nothing loads please go back to the Form page'</h1>}
      </div>
      <nav className="nav">
        <NavLink className="form" to="/">Back to TriviaSelection</NavLink>
        <NavLink className="previous">Previous Question</NavLink>
        <NavLink className="save">Save</NavLink>
        <NavLink className="next">Next Question</NavLink>
        <NavLink className="results"onClick={() => this.submitResults}>See Results</NavLink>
      </nav>
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