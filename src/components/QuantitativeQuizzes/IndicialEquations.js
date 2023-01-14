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
      text: `\\text{Solve for x if } 25^x + 3\\bigl( 5^x \\bigr)=4  \\\\  \\text{ (UME)}`,
      options: [
        { id: 0, text: "\\text{ 1 or -4}", isCorrect: false },
        { id: 1, text: "0", isCorrect: true },
        { id: 2, text: "1", isCorrect: false },
        { id: 3, text: "\\text{ -4 or 0}", isCorrect: false },
      ],
      answer: "0",
      working: `25^x + 3\\bigl( 5^x \\bigr)=4  \\\\ 5^{2x} + 3\\bigl( 5^x \\bigr)=4  \\\\ \\bigl( 5^x \\bigr)^2  + 3\\bigl( 5^x \\bigr)=4 \\\\ \\text{Let } y =5^x \\\\ \\therefore y^2 + 3y -4 = 0 \\\\ y^2 + 4y -y -4 = 0 \\\\ \\therefore y\\bigl( y + 4 \\bigr) -1\\bigl( y + 4 \\bigr) = 0 \\\\ \\therefore \\bigl( y + 4 \\bigr)\\bigl( y - 1 \\bigr) =0 \\\\  \\therefore y = -4 \\text{ or }1  \\\\ \\therefore \\text{ putting back }5^x \\text{ in place of y }\\\\ 5^x = - 4 \\bigl( \\text{No further solution } \\bigr)\\\\ \\text{ or } 5^x = 1 \\\\ \\therefore 5^x = 5^0 \\\\ \\therefore x = 0 `
    },
    {
      id: "Q2",
      text: `\\text{If } 8^\\frac{x}{2} = \\bigl(2^\\frac{3}{8}\\bigr)\\bigl(4^\\frac{3}{4}\\bigr) \\text{ find x.} \\text{ (UME)}`,
      options: [
        { id: 0, text: "\\frac{3}{8}", isCorrect: false },
        { id: 1, text: "\\frac{3}{4}", isCorrect: false },
        { id: 2, text: "\\frac{4}{5}", isCorrect: false },
        { id: 3, text: "\\frac{5}{4}", isCorrect: true },
      ],
      answer: "\\frac{5}{4}",
      working: `8^\\frac{x}{2} = \\bigl(2^\\frac{3}{8}\\bigr)\\bigl(4^\\frac{3}{4}\\bigr)\\\\ \\bigl(2^3\\bigr)^{\\frac{x}{2}} = 2^\\frac{3}{8} \\times \\bigl(2^2\\bigr)^{\\frac{3}{4}} \\\\ 2^\\frac{3x}{2} = 2^\\frac{3}{8} \\times 2^{\\frac{3}{2}} = 2^{\\frac{3}{8} + \\frac{3}{2}} \\\\ \\therefore 2^\\frac{3x}{2} = 2^\\frac{15}{8} \\\\ \\text{Hence: } \\frac{3x}{2} = \\frac{15}{8} \\\\ \\therefore \\text{on cross-multiplying and simplifying } \\\\ x = \\frac{5}{4} `
    },
    {
      id: "Q3",
      text: `\\text{If } \\frac{\\bigl(a^2b^{-3}c\\bigr)^\\frac{3}{4}}{a^{-1}b^4c^5} = a^pb^qc^r\\\\ \\text{what is the value of p + 2q ?} \\text{ (UME)}`,
      options: [
        { id: 0, text: "5/2", isCorrect: false },
        { id: 1, text: "-(5/4)", isCorrect: false },
        { id: 2, text: "-(25/4)", isCorrect: false },
        { id: 3, text: "-10", isCorrect: true },
      ],
      answer: "-10",
      working: `\\text{Simplifying the left hand side(LHS) first: } \\\\ \\frac{a^\\frac{3}{2}b^\\frac{-9}{4}c^\\frac{3}{4}}{a^{-1}b^4c^5}
      \\text{(i.e we multiply the indices}\\\\ \\text{of a, b and c by the outer index}\\frac{3}{4} \\bigr)\\\\ a^{\\frac{3}{2} + 1} b^{\\frac{-9}{4} - 4} c^{\\frac{3}{4} - 5} = a^\\frac{5}{2}b^\\frac{-25}{4}c^\\frac{-17}{4} \\\\ \\text{Now comparing both sides of the equation:} \\\\  p = \\frac{5}{2} \\text{, } q = \\frac{-25}{4} \\text{ and }  r = \\frac{-17}{4} \\\\ \\therefore p + 2q = \\frac{5}{2} + 2\\bigl(\\frac{-25}{4}\\bigr) \\\\= \\frac{5}{2} - \\frac{25}{2} = \\frac{-20}{2} =-10`
    },
    {
      id: "Q4",
      text: `\\text{If } \\frac{9^{2x−1}}{27^{x+1}}=1, \\\\ \\text{find the value of x.} \\text{ (UME)} `,
      options: [
        { id: 0, text: "8", isCorrect: false },
        { id: 1, text: "5", isCorrect: true },
        { id: 2, text: "3", isCorrect: false },
        { id: 3, text: "2", isCorrect: false },
      ],
      answer: "5",
      working: `\\frac{9^{2x−1}}{27^{x+1}}=1 \\\\ \\frac{3^{2\\bigl( 2x−1 \\bigr)}}{3^{3\\bigl( x + 1 \\bigr)}}=1 \\\\ \\text{On cross-multiplying:} \\\\ 3^{2\\bigl( 2x−1 \\bigr)} = 3^{3\\bigl( x + 1 \\bigr)} \\\\ \\therefore 2\\bigl( 2x−1 \\bigr) = 3\\bigl( x + 1 \\bigr) \\\\  4x - 2 = 3x + 3 \\\\ \\therefore x = 5`
    },
    {
      id: "Q5",
      text: `\\text{Given that }  \\sqrt[3]{4^{2x}} = 16 \\text{, find the value of x.} \\\\ \\text{ (UME)} `,
      options: [
        { id: 0, text: "4", isCorrect: false },
        { id: 1, text: "6", isCorrect: false },
        { id: 2, text: "3", isCorrect: true },
        { id: 3, text: "2", isCorrect: false },
      ],
      answer: "3",
      working:`\\sqrt[3]{4^{2x}} = 16 \\\\  \\bigl( \\sqrt[3]{4^{2x} }\\bigr)^3= 16^3 \\text{(take the cube of} \\\\ \\text{both sides to get ride of the cube-root)} \\\\ \\therefore 4^{2x} = 4^6  \\\\ \\therefore 2x = 6  \\\\  x = 3 `
    },
    {
      id: "Q6",
      text: `\\text{Find the value of x for which} \\\\  2(3^{2x-1}) = 162 \\text{ (UME) }`,
      options: [
        { id: 0, text: "5/2", isCorrect: true },
        { id: 1, text: "3/2", isCorrect: false },
        { id: 2, text: "2/5", isCorrect: false },
        { id: 3, text: "1/2", isCorrect: false },
      ],
      answer: "5/2",
      working:`2(3^{2x-1}) = 162 \\\\ \\text{Dividing both sides by 2:}\\\\ 3^{2x-1} = 81  \\\\ \\therefore 3^{2x-1} = 3^4  \\\\ \\therefore 2x-1 = 4 \\\\ \\therefore x = 5/2`
    },
    {
      id: "Q7",
      text: `\\text{Solve } 5^{2(x−1)} \\times 5^{x+1}=0.04 \\text{ (UME)}`,
      options: [
        { id: 0, text: "1/3", isCorrect: false },
        { id: 1, text: "1/4", isCorrect: false },
        { id: 2, text: "-1/5", isCorrect: false },
        { id: 3, text: "-1/3", isCorrect: true },
      ],
      answer: "-1/3",
      working: `5^{2(x−1)} \\times 5^{x+1}=0.04 \\\\ 5^{2(x−1)} \\times 5^{x+1}=\\frac{4}{100} = \\frac{1}{25}= 5^{-2}  \\\\ \\therefore 5^{2x -2 + x + 1} = 5^{-2} \\\\ 5^{3x - 1} = 5^{-2} \\\\ \\therefore 3x - 1 = -2 \\\\ \\therefore x = -1/3`
    },
    {
      id: "Q8",
      text: `\\text{If } 27^{x+2} \\div 9^{x+1} = 3^{2x}, \\text{find x. (UTME)}`,
      options: [
        { id: 0, text: "3", isCorrect: false },
        { id: 1, text: "4", isCorrect: true },
        { id: 2, text: "5", isCorrect: false },
        { id: 3, text: "6", isCorrect: false },
      ],
      answer: "4",
      working:`27^{x+2} \\div 9^{x+1} = 3^{2x} \\\\ 3^{3(x+2)} \\div 3^{2(x+1)} = 3^{2x} \\\\ 3^{3x + 6 -(2x + 2)} = 3^{2x} \\\\ 3^{x + 4} = 3^{2x} \\\\ \\therefore x + 4 = 2x \\\\ \\therefore x = 4 `
    },
    {
      id: "Q9",
      text: `\\text{Solve for x in } 8x^{-2} = 2/25  \\text{ (UTME)}`,
      options: [
        { id: 0, text: "4", isCorrect: false },
        { id: 1, text: "6", isCorrect: false },
        { id: 2, text: "8", isCorrect: false },
        { id: 3, text: "10", isCorrect: true },
      ],
      answer: "10",
      working: `8x^{-2} = 2/25 \\\\ x^{-2} = \\frac{2}{25} \\times \\frac{1}{8}\\\\ \\therefore x^{-2} = \\frac{1}{100} = 10^{-2}\\\\ \\therefore x = 10`
    },
    {
      id: "Q10",
      text: `\\text{If } \\frac{27^x \\times 3^{1−x}}{9^{2x}}=1, \\\\ \\text{find the value of x. (WASSCE)}`,
      options: [
        { id: 0, text: "1", isCorrect: false },
        { id: 1, text: "\\frac{1}{2}", isCorrect: true },
        { id: 2, text: "-\\frac{1}{2}", isCorrect: false },
        { id: 3, text: "-1", isCorrect: false },
      ],
      answer: "\\frac{1}{2}",
      working:`\\frac{27^x \\times 3^{1−x}}{9^{2x}}=1 \\\\ \\frac{3^{3x} \\times 3^{1−x}}{3^{4x}}=1 \\\\ \\frac{3^{3x + 1 -x }}{3^{4x}}=1
      \\\\ \\frac{3^{2x + 1  }}{3^{4x}}=1 \\\\ \\therefore 3^{2x + 1 -4x } = 1 \\\\ 3^{1 -2x } = 3^0  \\\\ \\therefore 1 -2x =0 \\\\ \\therefore x=\\frac{1}{2}`
    },
  ];
  

const IndicialEquations = () => {
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
              <Text text={"Indicial Equations"} />
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


export default IndicialEquations