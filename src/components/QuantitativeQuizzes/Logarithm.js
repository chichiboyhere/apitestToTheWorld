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
      text: `\\text{If } 2log_3y + log_3x^2 = 4\\text{ then y is} \\\\ \\text{ (UME)}`,
      options: [
        { id: 0, text: "4 - log_3x", isCorrect: false },
        { id: 1, text: "\\frac{4}{log_3x}", isCorrect: false },
        { id: 2, text: "\\frac{4}{x}", isCorrect: false },
        { id: 3, text: "\\pm\\frac{9}{x}", isCorrect: true },
      ],
      answer: "88",
      working: `\\sqrt{31.42 \\times 60.32 } = \\sqrt{1895.2544} \\\\= 43.5345 \\\\= 44 \\text{ (correct to 2 s.f) } \\\\= 43.5 \\text{(correct to 1 d.p) } \\\\  \\therefore \\text{ their sum } = 44 + 43.5 = 87.5 \\\\= 88 \\text{(correct to the nearest whole number) } `
    },
    {
      id: "Q2",
      text: `\\text{Solve without using tables }  \\\\ log_5(62.5) - log_5\\frac{1}{2} \\text{ (UME)}`,
      options: [
        { id: 0, text: "3", isCorrect: false },
        { id: 1, text: "4", isCorrect: false },
        { id: 2, text: "5", isCorrect: true },
        { id: 3, text: "8", isCorrect: false },
      ],
      answer: "0.00520",
      working: `0.0052048 = 0.00520 \\text{ (to 3 s.f)} \\\\ \\text{Here counting starts from 5, being} \\\\ \\text{ the first significant figure, and we count} \\\\ \\text{ three digits, thereby stopping at 0.}`
    },
    {
      id: "Q3",
      text: `\\text{Evaluate }  \\frac{log_5(0.04)}{log_318−log_32} \\text{  (UME)}`,
      options: [
        { id: 0, text: "1", isCorrect: false },
        { id: 1, text: "-1", isCorrect: true },
        { id: 2, text: "\\frac{2}{3}", isCorrect: false },
        { id: 3, text: "-\\frac{2}{3}", isCorrect: false },
      ],
      answer: "12.4127",
      working: `827.51 \\times 0.015 = 12.4127 \\text{ (to 4 d.p.) }`
    },
    {
      id: "Q4",
      text: `\\text{Given that } log_a2 = 0.693 \\text{ and } log_a3 = 1.097,\\\\ \\text{ find } log_a 13.5 \\text{  (UME)}`,
      options: [
        { id: 0, text: "1.404", isCorrect: true },
        { id: 1, text: "1.790", isCorrect: false },
        { id: 2, text: "2.598", isCorrect: false },
        { id: 3, text: "2.790", isCorrect: false },
      ],
      answer: "1",
      working: `31.4 \\times 38.02 = 1193.828 \\div 40.3 \\\\= 29.623524 \\div 29.62 = 1 `
    },
    {
      id: "Q5",
      text: `\\text{Given that }log_4(y - 1) + log_4(\\frac{1}{2}x) = 1 \\\\ \\text{and }log_2(y + 1) + log_2x = 2, \\\\ \\text{solve for x and y respectively} \\text{  (UME)}`,
      options: [
        { id: 0, text: "2, 3", isCorrect: false },
        { id: 1, text: "3, 2", isCorrect: false },
        { id: 2, text: "-2, -3", isCorrect: true },
        { id: 3, text: "-3, -2", isCorrect: false },
      ],
      answer: "\\frac{1}{3^{10}}",
      working:`\\frac{0.000 045}{150000} \\\\= \\frac{45 \\times 10 ^{-6}}{15 \\times 10^4} \\\\ = 3 \\times 10^{-6-4} \\\\ = 3 \\times 10 ^{-10} \\\\ \\therefore p = 3 \\text{ and } q = -10 \\\\ \\therefore p^q = 3^{-10} = \\frac{1}{3^{10}}`
    },
    {
      id: "Q6",
      text: `\\text{If log10 to base 8 = x, evaluate }\\\\ \\text{log5 to base 8 in terms of x.} \\\\ \\text{ (UME) }`,
      options: [
        { id: 0, text: "\\frac{1}{2}x", isCorrect: true },
        { id: 1, text: "x - \\frac{1}{4}", isCorrect: false },
        { id: 2, text: "x - \\frac{1}{3}", isCorrect: false },
        { id: 3, text: "x - \\frac{1}{2}", isCorrect: false },
      ],
      answer: "205",
      working:`\\sqrt{41830} = 204.5238 = 205 \\text{( correct to 3 s.f)}`
    },
    {
      id: "Q7",
      text: `\\text{Evaluate }log_{sqrt{2}}4 + log_{\\frac{1}{2}}16 − log_432 \\\\ \\text{ (UME)}`,
      options: [
        { id: 0, text: "-5.5", isCorrect: true },
        { id: 1, text: "-2.5", isCorrect: false },
        { id: 2, text: "2.5", isCorrect: false },
        { id: 3, text: "5.5", isCorrect: false },
      ],
      answer: "10^{-5}",
      working: `0.007685 = 0.00769 \\text{ (to 3 s.f)} \\\\ 0.007685 = 0.0077 \\text{ (to 4 d.p)} \\\\ \\therefore \\text{ the difference} = 0.0077 - 0.00769 \\\\= 0.00001 =10^{-5}  `
    },
    {
      id: "Q8",
      text: `\\text{If }6log_x2 - 3log_x3 = 3log_50.2 \\text{, find x.} \\text{ (UME)} `,
      options: [
        { id: 0, text: "8/3 ", isCorrect: false },
        { id: 1, text: "4/3 ", isCorrect: false },
        { id: 2, text: "3/4 ", isCorrect: true },
        { id: 3, text: "3/8", isCorrect: false },
      ],
      answer: "2.0 \\times 10^{-7} ",
      working:`\\frac{0.04 \\times 0.123}{0.34 \\times 72000 } \\\\= \\frac{0.00492}{24480 } \\\\= 0.000 000 201 \\\\= 0.000 000 20 \\text{ (to 2 s.f)} \\\\= 2.0 \\times 10^{-7}  \\text{( standard form)} `
    },
    {
      id: "Q9",
      text: `\\text{If }log_{10}2 = 0.3010 \\text{ and } log_{10}3 = 0.4771, \\\\  \\text{evaluate }log_{10}4.5  \\text{ (UME)}`,
      options: [
        { id: 0, text: "0.9542", isCorrect: false },
        { id: 1, text: "0.6532", isCorrect: false },
        { id: 2, text: "0.4771", isCorrect: false },
        { id: 3, text: "0.3010", isCorrect: true },
      ],
      answer: "2 \\times 10^{-2}",
      working: ` 41.56 \\times 4.12 = 171.2272 \\\\ = 171.2 \\text{(to 4 s.f)} \\\\ = 171.23 \\text{(to 2 d.p)} \\\\ \\text{ And their difference} = 171.23 - 171.2\\\\  = 0.03 = 3 \\times 10^{-2} `
    },
    {
      id: "Q10",
      text: `\\text{If } log_{10}2 = x, \\text{ express} \\\\ log_{10}12.5 \\text{ in terms of x }  \\text{ (UME)}`,
      options: [
        { id: 0, text: "2(1 + x)", isCorrect: false },
        { id: 1, text: "2 + 3x", isCorrect: true },
        { id: 2, text: "2(1 - x)", isCorrect: false },
        { id: 3, text: "2 - 3x", isCorrect: false },
      ],
      answer: "x = 2.31 \\text{ and } y = -9",
      working:`\\frac{0.000335}{145000} \\\\= \\frac{335 \\times 10 ^{-6}}{145 \\times 10^3} \\\\ = 2.31 \\times 10^{-6-3} \\\\ = 2.31 \\times 10 ^{-9} \\\\ \\therefore x = 2.31 \\text{ and } y = -9`
    },
  ];
  

const Logarithm = () => {
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
              <Text text={"Logarithm"} />
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


export default Logarithm