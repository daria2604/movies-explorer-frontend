import React, { useState } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import caluculateMovieDuration from "../../utils/movieDuration";

const MoviesCard = ({ movie, isSaved }) => {
  const [hover, setHover] = useState(false);
  const location = useLocation();
  const imageClassName = `card__image ${!isSaved ? "" : "no-cursor"}`;
  const buttonSaveClassName = hover ? "card__save-button" : "card__button_hide";
  const buttonRemoveClassName = hover
    ? "card__remove-icon"
    : "card__button_hide";
  const imageUrl = `https://api.nomoreparties.co/${movie.image.url}`;
  const duration = caluculateMovieDuration(movie);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <div className="card">
      <div
        className="card__image-container"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {location.pathname === "/movies" && (
          <>
            <a href={movie.trailerLink} className="card__image-link">
              <img
                src={imageUrl}
                alt={`Обложка фильма «${movie.nameRU}»`}
                className={imageClassName}
              />
            </a>
            {!isSaved ? (
              <button
                type="button"
                className={`button card__button ${buttonSaveClassName}`}
              >
                Сохранить
              </button>
            ) : (
              <span className="card__button card__save-icon"></span>
            )}
          </>
        )}
        {location.pathname === "/saved-movies" && (
          <>
            <a href={movie.trailerLink} className="card__image-link">
              <img
                src={imageUrl}
                alt={`Обложка фильма «${movie.nameRU}»`}
                className={imageClassName}
              />
            </a>
            <span className={`card__button ${buttonRemoveClassName}`}></span>
          </>
        )}
      </div>
      <div className="card__info">
        <p className="card__title">{movie.nameRU}</p>
        <p className="card__duration">{duration}</p>
      </div>
    </div>
  );
};

export default MoviesCard;
