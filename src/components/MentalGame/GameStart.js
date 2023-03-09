import React, { useState } from "react";
import MentalGame from "./MentalGame";
import classes from "./GameStart.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Instruction from "../UI/Instruction";
import styles from "../../styles/Global";



const GameStart = () => {
  const [isGameStart, setIsGameStart] = useState(false);
  const [tableIn, setTableIn] = useState("");
  const [gameInstruction, setGameInstruction] = useState("");
  const [enteredTable, setEnteredTable] = useState("");


  // Table change handler
  const tableChangeHandler = (event) => {
    setEnteredTable(event.target.value);
    setTableIn(event.target.value);
  };

  // Game Instruction
  const gameInstructionModal = () => {
    setGameInstruction({
      title: "Game Instruction",
      message:
        "The Mental Game is a multiplication game where you get to answer as many randomly generated multiplication problems as you can, within 60 seconds. You are required to specify the multiplication table limit you want to play then push the 'Start Game' button to get the game started. Once the game starts, you will be flashed a multiplication problem within the table limit you specified. You are to type in the answer to the problem in the input field below and press the 'Enter' button. This process will be repeated till 60 seconds elapses. Thanks.",
    });
    return;
  };

  // Confirmation handler
  const confirmHandler = () => {
    setGameInstruction(null);
  };

  


  // Start game handler
  const startGameHandler = () => {
    setIsGameStart(true);
  };

  // Stop game
  const stopGameHandler = () => {
    setIsGameStart(false);
    setEnteredTable("");
  };

  // Retake test handler
  const reTakehandler = () => {
    setIsGameStart(false);
    setEnteredTable("");
  };

  return (
    
    <Card className={classes.container}>
      <h1 className={`${styles.h1Text} ${styles.blackText}`}>Mental Game</h1>
      <Card className={classes.input}>
        <label htmlFor="enter_multiplication_table_limit">
          Enter Multiplication Table Limit
        </label>
        <input
          id="enter_multiplication_table_limit"
          type="number"
          value={enteredTable}
          onChange={tableChangeHandler}
          required
        />
      </Card>

      {!isGameStart && (
        <button
          disabled={enteredTable === "" ? true : false}
          onClick={startGameHandler}
          className={styles.btnPrimary}
        >
          Start Game
        </button>
      )}
      {isGameStart && (
        <MentalGame
          table={tableIn}
          onCancel={stopGameHandler}
          reTake={reTakehandler}
        />
      )}
      {gameInstruction && (
        <Instruction
          title={gameInstruction.title}
          message={gameInstruction.message}
          onConfirm={confirmHandler}
        />
      )}
      <div>
        <br></br>
      </div>
      <Button onClick={gameInstructionModal}>How to Play</Button>
    </Card>
    
  );
};
export default GameStart;