const HomePage = ({ startQuiz }) => {
    return (
        <>
            <h1>Magic: The Gathering Rules Quiz</h1>
            <button onClick={startQuiz}>Start</button>
        </>
    );
};

export default HomePage;