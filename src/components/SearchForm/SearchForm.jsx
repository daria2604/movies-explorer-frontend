import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";

const SearchForm = ({ handleSearch, handleSwitch, isSubmitting }) => {
  const [toggle, setToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryError, setSearchQueryError] = useState(false);
  const location = useLocation();

  const prefix = location.pathname;
  const queryKey = `${prefix}_query`;
  const isShortMovieKey = `${prefix}_isShortMovie`;

  const movies = localStorage.getItem("movies");

  useEffect(() => {
    const isShortMovie = localStorage.getItem(isShortMovieKey);
    const query = localStorage.getItem(queryKey);

    if (location.pathname === "/movies") {
      if (movies) {
        if (query) {
          setSearchQuery(query);
          handleSearch(query, isShortMovie === "true");
        }

        if (isShortMovie === "true") {
          setToggle(true);
          handleSearch(query, true);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleSwitcher = () => {
    if (searchQuery || location.pathname === "/saved-movies") {
      handleSearch(searchQuery, !toggle);
      localStorage.setItem(isShortMovieKey, !toggle);
    }

    handleSwitch();
    setToggle(!toggle);
  };

  const handleInputChange = (evt) => {
    setSearchQuery(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!searchQuery) {
      setSearchQueryError(true);
      return;
    }
    setSearchQueryError(false);
    handleSearch(searchQuery, toggle);
    localStorage.setItem(isShortMovieKey, toggle);
    localStorage.setItem(queryKey, searchQuery);
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__wrap">
          <div className="search__input-wrap">
            <span className="search__icon"></span>
            <input
              type="text"
              name="movie"
              className={`search__input ${
                searchQueryError ? "search__input-error" : ""
              }`}
              placeholder={
                !searchQueryError ? "Фильм" : "Нужно ввести ключевое слово"
              }
              autoComplete="off"
              onChange={handleInputChange}
              value={searchQuery}
            />
          </div>
          <button type="submit" className="button search__button" disabled={isSubmitting}>
            Найти
          </button>
        </div>
        <div className="search__checkbox">
          <FilterCheckbox isOn={toggle} handleToggle={handleToggleSwitcher} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
