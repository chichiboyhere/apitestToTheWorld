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
      text: `\\text{Convert } 26.32_8 \\text{ to base 10 correct to } \\\\ \\text{2 decimal places.}`,
      options: [
        { id: 0, text: "21.11_{10}", isCorrect: false },
        { id: 1, text: "22.41_{10}", isCorrect: true },
        { id: 2, text: "20.21_{10}", isCorrect: false },
        { id: 3, text: "23.51_{10}", isCorrect: false },
      ],
      answer: "22.41_{10}",
      working: `2 \\times 8^1 + 6 \\times 8^0 + 3 \\times 8^{-1} + 2 \\times 8^{-2} \\\\ 2 \\times 8 + 6 \\times 1 + 3 \\times \\frac{1}{8} + 2 \\times \\frac{1}{8^2} \\\\ 16 + 6 + \\frac{3}{8} + \\frac{2}{64} \\\\ 22 + 0.375 + 0.03125= 22.41_{10}`
    },
    {
      id: "Q2",
      text: `\\text{Convert } 81.436_{10} \\text{ to base six}`,
      options: [
        { id: 0, text: "203.134_6", isCorrect: false },
        { id: 1, text: "113.034_6", isCorrect: false },
        { id: 2, text: "213.234_6", isCorrect: true },
        { id: 3, text: "134.205_6", isCorrect: false },
      ],
      answer: "213.234_6",
      working: `\\text{First separate }  81.436_{10} \\text{ into two parts:} \\\\ \\text{Integral part: 81 and fractional part:} \\\\ 0.436 \\\\ \\text{81 is converted to base 6 by repeated} \\\\ \\text{division approach, setting aside } \\\\ \\text{the remainder at every step} \\\\ \\text{The remainders are then written out by } \\\\ \\text{copying them out from the bottom up} \\\\ \\text{This gives us the number: } 213\\\\ \\text{Next 0.436, the fractional part is } \\\\ \\text{multiplied repeatedly by 6, setting aside} \\\\ \\text{the integer at every step} \\\\ \\text{These integers are then copied out} \\\\ \\text{from top to bottom, i.e the exact opposite } \\\\ \\text{procedure to what we did with 81.} \\\\ \\text{This time the result yields: } 234. \\\\ \\text{Finally, the results from both procedures} \\\\ \\text{ are pieced together to yield: } 213.234_6.`
    },
    {
      id: "Q3",
      text: `\\text{If } 53.13_6 + x_6 = 81 \\text{, find x.}`,
      options: [
        { id: 0, text: "115.43", isCorrect: true },
        { id: 1, text: "221.42", isCorrect: false },
        { id: 2, text: "101.50", isCorrect: false },
        { id: 3, text: "124.32", isCorrect: false },
      ],
      answer: "115.43",
      working: `53.13_6 + x_6 = 81 \\\\ x_6 = 81 - 53.13_6 \\text{(Collect like terms)} \\\\ \\text{We then convert } 81 \\text{ to base 6} \\\\ \\text{by using the repeated division approach} \\\\ \\text{Hence: } x_6 = 213_6 - 53.13_6 = 115.43_6`
    },
    {
      id: "Q4",
      text: `\\text{If } 134.03_5 - x_{10} = 23.41_5, \\\\ \\text{find the value of x.}`,
      options: [
        { id: 0, text: "110.12", isCorrect: false },
        { id: 1, text: "101.32", isCorrect: false },
        { id: 2, text: "30.28", isCorrect: true },
        { id: 3, text: "24.57", isCorrect: false },
      ],
      answer: "30.28",
      working: `134.03_5 - x_{10} = 23.41_5 \\\\ x_{10} = 134.03_5 - 23.41_5= 110.12_5 \\\\ \\therefore x_{10} = 1 \\times 5^2 + 1 \\times 5^1 + 1 \\times 5^{-1} 2 \\times 5^{-2} \\\\ = 25 + 5 + 0.2 + 0.08 \\\\ = 30.28_{10}`
    },
    {
      id: "Q5",
      text: `12.03_5 + 34.44_5 = ? `,
      options: [
        { id: 0, text: "122.13_5", isCorrect: false },
        { id: 1, text: "132.21_5", isCorrect: false },
        { id: 2, text: "110.12_5", isCorrect: false },
        { id: 3, text: "102.02_5", isCorrect: true },
      ],
      answer: "102.02_5",
      working:`\\text{Simply place } 12.03_5 \\text{ over } 34.44_5 \\\\ \\text{Then add the digits accordingly, making} \\\\ \\text{sure the numbers wrap around base 5}`
    },
    {
      id: "Q6",
      text: `\\text{If } 402.21_x - 323.34_x = 45.54_x\\text{, find x.}`,
      options: [
        { id: 0, text: "8", isCorrect: false },
        { id: 1, text: "7", isCorrect: true },
        { id: 2, text: "6", isCorrect: false },
        { id: 3, text: "5", isCorrect: false },
      ],
      answer: "7",
      working:`\\text{First arrange the numbers vertically } \\\\ \\text{with } 402.21_x \\text{ placed over } 323.34_x. \\\\ \\text{Next try and make sense of the subtraction:} \\\\ \\text{ Starting with the digits on the far right:} \\\\ 1 - 4 = 4 \\text{ ?} \\\\ \\text{Obviously the only way that'd be possible} \\\\ \\text{is if a number was added to 1 to} \\\\ \\text{make it big enough such that when 4 is} \\\\ \\text{subtracted from the outcome we get 4.} \\\\ \\text{That number has to be 7 i.e (1 + 7) - 4 = 4.} \\\\ \\text{ And when we try doing the subsequent} \\\\ \\text{ subtractions of other digits,} \\\\ \\text{ we confirm that x is indeed 7}`
    },
    {
      id: "Q7",
      text: `\\text{If } 102.21_p + 122.32_p = 231.13_p\\text{, find p.}`,
      options: [
        { id: 0, text: "1", isCorrect: false },
        { id: 1, text: "2", isCorrect: false },
        { id: 2, text: "3", isCorrect: false },
        { id: 3, text: "4", isCorrect: true },
      ],
      answer: "4",
      working:`\\text{As with the previous problem Q6}  \\\\ \\text{after arranging the numbers vertically,} \\\\ \\text{we try and make sense of the addition,}\\\\ \\text{starting with the digits on the far}  \\\\ \\text{right: 1 + 2 = 3. That is straight} \\\\ \\text{forward and we cannot deduce the base} \\\\ \\text{ we're operating in from that.} \\\\ \\text{So we move to the next column} \\\\ \\text{ 2 + 3 = 1 ?} \\\\ \\text{ Now what could have happened here } \\\\ \\text{is that the natural result of} \\\\ \\text{ 2 + 3, 5 was wrapped around 4} \\\\ \\text{such that } 5 \\div 4 = \\text{ 1 remainder 1.} \\\\ \\text{(And as always 1, the remainder} \\\\ \\text{is written while 1, the quotient} \\\\ \\text{is carried over to the next column.)} \\\\ \\text{ And in that next column, to} \\\\ \\text{further verify that we're operating} \\\\ \\text{in base 4, we add 2 + 2 plus the '1'} \\\\ \\text{carried over to get 5,} \\\\ \\text{and since the outcome says '1',} \\\\ \\text{we confirm that p, the operating base is 4}`
    },
    {
      id: "Q8",
      text: `\\text{If } 2p0.02_6 = 90.056 \\text{, find p.}`,
      options: [
        { id: 0, text: "0", isCorrect: false },
        { id: 1, text: "1", isCorrect: false },
        { id: 2, text: "2", isCorrect: false },
        { id: 3, text: "3", isCorrect: true },
      ],
      answer: "3",
      working:`2p0.02_6 = 90.056 \\\\ \\text{Bearing in mind that the number} \\\\ \\text{on the left: } 2p0.02_6 \\text{ is in base 6,} \\\\ \\text{while the one on the right: 90.056} \\\\ \\text{is in base 10, as no base was} \\\\ \\text{specified, hence we resort to the} \\\\ \\text{default base, 10.} \\\\ \\text{ So to make both bases agree,} \\\\ \\text{we convert }2p0.02_6 \\text{ to base 10, thus:}\\\\ 2 \\times 6^2 + p \\times 6^1 + 2 \\times 6^{-2} \\\\ \\text{(ignoring the zeros.)}\\\\ 72 + 6p + 0.056 = 90.056. \\\\ \\text{Hence }72.056 + 6p = 90.056 \\\\ \\therefore 6p = 90.056 - 72.056 = 18 \\\\ \\therefore p = 3`
    },
    {
      id: "Q9",
      text: `\\text{If }\\frac{x}{10.1_2} = 1.01_2 \\text{, find x.} `,
      options: [
        { id: 0, text: "11.0", isCorrect: true },
        { id: 1, text: "11.1", isCorrect: false },
        { id: 2, text: "10.0", isCorrect: false },
        { id: 3, text: "10.1", isCorrect: false },
      ],
      answer: "11.0",
      working:`\\frac{x}{10.1_2} = 1.01_2 \\\\ \\text{On cross-multiplying: } x = 10.1_2 \\times 1.01_2 \\\\ = 11(approx.)`
    },
    {
      id: "Q10",
      text: `\\text{If } \\sqrt{1100.01_2} = x_{10} \\text{, find x.}`,
      options: [
        { id: 0, text: "1.05", isCorrect: false },
        { id: 1, text: "2.1", isCorrect: false },
        { id: 2, text: "3.5", isCorrect: true },
        { id: 3, text: "2.0", isCorrect: false },
      ],
      answer: "3.5",
      working:`\\text{First }1100.01_2 \\text{ is converted to base 10} \\\\  1 \\times 2^3 + 1 \\times 2^2 + 1 \\times 2^{-2} \\\\ 8 + 4 + 0.25 = 12.25 \\\\ \\text{Next we take square root of }12.25 \\\\ \\text{to get: } 3.5`
    },
  ];

const NumberBasesFractions = () => {
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
  
    /* Resets the game back to default */
    // const restartGame = () => {
    //   setScore(0);
    //   setCurrentQuestion(0);
    //   setShowResults(false);
    //   setShowTime(true);
    //   setIsActive(false);
    //   setTime(0);
    //   setStartTest(false);
    // };
  
    const getCorrection = () => {
      setIsCorrection(true);
    };
    return (
      <Card className={classes.containerWrapper}>
        {showTime && (
          <>
            <div className={classes.stopwatch}>
              <Timer time={time} />
              <Text text={"Number Bases IV (Fractions)"} />
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
  
            {/* 3. Show results or show the question game  */}
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

export default NumberBasesFractions