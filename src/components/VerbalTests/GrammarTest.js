import React, {useState} from 'react';
import VerbalTestModel from './VerbalTestModel';
import Quiz_Set from "./QuGrammar";

import Card from '../UI/Card';
import Text from '../AptitudeTests/Text';
import Buton from '../UI/Button';
import classes from '../AptitudeTests/AptitudeTests.module.css'


const GrammarTest = () => {
    const[startTest, setStartTest] = useState(false)
    const handleStart = () =>{
        setStartTest(true)
    }
  return (
    <div style={{minHeight: 400}}>
    <Card className={classes.containerWrapper} >
    
      {!startTest?
      
      <div className={classes.stopwatch}>
        <Text text={'Test of Grammar'} />
        <Buton onClick={handleStart}>Start Test</Buton>
      </div>
      :
      <>
      <VerbalTestModel Quiz_Set={Quiz_Set} test_title={"Test of Grammar"}/>
      </>
     }
     
    </Card>
    </div>)
}

export default GrammarTest;

