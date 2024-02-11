import React from "react";

import Carousel from "react-bootstrap/Carousel";

import heroImage1 from "../assets/hero_image_1.jpg";
import heroImage2 from "../assets/hero_image_2.jpg";
import heroImage3 from "../assets/hero_image_3.jpg";
import Image from "react-bootstrap/Image";
// import heroImage2 from "../assets/hero-image-2.jpg";
// import heroImage3 from "../assets/hero-image-3.jpg";

//todo
//add the carousel wtih image s
//and text overlaying it
//add the button click to menu
//aniamtion to show the menu items
//push basis to git
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
        {/* Add more Carousel.Items for additional images */}
      </Carousel>

      {/* <Carousel.Item>
          <img className="d-block w-100" alt="slider image" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" alt="slider image" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item> */}

      {/* <div className="hero__main">
        <div className="hero__main__title">
          <h2>Zengarden</h2>
          {/* <span className="material-symbols-outlined hero__main__menu">menu</span> */}
    </div>
  );
};

export default Hero;
