import React, { useState } from 'react';

// Only call hooks at the top level
// Don't call hooks inside a condition, loops and nested function
function SetCounter() {

    const[count, setCount] = useState(0);

    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Hook Count{count}</button>
        </div>
    )
}

export default SetCounter;