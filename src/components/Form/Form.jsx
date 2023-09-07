import React from "react";
import './Form.css';

const Form = ({
  formType,
  buttonText,
  children,
}) => {
  return (
    <>
      <form className={`form form_type_${formType}`}>
        <fieldset className="form__fieldset">{children}</fieldset>
        <button type="submit" className="button form__submit-button">
          {buttonText}
        </button>
      </form>
    </>
  );
};

export default Form;
