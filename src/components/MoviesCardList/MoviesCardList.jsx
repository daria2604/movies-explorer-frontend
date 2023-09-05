import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { movies } from "../../utils/movies";
import { savedMovies } from "../../utils/savedMovies";
import { useLocation } from "react-router-dom";

const MoviesCardList = () => {
  const location = useLocation();

  return (
    <div className="cards">
      {location.pathname === "/movies" && (
        <>
          <div className="cards__container">
            {movies.map((card) => (
              <MoviesCard key={card._id} card={card} isSaved={card.saved} />
            ))}
          </div>
          <div className="cards__button-container">
            <button className="cards__button">Ещё</button>
          </div>
        </>
      )}
      {location.pathname === "/saved-movies" && (
        <>
          <div className={`cards__container ${savedMovies.length > 3 ? '' : 'cards__container_path_saved'}`}>
            {savedMovies.map((card) => (
              <MoviesCard key={card._id} card={card} />
            ))}
          </div>
          <div className="cards__button-container">
          </div>
        </>
      )}
    </div>
  );
};

export default MoviesCardList;
