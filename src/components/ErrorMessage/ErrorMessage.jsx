import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = ({ type, isActive, children }) => {
  return (
    <span
      className={`error ${isActive ? "error_active" : ""} error_type_${type}`}
    >
      {children}
    </span>
  );
};

export default ErrorMessage;
