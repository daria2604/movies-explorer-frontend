import React from "react";
import "./Error.css";

const Error = ({ type, children }) => {
  return <span className={`error ${type}`}>{children}</span>;
};

export default Error;
