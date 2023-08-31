import React from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";

const Main = ({ loggedIn }) => {
  return (
    <>
      <Header 
        loggedIn={ loggedIn }
        pathName={'main'}
      />
      <main className="main">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
    </>
    
  );
};

export default Main;
