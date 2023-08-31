import React from "react";
import './Header.css';
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";

const Header = ({ isLoggedIn, pathName }) => {
  return (
    <header className={`header header_path_${pathName}`}>
      <img src={ logo } alt="Логотип" className="header__logo" />
        <Navigation isLoggedIn={ isLoggedIn }/>
    </header>
  )
};

export default Header;
