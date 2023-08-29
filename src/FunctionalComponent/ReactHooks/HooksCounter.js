import React, { useState } from 'react';

function HooksCounter() {
    const initialValue = 0;

    const[count, setCount] = useState(initialValue);

    return(
        <div>Hook
            Count: {count}
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default HooksCounter;