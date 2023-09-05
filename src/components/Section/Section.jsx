import React from "react";
import './Section.css';

const Section = ({ className, id, heading, children }) => {
  return (
    <section className={ `section ${ className }`} id={ id }>
      <h2 className={className === 'techs' ? "section__heading section__heading_type-techs" : "section__heading"}>{ heading }</h2>
      { children }
    </section>
  )
};

export default Section;
