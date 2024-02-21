import React from "react";

import heroImage1 from "../assets/compressed/hero_image_1-min.jpg";
import heroImage2 from "../assets/compressed/hero_image_2-min.jpg";
import heroImage3 from "../assets/compressed/hero_image_3-min.jpg";

import Carousel from "./Carousel";
const Hero = () => {
  const [images, setImages] = React.useState([
    {
      image: heroImage1,
      subText: "Do you need to help for maintenance of your garden",
      mainText: "Complete Care for All your landscape needs",
    },
    {
      image: heroImage2,
      subText: "We can help to create the garden of your dreams",
      mainText: "Easy to set up, Easy to Fill and Easy to Grow",
    },
    {
      image: heroImage3,
      subText: "Now you don't have to bother thinking about design",
      mainText: "We Can Create An Environment That's Beyond Your Imagination",
    },
  ]);
  return (
    <div className="hero">
      <Carousel images={images} showButtons={true} seperator={true} hero={true} />
    </div>
  );
};

export default Hero;
