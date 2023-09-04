import React from "react";
import './NotFound.css';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1)
  }
  
  return (
    <div className="not-found">
        <h1 className="not-found__heading">404</h1>
        <p className="not-found__caption">Страница не найдена</p>
        <button className="link not-found__button" onClick={handleClick}>Назад</button>
    </div>
  )
};

export default NotFound;
