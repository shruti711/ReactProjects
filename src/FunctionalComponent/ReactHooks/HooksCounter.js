import React, { useState, useEffect } from 'react';

function HooksCounter() {
    const initialValue = 0;

    const[count, setCount] = useState(initialValue);
    const[name, setName] = useState('');

    // useEffect will execute after every render
    useEffect(() => {
        console.log('Update the title')
        document.title = `You Clicked ${count} times`
    }, [count])

    return(
        <div>Hook
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            Count: {count}
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default HooksCounter;