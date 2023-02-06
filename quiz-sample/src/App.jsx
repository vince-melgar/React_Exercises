import { useState } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      questionText: "What is the capital of Philippines?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "Tokyo", isCorrect: false },
        { answerText: "Manila", isCorrect: true },
        { answerText: "Beijing", isCorrect: false },
      ],
    },
    {
      questionText: "Who killed Lapu-Lapu?",
      answerOptions: [
        { answerText: "Bakit ako?", isCorrect: false },
        { answerText: "Baka ikaw?", isCorrect: false },
        { answerText: "Magellan", isCorrect: false },
        { answerText: "Asawa nya", isCorrect: true },
      ],
    },
    {
      questionText: "What is the value of Pi?",
      answerOptions: [
        { answerText: "3.14", isCorrect: true },
        { answerText: "8-7000", isCorrect: false },
        { answerText: "2.15", isCorrect: false },
        { answerText: "6 1/2", isCorrect: false },
      ],
    },
    {
      questionText: "What has  the strongest bite force land animal?",
      answerOptions: [
        { answerText: "Lion", isCorrect: false },
        { answerText: "Tiger", isCorrect: false },
        { answerText: "Hippopotamus", isCorrect: true },
        { answerText: "Salt Water Crocodile", isCorrect: false },
      ],
    },
    {
      questionText: "Who lives in a pineapple under the sea?",
      answerOptions: [
        { answerText: "Mr. Crabs", isCorrect: false },
        { answerText: "Spongebob Squarepants", isCorrect: true },
        { answerText: "Patrick", isCorrect: false },
        { answerText: "Squidward", isCorrect: false },
      ],
    },
  ];

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  function handleAnswerClick(isCorrect) {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length} questions
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question 1/5</span>
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;