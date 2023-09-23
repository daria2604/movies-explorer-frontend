import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import {
  ADD_MOVIES,
  ADD_MOVIES_DESKTOP,
  MAX_MOVIES_DESKTOP,
  MAX_MOVIES_MOBILE,
  MAX_MOVIES_TABLET,
  WIDTH_MOBILE,
  WIDTH_TABLET_1024,
} from "../../utils/constants";

const MoviesCardList = ({ movies, error, handleClick }) => {
  const location = useLocation();
  const [maxMovies, setMaxMovies] = useState(0);
  const [addCards, setAddCards] = useState(0);

  const handleButtonClick = () => {
    setMaxMovies(maxMovies + addCards);
  };

  const setCards = () => {
    const width = window.innerWidth;

    if (width <= WIDTH_MOBILE) {
      setMaxMovies(MAX_MOVIES_MOBILE);
      setAddCards(ADD_MOVIES);
    } else if (width <= WIDTH_TABLET_1024) {
      setMaxMovies(MAX_MOVIES_TABLET);
      setAddCards(ADD_MOVIES);
    } else {
      setMaxMovies(MAX_MOVIES_DESKTOP);
      setAddCards(ADD_MOVIES_DESKTOP);
    }
  };

  useEffect(() => {
    setCards();

    window.addEventListener("resize", () => {
      setTimeout(() => {
        setCards();
      }, 1000);
    });
  }, []);

  return (
    <section className="cards">
      {error ? (
        <span className="cards__error">{error}</span>
      ) : (
        <>
          <ul className="cards__container">
            {movies.map((movie, length) => {
              if (location.pathname === "/movies") {
                if (length < maxMovies) {
                  return (
                    <MoviesCard
                      key={movie.id}
                      movie={movie}
                      handleClick={handleClick}
                    />
                  );
                } else {
                  return null;
                }
              } else {
                return (
                  <MoviesCard
                    key={movie._id}
                    movie={movie}
                    handleClick={handleClick}
                  />
                );
              }
            })}
          </ul>
          <div className="cards__button-container">
            {location.pathname === "/movies" && movies.length > maxMovies ? (
              <button className="cards__button" onClick={handleButtonClick}>
                Ещё
              </button>
            ) : null}
          </div>
        </>
      )}
    </section>
  );
};

export default MoviesCardList;
