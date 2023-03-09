import { React, useState, useRef, useEffect } from "react";
import classes from "../AptitudeTests/AptitudeTests.module.css";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import SubmissionConfirmer from "../UI/SubmissionConfirmer";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Text from "../AptitudeTests/Text"
import SolutionToVerbalTest from "./SolutionToVerbalTest";
import styles from "../../styles/Global";
import Message from "../UI/Message";

const VerbalTestModel = ({Quiz_Set, test_title }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [booleanOnSubmit, setBooleanOnSubmit] = useState(false);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [quizer, setQuizer] = useState(Quiz_Set);
  const [confirmSubmission, setConfirmSubmission] = useState("");
  const [timer, setTimer] = useState("00:05:00");
  const [isCorrection, setIsCorrection] = useState(false);

  let count = 0;
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onInputChange = (e) => {
    const nexState = quizer.map((card) => {
      if (card.id !== e.target.name) return card;
      return {
        ...card,
        options: card.options.map((opt) => {
          const checked = opt.Qu_options === e.target.value;
          return {
            ...opt,
            selected: checked,
          };
        }),
      };
    });
    
    setQuizer(nexState);
  };

  const getCorrection = () => {
    setIsCorrection(true);
  };

  // Implement close of Answers
  const closeAnswersHandler = () => {
    setIsCorrection(false);
  };

  const snackbarrender = () => {
    return open ? (
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        style={{ marginTop: "0px", width: "100%" }}
      >
        <MuiAlert elevation={6} variant="filled" onClose={handleClose}>
          
        </MuiAlert>
      </Snackbar>
    ) : null;
  };

  //Timer component

  const Ref = useRef(null);

  // The state for our timer
  //const [timer, setTimer] = useState("00:00:60");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the begining of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    //setTimer("00:00:00");
    setTimer("Ready? Go!");
    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec

    //if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you intend to add more time
    deadline.setSeconds(deadline.getSeconds() + 300);

    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  //end timer component

  const onsubmit = () => {
    let list = quizer;

    list.map((item) => {
      item.options.map((anslist) => {
        //  console.log("anslist.selected===>",anslist.selected)
        if (anslist.selected === true) {
          if (anslist.Qu_options === item.ans) {
            //   console.log("===>",anslist.Qu_options,item.ans)
            count = count + 1;
          }
        }
      });
    });
    setBooleanOnSubmit(true);
    setTotal(count);
    clearTimer();

   
  };

  const submitConfirm = () => {
    setConfirmSubmission({
      title: "Confirm Submission!",
      message:
        "Are you sure you want to submit? You might want to review your work within the time still left.",
    });
    return;
  };
  // Confirmation handler
  const confirmHandler = () => {
    onsubmit();
    setConfirmSubmission(null);
  };

  const cancelHandler = () => {
    setConfirmSubmission(null);
  };
  useEffect(() => {
    if (timer === "00:00:00") {
      onsubmit();
    }
  }, [timer]);

  return (
    <>
      {confirmSubmission && (
        <SubmissionConfirmer
          title={confirmSubmission.title}
          message={confirmSubmission.message}
          onConfirm={confirmHandler}
          onCancel={cancelHandler}
        />
      )}
      {booleanOnSubmit || timer === "00:00:00" ? (
        <div className={classes.finalresults}>
          <h1 className={styles.h1Text}>Final Results</h1>
          <h2>
            {total} out of {quizer.length} correct - (
            {(total / quizer.length).toFixed(2) * 100}%)
          </h2>
          <div>
            {(total === 20) ? (
              <Message className={classes.successMessage}>Good job!</Message>  
            )
            :
            (total < 20 && isCorrection) ?
            (
              <button onClick={closeAnswersHandler}>Close</button>
            )
            : (
              <button onClick={() => getCorrection()}>Get Answers </button>
            )}
            
          </div>
          {isCorrection && (
            <SolutionToVerbalTest
              quizer={quizer}
              onClose={closeAnswersHandler}
            />
          )}
        </div>
      ) : (
        <div className="Quiz_container_display">
          {quizer.map((item, index) => {
            if (Math.abs(activeStep - index) <= 0) {
              return (
                <div>
                  <div className={classes.stopwatch}>
                  <Text text={test_title} />
                    <div
                      style={{ fontSize: 40, fontWeight: 800, color: "red" }}
                    >
                      {timer}
                    </div>
                  </div>
                  <br></br>

                  <div className={classes.questioncard}>
                    
                      <h3 className={classes.questiontextThree}>
                      {index + 1}. {item.que}
                      </h3>
                      {item.options.map((ans, index_ans) => {
                        index_ans = index_ans + 1;
                        return (
                          <div
                            key={index_ans}
                            
                          >
                            <div style={{marginLeft:'30%', display:'flex', flexDirection: 'row'}}>
                            {ans.Qu_options}
                               &nbsp;&nbsp;
                              <input
                                key={index_ans}
                                type="radio"
                                name={item.id}
                                value={ans.Qu_options}
                                checked={!!ans.selected}
                                onChange={onInputChange}
                              />
                              
                            </div>
                          </div>
                        );
                      })}
                    
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}

          <div  className={classes.Quiz-MobileStepper}>
            <MobileStepper
              variant="progress"
              steps={quizer.length}
              position="static"
              activeStep={activeStep}
              nextButton={
                activeStep === quizer.length - 1 ? (
                  <Button size="small" onClick={submitConfirm}>
                    Submit
                  </Button>
                ) : (
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === quizer.length}
                  >
                    Next
                  </Button>
                )
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
              }
            />
          </div>
        </div>
      )}
      {snackbarrender()}
    </>
  );
};

export default VerbalTestModel;
