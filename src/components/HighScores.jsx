import ManaSymbol from "./ManaSymbol";

const HighScores = ({ highScores, toHomePage }) => {
    return (
    <>
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Score</th>
            </tr>
            {
                highScores.map((element, i) => {
                    return (<>
                        <tr>
                            <td>
                                <span>{element.playerName}</span>
                            </td>
                            <td>
                                <ManaSymbol color={element.color} />
                            </td>
                            <td>{element.score}/{element.maxScore} Questions Correct</td>
                        </tr>
                    </>)
                })
            }
            </tbody>
        </table>
        <button onClick={toHomePage}>Back</button>
    </>
    )
};

export default HighScores;