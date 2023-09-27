import React from "react";
import "./AboutMe.css";
import Section from "../Section/Section";
import Portfolio from "../Portfolio/Portfolio";
import photo from "../../images/photo.jpg";

const AboutMe = () => {
  return (
    <Section
      className={"about-me container"}
      id={"aboutMe"}
      heading={"Студент"}
    >
      <div className="about-me__container">
        <div className="about-me__info">
          <div className="about-me__info-wrap">
            <h3 className="about-me__name">Дарья</h3>
            <p className="about-me__profession">Фронтенд-разработчик, 26 лет</p>
            <p className="about-me__description">
              {`
            Я закончила СГСПУ по направлению «Зарубежное регионоведение (регионы Европы)», 
            после выпуска жила и работала в Китае, а по возвращении на Родину искала себя. 
            И нашла - во фронтенд разработке.
            
            Меня очень увлекает процесс создания сайтов и веб-приложений, а также - изучение новых технологий. 
            Стараюсь улучшать свои навыки, чтобы писать качественный код.
            
            В свободное время люблю изучать иностранные языки, слушать музыку, рисовать и играть на гитаре. 
            `}
            </p>
          </div>
          <a
            href="https://github.com/daria2604"
            target="blank"
            className="link about-me__link"
          >
            Github
          </a>
        </div>
        <img src={photo} alt="Моя фотография" className="about-me__image" />
      </div>
      <Portfolio />
    </Section>
  );
};

export default AboutMe;
