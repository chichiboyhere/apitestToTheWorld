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
      text: `\\text{A car dealer bought a second-hand}  \\\\ \\text{car for N250,000 and spent N70,000} \\\\ \\text{refurbishing it.He then sold the} \\\\ \\text{ car for N400,000. What } \\\\ \\text{is the percentage gain?} \\text{ (UME)}`,
      options: [
        { id: 0, text: "60%", isCorrect: false },
        { id: 1, text: "32%", isCorrect: false },
        { id: 2, text: "25%", isCorrect: false },
        { id: 3, text: "20%", isCorrect: true },
      ],
      answer: "88",
      working: `\\sqrt{31.42 \\times 60.32 } = \\sqrt{1895.2544} \\\\= 43.5345 \\\\= 44 \\text{ (correct to 2 s.f) } \\\\= 43.5 \\text{(correct to 1 d.p) } \\\\  \\therefore \\text{ their sum } = 44 + 43.5 = 87.5 \\\\= 88 \\text{(correct to the nearest whole number) } `
    },
    {
      id: "Q2",
      text: `\\text{A trader bought 100 oranges at 5}\\\\ \\text{ for N1.20, 20 oranges got spoilt } \\\\ \\text{and the remaining were sold at 4 for N1.50.} \\\\ \\text{ Find the percentage gain or loss.} \\\\ \\text{ (UME)}`,
      options: [
        { id: 0, text: "30% gain", isCorrect: false },
        { id: 1, text: "25% gain", isCorrect: false },
        { id: 2, text: "30% loss", isCorrect: true },
        { id: 3, text: "25% loss", isCorrect: false },
      ],
      answer: "0.00520",
      working: `0.0052048 = 0.00520 \\text{ (to 3 s.f)} \\\\ \\text{Here counting starts from 5, being} \\\\ \\text{ the first significant figure, and we count} \\\\ \\text{ three digits, thereby stopping at 0.}`
    },
    {
      id: "Q3",
      text: `\\text{A woman buys 270 oranges for}  \\\\ \\text{N1800.00 and sells at 5 for N40.00.} \\\\ \\text{What is her profit? } \\text{ (UME)}`,
      options: [
        { id: 0, text: "8.8415", isCorrect: false },
        { id: 1, text: "12.4127", isCorrect: true },
        { id: 2, text: "124.1265", isCorrect: false },
        { id: 3, text: "12.4120", isCorrect: false },
      ],
      answer: "12.4127",
      working: `827.51 \\times 0.015 = 12.4127 \\text{ (to 4 d.p.) }`
    },
    {
      id: "Q4",
      text: `\\text{A man made a profit of 5% when he} \\\\ \\text{ sold an article for N60,000.00. } \\\\ \\text{How much would he have sell the article to} \\\\ \\text{ make a profit of 26%} \\text{UME}`,
      options: [
        { id: 0, text: "1", isCorrect: true },
        { id: 1, text: "2", isCorrect: false },
        { id: 2, text: "877", isCorrect: false },
        { id: 3, text: "1001", isCorrect: false },
      ],
      answer: "1",
      working: `31.4 \\times 38.02 = 1193.828 \\div 40.3 \\\\= 29.623524 \\div 29.62 = 1 `
    },
    {
      id: "Q5",
      text: `\\text{A man bought a second-hand photocopying machine for N34,000. He serviced it at a cost of N2,000 and then sold it at a profit of 15%. What was the selling price?} UME`,
      options: [
        { id: 0, text: "N37,550", isCorrect: false },
        { id: 1, text: "N40,400", isCorrect: false },
        { id: 2, text: "N41,400", isCorrect: true },
        { id: 3, text: "N42,400", isCorrect: false },
      ],
      answer: "\\frac{1}{3^{10}}",
      working:`\\frac{0.000 045}{150000} \\\\= \\frac{45 \\times 10 ^{-6}}{15 \\times 10^4} \\\\ = 3 \\times 10^{-6-4} \\\\ = 3 \\times 10 ^{-10} \\\\ \\therefore p = 3 \\text{ and } q = -10 \\\\ \\therefore p^q = 3^{-10} = \\frac{1}{3^{10}}`
    },
    {
      id: "Q6",
      text: `\\text{A woman bought a grinder for N60,000. She sold it at a loss of 15%. How much did she sell it?} \\text{ (UME) }`,
      options: [
        { id: 0, text: "N53,000", isCorrect: true },
        { id: 1, text: "N52,000", isCorrect: false },
        { id: 2, text: "N51,000", isCorrect: false },
        { id: 3, text: "N50,000", isCorrect: false },
      ],
      answer: "205",
      working:`\\sqrt{41830} = 204.5238 = 205 \\text{( correct to 3 s.f)}`
    },
    {
      id: "Q7",
      text: `\\text{A trader bought 100 oranges at 5 for N40.00 and 20 for N120.00. Find the profit or loss percent}  \\\\ \\text{(WASSCE)} `,
      options: [
        { id: 0, text: "10^{-5}", isCorrect: true },
        { id: 1, text: "7 \\times 10^{-4}", isCorrect: false },
        { id: 2, text: "8 \\times 10^{-5}", isCorrect: false },
        { id: 3, text: "10^{-6}", isCorrect: false },
      ],
      answer: "10^{-5}",
      working: `0.007685 = 0.00769 \\text{ (to 3 s.f)} \\\\ 0.007685 = 0.0077 \\text{ (to 4 d.p)} \\\\ \\therefore \\text{ the difference} = 0.0077 - 0.00769 \\\\= 0.00001 =10^{-5}  `
    },
    {
      id: "Q8",
      text: `\\text{A man sells his new brand car for N420,000 at a gain of 15%. What did it cost him?} \\\\ \\text{(UTME)} `,
      options: [
        { id: 0, text: "N410,000", isCorrect: false },
        { id: 1, text: "N365, 217", isCorrect: false },
        { id: 2, text: "N157, 250", isCorrect: true },
        { id: 3, text: "N257,000", isCorrect: false },
      ],
      answer: "2.0 \\times 10^{-7} ",
      working:`\\frac{0.04 \\times 0.123}{0.34 \\times 72000 } \\\\= \\frac{0.00492}{24480 } \\\\= 0.000 000 201 \\\\= 0.000 000 20 \\text{ (to 2 s.f)} \\\\= 2.0 \\times 10^{-7}  \\text{( standard form)} `
    },
    {
      id: "Q9",
      text: `\\text{A man bought a car for N800 and sold it for N520. Find his loss per cent}  \\\\ \\text{(UTME)}`,
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
  

const ProfitAndLoss = () => {
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
              <Text text={"Percentages III(Profit and Loss)"} />
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


export default ProfitAndLoss