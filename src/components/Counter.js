import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log("Hello")
    }, [count]);

        return (
            <div>
                <p>You clicked {count} times</p>
                
                <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
                <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
                <button onClick={() => setCount(prev => 0)}>Reset</button>

                <br />
            </div>
        );
}

export default Counter;