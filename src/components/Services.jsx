import React, { useState } from "react";
import Carousel from "./Carousel";
import heroImage1 from "../assets/hero_image_1.jpg";
import heroImage2 from "../assets/hero_image_2.jpg";
import heroImage3 from "../assets/hero_image_3.jpg";
import Image from "react-bootstrap/Image";
import Card from "./Card";

const Services = () => {
  const [images, setImages] = React.useState([
    {
      image: "https://themedemo.foundstrap.com/zengarden/img/services/service-6.jpg",
      subText: "Watering and Irrigation",
    },
    {
      image: "https://themedemo.foundstrap.com/zengarden/img/services/service-4.jpg",
      subText: "Garden Clearance",
    },
    {
      image: "https://themedemo.foundstrap.com/zengarden/img/services/service-5.jpg",
      subText: "Stone hardscaping",
    },
    {
      image: "https://themedemo.foundstrap.com/zengarden/img/services/service-2.jpg",
      subText: "Decoration and landscaping",
    },
    {
      image: "https://themedemo.foundstrap.com/zengarden/img/services/service-1.jpg",
      subText: "Lawn and Garden Maintenance",
    },
  ]);
  return (
    <div className="services">
      <div className="services__photos">
        <div> test</div>
        <Carousel images={images} seperator={false} />
      </div>

      <div className="services__details">
        <h2>
          Why <span>choose us? </span>
        </h2>
        <p>See the benefits you can get by working with our experts</p>

        <div className="services__cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Services;
