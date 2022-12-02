import React from "react";
import "./Navbar.css";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <button className="invite-btn">Request Invite</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
