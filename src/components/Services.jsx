import React, { useState } from "react";
import Carousel from "./Carousel";
import heroImage1 from "../assets/compressed/hero_image_1-min.jpg";
import heroImage2 from "../assets/compressed/hero_image_2-min.jpg";
import heroImage3 from "../assets/compressed/hero_image_3-min.jpg";
// import Image from "react-bootstrap/Image";
import Card from "./Card";

const Services = () => {
  const [images, setImages] = useState([
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

  const [services, setServices] = React.useState([
    {
      title: "Eco Friendly & Naturally Sourced Materials",
      description: "We use 100% pesticide-free products and methods for every need.",
      icon: "cycle",
    },
    {
      title: "Full Design & Planning Service",
      description:
        "Comprehensive design and planning assistance encompassing all aspects of the project from inception to completion.",
      icon: "grass",
    },
    {
      title: "Professional & Have Many Experience",
      description: "Experienced professionals with a wealth of expertise and knowledge in their field.",
      icon: "library_books",
    },
  ]);
  return (
    <div className="services">
      <div className="services__photos">
        <div> test</div>
        <Carousel images={images} seperator={false} />
      </div>

      <div className="services__details">
        <h2 className="services__details__header">
          Why <span className="services__details__header--green-text">choose us? </span>
        </h2>
        <p className="services__details__subheader">See the benefits you can get by working with our experts</p>

        <div className="services__cards">
          {services.map(service => (
            <Card key={service.title} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
