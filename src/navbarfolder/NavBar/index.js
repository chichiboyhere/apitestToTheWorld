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


const Navbar = () => {
  
  const [isNavExpanded, setIsNavExpanded] = useState(false);
 
  

  
  return (
    <>
      <Nav>
        <div>
        <NavLink to="/">
          <img src={assets.apitestLogo} className="logoImg"/>
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
            onClick={() => {
              setIsNavExpanded(false);
            }}
          >
            <ul>
              <li>
                <Link to="/my-app" className="wrapper">Mental Game</Link>
              </li>
              <li>
                  <div className="wrapper">Verbal Tests</div>
                  <div className="drop-content_mobile">
                    <Link to="/verbalTestOne" className="dropdown-content-mobile__li">#1 Test</Link>
                    <Link to="/verbalTestTwo"  className="dropdown-content-mobile__li">#2 Test</Link>
                    <Link to="/verbalTestThree"  className="dropdown-content-mobile__li">#3 Test</Link>
                  </div>   
                
              </li>
              
              <li>
                 <div className="wrapper">Quantitative Quizzes</div>
                 <div className="drop-content_mobile">
                    <Link to="/quantitativeTestOne" className="dropdown-content-mobile__li">Number Bases(I)</Link>
                    <Link to="/quantitativeTestTwo"  className="dropdown-content-mobile__li">Number Bases(II)</Link>
                    <Link to="/quantitativeTestThree"  className="dropdown-content-mobile__li">Number Bases(III)</Link>
                    <Link to="/quantitativeTestFour"  className="dropdown-content-mobile__li">Number Bases(IV)</Link>
                    <Link to="/quantitativeTestFive"  className="dropdown-content-mobile__li">Number Bases(V)</Link>
                  </div>
              </li>
              <li>
                  <div className="wrapper">Tests</div>
                  <div>
                  <Link to="/numerationTest" className="drop-content_mobile">Number and Numeration</Link>
                  </div>
              </li>
              
              <li>
                <Link to="/contact" className="wrapper">Contact</Link>
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
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <Link to="/quantitativeTestOne" className="dropdown-content__li">Number Bases(I)</Link>
                    <Link to="/quantitativeTestTwo"  className="dropdown-content__li">Number Bases(II)</Link>
                    <Link to="/quantitativeTestThree"  className="dropdown-content__li">Number Bases(III)</Link>
                    <Link to="/quantitativeTestFour"  className="dropdown-content__li"> Number Bases(IV)</Link>
                    <Link to="/quantitativeTestFive"  className="dropdown-content__li">  Number Bases(V)</Link>
                  </div>
              </div>
              <div className="dropdown">
                  <button className="dropbtn">Tests
                    <i className="fa fa-caret-down"></i>
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
