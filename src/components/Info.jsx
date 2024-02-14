import React from "react";

const Info = () => {
  return (
    <div className="info">
      <div className="info__header">
        <h2>
          What <span className="info__header__text"> We Do</span>
        </h2>
      </div>

      <h4 className="info__subheader">Zengarden have Experience In All Aspects of Garden Maintenance</h4>
      <p className="info__para">
        We have a lot of experience in garden services and landscape design, We offer professional services from
        planting, maintenance and design of your garden. We also provide regular garden maintenance, decoration and
        landscaping, stone hardscaping, design and planting, garden clearance, watering plants or complete design of
        your garden. Don't be afraid if you have any problems, please contact us for a free consultation
      </p>

      <button className="info__btn">More service</button>
    </div>
  );
};

export default Info;
