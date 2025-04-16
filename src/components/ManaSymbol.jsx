import { ReactSVG } from "react-svg";
import White from "../assets/w.svg";
import Blue from "../assets/u.svg";
import Black from "../assets/b.svg";
import Red from "../assets/r.svg";
import Green from "../assets/g.svg";

const ManaSymbol = ({ color="w", selectedColor=undefined, setSelectedColor=undefined }) => {
    const getSVG = () => {
        switch (color) {
            case "w":
                return White;
            case "u":
                return Blue;
            case "b":
                return Black;
            case "r":
                return Red;
            case "g":
                return Green;
        }
    }

    const getClassNames = () => { // Concatenate classnames based on if symbol is clickable/selected
        let classNames = "mana-symbol color-" + color;

        if (setSelectedColor) {
            classNames += " selectable";

            if (color == selectedColor) {
                classNames += " selected";
            }
        }
        return classNames;
    }

    const handleClick = () => {
        if (setSelectedColor) {
            setSelectedColor(color);
        }
    };

    return (
        <div onClick={handleClick} className={getClassNames()}>
            <ReactSVG src={getSVG()} />
        </div>
    );
}

export default ManaSymbol;