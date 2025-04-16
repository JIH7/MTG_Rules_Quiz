import { useState, useEffect } from "react";
import ManaSymbol from "./ManaSymbol";

const NameEntry = ({ setPage, setPlayerName, setPlayerColor }) => {
    const [selectedColor, setSelectedColor] = useState();
    const [inputValue, setInputValue] = useState();
    const [buttonDisabled, setButtonDisabled] = useState(true);

    // Handle symbol SVG clicks
    const handleSelect = color => {
        if (color == selectedColor) {
            setSelectedColor(undefined);
        } else {
            setSelectedColor(color);
        }
    };

    const nextButton = () => {
        setPlayerName(inputValue); // Propagate values up to app state variables
        setPlayerColor(selectedColor);
        setPage(1);
    };

    useEffect(() => {
        if (inputValue && selectedColor) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [inputValue, selectedColor])

    return (
        <main className="name-entry">
            <h1>Enter your name and select your mana color</h1>
            <input type="text" onChange={e => setInputValue(e.target.value)} />
            <div className="color-select">
                <ManaSymbol color={"w"} selectedColor={selectedColor} setSelectedColor={handleSelect}/>
                <ManaSymbol color={"u"} selectedColor={selectedColor} setSelectedColor={handleSelect}/>
                <ManaSymbol color={"b"} selectedColor={selectedColor} setSelectedColor={handleSelect}/>
                <ManaSymbol color={"r"} selectedColor={selectedColor} setSelectedColor={handleSelect}/>
                <ManaSymbol color={"g"} selectedColor={selectedColor} setSelectedColor={handleSelect}/>
            </div>
            <button disabled={buttonDisabled} onClick={nextButton}>Next</button>
        </main>
    );
}

export default NameEntry;