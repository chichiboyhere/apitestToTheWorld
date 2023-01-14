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
      answer: "\\pm\\frac{9}{x}",
      working: `2log_3y + log_3x^2 = 4 \\\\log_3y^2 + log_3x^2 = 4\\\\log_3(y^2 \\times x^2 )= 4 \\\\log_3(xy)^2= 4  \\\\ (xy)^2= 3^4 \\\\(xy)^2= 81 \\\\y^2 =\\frac{81}{x^2}\\\\ \\therefore y = \\sqrt{\\frac{81}{x^2}} \\\\ \\therefore y = \\pm\\frac{9}{x}`
    },
    {
      id: "Q2",
      text: `\\text{Solve without using tables }  \\\\ log_5(62.5) - log_5\\frac{1}{2} \\text{ (UME)}`,
      options: [
        { id: 0, text: "3", isCorrect: true },
        { id: 1, text: "4", isCorrect: false },
        { id: 2, text: "5", isCorrect: false },
        { id: 3, text: "8", isCorrect: false },
      ],
      answer: "3",
      working: `log_5(62.5) - log_5\\frac{1}{2} \\\\ =log_5(62.5 \\div \\frac{1}{2})\\\\ =log_5(62.5 \\times \\frac{2}{1}) \\\\ =log_5125\\\\= log_55^3 \\\\ =3log_55 \\\\= 3\\times1 \\\\= 3`
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
      answer: "-1",
      working: `\\frac{log_5(0.04)}{log_318−log_32} \\\\ = \\frac{log_5(\\frac{1}{25})}{log_3(18 \\div 2)}  \\\\ = \\frac{log_55^{-2}}{log_39} \\\\ = \\frac{-2log_55}{log_33^2} \\\\ = \\frac{-2log_55}{2log_33} \\\\ = \\frac{-2\\times 1}{2\\times 1} \\\\ = -1`
    },
    {
      id: "Q4",
      text: `\\text{Given that } log_a2 = 0.693 \\text{ and } log_a3 \\\\= 1.097, \\text{ find } log_a 13.5 \\text{  (UME)}`,
      options: [
        { id: 0, text: "1.404", isCorrect: false },
        { id: 1, text: "1.790", isCorrect: false },
        { id: 2, text: "2.598", isCorrect: true },
        { id: 3, text: "2.790", isCorrect: false },
      ],
      answer: "2.598",
      working: `log_a 13.5  \\\\= log_a (\\frac{27}{2})\\\\= log_a (\\frac{3^3}{2}) \\\\= log_a 3^3 - log_a2 \\\\=3log_a3 - log_a 2 \\\\=3(1.097) - 0.693 \\\\=2.598`
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
      answer: "-2, -3",
      working:`log_4(y - 1) + log_4(\\frac{1}{2}x) = 1 \\\\log_4((y - 1) \\times \\frac{1}{2}x) = 1 \\\\log_4(\\frac{y-1}{2}x) = 1 \\\\ \\therefore \\frac{y-1}{2}x = 4^1\\\\ \\therefore x(y - 1)  = 8  \\\\ \\therefore  x = \\frac{8}{y-1} \\text{...(1)} \\\\ \\text{Also } log_2(y + 1) + log_2x = 2 \\\\ log_2x(y + 1)  = 2  \\\\ \\therefore x(y + 1) =4 \\\\ \\therefore x =\\frac{4}{y+1} \\text{...(2)} \\\\ \\text{Equating (1) and (2): } \\frac{8}{y-1} = \\frac{4}{y+1} \\\\ \\therefore 8y + 8 = 4y -4 \\text{ (cross-multiplying)}\\\\ \\therefore 4y= -12 \\\ \\therefore y = -3 \\\\ \\text{Hence, putting y = -3 into eqn (1): } \\\\ x = \\frac{8}{-3-1} = -2  \\\\ \\text{So } x =-2 \\text{, } y = -3`
    },
    {
      id: "Q6",
      text: `\\text{If log10 to base 8 = x, evaluate }\\\\ \\text{log5 to base 8 in terms of x.} \\\\ \\text{ (UME) }`,
      options: [
        { id: 0, text: "\\frac{1}{2}x", isCorrect: false },
        { id: 1, text: "x - \\frac{1}{4}", isCorrect: false },
        { id: 2, text: "x - \\frac{1}{3}", isCorrect: true },
        { id: 3, text: "x - \\frac{1}{2}", isCorrect: false },
      ],
      answer: "x - \\frac{1}{3}",
      working:`log_85 \\\\ log_8(\\frac{10}{2}) \\\\ log_810 -log_82 \\\\ \\text{According to the hint given: } \\\\ log_810 = x \\text{ while } log_82 = \\frac{1}{3} \\\\ \\text{Hence, putting the two together, we get}\\\\ x - \\frac{1}{3}`
    },
    {
      id: "Q7",
      text: `\\text{Evaluate }log_{\\sqrt{2}}4 + log_{\\frac{1}{2}}16 − log_432 \\\\ \\text{ (UME)}`,
      options: [
        { id: 0, text: "-5.5", isCorrect: false },
        { id: 1, text: "-2.5", isCorrect: true },
        { id: 2, text: "2.5", isCorrect: false },
        { id: 3, text: "5.5", isCorrect: false },
      ],
      answer: "-2.5",
      working: `log_{\\sqrt{2}}4 + log_{\\frac{1}{2}}16 − log_432 \\\\ \\frac{log4}{log \\sqrt{2}} + \\frac{log16}{log \\frac{1}{2}}  − \\frac{log32}{log4} \\\\ \\therefore \\frac{log2^2}{log2^\\frac{1}{2}} + \\frac{log2^4}{log2^{-1}} - \\frac{log2^5}{log2^2} \\\\ \\therefore \\frac{2log2}{\\frac{1}{2}log2} + \\frac{4log2}{-log2} - \\frac{5log2}{2log2} \\\\ \\therefore \\text{Cancelling out the log2's :} \\\\ \\frac{2}{\\frac{1}{2}} + \\frac{4}{-1} - \\frac{5}{2} \\\\ 4 -4 -\\frac{5}{2} = -2.5`
    },
    {
      id: "Q8",
      text: `\\text{If }6log_x2 - 3log_x3 = 3log_50.2 \\text{, find x.} \\text{ (UME)} `,
      options: [
        { id: 0, text: "\\frac{8}{3}", isCorrect: false },
        { id: 1, text: "\\frac{4}{3}", isCorrect: false },
        { id: 2, text: "\\frac{3}{4}", isCorrect: true },
        { id: 3, text: "\\frac{3}{8}", isCorrect: false },
      ],
      answer: "\\frac{3}{4}",
      working:`6log_x2 - 3log_x3 = 3log_50.2 \\\\log_x2^6 - log_x3^3 = 3log_5(\\frac{1}{5})\\\\log_x64 - log_x27 = 3log_5(\\frac{1}{5}) \\\\log_x\\frac{64}{27} = 3log_55^{-1} \\\\log_x(\\frac{4}{3})^3 = -3log_55 \\\\ \\therefore log_x(\\frac{4}{3})^3 = -3 \\\\ \\therefore x^{-3} = (\\frac{4}{3})^3\\\\ \\therefore x^{-3} = (\\frac{3}{4})^{-3} \\\\ \\therefore x = \\frac{3}{4} `
    },
    {
      id: "Q9",
      text: `\\text{If }log_{10}2 = 0.3010 \\text{ and } log_{10}3 = 0.4771, \\\\  \\text{evaluate }log_{10}4.5  \\text{ (UME)}`,
      options: [
        { id: 0, text: "0.9542", isCorrect: false },
        { id: 1, text: "0.6532", isCorrect: true },
        { id: 2, text: "0.4771", isCorrect: false },
        { id: 3, text: "0.3010", isCorrect: false },
      ],
      answer: "0.6532",
      working: `log_{10}4.5\\\\ = log_{10}\\frac{9}{2} \\\\ = log_{10}9 - log_{10}2   \\\\ = log_{10}3^2 - log_{10}2 \\\\ = 2log_{10}3 - log_{10}2 \\\\ =2(0.4771) - 0.3010 \\\\ \\text{ (Slotting in the hint values)} \\\\ =0.6532`
    },
    {
      id: "Q10",
      text: `\\text{If } log_{10}2 = x, \\text{ express} \\\\ log_{10}12.5 \\text{ in terms of x }  \\text{ (UME)}`,
      options: [
        { id: 0, text: "2(1 + x)", isCorrect: false },
        { id: 1, text: "2 + 3x", isCorrect: false },
        { id: 2, text: "2(1 - x)", isCorrect: false },
        { id: 3, text: "2 - 3x", isCorrect: true },
      ],
      answer: "2 - 3x",
      working:`log_{10}12.5\\\\= log_{10}\\frac{25}{2}  \\\\ = log_{10}25 - log_{10}2\\\\ = log_{10}\\frac{100}{4} - log_{10}2\\\\  = log_{10}100 -log_{10}4 - log_{10}2 \\\\= log_{10}10^2 - log_{10}2^2 - log_{10}2 \\\\= 2log_{10}10 - 2log_{10}2 - log_{10}2 \\\\ = 2(1) - 3log_{10}2 \\\\ =2 -3x`
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