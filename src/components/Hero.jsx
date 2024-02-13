import React from "react";

import heroImage1 from "../assets/hero_image_1.jpg";
import heroImage2 from "../assets/hero_image_2.jpg";
import heroImage3 from "../assets/hero_image_3.jpg";
import Image from "react-bootstrap/Image";
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
      subText: "Second slide label",
      mainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]);
  return (
    <div className="hero">
      <Carousel images={images} showButtons={true} seperator={true} />
    </div>
  );
};

export default Hero;
