import React, {useEffect, useState} from 'react';
import classes from "../AptitudeTests/AptitudeTests.module.css";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";
import Text from "../AptitudeTests/Text";
import MathJax from 'react-mathjax';
import GetSolutionThree from "../AptitudeTests/GetSolutionThree";
import styles from "../../styles/Global";
import Card from "../UI/Card";
import Message from "../UI/Message";


const questions = [
    {
      id: "Q1",
      text: `\\text{If } Y_7  \\div 14_7 = 45_7 \\text{, find Y. }`,
      options: [
        { id: 0, text: "1105_7", isCorrect: false },
        { id: 1, text: "1026_7", isCorrect: true },
        { id: 2, text: "246_7", isCorrect: false },
        { id: 3, text: "1022_7", isCorrect: false },
      ],
      answer: "1026_7",
      working: `\\text{Re-write } Y_7  \\div 14_7 = 45_7 \\\\ \\text{as: } Y_7  = 45_7 \\times 14_7 \\\\ \\text{Next, set up the figures vertically with } \\\\ 45_7 \\text{ on top of } 14_7 \\\\ \\text{Now start the multiplication process with} \\\\ \\text{4 multiplying 45 first then 1} \\\\ \\text{multiplying 45 right underneath.} \\\\ \\text{Adding the two results yields }1026_7. \\\\ \\text{Keep in mind that all through the working,} \\\\ \\text{all the digits are kept under the base 7.} \\\\ \\text{So for instance when 4 multiplies 5} \\\\ \\text{we get 20 but we don't record 20.} \\\\ \\text{Instead we divide it by 7 to get 2} \\\\ \\text{remainder 6. The '6' is recorded} \\\\ \\text{and '2' is carried over.} \\\\ \\text{Next 4 multiplies 4 to yield 16, which is} \\\\ \\text{added to the '2' carried over to} \\\\ \\text{yield 18. Then, just like in the} \\\\ \\text{previous case, 18 is divided by 7 to} \\\\ \\text{give 2 remainder 4. So in a} \\\\ \\text{nutshell }45_7 \\text{ multiplies 5 to yield } 246_7`
    },
    {
      id: "Q2",
      text: `\\text{Evaluate }  \\bigl(20_{three}\\bigr)^2 - \\bigl(11_{three}\\bigr)^2 \\text{ in base}  \\\\ \\text{ three.} \\bigl(WASSCE\\bigr)`,
      options: [
        { id: 0, text: "112", isCorrect: false },
        { id: 1, text: "102", isCorrect: false },
        { id: 2, text: "200", isCorrect: false },
        { id: 3, text: "202", isCorrect: true },
      ],
      answer: "202",
      working: `\\text{First } \\bigl(20_3\\bigr)^2 = 20_3 \\times 20_3=1100_3 \\\\ \\text{Next } \\bigl(11_3\\bigr)^2 = 11_3 \\times 11_3 = 121_3 \\\\ \\therefore 1100_3 - 121_3 = 202_3   `
    },
    {
      id: "Q3",
      text: `400_6 \\times 12_6 = ?`,
      options: [
        { id: 0, text: "4200", isCorrect: false },
        { id: 1, text: "5200", isCorrect: true },
        { id: 2, text: "10200", isCorrect: false },
        { id: 3, text: "11100", isCorrect: false },
      ],
      answer: "5200",
      working: `\\text{Follow the process described in Q1}`
    },
    {
      id: "Q4",
      text: `\\text{Solve } 2x - 102 = 102 \\\\ \\text{if all the numbers are in base three.}`,
      options: [
        { id: 0, text: "100", isCorrect: false },
        { id: 1, text: "110", isCorrect: false },
        { id: 2, text: "112", isCorrect: false },
        { id: 3, text: "102", isCorrect: true },
      ],
      answer: "102",
      working: `2x - 102 = 102 \\\\ 2x = 102 + 102 \\\\ \\therefore 2x = 211 \\text{(Keep in mind that we're} \\\\ \\text{operating in base three)} \\\\ \\therefore x = \\frac{211}{2} = 102_3`
    },
     {
      id: "Q5",
      text: `\\text{Solve } \\frac{11}{x + 10}  = \\frac{101}{110 + x} \\\\ \\text{if all the numbers are in base two. } `,
      options: [
        { id: 0, text: "100", isCorrect: true },
        { id: 1, text: "101", isCorrect: false },
        { id: 2, text: "111", isCorrect: false },
        { id: 3, text: "11", isCorrect: false },
      ],
      answer: "100",
      working:`\\frac{11}{x + 10}  = \\frac{101}{110 + x} \\\\ \\text{On cross-multiplying:} \\\\ 11\\bigl(110 + x\\bigr) = 101\\bigl( x + 10\\bigr) \\\\ 10010 + 11x = 101x + 1010 \\\\ \\therefore 101x - 11x = 10010 -1010 \\\\ 10x = 1000 \\\\ \\therefore x = 100`
    },
     {
      id: "Q6",
      text: `\\text{Evaluate } 112_{three} \\times 22_{three} \\text{, leaving } \\\\ \\text{your answer in base three.}`,
      options: [
        { id: 0, text: "10100", isCorrect: false },
        { id: 1, text: "10001", isCorrect: false },
        { id: 2, text: "11011", isCorrect: true },
        { id: 3, text: "10111", isCorrect: false },
      ],
      answer: "11011",
      working: `\\text{Follow the process described in Q1}`
    },
     {
      id: "Q7",
      text: `\\text{If }\\frac{x}{11} = 101 \\text{, find x.} \\\\ \\text{(All numbers are in base 2.)}`,
      options: [
        { id: 0, text: "1111", isCorrect: true },
        { id: 1, text: "1011", isCorrect: false },
        { id: 2, text: "1110", isCorrect: false },
        { id: 3, text: "1001", isCorrect: false },
      ],
      answer: "1111",
      working: `\\text{First cross-multiply: } \\\\ x = 101_2 \\times 11_2 = 1111_2`
    },
     {
      id: "Q8",
      text: `\\text{Evaluate }110_2 \\div 10_2 \\times 11_2.`,
      options: [
        { id: 0, text: "1010", isCorrect: false },
        { id: 1, text: "1100", isCorrect: false },
        { id: 2, text: "1000", isCorrect: false },
        { id: 3, text: "1001", isCorrect: true },
      ],
      answer: "1001",
      working: `110_2 \\div 10_2 \\times 11_2 \\\\ \\frac{110_2}{10_2} \\times 11_2 \\\\ 11_2 \\times 11_2 = 1001_2`
    },
    {
      id: "Q9",
      text: `\\text{If } 2x + 1 = 11, \\text{ find x,} \\\\ \\text{ if all the numbers are in base 4.}`,
      options: [
        { id: 0, text: "10", isCorrect: false },
        { id: 1, text: "3", isCorrect: false },
        { id: 2, text: "2", isCorrect: true },
        { id: 3, text: "11", isCorrect: false },
      ],
      answer: "2",
      working: `2x + 1 = 11 \\\\ 2x = 11 - 1 \\\\ 2x = 10 \\\\ \\therefore x = \\frac{10_4}{2_4} = 2`
    },
    {
      id: "Q10",
      text: `\\text{Solve for x: } 3\\bigl(x + 11\\bigr) = 44\\\\ \\text{(All numbers are in base 5.)} `,
      options: [
        { id: 0, text: "1", isCorrect: false },
        { id: 1, text: "2", isCorrect: true },
        { id: 2, text: "3", isCorrect: false },
        { id: 3, text: "4", isCorrect: false },
      ],
      answer: "2",
      working: `3\\bigl(x + 11\\bigr) = 44 \\\\ x + 11_5 = \\frac{44_5}{3_5}= 13_5 \\\\ x = 13_5 - 11_5 = 2_5`
    }, 
  ]

const NumberBasesMultiplicationDivision = () => {
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
  const closeAnswersHandler =()=>{
    setIsCorrection(false);
  }
  
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
              <Text text={'Number Bases II (Multiplication and Division)'}/>
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
                  {(score=== 10) ? (
                    <Message className={classes.successMessage}>Good job!</Message>  
                  )
                  :
                  (score< 10 && isCorrection) ?
                  (
                    <button onClick={closeAnswersHandler}>Close</button>
                  )
                  : (
                    <button onClick={() => getCorrection()}>Get Answers </button>
                  )}
                  
                </div>
                {isCorrection && <GetSolutionThree questions={questions} onClose={closeAnswersHandler} />}
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
                      <MathJax.Node formula=  {option.text} />
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
  )
}

export default NumberBasesMultiplicationDivision