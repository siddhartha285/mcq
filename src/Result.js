// Result.js
import React from 'react';

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>
      <p>Your score: {score} / {totalQuestions}</p>
    </div>
  );
};

export default Result;
