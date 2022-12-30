import React from "react";
import classes from "./AptitudeTests.module.css";

function GetSolution({ questions, onClose, shortTest }) {
  
  return (
    <>
      {questions.map((question) => (
        <div key={question.id}>
          <div style={{ color: "white", fontSize: 20 }}>
           {question.id}: {question.text}
          </div>
          <br></br>
          <div style={{ color: "white", fontSize: 20 }}>
           Ans: {question.answer}
          </div>
          <hr></hr>
        </div>
      ))}
      {!shortTest && <div className={classes.finalresults}>
        <button onClick={onClose} >Close</button>
      </div>}
    </>
  );
}

export default GetSolution;
