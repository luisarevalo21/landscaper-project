import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  //footer nedes to chagne to match zengarden
  return (
    <div className="footer">
      <div className="footer__container">
        <img src={logo} alt="logo" className="footer__logo" />
        <h3 className="footer__title">Green Lawn Services</h3>
      </div>
      <div className="footer__contact">
        <h2 className="footer_details">
          Green Lawn Services, provides all you need about Garden and Landscape Design.
        </h2>

        <h2 className="footer__header">Office Adress: </h2>
        <p className="footer__address">
          2778 Rollingwood Dr, <br /> San Pablo, CA 94806
        </p>
        <h2 className="footer__header">Office Hours</h2>
        <p className="footer__time">
          Monday to Friday: <br />
          7:00AM - 5:00PM
        </p>
      </div>

      <div className="footer__submenu">
        <p> © All rights reserved {new Date().getFullYear()}, Green Lawn Services </p>

        <div className="footer__submenu__social">
          <a href="#" className="footer__submenu__links">
            Facebook
          </a>
          <a href="#" className="footer__submenu__links">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
