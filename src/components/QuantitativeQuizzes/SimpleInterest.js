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
      text: `\\text{If N225.00 yields N27.00 in x years} \\\\ \\text{ simple interest at the rate of 4% per}\\\\ \\text{ annum, find x } \\text{ (UME)}`,
      options: [
        { id: 0, text: "3", isCorrect: true },
        { id: 1, text: "4", isCorrect: false },
        { id: 2, text: "12", isCorrect: false },
        { id: 3, text: "7", isCorrect: false },
      ],
      answer: "3",
      working: `\\text{Simple Interest, I} =\\frac{PRT}{100}\\\\ \\text{(where P = principal, R = rate, T = time)} \\\\  \\therefore 27 = \\frac{225 \\times 4 \\times x}{100} \\\\ 27 = \\frac{900x}{100} \\\\ 27 = 9x \\\\ \\therefore x =3`
    },
    {
      id: "Q2",
      text: `\\text{Find the principal which amounts} \\\\ \\text{to N5,500 at a simple interest in} \\\\ \\text{ 5 years at 2% per annum.} \\text{ (UME)}`,
      options: [
        { id: 0, text: "N4,900", isCorrect: false },
        { id: 1, text: "N5,000", isCorrect: true },
        { id: 2, text: "N4,700", isCorrect: false },
        { id: 3, text: "N4,800", isCorrect: false },
      ],
      answer: "N5,000",
      working: `\\text{Using, I} =\\frac{PRT}{100}\\\\ \\text{Amount, A = P + I} \\\\  \\therefore \\text{A - P} =\\frac{PRT}{100} \\\\ 5500 - P = \\frac{P \\times 2 \\times 5}{100} \\\\ 5500 - P = \\frac{P}{10} \\\\ \\text{On cross-multiplying:} \\\\ 55000 - 10P = P\\therefore 11P  = 55000 \\\\ \\therefore P = N5,000`
    },
    {
      id: "Q3",
      text: `\\text{If the interest on N150.00 for } 2\\frac{1}{2} \\\\ \\text{years is N4.50, find the interest on} \\\\ \\text{N250.00 for 6 months at the same rate } \\\\  \\text{  (UME)}`,
      options: [
        { id: 0, text: "N1.50", isCorrect: true },
        { id: 1, text: "N7.50", isCorrect: false },
        { id: 2, text: "N15.00", isCorrect: false },
        { id: 3, text: "N18.00", isCorrect: false },
      ],
      answer: "N1.50",
      working: `\\text{From, I} =\\frac{PRT}{100} \\\\ R =\\frac{100I}{PT} \\\\ R =\\frac{100 \\times 4.5}{150 \\times \\frac{5}{2} }
      \\\\ =\\frac{450}{375} = 1.2\\text{%} \\\\ \\text{So at the same rate } I = \\frac{250 \\times 1.2 \\times 1 }{100 \\times 2} \\\\ \\text{Note: 6 months is changed to } \\frac{1}{2} year \\\\ \\therefore I = \\frac{25 \\times 12 }{100 \\times 2} = N1.50`
    },
    {
      id: "Q4",
      text: `\\text{calculate the simple interest on N7,500}  \\\\ \\text{for 8 years at 5% per annum  (UME)} `,
      options: [
        { id: 0, text: "N3,000", isCorrect: true },
        { id: 1, text: "N600", isCorrect: false },
        { id: 2, text: "N300", isCorrect: false },
        { id: 3, text: "N150", isCorrect: false },
      ],
      answer: "N3,000",
      working: `\\text{Using, I} =\\frac{PRT}{100} \\\\ I = \\frac{7,500 \\times 5 \\times 8}{100} \\\\ = 75 \\times 40 = N3,000`
    },
    {
      id: "Q5",
      text: ` \\text{At what rate will the interest on N400}  \\\\ \\text{increases to N24 in 3 years reckoning} \\\\ \\text{ in simple interest? (UTME)}`,
      options: [
        { id: 0, text: "3\\text{%}", isCorrect: false },
        { id: 1, text: "2\\text{%}", isCorrect: true },
        { id: 2, text: "5\\text{%}", isCorrect: false },
        { id: 3, text: "4\\text{%}", isCorrect: false },
      ],
      answer: "2\\text{%}",
      working:`\\text{From, I} =\\frac{PRT}{100} \\\\ R =\\frac{100I}{PT} \\\\ R =\\frac{100 \\times 24}{400 \\times 3 } = 2\\text{%}
      `
    },
    {
      id: "Q6",
      text: `\\text{A man invested N5,000 for 9 months at 4%.} \\\\ \\text{What is the simple interest?}  \\text{ (UME)}`,
      options: [
        { id: 0, text: "N150", isCorrect: true },
        { id: 1, text: "N220", isCorrect: false },
        { id: 2, text: "N130", isCorrect: false },
        { id: 3, text: "N250", isCorrect: false },
      ],
      answer: "N150",
      working:`\\text{Using, I} =\\frac{PRT}{100} \\\\ I = \\frac{5000 \\times 9 \\times 4}{100 \\times 12} \\\\ \\text{Note: 9 months =} \\frac{9}{12} \\text{ year} \\\\ \\therefore I = N150`
    },
    {
      id: "Q7",
      text: `\\text{Calculate the time taken for N3000}\\\\ \\text{to earn N600 if invested at 8% } \\\\ \\text{simple interest.  (UME)}`,
      options: [
        { id: 0, text: "2\\frac{1}{2} \\text{ years}", isCorrect: true },
        { id: 1, text: "3 years", isCorrect: false },
        { id: 2, text: "3\\frac{1}{2} \\text{ years}", isCorrect: false },
        { id: 3, text: "1\\frac{1}{2} \\text{ years}", isCorrect: false },
      ],
      answer: "2\\frac{1}{2} \\text{ years}",
      working: `\\text{From, I} =\\frac{PRT}{100} \\\\ T =\\frac{100I}{PR} \\\\ T =\\frac{100 \\times 600}{3000 \\times 8} \\\\ \\therefore T = \\frac{5}{2} = 2\\frac{1}{2} \\text{ years}`
    },
    {
      id: "Q8",
      text: `\\text{Find at which rate per annum simple} \\\\ \\text{interest will N525 amount to N588 in 3 years.} \\\\ \\text{(UTME)} `,
      options: [
        { id: 0, text: "3\\text{%}", isCorrect: false },
        { id: 1, text: "2\\text{%}", isCorrect: false },
        { id: 2, text: "5\\text{%}", isCorrect: false },
        { id: 3, text: "4\\text{%}", isCorrect: true },
      ],
      answer: "4\\text{%}",
      working:`\\text{From, I} =\\frac{PRT}{100} \\\\ R =\\frac{100I}{PT} \\\\ R =\\frac{100 \\times (588 - 525)}{525 \\times 3 } \\\\ \\text{Note: The interest = A - P =  588 - 525} \\\\ \\therefore R =\\frac{100 \\times 63}{1575}  \\\\  R = 4\\text{%}`
    },
    {
      id: "Q9",
      text: `\\text{A sum of N100,000 was saved between banks}  \\\\  \\text{A and B such that the total interest got at } \\\\ \\text{the end of a year was N2,750.} \\\\ \\text{If bank A paid simple interest at the rate} \\\\ \\text{of 2% per annum and bank B paid simple} \\\\ \\text{ interest at 3% per annum, how much} \\\\ \\text{was deposited in bank B?}`,
      options: [
        { id: 0, text: "N65,000", isCorrect: false },
        { id: 1, text: "N55,000", isCorrect: false },
        { id: 2, text: "N75,000", isCorrect: true },
        { id: 3, text: "N25,000", isCorrect: false },
      ],
      answer: "N75,000",
      working: `\\text{Let's assume Nx was deposited in bank B} \\\\ \\text{Hence N(100,000 - x) was deposited in A} \\\\ \\frac{(100,000 -x) \\times 2 \\times 1}{100} + \\frac{x \\times 3 \\times 1}{100} = 2,750\\\\ 200,000 - 2x + 3x = 275,000 \\text{(Multiply thro' by 100)}\\\\ \\therefore x = N75,000 \\\\ \\text{So N75,000 was depoisted in bank B}`
    },
    {
      id: "Q10",
      text: `\\text{A bank pays simple interest at the rate of } 1\\frac{1}{2}\\text{%} \\\\ \\text{ per annum on savings accounts.}\\\\ \\text{Suppose Chinedu opens a savings account} \\\\ \\text{with the bank on January 1, 2023 whereupon} \\\\ \\text{he deposits a sum of N50,000. How much does} \\\\ \\text{his account balance read by December 31, 2023,} \\\\ \\text{if he does not make any withdrawals or} \\\\ \\text{further deposits throughout the year?}`,
      options: [
        { id: 0, text: "N52,750", isCorrect: false },
        { id: 1, text: "N50,750", isCorrect: true },
        { id: 2, text: "N51,750", isCorrect: false },
        { id: 3, text: "N50,500", isCorrect: false },
      ],
      answer: "N50,750",
      working:`\\text{Interest accrued } = \\frac{50,000 \\times 3 \\times  1}{100 \\times 2} = N750 \\\\ \\text{The account balance:} 50,000 + 750 = N50,750`
    },
  ];
  

const SimpleInterest = () => {
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
              <Text text={"Percentages II(Simple Interest)"} />
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


export default SimpleInterest