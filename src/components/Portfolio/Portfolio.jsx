import React from "react";
import "./Portfolio.css";
import PortfolioLink from "../PortfolioLink/PortfolioLink";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h4 className="portfolio__heading">Портфолио</h4>
      <ul className="portfolio__links">
        <PortfolioLink
          link={"https://daria2604.github.io/how-to-learn/"}
          heading={"Статичный сайт"}
        />
        <PortfolioLink
          link={"https://daria2604.github.io/russian-travel/"}
          heading={"Адаптивный сайт"}
        />
        <PortfolioLink
          link={"https://mesto.dvr.nomoreparties.co/sign-in"}
          heading={"Одностраничное приложение"}
        />
      </ul>
    </div>
  );
};

export default Portfolio;
