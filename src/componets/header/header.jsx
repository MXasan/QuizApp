import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="headercontainer">
                <h1 className="header-title">Welcome to IELTS Quiz</h1>
                <p className="header-subtitle">
                    Improve your English skills and get ready for the IELTS exam with fun quizzes.
                </p>
                <Link to="/quiz"><button className="header-btn"> Start Quiz</button></Link>

            </div>
        </header >
    )
}

export default Header