import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = ({ type, children }) => {
  return <span className={`error error_type_${type}`}>{children}</span>;
};

export default ErrorMessage;
