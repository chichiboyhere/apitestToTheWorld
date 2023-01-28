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
      text: `\\text{Simplify } 5\\sqrt{18} - 3\\sqrt{72} + 4\\sqrt{50} \\\\ \\text{ (UME)}`,
      options: [
        { id: 0, text: "17\\sqrt{4}", isCorrect: false },
        { id: 1, text: "4\\sqrt{17}", isCorrect: false },
        { id: 2, text: "17\\sqrt{2}", isCorrect: true },
        { id: 3, text: "12\\sqrt{4}", isCorrect: false },
      ],
      answer: "17\\sqrt{2}",
      working: `5\\sqrt{18} - 3\\sqrt{72} + 4\\sqrt{50}\\\\= 5\\sqrt{9 \\times 2} - 3\\sqrt{36 \\times 2} + 4\\sqrt{25 \\times 2} \\\\= 5  \\times 3 \\sqrt{2} - 3 \\times 6 \\sqrt{2} + 4\\times 5\\sqrt{2} \\\\ =15\\sqrt{2} - 18\\sqrt{2} + 20\\sqrt{2} \\\\= 17\\sqrt{2}`
    },
    {
      id: "Q2",
      text: `\\text{Simplify } \\sqrt{48} - \\frac{9}{\\sqrt{3}} + \\sqrt{75} \\text{ (UME)}`,
      options: [
        { id: 0, text: "5\\sqrt{3}", isCorrect: false },
        { id: 1, text: "6\\sqrt{3}", isCorrect: true },
        { id: 2, text: "8\\sqrt{3}", isCorrect: false },
        { id: 3, text: "18\\sqrt{3}", isCorrect: false },
      ],
      answer: "6\\sqrt{3}",
      working: `\\sqrt{48} - \\frac{9}{\\sqrt{3}} + \\sqrt{75} \\\\= \\sqrt{16 \\times 3} - \\frac{9}{\\sqrt{3}}\\frac{\\sqrt{3}}{\\sqrt{3}} + \\sqrt{25 \\times 3} \\\\= 4\\sqrt{3} - \\frac{9\\sqrt{3}}{3} + 5\\sqrt{3}   \\\\ = 9\\sqrt{3} - 3\\sqrt{3} = 6\\sqrt{3} `
    },
    {
      id: "Q3",
      text: `\\text{Given that } \\sqrt{2}=1.414\\text{, find without} \\\\ \\text{using tables, the value of } \\frac{1}{\\sqrt{2}}  \\\\ \\text{(UME)}`,
      options: [
        { id: 0, text: "0.141", isCorrect: false },
        { id: 1, text: "0.301", isCorrect: false },
        { id: 2, text: "0.667", isCorrect: false },
        { id: 3, text: "0.707", isCorrect: true },
      ],
      answer: "0.707",
      working: `\\frac{1}{\\sqrt{2}} \\\\ = \\frac{1}{\\sqrt{2}}\\frac{\\sqrt{2}}{\\sqrt{2}}  \\\\  \\text{ (Rationalizing the denominator) } \\\\ = \\frac{\\sqrt{2}}{2} \\\\ = \\frac{1.414}{2} \\\\ = 0.707`
    },
    {
      id: "Q4",
      text: `\\text{Given that } p = 1 + \\sqrt{2} \\\\ \\text{ and } q = 1 - \\sqrt{2} \\\\ \\text{ evaluate } \\frac{p^2 - q^2}{2pq} \\text{(UME)}`,
      options: [
        { id: 0, text: "2\\bigl(2 + \\sqrt{2}\\bigr)", isCorrect: false },
        { id: 1, text: "-2\\bigl(2 + \\sqrt{2}\\bigr)", isCorrect: false },
        { id: 2, text: "2\\sqrt{2}", isCorrect: false },
        { id: 3, text: "-2\\sqrt{2}", isCorrect: true },
      ],
      answer: "-2\\sqrt{2}",
      working: `\\frac{p^2 - q^2}{2pq} \\\\= \\frac{(1 + \\sqrt{2})^2 - (1 - \\sqrt{2})^2}{2(1 + \\sqrt{2})(1 - \\sqrt{2})} \\\\= \\frac{(1 + 2\\sqrt{2} + 2) - (1 - 2\\sqrt{2} + 2)}{2(1 -2)} \\\\= \\frac{1 + 2\\sqrt{2} + 2 - 1 + 2\\sqrt{2} - 2)}{-2} \\\\= \\frac{ 4\\sqrt{2}}{-2} \\\\= -2\\sqrt{2}`
    },
    {
      id: "Q5",
      text: `\\text{Simplify }\\frac{2\\sqrt{3}+3\\sqrt{5}}{3\\sqrt{5}-2\\sqrt{3}} \\text{(UME)}`,
      options: [
        { id: 0, text: "\\frac{19 +4\\sqrt{25}}{11}", isCorrect: false },
        { id: 1, text: "\\frac{19 +4\\sqrt{15}}{11}", isCorrect: true },
        { id: 2, text: "\\frac{19 +2\\sqrt{15}}{11}", isCorrect: false },
        { id: 3, text: "\\frac{19 +2\\sqrt{15}}{19}", isCorrect: false },
      ],
      answer: "\\frac{19 +4\\sqrt{15}}{11}",
      working:`\\frac{2\\sqrt{3}+3\\sqrt{5}}{3\\sqrt{5}-2\\sqrt{3}} \\\\= \\frac{2\\sqrt{3} + 3\\sqrt{5}}{3\\sqrt{5}-2\\sqrt{3}} \\times \\frac {3\\sqrt{5} + 2\\sqrt{3}}{3\\sqrt{5} + 2\\sqrt{3}}  \\\\ \\text{(Rationalizing the denominator)} \\\\ = \\frac{6\\sqrt{15} + (4 \\times 3) +  (9 \\times 5) + 6\\sqrt{15}} {(9 \\times 5) - (4 \\times 3)} \\\\ \\text{(Difference of two squares was applied to} \\\\ \\text{ the denominators)} \\\\ =\\frac{12\\sqrt{15} + 12 +  45} {45 - 12}  \\\\ =\\frac{12\\sqrt{15} + 57}{33} \\\\ =\\frac{3(4\\sqrt{15} + 19)}{33} \\\\ =\\frac{(4\\sqrt{15} + 19)}{11} \\\\ = \\frac{19 +4\\sqrt{15}}{11}`
    },
    {
      id: "Q6",
      text: `\\text{Simplify } \\\\ \\frac{1}{\\sqrt{3} + 2} \\text{in the form } a + b\\sqrt{3} \\\\ \\text{(UME)}`,
      options: [
        { id: 0, text: "2 - \\sqrt{3}", isCorrect: true },
        { id: 1, text: "-2 - \\sqrt{3}", isCorrect: false },
        { id: 2, text: "2 + \\sqrt{3}", isCorrect: false },
        { id: 3, text: "-2 + \\sqrt{3}", isCorrect: false },
      ],
      answer: "2 - \\sqrt{3}",
      working:`\\frac{1}{\\sqrt{3} + 2} \\\\ = \\frac{1}{\\sqrt{3} + 2} \\times \\frac{\\sqrt{3} - 2}{\\sqrt{3} - 2}  \\\\ \\text{(Introducing conjugate surd: } \\sqrt{3} - 2) \\\\ = \\frac{\\sqrt{3} - 2}{3 - 2^2} \\\\ =2 - \\sqrt{3}`
      
    },
    {
      id: "Q7",
      text: `\\text{Find the value of x if } \\\\ \\frac{\\sqrt{2}}{x + \\sqrt{2}}  = \\frac{1}{x  - \\sqrt{2}} \\text{(UME)}`,
      options: [
        { id: 0, text: "3\\sqrt{2} + 4", isCorrect: false },
        { id: 1, text: "3\\sqrt{2} - 4", isCorrect: false },
        { id: 2, text: "3 - 2\\sqrt{2}", isCorrect: false },
        { id: 3, text: "4 + 3\\sqrt{2}", isCorrect: true },
      ],
      answer: "4 + 3\\sqrt{2}",
      working: `\\frac{\\sqrt{2}}{x + \\sqrt{2}}  = \\frac{1}{x  - \\sqrt{2}} \\\\ \\sqrt{2}(x - \\sqrt{2}) = x + \\sqrt{2} \\text{ (cross-multiply)} \\\\ x\\sqrt{2} - 2 = x + \\sqrt{2} \\\\ x\\sqrt{2} - x = \\sqrt{2} + 2 \\\\ \\text{(Collecting like terms)} \\\\ x(\\sqrt{2} - 1) = \\sqrt{2} + 2 \\\\ \\therefore x = \\frac{ \\sqrt{2} + 2}{\\sqrt{2} - 1} \\\\ = \\frac{ \\sqrt{2} + 2}{\\sqrt{2} - 1}\\frac{\\sqrt{2} + 1}{\\sqrt{2} + 1} \\text{(Introducing conjugate surd: } \\sqrt{2} + 1) \\\\ = \\frac{ 2 + 3\\sqrt{2} + 2}{2 - 1} \\\\ = 4 + 3\\sqrt{2}`
    },
    {
      id: "Q8",
      text: `\\text{If } \\frac{2\\sqrt{3} - \\sqrt{2}}{\\sqrt{3} + 2\\sqrt{2}} = m + n\\sqrt{6}\\\\ \\text{What is the value of m and n respectively?} \\\\  \\text{(UME)} `,
      options: [
        { id: 0, text: "1, -2 ", isCorrect: false },
        { id: 1, text: "-2, 1", isCorrect: true },
        { id: 2, text: "-\\frac{2}{5}, 1", isCorrect: false },
        { id: 3, text: "2, \\frac{3}{5}", isCorrect: false },
      ],
      answer: "-2, 1",
      working:`\\text{Working on the left hand side(LHS) first:} \\\\ \\frac{2\\sqrt{3} -\\sqrt{2}}{\\sqrt{3} + 2\\sqrt{2}} \\times \\frac{\\sqrt{3} - 2\\sqrt{2}}{\\sqrt{3} - 2\\sqrt{2}} \\\\ \\text{Introducing the conjugate surd:} \\\\ \\sqrt{3} - 2\\sqrt{2} \\\\= \\frac{2(3) - 4\\sqrt{6} - \\sqrt{6} + 2(2) }{3 - (4 \\times 2)}  \\\\= \\frac{6 - 5\\sqrt{6} + 4 }{3 - 8} \\\\= \\frac{10 - 5\\sqrt{6} }{-5} \\\\ \\frac{5(2 - \\sqrt{6} )}{-5} \\\\ = -2 + \\sqrt{6} \\\\ \\text{Comparing with the right hand side(RHS)} \\\\ -2 + \\sqrt{6}= m + n\\sqrt{6} \\\\ \\therefore m  = -2 \\text{ and } n = 1`
    },
    {
      id: "Q9",
      text: `\\text{Simplify }  ( \\sqrt{0.7}+ \\sqrt{70} )^2 `,
      options: [
        { id: 0, text: "84.7", isCorrect: true },
        { id: 1, text: "70.7", isCorrect: false },
        { id: 2, text: "217.7", isCorrect: false },
        { id: 3, text: "168.7", isCorrect: false },
      ],
      answer: "84.7",
      working: `( \\sqrt{0.7}+ \\sqrt{70} )^2\\\\ = ( \\sqrt{0.7}+ \\sqrt{70} )( \\sqrt{0.7}+ \\sqrt{70} ) \\\\= 0.7 + \\sqrt{49} + \\sqrt{49} + 70 \\\\ = 70.7 + 14 \\\\ = 84.7`
    },
    {
      id: "Q10",
      text: ` \\text{Simplify } \\frac{ \\sqrt{98} - \\sqrt{50}}{ \\sqrt{32}} \\text{ (UME)}`,
      options: [
        { id: 0, text: "3", isCorrect: false },
        { id: 1, text: "1", isCorrect: false },
        { id: 2, text: "\\frac{1}{2}", isCorrect: true },
        { id: 3, text: "\\frac{1}{4}", isCorrect: false },
      ],
      answer: "\\frac{1}{2}",
      working:`\\frac{ \\sqrt{98} - \\sqrt{50}}{ \\sqrt{32}}  \\\\ = \\frac{ \\sqrt{49 \\times 2 } - \\sqrt{25 \\times 2}}{ \\sqrt{16 \\times 2}} \\\\ = \\frac{ 7\\sqrt{2 } - 5\\sqrt{2}}{ 4\\sqrt{2}}\\\\ = \\frac{2\\sqrt{2}}{ 4\\sqrt{2}} \\\\ = \\frac{1}{2}`
    },
  ];
  

const Surd = () => {
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
              <Text text={"Surd"} />
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


export default Surd