import "./footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} IELTS Practice. All rights reserved.</p>
                <p>xasannet@icloud.com</p>

                <div className="social-links">
                    <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a> <p>|</p>
                    <a href="#" target="_blank" rel="noopener noreferrer">X</a> <p>|</p>
                    <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a> <p>|</p>
                    <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>

                </div>
            </div>
        </footer>
    );
}

export default Footer