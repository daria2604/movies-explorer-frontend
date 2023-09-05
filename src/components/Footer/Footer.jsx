import React from "react";
import './Footer.css';
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className={`footer ${location.pathname === '/' ? 'footer_path_main' : ''} container`}>
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <span className="footer__copyright">&copy; 2023</span>
        <div className="footer__yandex">
          <p className="footer__yandex-title">Яндекс.Практикум</p>
          <a href="https://github.com/yandex-practicum" target="blank" className="link footer__yandex-link">Github</a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
