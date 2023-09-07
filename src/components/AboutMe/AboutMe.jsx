import React from "react";
import './AboutMe.css';
import Section from "../Section/Section";
import Portfolio from "../Portfolio/Portfolio";
import photo from '../../images/photo.jpg';

const AboutMe = () => {
  return (
    <Section className={"about-me container"} id={"aboutMe"} heading={"Студент"}>
      <div className="about-me__container">
        <div className="about-me__info">
          <div className="about-me__info-wrap">
            <h3 className="about-me__name">Дарья</h3>
            <p className="about-me__profession">Фронтенд-разработчик, 26 лет</p>
            <p className="about-me__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur.
            </p>
          </div>
          <a href="https://github.com/daria2604" target="blank" className="link about-me__link">Github</a>
        </div>
        <img src={photo} alt="Моя фотография" className="about-me__image" />
      </div>
      <Portfolio />
    </Section>
  )
};

export default AboutMe;
