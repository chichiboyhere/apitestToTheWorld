import React from "react";
import MathJax from "react-mathjax";
import classes from "./AptitudeTests.module.css";

function SolutionToNumerationTest({ quizer, onClose }) {
  return (
    <>
      <MathJax.Provider>
        {quizer.map((question) => (
          <div key={question.id}>
            <div className={classes.solutionThree}>
              <MathJax.Node formula={question.que} />
            </div>
            <br></br>
            <div className={classes.solutionThree}>
              Ans: <MathJax.Node formula={question.ans} />
            </div>

            <div className={classes.solutionThree}>
                <MathJax.Node formula={question.working} />
            </div>

            <hr></hr>
          </div>
        ))}
      </MathJax.Provider>
      <div className={classes.finalresults}>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
}

export default SolutionToNumerationTest;
