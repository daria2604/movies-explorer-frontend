import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { savedMovies } from "../../utils/savedMovies";
import { useLocation } from "react-router-dom";
import moviesApi from "../../utils/MoviesApi";

const MoviesCardList = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.getMovies()
    .then((data) => {
      setMovies(data)
      console.log(data)
    })
    .catch(console.error)
  }, [])

  return (
    <section className="cards">
      {location.pathname === "/movies" && (
        <>
          <div className="cards__container">
            {movies.map((movie) => (
              <MoviesCard key={movie.id} movie={movie} isSaved={movie.saved} />
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
            {savedMovies.map((movie) => (
              <MoviesCard key={movie._id} movie={movie} />
            ))}
          </div>
          <div className="cards__button-container">
          </div>
        </>
      )}
    </section>
  );
};

export default MoviesCardList;
