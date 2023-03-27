import React from 'react';
import PropTypes from 'prop-types';
import './SavedQuestion.css';

type SavedQuestionProps = {
  questionNumber: number;
  questionTopic: string;
  question: string;
  removeQuestion: (id: number) => void;
  id: number;
};

const SavedQuestion = ({
  questionNumber,
  questionTopic,
  question,
  removeQuestion,
  id
}: SavedQuestionProps) => {
  return (
    <div className="saved-question">
      <h2 className="question-number-2">Question {questionNumber}</h2>
      <h3 className="question-topic">{questionTopic}</h3>
      <h3 className="saved-question">{question}</h3>
      <button className="remove-button" onClick={() => removeQuestion(id)}>Remove Question</button>
    </div>
  );
};

export default SavedQuestion;

SavedQuestion.propType = {
  questionNumber: PropTypes.number,
  questionTopic: PropTypes.string,
  question: PropTypes.string,
  removeQuestion: PropTypes.func.isRequired,
  id: PropTypes.number
};
