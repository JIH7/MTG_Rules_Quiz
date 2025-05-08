import { useState, useEffect } from 'react';
import './App.css';

// Component imports
import HomePage from './components/HomePage';
import QuestionPage from './components/QuestionPage';
import ResultsPage from './components/ResultsPage';
import HighScores from './components/HighScores';
import NameEntry from './components/NameEntry';
import { use } from 'react';

const App = () => {
  const [page, setPage] = useState(0);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [playerName, setPlayerName] = useState();
  const [playerColor, setPlayerColor] = useState();
  const [highScores, setHighScores] = useState([]);

  useEffect(() => { // Retrieve high scores when app is loaded
    console.log("Scores checked")
    if (localStorage.getItem("highScores" !== null)) {
      const storedData = localStorage.getItem("highScores");
      const parsedData = JSON.parse(storedData);
      setHighScores(parsedData.scores);
      console.log("Scores loaded")
    } else { console.log("No scores found.") }
  }, []);

  useEffect(() => {
    const storedScores = localStorage.getItem("highScores")

    if (storedScores === null && highScores) {
      const highScoresJSON = JSON.stringify({ scores : highScores });
      localStorage.setItem("highScores", highScoresJSON);
    } else {
      const parsedScores = JSON.parse(storedScores).scores;

      if (parsedScores != highScores) {
        const packedScores = JSON.stringify({ scores : highScores });
      }
    }
    console.log(highScores);
  }, [highScores]);

  const updateHighScores = () => {
    console.log("updateHighScores called")
    const scoreObject = {
      playerName : playerName,
      score : score,
      maxScore : maxScore
    };
    console.log(scoreObject);
    let highScoresTemp = highScores;
    highScoresTemp.push(scoreObject);

//    highScoresTemp.sort((a, b) => (a.score / a.maxScore) - (b.score / b.maxScore))
    setHighScores(highScoresTemp);
  }

  // Swaps out root component based on page state variable
  const routePage = () => {
    switch (page) {
      case 0: // Main Menu
        return (<HomePage
          startQuiz={startQuiz}
          />);
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
        return (<ResultsPage
          score={score}
          maxScore={maxScore}
          setPage={setPage}
          playerName={playerName}
          updateHighScores={updateHighScores}
          />);
      case 3: // Scoreboard
        return (<HighScores />);
      case 4: // Name Entry
        return (<NameEntry
          setPlayerName={setPlayerName}
          setPlayerColor={setPlayerColor}
          setPage={setPage}
          />);
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