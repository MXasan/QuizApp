import { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="nav">
            <div className="nav-logo">AIMOEX</div>

            <div
                className={`menu-toggle ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/quiz">Quizzes</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
