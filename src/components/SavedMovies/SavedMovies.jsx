import React, { useEffect, useState } from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Page from "../Page/Page";
import SearchForm from "../SearchForm/SearchForm";
import { filterMovies } from "../../utils/filter";
import Preloader from "../Preloader/Preloader";
import {
  MOVIES_NOT_FOUND_ERROR_MESSAGE,
  NO_FAVS_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
} from "../../utils/errorMessages";
import mainApi from "../../utils/MainApi";

const SavedMovies = ({ isLoggedIn }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isShortMovieChecked, setIsShortMovieChecked] = useState(false);
  const [isSavedMoviesLoaded, setIsSavedMoviesLoaded] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .getSavedMovies()
      .then((data) => {
        if (data.length !== 0) {
          setMovies(data);
          localStorage.setItem("saved-movies", JSON.stringify(data));
          setIsSavedMoviesLoaded(true);
        } else {
          setError(NO_FAVS_ERROR_MESSAGE);
        }
      })
      .catch(() => {
        setError(SERVER_ERROR_MESSAGE);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isSavedMoviesLoaded) {
      setMovies(movies);
      localStorage.setItem("saved-movies", JSON.stringify(movies));
    }
  }, [isSavedMoviesLoaded, movies]);

  const handleSearch = (query, isShortMovieChecked) => {
    setIsLoading(true);
    filterStoredMovies(query, isShortMovieChecked);
  };

  const filterStoredMovies = (query, isShortMovieChecked) => {
    const storedMovies = JSON.parse(localStorage.getItem("saved-movies"));
    const filteredMovies = filterMovies(storedMovies, query, isShortMovieChecked);
  
    if (filteredMovies.length > 0) {
      setMovies(filteredMovies);
      setError(null);
    } else {
      setError(MOVIES_NOT_FOUND_ERROR_MESSAGE);
    }
  
    setIsLoading(false);
  };

  const handleSwitch = () => {
    setIsShortMovieChecked(!isShortMovieChecked);
  };

  const handleDeleteMovie = (movie) => {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const filteredMovies = movies.filter((card) => card._id !== movie._id);
        setMovies(filteredMovies);
        localStorage.setItem("saved-movies", JSON.stringify(filteredMovies));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Page isLoggedIn={isLoggedIn} pathName={"saved-movies"} className={"saved"}>
      <SearchForm handleSearch={handleSearch} handleSwitch={handleSwitch} isSubmitting={isLoading}/>
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          error={error}
          handleClick={handleDeleteMovie}
        />
      )}
    </Page>
  );
};

export default SavedMovies;
