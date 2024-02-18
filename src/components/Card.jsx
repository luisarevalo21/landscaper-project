import React from "react";
import LazyLoad from "react-lazyload";
const Card = ({ title, description, service, image, icon }) => {
  if (service) {
    return (
      <div className="card services__card__container">
        <LazyLoad>
          <img src={image} alt="service" />
        </LazyLoad>
        <div className="card__details">
          <h2 className="card__service__title">{title}</h2>
          <p className="card__service__description">{description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="card">
      <h2 className="card__header">{title}</h2>
      <p className="card__description">{description}</p>
      <span className="material-symbols-outlined card__icon">{icon}</span>
    </div>
  );
};

export default Card;
