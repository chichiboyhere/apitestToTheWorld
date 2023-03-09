import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import assets from "../assets";
import classes from "../components/AptitudeTests/AptitudeTests.module.css";
import Card from "../components/UI/Card";
import { Link } from "react-router-dom";

const EnglishMenu = () => {
  return (
    <>
      <SectionWrapper
        title="Use of English Syllabus"
        description="The English syllabuses for UME, WASSCE and  NECO comprise such branches as Grammar, Comprehension... A click on any of the topics presents you an option to either take a quiz based on that topic, study a note or watch a video(if available) "
        mockupImg={assets.welcome_pic}
        banner="banner"
      />
      <div className={classes.menuWrapper}>
        <Card className={classes.containerWrapper}>
          <div className={classes.questioncard}>
            <h3 className={classes.questiontext}>Grammar</h3>

            <ul>
              <li><Link to="/verbalQuizOne">Determiners</Link></li>
              <li><Link to="/verbalQuizTwo">Nouns: Types, Pluralsation</Link></li>
              <li><Link to="/verbalQuizThree">Verbs: Types, Tenses</Link></li>
              <li><Link to="/grammarTest">Test of Grammar</Link></li>
            </ul>
          </div>
        </Card>
       
      </div>
    </>
  );
};

export default EnglishMenu;
