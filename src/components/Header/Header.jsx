import React, { useState } from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, pathName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <header className={`header header_path_${pathName}`}>
      <div className="container header__container">
        <Link to="/">
          <img src={logo} alt="Логотип" className="header__logo" />
        </Link>
        {!isLoggedIn ? (
          <nav className="header__nav">
            <Link to="/signup" className="header__link link">Регистрация</Link>
            <Link to="/signin" className="header__link header__button button">Войти</Link>
          </nav>
        ) : (
          <>
            <button className="header__menu-burger button" onClick={handleOpen}>
                <span className="header__menu-button"></span>
            </button>
            <Navigation isOpen={isOpen} onClose={handleClose}/>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
