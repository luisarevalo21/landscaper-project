import React from "react";
import Carousel from "react-bootstrap/Carousel";
import heroImage1 from "../assets/hero_image_1.jpg";
import heroImage2 from "../assets/hero_image_2.jpg";
import heroImage3 from "../assets/hero_image_3.jpg";
import Image from "react-bootstrap/Image";
import Card from "./Card";
const Services = () => {
  return (
    <div className="services">
      <div className="services__photos">
        <Carousel fade>
          <Carousel.Item>
            <Image
              src="https://themedemo.foundstrap.com/zengarden/img/services/service-6.jpg"
              className="hero__image"
            />
            <Carousel.Caption className="text-center">
              <h3 className="service__title">Watering and Irrigation</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://themedemo.foundstrap.com/zengarden/img/services/service-4.jpg"
              className="hero__image"
              alt="slider image"
            />
            <Carousel.Caption>
              <h3 className="service__title">Garden Clearance</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://themedemo.foundstrap.com/zengarden/img/services/service-5.jpg"
              className="hero__image"
              alt="slider image"
            />
            <Carousel.Caption>
              <h3 className="service__title">Stone hardscaping </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://themedemo.foundstrap.com/zengarden/img/services/service-2.jpg"
              className="hero__image"
              alt="slider image"
            />
            <Carousel.Caption>
              <h3 className="service__title"> Decoration and landscaping</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://themedemo.foundstrap.com/zengarden/img/services/service-1.jpg"
              className="hero__image"
              alt="slider image"
            />
            <Carousel.Caption>
              <h3 className="service__title">Lawn and Garden Maintenance</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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
