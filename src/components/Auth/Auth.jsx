import React from "react";
import "./Auth.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Auth = ({ heading, children, captionText, path, linkText }) => {
  return (
    <div className="auth">
      <header className="auth__header">
        <Link to="/">
          <img src={logo} alt="Логотип" className="auth__logo" />
        </Link>
        <h1 className="auth__heading">{heading}</h1>
      </header>
      {children}
      <div className="auth__caption">
        <p className="auth__caption-text">{captionText}</p>
        <Link to={path} className="link auth__link">
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default Auth;
