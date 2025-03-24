import { useState } from "react";

const Score = () => {
    const [runs, setRuns] = useState(0);  
    const [remaining, setRemaining] = useState(300);  

    const addRuns = (num) => {
        setRuns(runs + num);  
        setRemaining(remaining - num);   
    };

    return (
        <div className="man">
            <h1>Bangladesh</h1>
            <h2>Score : <span className="score">{runs}</span> runs</h2>
            <h2>Remaining : <span className="score">{remaining}</span> runs</h2>   
            <button onClick={() => addRuns(4)}>Click 4</button>
            <button onClick={() => addRuns(6)}>Click 6</button>
            <button onClick={() => addRuns(2)}>Click 2</button>
            <button onClick={() => addRuns(1)}>Click 1</button>
            <button onClick={() => addRuns(3)}>Click 3</button>
            <button onClick={() => addRuns(5)}>Click 5</button>
        </div>
    );
};

export default Score;
