import { ReactSVG } from "react-svg";
import ManaSymbol from "./ManaSymbol";

const NameEntry = () => {
    return (
        <main className="name-entry">
            <h1>Enter your name and select your mana color</h1>
            <input type="text" />
            <div className="color-select">
                <ManaSymbol color={"w"}/>
                <ManaSymbol color={"u"}/>
                <ManaSymbol color={"b"}/>
                <ManaSymbol color={"r"}/>
                <ManaSymbol color={"g"}/>
            </div>
            <button disabled={true}>Next</button>
        </main>
    );
}

export default NameEntry;