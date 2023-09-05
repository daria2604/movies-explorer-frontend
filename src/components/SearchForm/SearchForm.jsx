import React, { useState } from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleSwitcher = () => {
    setToggle(!toggle)
  }

  return (
    <div className="search">
      <form className="search__form">
        <div className="search__wrap">
          <div className="search__input-wrap">
            <span className="search__icon"></span>
            <input type="text" name="movie" className="search__input" placeholder="Фильм" />
          </div>
          <button type="submit" className="button search__button">Найти</button>
        </div>  
        <div className="search__checkbox">
          <FilterCheckbox isOn={toggle} handleToggle={handleToggleSwitcher} />
        </div>
        </form>
    </div>
  )
};

export default SearchForm;
