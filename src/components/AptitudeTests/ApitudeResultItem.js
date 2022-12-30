//import React, { useState } from 'react';
//import ResultTime from './ResultTime';
import '../MentalGame/ResultItem.css';
import Card from '../UI/Card'
import ResultTime from '../MentalGame/ResultTime';


const AptitudeResultItem =(props)=> {

  return (
  <li>
    <Card className="result-item">
      <ResultTime time={props.time}/>
      <div className="result-item__description">
        <h2>Score: {props.score}/20</h2>
        <div className="result-item__speed"> Score/Sec: {props.aptitudeSps} </div>
      </div>
    </Card>
   </li>
  );
}

export default AptitudeResultItem;
