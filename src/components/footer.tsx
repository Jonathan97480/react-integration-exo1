import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/details">Details</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
