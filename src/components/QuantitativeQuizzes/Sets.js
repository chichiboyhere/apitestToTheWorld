import React, { useEffect, useState } from "react";
import classes from "../AptitudeTests/AptitudeTests.module.css";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";
import Text from "../AptitudeTests/Text";
import MathJax from "react-mathjax";
import GetSolutionSets from "../AptitudeTests/GetSolutionSets";
import styles from "../../styles/Global";
import Card from "../UI/Card";
import Message from "../UI/Message";
import assets from "../../assets";


const questions = [
    {
      id: "Q1",
      text: `\\text{If X = {all prime factors of 44}} \\\\ \\text{and Y = {all prime factors of 60,}} \\\\ \\text{the elements of } X \\cup Y \\text{ and} \\\\ X \\cap Y \\text{ respectively are} \\text{ (UME)}`,
      options: [
        { id: 0, text: "\\text{{2, 4, 3, 5, 11} and {4}}", isCorrect: false },
        { id: 1, text: "\\text{{4, 3, 5, 11} and {3, 4}}", isCorrect: false },
        { id: 2, text: "\\text{{2, 5, 11} and {2}}", isCorrect: false },
        { id: 3, text: "\\text{{2, 3, 5, 11} and {2}}", isCorrect: true },
      ],
      answer: "\\text{{2, 3, 5, 11} and {2}}",
      img: ``,
      working: `X =\\text{{2, 11}} \\\\ Y= \\text{{2, 3, 5}} \\\\ \\text{So } X \\cup Y \\text{(i.e prime factors of both 44 and 60)} \\\\ = \\text{{2, 3, 5, 11}} \\\\ \\text{And } X \\cap Y \\text{(i.e prime factors common to} \\\\ \\text{both 44 and 60)} \\\\ = \\text{{2}}`
    },
    {
      id: "Q2",
      text: `\\text{Four members of a school first eleven} \\\\ \\text{cricket team are also members of the} \\\\ \\text{first fourteen rugby team. How many boys} \\\\ \\text{ play for at least one of the two teams?} \\\\ \\text{  (UME)}`,
      options: [
        { id: 0, text: "25", isCorrect: false },
        { id: 1, text: "21", isCorrect: true },
        { id: 2, text: "16", isCorrect: false },
        { id: 3, text: "3", isCorrect: false },
      ],
      answer: "21",
      img: <img src={assets.venn2} alt="Venn diagram2" style={{ maxHeight: 150, maxWidth: 250, margin: "0 auto"}}/>,
      working: `\\text{According to the Venn diagram above } \\\\ \\text{there are four boys in both} \\\\ \\text{the cricket and rugby teams. This} \\\\ \\text{leaves 7 boys who play cricket but not rugby} \\\\ \\text{and 10 boys who play rugby but not cricket} \\\\ \\text{So number of boys who play at least} \\\\ \\text{ one of the games } \\\\ = 7 + 4 + 10 = 21`
    },
    {
      id: "Q3",
      text: `\\text{If S =  } \\{ x : x^2 = 9 \\text{, x } > 4 \\} \\text{, then S}  \\\\ \\text{is equal to (UME)} `,
      options: [
        { id: 0, text: "4", isCorrect: false },
        { id: 1, text: "{0}", isCorrect: false },
        { id: 2, text: " \\varnothing", isCorrect: true },
        { id: 3, text: "\\{ \\varnothing \\}", isCorrect: false },
      ],
      answer: " \\varnothing",
      img: ``,
      working: `\\text{If } x^2 = 9 \\\\  \\therefore x = \\sqrt{9} = 3\\\\ \\text{But x > 4 }  \\therefore S = \\text{{}} \\text{ or } \\varnothing`
    },
    {
      id: "Q4",
      text: `\\text{Every one of a group of 12 market women}\\\\  \\text{sells at least one of the following food}\\\\ \\text{items: tomatoes, beans and yam.} \\\\ \\text{Five(5) woman sell tomatoes, 6 sell beans,  }  \\\\ \\text{ 6 sell yam and 2 sell tomatoes and beans} \\\\ \\text{ but none sell tomatoes and yam.} \\\\ \\text{How many women sell beans and yam?} \\\\ \\text{  (UME)}`,
      options: [
        { id: 0, text: "3", isCorrect: true },
        { id: 1, text: "4", isCorrect: false },
        { id: 2, text: "6", isCorrect: false },
        { id: 3, text: "8", isCorrect: false },
      ],
      answer: "3",
      img: <img src={assets.venn3} alt="Venn diagram3" style={{ maxHeight: 250, maxWidth: 250, margin: "0 auto"}}/>,
      working: `\\text{Based on the Venn diagram above} \\\\ 3 + 2 + 4 -x + x + 6 -x = 12 \\\\ 15 -x = 12 \\\\  \\therefore x = 3`
    },
    {
      id: "Q5",
      text: `\\text{A survey of 100 students in an} \\\\ \\text{institution shows that 80 students speak} \\\\  \\text{ Hausa and 20 students speak Igbo, while} \\\\ \\text{ only 9 students speak both language.} \\\\  \\text{ How many students speak} \\\\  \\text{ neither Hausa nor Igbo?} \\text{ (UME)}`,
      options: [
        { id: 0, text: "0", isCorrect: false },
        { id: 1, text: "9", isCorrect: true },
        { id: 2, text: "11", isCorrect: false },
        { id: 3, text: "20", isCorrect: false },
      ],
      answer: "9",
      img: <img src={assets.venn4} alt="Venn diagram4" style={{ maxHeight: 250, maxWidth: 250, margin: "0 auto"}}/>,
      working:` \\text{According to the Venn diagram above, } \\\\ \\text{The number of students who speak neither} \\\\ \\text{Hausa(H) nor Igbo(I) (i.e.} n(H \\cup I)'=x \\\\ \\text{ is given by:} \\\\  71 + 9 + 11 + x = 100 \\\\ \\therefore x = 100 - 91 = 9`
    },
    {
      id: "Q6",
      text: `\\text{In a school, 220 students offer} \\\\ \\text{Biology or Mathematics or both. 125 offer} \\\\ \\text{ Biology and 110 mathematics. How} \\\\ \\text{ many offer Biology but not Mathematics?} \\\\  \\text{ (UME) }`,
      options: [
        { id: 0, text: "95", isCorrect: false },
        { id: 1, text: "80", isCorrect: false },
        { id: 2, text: "125", isCorrect: false },
        { id: 3, text: "110", isCorrect: true },
      ],
      answer: "110",
      img: <img src={assets.venn} alt="Venn diagram" style={{ maxHeight: 150, maxWidth: 300, margin: "0 auto"}}/>,
      working:`\\text{Let the number of students who take}\\\\ \\text{both Biology(B) and Mathematics(M) be x.}\\\\ \\text{Now according to the Venn diagram above, } \\\\ \\text{the number of students who take } \\\\ \\text{both subjects is given by:} \\\\  125 -x + x + 110 - x = 220 \\\\ \\therefore - x = 220 - 235 = -15 \\\\ x = 15 \\\\ \\text{Hence, the number of students who take} \\\\ \\text{Biology but not Mathematics } \\\\ \\text{i.e } n(B \\cap M') =125 -x= 125 -15 = 110`
    },
    {
      id: "Q7",
      text: `\\text{A group of market women sell at least} \\\\ \\text{ one of yam, plantain and maize.} \\\\ \\text{12 of them sell maize, 10 sell yam and 14} \\\\ \\text{ sell plantain, 5 sell plantain and maize, }  \\\\  \\text{4 sell yam and maize, 2 sell yam and} \\\\ \\text{plantain only while 3 sell all the three} \\\\ \\text{items. How many women are in the group?} \\\\ \\text{   (UME) }`,
      options: [
        { id: 0, text: "20", isCorrect: false },
        { id: 1, text: "16", isCorrect: true },
        { id: 2, text: "4", isCorrect: false },
        { id: 3, text: "8", isCorrect: false },
      ],
      answer: "16",
      img: <img src={assets.venn5} alt="Venn diagram5" style={{ maxHeight: 250, maxWidth: 250, margin: "0 auto"}}/>,
      working: `\\text{Based on the Venn diagram above }\\\\ \\text{Total number of women in the group is}\\\\ 4 + 2 + 7 + 1 + 3 + 2 + 6 = 25 `
    },
    {
      id: "Q8",
      text: `\\text{Given:} \\\\
      \\text{U = {Even numbers between 0 and 30}} \\\\
      \\text{P = {Multiples of 6 between 0 and 30}} \\\\
      \\text{Q = {Multiples of 4 between 0 and 30}} \\\\
      \\text{Find } ( P \\cup Q )^c \\text{ (UME)} `,
      options: [
        { id: 0, text: "{2, 10, 14, 22, 26} ", isCorrect: true },
        { id: 1, text: " {0, 10, 14, 22, 26}", isCorrect: false },
        { id: 2, text: "{2,4, 14, 18, 26}", isCorrect: false },
        { id: 3, text: "{0, 2, 6, 22, 26}", isCorrect: false },
      ],
      answer: "\\text{{2, 10, 14, 22, 26}}",
      img: ``,
      working:`\\text{U = {2, 4, 6, 8, 10, ...28}} \\\\ \\text{P = {6, 12, 18, 24}} \\\\ \\text{Q = {4, 8, 12, 16, 20, 24, 28}} \\\\ P \\cup Q  = \\text{ {4, 6, 8, 12, 16, 18, 20, 24, 28})} \\\\ \\therefore ( P \\cup Q )^c =  \\text{{2, 10, 14, 22, 26}}`
    },
    {
      id: "Q9",
      text: `\\text{In a small village of 500 people,}  \\\\ \\text{350 speak the local language while 200} \\\\ \\text{speak pidgin English. What percentage} \\\\ \\text{of the population speak both. }  \\text{(UME)}`,
      options: [
        { id: 0, text: "\\text{ 30 %}", isCorrect: false },
        { id: 1, text: "\\text{ 10 %}", isCorrect: true },
        { id: 2, text: "\\text{ 50 %}", isCorrect: false },
        { id: 3, text: "\\text{ 14 %}", isCorrect: false },
      ],
      answer: "\\text{ 10 %}",
      img: ``,
      working: `\\text{Total number who speak the local language} \\\\ \\text{and pidgin English} = 350 + 200 = 550 \\\\ \\text{So the number of those who} \\\\ \\text{ speak both languages } = 550 - 500= 50\\\\ \\text{ And their percentage} = \\frac{50}{500} \\times 100 = \\text{ 10 %}`
    },
    {
      id: "Q10",
      text: `\\text{X and Y are two sets such that n(X) = 15} \\\\ \\text{n(Y) = 12 and }  n(X \\cap Y) = 7 \\\\ \\text{Find } n(X \\cup Y)  \\text{ (UTME)}`,
      options: [
        { id: 0, text: "21", isCorrect: false },
        { id: 1, text: "225", isCorrect: false },
        { id: 2, text: "15", isCorrect: false },
        { id: 3, text: "20", isCorrect: true },
      ],
      answer: "20",
      img: <img src={assets.venn6} alt="Venn diagram6" style={{ maxHeight: 150, maxWidth: 250, margin: "0 auto"}}/>,
      working:`\\text{ According to the Venn diagram above }  \\\\ n(X \\cup Y)  = (15 - 7) + 7 + (12 - 7) \\\\ = 8 + 7 + 5 = 20`
    },
  ];
  

const Sets = () => {
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
              <Text text={"Sets"} />
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
                  <GetSolutionSets
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


export default Sets