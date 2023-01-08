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
      text: `\\text{If X = {all prime factors of 44}} \\\\ \\text{and Y = {all prime factors of 60,}} \\\\ \\text{the elements of } X \\cup Y \\text{ and} \\\\ X \\cap Y \\text{ respectively are} \\text{ (UME)}`,
      options: [
        { id: 0, text: "\\text{{2, 4, 3, 5, 11} and {4}}", isCorrect: false },
        { id: 1, text: "\\text{{4, 3, 5, 11} and {3, 4}}", isCorrect: false },
        { id: 2, text: "\\text{{2, 5, 11} and {2}}", isCorrect: false },
        { id: 3, text: "\\text{{2, 3, 5, 11} and {2}}", isCorrect: true },
      ],
      answer: "88",
      working: `\\sqrt{31.42 \\times 60.32 } = \\sqrt{1895.2544} \\\\= 43.5345 \\\\= 44 \\text{ (correct to 2 s.f) } \\\\= 43.5 \\text{(correct to 1 d.p) } \\\\  \\therefore \\text{ their sum } = 44 + 43.5 = 87.5 \\\\= 88 \\text{(correct to the nearest whole number) } `
    },
    {
      id: "Q2",
      text: `\\text{Four members of a school first eleven} \\\\ \\text{cricket team are also members of the} \\\\ \\text{ first fourteen rugby team. How many boys} \\\\ \\text{ play for at least one of the two teams?} \\\\ \\text{  (UME)}`,
      options: [
        { id: 0, text: "25", isCorrect: false },
        { id: 1, text: "21", isCorrect: false },
        { id: 2, text: "16", isCorrect: true },
        { id: 3, text: "3", isCorrect: false },
      ],
      answer: "0.00520",
      working: `0.0052048 = 0.00520 \\text{ (to 3 s.f)} \\\\ \\text{Here counting starts from 5, being} \\\\ \\text{ the first significant figure, and we count} \\\\ \\text{ three digits, thereby stopping at 0.}`
    },
    {
      id: "Q3",
      text: `\\text{If S = } {x : x^2 = 9, x > 4} \\text{, then S}  \\\\ \\text{is equal to (UME)} `,
      options: [
        { id: 0, text: "4", isCorrect: false },
        { id: 1, text: "{0}", isCorrect: true },
        { id: 2, text: " \\varnothing", isCorrect: false },
        { id: 3, text: "{\\varnothing}", isCorrect: false },
      ],
      answer: "12.4127",
      working: `827.51 \\times 0.015 = 12.4127 \\text{ (to 4 d.p.) }`
    },
    {
      id: "Q4",
      text: `\\text{If U = {s, p, i, e, n, d, o, u, r}\\\\  \\text{, X = {s, p, e, n, d}} \\text{,Y = {s, e, n, o, u}, \\text{,Z = {p, n, o, u, r}} \\\\ \\text{find } X \\cap \\bigl( X \\cup Y\\bigr) \\text{ (UME)}`,
      options: [
        { id: 0, text: "\\text{{p, o, u, r}}", isCorrect: true },
        { id: 1, text: "\\text{{s, p, d, r}}", isCorrect: false },
        { id: 2, text: "\\text{{s, p, n, e}}", isCorrect: false },
        { id: 3, text: "\\text{{n, d, u}}", isCorrect: false },
      ],
      answer: "1",
      working: `31.4 \\times 38.02 = 1193.828 \\div 40.3 \\\\= 29.623524 \\div 29.62 = 1 `
    },
    {
      id: "Q5",
      text: `\\text{A survey of 100 students in an} \\\\ \\text{institution shows that 80 students speak} \\\\  \\text{ Hausa and 20 students speak Igbo, while} \\\\ \\text{ only 9 students speak both language.} \\\\  \\text{ How many students speak} \\\\  \\text{ neither Hausa nor Igbo?} \\text{ (UME)}`,
      options: [
        { id: 0, text: "0", isCorrect: false },
        { id: 1, text: "9", isCorrect: false },
        { id: 2, text: "11", isCorrect: true },
        { id: 3, text: "20", isCorrect: false },
      ],
      answer: "\\frac{1}{3^{10}}",
      working:`\\frac{0.000 045}{150000} \\\\= \\frac{45 \\times 10 ^{-6}}{15 \\times 10^4} \\\\ = 3 \\times 10^{-6-4} \\\\ = 3 \\times 10 ^{-10} \\\\ \\therefore p = 3 \\text{ and } q = -10 \\\\ \\therefore p^q = 3^{-10} = \\frac{1}{3^{10}}`
    },
    {
      id: "Q6",
      text: `\\text{In a school, 220 students offer} \\\\ \\text{Biology or Mathematics or both. 125 offer} \\\\ \\text{ Biology and 110 mathematics. How} \\\\ \\text{ many offer Biology but not Mathematics?} \\\\  \\text{ (UME) }`,
      options: [
        { id: 0, text: "95", isCorrect: true },
        { id: 1, text: "80", isCorrect: false },
        { id: 2, text: "125", isCorrect: false },
        { id: 3, text: "110", isCorrect: false },
      ],
      answer: "205",
      working:`\\sqrt{41830} = 204.5238 = 205 \\text{( correct to 3 s.f)}`
    },
    {
      id: "Q7",
      text: `\\text{In a class of 40 students, 32 offer} \\\\ \\text{ mathematics, 24 offer Physics, and 4} \\\\ \\text{ offer neither Mathematics nor Physics.} \\\\ \\text{ How many offer both Mathematics and Physics?}  \\\\  \\text{ (UME) }`,
      options: [
        { id: 0, text: "20", isCorrect: true },
        { id: 1, text: "16", isCorrect: false },
        { id: 2, text: "4", isCorrect: false },
        { id: 3, text: "8", isCorrect: false },
      ],
      answer: "10^{-5}",
      working: `0.007685 = 0.00769 \\text{ (to 3 s.f)} \\\\ 0.007685 = 0.0077 \\text{ (to 4 d.p)} \\\\ \\therefore \\text{ the difference} = 0.0077 - 0.00769 \\\\= 0.00001 =10^{-5}  `
    },
    {
      id: "Q8",
      text: `\\text{Given:} \\\\
      \\text{U = {Even numbers between 0 and 30}} \\\\
      \\text{P = {Multiples of 6 between 0 and 30}} \\\\
      \\text{Q = {Multiples of 4 between 0 and 30}} \\\\
      \\text{Find } \\bigl( P \\cup Q \\bigr)^c \\text{ (UME)} `,
      options: [
        { id: 0, text: "{2, 10, 14, 22, 26} ", isCorrect: false },
        { id: 1, text: " {0, 10, 14, 22, 26}", isCorrect: false },
        { id: 2, text: "{2,4, 14, 18, 26}", isCorrect: true },
        { id: 3, text: "{0, 2, 6, 22, 26}", isCorrect: false },
      ],
      answer: "2.0 \\times 10^{-7} ",
      working:`\\frac{0.04 \\times 0.123}{0.34 \\times 72000 } \\\\= \\frac{0.00492}{24480 } \\\\= 0.000 000 201 \\\\= 0.000 000 20 \\text{ (to 2 s.f)} \\\\= 2.0 \\times 10^{-7}  \\text{( standard form)} `
    },
    {
      id: "Q9",
      text: `\\text{In a small village of 500 people,}  \\\\ \\text{350 speak the local language while} \\\\ \\text{ 200 speak pidgin English. What percentage} \\\\ \\text{of the population speak both. }  \\text{UME}`,
      options: [
        { id: 0, text: "30%", isCorrect: false },
        { id: 1, text: "10%", isCorrect: false },
        { id: 2, text: "50%", isCorrect: false },
        { id: 3, text: "14%", isCorrect: true },
      ],
      answer: "2 \\times 10^{-2}",
      working: ` 41.56 \\times 4.12 = 171.2272 \\\\ = 171.2 \\text{(to 4 s.f)} \\\\ = 171.23 \\text{(to 2 d.p)} \\\\ \\text{ And their difference} = 171.23 - 171.2\\\\  = 0.03 = 3 \\times 10^{-2} `
    },
    {
      id: "Q10",
      text: `\\text{X and Y are two sets such that n(X) = 15, n(Y) = 12 and n{X ∩ Y} = 7. Find ∩{X ∪ Y}} UTME`,
      options: [
        { id: 0, text: "21", isCorrect: false },
        { id: 1, text: "225", isCorrect: true },
        { id: 2, text: "15", isCorrect: false },
        { id: 3, text: "20", isCorrect: false },
      ],
      answer: "x = 2.31 \\text{ and } y = -9",
      working:`\\frac{0.000335}{145000} \\\\= \\frac{335 \\times 10 ^{-6}}{145 \\times 10^3} \\\\ = 2.31 \\times 10^{-6-3} \\\\ = 2.31 \\times 10 ^{-9} \\\\ \\therefore x = 2.31 \\text{ and } y = -9`
    },
  ];
  

const Sets = () => {
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
              <Text text={"Sets"} />
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


export default Sets