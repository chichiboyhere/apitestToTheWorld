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
      text: `\\text{Simplify } 3 -2 \\div \\frac{4}{5} + \\frac{1}{2} \\\\ \\text{(UME)}`,
      options: [
        { id: 0, text: "1\\frac{3}{4}", isCorrect: false },
        { id: 1, text: "-1", isCorrect: false },
        { id: 2, text: "1\\frac{3}{10}", isCorrect: false },
        { id: 3, text: "1", isCorrect: true },
      ],
      answer: "1",
      working: `\\text{We solve the problem obeying BODMAS:} \\\\ 3 -2 \\div \\frac{4}{5} + \\frac{1}{2}  \\\\ = 3 -\\frac{2}{1} \\times \\frac{5}{4} + \\frac{1}{2} \\\\ =  3 -\\frac{5}{2} + \\frac{1}{2} \\\\ = \\frac{6 - 5 + 1}{2} \\\\ \\text{(Subtraction and Addition are} \\\\ \\text{ hierarchical equals)} \\\\ = \\frac{2}{2} \\\\ = 1`
    },
    {
      id: "Q2",
      text: `\\text{Simplify } \\frac{1}{2} + \\frac{3}{4} of  \\frac{24}{9} \\div \\frac{4}{7} -6 `,
      options: [
        { id: 0, text: "1", isCorrect: false },
        { id: 1, text: "3", isCorrect: false },
        { id: 2, text: "2", isCorrect: false },
        { id: 3, text: "-2", isCorrect: true },
      ],
      answer: "-2",
      working: `\\frac{1}{2} + \\frac{3}{4} of  \\frac{24}{9} \\div \\frac{4}{7} -6  \\\\ =\\frac{1}{2} + \\frac{3}{4} \\times  \\frac{24}{9} \\div \\frac{4}{7} -6   \\\\ = \\frac{1}{2} + \\frac{2}{1} \\times  \\frac{7}{4}  -6  \\\\ = \\frac{1}{2} +  \\frac{7}{2}  -6 \\\\ 4-6 \\\\ = -2 `
    },
    {
      id: "Q3",
      text: `\\text{Simplify } 2\\frac{5}{12} - 1\\frac{7}{8} \\times \\frac{4}{5}`,
      options: [
        { id: 0, text: "\\frac{5}{6}", isCorrect: false },
        { id: 1, text: "\\frac{1}{12}", isCorrect: false },
        { id: 2, text: "\\frac{11}{12}", isCorrect: true },
        { id: 3, text: "\\frac{7}{12}", isCorrect: false },
      ],
      answer: "\\frac{11}{12}",
      working: `2\\frac{5}{12} - 1\\frac{7}{8} \\times \\frac{4}{5} \\\\ = \\frac{29}{12} - \\frac{15}{8} \\times \\frac{4}{5}  \\\\ = \\frac{29}{12} - \\frac{3}{2}  \\\\ = \\frac{29 -18}{12} \\\\ = \\frac{11}{12} `
    },
    {
      id: "Q4",
      text: `\\text{Simplify } \\frac{1\\frac{1}{4} + \\frac{7}{9}}{1\\frac{4}{9} - 2\\frac{2}{3} \\times \\frac{9}{64} }\\text{(WASSCE)}`,
      options: [
        { id: 0, text: " 1\\frac{19}{77}", isCorrect: false },
        { id: 1, text: "1\\frac{69}{77}", isCorrect: true },
        { id: 2, text: " 2\\frac{9}{77}", isCorrect: false },
        { id: 3, text: "1\\frac{16}{77}", isCorrect: false },
      ],
      answer: "1\\frac{69}{77}",
      working: `\\frac{1\\frac{1}{4} + \\frac{7}{9}}{1\\frac{4}{9} - 2\\frac{2}{3} \\times \\frac{9}{64}} \\\\ = \\frac{\\frac{5}{4} + \\frac{7}{9}}{\\frac{13}{9} - \\frac{8}{3} \\times \\frac{9}{64}} \\\\  = \\frac{\\frac{45 + 28}{36} }{\\frac{13}{9} - \\frac{3}{8}}  \\\\ = \\frac{\\frac{73}{36} }{\\frac{104 - 27}{72}}\\\\  = \\frac{\\frac{73}{36} }{\\frac{77}{72}} \\\\ = \\frac{73}{36} \\times \\frac{72}{77} \\\\ = \\frac{146}{77} \\\\ = 1\\frac{69}{77}`
    },
    {
      id: "Q5",
      text: `\\text{Simplify } \\frac{3\\frac{2}{3} \\times \\frac{5}{6} \\times \\frac{2}{3}}  {\\frac{11}{15} \\times \\frac{3}{4} \\times \\frac{2}{27}}\\text{ [UTME]}`,
      options: [
        { id: 0, text: "5\\frac{2}{3}", isCorrect: false },
        { id: 1, text: "30", isCorrect: false },
        { id: 2, text: "4\\frac{1}{3}", isCorrect: false },
        { id: 3, text: "50", isCorrect: true },
      ],
      answer: "50",
      working:`\\frac{3\\frac{2}{3} \\times \\frac{5}{6} \\times \\frac{2}{3}}  {\\frac{11}{15} \\times \\frac{3}{4} \\times \\frac{2}{27}} \\\\ = \\frac{\\frac{11}{3} \\times \\frac{5}{6} \\times \\frac{2}{3}}  {\\frac{11}{15} \\times \\frac{3}{4} \\times \\frac{2}{27}} \\\\ = \\frac{\\frac{55}{27}} {\\frac{11}{270}} \\\\ = \\frac{55}{27} \\div \\frac{11}{270} \\\\ = \\frac{55}{27} \\times \\frac{270}{11} \\\\ = 50`
    },
    {
      id: "Q6",
      text: `\\text{Simplify } 2\\frac{1}{6} - \\frac{3}{14} of \\bigl(2\\frac{1}{3} \\div \\frac{3}{5} \\bigr)`,
      options: [
        { id: 0, text: "1\\frac{2}{3}", isCorrect: false },
        { id: 1, text: "1\\frac{3}{5}", isCorrect: false },
        { id: 2, text: "1\\frac{1}{3}", isCorrect: true },
        { id: 3, text: "1\\frac{5}{6}", isCorrect: false },
      ],
      answer: "1\\frac{1}{3}",
      working:`2\\frac{1}{6} - \\frac{3}{14} of \\bigl(2\\frac{1}{3} \\div \\frac{3}{5} \\bigr) \\\\ = \\frac{13}{6} - \\frac{3}{14} of \\bigl(\\frac{7}{3} \\div \\frac{3}{5} \\bigr) \\\\ = \\frac{13}{6} - \\frac{3}{14} of \\bigl(\\frac{7}{3} \\times \\frac{5}{3} \\bigr)\\\\ \\frac{13}{6} - \\frac{3}{14} \\times \\frac{35}{9}   \\\\ = \\frac{13}{6} - \\frac{5}{6} \\\\ = \\frac{8}{6} \\\\ = 1\\frac{1}{3}`
    },
    {
      id: "Q7",
      text: `\\text{Simplify }  \\frac{ \\frac{8}{3} + \\bigl(\\frac{3}{4} \\bigr)^2 - \\frac{1465}{528} }{ \\frac{1}{2} \\div \\bigl(\\frac{7}{13} of \\bigl( \\frac{149}{35} - \\frac{3}{7}  \\times \\frac{6}{15} \\bigr)\\bigr)}`,
      options: [
        { id: 0, text: "5", isCorrect: false },
        { id: 1, text: "4", isCorrect: false },
        { id: 2, text: "3", isCorrect: false },
        { id: 3, text: "2", isCorrect: true },
      ],
      answer: "2",
      working: `\\frac{ \\frac{8}{3} + \\frac{9}{16}  - \\frac{1465}{528} }{ \\frac{1}{2} \\div \\bigl(\\frac{7}{13} of \\bigl( \\frac{149}{35} - \\frac{6}{35}  \\bigr)\\bigr)} \\\\ = \\frac{ \\frac{1408 + 297 - 1465}{528} }{ \\frac{1}{2} \\div \\bigl(\\frac{7}{13} of \\frac{143}{35} \\bigr)} \\\\ = \\frac{ \\frac{240}{528} }{ \\frac{1}{2} \\div \\frac{11}{5} } \\\\ = \\frac{ \\frac{240}{528} }{ \\frac{1}{2} \\times \\frac{5}{11} } \\\\ = \\frac{ \\frac{240}{528} }{ \\frac{5}{22} } \\\\ =  \\frac{240}{528} \\times \\frac{22}{5} \\\\ = 2`
    },
    {
      id: "Q8",
      text: `\\text{Adunni spent one-fifth of her pocket } \\\\ \\text{money on transport fare. She then spent} \\\\ \\text{four-fifth of the remainder on } \\\\ \\text{textbooks and has N800 left. How} \\\\ \\text{much did she spend on textbooks?}`,
      options: [
        { id: 0, text: "N5000", isCorrect: false },
        { id: 1, text: "N3200", isCorrect: true },
        { id: 2, text: "N1000", isCorrect: false },
        { id: 3, text: "N1500", isCorrect: false },
      ],
      answer: "N3200",
      working:`\\text{If we assume that her pocket money} \\\\ \\text{ was 1 originally, then:} \\\\ \\text{Fraction spent on transport fare} =  \\frac{1}{5} \\\\ \\text{So the remainder } = 1 - \\frac{1}{5} = \\frac{4}{5} \\\\ \\therefore \\text{fraction spent on textbooks} = \\frac{4}{5} \\text{ of }\\frac{4}{5} \\\\= \\frac{16}{25} \\\\ \\therefore \\text{the new remainder} = \\frac{4}{5} - \\frac{16}{25} = \\frac{20 -16}{25} \\\\ = \\frac{4}{25} \\\\ \\text{This last remainder is equivalent to N800} \\\\ \\therefore \\text{Original pocket money } = \\frac{25}{4} \\times N800 \\\\ = N5000 \\\\  \\text{So amount spent on textbooks:} \\\\ \\frac{16}{25} \\text{ of }  N5000 = N3200`
    },
    {
      id: "Q9",
      text: `\\text{Osaro spends } \\frac{1}{2} \\text{ of her money on gift} \\\\  \\text{items, }\\frac{2}{5} \\text{ on clothing and } \\frac{1}{15} \\text{ on snacks} \\\\ \\text{and still has N250. How much did she } \\\\ \\text{have originally?}`,
      options: [
        { id: 0, text: "N5000", isCorrect: false },
        { id: 1, text: "N8500", isCorrect: false },
        { id: 2, text: "N7500", isCorrect: true },
        { id: 3, text: "N892", isCorrect: false },
      ],
      answer: "N7500",
      working: `\\text{The fraction of her money spent } \\\\ = \\frac{1}{2} + \\frac{2}{5} + \\frac{1}{15} \\\\ = \\frac{15 + 12 + 2}{30} = \\frac{29}{30} \\\\ \\therefore \\text{ the remainder} = 1 - \\frac{29}{30} = \\frac{1}{30} \\\\ \\text{Hence original amount = } \\frac{30}{1} \\times N250 \\\\= N7500 `
    },
    {
      id: "Q10",
      text: `\\text{Half of the water in a container} \\\\ \\text{was used for washing clothes.} \\\\ \\frac{1}{4} \\text{of the remainder was used for cooking, } \\\\ \\text{thereby saving the remaining 15 litres} \\\\ \\text{for drinking. How much water} \\\\ \\text{was in the container originally?}`,
      options: [
        { id: 0, text: "100 \\text{ litres.}", isCorrect: false },
        { id: 1, text: "50 \\text{ litres.}", isCorrect: false },
        { id: 2, text: "24 \\text{ litres.}", isCorrect: false },
        { id: 3, text: "40 \\text{ litres.}", isCorrect: true },
      ],
      answer: "40 \\text{ litres.}",
      working:`\\text{Let the original amount of water  } \\\\ \\text{in the container be 1} \\\\ \\text{Hence fraction used for washing:}\\frac{1}{2} \\\\ \\therefore \\text{ the remainder: } 1 - \\frac{1}{2} = \\frac{1}{2} \\\\ \\text{Hence amount used for cooking:} \\frac{1}{4} of \\frac{1}{2} = \\frac{1}{8} \\\\ \\text{New remainder: } \\frac{1}{2} - \\frac{1}{8} = \\frac{4 - 1}{8} = \\frac{3}{8} \\\\ \\text{Hence original amount:} \\frac{8}{3} \\text{ of } 15 \\text{ litres } \\\\ = 40 \\text{ litres.}`
    },
  ];
  

const Fractions = () => {
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
              <Text text={"Fractions"} />
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

export default Fractions