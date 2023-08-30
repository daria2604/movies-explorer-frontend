import React from "react";
import './NavigationButton.css';

const NavigationButton = ({ className, children }) => {
  return (
    <button type="button" className={`navigation__button ${ className }`}>
      { children }
    </button>
  )
};

export default NavigationButton;
