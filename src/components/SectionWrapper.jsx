import React from "react";
import styles from "../styles/Global";
import { Link } from "react-router-dom";
import { NavBtn, NavBtnLink } from "../navbarfolder/NavBar/NavbarElements";

const SectionWrapper = ({
  title,
  description,
  mockupImg,
  banner,
  reverse,
  link,
  linkMental,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} 
      ${banner}`}
    >
      <div
        className={`flex items-center 
        ${reverse ? styles.boxReverseClass : styles.boxClass} 
        w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} 
          ${reverse ? " fadeRightMini" : " fadeLeftMini"}
          ${reverse ? styles.textRight : styles.textLeft}
        `}
        >
          <h1
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.h1Text}`}
          >
            {title}
          </h1>
          <p
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}
          >
            {description}
            {linkMental && <><Link to="/auth">Sign up or log in </Link>to play.</>}
            {link && (
            <>
               So what are you waiting for?
              <Link to="/auth"> Sign up or log in </Link>and get your mental
              juices flowing.
            </>
           )}
          </p>
        </div>
        <div className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`
           ${reverse ? " fadeLeftMini" : " fadeRightMini"}
          ${styles.sectionImg}`}
            style={{ maxHeight: 450, maxWidth: 500 }}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
