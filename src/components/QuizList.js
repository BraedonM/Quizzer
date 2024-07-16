import React from 'react';

function QuizList({ quizzes, onSelectQuiz }) {
  return (
    <div>
      <h2>Available Quizzes</h2>
      {quizzes.length === 0 ? (
        <p>No quizzes available. Create a new one!</p>
      ) : (
        <ul>
          {quizzes.map((quiz, index) => (
            <li key={index}>
              <button onClick={() => onSelectQuiz(quiz)}>{quiz.title}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QuizList;
