import React, { useState } from "react";
import headerLogo from "../assets/header-logo.png";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

//complete menu header to show an aniamtion when popping in
// change icons for cards
//add card state into services to map over them
//change the icon of the cards
const Header = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="header">
      <div className="header__top">
        {/* <p>
          <span className="material-symbols-outlined">call</span>
          Phone: 123-456-7800
        </p>
        <p>
          <span className="material-symbols-outlined">mail</span> test@test.com
        </p>
        <p>
          <span className="material-symbols-outlined">schedule</span>Mon-Fri: 7:00AM - 6:00pm
        </p> */}

        {/* <ul>
          <li> media 1</li>
          <li> media 2</li>
          <li> media 3</li>
          <li> media 4</li>
        </ul> */}
      </div>
      <div className="header__main">
        <div className="header__main__title">
          <div className="header__main__container">
            <Image className="header__logo" src={headerLogo} alt="logo" />
            <h1 className="header__main__header">Green Lawn Services</h1>
          </div>
          <span className="material-symbols-outlined header__main__menu" onClick={() => setToggleMenu(prev => !prev)}>
            menu
          </span>
        </div>

        <nav className={`header__main__links ${toggleMenu ? "header__main__links--active " : null}`}>
          <ul className="header__main__links__list">
            <li>
              <Link to="/" className="header__main__link" onClick={() => setToggleMenu(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link className="header__main__link" to="/services" onClick={() => setToggleMenu(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="header__main__link" onClick={() => setToggleMenu(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

{
  /* <li>
  <Link className="header__main__link" to="/about">
    Pages
  </Link>
</li> */
}
