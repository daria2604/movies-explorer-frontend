import React  from "react";
import { Link } from "react-router-dom";
import './Navigation.css';
import NavigationButton from "../NavigationButton/NavigationButton";

const Navigation = ({ isLoggedIn} ) => {
  return (
    <nav className="navigation">
      {!isLoggedIn ? (
        <>      
        <Link to="/signup" className="navigation__link">Регистрация</Link>
          <Link to="/signin" className="navigation__link">
            <NavigationButton>Войти</NavigationButton>
          </Link>
        </>
      ) : (
        <>
          <Link to="/movies" className="navigation__link navigation__link_type_logged-in">Фильмы</Link>
          <Link to="/saved-movies" className="navigation__link navigation__link_type_logged-in">Сохраненные фильмы</Link>
          <Link to="/profile" className="navigation__link navigation__link_type_logged-in">
            Аккаунт
            <NavigationButton className={"navigation__button_type_icon"}>
              <span className="navigation__button-icon"></span>
            </NavigationButton>
          </Link>
        </>
      )}
    </nav>
  )
};

export default Navigation;
