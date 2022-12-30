import React from 'react';

import assets from '../assets';
import styles from '../styles/Global';

const FeatureCard = ({ iconUrl, iconText, gameStartHandler}) =>  (
  <div className={styles.featureCard} onClick={gameStartHandler}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

const Features = ({startTheGame, startTheVerbalGame}) => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Aptitude Test Samples</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>Click on the buttons below to get a glimpse of what the Quantitative and Verbal
          Aptitude tests look like. Here are just 5 of such questions in each test.</p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.logicalIcon} iconText="Quantitative Test" gameStartHandler={startTheGame} />
          <FeatureCard iconUrl={assets.verbalIcon} iconText="Verbal Test" gameStartHandler={startTheVerbalGame}/> 
        </div>
      </div>
    </div>
  )
}

export default Features