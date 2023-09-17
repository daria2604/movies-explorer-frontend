import React from "react";
import "./Form.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Form = ({
  formType,
  buttonText,
  children,
  isValid,
  onSubmit,
  hasErrors,
  errorMessage,
}) => {
  return (
    <>
      <form className={`form form_type_${formType}`} onSubmit={onSubmit}>
        <fieldset className="form__fieldset">{children}</fieldset>
        <div className="form__button-container">
          {hasErrors ? (
            <ErrorMessage type="form" isActive={hasErrors}>
              {errorMessage}
            </ErrorMessage>
          ) : (
            ""
          )}
          <button
            type="submit"
            className={`button form__submit-button ${
              !isValid ? "button_disabled form__submit-button_disabled" : ""
            }`}
            disabled={!isValid}
          >
            {buttonText}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
