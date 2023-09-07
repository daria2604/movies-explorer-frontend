import React from "react";
import "./AboutProject.css";
import Section from "../Section/Section";

const AboutProject = () => {
  return (
    <Section
      className={"about-project container"}
      heading={"О проекте"}
      id={"aboutProject"}
    >
      <ul className="about-project__info">
        <li className="about-project__column">
          <h3 className="about-project__heading">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__column">
          <h3 className="about-project__heading">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__timeline">
        <div className="about-project__timeline-block about-project__timeline-block_size_short">
          <div className="about-project__timeline-duration about-project__timeline-duration_size_short">1 неделя</div>
          <span className="about-project__timeline-caption">Back-end</span>
        </div>
        <div className="about-project__timeline-block">
          <div className="about-project__timeline-duration">4 недели</div>
          <span className="about-project__timeline-caption">Front-end</span>
        </div>
      </div>
    </Section>
  );
};

export default AboutProject;
