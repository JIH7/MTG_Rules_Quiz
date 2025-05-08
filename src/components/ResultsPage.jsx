import { useEffect } from "react";

const ResultsPage = ({ score, maxScore, setPage, playerName, updateHighScores }) => {
    useEffect(() => {
        updateHighScores();
    }, []);

    return (
        <>
            <h1>Results for {playerName}</h1>
            <h2>{score}/{maxScore} points</h2>
            <h2>{Math.round((score/maxScore) * 100)}%</h2>
            <button onClick={() => setPage(0)}>Main Menu</button>
        </>
    );
}

export default ResultsPage;