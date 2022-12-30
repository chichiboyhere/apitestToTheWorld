import React, { useState } from "react";
import VerbalProblems from "../../components/AptitudeShortTests/VerbalProblems";
import QuantitativeProblems from "../../components/AptitudeShortTests/QuantitativeProblems";
import Features from "../../components/Features";
import Download from "../../components/Download";
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
        title="Welcome to Apitest, your One-Stop Online Quantitative, Verbal and Mental aptitude tests."
        description="We are dedicated to bringing you world-class quizzes and tests aimed at bringing out the best in your computational and verbal skills."
        mockupImg={assets.africanStudent}
        banner="banner"
      />
      <SectionWrapper
        title="The Quantitative Aptitude and Verbal Test"
        description="The Quantitative Aptitude is a test of the student's computational
        skills.  You will be
        flashed a mathematical problem with four options from which you're to
        pick an answer. If the option picked is correct, your score will be
        increased by one, else it remains the same. The Verbal Aptitude, on the other hand tests how good the students is in communication,
        via written words. At the end of each of the tests you will receive a final score in percentage.
        You will also get your score per second(SPS) -- which
        basically judges the rate at which you proferred a solution to the
        problems. That is your score divided by the time you spent on the
        test."
        mockupImg={assets.fullSizeOriginal}
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
        mockupImg={assets.cov_child_pupils}
        reverse
        linkMental
      />
      <SectionWrapper
        title="In conclusion"
        description="In all three tests you'll have an option to save your results. This is
        useful if you want to keep track of your performances in the tests."
        mockupImg={assets.collegestudent}
        banner="banner02"
        link
      />
      <Download />
    </>
  );
};

export default StartingPageContent;
