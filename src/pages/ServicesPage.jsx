import React, { useState } from "react";

//work on servies page
// add the cards and the icons
//also ad the services he gave me
// then add before and after images
//using the carousel

/*
1-instalación de mulch 
2-cut down trees
3-garden maintenance
*/
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import servicesImage from "../assets/services.jpg";
import Card from "../components/Card";
import mulch from "../assets/mulch.jpg";
import before1 from "../assets/before_1.jpg";
import before2 from "../assets/before_2.jpg";
import after1 from "../assets/after_1.jpg";
import after2 from "../assets/after_2.jpg";

import tools1 from "../assets/tools_1.jpg";
import tools2 from "../assets/tools_2.jpg";
import tools3 from "../assets/tools_3.jpg";

import work1 from "../assets/work_1.jpg";
import work2 from "../assets/work_2.jpg";
import work3 from "../assets/work_3.jpg";
import work4 from "../assets/work_4.jpg";
import work5 from "../assets/work_5.jpg";
import work6 from "../assets/work_6.jpg";

const ServicesPage = () => {
  const [serviceDetails, setServiceDetails] = useState([
    {
      image: "https://themedemo.foundstrap.com/zengarden/img/services/service-1.jpg",
      subText: "Lawn and Garden Maintenance",
      description:
        "It's great time, you can save your time for garden maintenance. After we finished, your garden will be a perfect place for",
    },
    {
      image: "https://themedemo.foundstrap.com/zengarden/img/services/service-2.jpg",
      subText: "Decoration and landscaping",
      description:
        "Updating your home's landscaping is a great way to create outdoor spaces for relaxing and meet with family, you can create a garden that is perfect for you.",
    },
    {
      image: "https://themedemo.foundstrap.com/zengarden/img/services/service-4.jpg",
      subText: "Garden Clearance & Garden maintenance",
      description:
        "We offer fast and reliable garden clearance, available any day of the week. From hedge trimmings, grass and flower cuttings to garden furniture and general rubbish, we can take care of it all.",
    },
    {
      image: mulch,
      subText: "Mulch Installation",
      description:
        "Mulch is a protective layer of material that is spread on top of the soil. It is used to retain moisture in the soil, suppress weeds, keep the soil cool, and make the garden bed look more attractive. Organic mulches also help improve the soil's fertility, as they decompose.",
    },
    // {
    //   image: "https://themedemo.foundstrap.com/zengarden/img/services/service-6.jpg",
    //   subText: "Watering and Irrigation",
    //   description: "testiing here",
    // },
    // {
    //   image: "https://themedemo.foundstrap.com/zengarden/img/services/service-5.jpg",
    //   subText: "Stone hardscaping",
    //   description: "testiing here",
    // },
  ]);

  const [beforeImages, setBeforeImages] = useState([{ image: before1 }, { image: before2 }]);
  const [afterImages, setAfterImages] = useState([{ image: after1 }, { image: after2 }]);
  const [workExamples, setWorkExamples] = useState([
    { image: work1 },
    { image: work2 },
    { image: work3 },
    { image: work4 },
    { image: work5 },
    { image: work6 },
  ]);
  const [workTools, setWorkTools] = useState([{ image: tools1 }, { image: tools2 }, { image: tools3 }]);
  return (
    <div className="service__page__container">
      <Carousel
        images={[
          {
            image: servicesImage,
            subText: "Our Services",
            mainText: "We are Expert In All Aspect of Garden and Landscape Design",
          },
        ]}
      />
      <hr className="service__hr" />

      <div className="services__cards">
        {serviceDetails.map((detail, index) => (
          <Card
            key={index}
            service={true}
            image={detail.image}
            title={detail.subText}
            description={detail.description}
          />
        ))}
      </div>

      <h2 className="service__title">Our Work</h2>
      <div className="service__work">
        <div className="service__before">
          <h4 className="service__header">Before</h4>
          <Carousel images={beforeImages} />
        </div>

        <div className="service__after">
          <h4 className="service__header">After</h4>
          <Carousel images={beforeImages} />
        </div>
      </div>

      <h2 className="service__title">Further work</h2>
      <div className="service__work">
        <div className="service__before">
          <h4 className="service__header">Tools</h4>
          <Carousel images={workTools} />
        </div>

        <div className="service__before">
          <h4 className="service__header">Work</h4>
          <Carousel images={workExamples} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
