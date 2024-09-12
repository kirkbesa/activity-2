import React, { useState, useEffect } from 'react';

function Event() {

    const handleClick = () => {
        alert("Clicked");
    }

    const [name, setName] = useState('');

    return (
        <div>
            
            <button onClick={handleClick}>Click Me!</button>
            <br/><br/>

            <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
            <span> Your name is: {name}</span>

            <br/><br/>

        </div>
    );

}

export default Event;