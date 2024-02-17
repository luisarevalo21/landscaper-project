import React from "react";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

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

        <h2 className="footer__header">Office Address: </h2>
        <p className="footer__address">
          2778 Rollingwood Drive <br /> San Pablo, CA 94806
        </p>
        <h2 className="footer__header">Office Hours</h2>
        <p className="footer__time">
          Monday to Friday: 7:00am - 6:00pm
          <br />
          Saturday: 9:30am - 4:00pm
        </p>
      </div>

      <div className="footer__submenu">
        <p className="footer__submenu__copyright"> © All rights reserved {new Date().getFullYear()},  
          <strong className="footer__submenu--bold"> Green Lawn Services</strong>
        </p>

        <div className="footer__submenu__social">
          <a href="#" className="footer__submenu__links footer__submenu__links--facebook">
            <img className="footer__submenu__icon" src={facebook}></img>
          </a>
          <a href="#" className="footer__submenu__links footer__submenu__links--instagram">
          <img className="footer__submenu__icon" src={instagram}></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
