import React from "react";
import "./Feature.css";
import online from "../../images/icon-online.svg";
import budgeting from "../../images/icon-budgeting.svg";
import onboarding from "../../images/icon-onboarding.svg";
import api from "../../images/icon-api.svg";

const Features = () => {
  return (
    <>
      <section className="features-section">
        <div className="features-intro">
          <h3>Why choose Easybank?</h3>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <div className="row">
          <div className="col">
            <div className="features-card">
              <img src={online} alt="online banking" />
              <h5>Online Banking</h5>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="features-card">
              <img src={budgeting} alt="online budgeting" />
              <h5>Simple Budgeting</h5>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="features-card">
              <img src={onboarding} alt="fast onboarding" />
              <h5>Fast Onboarding</h5>
              <p>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="features-card">
              <img src={api} alt="Open API" />
              <h5>Open API</h5>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
