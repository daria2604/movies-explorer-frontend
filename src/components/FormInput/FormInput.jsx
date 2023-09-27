import React from "react";
import "./FormInput.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const FormInput = ({
  inputName,
  inputType,
  inputValue,
  placeholderText,
  label,
  maxLength,
  minLength,
  onChange,
  errorMessage,
  hasErrors,
}) => {
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
        minLength={minLength}
        maxLength={maxLength}
        onChange={onChange}
        required
      />
      <ErrorMessage
        type={`${inputName} form__input-error_type_${inputName}`}
        isActive={hasErrors}
      >
        {errorMessage}
      </ErrorMessage>
    </div>
  );
};

export default FormInput;
