import React from 'react';
import PropTypes from 'prop-types';
import './Question.css';

type QuestionProps = {
  id: string;
  choices: string[];
  checkAnswer: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Question = ({ id, choices, checkAnswer }: QuestionProps) => {
  return (
    <div className="choice-container">
      {choices.map(
        choice =>
          choice && (
            <button
              id={id}
              key={choice}
              value={choice}
              className={'choice-button'}
              onClick={event => checkAnswer(event)}
            >
              {choice}
            </button>
          )
      )}
    </div>
  );
};

export default Question;

Question.propType = {
  id: PropTypes.number,
  choices: PropTypes.arrayOf(PropTypes.string),
  checkAnswer: PropTypes.func.isRequired
};
