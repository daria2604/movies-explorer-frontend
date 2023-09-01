import React from "react";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Page from "../Page/Page";
import Footer from "../Footer/Footer";

const Main = ({ isLoggedIn }) => {
  return (
    <Page isLoggedIn={isLoggedIn} pathName={'main'} className={'main'}>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </Page>
  );
};

export default Main;
