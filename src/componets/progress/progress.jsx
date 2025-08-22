import { useEffect, useState } from "react";
import "./progress.css";

export default function Progress() {
    const [history, setHistory] = useState([]);
    const totalTests = history.length;
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("quizHistory") || "[]");
        setHistory(saved);
    }, []);


    const totalScore = history.reduce((sum, entry) => sum + entry.correct, 0);
    const totalQuestions = history.reduce((sum, entry) => sum + entry.total, 0);
    const averageScore = totalTests ? ((totalScore / totalQuestions) * 100).toFixed(1) : 0;

    return (
        <div className="progress">
            <h2>Your Progress</h2>
            <div className="countOfQuiz">
                <p>count of quiz: {history.length}</p><p>total score:{averageScore}</p>
            </div>
            

            {totalTests === 0 ? (
                <p>No quizzes taken yet.</p>
            ) : (
                <div className="progress-list">
                    {history.map((h, i) => (
                        <div key={i} className="progress-item">
                            <p><strong>{h.title}</strong></p>
                            <p>
                                Score: {h.correct} / {h.total}
                            </p>
                            <p>Date: {new Date(h.date).toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
