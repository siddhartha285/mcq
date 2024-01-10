// App.js
import React, { useState } from 'react';
import './App.css';
import Question from './Question';
import Result from './Result';

const questionsData = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which programming language is used for ReactJS?',
    options: ['Java', 'Python', 'JavaScript', 'C++'],
    correctAnswer: 'JavaScript',
  },
  // Add more questions as needed
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === questionsData[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="app">
      {currentQuestion < questionsData.length ? (
        <Question
          question={questionsData[currentQuestion]}
          onAnswer={handleAnswer}
        />
      ) : (
        <Result score={score} totalQuestions={questionsData.length} />
      )}
    </div>
  );
}

export default App;
