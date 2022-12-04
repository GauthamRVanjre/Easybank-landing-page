import React from "react";
import "./Intro.css";
import mockup_desktop from "../../images/image-mockups.png";

const Intro = () => {
  return (
    <>
      <section className="intro-section">
        <div className="intro-content">
          <h1>Next generation Digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="invite-btn">Request Invite</button>
        </div>
        <div className="intro-illustration">
          <img
            className="intro-mockup"
            src={mockup_desktop}
            alt="mockup illustration"
          />
        </div>
      </section>
    </>
  );
};

export default Intro;
