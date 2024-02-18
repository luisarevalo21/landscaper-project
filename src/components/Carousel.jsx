import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import React from "react";

const CarouselComponent = ({ images, showButtons, seperator, hero }) => {
  const items = images.map((image, index) => (
    <Carousel.Item key={index}>
      <div className={`carousel__image__container ${hero && "carousel__image__container__auto "}`}>
        <Image src={image.image} className="carousel__image" />
      </div>
      <Carousel.Caption className="text-center carousel__caption__container">
        <h3 className="carousel__toptext carousel__toptext--font">{image.mainText}</h3>
        {seperator && <div className="carousel__separator"></div>}
        <p className="carousel__subtext carousel__subtext--font">{image.subText}</p>
        {showButtons && (
          <div className="carousel__btn__container">
            <button className="carousel__btn carousel__btn--green carousel__btn--font carousel__btn--padding">
              Get in Touch
            </button>
            <button className="carousel__btn carousel__btn--clear carousel__btn--font carousel__btn--padding">
              Learn More
            </button>
          </div>
        )}
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return <Carousel fade>{items}</Carousel>;
};

{
  /* <Carousel.Item>
        <Image src="https://themedemo.foundstrap.com/zengarden/img/services/service-6.jpg" className="hero__image" />
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
      </Carousel.Item> */
}

export default CarouselComponent;
