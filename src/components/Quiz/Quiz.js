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
      incorrectAnswers: [],
      selectMessage: false,
      saveMessage: false,
      score: 0
    }
  }

  checkAnswer = (event) => {
    if (event.currentTarget.value === this.props.currentQuestion.correctAnswer && !this.state.correctAnswers.includes(event.currentTarget.value)) {
      this.setState({
        correctAnswers: [...this.state.correctAnswers, this.props.correctAnswer], 

        score: this.state.score + 1
      })
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
          <h1 className="question">{this.props.currentQuestion.question}</h1>
          <h3 className="question-number">Question {this.props.currentQuestion.questionNumber}</h3>
            <Question 
              choices={this.props.currentQuestion.choices}
              id={this.props.currentQuestion.id}
              checkAnswer={this.checkAnswer}
          />
          {this.state.saveMessage && <p>Question Saved!</p>}
        </> : <h1 className="message">'Please Wait. If nothing loads please go back to the Trivia Selection page'</h1>}
      </div>
      <nav className="nav">
        <NavLink className="form" to="/">Back to TriviaSelection</NavLink>
        <NavLink className="previous">Previous Question</NavLink>
        <NavLink className="save" onClick={this.props.saveQuestion}>Save</NavLink>
        <NavLink className="next">Next Question</NavLink>
        <NavLink className="results" onClick={this.submitResults}>See Results</NavLink>
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