import { useState } from 'react';
import './App.css';

// Component imports
import HomePage from './components/HomePage';
import QuestionPage from './components/QuestionPage';
import ResultsPage from './components/ResultsPage';
import HighScores from './components/HighScores';
import NameEntry from './components/NameEntry';

const App = () => {
  const [page, setPage] = useState(0);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [playerName, setPlayerName] = useState();
  const [playerColor, setPlayerColor] = useState();

  // Swaps out root component based on page state variable
  const routePage = () => {
    switch (page) {
      case 0: // Main Menu
        return (<HomePage startQuiz={startQuiz} />);
      case 1: // Quiz
        return (<QuestionPage 
          score={score} 
          setScore={setScore} 
          setMaxScore={setMaxScore} 
          setPage={setPage}
          playerName={playerName}
          playerColor={playerColor}
          />);
      case 2: // Results page
        return (<ResultsPage score={score} maxScore={maxScore} setPage={setPage} />);
      case 3: // Scoreboard
        return (<HighScores />);
      case 4: // Name Entry
        return (<NameEntry setPlayerName={setPlayerName} setPlayerColor={setPlayerColor} setPage={setPage} />);
    }
  }

  const startQuiz = () => {
    setScore(0);
    setMaxScore(0);
    setPage(4);
  }

  return (
    <>
      {routePage()}
    </>
  );
};

export default App;