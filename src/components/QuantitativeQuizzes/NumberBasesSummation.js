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
      text: `\\text{Convert 28 in base 10 to a number} \\\\ \\text{in base 2.}`,
      options: [
        { id: 0, text: "11011", isCorrect: false },
        { id: 1, text: "10001", isCorrect: false },
        { id: 2, text: "11100", isCorrect: true },
        { id: 3, text: "10010", isCorrect: false },
      ],
      answer: "11100",
      working:`28 \\text{ is divided repeatedly by 2} \\\\ \\text{keeping the remainder at every step} \\\\ \\text{until the divisor, 2 in} \\\\ \\text{this case, can no longer divide} \\\\ \\text{into the quotient. Finally the} \\\\ \\text{remainders are written out from} \\\\ \\text{the last to the first to yield 11100}`
    },
    {
      id: "Q2",
      text: `\\text{Solve for p in the following equation } \\\\ \\text{given in base two: } \\\\ 11\\bigl(p + 1001\\bigr) = 1100p`,
      options: [
        { id: 0, text: "11", isCorrect: true },
        { id: 1, text: "10", isCorrect: false },
        { id: 2, text: "100", isCorrect: false },
        { id: 3, text: "101", isCorrect: false },
      ],
      answer: "11",
      working:`11\\bigl(p + 1001\\bigr) = 1100p \\\\ \\text{Expand the brackets:}  \\\\ 11p + 11011 = 1100p \\\\ \\text{Collect like terms:} \\\\ 1100p -11p = 11011 \\\\ 1001p = 11011 \\\\ \\therefore p = \\frac{11011}{1001} = 11_2` 
    },
    {
      id: "Q3",
      text: `\\text{The currency used in a country is called} \\\\ \\text{Malimatik (M) and is of base six. } \\\\ \\text{A lady in that country bought 4 bags} \\\\ \\text{of rice at M54 per bag and 3 tins of } \\\\ \\text{milk at M5 per tin. What is the total cost} \\\\ \\text{ of the items she bought?}`,
      options: [
        { id: 0, text: "M402_6", isCorrect: false },
        { id: 1, text: "M412_6", isCorrect: false },
        { id: 2, text: "M411_6", isCorrect: true },
        { id: 3, text: "M414_6", isCorrect: false },
      ],
      answer: "M411_6",
      working:`\\text{Cost of items: } \\\\ M54_6 \\times 4 + M5_6 \\times 3 \\\\= M344_6 + M23_6 = M411_6`
    },
    {
      id: "Q4",
      text: `\\text{What is the value of } \\sqrt{100.1101_2} \\\\ \\text{ in base two, correct to 3 d.p ?}`,
      options: [
        { id: 0, text: "11.101_2", isCorrect: false },
        { id: 1, text: "10.111_2", isCorrect: false },
        { id: 2, text: "11.011_2", isCorrect: false },
        { id: 3, text: "10.001_2", isCorrect: true },
      ],
      answer: "10.001_2",
      working: `100.1101_2 \\text{ is first converted to base 10:}\\\\ 1 \\times 2^2 + 1 \\times 2^{-1}  + 1 \\times 2^{-2} + 1 \\times 2^{-4} \\\\ \\text{(All the 0 digits have been ignored)} \\\\= 4 + \\frac{1}{2} + \\frac{1}{2^2} + \\frac{1}{2^4} \\\\ = 4 + 0.5 + 0.25 + 0.0625 \\\\ = 4.8125_{10} \\\\ \\therefore \\sqrt{100.1101_2} = \\sqrt{4.8125_{10}} = 2.194_{10} \\\\ \\text{Finally } 2.194_{10} \\text{ is converted to base 2} \\\\ \\text{first by splitting the number into two parts:} \\\\  2_{10},\\text{ the intgral part} \\\\ \\text{ and } 0.194_{10}\\text{ the fractional part.} \\\\ \\text{The integral part is converted} \\\\ \\text{to base 2 by the method of } \\\\ \\text{repeated division, setting} \\\\ \\text{ aside the remainder at every step}\\\\ \\text{The remainders are then written} \\\\ \\text{from bottom to top} \\\\ \\text{This results in } 10_2 \\\\ \\text{The fractional part is } \\\\ \\text{ multiplied repeatedly by 2,} \\\\ \\text{ setting aside the resulting integers } \\\\ \\text{in each step.These integers are then} \\\\ \\text{copied out from top to bottom} \\\\ \\text{This yields } 0.001_2 \\\\ \\text{Results from both procedures are } \\\\ \\text{combined to give the final answer: } \\\\ 10.001_2. \\\\ \\text{Please see the section for } \\\\ \\text{'Number bases involving fractions'} \\\\ \\text{(in part IV) for a detailed explanation.}`
    },
     {
      id: "Q5",
      text: `\\text{If } 738_x - 453_x = 285_x, \\\\ \\text{find x.} `,
      options: [
        { id: 0, text: "9", isCorrect: false },
        { id: 1, text: "10", isCorrect: true },
        { id: 2, text: "11", isCorrect: false },
        { id: 3, text: "12", isCorrect: false },
      ],
      answer: "10",
      working:`\\text{If the numbers are arranged } \\\\ \\text{vertically, and we try and make sense } \\\\ \\text{of the subtraction, we'll soon discover} \\\\ \\text{the subtraction is done in base 10} `
    },
     {
      id: "Q6",
      text: `\\text{Given that } y = 102_{five} \\times 23_{five}, \\text{ find y } \\\\ \\text{leaving your answer in base five.}`,
      options: [
        { id: 0, text: "2214", isCorrect: false },
        { id: 1, text: "2103", isCorrect: false },
        { id: 2, text: "2351", isCorrect: false },
        { id: 3, text: "2401", isCorrect: true },
      ],
      answer: "2401",
      working:`\\text{See the 'Multiplication and division} \\\\ \\text{ in Number Bases' as discussed } \\\\ \\text{in Part II for steps to take}`
    },
     {
      id: "Q7",
      text: `\\text{If } 2134_6 + 1234_6 + **** = 10413_6, \\\\ \\text{find the missing number.}`,
      options: [
        { id: 0, text: "4321_6", isCorrect: false },
        { id: 1, text: "3001_6", isCorrect: true },
        { id: 2, text: "1234_6", isCorrect: false },
        { id: 3, text: "1243_6", isCorrect: false },
      ],
      answer: "3001_6",
      working:`\\text{Add the known numbers on the LHS } \\\\ \\text{ of the equation and } \\\\ \\text{ subtract the result from the} \\\\ \\text{RHS of the equation}`
    },
     {
      id: "Q8",
      text: `\\text{If } 21p4_5 = 294, \\text{find p.}`,
      options: [
        { id: 0, text: "2", isCorrect: false },
        { id: 1, text: "3", isCorrect: true },
        { id: 2, text: "1", isCorrect: false },
        { id: 3, text: "0", isCorrect: false },
      ],
      answer: "3",
      working:`2 \\times 5^3 + 1 \\times 5^2 + p \\times 5^1 + 4 \\times 5^0 = 294\\\\ 2 \\times 125 + 25 + 5p + 4 \\times 1 =294 \\\\ 250 + 25 + 5p + 4 = 294 \\\\ \\therefore 279 + 5p = 294 \\\\ 5p = 15 \\\\ \\therefore p = \\frac{15}{5} = 3`
    },
    {
      id: "Q9",
      text: `\\text{Solve } \\frac{10}{11}  = \\frac{10x}{100 + x} \\\\ \\text{if all the numbers are in base two. } `,
      options: [
        { id: 0, text: "10", isCorrect: true },
        { id: 1, text: "100", isCorrect: false },
        { id: 2, text: "11", isCorrect: false },
        { id: 3, text: "101", isCorrect: false },
      ],
      answer: "10",
      working:`\\frac{10}{11}  = \\frac{10x}{100 + x} \\\\ \\text{On cross-multiplying:} \\\\ 10\\bigl(100 + x\\bigr) = 10x \\times 11 \\\\ 1000 + 10x = 110x \\\\ \\therefore 110x - 10x = 1000  \\\\ 100x = 1000 \\\\ \\therefore x = 10`
    },
    {
      id: "Q10",
      text: `\\text{If }\\frac{x_4}{3_{10}} = 5_{10} \\text{, find x.} `,
      options: [
        { id: 0, text: "13", isCorrect: false },
        { id: 1, text: "20", isCorrect: false },
        { id: 2, text: "30", isCorrect: false },
        { id: 3, text: "33", isCorrect: true },
      ],
      answer: "33",
      working:`\\text{First cross-multiply: } \\\\ x_4 = 3 \\times 5 = 15 = 33_4\\\\ \\therefore x = 33`
    }, 
  ]

const NumberBasesSummation = () => {
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

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setShowTime(true);
    setIsActive(false);
    setTime(0);
    setStartTest(false);
    
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
              <Text text={'Number Bases(Put them all together)'}/>
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
            {/* Show results or show the question game  */}
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

export default NumberBasesSummation