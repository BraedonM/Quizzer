import React, { useState } from 'react';
import CreateQuiz from './components/CreateQuiz';
import QuizList from './components/QuizList';
import TakeQuiz from './components/TakeQuiz';

function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [currentView, setCurrentView] = useState('list');
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const addQuiz = (quiz) => {
    setQuizzes([...quizzes, quiz]);
    setCurrentView('list');
  };

  const selectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentView('take');
  };

  return (
    <div className="App">
      <h1>Quiz and Flashcard App</h1>
      {currentView === 'list' && (
        <>
          <button onClick={() => setCurrentView('create')}>Create New Quiz</button>
          <QuizList quizzes={quizzes} onSelectQuiz={selectQuiz} />
        </>
      )}
      {currentView === 'create' && <CreateQuiz onQuizCreated={addQuiz} />}
      {currentView === 'take' && <TakeQuiz quiz={selectedQuiz} onFinish={() => setCurrentView('list')} />}
    </div>
  );
}

export default App;
