import { useState, useEffect } from "react";
import question_data from "../questions.json";

import PlayerInfo from "./PlayerInfo";

const QuestionPage = ({ score, setScore, setMaxScore, setPage, playerName, playerColor }) => {
    const[questions, setQuestions] = useState(question_data.Questions);
    const [qI, setQI] = useState(0); // Index of current question
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => { // Record length of questions as max score when questions are loaded
        setMaxScore(questions.length);
    }, [questions]);

    const handleSubmit = e => {
        e.preventDefault();
        const selected = parseInt(e.target.elements.answer.value); // Selected answer

        if (selected == questions[qI].Solution) {
            setScore(score + 1); // Update score state variable
        }
        // Deselect radio buttons when next question renders
        document.querySelectorAll(".radio").forEach(el => el.checked = false);
        document.getElementById("submit").disabled = true;

        setSubmitted(selected);
    }

    const handleNext = () => {
        if (qI >= questions.length - 1) {
            setPage(2);
        } else {
            setQI(qI + 1);
            setSubmitted(false);
        }
    }

    const handleRadioChange = () => {
        document.getElementById("submit").disabled = false;
    }

    return (
        <>
            <PlayerInfo playerName={playerName} playerColor={playerColor} score={score} possiblePoints={submitted !== false ? qI+1 : qI} />
            <h1>{questions[qI].Question}</h1>
            { // Some questions include images. If they do, we create a space for them and populate it
                questions[qI].Images ? (<>
                    <div className="img-bar">
                        {
                            questions[qI].Images.map((image, key) => (<img key={key} src={image.src} alt={image.alt}/>))
                        }
                    </div>
                </>)
                :
                (<></>)
            }
            <form action="." onSubmit={handleSubmit}>
                <ol>
                {
                    questions[qI].Answers.map((el, i) => (
                    <li key={i}>
                        <input type="radio" name="answer" className="radio" value={i} id={"answer-"+i} onChange={handleRadioChange}/>
                        <label htmlFor={"answer-"+i}>{el}</label>
                    </li>
                ))}
                </ol>
                {
                    submitted === false ?
                    (<>
                        <input type="submit" disabled={true} id="submit" />
                    </>):
                    (<>
                        {
                            questions[qI].Explanations ? // Optional explanations for each answer may be included
                            (<p className={"explanation" + (questions[qI].Solution == submitted ? " correct" : " incorrect")}>{questions[qI].Explanations[submitted]}</p>)
                            : // If not included, helper text defaults to "Correct!" or "Incorrect"
                            (<p className={"explanation" + (questions[qI].Solution == submitted ? " correct" : " incorrect")}>{questions[qI].Solution == submitted ? "Correct!" : "Incorrect"}</p>)
                        }
                        <button onClick={handleNext}>{ qI == questions.length - 1 ? "View Score" : "Next" }</button>
                    </>)
                }
            </form>
        </>
    );
};

export default QuestionPage;