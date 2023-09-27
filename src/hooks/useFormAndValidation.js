import React, { useCallback } from "react";
import { emailRegex, nameRegex } from "../utils/regex";
import {
  EMAIL_ERROR_MESSAGE,
  NAME_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
} from "../utils/errorMessages";

export function useFormWithValidation(initialValues = {}) {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });

    let errorMessage = target.validationMessage;

    if (name === "email" && !emailRegex.test(value)) {
      errorMessage = EMAIL_ERROR_MESSAGE;
    }

    if (name === "name" && !nameRegex.test(value)) {
      errorMessage = NAME_ERROR_MESSAGE;
    }

    if (name === "password" && value.length === 0) {
      errorMessage = PASSWORD_ERROR_MESSAGE;
    }

    setErrors({ ...errors, [name]: errorMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    setIsValid,
    setValues,
    resetForm,
  };
}
