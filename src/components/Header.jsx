import React, { useState } from "react";
import logo from "../assets/logo.png";
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
          <Image className="header__logo" src={logo} alt="logo" />
          {/* <h1 >Green Lawn Services</h1> */}
          <span className="material-symbols-outlined header__main__menu" onClick={() => setToggleMenu(prev => !prev)}>
            menu
          </span>
        </div>
        {toggleMenu && (
          <nav className="header__main__links">
            <ul className="header__main__links__list">
              <li>
                <Link to="/" className="header__main__link">
                  Home
                </Link>
              </li>
              <li>
                <Link className="header__main__link" to="/services">
                  Services
                </Link>
              </li>
              {/* <li>
                <Link className="header__main__link" to="/about">
                  Pages
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="header__main__link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
