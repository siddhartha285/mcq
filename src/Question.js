// Question.js
import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    onAnswer(selectedAnswer);
    setSelectedAnswer('');
  };

  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} disabled={!selectedAnswer}>
        Next
      </button>
    </div>
  );
};

export default Question;
