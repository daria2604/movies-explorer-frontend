import React, { useEffect, useState } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import caluculateMovieDuration from "../../utils/movieDuration";

const MoviesCard = ({ movie, handleClick }) => {
  const [hover, setHover] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();
  const width = window.innerWidth;

  const imageClassName = `card__image ${!isSaved ? "" : "no-cursor"}`;
  const buttonSaveClassName =
    width <= 768
      ? "card__save-button"
      : hover
      ? "card__save-button"
      : "card__button_hide";
  const buttonRemoveClassName =
    width <= 768
      ? "card__remove-icon"
      : hover
      ? "card__remove-icon"
      : "card__button_hide";
  const imageUrl = `https://api.nomoreparties.co${movie.image.url}`;
  const duration = caluculateMovieDuration(movie);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("saved-movies"));
    if (savedMovies.some((card) => card.movieId === movie.id)) {
      setIsSaved(true);
    }
  }, []);

  const handleHover = () => {
    setHover(!hover);
  };

  const handleCardButtonClick = () => {
    if (!isSaved) {
      handleClick(movie);
      setIsSaved(true);
    } else {
      handleClick(movie);
      setIsSaved(false);
    }
  };

  const handleDeleteMovie = () => {
    handleClick(movie);
    setIsSaved(false);
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
                onClick={handleCardButtonClick}
              >
                Сохранить
              </button>
            ) : (
              <button
                className="button card__button card__save-icon"
                onClick={handleCardButtonClick}
              ></button>
            )}
          </>
        )}
        {location.pathname === "/saved-movies" && (
          <>
            <a href={movie.trailerLink} className="card__image-link">
              <img
                src={movie.image}
                alt={`Обложка фильма «${movie.nameRU}»`}
                className={imageClassName}
              />
            </a>
            <button
              className={`button card__button ${buttonRemoveClassName}`}
              onClick={handleDeleteMovie}
            ></button>
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
