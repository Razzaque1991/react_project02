import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0); 

    const handleCount = () => { 
        setCount(count + 1); 
    };

    return (
        <div className="man">
            <h1>Your count starts</h1>
            <p>Score: {count}</p> 
            <button onClick={handleCount}>Click</button> 
        </div>
    );
};

export default Count;
