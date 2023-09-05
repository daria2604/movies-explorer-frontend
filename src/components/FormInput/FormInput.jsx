import React from "react";
import './FormInput.css';
import Error from "../Error/Error";

const FormInput = ({ inputName, inputType, inputValue, placeholderText, label, maxLength }) => {
  return (
    <div className="form__input-container">
      <label htmlFor={inputName} className="form__label">
        {label}
      </label>
      <input
        type={inputType}
        name={inputName}
        id={inputName}
        className={`form__input form__input_type_${inputName}`}
        value={inputValue}
        placeholder={placeholderText}
        minLength={2}
        maxLength={maxLength}
        required
      />
      <Error type={`form__input-error form__input-error_type_${inputName}`}></Error>
    </div>
  );
};

export default FormInput;
