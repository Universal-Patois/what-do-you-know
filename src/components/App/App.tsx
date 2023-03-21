import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchCodingData, fetchGeneralData } from "../../utilities/apiCalls";
import TriviaSelection from "../TriviaSelection/TriviaSelection";
import SavedQuestionsContainer from "../SavedQuestionsContainer/SavedQuestionsContainer";
import Form from "../Form/Form";
import Quiz from "../Quiz/Quiz";
import "./App.css";

type Question = {
  id: number;
  questionNumber: number;
  topic: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  choices: string[];
}

const App = () => {

  const [triviaType, setTriviaType] = useState('' as string)
  const [savedQuestions, setSavedQuestions] = useState([] as Question[])
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(null || {} as Question)
  const [correctAnswer, setCorrectAnswer] = useState('')

  const selectCategory = (type: string) => {
    setTriviaType(type)
  };

  const addQuestions = (quizQuestions: Question[]) => {
    setQuizQuestions(quizQuestions)
    setCurrentQuestion(quizQuestions[0])
    setCorrectAnswer(quizQuestions[0].correctAnswer)
  };

  const saveQuestion = () => {
    !savedQuestions.includes(currentQuestion) &&
      setSavedQuestions([...savedQuestions, currentQuestion]);
  };

  const showQuestion = (id: number) => {
    const question = quizQuestions.find( (question: Question) => question.id === id)
    if(question) {
      setCurrentQuestion(question)
      setCorrectAnswer(question.correctAnswer)
    }
  };

  const removeQuestion = (id: number) => {
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
