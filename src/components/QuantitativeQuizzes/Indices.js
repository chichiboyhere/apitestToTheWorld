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
      text: `\\text{Simplify } \\bigl(\\sqrt[3]{64a^3}\\bigr)^{-1} \\text{ (UME)}`,
      options: [
        { id: 0, text: "4a", isCorrect: false },
        { id: 1, text: "\\frac{1}{8a}", isCorrect: false },
        { id: 2, text: "8a", isCorrect: false },
        { id: 3, text: "\\frac{1}{4a}", isCorrect: true },
      ],
      answer: "88",
      working: `\\sqrt{31.42 \\times 60.32 } = \\sqrt{1895.2544} \\\\= 43.5345 \\\\= 44 \\text{ (correct to 2 s.f) } \\\\= 43.5 \\text{(correct to 1 d.p) } \\\\  \\therefore \\text{ their sum } = 44 + 43.5 = 87.5 \\\\= 88 \\text{(correct to the nearest whole number) } `
    },
    {
      id: "Q2",
      text: `\\text{Without using tables, evaluate } \\\\ \\bigl( 343 \\bigr)^{\\frac{1}{3}} \\times \\bigl( 0.14 \\bigr)^{-1} \\times \\bigl(25\\bigr)^{-\\frac{1}{2}} \\text{ (UME)}`,
      options: [
        { id: 0, text: "10", isCorrect: false },
        { id: 1, text: "12", isCorrect: false },
        { id: 2, text: "8", isCorrect: true },
        { id: 3, text: "7", isCorrect: false },
      ],
      answer: "0.00520",
      working: `0.0052048 = 0.00520 \\text{ (to 3 s.f)} \\\\ \\text{Here counting starts from 5, being} \\\\ \\text{ the first significant figure, and we count} \\\\ \\text{ three digits, thereby stopping at 0.}`
    },
    {
      id: "Q3",
      text: `\\text{Simplify (25)^−1/2 × (27)^1/3 + (121)^−1/2 × (625)^−1/4 }  \\text{  (UME)}`,
      options: [
        { id: 0, text: "34/55", isCorrect: false },
        { id: 1, text: "9/11", isCorrect: true },
        { id: 2, text: "14/5", isCorrect: false },
        { id: 3, text: "3/275", isCorrect: false },
      ],
      answer: "12.4127",
      working: `827.51 \\times 0.015 = 12.4127 \\text{ (to 4 d.p.) }`
    },
    {
      id: "Q4",
      text: `\\text{simplify 16^{−1/2} × 4^{−1/2} × 27^{1/3} } UME`,
      options: [
        { id: 0, text: "3/8", isCorrect: true },
        { id: 1, text: "2/3", isCorrect: false },
        { id: 2, text: "3/4", isCorrect: false },
        { id: 3, text: "3/2", isCorrect: false },
      ],
      answer: "1",
      working: `31.4 \\times 38.02 = 1193.828 \\div 40.3 \\\\= 29.623524 \\div 29.62 = 1 `
    },
    {
      id: "Q5",
      text: `Solve (27/125)^{-1/3} x (4/9)^{1/2}`,
      options: [
        { id: 0, text: "10/9", isCorrect: false },
        { id: 1, text: "9/10", isCorrect: false },
        { id: 2, text: "2/5", isCorrect: true },
        { id: 3, text: "12/125", isCorrect: false },
      ],
      answer: "\\frac{1}{3^{10}}",
      working:`\\frac{0.000 045}{150000} \\\\= \\frac{45 \\times 10 ^{-6}}{15 \\times 10^4} \\\\ = 3 \\times 10^{-6-4} \\\\ = 3 \\times 10 ^{-10} \\\\ \\therefore p = 3 \\text{ and } q = -10 \\\\ \\therefore p^q = 3^{-10} = \\frac{1}{3^{10}}`
    },
    {
      id: "Q6",
      text: `\\text{Simplify 3^{−5n} / 9^{1−n} × 27^{n+1}`,
      options: [
        { id: 0, text: "3^2", isCorrect: true },
        { id: 1, text: "3^3", isCorrect: false },
        { id: 2, text: "3^5", isCorrect: false },
        { id: 3, text: "3", isCorrect: false },
      ],
      answer: "205",
      working:`\\sqrt{41830} = 204.5238 = 205 \\text{( correct to 3 s.f)}`
    },
    {
      id: "Q7",
      text: `\\text{Simplify } \\frac{sqrt{8^2 \\times 4^{n+1}}}{2^{2n} \\times 16} \\\\ \\text{(WASSCE)} `,
      options: [
        { id: 0, text: "16", isCorrect: true },
        { id: 1, text: "8", isCorrect: false },
        { id: 2, text: "4", isCorrect: false },
        { id: 3, text: "1", isCorrect: false },
      ],
      answer: "10^{-5}",
      working: `0.007685 = 0.00769 \\text{ (to 3 s.f)} \\\\ 0.007685 = 0.0077 \\text{ (to 4 d.p)} \\\\ \\therefore \\text{ the difference} = 0.0077 - 0.00769 \\\\= 0.00001 =10^{-5}  `
    },
    {
      id: "Q8",
      text: `\\text{Evaluate} \\frac{27^{\\frac{1}{3}} - 8^{\\frac{2}{3}}}{16^{\\frac{2}{4}×2 \\\\ \\text{(Do urs here)} `,
      options: [
        { id: 0, text: "2.0 \\times 10^{-3} ", isCorrect: false },
        { id: 1, text: "2.0 \\times 10^{-5} ", isCorrect: false },
        { id: 2, text: "2.0 \\times 10^{-7} ", isCorrect: true },
        { id: 3, text: "2.0 \\times 10^{-9} ", isCorrect: false },
      ],
      answer: "2.0 \\times 10^{-7} ",
      working:`\\frac{0.04 \\times 0.123}{0.34 \\times 72000 } \\\\= \\frac{0.00492}{24480 } \\\\= 0.000 000 201 \\\\= 0.000 000 20 \\text{ (to 2 s.f)} \\\\= 2.0 \\times 10^{-7}  \\text{( standard form)} `
    },
    {
      id: "Q9",
      text: `\\text{Simplify } \\frac{3^{n−1} \\times 27^{n+1} }{81^n}   \\\\ \\text{(WASSCE)}`,
      options: [
        { id: 0, text: "3^{2n}", isCorrect: false },
        { id: 1, text: "9", isCorrect: false },
        { id: 2, text: "3^n", isCorrect: false },
        { id: 3, text: "3^{n+1}", isCorrect: true },
      ],
      answer: "2 \\times 10^{-2}",
      working: ` 41.56 \\times 4.12 = 171.2272 \\\\ = 171.2 \\text{(to 4 s.f)} \\\\ = 171.23 \\text{(to 2 d.p)} \\\\ \\text{ And their difference} = 171.23 - 171.2\\\\  = 0.03 = 3 \\times 10^{-2} `
    },
    {
      id: "Q10",
      text: `\\frac{0.000335}{145000} = x \\times 10^y  \\text{ where } \\\\ 1 \\leqslant x < 10  \\text{ and y is a whole number.} \\\\ \\text{ Find the values of x and y.}`,
      options: [
        { id: 0, text: "x = 2.13 \\text{ and } y = -9", isCorrect: false },
        { id: 1, text: "x = 2.31 \\text{ and } y = -9", isCorrect: true },
        { id: 2, text: "x = 2.31 \\text{ and } y = -10", isCorrect: false },
        { id: 3, text: "x = 2.11 \\text{ and } y = -11", isCorrect: false },
      ],
      answer: "x = 2.31 \\text{ and } y = -9",
      working:`\\frac{0.000335}{145000} \\\\= \\frac{335 \\times 10 ^{-6}}{145 \\times 10^3} \\\\ = 2.31 \\times 10^{-6-3} \\\\ = 2.31 \\times 10 ^{-9} \\\\ \\therefore x = 2.31 \\text{ and } y = -9`
    },
  ];
  

const Indices = () => {
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
              <Text text={"Indices"} />
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


export default Indices