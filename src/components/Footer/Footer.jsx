import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <span className="footer__copyright">&copy; 2023</span>
        <div className="footer__yandex">
          <p className="footer__yandex-title">Яндекс.Практикум</p>
          <a href="https://github.com/yandex-practicum" target="blank" className="footer__yandex-link">Github</a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
