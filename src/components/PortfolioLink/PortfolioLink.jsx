import React from "react";
import "./PortfolioLink.css";

const PortfolioLink = ({ link, heading }) => {
  return (
    <li className="portfolio__link">
      <a href={link} className="portfolio__link-content" target="blank">
        <p className="portfolio__link-heading">{heading}</p>
        <span className="portfolio__link-icon"></span>
      </a>
    </li>
  );
};

export default PortfolioLink;
