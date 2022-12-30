import React, { useState } from "react";
import classes from '../AptitudeTests/AptitudeTests.module.css'
import GetSolution from "../AptitudeTests/GetSolution";
import styles from "../../styles/Global";
import Message from "../UI/Message";


function VerbalProblems({onClose}) {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrection, setIsCorrection] = useState(false);
  const [shortTest, setShortTest] = useState(false);;

  const questions = [
    {
      id: "Q1",
      text: "The FA president, not the referee and the match officials ..... to blame for the continued poor offitiating in the EPL.",
      options: [
        { id: 0, text: "are", isCorrect: false },
        { id: 1, text: "were", isCorrect: false },
        { id: 2, text: "was", isCorrect: false },
        { id: 3, text: "is", isCorrect: true },
      ],
      answer: "is",
    },
    {
      id: "Q2",
      text: "To powder one's nose",
      options: [
        { id: 0, text: "A lady's way of saying she needs to go to the toilet", isCorrect: true },
        { id: 1, text: "A lady's way of saying she needs to freshen up her make-up", isCorrect: false },
        { id: 2, text: "A lady's way of saying she needs to eat", isCorrect: false },
        { id: 3, text: "A lady's way of saying she needs some sleep", isCorrect: false },
      ],
      answer: "A lady's way of saying she needs to go to the toilet",
    },
    {
      id: "Q3",
      text: "Every woman ..... a man that can pamper her.",
      options: [
        { id: 0, text: "deserves", isCorrect: true },
        { id: 1, text: "deserved", isCorrect: false },
        { id: 2, text: "deserve", isCorrect: false },
        { id: 3, text: "don't deserve", isCorrect: false },
      ],
      answer: "deserves",
    },
    {
      id: "Q4",
      text: "The rich also .... ",
      options: [
        { id: 0, text: "cried", isCorrect: false },
        { id: 1, text: "cry", isCorrect: true },
        { id: 2, text: "cries", isCorrect: false },
        { id: 3, text: "laughs", isCorrect: false },
      ],
      answer: "cry",
    },
    {
      id: "Q5",
      text: "'The sun rises in the east and sets in the west', said the teacher.",
      options: [
        { id: 0, text: "The teacher said that the sun rose in the east and set in the west", isCorrect: false },
        { id: 1, text: "The teacher said that the sun rose in the east and sets in the west", isCorrect: false },
        { id: 2, text: "The teacher said that the sun rises in the east and sets in the west", isCorrect: true },
        { id: 3, text: "The teacher said that the sun usually rose in the east and set in the west", isCorrect: false },
      ],
      answer: "The teacher said that the sun rises in the east and sets in the west ",
    },
  ];

  // Helper Functions
  const randomizer = () => {
    // returns a random whole number in the questions array
    return Math.floor(Math.random() * questions.length);
  };
  const currentQues = randomizer();
  console.log(currentQues);

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
    }

    
  };


  const getCorrection = () => {
    setIsCorrection(true); 
    setShortTest(true);
  };
  

  return (
    <div className={classes.container}>
      {/* 1. Header  */}
      <h1 className={styles.h1Text}>Verbal Aptitude</h1>

      {/* 2. Current Score  */}
      <h2 className={styles.blackText}>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        <div className={classes.finalresults}>
          <h1 className={styles.h1Text}>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
            
          </h2>
          
          {score===5? <Message className={classes.successMessage}>Good job!</Message>:<button onClick={() => getCorrection()}>Get Answers </button>}
          {isCorrection && <GetSolution questions={questions} shortTest={shortTest}/>}
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
      <div className={classes.finalresults}>
        <button onClick={onClose} >Close</button>
      </div>
    </div>
  );
}

export default VerbalProblems;
