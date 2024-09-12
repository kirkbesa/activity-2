import React, { useState, useEffect } from 'react';

function Form() {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Form submitted with value: ${inputValue}`);
    };

    return (
        <form onSubmit={handleSubmit}>

            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit">Submit</button>

        </form>
    );
}

export default Form;