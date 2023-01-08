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
      text: `\\text{A student measures a piece of rope}\\\\ \\text{and found that it was 1.26m long.}\\\\ \\text{If the actual length of the rope was 1.25m,}\\\\ \\text{what was the percentage error} \\\\ \\text{in the measurement? } \\text{ (UTME)}`,
      options: [
        { id: 0, text: "0.25%", isCorrect: false },
        { id: 1, text: "0.01%", isCorrect: false },
        { id: 2, text: "0.80%", isCorrect: true },
        { id: 3, text: "0.40%", isCorrect: false },
      ],
      answer: "0.80%",
      working: `\\text{% error } = \\frac{\\text{error}}{\\text{true measurement}} \\times 100  `
    },
    {
      id: "Q2",
      text: `\\text{The radius of a circle is given} \\\\ \\text{as 5cm subject to an error of 0.1cm.} \\\\ \\text{ What is the percentage error in the} \\\\ \\text{ area of the circle?} \\text{ (UME)}`,
      options: [
        { id: 0, text: "\\frac{1}{25}", isCorrect: false },
        { id: 1, text: "\\frac{1}{4}", isCorrect: false },
        { id: 2, text: "4", isCorrect: true },
        { id: 3, text: "25", isCorrect: false },
      ],
      answer: "0.00520",
      working: `0.0052048 = 0.00520 \\text{ (to 3 s.f)} \\\\ \\text{Here counting starts from 5, being} \\\\ \\text{ the first significant figure, and we count} \\\\ \\text{ three digits, thereby stopping at 0.}`
    },
    {
      id: "Q3",
      text: `\\text{The length of a notebook 15cm, was} \\\\ \\text{measured as 16.8cm. Calculate the} \\\\ \\text{ percentage error to 2 significant figures.}\\\\ \\text{  (UME)}`,
      options: [
        { id: 0, text: "12.00 %", isCorrect: false },
        { id: 1, text: "11.00 %", isCorrect: true },
        { id: 2, text: " 10.71 %", isCorrect: false },
        { id: 3, text: "0.12 %", isCorrect: false },
      ],
      answer: "12.4127",
      working: `827.51 \\times 0.015 = 12.4127 \\text{ (to 4 d.p.) }`
    },
    {
      id: "Q4",
      text: `\\text{A sales boy gave a change of N75.00} \\\\ \\text{to a buyer instead of N80.00,} \\\\ \\text{calculate his percentage error,} \\\\ \\text{correct to one decimal place?} \\\\ \\text{(NECO)}`,
      options: [
        { id: 0, text: "6.00%", isCorrect: true },
        { id: 1, text: "6.20%", isCorrect: false },
        { id: 2, text: "6.30%", isCorrect: false },
        { id: 3, text: "6.60%", isCorrect: false },
       
      ],
      answer: "6.30%",
      working: `31.4 \\times 38.02 = 1193.828 \\div 40.3 \\\\= 29.623524 \\div 29.62 = 1 `
    },
    {
      id: "Q5",
      text: ` \\text{The length of a piece of stick is 1.75m. A girl measured it as 1.80m. Find the percentage error} WASSCE`,
      options: [
        { id: 0, text: "28/7%", isCorrect: false },
        { id: 1, text: "29/7%", isCorrect: false },
        { id: 2, text: "5%", isCorrect: true },
        { id: 3, text: "20/7%", isCorrect: false },
      ],
      answer: "\\frac{1}{3^{10}}",
      working:`\\frac{0.000 045}{150000} \\\\= \\frac{45 \\times 10 ^{-6}}{15 \\times 10^4} \\\\ = 3 \\times 10^{-6-4} \\\\ = 3 \\times 10 ^{-10} \\\\ \\therefore p = 3 \\text{ and } q = -10 \\\\ \\therefore p^q = 3^{-10} = \\frac{1}{3^{10}}`
    },
    {
      id: "Q6",
      text: `\\text{A sales boy gave a change of N68 instead of N72. Calculate his percentage error} \\text{ (WASSCE) }`,
      options: [
        { id: 0, text: "4%", isCorrect: true },
        { id: 1, text: "5 5/9%", isCorrect: false },
        { id: 2, text: "5 15/17%", isCorrect: false },
        { id: 3, text: "7%", isCorrect: false },
      ],
      answer: "205",
      working:`\\sqrt{41830} = 204.5238 = 205 \\text{( correct to 3 s.f)}`
    },
    {
      id: "Q7",
      text: `\\text{A surveyor measured the length of a obtained 42.55 metres. If his measurement was more than the actual length and the percentage error of his measurement was 8%, calculate the actual length of the land} \\\\ \\text{(NECO)} `,
      options: [
        { id: 0, text: "39.40 metres", isCorrect: true },
        { id: 1, text: "46.20 metres", isCorrect: false },
        { id: 2, text: "46.25 metres", isCorrect: false },
        { id: 3, text: "46.50 metres E. 48.25 metres", isCorrect: false },
      ],
      answer: "10^{-5}",
      working: `0.007685 = 0.00769 \\text{ (to 3 s.f)} \\\\ 0.007685 = 0.0077 \\text{ (to 4 d.p)} \\\\ \\therefore \\text{ the difference} = 0.0077 - 0.00769 \\\\= 0.00001 =10^{-5}  `
    },
    {
      id: "Q8",
      text: `\\text{Evaluate } \\frac{0.04 \\times 0.123}{0.34 \\times 72000 }\\\\ \\text{Leave your answer in standard} \\\\ \\text{form correct to 2 significant} \\\\ \\text{figures} `,
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
      text: `\\text{Express the product of 41.56 and 4.12 }  \\\\  \\text{to 4 s.f and 2 d.p and find the } \\\\ \\text{difference between the two outcomes  } \\\\ \\text{in standard form}`,
      options: [
        { id: 0, text: "1.72 \\times 10^{-2}", isCorrect: false },
        { id: 1, text: "1.7 \\times 10^{-2}", isCorrect: false },
        { id: 2, text: "2.2 \\times 10^{-2}", isCorrect: false },
        { id: 3, text: "2 \\times 10^{-2}", isCorrect: true },
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

const PercentageError = () => {
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
              <Text text={"Percentages I(Percentage Error)"} />
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



export default PercentageError