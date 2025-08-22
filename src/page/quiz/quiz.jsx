import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import quizzes from "../../data/quizzes.json";
import "./quiz.css";

export default function Quiz() {
    // берём первый квиз из файла (можешь заменить логикой по id/роуту)
    const [quiz, setQuiz] = useState(quizzes[0]);


    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [selected, setSelected] = useState(null);

    const total = quiz.questions.length;
    const q = quiz.questions[index];

    const handleChoose = (option) => {
        setSelected(option);

        // засчитываем балл
        if (option === q.answer) setScore((s) => s + 1);

        // через короткую паузу — следующий вопрос
        setTimeout(() => {
            if (index + 1 < total) {
                setIndex((i) => i + 1);
                setSelected(null);
            } else {
                setFinished(true);
            }
        }, 350);
    };
    const handleNextSet = () => {
        const nextQuiz = quizzes.find(q => q.id === quiz.id + 1);
        if (nextQuiz) {
            setIndex(0);
            setScore(0);
            setSelected(null);
            setFinished(false);
            setQuiz(nextQuiz);
        } else {
            alert("You have completed all sets!");
        }
    };


    // по завершении — сохраняем результат (для Progress)
    useEffect(() => {
        if (finished) {
            const entry = {
                quizId: quiz.id,
                title: quiz.title,
                correct: score,
                total,
                date: new Date().toISOString()
            };
            const prev = JSON.parse(localStorage.getItem("quizHistory") || "[]");
            localStorage.setItem("quizHistory", JSON.stringify([entry, ...prev]));
        }
    }, [finished, score, total, quiz.id, quiz.title]);

    if (!quiz) return <div>Quiz not found.</div>;

    return (
        <div className="quiz">
            <div className="quiz-head">
                <h2 className="quiz-title">{quiz.title}</h2>
                {!finished && (
                    <p className="quiz-progress">
                        Question {index + 1} / {total}
                    </p>
                )}
            </div>

            {!finished ? (
                <div className="quiz-card">
                    <p className="quiz-question">{q.question}</p>

                    <div className="quiz-options">
                        {q.options.map((opt, i) => {
                            const isChosen = selected === opt;
                            const isCorrect = isChosen && opt === q.answer;
                            const isWrong = isChosen && opt !== q.answer;

                            return (
                                <button
                                    key={i}
                                    className={`quiz-option ${isChosen ? "chosen" : ""} ${isCorrect ? "correct" : ""
                                        } ${isWrong ? "wrong" : ""}`}
                                    onClick={() => handleChoose(opt)}
                                    disabled={selected !== null}
                                >
                                    {opt}
                                </button>
                            );
                        })}
                    </div>

                    <div className="quiz-meta">
                        <span>Score: {score}</span>
                    </div>
                </div>
            ) : (
                <div className="quiz-result">
                    <h3>Finished!</h3>
                    <p>
                        Your score: <strong>{score}</strong> / {total}
                    </p>
                    <p className="quiz-tip">
                        Result saved. You can show a chart later on the Progress page.
                    </p>
                    <Link to="/"><button className="header-btn">return to Home</button></Link>
                    <button className="header-btn" onClick={handleNextSet}>
                        {quizzes.some(q => q.id === quiz.id + 1) ? "Next Set" : "Finish"}
                    </button>
                </div>
            )
            }
        </div >
    );
}
