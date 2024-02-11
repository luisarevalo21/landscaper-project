import React from "react";
import Form from "./Form";
const Footer = () => {
  return (
    <div className="footer">
      <Form />

      {/* google maps will og here */}

      <div className="footer__contact">
        <h2 className="footer_details">
          Zengarden is Garden Company, provides all you need about Garden and Landscape Design.
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
        <p> © All rights reserved {new Date().getFullYear()}, San Pablo Gardening </p>

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
