import React, { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import moviesApi from "../../utils/MoviesApi";


const SearchForm = () => {
  const [toggle, setToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryError, setSearchQueryError] = useState("");

  const handleToggleSwitcher = () => {
    setToggle(!toggle);
  };

  const handleInputChange = (evt) => {
    setSearchQuery(evt.target.value);
  };

  const handleSearch = () => {
    if (searchQuery === "") {
      setSearchQueryError("Нужно ввести ключевое слово");
    } else {
      moviesApi.getMovies()
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch(evt);
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
                searchQueryError
                  ? "error error_type_search search__input-error"
                  : ""
              }`}
              placeholder="Фильм"
              autoComplete="off"
              onChange={handleInputChange}
              value={searchQuery || searchQueryError}
            />
          </div>
          <button type="submit" className="button search__button">
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
