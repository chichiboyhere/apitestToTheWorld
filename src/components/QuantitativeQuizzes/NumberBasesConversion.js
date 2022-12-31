import React, { useEffect, useState } from "react";
import classes from "../AptitudeTests/AptitudeTests.module.css";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";
import Text from "../AptitudeTests/Text";
import MathJax from "react-mathjax";
import GetSolutionThree from "../AptitudeTests/GetSolutionThree";
import styles from "../../styles/Global";
import Card from "../UI/Card";
import Message from "../UI/Message";

const questions = [
  {
    id: "Q1",
    text: `\\text{Convert } 128_9 \\text{ to base 10 }`,
    options: [
      { id: 0, text: "110", isCorrect: false },
      { id: 1, text: "106", isCorrect: false },
      { id: 2, text: "107", isCorrect: true },
      { id: 3, text: "102", isCorrect: false },
    ],
    answer: "107",
    working: `1 \\times 9^2 + 2 \\times 9^1 + 8 \\times 9^0 \\\\ = (1 \\times 81) + (2 \\times 9) + (8 \\times 1) \\\\ = 81 + 18 + 8 \\\\ = 107`
  },
  {
    id: "Q2",
    text: `\\text{Convert } 133 \\text{ to base six}`,
    options: [
      { id: 0, text: "341", isCorrect: true },
      { id: 1, text: "143", isCorrect: false },
      { id: 2, text: "313", isCorrect: false },
      { id: 3, text: "442", isCorrect: false },
    ],
    answer: "341",
    working: `133 \\text{ is divided repeatedly by 6} \\\\ \\text{keeping the remainder at every step} \\\\ \\text{until the divisor, 6 in} \\\\ \\text{this case, can no longer divide} \\\\ \\text{into the quotient. Finally the} \\\\ \\text{remainders are written out from} \\\\ \\text{the last to the first to yield 341}`
  },
  {
    id: "Q3",
    text: `\\text{If } 2q3_5 = 77_8 \\text{, find q.} \\text{ [UTME]}`,
    options: [
      { id: 0, text: "3", isCorrect: false },
      { id: 1, text: "0", isCorrect: false },
      { id: 2, text: "1", isCorrect: false },
      { id: 3, text: "2", isCorrect: true },
    ],
    answer: "2",
    working: `2 \\times 5^2 + q \\times 5^1 + 3 \\times 5^0 \\\\ = 7 \\times 8^1 + 7 \\times 8^0 \\\\ 2 \\times 25 + 5q + 3 \\times 1 \\\\ = 7 \\times 8 + 7 \\times 1 \\\\ \\therefore 53 + 5q = 63 \\\\ 5q = 10 \\\\ \\therefore q = \\frac{10}{5} = 2`
  },
  {
    id: "Q4",
    text: `\\text{Given that } 400_x - 1210_4 =0, \\\\ \\text{find the value of x.}`,
    options: [
      { id: 0, text: "8", isCorrect: false },
      { id: 1, text: "7", isCorrect: false },
      { id: 2, text: "6", isCorrect: false },
      { id: 3, text: "5", isCorrect: true },
    ],
    answer: "5",
    working: `4 \\times x^2 - \\bigl(1 \\times 4^3 + 2 \\times 4^2 + 1 \\times 4^1\\bigr) = 0 \\\\ \\text{(Ignore the zeros)} \\\\ 4x^2 - \\bigl(64 + 32 + 4 \\bigr) = 0 \\\\ 4x^2=100 \\\\ x^2 = 25 \\\\ \\therefore x = \\sqrt{25} =5`
  },
  {
    id: "Q5",
    text: `\\text{Simplify } \\sqrt{1001_{two}} \\text{, leaving your} \\\\ \\text{answer in base two. [WASSCE] } `,
    options: [
      { id: 0, text: "100", isCorrect: false },
      { id: 1, text: "101", isCorrect: false },
      { id: 2, text: "11", isCorrect: true },
      { id: 3, text: "10", isCorrect: false },
    ],
    answer: "11",
    working: `\\text{Convert the number to base 10: } \\\\ \\sqrt{1001_2} = \\sqrt{1 \\times 2^3 + 1 \\times 2^0} \\\\= \\sqrt{8 + 1} \\\\=  \\sqrt{9} = 3_{10} = 11_2`
  },
  {
    id: "Q6",
    text: `\\text{If } 303_x - 1210_4 =1133_4\\text{, find x.}`,
    options: [
      { id: 0, text: "8", isCorrect: true },
      { id: 1, text: "9", isCorrect: false },
      { id: 2, text: "10", isCorrect: false },
      { id: 3, text: "11", isCorrect: false },
    ],
    answer: "8",
    working:`303_x - 1210_4 =1133_4 \\\\ 303_x = 1133_4 + 1210_4 \\\\ 3 \\times x^2 + 3x^0 = 3003_4 \\\\ 3x^2 + 3 = 3 \\times 4^3 + 3 \\times 4^0 \\\\ 3x^2 + 3=192 + 3  \\\\3x^2=192  \\\\ \\therefore x^2 = 64 \\\\ \\therefore x = \\sqrt{64} = 8`
  },
  {
    id: "Q7",
    text: `\\text{If }\\frac{x_5}{3} = 5 \\text{, find x.} `,
    options: [
      { id: 0, text: "11", isCorrect: false },
      { id: 1, text: "30", isCorrect: true },
      { id: 2, text: "15", isCorrect: false },
      { id: 3, text: "5", isCorrect: false },
    ],
    answer: "30",
    working:`\\text{First cross-multiply: } x_5 = 3\\times 5=15 \\\\ \\text{Next convert 15 to base 5: } \\\\ x_5 = 30_5 \\\\ \\therefore x =30`
  },
  {
    id: "Q8",
    text: `\\text{If } 2x3_6 =83_9\\text{, find x.}`,
    options: [
      { id: 0, text: "0", isCorrect: true },
      { id: 1, text: "1", isCorrect: false },
      { id: 2, text: "2", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
    answer: "0",
    working:`\\text{Convert the numbers on both sides} \\\\ \\text{ of the equation to base 10 } \\\\ 2 \\times 6^2 + x \\times 6^1 +3 \\times 6^0 = 8\\times 9^1 + 3 \\times 9^0 \\\\ 72 + 6x + 3 = 72 + 3 \\\\ \\therefore x =0`
  },
  {
    id: "Q9",
    text: `\\text{If }\\frac{p_{10}}{7_8} = 5_8 \\text{, find x.} `,
    options: [
      { id: 0, text: "10", isCorrect: false },
      { id: 1, text: "35", isCorrect: true },
      { id: 2, text: "24", isCorrect: false },
      { id: 3, text: "15", isCorrect: false },
    ],
    answer: "35",
    working:`\\frac{p_{10}}{7_8} = 5_8 \\\\ p_{10} = 5_8 \\times 7_8 \\text{(Cross-multiply)} \\\\ p_{10}  = 43_8 \\\\ p_{10} = 4 \\times 8^1 + 3 \\times 8^0 \\\\ p_{10} = 32 + 3 = 35 `
  },
  {
    id: "Q10",
    text: `\\text{Evaluate } \\sqrt{11001_{two}} \\\\ \\text{leaving your answer in base 2}`,
    options: [
      { id: 0, text: "100", isCorrect: false },
      { id: 1, text: "111", isCorrect: false },
      { id: 2, text: "101", isCorrect: true },
      { id: 3, text: "110", isCorrect: false },
    ],
    answer: "101",
    working:`\\text{Convert the number to base 10: } \\\\ \\sqrt{11001_2} = \\sqrt{1 \\times 2^4 + 1 \\times 2^3 + 1 \\times 2^0} \\\\= \\sqrt{16 + 8 + 1} \\\\=  \\sqrt{25} = 5_{10} = 101_2`
  },
];

const NumberBasesConversion = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [showTime, setShowTime] = useState(true);
  // Quantitative states
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrection, setIsCorrection] = useState(false);
  const [startTest, setStartTest] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    setStartTest(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setStartTest(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  // Implement close of Answers
  const closeAnswersHandler = () => {
    setIsCorrection(false);
  };

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      setShowTime(false);
      setIsPaused(true);
      setIsActive(false);
    }
  };


  const getCorrection = () => {
    setIsCorrection(true);
  };
  return (
    <Card className={classes.containerWrapper}>
      {showTime && (
        <>
          <div className={classes.stopwatch}>
            <Timer time={time} />
            <Text text={"Number Bases III (Conversion Between Bases)"} />
            <ControlButtons
              active={isActive}
              isPaused={isPaused}
              handleStart={handleStart}
              handleReset={handleReset}
            />
          </div>
        </>
      )}
      {startTest && (
        <div className={classes.container}>
          <div style={{minHeight: 15}}></div>

          {/*  Show results or show the question game  */}
          {showResults ? (
            <div className={classes.finalresults}>
              <h1 className={styles.h1Text}>Final Results</h1>
              <h2>
                {score} out of {questions.length} correct - (
                {(score / questions.length).toFixed(2) * 100}%)
              </h2>
              <h3>
                You answered {score} questions correctly in {time / 1000}s,
                that's {(score / (time / 1000)).toFixed(2)} score/s.
              </h3>

              <div>
                {score === 10 ? (
                  <Message className={classes.successMessage}>
                    Good job!
                  </Message>
                ) : score < 10 && isCorrection ? (
                  <button onClick={closeAnswersHandler}>Close</button>
                ) : (
                  <button onClick={() => getCorrection()}>Get Answers </button>
                )}
              </div>
              {isCorrection && (
                <GetSolutionThree
                  questions={questions}
                  onClose={closeAnswersHandler}
                />
              )}
            </div>
          ) : (
            <div className={classes.questioncard}>
              {/* 2. Current Score  */}
              <h2>Score: {score}</h2>
              <MathJax.Provider>
                <h2>
                  Question: {currentQuestion + 1} out of {questions.length}
                </h2>
                <h3 className={classes.questiontextThree}>
                  <MathJax.Node formula={questions[currentQuestion].text} />
                </h3>

                {/* List of possible answers  */}
                <ul>
                  {questions[currentQuestion].options.map((option) => {
                    return (
                      <li
                        key={option.id}
                        onClick={() => optionClicked(option.isCorrect)}
                      >
                        <MathJax.Node formula={option.text} />
                      </li>
                    );
                  })}
                </ul>
              </MathJax.Provider>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};

export default NumberBasesConversion;
