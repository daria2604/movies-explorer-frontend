import React from "react";
import './Form.css';
import { Link } from "react-router-dom";

const Form = ({
  formType,
  buttonText,
  captionText,
  path,
  linkText,
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
      <div className="form__caption">
        <p className="form__caption-text">{captionText}</p>
        <Link to={path} className="link form__link">
          {linkText}
        </Link>
      </div>
    </>
  );
};

export default Form;
