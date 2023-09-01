import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import NavigationButton from "../NavigationButton/NavigationButton";

const Navigation = ({ isLoggedIn }) => {
  const location = useLocation();
  return (
    <nav className="navigation">
      {isLoggedIn ? (
        <>
          <Link
            to="/signup"
            className="navigation__link navigation__link_path_main"
          >
            Регистрация
          </Link>
          <Link
            to="/signin"
            className="navigation__link navigation__link_path_main"
          >
            <NavigationButton
              className={"navigation__button_type_icon_path_main"}
            >
              Войти
            </NavigationButton>
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/movies"
            className={`navigation__link navigation__link_type_logged-in ${
              location.pathname === "/movies" ? "navigation__link_active" : ""
            }`}
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className={`navigation__link navigation__link_type_logged-in ${
              location.pathname === "/saved-movies"
                ? "navigation__link_active"
                : ""
            }`}
          >
            Сохраненные фильмы
          </Link>
          <Link
            to="/profile"
            className={`navigation__link navigation__link_type_logged-in ${
              location.pathname === "/profile" ? "navigation__link_active navigation__link_type_profile_active" : ""
            }`}
          >
            Аккаунт
            {location.pathname === "/movies" ||
            location.pathname === "/profile" ||
            location.pathname === "/saved-movies" ? (
              <NavigationButton>
                <span className="navigation__button-icon"></span>
              </NavigationButton>
            ) : (
              <NavigationButton
                className={"navigation__button_type_icon_path_main"}
              >
                <span className="navigation__button-icon navigation__button-icon_path_main"></span>
              </NavigationButton>
            )}
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navigation;
