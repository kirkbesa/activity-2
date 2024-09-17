import React from 'react';
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <p>Page Not Found</p>

            <p>Go to <Link to="/">Homepage</Link></p>
        </div>
    );
}