import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchCodingData, fetchGeneralData } from "../../utilities/apiCalls";
import TriviaSelection from "../TriviaSelection/TriviaSelection";
import Form from "../Form/Form";
import Quiz from "../Quiz/Quiz";
import Question from "../Question/Question";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      triviaType: "",
      savedQuestions: [],
      quizQuestions: [],
      currentQuestion: {},
      correctAnswer: ''
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
     correctAnswer: quizQuestions[0].correctAnswer
    });
  };

  saveQuestion = () => {
    this.setState({savedQuestions: [...this.state.savedQuestions, this.state.currentQuestion]})
  }

  

  showQuestion = (id) => {
    const question = this.state.quizQuestions.find(
      (question) => question.id === id
    );
    this.setState({ ...this.state, currentQuestion: question , correctAnswer: question.correctAnswer});
  };

  render() {
    return (
      <main>
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
            path="/quiz"
            element={<Question currentQuestion={this.state.currentQuestion} />}
          />
        </Routes>
      </main>
    );
  }
}

export default App;