import React from "react";
import "./AuthPage.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const AuthPage = ({ heading, children }) => {
  return (
    <div className="auth">
      <header className="auth__header">
        <Link to="/">
          <img src={logo} alt="Логотип" className="auth__logo" />
        </Link>
        <h1 className="auth__heading">{heading}</h1>
      </header>
      {children}
    </div>
  );
};

export default AuthPage;
