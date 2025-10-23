import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Du har rørt mig ${count} gange.`);
    }, [count]);

    return (
        <div>
            <p>Du har rørt mig {count} gange.</p>
            <button onClick={() => setCount(count + 1)}>Klik mig!</button>
        </div>
    );
}

export default Counter;
