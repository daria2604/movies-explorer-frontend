import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

const MoviesCardList = ({ movies, error }) => {
  const location = useLocation();
  const [maxMovies, setMaxMovies] = useState(0);
  const [addCards, setAddCards] = useState(0);

  const handleClick = () => {
    setMaxMovies(maxMovies + addCards);
  };

  const setCards = () => {
    const width = window.innerWidth;

    if (width <= 650) {
      setMaxMovies(5);
      setAddCards(2);
    } else if (width <= 1024) {
      setMaxMovies(8);
      setAddCards(2);
    } else {
      setMaxMovies(12);
      setAddCards(3);
    }
  };

  useEffect(() => {
    setCards();

    window.addEventListener("resize", () => {
      setTimeout(() => {
        setCards();
      }, 1000)
    });
  }, []);

  return (
    <section className="cards">
      {error ? (
        <span className="cards__error">{error}</span>
      ) : (
        location.pathname === "/movies" && (
          <>
            <div className="cards__container">
              {movies.map((movie, length) => {
                if (length < maxMovies) {
                  return (
                    <MoviesCard
                      key={movie.id}
                      movie={movie}
                      isSaved={movie.saved}
                    />
                  );
                }

                return null;
              })}
            </div>
            <div className="cards__button-container">
              {movies.length > maxMovies ? (
                <button className="cards__button" onClick={handleClick}>
                  Ещё
                </button>
              ) : null}
            </div>
          </>
        )
      )}
    </section>
  );
};

export default MoviesCardList;
