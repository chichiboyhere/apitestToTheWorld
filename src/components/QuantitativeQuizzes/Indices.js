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
      answer: "\\frac{1}{4a}",
      working: `\\bigl(\\sqrt[3]{64a^3}\\bigr)^{-1}   \\\\ = \\bigl( 4a \\bigr)^{-1}  \\\\  = \\frac{1}{4a} `
    },
    {
      id: "Q2",
      text: `\\text{Without using tables, evaluate } \\\\ \\bigl( 343 \\bigr)^{\\frac{1}{3}} \\times \\bigl( 0.14 \\bigr)^{-1} \\times \\bigl(25\\bigr)^{-\\frac{1}{2}} \\text{ (UME)}`,
      options: [
        { id: 0, text: "10", isCorrect: true },
        { id: 1, text: "12", isCorrect: false },
        { id: 2, text: "8", isCorrect: false },
        { id: 3, text: "7", isCorrect: false },
      ],
      answer: "10",
      working: `(343)^{\\frac{1}{3}} \\times ( 0.14)^{-1} \\times (25)^{-\\frac{1}{2}} \\\\ = \\sqrt[3]{343} \\times (\\frac{14}{100})^{-1} \\times \\frac{1}{\\sqrt{25}}\\\\ = 7 \\times \\frac{100}{14} \\times \\frac{1}{5} \\\\ = 10`
    },
    {
      id: "Q3",
      text: `\\text{Simplify } (25)^{-\\frac{1}{2}} \\times  (27)^\\frac{1}{3} + (121)^{−\\frac{1}{2}} \\times (625)^{−\\frac{1}{4}} \\\\  \\text{  (UME)}`,
      options: [
        { id: 0, text: "\\frac{34}{55}", isCorrect: true },
        { id: 1, text: "\\frac{9}{11}", isCorrect: false },
        { id: 2, text: "\\frac{14}{5}", isCorrect: false },
        { id: 3, text: "\\frac{3}{275}", isCorrect: false },
      ],
      answer: "\\frac{34}{55}",
      working: `(25)^{-\\frac{1}{2}} \\times  (27)^\\frac{1}{3} + (121)^{−\\frac{1}{2}} \\times (625)^{−\\frac{1}{4}} \\\\ = \\frac{1}{25^\\frac{1}{2}} \\times \\sqrt[3]{27} + \\frac{1}{121^\\frac{1}{2}} \\times \\frac{1}{625^\\frac{1}{4}} \\\\ = \\frac{1}{\\sqrt{25}}  \\times 3 + \\frac{1}{11} \\times  \\frac{1}{5} \\\\ = \\frac{3}{5} + \\frac{1}{55} \\\\ = \\frac{34}{55}`
    },
    {
      id: "Q4",
      text: `\\text{Simplify }16^{−\\frac{1}{2}} \\times 4^{−\\frac{1}{2}}\\times 27^{1/3} \\text{ (UME)}`,
      options: [
        { id: 0, text: "\\frac{3}{8}", isCorrect: true },
        { id: 1, text: "\\frac{2}{3}", isCorrect: false },
        { id: 2, text: "\\frac{3}{4}", isCorrect: false },
        { id: 3, text: "\\frac{3}{2}", isCorrect: false },
      ],
      answer: "\\frac{3}{8}",
      working: `16^{−\\frac{1}{2}} \\times 4^{−\\frac{1}{2}} \\times 27^{1/3} \\\\ = \\frac{1}{16\\frac{1}{2}} \\times \\frac{1}{4\\frac{1}{2}} \\times \\sqrt[3]{27} \\\\ = \\frac{1}{\\sqrt{16}}  \\times \\frac{1}{\\sqrt{4}} \\times 3 \\\\ = \\frac{1}{4} \\times \\frac{1}{2} \\times 3  \\\\ = \\frac{3}{8}`
    },
    {
      id: "Q5",
      text: `\\text{Solve } (\\frac{27}{125})^{-\\frac{1}{3}} \\times (\\frac{4}{9})^{\\frac{1}{2}} \\text{ (WASSCE)}`,
      options: [
        { id: 0, text: "\\frac{10}{9}", isCorrect: true },
        { id: 1, text: "\\frac{9}{10}", isCorrect: false },
        { id: 2, text: "\\frac{2}{5}", isCorrect: false },
        { id: 3, text: "\\frac{12}{125}", isCorrect: false },
      ],
      answer: "\\frac{10}{9}",
      working:`(\\frac{27}{125})^{-\\frac{1}{3}} \\times (\\frac{4}{9})^{\\frac{1}{2}} \\\\ = \\sqrt[3]{(\\frac{125}{27})} \\times \\sqrt{(\\frac{4}{9})}  \\\\ = \\frac{5}{3} \\times \\frac{2}{3} \\\\= \\frac{10}{9}`
    },
    {
      id: "Q6",
      text: `\\text{Simplify } \\frac{3^{−3n} \\times 27^{n+1}}{9}`,
      options: [
        { id: 0, text: "3^2", isCorrect: false },
        { id: 1, text: "\\frac{1}{9}", isCorrect: false },
        { id: 2, text: "3^5", isCorrect: false },
        { id: 3, text: "3", isCorrect: true },
      ],
      answer: "3",
      working:`\\frac{3^{−3n} \\times 27^{n+1}}{9} \\\\ = \\frac{3^{−3n} \\times 3^{3(n+1)}}{9}  \\\\ = \\frac{3^{−3n} \\times 3^{3n+3}}{9} \\\\ = \\frac{3^{−3n + 3n + 3} }{9} \\\\ = \\frac{3^3}{9} \\\\ = \\frac{27}{9} =3`
    },
    {
      id: "Q7",
      text: `\\text{Simplify } \\sqrt{ \\frac{8^2 \\times 4^{n+1}} {2^{2n} \\times 16} } \\\\ \\text{ (WASSCE)} `,
      options: [
        { id: 0, text: "16", isCorrect: false },
        { id: 1, text: "8", isCorrect: false },
        { id: 2, text: "4", isCorrect: true },
        { id: 3, text: "1", isCorrect: false },
      ],
      answer: "4",
      working: `\\sqrt{ \\frac{8^2 \\times 4^{n+1}} {2^{2n} \\times 16}} \\\\= \\sqrt{ \\frac{4^3 \\times 4^{n+1}} {4^n \\times 4^2}} \\\\= \\sqrt{ \\frac{4^{3 + n+1}}{4^{n + 2}} } \\\\= \\sqrt{ \\frac{4^{4 + n}}{4^{n + 2}} } \\\\= \\sqrt{ 4^{{4 + n}-(n + 2)} } \\\\= \\sqrt{ 4^{4 + n-n - 2} } \\\\= \\sqrt{ 4^2} \\\\=4`
    },
    {
      id: "Q8",
      text: `\\text{Evaluate} \\frac{ 27^{\\frac{1}{3}} - 8^{\\frac{2}{3}} }{ 16^{\\frac{1}{4}}  \\times 2}`,
      options: [
        { id: 0, text: "-\\frac{3}{4}", isCorrect: false },
        { id: 1, text: "\\frac{1}{4} ", isCorrect: false },
        { id: 2, text: "-\\frac{1}{4}", isCorrect: true },
        { id: 3, text: "\\frac{5}{4}", isCorrect: false },
      ],
      answer: "-\\frac{1}{4}",
      working:`\\frac{27^{\\frac{1}{3}} - 8^{\\frac{2}{3}}}{16^{\\frac{1}{4}} \\times 2} \\\\= \\frac{\\sqrt[3]{27} - \\sqrt[3]{8^2}}{16^{\\frac{1}{4}} \\times 2} \\\\= \\frac{3 - 4}{\\sqrt[4]{16} \\times 2}  \\\\= \\frac{-1}{4} \\\\= -\\frac{1}{4}`
    },
    {
      id: "Q9",
      text: `\\text{Simplify } \\frac{3^{n−1} \\times 27^{n+1} }{81^n}`,
      options: [
        { id: 0, text: "3^{2n}", isCorrect: false },
        { id: 1, text: "9", isCorrect: true },
        { id: 2, text: "3^n", isCorrect: false },
        { id: 3, text: "1", isCorrect: false },
      ],
      answer: "9",
      working: `\\frac{3^{n−1} \\times 27^{n+1} }{81^n}  \\\\ = \\frac{3^{n−1} \\times 3^{3n+3} }{3^{4n}}  \\\\ = \\frac{3^{n−1 + 3n +3} }{3^{4n}} \\\\ = \\frac{3^{4n +2} }{3^{4n}} \\\\ = 3^{4n + 2 -4n} \\\\ = 3^2 \\\\ =9`
    },
    {
      id: "Q10",
      text: `\\text{Simplify } \\frac{25^{\\frac{2}{3}} \\div 25^{\\frac{1}{6}}}{(\\frac{1}{5})^\\frac{7}{6} \\div  (\\frac{1}{5})^\\frac{1}{6} } \\\\ \\text{(UTME)}`,
      options: [
        { id: 0, text: "25", isCorrect: true },
        { id: 1, text: "1", isCorrect: false },
        { id: 2, text: "\\frac{1}{5}", isCorrect: false },
        { id: 3, text: "\\frac{1}{25}", isCorrect: false },
      ],
      answer: "25",
      working:`\\frac{25^{\\frac{2}{3}} \\div 25^{\\frac{1}{6}}}{(\\frac{1}{5})^\\frac{7}{6} \\div  (\\frac{1}{5})^\\frac{1}{6} }\\\\= \\frac{25^{\\frac{2}{3} - \\frac{1}{6}}}{(\\frac{1}{5})^{\\frac{7}{6} - \\frac{1}{6}}} \\\\ = \\frac{25^{\\frac{1}{2}}}{\\frac{1}{5}} \\\\  = 5 \\times \\frac{5}{1} =25`
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