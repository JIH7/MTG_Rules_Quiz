import ManaSymbol from "./ManaSymbol";

const PlayerInfo = ({ playerName, playerColor, score, possiblePoints}) => {

    const getScoreText = () => {
        return `Score: ${score}/${possiblePoints}`;
    }

    return (
        <header className="player-info">
            <div className="flex-row">
                <h2>{playerName}</h2>
                <ManaSymbol color={playerColor} />
            </div>
            {
                possiblePoints > 0 ?
                (<p>{getScoreText()}</p>) :
                (<></>)
            }
        </header>
    )
};

export default PlayerInfo;