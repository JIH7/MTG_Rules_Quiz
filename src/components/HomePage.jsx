const HomePage = ({ startQuiz, highScores }) => {
    return (
        <>
            <h1>Magic: The Gathering Rules Quiz</h1>
            <button onClick={startQuiz}>Start</button>
            <button onClick={highScores}>High Scores</button>
        </>
    );
};

export default HomePage;