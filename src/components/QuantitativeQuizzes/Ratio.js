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
      text: `\\text{If m:n = 13:11, find} \\\\ m^2 - n^2 : (m + n)^2}  \\text{UME}`,
      options: [
        { id: 0, text: "1:11", isCorrect: false },
        { id: 1, text: "1:13", isCorrect: false },
        { id: 2, text: "1:10", isCorrect: false },
        { id: 3, text: "1:12", isCorrect: true },
      ],
      answer: "88",
      working: ` `
    },
    {
      id: "Q2",
      text: `\\text{ N140,000 is shared between Abu,} \\\\ \\text{ Kayode and Uche. Abu has twice as } \\\\ \\text{much as Kayode, and Kayode has twice as } \\\\ \\text{much as Uche. What is Kayode's share?} \\\\ \\text{(WASSCE) }`,
      options: [
        { id: 0, text: "N80,000", isCorrect: false },
        { id: 1, text: "N40,000", isCorrect: false },
        { id: 2, text: "N20,000", isCorrect: true },
        { id: 3, text: "N10,000", isCorrect: false },
      ],
      answer: "0.00520",
      working: `0.0052048 = 0.00520 \\text{ (to 3 s.f)} \\\\ \\text{Here counting starts from 5, being} \\\\ \\text{ the first significant figure, and we count} \\\\ \\text{ three digits, thereby stopping at 0.}`
    },
    {
      id: "Q3",
      text: `\\text{If the ratio x:y = 3:5 and} \\\\ \\text{y:z = 4:7, find the ratio x:y:z }  \\text{ (WASSCE)}`,
      options: [
        { id: 0, text: "15 : 28 : 84", isCorrect: false },
        { id: 1, text: "12 : 20 : 35", isCorrect: true },
        { id: 2, text: "3 : 5 : 4", isCorrect: false },
        { id: 3, text: "5 : 4 : 7", isCorrect: false },
      ],
      answer: "12.4127",
      working: `827.51 \\times 0.015 = 12.4127 \\text{ (to 4 d.p.) }`
    },
    {
      id: "Q4",
      text: `\\text{The sum of the ages of Musa and Lawal is 28 years. After sharing a certain sum of money in the ratio of their ages, Musa gets N600 and Lawal N800. How old is Lawal?} (UME)`,
      options: [
        { id: 0, text: "14 years", isCorrect: true },
        { id: 1, text: "20 years", isCorrect: false },
        { id: 2, text: "12 years", isCorrect: false },
        { id: 3, text: "16 years", isCorrect: false },
      ],
      answer: "1",
      working: `31.4 \\times 38.02 = 1193.828 \\div 40.3 \\\\= 29.623524 \\div 29.62 = 1 `
    },
    {
      id: "Q5",
      text: `\\text{A farmer planted 5000 grains of maize and harvested 5000 cobs, each bearing 500 grains. What is the ratio of the number of grains sowed to the number harvested? } \\\\  \\text{ (UME) } `,
      options: [
        { id: 0, text: "1 : 250 000", isCorrect: false },
        { id: 1, text: "1 : 25 000", isCorrect: false },
        { id: 2, text: "1 : 500", isCorrect: true },
        { id: 3, text: "1 : 5 000", isCorrect: false },
      ],
      answer: "\\frac{1}{3^{10}}",
      working:`\\frac{0.000 045}{150000} \\\\= \\frac{45 \\times 10 ^{-6}}{15 \\times 10^4} \\\\ = 3 \\times 10^{-6-4} \\\\ = 3 \\times 10 ^{-10} \\\\ \\therefore p = 3 \\text{ and } q = -10 \\\\ \\therefore p^q = 3^{-10} = \\frac{1}{3^{10}}`
    },
    {
      id: "Q6",
      text: `\\text{If the numbers M, N, Q are in the ratio 5:4:3, find the value of (2N−Q)/M } \\text{ (UME) }`,
      options: [
        { id: 0, text: "2", isCorrect: true },
        { id: 1, text: "3", isCorrect: false },
        { id: 2, text: "1", isCorrect: false },
        { id: 3, text: "4", isCorrect: false },
      ],
      answer: "205",
      working:`\\sqrt{41830} = 204.5238 = 205 \\text{( correct to 3 s.f)}`
    },
    {
      id: "Q7",
      text: `\\text{3 girls share a number of apples in the ration 5:3:2. If the highest share is 40 apples, find the smallest share} \\\\ \\text{(ume)} `,
      options: [
        { id: 0, text: "36", isCorrect: true },
        { id: 1, text: "24", isCorrect: false },
        { id: 2, text: "16", isCorrect: false },
        { id: 3, text: "38", isCorrect: false },
      ],
      answer: "10^{-5}",
      working: `0.007685 = 0.00769 \\text{ (to 3 s.f)} \\\\ 0.007685 = 0.0077 \\text{ (to 4 d.p)} \\\\ \\therefore \\text{ the difference} = 0.0077 - 0.00769 \\\\= 0.00001 =10^{-5}  `
    },
    {
      id: "Q8",
      text: `\\text{\\text{The present ages of a father and his son are in the ratio 10 : 3. If the son is 15 years old now, in how many years will the ratio of their ages be 2 : 1? }  \\text{ (WASSCE) }  `,
      options: [
        { id: 0, text: "put options as appropriate ", isCorrect: false },
        { id: 1, text: "2.0 \\times 10^{-5} ", isCorrect: false },
        { id: 2, text: "2.0 \\times 10^{-7} ", isCorrect: true },
        { id: 3, text: "2.0 \\times 10^{-9} ", isCorrect: false },
      ],
      answer: "2.0 \\times 10^{-7} ",
      working:`\\frac{0.04 \\times 0.123}{0.34 \\times 72000 } \\\\= \\frac{0.00492}{24480 } \\\\= 0.000 000 201 \\\\= 0.000 000 20 \\text{ (to 2 s.f)} \\\\= 2.0 \\times 10^{-7}  \\text{( standard form)} `
    },
    {
      id: "Q9",
      text: `\\text{If x : y = 3 : 2 and y : z = 5 : 4, find the value of x in the ratio x : y : z} WASSCE`,
      options: [
        { id: 0, text: "8", isCorrect: false },
        { id: 1, text: "10", isCorrect: false },
        { id: 2, text: "15", isCorrect: false },
        { id: 3, text: "20", isCorrect: true },
      ],
      answer: "2 \\times 10^{-2}",
      working: ` 41.56 \\times 4.12 = 171.2272 \\\\ = 171.2 \\text{(to 4 s.f)} \\\\ = 171.23 \\text{(to 2 d.p)} \\\\ \\text{ And their difference} = 171.23 - 171.2\\\\  = 0.03 = 3 \\times 10^{-2} `
    },
    {
      id: "Q10",
      text: `\\text{A number of pencils were shared out among Bisi, Sola and Tunde in the ratio of 2:3:5 respectively. If Bisi got 5, how many were shared out?} \\\\ \\text{ (UTME)}`,
      options: [
        { id: 0, text: "15", isCorrect: false },
        { id: 1, text: "25", isCorrect: true },
        { id: 2, text: "30", isCorrect: false },
        { id: 3, text: "50", isCorrect: false },
      ],
      answer: "x = 2.31 \\text{ and } y = -9",
      working:`\\frac{0.000335}{145000} \\\\= \\frac{335 \\times 10 ^{-6}}{145 \\times 10^3} \\\\ = 2.31 \\times 10^{-6-3} \\\\ = 2.31 \\times 10 ^{-9} \\\\ \\therefore x = 2.31 \\text{ and } y = -9`
    },
  ];
  

const Ratio = () => {
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
              <Text text={"Ratio"} />
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


export default Ratio