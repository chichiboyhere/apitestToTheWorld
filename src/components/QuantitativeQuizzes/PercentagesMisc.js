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
      text: `\\text{A worker's present salary is} \\\\ \\text{N24,000 per annum. His annual} \\\\ \\text{increment is 10% of his basic salary.} \\\\ \\text{ What would be his annual salary at} \\\\ \\text{the beginning of the third year?} \\\\ \\text{ (UME)}`,
      options: [
        { id: 0, text: "81", isCorrect: false },
        { id: 1, text: "83", isCorrect: false },
        { id: 2, text: "85", isCorrect: false },
        { id: 3, text: "88", isCorrect: true },
      ],
      answer: "88",
      working: `\\sqrt{31.42 \\times 60.32 } = \\sqrt{1895.2544} \\\\= 43.5345 \\\\= 44 \\text{ (correct to 2 s.f) } \\\\= 43.5 \\text{(correct to 1 d.p) } \\\\  \\therefore \\text{ their sum } = 44 + 43.5 = 87.5 \\\\= 88 \\text{(correct to the nearest whole number) } `
    },
    {
      id: "Q2",
      text: `\\text{If the population of a town} \\\\ \\text{was 240,000 in January 1998 and }\\\\ \\text{it increased by 2% each year, what} \\\\ \\text{would be the population of the town} \\\\ \\text{ in January, 2000?}\\text{ (UME)}`,
      options: [
        { id: 0, text: "480,000", isCorrect: false },
        { id: 1, text: "249,696", isCorrect: false },
        { id: 2, text: "249,600", isCorrect: true },
        { id: 3, text: "244,800", isCorrect: false },
      ],
      answer: "0.00520",
      working: `0.0052048 = 0.00520 \\text{ (to 3 s.f)} \\\\ \\text{Here counting starts from 5, being} \\\\ \\text{ the first significant figure, and we count} \\\\ \\text{ three digits, thereby stopping at 0.}`
    },
    {
      id: "Q3",
      text: `\\text{A man wishes to keep his money} \\\\ \\text{in a savings deposit at 25% compound} \\\\ \\text{ interest so that after three years} \\\\ \\text{ he can buy a car for N150,000.} \\\\ \\text{ How much does he need to deposit? } \\\\  \\text{  (UME)}`,
      options: [
        { id: 0, text: "N112,000.50", isCorrect: false },
        { id: 1, text: "N96,000.00", isCorrect: true },
        { id: 2, text: "N85,714.28", isCorrect: false },
        { id: 3, text: "N76,800.00", isCorrect: false },
      ],
      answer: "12.4127",
      working: `827.51 \\times 0.015 = 12.4127 \\text{ (to 4 d.p.) }`
    },
    {
      id: "Q4",
      text: `\\text{A cinema hall contains a certain} \\\\ \\text{number of people. If }22\\frac{1}{2}% \\text{ are} \\\\ \\text{children,} 47\\frac{1}{2}% \\text{ are men and 84 are women,}\\\\  \\text{find the number of men in the hall.} \\\\ \\text{(UME)} `,
      options: [
        { id: 0, text: "63", isCorrect: true },
        { id: 1, text: "84", isCorrect: false },
        { id: 2, text: "113", isCorrect: false },
        { id: 3, text: "133", isCorrect: false },
      ],
      answer: "1",
      working: `31.4 \\times 38.02 = 1193.828 \\div 40.3 \\\\= 29.623524 \\div 29.62 = 1 `
    },
    {
      id: "Q5",
      text: `\\text{If x% of 240 equals 12, find x.} \\\\ \\text{(WASSCE)}`,
      options: [
        { id: 0, text: "x = 1", isCorrect: false },
        { id: 1, text: "x = 3", isCorrect: false },
        { id: 2, text: "x = 5", isCorrect: true },
        { id: 3, text: "x = 7", isCorrect: false },
      ],
      answer: "\\frac{1}{3^{10}}",
      working:`\\frac{0.000 045}{150000} \\\\= \\frac{45 \\times 10 ^{-6}}{15 \\times 10^4} \\\\ = 3 \\times 10^{-6-4} \\\\ = 3 \\times 10 ^{-10} \\\\ \\therefore p = 3 \\text{ and } q = -10 \\\\ \\therefore p^q = 3^{-10} = \\frac{1}{3^{10}}`
    },
    {
      id: "Q6",
      text: `\\text{If 85% of x is N3230, what is the value of x?} \\text{ (WASSCE) }`,
      options: [
        { id: 0, text: "205", isCorrect: true },
        { id: 1, text: "647", isCorrect: false },
        { id: 2, text: "2050", isCorrect: false },
        { id: 3, text: "6470", isCorrect: false },
      ],
      answer: "205",
      working:`\\sqrt{41830} = 204.5238 = 205 \\text{( correct to 3 s.f)}`
    },
    {
      id: "Q7",
      text: `\\text{A man donates 10% of his monthly net earnings to his church. If it amounts to N4,500, what is his net monthly income? UTME} `,
      options: [
        { id: 0, text: "N40,500", isCorrect: true },
        { id: 1, text: "N45,000", isCorrect: false },
        { id: 2, text: "N52,500", isCorrect: false },
        { id: 3, text: "N62,000", isCorrect: false },
      ],
      answer: "10^{-5}",
      working: `0.007685 = 0.00769 \\text{ (to 3 s.f)} \\\\ 0.007685 = 0.0077 \\text{ (to 4 d.p)} \\\\ \\therefore \\text{ the difference} = 0.0077 - 0.00769 \\\\= 0.00001 =10^{-5}  `
    },
    {
      id: "Q8",
      text: `\\text{A trader bought an engine for $15,000.00 outside Nigeria. If the exchange rate is $0.075 to N1.00, how much did the engine cost in Naira?} WASSCE`,
      options: [
        { id: 0, text: "N250,000.00", isCorrect: false },
        { id: 1, text: "N200,000.00", isCorrect: false },
        { id: 2, text: "N150,000.00 ", isCorrect: true },
        { id: 3, text: "N100,000.00", isCorrect: false },
      ],
      answer: "2.0 \\times 10^{-7} ",
      working:`\\frac{0.04 \\times 0.123}{0.34 \\times 72000 } \\\\= \\frac{0.00492}{24480 } \\\\= 0.000 000 201 \\\\= 0.000 000 20 \\text{ (to 2 s.f)} \\\\= 2.0 \\times 10^{-7}  \\text{( standard form)} `
    },
    {
      id: "Q9",
      text: `\\text{The amount A to which a principal P amounts at r% compound interest for n years is given by the formula A = P(1 + (r ÷ 100)n. Find A, if P = 126, r = 4 and n = 2. }  \\\\  \\text{UTME}`,
      options: [
        { id: 0, text: "N132.50K", isCorrect: false },
        { id: 1, text: "N136.30K", isCorrect: false },
        { id: 2, text: "N125.40K", isCorrect: false },
        { id: 3, text: "N257.42K", isCorrect: true },
      ],
      answer: "2 \\times 10^{-2}",
      working: ` 41.56 \\times 4.12 = 171.2272 \\\\ = 171.2 \\text{(to 4 s.f)} \\\\ = 171.23 \\text{(to 2 d.p)} \\\\ \\text{ And their difference} = 171.23 - 171.2\\\\  = 0.03 = 3 \\times 10^{-2} `
    },
    {
      id: "Q10",
      text: `\\text{ A public car dealer marked up the cost of a car at 30% in an attempt to make 20% gross profit. Due to the value of dollar, he now placed 20% discount on the car. What profit or loss will he make?} \\\\ \\text{(UTME)}`,
      options: [
        { id: 0, text: "3%", isCorrect: false },
        { id: 1, text: "2%", isCorrect: true },
        { id: 2, text: "4%", isCorrect: false },
        { id: 3, text: "1%", isCorrect: false },
      ],
      answer: "x = 2.31 \\text{ and } y = -9",
      working:`\\frac{0.000335}{145000} \\\\= \\frac{335 \\times 10 ^{-6}}{145 \\times 10^3} \\\\ = 2.31 \\times 10^{-6-3} \\\\ = 2.31 \\times 10 ^{-9} \\\\ \\therefore x = 2.31 \\text{ and } y = -9`
    },
  ];
  

const PercentagesMisc = () => {
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
              <Text text={"Percentages IV (Miscellaneous Problems)"} />
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


export default PercentagesMisc