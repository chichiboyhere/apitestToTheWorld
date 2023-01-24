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
      text: `\\text{If m:n = 13:11, find} \\\\ m^2 - n^2 : (m + n)^2  \\text{  (UME)}`,
      options: [
        { id: 0, text: "1:11", isCorrect: false },
        { id: 1, text: "1:13", isCorrect: false },
        { id: 2, text: "1:10", isCorrect: false },
        { id: 3, text: "1:12", isCorrect: true },
      ],
      answer: "1:12",
      working: `m^2 - n^2 : (m + n)^2 \\\\= \\frac{(m + n)(m - n)}{(m + n)(m + n)} \\\\= \\frac{(m - n)}{(m + n)} \\\\= \\frac{13 - 11}{ 13 + 11} \\\\= 2 : 24 \\\\= 1:12 `
    },
    {
      id: "Q2",
      text: `\\text{ N140,000 is shared between Abu,} \\\\ \\text{ Kayode and Uche. Abu has twice as } \\\\ \\text{much as Kayode, and Kayode has twice as } \\\\ \\text{much as Uche. What is Kayode's share?} \\\\ \\text{(WASSCE) }`,
      options: [
        { id: 0, text: "N80,000", isCorrect: false },
        { id: 1, text: "N40,000", isCorrect: true },
        { id: 2, text: "N20,000", isCorrect: false },
        { id: 3, text: "N10,000", isCorrect: false },
      ],
      answer: "N40,000",
      working: `\\text{Let Uche's share = x} \\\\ \\therefore \\text{Kayode's share = 2x} \\\\ \\text{ And so Abu's share = 4x } \\\\ \\therefore \\text{The sum of their shares } = x + 2x + 4x = 140,000 \\\\ 7x = 140,000 \\\\ \\therefore x = 20,000 \\\\ \\therefore \\text{Kayode's share = 2x } = 2(20,000) = N40,000`
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
      answer: "12 : 20 : 35",
      working: `\\text{Since y is the connection between the letters} \\\\ \\text{we express all the letters in terms of y:} \\\\ x:y = 3:5 \\\\ \\frac{x}{y} = \\frac{3}{5} \\\\ \\therefore 5x = 3y \\rightarrow x = \\frac{3}{5}y \\\\ \\text{Similarly, } y:z = 4:7 \\\\ \\frac{y}{z} = \\frac{4}{7}  \\\\ \\therefore 7y = 4z  \\rightarrow z = \\frac{7}{4}y \\\\ \\therefore x:y:z = \\frac{3}{5}y : y : \\frac{7}{4}y \\\\ \\text{Cancelling out the y's: } \\\\ \\frac{3}{5}: 1 : \\frac{7}{4} \\\\ \\text{Multiplying through by the LCM of} \\\\ \\text{ the denominators, 20: } \\\\  12: 20: 35`
    },
    {
      id: "Q4",
      text: `\\text{The sum of the ages of Musa and Lawal}\\\\ \\text{is 28 years. After sharing a certain sum }  \\\\ \\text{of money in the ratio of their ages,}  \\\\ \\text{ Musa gets N600 and Lawal N800. }  \\\\ \\text{How old is Lawal? (UME)}`,
      options: [
        { id: 0, text: "14\\text{ years}", isCorrect: false },
        { id: 1, text: "20\\text{ years}", isCorrect: false },
        { id: 2, text: "12\\text{ years}", isCorrect: false },
        { id: 3, text: "16\\text{ years}", isCorrect: true },
      ],
      answer: "16\\text{ years}",
      working: `\\text{Let Lawal's age = x yrs} \\\\ \\therefore \\text{Musa's age = (28 - x) yrs} \\\\ \\text{Since they shared money in the ratio} \\\\ \\text{ of their ages:} \\\\ \\therefore \\frac{28 - x}{x} = \\frac{600}{800} = \\frac{3}{4} \\\\ \\therefore 4(28 - x) = 3x \\\\ 112 -4x = 3x \\\\ \\therefore 7x = 112 \\\\ \\therefore x = \\frac{112}{7} = 16 \\\\ \\therefore \\text{Lawal's age } = 16\\text{ years} `
    },
    {
      id: "Q5",
      text: `\\text{A farmer planted 5000 grains of maize} \\\\ \\text{ and harvested 5000 cobs, each bearing 500} \\\\ \\text{ grains. What is the ratio of the number} \\\\ \\text{of grains sowed to the number harvested? } \\\\  \\text{ (UME) } `,
      options: [
        { id: 0, text: "1 : 250 000", isCorrect: false },
        { id: 1, text: "1 : 25 000", isCorrect: false },
        { id: 2, text: "1 : 500", isCorrect: true },
        { id: 3, text: "1 : 5 000", isCorrect: false },
      ],
      answer: "1 : 500",
      working:`\\text{Number of grains harvested} \\\\= 5000 \\times 500 = 2,500,000 \\\\ \\text{Ratio of grains sowed to grains harvested:} \\\\ \\therefore 5000 : 2,500,000 \\\\= 1 : 500`
    },
    {
      id: "Q6",
      text: `\\text{If the numbers M, N, Q are in the ratio} \\\\ 5:4:3 \\text{, find the value of} \\frac{2N − Q}{M} \\text{ (UME) }`,
      options: [
        { id: 0, text: "2", isCorrect: false },
        { id: 1, text: "3", isCorrect: false },
        { id: 2, text: "1", isCorrect: true },
        { id: 3, text: "4", isCorrect: false },
      ],
      answer: "1",
      working:`\\frac{2N − Q}{M} = \\frac{2(4) − 3}{5} = 1 `
    },
    {
      id: "Q7",
      text: `\\text{3 girls share a number of apples in the} \\\\ \\text{ratio 5:3:2. If the highest share is 40} \\\\ \\text{apples, find the smallest share} \\\\ \\text{(UME)} `,
      options: [
        { id: 0, text: "36", isCorrect: false },
        { id: 1, text: "24", isCorrect: false },
        { id: 2, text: "16", isCorrect: true },
        { id: 3, text: "38", isCorrect: false },
      ],
      answer: "16",
      working: `5 \\rightarrow 40 \\\\ \\therefore 2 \\rightarrow \\frac{2}{5} \\times  40 = 16 `
    },
    {
      id: "Q8",
      text: `\\text{The present ages of a father and his} \\\\ \\text{son are in the ratio 10 : 3. If the son is} \\\\ \\text{15 years old now, in how many years} \\\\ \\text{ will the ratio of their ages be} \\\\ \\text{ 2 : 1? }  \\text{ (WASSCE) }  `,
      options: [
        { id: 0, text: "chckwassce", isCorrect: false },
        { id: 1, text: "chckwassce", isCorrect: false },
        { id: 2, text: "chckwassce", isCorrect: true },
        { id: 3, text: "chckwassce", isCorrect: false },
      ],
      answer: "chckwassce",
      working:`\\text{Since the son's age is 15 yrs} \\\\ \\therefore 3 \\rightarrow 15 \\text{ yrs} \\\\ 10 \\rightarrow \\frac{10}{3} \\times 15 = 50 \\text{ years} \\\\ \\text{So father's present age is 50 yrs} \\\\ \\therefore \\text{In x years' time:} \\\\ \\frac{\\text{Father's age}}{\\text{son's age}} = \\frac{50 + x}{15 + x} = \\frac{2}{1} \\\\ \\text{Cross-multiplying:} \\\\ 50 + x = 30 + 2x \\\\ \\therefore x = 20 \\text{ years}`
    },
    {
      id: "Q9",
      text: `\\text{If x : y = 3 : 2 and y : z = 5 : 4,} \\\\ \\text{find the value of x in the ratio x : y : z} \\\\ \\text{(WASSCE)}`,
      options: [
        { id: 0, text: "8", isCorrect: false },
        { id: 1, text: "10", isCorrect: false },
        { id: 2, text: "15", isCorrect: true },
        { id: 3, text: "20", isCorrect: false },
      ],
      answer: "15",
      working: `\\text{Following the steps in question 3} \\\\ x:y = 3:2 \\\\ \\frac{x}{y} = \\frac{3}{2} \\\\ \\therefore 2x = 3y \\rightarrow x = \\frac{3}{2}y \\\\ \\text{Similarly, } y:z = 5:4 \\\\ \\frac{y}{z} = \\frac{5}{4}  \\\\ \\therefore 4y = 5z  \\rightarrow z = \\frac{4}{5}y \\\\ \\therefore x:y:z = \\frac{3}{2}y : y : \\frac{4}{5}y \\\\ \\text{Cancelling out the y's: } \\\\ \\frac{3}{2}: 1 : \\frac{4}{5} \\\\ \\text{Multiplying through by the LCM of} \\\\ \\text{ the denominators, 10: } \\\\ x : y : z = 15: 10: 8 \\\\ \\therefore x = 15`
    },
    {
      id: "Q10",
      text: `\\text{A number of pencils were shared out among} \\\\ \\text{Bisi, Sola and Tunde in the ratio of} \\\\ \\text{2:3:5 respectively. If Bisi got 5,} \\\\ \\text{how many were shared out?  (UTME)}`,
      options: [
        { id: 0, text: "15", isCorrect: false },
        { id: 1, text: "25", isCorrect: true },
        { id: 2, text: "30", isCorrect: false },
        { id: 3, text: "50", isCorrect: false },
      ],
      answer: "25",
      working:`\\text{The sum of the ratios = } 2 + 3 + 5 = 10 \\\\  \\text{Bisi's share, } 2 \\rightarrow 5 \\\\ \\therefore \\text{Total share, } 10 \\rightarrow \\frac{10}{2} \\times 5 = 25`
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