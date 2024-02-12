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
          <Carousel.Caption className="text-center hero__caption__container">
            <h3 className="hero__toptext hero__toptext--font">Do you need help to maintain your garden?</h3>
            <div className="hero__separator"></div>
            <p className="hero__subtext hero__subtext--font">
              Complete Care for All your landscape needs
            </p>
            <div className="hero__btn__container">
              <button className="hero__btn hero__btn--green hero__btn--font hero__btn--padding">Get in Touch</button>
              <button className="hero__btn hero__btn--clear hero__btn--font hero__btn--padding">Learn More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={heroImage2} className="hero__image" alt="slider image" />
          <Carousel.Caption className="text-center hero__caption__container">
            <h3 className="hero__toptext hero__toptext--font hero__btn--padding">We can help to create the garden of your dreams</h3>
            <div className="hero__separator"></div>
            <p className="hero__subtext hero__subtext--font hero__btn--padding">
              Easy to set up, Easy to Fill and Easy to Grow
            </p>
            <div className="hero__btn__container">
              <button className="hero__btn hero__btn--green hero__btn--font hero__btn--padding">Get in Touch</button>
              <button className="hero__btn hero__btn--clear hero__btn--font hero__btn--padding">Learn More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={heroImage3} className="hero__image" alt="slider image" />
          <Carousel.Caption className="text-center hero__caption__container">
            <h3 className="hero__toptext hero__toptext--font hero__btn--padding">Second slide label</h3>
            <div className="hero__separator"></div>
            <p className="hero__subtext hero__subtext--font hero__btn--padding">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="hero__btn__container">
              <button className="hero__btn hero__btn--green hero__btn--font hero__btn--padding">Get in Touch</button>
              <button className="hero__btn hero__btn--clear hero__btn--font hero__btn--padding">Learn More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
