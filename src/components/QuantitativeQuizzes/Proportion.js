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
      text: `\\text{The time taken to do a piece of work} \\\\ \\text{is inversely proportional to the number}\\\\ \\text{of men employed.If it takes 30 men to do} \\\\ \\text{a piece of work in 6 days, how many men} \\\\ \\text{are required to do the work in 4 days?}\\\\ \\text{(UME)}`,
      options: [
        { id: 0, text: "20", isCorrect: false },
        { id: 1, text: "35", isCorrect: false },
        { id: 2, text: "45", isCorrect: true },
        { id: 3, text: "60", isCorrect: false },
      ],
      answer: "45",
      working: `\\text{time, t} \\propto \\frac{1}{ \\text{ number of men, n}} \\\\ \\therefore \\frac{t_1}{t_2} = \\frac{n_2}{n_1} \\\\ \\frac{6}{4} = \\frac{n_2}{30} \\\\ \\text{On cross-multiplying: }4n_2 = 6 \\times 30 \\\\ \\therefore  n_2 = \\frac{180}{4} = 45 men`
    },
    {
      id: "Q2",
      text: `\\text{Mohammed is 8 years older than Joy }  \\\\ \\text{now. In five years’ time he will be}\\\\ \\text{ twice as old as Joy.} \\\\ \\text{ How old is Joy now? }  \\text{ (NECO)}`,
      options: [
        { id: 0, text: "1 \\frac{1}{2}\\text{ years}", isCorrect: false },
        { id: 1, text: "3 \\text{ years}", isCorrect: true },
        { id: 2, text: "4 \\frac{1}{2}\\text{ years}", isCorrect: false },
        { id: 3, text: "6 \\text{ years}", isCorrect: false },
      ],
      answer: "3 \\text{ years}",
      working: `\\text{Let Joy's present age be x years old} \\\\ \\therefore \\text{Mohammed is (x + 8) years} \\\\ \\text{In 5 years' time: } \\\\ \\text{Joy's age } = x + 5 \\\\ \\text{And Mohammed's age } = x + 8 + 5 = x + 13 \\\\ \\text{So the relationship between their ages:} x + 13 = 2(x + 5) \\\\ \\therefore x + 13 = 2x + 10 \\\\ \\therefore x = 3 \\text{ years}`
    },
    {
      id: "Q3",
      text: `\\text{I am x years old and my brother} \\\\ \\text{is 3 years older, how old} \\\\ \\text{was my brother last year} \\\\ \\text{  (WASSCE)}`,
      options: [
        { id: 0, text: "\\text{(x - 4) years}", isCorrect: false },
        { id: 1, text: "\\text{(x + 2) years}", isCorrect: true },
        { id: 2, text: "\\text{(3x - 1) years}", isCorrect: false },
        { id: 3, text: "\\text{(3x + 1) years}", isCorrect: false },
      ],
      answer: "\\text{(x + 2) years}",
      working: `\\text{If I am x years old, my brother, 3 years} \\\\ \\text{older, is (x + 3) years} \\\\ \\therefore \\text{My brother's age last year: (x + 2) years} `
    },
    {
      id: "Q4",
      text: `\\text{A car uses one litre of petrol for every 14km.} \\\\ \\text{If 1 litre of petrol costs N63.00, how far can} \\\\ \\text{the car go with N900.00 worth of petrol?}  \\\\ \\text{(WASSCE)}`,
      options: [
        { id: 0, text: "420km", isCorrect: false },
        { id: 1, text: "405km", isCorrect: false },
        { id: 2, text: "210km", isCorrect: false },
        { id: 3, text: "200km", isCorrect: true },
      ],
      answer: "200km",
      working: `\\text{Number of litres obtainable with N900:} \\\\ \\frac{900}{63} = 14.286 \\\\ \\therefore \\text{The number of km possible on 14.286 litres} \\\\ \\text{of petrol } = 14.286 \\times 14 = 200\\text{km} `
    },
    {
      id: "Q5",
      text: `\\text{Sonny is twice as old as Wale. Four years} \\\\ \\text{ago, he was four times as old as Wale.} \\\\ \\text{When will the sum of their ages be 66?} \\\\ \\text{ (WASSCE)}`,
      options: [
        { id: 0, text: "24", isCorrect: true },
        { id: 1, text: "25", isCorrect: false },
        { id: 2, text: "26", isCorrect: false },
        { id: 3, text: "27", isCorrect: false },
      ],
      answer: "24",
      working:`\\text{Let Wale's present age be x years old} \\\\ \\therefore \\text{Sonny is 2x years} \\\\ \\text{4 years ago: } \\\\ \\text{Wale's age } = x - 4 \\\\ \\text{And Sonny's age } = 2x - 4 \\\\ \\text{So the relationship between their ages:} 2x -4 = 4(x - 4) \\\\ \\text{i.e Sonny was 4 times as old as Wale} \\\\ \\therefore 2x -4  = 4x - 16 \\\\ \\therefore 2x = 16 - 4= 12 \\\\ \\therefore x = 12/2 = 6 \\\\ \\text{So Wale is 6 years old and Sonny, 12} \\\\ \\text{In y years' time(a future time):} \\\\ \\text{Wale's age = 6 + y and Sonny's age = 12 + y} \\\\ \\therefore 6 + y + 12 + y = 66 \\\\ 2y = 66 - 18 = 48 \\\\ \\therefore y = 24`
    },
    {
      id: "Q6",
      text: `\\text{Tom will be 25 years old in n years' time.} \\\\ \\text{If he is 5 years younger than Bade.} \\\\ \\text{What is Bade's present} \\\\ \\text{ age.  (WASSCE)}`,
      options: [
        { id: 0, text: "\\text{(30 - n) years}", isCorrect: true },
        { id: 1, text: "\\text{(20 - n) years}", isCorrect: false },
        { id: 2, text: "\\text{(25 - n) years}", isCorrect: false },
        { id: 3, text: "\\text{(30 + n) years}", isCorrect: false },
      ],
      answer: "\\text{(30 - n) years}",
      working:`\\text{Since Tom will be 25 years old in n years' time, } \\\\ \\text{his present age = 25 - n} \\\\ \\text{But Tom is 5 years younger than Bade} \\\\ \\text{So Bade's age is (30 - n) years}`
    },
    {
      id: "Q7",
      text: `\\text{Halima is n years old. Her brother's} \\\\ \\text{age is 5 years more than half of her age.} \\\\ \\text{How old is her brother? } \\\\ \\text{(WASSCE)} `,
      options: [
        { id: 0, text: "\\frac{n}{2} + \\frac{n}{5}", isCorrect: false },
        { id: 1, text: "\\frac{n}{2} - 5", isCorrect: false },
        { id: 2, text: "5 - \\frac{n}{2}", isCorrect: false },
        { id: 3, text: "\\frac{n}{2} + 5", isCorrect: true },
      ],
      answer: "\\frac{n}{2} + 5",
      working: `\\text{Halima's age: n years } \\\\ \\text{Her brother's age: } \\frac{n}{2} + 5`
    },
    {
      id: "Q8",
      text: `\\text{Five years ago, a mother was 5 times}\\\\ \\text{as old as her daughter. In 10 years' time,} \\\\ \\text{the mother will be twice as old as the} \\\\ \\text{daughter. How old are they at the moment?} `,
      options: [
        { id: 0, text: "15, 45", isCorrect: false },
        { id: 1, text: "5, 25", isCorrect: false },
        { id: 2, text: "10, 40", isCorrect: false },
        { id: 3, text: "10, 30", isCorrect: true },
      ],
      answer: "10, 30",
      working:`\\text{Let daughter's present age be x yrs} \\\\ \\text{And mother's present age, y yrs}\\\\ \\text{5 yrs' ago:} \\\\ \\text{daughter's age = x - 5} \\\\ \\text{mother's age = y - 5} \\\\ \\text{So the relationship between their ages:} \\\\ y - 5 = 5(x -5) \\\\ y - 5 = 5x - 25 \\\\ 5x -y = 20 \\text{...(1)} \\\\ \\text{In 10 years' time: } \\\\ \\text{daughter's age = x + 10}\\\\ \\text{and mother's age = y + 10} \\\\ \\text{So the relationship between their ages:} y + 10 = 2(x + 10) \\\\ y + 10 = 2x + 20 \\\\ \\therefore 2x - y = - 10 \\text{...(2)} \\\\ \\text{Subtracting eqn(1) from eqn(2):} 3x = 30 \\\\ \\therefore x = 10 \\\\ \\text{and putting x = 10 in eqn(1), we get:} \\\\ 5(10) - y = 20  \\\\ \\therefore y = 30 \\\\ \\text{So daughter's age is 10 years}\\\\ \\text{While mother's age is 30 years}`
    },
    {
      id: "Q9",
      text: `\\text{Four men do a piece of work in 12 days.} \\\\ \\text{How many days do 6 men, working at }\\\\ \\text{the same rate, do the work?}`,
      options: [
        { id: 0, text: "8", isCorrect: true },
        { id: 1, text: "6", isCorrect: false },
        { id: 2, text: "10", isCorrect: false },
        { id: 3, text: "12", isCorrect: false },
      ],
      answer: "8",
      working: `\\text{time, t} \\propto \\frac{1}{number of men, n} \\\\ \\therefore \\frac{t_1}{t_2} = \\frac{n_2}{n_1} \\\\ \\frac{12}{t_2} = \\frac{6}{4} \\\\ \\text{On cross-multiplying: }6t_2 = 12 \\times 4 \\\\ \\therefore  t_2 = \\frac{48}{6} = 8 \\text{ men}`
    },
    {
      id: "Q10",
      text: `\\text{When a long bar soap is cut into two equal} \\\\ \\text{parts, each piece is 25cm long. What is the} \\\\ \\text{length of each piece if the bar soap is} \\\\ \\text{cut into 4 equal parts instead?}`,
      options: [
        { id: 0, text: "15\\text{ cm long}", isCorrect: false },
        { id: 1, text: "25\\text{ cm long}", isCorrect: false },
        { id: 2, text: "5\\text{ cm long}", isCorrect: false },
        { id: 3, text: "12.5\\text{ cm long}", isCorrect: true },
      ],
      answer: "12.5\\text{ cm long}",
      working:`\\text{Since each of the two equal pieces is 25cm,} \\\\ \\text{the entire bar soap is 50cm long} \\\\ \\text{So if it is cut into 4 equal parts, each piece is } \\frac{50cm}{4} = 12.5\\text{ cm long}`
    },
  ];
  

const Proportion = () => {
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
              <Text text={"Proportion"} />
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


export default Proportion