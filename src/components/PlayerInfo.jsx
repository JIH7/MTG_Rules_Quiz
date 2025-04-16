import ManaSymbol from "./ManaSymbol";

const PlayerInfo = ({ playerName, playerColor}) => {

    return (
        <header className="player-info">
            <h2>{playerName} <ManaSymbol color={playerColor} /></h2>
        </header>
    )
};

export default PlayerInfo;