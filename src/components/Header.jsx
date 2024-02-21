import React, { useState } from "react";
import headerLogo from "../assets/header-logo.png";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";

//complete menu header to show an aniamtion when popping in
// change icons for cards
//add card state into services to map over them
//change the icon of the cards
const Header = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="header">
      <div className="header__top"></div>
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ["header__main__link", isActive ? "header__main__link--active" : ""].join(" ")
                }
                onClick={() => setToggleMenu(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  ["header__main__link", isActive ? "header__main__link--active" : ""].join(" ")
                }
                to="/services"
                onClick={() => setToggleMenu(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  ["header__main__link", isActive ? "header__main__link--active" : ""].join(" ")
                }
                onClick={() => setToggleMenu(false)}
              >
                Contact
              </NavLink>
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
