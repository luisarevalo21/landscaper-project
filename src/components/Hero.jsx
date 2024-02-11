import React from "react";

import Carousel from "react-bootstrap/Carousel";

import heroImage1 from "../assets/hero_image_1.jpg";
import heroImage2 from "../assets/hero_image_2.jpg";
import heroImage3 from "../assets/hero_image_3.jpg";
import Image from "react-bootstrap/Image";

const Hero = () => {
  return (
    <div className="hero">
      <Carousel fade>
        <Carousel.Item>
          <Image src={heroImage1} className="hero__image" />
          <Carousel.Caption className="text-center">
            <h3>Do you need help to maintain your garden?</h3>
            <p className="hero__subtext hero__subtext--uppercase">Complete Care for All your landscape needs</p>

            <div className="hero__btn__container">
              <button className="hero__btn hero__btn--green">Get in Touch</button>
              <button className="hero__btn hero__btn--clear ">Learn More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={heroImage2} className="hero__image" alt="slider image" />
          <Carousel.Caption>
            <h3>We can help to create the garden of your dreams</h3>
            <p>Easy to set up, Easy to Fill and Easy to Grow</p>
            <div className="hero__btn__container">
              <button className="hero__btn hero__btn--green">Get in Touch</button>
              <button className="hero__btn hero__btn--clear ">Learn More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={heroImage3} className="hero__image" alt="slider image" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="hero__btn__container">
              <button className="hero__btn hero__btn--green">Get in Touch</button>
              <button className="hero__btn hero__btn--clear ">Learn More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
