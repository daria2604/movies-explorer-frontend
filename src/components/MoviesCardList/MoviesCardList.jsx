import React, { useState } from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = () => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <section className="cards">
      <div className="cards__container">
        <MoviesCard isSaved={isSaved}/>
        <MoviesCard isSaved={isSaved}/>
        <MoviesCard isSaved={isSaved}/>
        <MoviesCard isSaved={isSaved}/>
      </div>
      <button className="cards__button">Ещё</button>
    </section>
  )
};

export default MoviesCardList;
