import React, { useState, useEffect } from "react";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";
import classes from "./AptitudeTests.module.css";
import Text from "./Text";
import questions from "./VerbalQuestionsThree";
import GetSolution from "./GetSolution";

import styles from "../../styles/Global";
import Card from "../UI/Card";



const VerbalTestThree = ({history}) => {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    const [showTime, setShowTime] = useState(true);
    // Verbal states
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isCorrection, setIsCorrection] = useState(false);
    const [startTest, setStartTest] = useState(false);
    const [showSavedResults, setShowSavedResults] = useState(false);
    
  
    
  
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
  
    
   
  
    const handleReset = () => {
      setIsActive(false);
      setTime(0);
      setStartTest(false);
      setScore(0);
      setCurrentQuestion(0);
    };
  
   
  
    // Implement close result
    const closeResultHandler = () => {
      setShowSavedResults(false);
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
              <Text text={'Verbal Test Three'}/>
              <ControlButtons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handleReset={handleReset}
              />
            </div>
            <div className={classes.resultDisplay}>
              {!showSavedResults && (
                <button onClick={fetchResultHandler}>Saved Results </button>
              )}
              {showSavedResults && (
                <VerbalResults
                  fetchVerbal={fetchVerbal}
                  onClose={closeResultHandler}
                />
              )}
            </div>
          </>
        )}
        {startTest && (
          <div className={classes.container}>
            {/* 1. Header  */}
            <h1 className={styles.h1Text}>Verbal Problems</h1>
  
            {/* 2. Current Score  */}
            <h2>Score: {score}</h2>
  
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
                <button onClick={() => restartGame()}>Restart </button> &nbsp;&nbsp;
                
                &nbsp;&nbsp;
                {score===20? <Message className={classes.successMessage}>Good job!</Message>:<button onClick={() => getCorrection()}>Get Answers </button>}
                </div>
                {isCorrection && <GetSolution questions={questions} onClose={closeAnswersHandler}/>}
              </div>
            ) : (
              <div className={classes.questioncard}>
                <h2>
                  Question: {currentQuestion + 1} out of {questions.length}
                </h2>
                <h3 className={classes.questiontext}>
                  {questions[currentQuestion].text}
                </h3>
  
                {/* List of possible answers  */}
                <ul>
                  {questions[currentQuestion].options.map((option) => {
                    return (
                      <li
                        key={option.id}
                        onClick={() => optionClicked(option.isCorrect)}
                      >
                        {option.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        )}
      </Card>
    );
}

export default VerbalTestThree