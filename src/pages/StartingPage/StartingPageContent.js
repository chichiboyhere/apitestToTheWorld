import React, { useState } from "react";
import VerbalProblems from "../../components/AptitudeShortTests/VerbalProblems";
import QuantitativeProblems from "../../components/AptitudeShortTests/QuantitativeProblems";
import Features from "../../components/Features";
import SectionWrapper from "../../components/SectionWrapper";
import assets from "../../assets";


const StartingPageContent = () => {
  const [isGameStart, setIsGameStart] = useState(false);
  const [isVerbalGameStart, setIsVerbalGameStart] = useState(false);
  

  const startGameHandler = () => {
    setIsGameStart(true);
  };

  const startVerbalGameHandler = () => {
    setIsVerbalGameStart(true);
  };
  // Implement close result
  const closeResultHandler = () => {
    setIsGameStart(false);
  };

  const closeVerbalResultHandler = () => {
    setIsVerbalGameStart(false);
  };
  return (
    <>
      <SectionWrapper
        title="Welcome to Apitest, Your Online Centre of Academic Excellence "
        description="Apitest is an online educational resourse specifically targeted at helping secondary level students ace their final examinations. Our team of vastly experienced teachers boast of world-class teaching techniques which they have put together in concise lesson notes and videos for students imbibe easily."
        mockupImg={assets.welcome_pic2}
        banner="banner"
      />
      <SectionWrapper
        title="Topical Quizzes and Broad-Branch Tests"
        description="Learning is never complete without practice. We offer UTME, WASSCE and NECO quizzes, aimed at bringing out the best in the student. Each quiz has ten questions based on a sub-section of a topic in the subject. You will be
        flashed a problem with four options from which you're to
        pick an answer. If the option picked is correct, your score will be
        increased by one, else it remains the same.  At the end of each of quiz you will receive a final score in percentage.
        You will also get your score per second(SPS) -- which
        basically judges the rate at which you proferred a solution to the
        problems. That is your score divided by the time you spent on the
        test. This is then followed by a detailed solution of each of the questions. The tests are not much different from the quizzes except that each test boasts of twenty questions from a branch(not just a topic) of the syllabus. You also get a chance to navigate back and forth to check or uncheck your chosen answers."
        mockupImg={assets.wlc_pic}
        reverse
      />
      {!isGameStart && !isVerbalGameStart && (
        <Features
          startTheGame={startGameHandler}
          startTheVerbalGame={startVerbalGameHandler}
        />
      )}

      {isGameStart && <QuantitativeProblems onClose={closeResultHandler} />}

      {isVerbalGameStart && (
        <VerbalProblems onClose={closeVerbalResultHandler} />
      )}
      <SectionWrapper
        title="The Mental Game"
        description="The Mental Game is a multiplication game where you get to answer as
        many randomly generated multiplication problems as you can, within 60
        seconds. You are required to specify the multiplication table limit
        you want to play then push the 'Start Game' button to get the game
        started. Once the game starts, you will be flashed a multiplication
        problem within the table limit you specified. You are to type in the
        answer to the problem in the input field below and press the 'Enter'
        button. This process will be repeated till 60 seconds elapses."
        mockupImg={assets.covenant_child_pupil}
        reverse
        linkMental
      />
      {/* <SectionWrapper
        title="In conclusion"
        description="In all three tests you'll have an option to save your results. This is
        useful if you want to keep track of your performances in the tests."
        mockupImg={assets.collegestudent}
        banner="banner02"
        link
      />
      <Download /> */}
    </>
  );
};

export default StartingPageContent;
