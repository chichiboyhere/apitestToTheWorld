import  React, { useState} from "react";
import classes from '../AptitudeTests/AptitudeTests.module.css'
//import { MathComponent } from "mathjax-react";
import GetSolution from "../AptitudeTests/GetSolution"
import styles from "../../styles/Global";
import Message from "../UI/Message";
  

function QuantitativeProblems ({onClose}){
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrection, setIsCorrection] = useState(false);
  const [shortTest, setShortTest] = useState(false);

    const questions = [
        {
          id: "Q1",
          text: `What is the average of the first four multiples of 11?`,
          options: [
            { id: 0, text: "27.5", isCorrect: true },
            { id: 1, text: "33", isCorrect: false },
            { id: 2, text: "22", isCorrect: false },
            { id: 3, text: "44.5", isCorrect: false },
          ],
          answer: "27.5",
        },
        {
          id: "Q2",
          text: `What is the difference in the place value of 4 in the number 4040?`,
          options: [
            { id: 0, text: "3960", isCorrect: true },
            { id: 1, text: "400", isCorrect: false },
            { id: 2, text: "40", isCorrect: false },
            { id: 3, text: "4040", isCorrect: false },
          ],
          answer: "3960",
        },
        {
          id: "Q3",
          text: `How much simple interest accrues on a sum of N10 000 saved at a rate of 2% per annum for 4 years?`,
          options: [
            { id: 0, text: "N2500", isCorrect: false },
            { id: 1, text: "N800", isCorrect: true },
            { id: 2, text: "N16000", isCorrect: false },
            { id: 3, text: "N200", isCorrect: false },
          ],
          answer: "N800",
        },
        {
          id: "Q4",
          text: `Garba bought 200 oranges for N2000 and sold them in heaps of 4 at N50 per heap. Calculate his percentage profit or loss.`,
          options: [
            { id: 0, text: "20%", isCorrect: false },
            { id: 1, text: "25%", isCorrect: true },
            { id: 2, text: "15%", isCorrect: false },
            { id: 3, text: "30%", isCorrect: false },
          ],
          answer: "25%",
        },
        {
          id: "Q5",
          text: `Five years ago, a woman was five times as old as her daughter. In ten years' time, she will be twice as old as her daughter. How old is the woman at the moment?`,
          options: [
            { id: 0, text: "28 years", isCorrect: false },
            { id: 1, text: "20 years", isCorrect: false },
            { id: 2, text: "22 years", isCorrect: false },
            { id: 3, text: "30 years", isCorrect: true },
          ],
          answer: "30 years",
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

    if (currentQuestion + 1 < 5) {
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
      <h1 className={styles.h1Text}>Quantitative Problems</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        <div className={classes.finalresults}>
          <h1 className={styles.h1Text}>Final Results</h1>
          <h2>
            {score} out of 5 correct - (
            {(score / 5).toFixed(2) * 100}%)
          </h2>
          {score===5? <Message className={classes.successMessage}>Good job!</Message>:<button onClick={() => getCorrection()}>Get Answers </button>}
          {isCorrection && <GetSolution questions={questions} shortTest={shortTest} />}
        </div>
      ) : (
        <div className={classes.questioncard}>
          <h2>
            Question: {currentQuestion + 1} out of 5
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
export default QuantitativeProblems ;
