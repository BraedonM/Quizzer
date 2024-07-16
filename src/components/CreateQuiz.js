import React, { useState } from 'react';

function CreateQuiz({ onQuizCreated }) {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ question: '', answer: '' }]);

  const addQuestion = () => {
    setQuestions([...questions, { question: '', answer: '' }]);
  };

  const updateQuestion = (index, field, value) => {
    const updatedQuestions = questions.map((q, i) => {
      if (i === index) {
        return { ...q, [field]: value };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onQuizCreated({ title, questions });
  };

  return (
    <div>
      <h2>Create a New Quiz</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        {questions.map((q, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Question"
              value={q.question}
              onChange={(e) => updateQuestion(index, 'question', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Answer"
              value={q.answer}
              onChange={(e) => updateQuestion(index, 'answer', e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addQuestion}>Add Question</button>
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
}

export default CreateQuiz;
