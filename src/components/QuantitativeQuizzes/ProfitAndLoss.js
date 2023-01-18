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
      text: `\\text{A car dealer bought a second-hand}  \\\\ \\text{car for N250,000 and spent N70,000} \\\\ \\text{refurbishing it. He then sold the} \\\\ \\text{ car for N400,000. What } \\\\ \\text{is the percentage gain?} \\text{ (UME)}`,
      options: [
        { id: 0, text: "60\\text{%}", isCorrect: false },
        { id: 1, text: "32\\text{%}", isCorrect: false },
        { id: 2, text: "25\\text{%}", isCorrect: true },
        { id: 3, text: "20\\text{%}", isCorrect: false },
      ],
      answer: "25\\text{%}",
      working: `\\text{Total cost price(C.P) }= N250,000 + N70,000\\\\= N320,000 \\\\ \\text{Profit }  N400,000- N320,000 = N80,000 \\\\ \\therefore \\text{% Profit} =\\frac{80,000}{320,000} \\times 100\\\\= \\frac{80,000}{320,000} \\times 100 = 25\\text{%} `
    },
    {
      id: "Q2",
      text: `\\text{A trader bought 100 oranges at 5}\\\\ \\text{ for N1.20, 20 oranges got spoilt } \\\\ \\text{and the remaining were sold at} \\\\ \\text{ 4 for N1.50. Find the} \\\\ \\text{percentage gain or loss.} \\text{ (UME)}`,
      options: [
        { id: 0, text: "30% gain", isCorrect: false },
        { id: 1, text: "25% gain", isCorrect: true },
        { id: 2, text: "30% loss", isCorrect: false },
        { id: 3, text: "25% loss", isCorrect: false },
      ],
      answer: "25% gain",
      working: `\\text{C.P }= \\frac{100}{5} \\times N1.20 = N24.00\\\\ \\text{S.P} = \\frac{80}{4} \\times N1.50 = N30.00 \\\\ \\text{ (Note: Only 80 oranges were sold as 20 got spoilt)} \\\\ \\therefore \\text{Profit made} = N30.00 - N24.00 = N6.00 \\\\ \\therefore \\text{% profit } = \\frac{6}{24} \\times 100=25% gain`
    },
    {
      id: "Q3",
      text: `\\text{A woman buys 270 oranges for}  \\\\ \\text{N1800.00 and sells at 5 for N40.00.} \\\\ \\text{What is her profit? } \\text{ (UME)}`,
      options: [
        { id: 0, text: "N2,160.00", isCorrect: false },
        { id: 1, text: "N1,620.00", isCorrect: false },
        { id: 2, text: "N630.00", isCorrect: false },
        { id: 3, text: "N360.00", isCorrect: true },
      ],
      answer: "N360.00",
      working: `\\text{C.P } = N1800.00\\\\ \\text{S.P} = \\frac{270}{5} \\times N40.00 = N2,160.00  \\\\ \\therefore \\text{Profit made} = N2,160 - N1,800 = N360.00 `
    },
    {
      id: "Q4",
      text: `\\text{A man made a profit of 5% when he} \\\\ \\text{ sold an article for N60,000.00. } \\\\ \\text{How much would he have sold the article to} \\\\ \\text{ make a profit of 26%} \\text{UME}`,
      options: [
        { id: 0, text: "N68,000", isCorrect: false },
        { id: 1, text: "N72,000", isCorrect: true },
        { id: 2, text: "N65,000", isCorrect: false },
        { id: 3, text: "N70,000", isCorrect: false },
      ],
      answer: "N72,000",
      working: `\\text{If he sold the artice at 5% proft}\\\\ \\text{his % S.P. } = 105\\text{% (i.e. 5% more than} \\\\ \\text{the C.P, which is 100% by default)} \\\\ \\text{However, if he had sold at 26% profit, instead,} \\\\ \\text{his %SP would have been} 126\\text{%} \\\\  \\therefore 105\\text{%} \\rightarrow N60,000 \\\\ \\text{and } 126\\text{%} \\rightarrow N x \\\\ \\text{Cross-multiply: }  105x = 126(60,000) \\\\ \\therefore x = \\frac{126 \\times 60000 }{105} = N72,000 \\\\ \\text{So he would have sold at N72,000} \\\\  \\text{to make a profit of }  26\\text{%}`
      
    },
    {
      id: "Q5",
      text: `\\text{A man bought a second-hand photocopying} \\\\ \\text{ machine for N34,000. He serviced it at a } \\\\ \\text{cost of N2,000 and then sold it at a} \\\\ \\text{profit of 15%. What was the selling price? (UME)}`,
      options: [
        { id: 0, text: "N37,550", isCorrect: false },
        { id: 1, text: "N40,400", isCorrect: false },
        { id: 2, text: "N41,400", isCorrect: true },
        { id: 3, text: "N42,400", isCorrect: false },
      ],
      answer: "N41,400",
      working:`\\text{Total cost price(C.P) }= N34,000 + N2,000\\\\= N36,000 \\\\ \\therefore \\text{SP } =  \\frac{115}{100} \\times  N36,000 = N41,400 \\\\ \\text{Alternatively, we could say} \\\\ \\text{% profit} = \\frac{profit}{CP} \\times 100 \\\\ \\therefore 15 = \\frac{profit}{N36,000} \\times 100 \\\\ \\therefore  \\text{profit} = \\frac{15 \\times  36000}{100} = 5400\\\\ \\therefore  \\text{SP = CP + profit} = 36000 + 5400 = N41,400`
    },
    {
      id: "Q6",
      text: `\\text{A woman bought a grinder for N60,000.} \\\\ \\text{She sold it at a loss of 15%.} \\\\ \\text{ How much did she sell it?} \\text{ (UME) }`,
      options: [
        { id: 0, text: "N53,000", isCorrect: false },
        { id: 1, text: "N52,000", isCorrect: false },
        { id: 2, text: "N51,000", isCorrect: true },
        { id: 3, text: "N50,000", isCorrect: false },
      ],
      answer: "N51,000",
      working:`\\text{Since she sold at a loss of 15%, her %SP } = 100 - 15  = 85% \\\\ \\text{So if 100%(i.e %CP)} \\rightarrow N60000 \\\\ \\therefore  85\\text{%(i.e %SP } = \\frac{85}{100} \\times 60000= N51,000`
    },
    {
      id: "Q7",
      text: `\\text{A trader bought 100 oranges at 5 for N40.00}  \\\\ \\text{and sold at  20 for N120.00. Find the profit} \\\\ \\text{or loss percent}  \\text{(WASSCE)} `,
      options: [
        { id: 0, text: "20\\text{% profit}", isCorrect: false },
        { id: 1, text: "20\\text{% loss}", isCorrect: false },
        { id: 2, text: "25\\text{% profit}", isCorrect: false },
        { id: 3, text: "25\\text{% loss}", isCorrect: true },
      ],
      answer: "25\\text{% loss}",
      working: `\\text{CP } = \\frac{100}{5} \\times  N40.00 = N800 \\\\ \\text{SP } = \\frac{100}{20} \\times  N120.00 = N600 \\\\ \\therefore \\text{loss recorded} = N800 - N600 = N200 \\\\ \\therefore \\text{ % loss} =\\frac{200}{800} \\times 100 = 25\\text{% loss}`
    },
    {
      id: "Q8",
      text: `\\text{A man sells his brand new car for } \\\\ \\text{N420,000 at a gain of 15%. What did} \\\\ \\text{ it cost him?}  \\text{(UTME)} `,
      options: [
        { id: 0, text: "N410,000", isCorrect: false },
        { id: 1, text: "N365,217", isCorrect: true },
        { id: 2, text: "N157,250", isCorrect: false },
        { id: 3, text: "N257,000", isCorrect: false },
      ],
      answer: "N365,217",
      working:`\\text{ %SP = 115% } \\rightarrow N420,000 \\\\ \\therefore  \\text{%(i.e %CP = 100%} = \\frac{100}{115} \\times 420000= N365,217 `
    },
    {
      id: "Q9",
      text: `\\text{A man bought a car for N800 and sold} \\\\ \\text{ it for N520. Find his loss per cent}  \\\\ \\text{(UTME)}`,
      options: [
        { id: 0, text: "15%", isCorrect: false },
        { id: 1, text: "25%", isCorrect: false },
        { id: 2, text: "35%", isCorrect: true },
        { id: 3, text: "10%", isCorrect: false },
      ],
      answer: "35%",
      working: ` \\text{The loss}  = N800 - N520 = N280  \\\\ \\therefore \\text{ % loss} = \\frac{loss}{CP} \\times 100\\\\  =  \\frac{280}{800} \\times 100 = 35%`
    },
    {
      id: "Q10",
      text: `\\text{Tolu bought 200 mangoes at 4 for ₦2.40.} \\\\ \\text{40 out of the mangoes got spoilt} \\\\ \\text{and the remaining were sold at 2 for ₦2.50.} \\\\ \\text{ Find the percentage profit or loss.} `,
      options: [
        { id: 0, text: "67\\text{% profit }", isCorrect: true },
        { id: 1, text: "30\\text{% profit }", isCorrect: false },
        { id: 2, text: "40\\text{% loss }", isCorrect: false },
        { id: 3, text: "30\\text{% loss }", isCorrect: false },
      ],
      answer: "67\\text{% profit }",
      working:`\\text{C.P }= \\frac{200}{4} \\times N2.40 = N120.00\\\\ \\text{S.P} = \\frac{160}{2} \\times N2.50 = N200.00 \\\\ \\text{ (Note: Only 160 oranges were sold as 40 got spoilt)} \\\\ \\therefore \\text{Profit made} = N200.00 - N120.00 = N80.00 \\\\ \\therefore \\text{% profit } = \\frac{80}{120} \\times 100=67\\text{% profit }`
    },
  ];
  

const ProfitAndLoss = () => {
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
              <Text text={"Percentages III(Profit and Loss)"} />
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


export default ProfitAndLoss