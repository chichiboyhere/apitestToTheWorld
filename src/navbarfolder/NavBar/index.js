import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from "./NavbarElements";
import "../StyleNavDropDown.css";
import assets from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {faCaretUp} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [menuOpenVerbal, setMenuOpenVerbal] = useState(false)
  const [menuOpenQuantitative, setMenuOpenQuantitative] = useState(false);
  const [menuOpenQTest, setMenuOpenQTest] = useState(false)
  

  const handleNavigation =()=>{
    setIsNavExpanded(false);
    setMenuOpenVerbal(false);
    setMenuOpenQuantitative(false);
    setMenuOpenQTest(false);
  }

  const menuOpenHandlerQuantitative =()=>{
    setMenuOpenQuantitative(!menuOpenQuantitative);
  }

  const menuOpenHandlerVerbal =()=>{
    setMenuOpenVerbal(!menuOpenVerbal)
  }

  const menuOpenHandlerQTest =()=>{
    setMenuOpenQTest(!menuOpenQTest)
  }


  return (
    <>
      <Nav>
        <div>
        <NavLink to="/">
          <img src={assets.apitestLogo} className="logoImg" alt="Site logo"/>
        </NavLink>
        <Bars
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        />
        
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
            
          >
            <ul>
              <li>
                <Link to="/my-app" className="wrapper" onClick={handleNavigation}>Mental Game</Link>
              </li>
              <li>
                  <div className="wrapper" onClick={menuOpenHandlerVerbal}>Verbal Quizzes {menuOpenVerbal?<FontAwesomeIcon icon={faCaretUp}></FontAwesomeIcon>: <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>}</div>
                  {menuOpenVerbal &&  <div className="drop-content_mobile" onClick={handleNavigation}>
                    <Link to="/verbalTestOne" className="dropdown-content-mobile__li">#1 Test</Link><hr></hr>
                    <Link to="/verbalTestTwo"  className="dropdown-content-mobile__li">#2 Test</Link><hr></hr>
                    <Link to="/verbalTestThree"  className="dropdown-content-mobile__li">#3 Test</Link><hr></hr>
                  </div>}   
                
              </li>
              
              <li>
                 <div className="wrapper" onClick={menuOpenHandlerQuantitative}>Quantitative Quizzes {menuOpenQuantitative?<FontAwesomeIcon icon={faCaretUp}></FontAwesomeIcon>: <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>}</div>
                {menuOpenQuantitative && <div className="drop-content_mobile" onClick={handleNavigation}>
                    <Link to="/quantitativeTestOne" className="dropdown-content-mobile__li">Number Bases(I)</Link> <hr></hr>
                    <Link to="/quantitativeTestTwo"  className="dropdown-content-mobile__li">Number Bases(II)</Link><hr></hr>
                    <Link to="/quantitativeTestThree"  className="dropdown-content-mobile__li">Number Bases(III)</Link><hr></hr>
                    <Link to="/quantitativeTestFour"  className="dropdown-content-mobile__li">Number Bases(IV)</Link><hr></hr>
                    <Link to="/quantitativeTestFive"  className="dropdown-content-mobile__li">Number Bases(V)</Link><hr></hr>
                    <Link to="/quantitativeTestSix"  className="dropdown-content-mobile__li">Fractions</Link><hr></hr>
                    <Link to="/quantitativeTestSeven"  className="dropdown-content-mobile__li">Decimals & Approx.</Link><hr></hr>
                    <Link to="/quantitativeTestEight"  className="dropdown-content-mobile__li">Indices</Link><hr></hr>
                    <Link to="/quantitativeTestNine"  className="dropdown-content-mobile__li">Indicial Equations</Link><hr></hr>
                    <Link to="/quantitativeTestTen"  className="dropdown-content-mobile__li">Logarithm</Link><hr></hr>
                  </div>}
              </li>
              <li>
                  <div className="wrapper"  onClick={menuOpenHandlerQTest}>Quantitative Tests {menuOpenQTest?<FontAwesomeIcon icon={faCaretUp}></FontAwesomeIcon>: <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>}</div>
                  {menuOpenQTest && <div onClick={handleNavigation}>
                  <Link to="/numerationTest" className="dropdown-content-mobile__li">Number and Numeration</Link>
                  </div>}
              </li>
              
              <li>
                <Link to="/contact" className="wrapper" onClick={handleNavigation}>Contact</Link>
              </li>
              
            </ul>
          </div>
        
        </div>
        
          <>
            <NavMenu>
              <NavLink
                to="/my-app"
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                Mental
              </NavLink>
              
              <div className="dropdown">
                  <button className="dropbtn">Verbal Quizzes
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <Link to="/verbalTestOne" className="dropdown-content__li">#1 Test</Link>
                    <Link to="/verbalTestTwo"  className="dropdown-content__li">#2 Test</Link>
                    <Link to="/verbalTestThree"  className="dropdown-content__li">#3 Test</Link>
                  </div>
              </div>
              
              <div className="dropdown">
                  <button className="dropbtn">Quantitative Quizzes
                    <FontAwesomeIcon icon={{faCaretDown} }></FontAwesomeIcon>
                  </button>
                  <div className="dropdown-content">
                    <Link to="/quantitativeTestOne" className="dropdown-content__li">Number Bases(I)</Link>
                    <Link to="/quantitativeTestTwo"  className="dropdown-content__li">Number Bases(II)</Link>
                    <Link to="/quantitativeTestThree"  className="dropdown-content__li">Number Bases(III)</Link>
                    <Link to="/quantitativeTestFour"  className="dropdown-content__li"> Number Bases(IV)</Link>
                    <Link to="/quantitativeTestFive"  className="dropdown-content__li">  Number Bases(V)</Link>
                    <Link to="/quantitativeTestSix"  className="dropdown-content__li">  Fractions</Link>
                    <Link to="/quantitativeTestSeven"  className="dropdown-content__li">Decimals & Approx.</Link>
                    <Link to="/quantitativeTestEight"  className="dropdown-content__li">Indices</Link>
                    <Link to="/quantitativeTestNine"  className="dropdown-content__li">Indicial Equations</Link>
                    <Link to="/quantitativeTestTen"  className="dropdown-content__li">Logarithm</Link>
                  </div>
              </div>
              <div className="dropdown">
                  <button className="dropbtn">Tests
                    <FontAwesomeIcon icon={{faCaretDown} }></FontAwesomeIcon>
                  </button>
                  <div className="dropdown-content">
                  <Link to="/numerationTest" className="dropdown-content__li">Number and Numeration</Link>
                    <Link to="#"  className="dropdown-content__li">Algebra</Link>
                    <Link to="#"  className="dropdown-content__li">Geometry</Link>
                  </div>
              </div>
              
              <NavLink
                to="/contact"
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                Contact
              </NavLink>
             
            </NavMenu>
          </>
        
        
      </Nav>
    </>
  );
};

export default Navbar;
