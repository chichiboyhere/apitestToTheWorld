import React, { useState } from 'react'
import TestModel from './TestModel'
import Card from '../UI/Card'
import Text from './Text'
import Buton from '../UI/Button'
import classes from "./AptitudeTests.module.css";

const StartTest = () => {
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
      <TestModel/>
      </>
     }
     
    </Card>
    </div>
  )
}

export default StartTest