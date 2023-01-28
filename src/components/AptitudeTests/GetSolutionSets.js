import React from "react";
import MathJax from 'react-mathjax';
import classes from "./AptitudeTests.module.css"

function GetSolutionSets({ questions, onClose }) {
  
  return (
    <>
    <MathJax.Provider>
      {questions.map((question) => (
        <div key={question.id}>
          <div className={classes.solutionThree}>
           {question.id}: 
           <MathJax.Node formula={question.text} />
          </div>
          <br></br>
          <div className={classes.solutionThree}>
           Ans: <MathJax.Node formula={question.answer} />
          </div>
          <div className={classes.solutionThree}>
            {question.img}
            <MathJax.Node formula={question.working} />
          </div>
          <hr></hr>
        </div>
      ))}
      </MathJax.Provider>
      <div className={classes.finalresults}>
        <button onClick={onClose} >Close</button>
      </div>
    </>
  );
}

export default GetSolutionSets;
