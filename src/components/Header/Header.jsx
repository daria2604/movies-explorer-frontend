import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, pathName }) => {
  return (
    <header className={`header header_path_${pathName}`}>
      <Link to="/">
        <img src={logo} alt="Логотип" className="header__logo" />
      </Link>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
};

export default Header;
