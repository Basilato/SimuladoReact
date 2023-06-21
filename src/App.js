import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Quiz from './lib/Quiz';
import quiz from './quiz';

function App() {
  const [quizResult, setQuizResult] = useState();
  console.log(quizResult)
  console.log(localStorage.getItem('userID'))
  return (
    <Quiz
    quiz={quiz}
    shuffle
    showInstantFeedback
    // continueTillCorrect
    onComplete={setQuizResult}
    onQuestionSubmit={(obj) => console.log('user question results:', obj)}
    disableSynopsis
    // revealAnswerOnSubmit
    // allowNavigation
  />
  );
}

export default App;
