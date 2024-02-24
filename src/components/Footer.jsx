import logo from "../assets/compressed/logo-min.png";
import facebook from "../assets/compressed/facebook-min.png";
import instagram from "../assets/compressed/instagram-min.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  //footer nedes to chagne to match zengarden
  return (
    <div className="footer">
      <div className="footer__top__menu">
        <div className="footer__left__container">
          <img src={logo} alt="logo" className="footer__logo" />
          <h3 className="footer__title">Green Lawn Services</h3>
          <h2 className="footer_details">
            Green Lawn Services, provides all you need about Garden and Landscape Design.
          </h2>
          <p className="footer__social">
            <span className="material-symbols-outlined footer__social__icon">call</span>
            <span>English: (510)-426-2518</span>
          </p>
          <p className="footer__social">
            <span className="material-symbols-outlined footer__social__icon">call</span>
            Spanish: (510)-860-9831
          </p>
          <h2 className="footer__license">Lic.24-10161 </h2>
        </div>
        <div className="footer__middle__container">
          <h2 className="footer__header">Office Address: </h2>
          <p className="footer__address">
            2778 Rollingwood Drive <br /> San Pablo, CA 94806
          </p>
        </div>
        <div className="footer__right__container">
          <h2 className="footer__header">Office Hours</h2>
          <p className="footer__time">
            Monday to Friday: 7:00am - 6:00pm
            <br />
            Saturday: 9:30am - 4:00pm
          </p>
        </div>
      </div>

      <div className="footer__submenu">
        <p className="footer__submenu__copyright">
          © All rights reserved {new Date().getFullYear()},
          <strong className="footer__submenu--bold"> Green Lawn Services</strong>
        </p>

        <div className="footer__submenu__social">
          <NavLink
            className="footer__submenu__links footer__submenu__links--facebook"
            target={"_blank"}
            to="https://www.facebook.com/people/Green-Lawn-Services/100069810025003"
          >
            <img className="footer__submenu__icon" src={facebook}></img>
          </NavLink>
          <NavLink
            target={"_blank"}
            to="https://www.instagram.com/green_lawn_services"
            className="footer__submenu__links footer__submenu__links--instagram"
          >
            <img className="footer__submenu__icon" src={instagram}></img>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
