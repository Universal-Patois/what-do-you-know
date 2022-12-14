import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchCodingData, fetchGeneralData } from "../../utilities/apiCalls";
import TriviaSelection from "../TriviaSelection/TriviaSelection";
import SavedQuestionsContainer from "../SavedQuestionsContainer/SavedQuestionsContainer";
import Form from "../Form/Form";
import Quiz from "../Quiz/Quiz";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      triviaType: "",
      savedQuestions: [],
      quizQuestions: [],
      currentQuestion: {},
      correctAnswer: "",
    };
  }

  selectCategory = (type) => {
    this.setState({ triviaType: type });
  };

  addQuestions = (quizQuestions) => {
    this.setState({
      ...this.state,
      quizQuestions: quizQuestions,
      currentQuestion: quizQuestions[0],
      correctAnswer: quizQuestions[0].correctAnswer,
    });
  };

  saveQuestion = () => {
    !this.state.savedQuestions.includes(this.state.currentQuestion) &&
      this.setState({
        savedQuestions: [
          ...this.state.savedQuestions,
          this.state.currentQuestion,
        ],
      });
  };

  showQuestion = (id) => {
    const question = this.state.quizQuestions.find(
      (question) => question.id === id
    );
    this.setState({
      ...this.state,
      currentQuestion: question,
      correctAnswer: question.correctAnswer,
    });
  };

  removeQuestion = (id) => {
    const updatedQuestions = this.state.savedQuestions.filter(
      (question) => question.id !== id
    );
    this.setState({ savedQuestions: updatedQuestions });
  };

  startReview = () => {
    this.setState({
      quizQuestions: this.state.savedQuestions,
      currentQuestion: this.state.quizQuestions[0],
      correctAnswer: this.state.quizQuestions[0].correctAnswer,
    });
  };

  render() {
    return (
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={<TriviaSelection selectCategory={this.selectCategory} />}
          />
          <Route
            path="/form"
            element={
              <Form
                triviaType={this.state.triviaType}
                fetchGeneralData={fetchGeneralData}
                fetchCodingData={fetchCodingData}
                addQuestions={this.addQuestions}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                quizQuestions={this.state.quizQuestions}
                showQuestion={this.showQuestion}
                currentQuestion={this.state.currentQuestion}
                correctAnswer={this.state.correctAnswer}
                triviaType={this.state.triviaType}
                saveQuestion={this.saveQuestion}
              />
            }
          />
          <Route
            path="/saved-questions"
            element={
              <SavedQuestionsContainer
                savedQuestions={this.state.savedQuestions}
                removeQuestion={this.removeQuestion}
                startReview={this.startReview}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    );
  }
}

export default App;

App.propType = {
  triviaType: PropTypes.string,
  savedQuestions: PropTypes.arrayOf(PropTypes.object),
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
  correctAnswer: PropTypes.string,
  selectCategory: PropTypes.func.isRequired,
  addQuestions: PropTypes.func.isRequired,
  saveQuestion: PropTypes.func.isRequired,
  showQuestion: PropTypes.func.isRequired,
  removeQuestion: PropTypes.func.isRequired,
  startReview: PropTypes.func.isRequired,
};
