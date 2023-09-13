import React, { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({ handleSearch, handleSwitch }) => {
  const [toggle, setToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryError, setSearchQueryError] = useState(false);

  const handleToggleSwitcher = () => {
    if(searchQuery) {
      handleSearch(searchQuery, !toggle);
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
