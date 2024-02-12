import React from "react";

const Header = () => {
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
          <h2 className="header__company__name">Zengarden</h2>
          <span className="material-symbols-outlined header__main__menu">menu</span>
          {/* <nav className="header__main__links">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">Pages</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
