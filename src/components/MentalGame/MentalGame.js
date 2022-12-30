import React, { useState, useRef, useEffect } from "react";
import classes from "./MentalGame.module.css";
import Card from "../UI/Card";
import styles from "../../styles/Global";
import Button from "../UI/Button";


const MentalGame = (props) => {
  const [inputOne, setInputOne] = useState("1");
  const [inputTwo, setInputTwo] = useState("1");
  const [response, setResponse] = useState("");
  const [score, setScore] = useState("0");
  const [questionCount, setQuestionCount] = useState("0");
  const [isNotSubmitted, setIsNotSubmitted] = useState(true);
  const [verdict, setVerdict] = useState('');
  
  
  

  const updateResponse = (event) => {
    setResponse(event.target.value);
  };

  const inputKeyPress = (event) => {
    if (event.key === "Enter") {
      const answer = parseInt(response);
      if (answer === inputOne * inputTwo) {
        //Answer is correct
        setScore(parseInt(score) + 1);
        setInputOne(Math.ceil(Math.random() * props.table));
        setInputTwo(Math.ceil(Math.random() * 12));
        setQuestionCount(parseInt(questionCount) + 1);
        setResponse("");
      } else {
        //Answer is wrong
        setScore(parseInt(score) - 1);
        setResponse("");
      }
    }
  };

  
   

  //Timer component
  
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the begining of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    //setTimer("00:00:00");
    setTimer("Ready? Go!");
    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec

    //if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you intend to add more time
    deadline.setSeconds(deadline.getSeconds() + 60);

    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  

  // This is calculating the user's speed
  const speedCalculator = (marks, timeSpent) => {
    const speed = parseInt(marks) / parseInt(timeSpent);
    return speed.toFixed(2);
  };
  let speed = speedCalculator(parseInt(score), 60);

 
  useEffect(() =>{
    if (speed >= 0.45){
      setVerdict("Wow, that was quite fast! Good job!"); 
     
     }
     else if (speed < 0.45 && speed > 0.35){
      setVerdict("Your speed was good. There is room for improvement though!");
      
     }
     else{
      setVerdict("That wasn't fast enough. Try harder, next time!");
      
     }
  },[speed]);

  // Render the result when the timer counts down to 0 s;
  if (timer === "00:00:00") {
    return (
      <div className={classes.finalresults}>
        
        <div>
          <h1 className={styles.h1Text}>Time Up!</h1>
        </div>
        <div>
          You scored: {score} / {questionCount}- (
                  {(score / questionCount).toFixed(2) * 100}%)
        </div>
        <div>Your speed: {speed} answers/second</div>
        <div>{verdict}</div>
        
       
        &nbsp;
        <button onClick={props.reTake}>Retake</button>
      </div>
    );
  }
  

  return (
    <div className={classes.test}>
      <Card className={classes.input}>
        <h1>{timer}</h1>
        <h3>Question: {questionCount}</h3>
        <div className={classes.problem}>
          {inputOne} &times; {inputTwo}
        </div>
        <input
          onKeyPress={inputKeyPress}
          onChange={updateResponse}
          value={response}  
        />
        <h2>Score: {score}</h2>

        <Button onClick={props.onCancel}>Cancel</Button><br></br>
      </Card>
    </div>
  );
};

export default MentalGame;
