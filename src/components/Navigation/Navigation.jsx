import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <nav className={`navigation ${isOpen ? 'navigation_opened' : ''}`}>
      <button type="button" className="navigation__close-button" onClick={onClose}></button>
      <div className="navigation__links">
        <Link
          to="/"
          className={`link navigation__link ${
            location.pathname === "/" ? "navigation__link_active" : ""
          }  navigation__link_type_main `}
        >
          Главная
        </Link>
        <Link
          to="/movies"
          className={`link navigation__link ${
            location.pathname === "/movies" ? "navigation__link_active" : ""
          }`}
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className={`link navigation__link ${
            location.pathname === "/saved-movies"
              ? "navigation__link_active"
              : ""
          }`}
        >
          Сохраненные фильмы
        </Link>
      </div>
      <Link
        to="/profile"
        className={`link navigation__link navigation__button ${
          location.pathname === "/profile"
            ? "navigation__link_active navigation__button_active"
            : ""
        }`}
      >
        Аккаунт
        {location.pathname === "/" ? (
          <span className={`navigation__icon ${isOpen ? "" : "navigation__icon_color_pink"}`}></span>
        ) : (
          <span className="navigation__icon"></span>
        )}
      </Link>
    </nav>
  );
};

export default Navigation;
