import React, {useState} from 'react';
import TestModel from './TestModel';
import Quiz_Set from "./QuNumberAndNumeration";
import Card from '../UI/Card'
import Text from './Text'
import Buton from '../UI/Button'
import classes from "./AptitudeTests.module.css";


const NumberNumerationTest = () => {
    const[startTest, setStartTest] = useState(false)
    const handleStart = () =>{
        setStartTest(true)
    }
  return (
    <div style={{minHeight: 400}}>
    <Card className={classes.containerWrapper} >
    
      {!startTest?
      
      <div className={classes.stopwatch}>
        <Text text={'Number and Numeration'} />
        <Buton onClick={handleStart}>Start Test</Buton>
      </div>
      :
      <>
      <TestModel Quiz_Set={Quiz_Set} test_title={"Number and Numeration"}/>
      </>
     }
     
    </Card>
    </div>)
}

export default NumberNumerationTest;

