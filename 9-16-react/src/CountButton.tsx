import './Button.css';
import { useState } from "react";

type ButtonProps = {
    isSpecial: boolean;
}


export default function Button({ isSpecial }: ButtonProps) {
    const [count, setCount] = useState(0);

    let className = "";

    if (isSpecial) {
        className = "specialButton";
    } else {
        className = "normalButton";
    }



    function handleClick() {
        setCount(count+1);
    }

    // let countIsLarge = "";
    // if (count > 10) {
    //     countIsLarge = "LARGE COUNT";
    // } else {
    //     countIsLarge = "NOT LARGE COUNT";
    // }

    // starts with condition, "?", if condition met, ":" and if not true
    // or could put what's underneath in the section where the variable is stated in {}
    const countIsLarge = count > 15 ? "Count is larger!" : count > 10 ? "Count is large!" : "Count is not large!";


    return (
    <button 
        className={className}
        onClick={handleClick}
    >
        {countIsLarge}
        {/* takes out the "else" if you put && in instead of ?
        && at end of its chain returns the last thing if everything "true" */}
        {count > 20 && "Count is very large!"}
    </button>
    );
}