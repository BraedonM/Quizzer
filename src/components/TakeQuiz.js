import React, { useState } from 'react';

function TakeQuiz({ quiz, onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
    } else {
      onFinish();
    }
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div>
      <h2>{quiz.title}</h2>
      <div>
        <h3>Question {currentQuestion + 1}:</h3>
        <p>{quiz.questions[currentQuestion].question}</p>
        <button onClick={toggleAnswer}>
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>
        {showAnswer && <p>Answer: {quiz.questions[currentQuestion].answer}</p>}
      </div>
      <button onClick={handleNext}>
        {currentQuestion < quiz.questions.length - 1 ? 'Next' : 'Finish'}
      </button>
    </div>
  );
}

export default TakeQuiz;
