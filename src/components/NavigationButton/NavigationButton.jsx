import React from "react";
import './NavigationButton.css';

const NavigationButton = ({ className, children }) => {
  return (
    <button type="button" className={`navigation__button navigation__button_type_icon ${ className }`}>
      { children }
    </button>
  )
};

export default NavigationButton;
