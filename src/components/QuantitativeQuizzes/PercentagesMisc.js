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
      text: `\\text{A worker's present salary is} \\\\ \\text{N24,000 per annum. His annual} \\\\ \\text{increment is 10% of his basic salary.} \\\\ \\text{ What would be his annual salary at} \\\\ \\text{the beginning of the third year?} \\\\ \\text{ (UME)}`,
      options: [
        { id: 0, text: "nill", isCorrect: false },
        { id: 1, text: "nill", isCorrect: false },
        { id: 2, text: "nill", isCorrect: false },
        { id: 3, text: "nill", isCorrect: true },
      ],
      answer: "N29,040",
      working: `\\text{Year 1: Principal = N24,000}\\\\ \\text{Increase} = +  N2400 \\\\ \\text{(i.e } \\frac{10}{100} of N24,000 = N2400 \\text{)} \\\\ \\text{Year 2: Principal = N26,400 } \\\\  \\text{      Increase} = +  N2640 \\\\ \\text{(i.e } \\frac{10}{100} of N26,400 = N2640 \\text{)} \\\\ \\text{Year 3: Principal = N29,040} \\\\ \\text{Alternatively:} \\\\ A = P(1 + \\frac{r}{100})^n \\\\=24,000(1 + \\frac{10}{100})^2\\\\=24,000(1.1)^2 \\\\=24,000(1.1)^2 = N29,040 `
    },
    {
      id: "Q2",
      text: `\\text{If the population of a town} \\\\ \\text{was 240,000 in January 1998 and }\\\\ \\text{it increased by 2% each year, what} \\\\ \\text{would be the population of the town} \\\\ \\text{ in January, 2000?}\\text{ (UME)}`,
      options: [
        { id: 0, text: "480,000", isCorrect: false },
        { id: 1, text: "249,696", isCorrect: true },
        { id: 2, text: "249,600", isCorrect: false },
        { id: 3, text: "244,800", isCorrect: false },
      ],
      answer: "249,696",
      working: `\\text{Jan 1998 - Jan 2000 is a period of 2 years}\\\\ \\text{Using } A = P(1 + \\frac{r}{100})^n \\\\=240,000(1 + \\frac{2}{100})^2 \\\\=240,000(1.02)^2 = 249,696`
    },
    {
      id: "Q3",
      text: `\\text{A man wishes to keep his money} \\\\ \\text{in a savings deposit at 25% compound} \\\\ \\text{ interest so that after three years} \\\\ \\text{ he can buy a car for N150,000.} \\\\ \\text{ How much does he need to deposit? } \\\\  \\text{  (UME)}`,
      options: [
        { id: 0, text: "N112,000.50", isCorrect: false },
        { id: 1, text: "N96,000.00", isCorrect: false },
        { id: 2, text: "N85,714.28", isCorrect: false },
        { id: 3, text: "N76,800.00", isCorrect: true },
      ],
      answer: "N76,800.00",
      working: `\\text{Compound interest formula: } \\\\ \\text{Amount, A = } P(1 + \\frac{r}{100})^n  \\\\ 150,000 = P( 1 + \\frac{25}{100})^3 \\\\ 150,000 = P(1.25)^3 \\\\ 150,000 = P \\times 1.953125 \\\\ \\therefore P =\\frac{150000}{1.953125} = N76,800.00`
    },
    {
      id: "Q4",
      text: `\\text{A cinema hall contains a certain} \\\\ \\text{number of people. If }22\\frac{1}{2} \\text{% are} \\\\ \\text{children,} 47\\frac{1}{2} \\text{% are men and 84 are women,}\\\\  \\text{find the number of men in the hall.} \\\\ \\text{(UME)} `,
      options: [
        { id: 0, text: "63", isCorrect: false },
        { id: 1, text: "84", isCorrect: false },
        { id: 2, text: "113", isCorrect: false },
        { id: 3, text: "133", isCorrect: true },
      ],
      answer: "133",
      working: `\\text{% of women=} 100\\text{%} - (22\\frac{1}{2} + 47\\frac{1}{2})\\text{%}) = 30\\text{%}\\\\ \\therefore 30\\text{%} \\rightarrow 84 \\text{ women} \\\\ \\therefore 47\\frac{1}{2}\\text{%} \\rightarrow \\frac{47\\frac{1}{2}}{30} \\times 84 \\\\= \\frac{95}{2 \\times 30} \\times 84=133 `
    },
    {
      id: "Q5",
      text: `\\text{If x% of 240 equals 12, find x.} \\\\ \\text{(WASSCE)}`,
      options: [
        { id: 0, text: "x = 1", isCorrect: false },
        { id: 1, text: "x = 3", isCorrect: false },
        { id: 2, text: "x = 5", isCorrect: true },
        { id: 3, text: "x = 7", isCorrect: false },
      ],
      answer: "5",
      working:`x \\text{% of }240 = 12 \\\\ \\frac{x}{100} \\times 240 =12 \\\\ \\therefore x = \\frac{12 \\times 100 }{240} = 5`
    },
    {
      id: "Q6",
      text: `\\text{If 85% of x is N3230, what} \\\\  \\text{is the value of x?} \\text{ (WASSCE) }`,
      options: [
        { id: 0, text: "nill", isCorrect: true },
        { id: 1, text: "nill", isCorrect: false },
        { id: 2, text: "nill", isCorrect: false },
        { id: 3, text: "nill", isCorrect: false },
      ],
      answer: "205",
      working:`85\\text{% of x} = N3230 \\\\ \\frac{85}{100} \\times x = 3230 \\\\ \\therefore x =  \\frac{3230 \\times 100}{85} = N3,800`
    },
    {
      id: "Q7",
      text: `\\text{A man donates 10% of his monthly} \\\\  \\text{net earnings to his church. If} \\\\  \\text{it amounts to N4,500, what is} \\\\  \\text{his net monthly income? (UTME)} `,
      options: [
        { id: 0, text: "N40,500", isCorrect: false },
        { id: 1, text: "N45,000", isCorrect: true },
        { id: 2, text: "N52,500", isCorrect: false },
        { id: 3, text: "N62,000", isCorrect: false },
      ],
      answer: "N45,000",
      working: `\\text{If his income = } x Naira\\\\ 10 \\text{% of }x = 4500 \\\\ \\therefore x = \\frac{100}{10} \\times N4500 = N45,000 `
    },
    {
      id: "Q8",
      text: `\\text{A trader bought an engine for} \\\\ $15,000.00 \\text{ outside Nigeria. If}  \\\\ \\text{the exchange rate is } $0.075 \\text{ to} \\\\ \\text{ N1.00, how much did the engine} \\\\ \\text{cost in Naira? (WASSCE)}`,
      options: [
        { id: 0, text: "N250,000.00", isCorrect: false },
        { id: 1, text: "N200,000.00", isCorrect: true },
        { id: 2, text: "N150,000.00 ", isCorrect: false },
        { id: 3, text: "N100,000.00", isCorrect: false },
      ],
      answer: "N200,000.00",
      working:`\\text{If } $0.075 = N1, \\text{ then } $1 = \\frac{1}{0.075} = N13.33 \\\\ \\therefore $15,000  = N15,000 \\times 13.33 = N200,000.00`
    },
    {
      id: "Q9",
      text: `\\text{The amount A to which a principal P} \\\\  \\text{amounts at r% compound interest for n} \\\\  \\text{years is given by the formula} \\\\  A =  P(1 + \\frac{r}{100})^n.\\\\ \\text{Find A, if P = 126, r = 4 and n = 2. }  \\\\  \\text{UTME}`,
      options: [
        { id: 0, text: "N132.50K", isCorrect: false },
        { id: 1, text: "N136.30K", isCorrect: true },
        { id: 2, text: "N125.40K", isCorrect: false },
        { id: 3, text: "N257.42K", isCorrect: false },
      ],
      answer: "N136.30K",
      working: ` A =  P(1 + \\frac{r}{100})^n \\\\ \\therefore  A = 126(1 + \\frac{4}{100})^2 \\\\= 126(1 + 0.04)^2 \\\\= 126(1.04)^2\\\\ = 136.28 = N136.30K \\text{(approximately)}`
    },
    {
      id: "Q10",
      text: `\\text{A public car dealer marked up} \\\\  \\text{the cost of a car at 30% in an } \\\\  \\text{attempt to make 20% gross profit.} \\\\  \\text{ Due to the value of dollar, he} \\\\  \\text{now placed 20% discount on the car.} \\\\  \\text{What profit or loss will he make?} \\\\ \\text{(UTME)}`,
      options: [
        { id: 0, text: "3\\text{%}", isCorrect: false },
        { id: 1, text: "2\\text{%}", isCorrect: false },
        { id: 2, text: "4\\text{%}", isCorrect: true },
        { id: 3, text: "1\\text{%}", isCorrect: false },
      ],
      answer: "4\\text{%}",
      working:`\\text{Let's assume the cost price(CP)} \\\\ \\text{of the car} = 100 \\\\ \\text{The dealer would have had to set} \\\\ \\text{the selling price(SP) at } \\\\ \\text{120 to make a profit of 20%} \\\\ \\text{Now, he allowed a discount of 20% on the SP} \\\\ \\text{i.e he allowed a discount of} \\frac{20}{100} of 120 = 24\\\\ \\text{So the actual SP is } 120 -24 =96 \\\\ \\therefore \\text{He made a loss of } 100 - 96 = 4 \\\\ \\text{\And this amounts to a 4% loss}`
    },
  ];
  

const PercentagesMisc = () => {
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
              <Text text={"Percentages IV (Miscellaneous Problems)"} />
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


export default PercentagesMisc