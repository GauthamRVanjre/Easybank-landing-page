import React from "react";
import "./Footer.css";
import logo from "../../images/logo.svg";
import instagram from "../../images/icon-instagram.svg";
import facebook from "../../images/icon-facebook.svg";
import pinterest from "../../images/icon-pinterest.svg";
import twitter from "../../images/icon-twitter.svg";
import youtube from "../../images/icon-youtube.svg";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <div className="footer-info">
          <div className="info-block-1">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <ul className="footer-logos">
              <li>
                <img src={facebook} alt="facebook" />
              </li>
              <li>
                <img src={youtube} alt="youtube" />
              </li>
              <li>
                <img src={twitter} alt="twitter" />
              </li>
              <li>
                <img src={pinterest} alt="pinterest" />
              </li>
              <li>
                <img src={instagram} alt="instagram" />
              </li>
            </ul>
          </div>
          <div className="info-block-2">
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="info-block-3">
            <ul>
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="info-block-4">
          <ul>
            <li>
              <button className="invite-btn">Request Invite</button>
            </li>
            <li>© Easybank. All Rights Reserved</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
