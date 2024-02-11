import React from "react";
const Card = () => {
  return (
    <div className="card">
      <div className="card__details">
        <h2 className="card__header">Eco Friendly & Naturally Sourced Materials</h2>
        <p className="card__description">We use 100% pesticide-free products and methods for every need.</p>
      </div>
      <span className="material-symbols-outlined card__icon">cycle</span>
    </div>
  );
};

export default Card;
