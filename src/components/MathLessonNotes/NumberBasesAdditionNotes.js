import React from 'react';
import classes from "../AptitudeTests/AptitudeTests.module.css";
import MathJax from 'react-mathjax';
import Card from '../UI/Card';
import assets from '../../assets';
import { Link } from 'react-router-dom';


const NumberBasesAdditionNotes = () => {
    const text1 =`\\text{ADDITION AND SUBTRACTION IN } \\\\ \\text{NUMBER BASES} \\\\ \\text{Example 1: Add up the following numbers} \\\\ \\text{in base three: 2112, 1021, 1120 and 2121 } \\\\ \\text{Solution:} \\\\ \\text{ While operating in a given base, the} \\\\ \\text{highest digit should be less than that base } \\\\ \\text{by one.} \\\\ \\text{Now since we're operating in base 3,} \\\\ \\text{the highest digit is 2.}`
    const text2=`\\text{NB: The circled numbers are the} \\\\ \\text{quotients carried over.} \\\\ \\text{Steps taken: All the digits to the far right} \\\\ \\text{ are first added} \\\\ \\text{i.e 2 + 1 + 0 + 1 = 4. Since we're } \\\\ \\text{operating in base 3, we can't have 4, so } \\\\ \\text{we divide 4 by 3(the operating base)} \\\\ 4 \\div 3 = 1 \\text{ remainder 1}. \\\\ \\text{We write down the remainder and carry} \\\\ \\text{the quotient(i.e answer) to the } \\\\ \\text{next column.} \\\\ \\text{In the second column from the far right} \\\\ \\text{we add up } 1 + 1 + 2+ 2 + 2 = 8 \\\\ \\text{And now } 8 \\div 3 = 2 \\text{ remainder 2. We } \\\\ \\text{record the remainder and carry the} \\\\ \\text{ quotient to the next column.} \\\\ \\text{ The third column from the right carries} \\\\ \\text{on just like the first two; and so does} \\\\ \\text{the last column(i.e the first column } \\\\ \\text{from the left)}`
    const text3 =`\\text{Example 2:} \\\\ \\text{If} 201_6 + 411_6 + P_6  + 113_6 \\\\  = 1404_6  \\text{, find P.} \\\\ \\text{Solution:} \\\\ \\text{The easiest approach here is to first} \\\\ \\text{add up all the numbers on the left } \\\\ \\text{hand side of the equation} \\\\ \\text{ (except of course )}P_6 \\text{because we } \\\\ \\text{don't know its value yet. Don't forget } \\\\ \\text{that we're operating in base 6 on this one}  \\\\ \\text{So}`
    const text4 =`\\text{Note that only in the last column} \\\\ \\text{ from the right(i.e. the first column} \\\\ \\text{from the left)} \\\\ \\text{did we have a sum exceeding 6} \\\\ \\text{i.e  } 2 +4 + 1 = 7 \\\\ \\text{Hence: } 7 \\div 6 = 1 \\text{ remainder 1}\\\\ \\text{Finally,} \\\\ P_6 = 1404_6 - 1125_6 \\\\ \\text{i.e}`
    const text5 =`\\text{So  } P = 235_6 \\\\ \\text{Steps taken:} \\\\ \\text{From the far right i.e } 4 -5  \\\\ \\text{we can't subtract 5 from 4 so we move to} \\\\ \\text{the nearest digit with a significant figure } \\\\ \\text{i.e 4, in the third column.} \\\\ \\text{ We take 1 from 4 thereby leaving} \\\\ P_6 \\text{it with 3. That '1' we have taken} \\\\ \\text{is equivalent to our operating base: 6}  \\\\ \\text{We add 6 to the second digit  from the }  \\\\ \\text{right i.e 6 + 0 = 6. We then take 1 }  \\\\ \\text{from 6, leaving it with 5 as shown} \\\\ \\text{in the middle circle. Once again the '1'} \\\\ \\text{we have taken is equivalent to 6,} \\\\ \\text{our operating base. We then add 6 to } \\\\ \\text{4 to get 10. So 10 - 5 =5, and so on}`
  return (
    <Card className={classes.containerWrapper}>
    <div className={classes.questioncard}>
        
      <MathJax.Provider>
                
                <div className={classes.solutionThree}>
                
                  <MathJax.Node formula={text1} />
                  <img src={assets.numberAdditionWhite} alt="Number bases Addition in base 3, figure 1" style={{ maxHeight: 200, maxWidth: 200, margin: "0 auto"}}/> 
                  <MathJax.Node formula={text2} />
                  <MathJax.Node formula={text3} />
                  <img src={assets.numberAdditionWhite2} alt="Number bases Addition in base 3, figure 2" style={{ maxHeight: 150, maxWidth: 150, margin: "0 auto"}}/> 
                  <MathJax.Node formula={text4} />
                  <img src={assets.numberAdditionWhite3} alt="Number bases Addition in base 3, figure 3" style={{ maxHeight: 150, maxWidth: 150, margin: "0 auto"}}/>
                  <MathJax.Node formula={text5} />
                </div>

        </MathJax.Provider>
        <Link to="/quantitativeTestOne"><div className="btn btn-one" style={{margin:"0 auto"}}>Go Back </div></Link>
    </div>
    </Card>
  )
}

export default NumberBasesAdditionNotes