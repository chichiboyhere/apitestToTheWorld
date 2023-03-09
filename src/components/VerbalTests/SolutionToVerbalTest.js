import React from "react";
import classes from "../AptitudeTests/AptitudeTests.module.css";

function SolutionToVerbalTest({ quizer, onClose }) {
  return (
    <>
      
        {quizer.map((question) => (
          <div key={question.id}>
            <div className={classes.solutionThree}>
            {question.id}: {question.que} 
            </div>
            <br></br>
            <div className={classes.solutionThree}>
              Ans: {question.ans} 
            </div>
            <br></br>
            <div className={classes.solutionThree}>
                {question.explanation} 
            </div>

            <hr></hr>
          </div>
        ))}
     
      <div className={classes.finalresults}>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
}

export default SolutionToVerbalTest;
