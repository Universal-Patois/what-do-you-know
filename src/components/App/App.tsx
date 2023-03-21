import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchCodingData, fetchGeneralData } from "../../utilities/apiCalls";
import TriviaSelection from "../TriviaSelection/TriviaSelection";
import SavedQuestionsContainer from "../SavedQuestionsContainer/SavedQuestionsContainer";
import Form from "../Form/Form";
import Quiz from "../Quiz/Quiz";
import "./App.css";

const App = () => {

  const [triviaType, setTriviaType] = useState('')
  const [savedQuestions, setSavedQuestions] = useState([])
  const [quizQuestions, setQuizQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [correctAnswer, setCorrectAnswer] = useState('')

  const selectCategory = (type) => {
    setTriviaType(type)
  };

  const addQuestions = (quizQuestions) => {
    setQuizQuestions(quizQuestions)
    setCurrentQuestion(quizQuestions[0])
    setCorrectAnswer(quizQuestions[0].correctAnswer)
  };

  const saveQuestion = () => {
    !savedQuestions.includes(currentQuestion) &&
      setSavedQuestions([...savedQuestions, currentQuestion]);
  };

  const showQuestion = (id) => {
    const question = quizQuestions.find( (question) => question.id === id)
    setCurrentQuestion(question)
    setCorrectAnswer(question.correctAnswer)
  };

  const removeQuestion = (id) => {
    const updatedQuestions = savedQuestions.filter( (question) => question.id !== id)
    setSavedQuestions(updatedQuestions)
  };

  const startReview = () => {
    setQuizQuestions(savedQuestions)
    setCurrentQuestion(savedQuestions[0])
    setCorrectAnswer(savedQuestions[0].correctAnswer)
  };

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<TriviaSelection selectCategory={selectCategory} />} />
        <Route path="/form" element={
          <Form 
            triviaType={triviaType} 
            fetchCodingData={fetchCodingData}
            fetchGeneralData={fetchGeneralData} 
            addQuestions={addQuestions} 
          />} />
        <Route path="/quiz" element={
          <Quiz 
            quizQuestions={quizQuestions}
            showQuestion={showQuestion} 
            currentQuestion={currentQuestion} 
            correctAnswer={correctAnswer} 
            triviaType={triviaType} 
            saveQuestion={saveQuestion} 
          />} />
        <Route path="/saved-questions" element={
          <SavedQuestionsContainer 
            savedQuestions={savedQuestions} 
            removeQuestion={removeQuestion} 
            startReview={startReview} 
          />} />
        <Route path="*" element={<Navigate to="/"  replace />} />
      </Routes>
    </main>
  );

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
