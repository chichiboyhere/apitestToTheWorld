import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import "../StyleNavDropDown.css";
import assets from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  

  const handleNavigation = () => {
    setIsNavExpanded(false);
    setMenuOpen(false);
    
  };

  

  const menuOpenHandlerVerbal = () => {
    setMenuOpen(!menuOpen);
  };

 

  return (
    <>
      <Nav>
        <div>
          <NavLink to="/">
            <img src={assets.apitestLogo} className="logoImg" alt="Site logo" />
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
                <Link
                  to="/aboutus"
                  className="wrapper"
                  onClick={handleNavigation}
                >
                  About Us <br></br> 
                </Link>
              </li>
              <li>
                <Link
                  to="/my-app"
                  className="wrapper"
                  onClick={handleNavigation}
                >
                  Mental Game <br></br>
                </Link>
              </li>
              <li>
                <div className="wrapper" onClick={menuOpenHandlerVerbal}>
                  Subjects
                  {menuOpen ? (
                    <FontAwesomeIcon icon={faCaretUp}></FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                  )}
                </div>
                {menuOpen && (
                  <div
                    className="drop-content_mobile"
                    onClick={handleNavigation}
                  >
                    <Link
                      to="/mathmenu"
                      className="dropdown-content-mobile__li"
                    >
                      Mathematics
                    </Link>
                    <hr></hr>
                    <Link
                      to="/englishmenu"
                      className="dropdown-content-mobile__li"
                    >
                      Use of English
                    </Link>
                    <hr></hr>
                  </div>
                )} 
              </li>

              <li>
                <Link
                  to="/contact"
                  className="wrapper"
                  onClick={handleNavigation}
                >
                  Contact <br></br>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <>
          <NavMenu>
            <NavLink
              to="/aboutus"
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
              }}
            >
              About Us
            </NavLink>
            <NavLink
              to="/my-app"
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
              }}
            >
              Mental Game
            </NavLink>

            <div className="dropdown">
              <button className="dropbtn">
                Subjects &nbsp;
                <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
              </button>
              <div className="dropdown-content">
                <Link to="/mathmenu" className="dropdown-content__li">
                  Mathematics
                </Link>
                <Link to="/englishmenu" className="dropdown-content__li">
                  Use of English
                </Link>
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
