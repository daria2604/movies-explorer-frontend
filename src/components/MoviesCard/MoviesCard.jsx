import React, { useState } from "react";
import './MoviesCard.css';
import cover from '../../images/movie-cover.jpeg';
import cover2 from '../../images/movie-cover-2.jpeg';
import cover3 from '../../images/movie-cover-3.jpeg';

const MoviesCard = ({ isSaved }) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover)
  }

  return (
    <>
      <div className="card">
        <div className="card__image-container" onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <img src={cover} alt="" className="card__image" />
          {!isSaved ? (
            <button className={`card__button ${hover ? 'card__save-button' : 'card__button_hide'} `}>Сохранить</button>
          ) : (
            <span className="card__button card__save-icon"></span>
          )}
        </div>
        <div className="card__info">
          <p className="card__title">33 слова о дизайне</p>
          <p className="card__duration">1ч 17м</p>
        </div>
      </div>
      <div className="card">
        <div className="card__image-container" onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <img src={cover2} alt="" className="card__image" />
          {isSaved ? (
            <button className={`card__button ${hover ? 'card__save-button' : 'card__button_hide'} `}>Сохранить</button>
          ) : (
            <span className="card__button card__save-icon"></span>
          )}
        </div>
        <div className="card__info">
          <p className="card__title">Киноальманах «100 лет дизайна»</p>
          <p className="card__duration">1ч 17м</p>
        </div>
      </div>
      <div className="card">
        <div className="card__image-container" onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <img src={cover3} alt="" className="card__image" />
          {!isSaved ? (
            <button className={`card__button ${hover ? 'card__save-button' : 'card__button_hide'} `}>Сохранить</button>
          ) : (
            <span className="card__button card__save-icon"></span>
          )}
        </div>
        <div className="card__info">
          <p className="card__title">В погоне за Бенкси</p>
          <p className="card__duration">1ч 17м</p>
        </div>
      </div>
    </>
  )
};

export default MoviesCard;
