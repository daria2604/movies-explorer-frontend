import React from "react";
import "./Promo.css";
import promoLogo from "../../images/landing-logo.png";

const Promo = () => {
  return (
    <div className="promo">
      <img src={promoLogo} alt="Изображение буквы П на клетчатом фоне с кругом" className="promo__image"/>
      <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
    </div>
  )
};

export default Promo;
