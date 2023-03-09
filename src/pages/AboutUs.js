import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import assets from "../assets";
import classes from "../components/AptitudeTests/AptitudeTests.module.css";
import Card from "../components/UI/Card";
import styles from "../styles/Global";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <SectionWrapper
        title="About Us"
        description="Apitest is an online educational resource specifically targeted at helping secondary level students ace their final examinations. Our team of vastly experienced teachers boast of world-class teaching techniques which they have put together in concise lesson notes and videos for students imbibe easily. It's proven fact that a student's studies never stops at going through lesson notes and watching lecture videos. These can only contribute about 50% to a student's success. To achieve academic excellence, solving exam-type problems is an absolute necesity. For this reason we provide a whole lot of quizzes and tests based on UTME, WASSCE and NECO syllabuses."
        mockupImg={assets.welcome_pic}
        banner="banner"
      />
      <div className={classes.menuWrapper}>
        
           <div  className={`${styles.subSection} flex-col text-center`}>
                <h1 className={`${styles.h1Text} ${styles.blackText}`}>Our core values are:</h1>
            </div>
        <Card className={classes.containerWrapper}>
          <div className={classes.questioncard} style={{backgroundColor: "yellow"}}>
          
                <div  className={`${styles.subSection} flex-col text-center`}>
                <h1 className={`${styles.h1Text} ${styles.blackText}`}>Excellence</h1>
                </div>
                
                <h3>We offer nothing but the very best services</h3>
          </div>
        </Card>
        <Card className={classes.containerWrapper}>
          <div className={classes.questioncard} style={{backgroundColor: "blue"}}>
             <div  className={`${styles.subSection} flex-col text-center`}>
                <h1 className={`${styles.h1Text} ${styles.blackText}`}>Integrity</h1>
             </div>
             <h3>We deliver on our promises.</h3>
          </div>
        </Card>
        <Card className={classes.containerWrapper}>
          <div className={classes.questioncard} style={{backgroundColor: "purple"}}>
              <div  className={`${styles.subSection} flex-col text-center`}>
                <h1 className={`${styles.h1Text} ${styles.blackText}`}>Consistency</h1>
             </div>
            <h3>We strive to maintain our high-standards always.</h3>
          </div>
        </Card>
        <Card className={classes.containerWrapper}>
          <div className={classes.questioncard} style={{backgroundColor: "green"}}>
          <div  className={`${styles.subSection} flex-col text-center`}>
                <h1 className={`${styles.h1Text} ${styles.blackText}`}>Progression</h1>
          </div>
          <h3>We never rest on our oars.</h3>
          </div>
        </Card>
      </div>
    </>
  );
};

export default AboutUs;
