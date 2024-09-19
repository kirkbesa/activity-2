import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/"><li id="home">Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/counter"><li>Counter</li></Link>
                </ul>
            </nav>
        </header>
    );
}