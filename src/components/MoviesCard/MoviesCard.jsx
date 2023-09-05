import React, { useState } from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";

const MoviesCard = ({ card, isSaved }) => {
  const [hover, setHover] = useState(false);
  const location = useLocation();
  const imageClassName = (`card__image ${!isSaved ? '' : 'no-cursor'}`);
  const buttonSaveClassName = (hover ? 'card__save-button' : 'card__button_hide');
  const buttonRemoveClassName = (hover ? 'card__remove-icon' : 'card__button_hide');

  const handleHover = () => {
    setHover(!hover)
  }

  return (
    <div className="card">
      <div className="card__image-container" onMouseEnter={handleHover} onMouseLeave={handleHover}>
        {location.pathname === '/movies' && (
          <>
            <img src={card.link} alt={`Обложка фильма «${card.title}»`} className={imageClassName} />
            {!isSaved ? (
              <button type="button" className={`button card__button ${buttonSaveClassName}`}>Сохранить</button>
            ) : (
              <span className="card__button card__save-icon"></span>
            )}
          </>
        )}
        {location.pathname === '/saved-movies' && (
          <>
            <img src={card.link} alt="" className='card__image' />
            <span className={`card__button ${buttonRemoveClassName}`}></span>
          </>
        )}
      </div>
      <div className="card__info">
        <p className="card__title">{card.title}</p>
        <p className="card__duration">1ч 17м</p>
      </div>
    </div>
  )
};

export default MoviesCard;
