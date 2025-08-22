import "./main.css";

const MainSection = () => {

    return (
        <main className="main">
            <section className="benefits">
                <h2>How Can This Help You?</h2>
                <div className="benefit-list">
                    <div className="benefit-item">
                        <h3>📖 Real Practice</h3>
                        <p>
                            Solve exercises that reflect real IELTS tasks and boost your
                            confidence before the exam.
                        </p>
                    </div>
                    <div className="benefit-item">
                        <h3>📊 Progress Tracking</h3>
                        <p>
                            Keep track of your improvements over time and identify weak areas
                            you should work on.
                        </p>
                    </div>
                    <div className="benefit-item">
                        <h3>🎯 Smart Preparation</h3>
                        <p>
                            Learn strategies that not only improve your English but also
                            prepare you to succeed in the IELTS exam format.
                        </p>
                    </div>
                </div>
            </section>

            {/* Почему важно */}
            <section className="importance">
                <h2>Why IELTS Matters</h2>
                <p>
                    IELTS is recognized by thousands of universities, employers, and
                    governments worldwide. A high IELTS score can open opportunities for
                    studying abroad, advancing your career, or moving to another country.
                    With regular practice, you will feel prepared and confident.
                </p>
            </section>
        </main>
    );
}

export default MainSection
