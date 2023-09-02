import React from "react";
import './AuthPage.css';
import logo from '../../images/logo.svg';


const AuthPage = ({ heading, children }) => {
  return (
    <div className="auth">
      <header className="auth__header">
        <img src={logo} alt="Логотип" className="auth__logo"/>
        <h1 className="auth__heading">{heading}</h1>
      </header>
      {children}
    </div>
  )
};

export default AuthPage;
