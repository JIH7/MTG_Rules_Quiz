import { ReactSVG } from "react-svg";
import White from "../assets/w.svg";
import Blue from "../assets/u.svg";
import Black from "../assets/b.svg";
import Red from "../assets/r.svg";
import Green from "../assets/g.svg";

const ManaSymbol = ({ color }) => {
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


    return (
        <div className={"mana-symbol color-" + color}>
            <ReactSVG src={getSVG()} />
        </div>
    );
}

export default ManaSymbol;