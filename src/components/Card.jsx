import React from "react";
const Card = ({ title, description }) => {
  return (
    <div className="card">
      <div className="card__details">
        <h2 className="card__header">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
      <span className="material-symbols-outlined card__icon">cycle</span>
    </div>
  );
};

export default Card;
