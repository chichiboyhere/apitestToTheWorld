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
      text: `\\text{A car travels at an average speed} \\\\ \\text{of 75km/h. Find its speed in} \\\\ \\text{ metres per second. (NECO)} `,
      options: [
        { id: 0, text: "270m/s", isCorrect: false },
        { id: 1, text: "208m/s", isCorrect: false },
        { id: 2, text: "27.0m/s", isCorrect: false },
        { id: 3, text: "20.8m/s", isCorrect: true },
        
      ],
      answer: "20.8m/s",
      working: `\\text{ ave. speed(in m/s)} = \\frac{75 km}{1 h} = \\frac{75 \\times 1000m}{60 \\times 60 s}  \\\\ = 20.8m/s`
    },
    {
      id: "Q2",
      text: `\\text{A train moving at a uniform speed} \\\\ \\text{covers 36km in 21 minutes. How} \\\\ \\text{long does it take to cover 60km? }  \\\\ \\text{ (WASSCE)}`,
      options: [
        { id: 0, text: "35 \\text{ mins}", isCorrect: true },
        { id: 1, text: "40 \\text{ mins}", isCorrect: false },
        { id: 2, text: "45 \\text{ mins}", isCorrect: false },
        { id: 3, text: "90 \\text{ mins}", isCorrect: false },
      ],
      answer: "35 \\text{ mins}",
      working: `\\text{ uniform speed(in km/min)} = \\frac{36 km}{21 min} = \\frac{12}{7} km/min \\\\ \\therefore \\text{ time to cover 60 km} = \\frac{distance}{speed}\\\\= \\frac{60}{12/7} \\\\= 60 \\times \\frac{7}{12} = 35 \\text{ mins}`
    },
    {
      id: "Q3",
      text: `\\text{A train travels 60km in M minutes.} \\\\ \\text{If its average speed is 400km per hour,} \\\\ \\text{ find the value of M } \\\\ \\text{  (WASSCE)}`,
      options: [
        { id: 0, text: "chk wassce", isCorrect: false },
        { id: 1, text: "chk wassce", isCorrect: true },
        { id: 2, text: "chk wassce", isCorrect: false },
        { id: 3, text: "chk wassce", isCorrect: false },
      ],
      answer: "9\\text{ mins}",
      working: `\\text{ time M(mins)} = \\frac{distance}{speed}\\\\= \\frac{60 km}{400 kmh^{-1}} \\\\= 0.15 h \\\\= 0.15 \\times 60  \\\\= 9\\text{ mins}`
    },
    {
      id: "Q4",
      text: `\\text{A man travels at a rate of 25m/sec.} \\\\ \\text{If he travels for } 10 \\frac{1}{2} \\text{ hrs, how many}   \\\\ \\text{kilometres has he covered?  (NECO)}`,
      options: [
        { id: 0, text: "chk neco", isCorrect: true },
        { id: 1, text: "chk neco", isCorrect: false },
        { id: 2, text: "chk neco", isCorrect: false },
        { id: 3, text: "chk neco", isCorrect: false },
      ],
      answer: "1",
      working: `\\text{distance = ave. speed } \\times \\text{time} \\\\ \\therefore \\text{distance} = 25 \\text{m}s^{-1} \\times 10 \\frac{1}{2} \\text{ hrs} \\\\ = 25 \\times 3.6 \\text{ km}h^{-1} \\times 10.5 hrs \\\\= 945\\text{ km} \\\\ \\text{Note: A quick way to convert speed(in m/s)} \\\\ \\text{to speed(in km/h) is to multiply by 3.6} \\\\ \\text{While converting from km/h to m/s} \\\\ \\text{requires dividing by 3.6}`
    },
    {
      id: "Q5",
      text: ` \\text{ A boy walks 800m in 20 minutes.} \\\\ \\text{ Calculate his average speed in Km/h } \\\\ `,
      options: [
        { id: 0, text: "2.4", isCorrect: true },
        { id: 1, text: "4", isCorrect: false },
        { id: 2, text: "24", isCorrect: false },
        { id: 3, text: "6", isCorrect: false },
      ],
      answer: "2.4",
      working:`\\text{average speed (in Km/h)} = \\frac{800 m}{20 min} \\\\ = \\frac{800 \\div 1000 \\text{ km}}{20 \\div 60 \\text{ h}} \\\\ = \\frac{0.8}{0.3333} \\\\ = 2.4`
    },
    {
      id: "Q6",
      text: `\\text{It takes Kunle, who works twice as} \\\\ \\text{fast as Sade, 6 days to accomplish a task.}\\\\ \\text{Working together, how long will} \\\\ \\text{it take both of them to do the work? }`,
      options: [
        { id: 0, text: "12 \\text{ days}", isCorrect: false },
        { id: 1, text: "18 \\text{ days}", isCorrect: false },
        { id: 2, text: "4 \\text{ days}", isCorrect: true },
        { id: 3, text: "3 \\text{ days}", isCorrect: false },
      ],
      answer: "4 \\text{ days}",
      working:` \\text{rate of work } \\propto \\frac{1}{\\text{time on work}} \\\\ \\text{ Kunle's time on work } = 6 \\text{ days} \\\\ \\therefore  \\text{ Sade's time on work } = 12 \\text{ days} \\text{ (Recall she} \\\\ \\text{works twice slower than Kunle)} \\\\ \\text{ Kunle's rate of work } = \\frac{1}{6} \\text{ per day} \\\\ \\text{ Sade's rate of work } = \\frac{1}{12} \\text{ per day} \\\\  \\therefore \\text{ their collective work rate} = \\frac{1}{6} + \\frac{1}{12} \\\\ = \\frac{2 + 1}{12} \\\\ = \\frac{1}{4} \\text{ per day} \\\\  \\therefore \\text{ their collective time on the work} = \\frac{4}{1} \\text{ days} = 4 \\text{ days}`
    },
    {
      id: "Q7",
      text: `\\text{Working alone, it takes Mr Sada 14 days to} \\\\ \\text{accomplish a task. When joined by his son,} \\\\ \\text{they both finish the same work in 10 days.} \\\\ \\text{How long will it take his son to do } \\\\ \\text{the work alone?}`,
      options: [
        { id: 0, text: "45 \\text{ days}", isCorrect: false },
        { id: 1, text: "21 \\text{ days}", isCorrect: false },
        { id: 2, text: "70 \\text{ days}", isCorrect: false },
        { id: 3, text: "35 \\text{ days}", isCorrect: true },
      ],
      answer: "35 \\text{ days}",
      working: `\\text{If two persons A and B individually} \\\\ \\text{spend times } t_A \\text{ and } t_B \\\\ \\text{on a piece of work, then the } \\\\ \\text{collective time } t_C \\text{ they spend on the task} \\\\ \\text{is given by:}\\\\ \\frac{1}{t_C} = \\frac{1}{t_A} + \\frac{1}{t_B} \\\\  \\therefore \\text{in this instance, Mr Sada's time} = t_A = 14\\text{ days} \\\\ \\text{his son's time} = t_B = \\text{ ?} \\\\ \\text{but their collective time} = t_C = 10\\text{ days} \\\\ \\therefore \\text{using } \\frac{1}{t_C} = \\frac{1}{t_A} + \\frac{1}{t_B} \\\\ \\frac{1}{10} = \\frac{1}{14} + \\frac{1}{t_B} \\\\  \\therefore \\frac{1}{t_B} = \\frac{1}{10} - \\frac{1}{14} \\\\= \\frac{7 - 5}{70} \\\\= \\frac{1}{35}\\text{ per day} \\\\  \\therefore t_B = \\frac{35}{1} = 35\\text{ days} \\\\ \\therefore \\text{his son's time } = 35 \\text{ days}`
    },
    {
      id: "Q8",
      text: `\\text{Tunde and Shola can do a piece of work in} \\\\ \\text{18 days. Tunde can do it alone in x days,} \\\\ \\text{while Shola take 15 days longer to do it alone.} \\\\ \\text{Which of the following equations} \\\\ \\text{is satisfied by x?} `,
      options: [
        { id: 0, text: "x^2 - 5x - 18 = 0", isCorrect: false },
        { id: 1, text: "x^2 - 20x + 360 = 0 ", isCorrect: false },
        { id: 2, text: "x^2 - 21x - 270 = 0", isCorrect: true },
        { id: 3, text: "2x^2 + 42x - 190 = 0", isCorrect: false },
      ],
      answer: "x^2 - 21x - 270 = 0",
      working:`\\text{Using } \\frac{1}{t_C} = \\frac{1}{t_A} + \\frac{1}{t_B}\\\\ \\text{(Where } t_A \\text{= time spent by Tunde} \\\\  t_B =\\text{time spent by Shola, while} \\\\  t_C =\\text{time spent by both of them)} \\\\ \\therefore  \\frac{1}{18} = \\frac{1}{x} + \\frac{1}{x + 15} \\\\  \\frac{1}{18} = \\frac{x + 15 + x}{x(x + 15)} \\\\ x(x + 15) = 18(2x + 15) \\\\ x^2 + 15x = 36x + 270 \\\\ \\therefore x^2 -21x -270 = 0`
    },
    {
      id: "Q9",
      text: `\\text{Cosmos ought to drive at an average speed }  \\\\  \\text{of } x kmh^{-1} \\text{ to cover a given distance } \\\\ \\text{in a scheduled period } \\\\ \\text{of 4 hours. If he goes } 10 kmh^{-1} \\text{ slower, } \\\\ \\text{he will be 1 hour late. Find x}`,
      options: [
        { id: 0, text: "60 \\text{ km}h^{-1}", isCorrect: false },
        { id: 1, text: "40 \\text{ km}h^{-1}", isCorrect: false },
        { id: 2, text: "50 \\text{ km}h^{-1}", isCorrect: true},
        { id: 3, text: "30 \\text{ km}h^{-1}", isCorrect: false },
      ],
      answer: "50 \\text{ km}h^{-1}",
      working: `\\text{Recall that } \\text{distance = ave. speed } \\times \\text{time} \\\\ \\therefore 4x = 5(x -10) \\\\ \\text{(The idea here is that even though} \\\\ \\text{ave. speed and time spent between two points} \\\\ \\text{may vary, the distance covered remains the} \\\\ \\text{same, provided one maintains the same route.))} \\\\ \\therefore 4x = 5x - 50 \\\\ \\therefore  x = 50 \\text{ km}h^{-1}`
    },
    {
      id: "Q10",
      text: `\\text{In a 100m dash, athlete A gets a 5-second} \\\\  \\text{head start over athlete B. They run at } \\\\ \\text{average speeds 5 m/s and 10m/s respectively.} \\\\ \\text{How far is A from finish line at the time} \\\\ \\text{B just crosses it?}`,
      options: [
        { id: 0, text: "25 m", isCorrect: true },
        { id: 1, text: "30 m", isCorrect: false },
        { id: 2, text: "75 m", isCorrect: false },
        { id: 3, text: "50 m", isCorrect: false },
      ],
      answer: "25 m",
      working:`\\text{time spent on the race by:} \\\\ \\text{athlete A =} \\frac{distance}{ave. speed} = \\frac{100 m}{5} =20s \\\\ \\text{athlete B =} \\frac{distance}{ave. speed} = \\frac{100 m}{10}= 10s \\\\ \\therefore \\text{by the time B reaches finish line} \\\\ \\text{A has been running for 15s}  \\\\ \\text{(Recall A got a 5-second head start)}\\\\ \\text{And that means A has covered a distance }\\\\ \\text{= ave. speed } \\times \\text{ time} \\\\= 5 \\times 15 = 75m \\\\ \\text{which leaves him 25m behind B}`
    },
  ];
  

const Rate = () => {
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
              <Text text={"Rate"} />
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


export default Rate