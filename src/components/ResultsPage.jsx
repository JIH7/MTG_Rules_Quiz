const ResultsPage = ({ score, maxScore, setPage }) => {
    return (
        <>
            <h1>Results</h1>
            <h2>{score}/{maxScore} points</h2>
            <button onClick={() => setPage(0)}>Main Menu</button>
        </>
    );
}

export default ResultsPage;