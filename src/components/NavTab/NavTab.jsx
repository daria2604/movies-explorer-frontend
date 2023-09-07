import React from "react";
import './NavTab.css';

const NavTab = () => {
  return (
    <section className="navtab">
      <a href="#aboutProject" className="navtab__link">О проекте</a>
      <a href="#techs" className="navtab__link">Технологии</a>
      <a href="#aboutMe" className="navtab__link">Студент</a>
    </section>
  )
};

export default NavTab;
