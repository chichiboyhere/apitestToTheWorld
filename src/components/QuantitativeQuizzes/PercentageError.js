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
      text: `\\text{A student measures a piece of rope}\\\\ \\text{and found that it was 1.26m long.}\\\\ \\text{If the actual length of the rope was 1.25m,}\\\\ \\text{what was the percentage error} \\\\ \\text{in the measurement? } \\text{ (UTME)}`,
      options: [
        { id: 0, text: "0.25%", isCorrect: false },
        { id: 1, text: "0.01%", isCorrect: false },
        { id: 2, text: "0.80%", isCorrect: true },
        { id: 3, text: "0.40%", isCorrect: false },
      ],
      answer: "0.80%",
      working: `\\text{% error } = \\frac{\\text{error}}{\\text{true measurement}} \\times 100 \\\\ \\text{% error } = \\frac{1.26 - 1.25}{1.25} \\times 100 \\\\ \\text{% error } = \\frac{0.01}{1.25} \\times 100 \\\\ \\therefore \\text{% error } = \\frac{0.01}{1.25} \\times 100 = 0.80%`
    },
    {
      id: "Q2",
      text: `\\text{The radius of a circle is given} \\\\ \\text{as 5cm subject to an error of 0.1cm.} \\\\ \\text{ What is the percentage error in the} \\\\ \\text{ area of the circle?} \\text{ (UME)}`,
      options: [
        { id: 0, text: "\\frac{1}{25}", isCorrect: true },
        { id: 1, text: "\\frac{1}{4}", isCorrect: false },
        { id: 2, text: "4", isCorrect: false },
        { id: 3, text: "25", isCorrect: false },
      ],
      answer: "\\frac{1}{25}",
      working: `\\text{% error } = \\frac{\\text{error}}{\\text{true measurement}} \\times 100\\\\ \\text{% error } = \\frac{\\pi \\times 0.1^2}{\\pi \\times 5^2} \\times 100\\\\ \\therefore \\text{% error } = \\frac{1}{25}`
    },
    {
      id: "Q3",
      text: `\\text{The length of a notebook 15cm, was} \\\\ \\text{measured as 16.8cm. Calculate the} \\\\ \\text{ percentage error to 2 significant figures.}\\\\ \\text{  (UME)}`,
      options: [
        { id: 0, text: "12.00%", isCorrect: true },
        { id: 1, text: "11.00%", isCorrect: false },
        { id: 2, text: " 10.71%", isCorrect: false },
        { id: 3, text: "0.12%", isCorrect: false },
      ],
      answer: "12.00%",
      working: `\\text{% error } = \\frac{16.8 - 15}{15} \\times 100 \\\\=12.00% `
    },
    {
      id: "Q4",
      text: `\\text{A sales boy gave a change of N75.00} \\\\ \\text{to a buyer instead of N80.00,} \\\\ \\text{calculate his percentage error,} \\\\ \\text{correct to one decimal place?} \\\\ \\text{(NECO)}`,
      options: [
        { id: 0, text: "6.00%", isCorrect: false },
        { id: 1, text: "6.20%", isCorrect: false },
        { id: 2, text: "6.30%", isCorrect: true },
        { id: 3, text: "6.60%", isCorrect: false },
       
      ],
      answer: "6.30%",
      working: `\\text{% error } = \\frac{80 - 75}{80} \\times 100 \\\\=6.30% `
    },
    {
      id: "Q5",
      text: ` \\text{The length of a piece of stick is} \\\\ \\text{1.75m. A girl measured it as 1.80m.} \\\\ \\text{Find the percentage error (WASSCE)} `,
      options: [
        { id: 0, text: "\\frac{28}{7}%", isCorrect: false },
        { id: 1, text: "\\frac{29}{7}%", isCorrect: false },
        { id: 2, text: "5%", isCorrect: false },
        { id: 3, text: "\\frac{20}{7}%", isCorrect: true },
      ],
      answer: "\\frac{20}{7}%",
      working:`\\text{% error }= \\frac{1.80 - 1.75}{1.75} \\times 100  \\\\=\\frac{0.05}{1.75} \\times 100 \\\\ =\\frac{5}{175} \\times 100 \\\\= \\frac{20}{7}%`
    },
    {
      id: "Q6",
      text: `\\text{A sales boy gave a change of N68} \\\\ \\text{ instead of N72. Calculate } \\\\ \\text{his percentage error} \\text{ (WASSCE) }`,
      options: [
        { id: 0, text: "4%", isCorrect: false },
        { id: 1, text: "5\\frac{5}{9}%", isCorrect: true },
        { id: 2, text: "5\\frac{15}{17}%", isCorrect: false },
        { id: 3, text: "7%", isCorrect: false },
      ],
      answer: "5\\frac{5}{9}%",
      working:`\\text{% error }= \\frac{72 - 68}{72} \\times 100 \\\\ = \\frac{4}{72} \\times 100 \\\\ = \\frac{400}{72} \\\\ =5\\frac{5}{9}%`
    },
    {
      id: "Q7",
      text: `\\text{A surveyor measured the length} \\\\ \\text{of a obtained 42.55 metres. If his} \\\\ \\text{measurement was more than the actual length and} \\\\ \\text{the percentage error of his measurement} \\\\ \\text{ was 8%, calculate the actual length} \\\\ \\text{ of the land} \\\\ \\text{(NECO)} `,
      options: [
        { id: 0, text: "39.40 metres", isCorrect: false },
        { id: 1, text: "46.20 metres", isCorrect: false },
        { id: 2, text: "46.25 metres", isCorrect: true },
        { id: 3, text: "46.50 metres", isCorrect: false },
      ],
      answer: "46.25 metres",
      working: `\\text{% error } = \\frac{\\text{error}}{\\text{true measurement}} \\times 100\\\\ 8 = \\frac{x - 42.55}{x} \\times 100 \\\\ \\text{(We assume the actual measurement was x metres)}\\\\ \\therefore 8x = 100x -4255 \\\\ \\therefore 92x = 4255 \\\\ \\therefore x = \\frac{4255}{92}= 46.25 metres`
    },
    {
      id: "Q8",
      text: `\\text{A student found the approximate value} \\\\ \\text{of 0.03545 correct to 2 decimal places} \\\\ \\text{instead of 2 significant figures.} \\\\ \\text{Find the percentage error.}`,
      options: [
        { id: 0, text: "25.00%", isCorrect: false },
        { id: 1, text: "10.20%", isCorrect: false },
        { id: 2, text: "12.25%", isCorrect: false },
        { id: 3, text: "14.29%", isCorrect: true },
      ],
      answer: "14.29%",
      working:`\\text{The true measurement} = 0.035 \\text{(to 2 s.f)}\\\\ \\text{The false measurement} = 0.04 \\text{(to 2 d.p)} \\\\ \\therefore \\text{% error} = \\frac{0.04 - 0.035}{0.035} \\times 100 \\\\ \\therefore \\text{% error} = \\frac{ 0.005}{0.035} \\times 100 \\\\= 14.29%`
    },
    {
      id: "Q9",
      text: `\\text{Tolu made a percentage error of 2%} \\\\ \\text{when he measured the length of a shelf} \\\\ \\text{as 5.2ft, whereas the true measurement was} \\\\ \\text{a few inches more. What was the} \\\\ \\text{true length of the shelf correct} \\\\ \\text{ to 3 significant figures?}`,
      options: [
        { id: 0, text: "5.34ft", isCorrect: false },
        { id: 1, text: "5.09ft", isCorrect: false },
        { id: 2, text: "5.10ft", isCorrect: false },
        { id: 3, text: "5.31ft", isCorrect: true},
      ],
      answer: "5.31ft",
      working: `\\text{Assuming the true measurement is x:} \\\\ 2 = \\frac{x - 5.2}{x} \\times 100 \\\\ 2x = 100x - 520 \\\\ 98x = 520\\\\ \\therefore x = \\frac{520}{98} \\\\ = 5.31ft`
    },
    {
      id: "Q10",
      text: `\\text{The length of a notebook 15cm,} \\\\ \\text{was measured as 13.5cm.} \\\\ \\text{ Calculate the percentage error.} `,
      options: [
        { id: 0, text: "12%", isCorrect: false },
        { id: 1, text: "9%", isCorrect: false },
        { id: 2, text: "10%", isCorrect: true },
        { id: 3, text: "11%", isCorrect: false },
      ],
      answer: "10%",
      working:`\\text{% error} = \\frac{15 - 13.5}{15} \\times 100 \\\\= \\frac{1.5}{15} \\times 100  \\\\ = 10%`
    },
  ];

const PercentageError = () => {
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
              <Text text={"Percentages I(Percentage Error)"} />
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



export default PercentageError