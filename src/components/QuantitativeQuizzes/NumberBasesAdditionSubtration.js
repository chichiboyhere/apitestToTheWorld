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
    text: `\\text{If } 101_2 + 111_2 + 100_2 + x = 10110_2, \\\\ \\text{find x in base 2 }`,
    options: [
      { id: 0, text: "10000", isCorrect: false },
      { id: 1, text: "111", isCorrect: false },
      { id: 2, text: "110", isCorrect: true },
      { id: 3, text: "1001", isCorrect: false },
    ],
    answer: "110",
    working: `\\text{First, add numbers on the left hand } \\\\ \\text{side(LHS)} 101_2 + 111_2 + 100_2 = 10000_2 \\\\ \\text{Next subtract the result of the LHS from the } \\\\  \\text{number on the right hand side(RHS):} \\\\ 10110_2 - 10000_2 = 110_2 \\\\  \\text{(See the steps taken in questions 4 and 6 } \\\\ \\text{for guidance)}`
  },
  {
    id: "Q2",
    text: `\\text{In what base is the following addition} \\\\ \\text{done? }3215 + 1324 + 2553 = 11540`,
    options: [
      { id: 0, text: "9", isCorrect: false },
      { id: 1, text: "8", isCorrect: false },
      { id: 2, text: "7", isCorrect: false },
      { id: 3, text: "6", isCorrect: true },
    ],
    answer: "6",
    working: `\\text{When the digits on the far right column} \\\\ \\text{ are added, we get 12, i.e: } 5 + 4 + 3  \\\\ \\text{= 12. Now the result on the RHS i.e. 0, } \\\\ \\text{shows that we are dealing with a base that} \\\\ \\text{is a factor of 12. And among the options only} \\\\ \\text{6 is a factor of 12} `
  },
  {
    id: "Q3",
    text: `\\text{If } 213_5  + p + 420_5 = 1421_5, \\text{find p}`,
    options: [
      { id: 0, text: "322_5", isCorrect: false },
      { id: 1, text: "233_5", isCorrect: true },
      { id: 2, text: "113_5", isCorrect: false },
      { id: 3, text: "1133_5", isCorrect: false },
    ],
    answer: "233_5",
    working: `\\text{On the RHS, } 213_5 + 420_5 = 1133_5 \\\\ \\text{ So p} = 1421_5 - 1133_5 = 233_5`
  },
  {
    id: "Q4",
    text: `\\text{Add up the following numbers in base} \\\\ \\text{three } 2112, 1021 \\text{ and } 1120`,
    options: [
      { id: 0, text: "12100", isCorrect: true },
      { id: 1, text: "12000", isCorrect: false },
      { id: 2, text: "11200", isCorrect: false },
      { id: 3, text: "10122", isCorrect: false },
    ],
    answer: "12100",
    working: `\\text{Starting with the digits on the far right,} \\\\ 2 + 1 + 0 = 3. \\text{ And considering} \\\\ \\text{the fact we're operating in base 3,} \\\\ \\text{we can't have a digit up to 3, so } \\\\ \\text{we divide 3 by the operating base, 3} \\\\ \\text{to get 1 remainder 0. We keep the 0 and carry} \\\\ \\text{the 1 over to the next column. Here, we } \\\\ \\text{have digits } 1 + 2  +2 \\\\ \\text{plus the 1 carried over from the first column:} \\\\ \\text{we get 6. Next 6, being greater than the} \\\\ \\text{operating base,3 is divided by 3 to yield 2}\\\\ \\text{ remainder 0. We keep 0 and carry over} \\\\ \\text{2 to the next column, i.e. the } \\\\ \\text{third column from the right and repeat}\\\\ \\text{the whole process until we arrive} \\\\ \\text{at the answer } 12100.`
  },
  {
    id: "Q5",
    text: `\\text{What is the sum of } \\\\ 142, 421 \\text{ and } 112 \\text{ in base 5?}`,
    options: [
      { id: 0, text: "2210", isCorrect: false },
      { id: 1, text: "3210", isCorrect: false },
      { id: 2, text: "1230", isCorrect: true },
      { id: 3, text: "1210", isCorrect: false },
    ],
    answer: "1230",
    working:`\\text{The procedure is similar to that in Q4} \\\\ \\text{ we only have to wrap numbers around}\\\\ \\text{base 5 this time around.}`
  },
  {
    id: "Q6",
    text: `2101_3 - 1212_3 = ?`,
    options: [
      { id: 0, text: "121_3", isCorrect: false },
      { id: 1, text: "111_3", isCorrect: false },
      { id: 2, text: "102_3", isCorrect: false },
      { id: 3, text: "112_3", isCorrect: true },
    ],
    answer: "112_3",
    working:`\\text{First write the numbers vertically,} \\\\ \\text{with the digits of } 2101_3 \\\\ \\text{right above the digits of } 1212_3 \\\\ \\text{And keep in mind that while you subtract} \\\\  \\text{a lower digit from the one right } \\\\  \\text{above it,if you have a reason to 'borrow 1'} \\\\ \\text{ from a neighboring digit, the '1'} \\\\ \\text{borrowed is equivalent to the operating base,} \\\\  \\text{3 in this case. So step 1: Start subtrating} \\\\ \\text{the numbers at the far right. Since 1 can't } \\\\ \\text{minus 2, we turn to the digit beside 1, 0.} \\\\ \\text{ Now '0' has nothing to offer so we turn to} \\\\ \\text{the digit before it, 1, from which we} \\\\ \\text{take 1. The '1' taken is equivalent to 3,} \\\\ \\text{ the operating base. This '3' is first added to} \\\\ \\text{the 'zero' on the second column from right,} \\\\ \\text{making it become 3. Hence we take '1' from } \\\\ \\text{this '3' making it 2, and move the '1'} \\\\ \\text{down to where we need it, the first} \\\\ \\text{digit on the far right, i.e. 1. Again the 1 we} \\\\ \\text{take is the equivalent of the base, i.e. 3. So} \\\\ \\text{on adding 3 to this 1 we get 4. Now we} \\\\ \\text{are able to do 4 - 2 to get 2. Next, we} \\\\ \\text{do the same for the other columns}\\\\ \\text{till we finally get }112_3 `
  },
  {
    id: "Q7",
    text: `404_6 + 235_6 - 554_6 = `,
    options: [
      { id: 0, text: "45_6", isCorrect: true },
      { id: 1, text: "54_6", isCorrect: false },
      { id: 2, text: "44_6", isCorrect: false },
      { id: 3, text: "55_6", isCorrect: false },
    ],
    answer: "45_6",
    working: `\\text{Follow the steps described in questions 4 }\\\\ \\text{and 6 above to get the answer } 45_6`
  },
  {
    id: "Q8",
    text: `\\text{If } x_7 - 16_7 = 13_7, \\text{ find x.}`,
    options: [
      { id: 0, text: "15", isCorrect: false },
      { id: 1, text: "32", isCorrect: true },
      { id: 2, text: "44", isCorrect: false },
      { id: 3, text: "65", isCorrect: false },
    ],
    answer: "32",
    working:`\\text{Collect like terms first:}\\\\ x_7 = 13_7 + 16_7 \\\\ \\text{Next follow the addition steps described in} \\\\ \\text{question 4 above and get 32}`
  },
  {
    id: "Q9",
    text: `\\text{Solve for x in: } \\\\x_5 + 14_5 = 33_5, \\text{ find x}`,
    options: [
      { id: 0, text: "13", isCorrect: false },
      { id: 1, text: "32", isCorrect: false },
      { id: 2, text: "24", isCorrect: false },
      { id: 3, text: "14", isCorrect: true },
    ],
    answer: "14",
    working: `\\text{Collect like terms first:} \\\\x_5  = 33_5 - 14_5 \\\\ \\text{Finally follow the steps taken in}\\\\ \\text{ question 6 above to get } 14`
  },
  {
    id: "Q10",
    text: `101_2 + 100_2 + 110_2 + 111_2 = `,
    options: [
      { id: 0, text: "11100", isCorrect: false },
      { id: 1, text: "10110", isCorrect: true },
      { id: 2, text: "11000", isCorrect: false },
      { id: 3, text: "10101", isCorrect: false },
    ],
    answer: "10110",
    working:`\\text{Follow the addition steps in question 4 above}`
  },
];

const NumberBasesAdditionSubtration = () => {
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
            <Text text={"Number Bases I (Addition and Subtraction)"} />
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

export default NumberBasesAdditionSubtration;
