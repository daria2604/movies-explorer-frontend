import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = ({ isOn, handleToggle }) => {
  return (
    <label htmlFor="switcher" className="search__label">
      <input
        type="checkbox"
        name="switcher"
        id="switcher"
        className="search__input_visually-hidden"
        checked={isOn}
        onChange={handleToggle}
      />
      <span
        className={`search__switcher ${isOn ? "search__switcher_active" : ""}`}
      ></span>
      Короткометражки
    </label>
  );
};

export default FilterCheckbox;
