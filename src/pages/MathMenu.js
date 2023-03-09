import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import assets from "../assets";
import classes from "../components/AptitudeTests/AptitudeTests.module.css";
import Card from "../components/UI/Card";
import { Link } from "react-router-dom";

const MathMenu = () => {
  return (
    <>
      <SectionWrapper
        title="Mathmatics Syllabus"
        description="The mathematics syllabuses for UME, WASSCE and  NECO comprise such branches as Number and Numeration, Algebra, Geometry, Statistics and Calculus. The topics in each branch have all be enumerated as shown below. A click on any of the topics presents you an option to either take a quiz based on that topic, study a note or watch a video(if available) "
        mockupImg={assets.welcome_pic}
        banner="banner"
      />
      <div className={classes.menuWrapper}>
        <Card className={classes.containerWrapper}>
          <div className={classes.questioncard}>
            <h3 className={classes.questiontext}>Number and Numeration</h3>

            <ul>
              <li> <Link to="/quantitativeTestOne">Number Bases(I)</Link></li>
              <li> <Link to="/quantitativeTestTwo">Number Bases(II)</Link></li>
              <li> <Link to="/quantitativeTestThree">Number Bases(III)</Link></li>
              <li> <Link to="/quantitativeTestFour">Number Bases(IV)</Link></li>
              <li> <Link to="/quantitativeTestFive">Number Bases(V)</Link></li>
              <li> <Link to="/quantitativeTestSix">Fractions</Link></li>
              <li> <Link to="/quantitativeTestSeven">Decimals and Approximations</Link></li>
              <li> <Link to="/quantitativeTestEight">Percentage Error</Link></li>
              <li> <Link to="/quantitativeTestNine">Percentage Profit and Loss</Link></li>
              <li> <Link to="/quantitativeTestTen">Percentage Miscellaneous</Link></li>
              <li> <Link to="/quantitativeTestEleven">Ratio</Link></li>
              <li> <Link to="/quantitativeTestTwelve">Rate</Link></li>
              <li> <Link to="/quantitativeTestThirteen">Proportion</Link></li>
              <li> <Link to="/quantitativeTestFourteen">Indices</Link></li>
              <li> <Link to="/quantitativeTestFifteen">Indicial Equation</Link></li>
              <li> <Link to="/quantitativeTestSixteen">Logarithm</Link></li>
              <li> <Link to="/quantitativeTestSeventeen">Surd</Link></li>
              <li> <Link to="/quantitativeTestEighteen">Set</Link></li>
              <li> <Link to="/numerationTest">Number and Numeration Test</Link></li>
              
            </ul>
          </div>
        </Card>
        <Card className={classes.containerWrapper}>
          <div className={classes.questioncard}>
            <h3 className={classes.questiontext}>Algebra</h3>

            <ul>
              <li>Variation</li>
              <li>Progression</li>
              <li>Inequalities</li>
              <li>Polynomials</li>
              <li>Test</li>
            </ul>
          </div>
        </Card>
        <Card className={classes.containerWrapper}>
          <div className={classes.questioncard}>
            <h3 className={classes.questiontext}>Geometry</h3>

            <ul>
              <li>Euclidean Geometry</li>
              <li>Mensuration</li>
              <li>Coordinate Geometry</li>
              <li>Loci</li>
              <li>Test</li>
            </ul>
          </div>
        </Card>
        <Card className={classes.containerWrapper}>
          <div className={classes.questioncard}>
            <h3 className={classes.questiontext}>Statistics</h3>

            <ul>
              <li>Mean</li>
              <li>Mode</li>
              <li>Median</li>
              <li>Mean Deviation</li>
              <li>Standard Deviation</li>
              <li>Variance</li> 
              <li>Range</li> 
              <li>Test</li>
            </ul>
          </div>
        </Card>
        <Card className={classes.containerWrapper}>
          <div className={classes.questioncard}>
            <h3 className={classes.questiontext}>Calculus</h3>

            <ul>
              <li>Differentiation</li>
              <li>Application of Differentiation</li>
              <li>Integration</li>
              <li>Application of Integration</li> 
              <li>Test</li>
            </ul>
          </div>
        </Card>
      </div>
    </>
  );
};

export default MathMenu;
