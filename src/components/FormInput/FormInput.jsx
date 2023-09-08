import React from "react";
import './FormInput.css';
import ErrorMessage from "../ErrorMessage/ErrorMessage";

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
      <ErrorMessage type={`form__input-error form__input-error_type_${inputName}`}></ErrorMessage>
    </div>
  );
};

export default FormInput;
