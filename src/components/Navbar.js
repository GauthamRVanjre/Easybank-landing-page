import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <nav>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div
          className={
            isNavExpanded
              ? "nav-links-container nav-links-parent"
              : "nav-links-container"
          }
        >
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="hamburger-icon">
          <button
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <img src={hamburger} alt="" />
          </button>
        </div>
        <div className="nav-links-container">
          <button className="invite-btn">Request Invite</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
