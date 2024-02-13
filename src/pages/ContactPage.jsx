import React from "react";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import contactImage from "../assets/contact.jpg";
const ContactPage = () => {
  const [contactDetails, setContactDetails] = React.useState([
    { image: contactImage, mainText: "Contact Us", subText: "Let's Talk Business, Get in Touch!" },
  ]);
  return (
    <div className="contact">
      <Carousel images={contactDetails} seperator={true} />
      <Footer />
    </div>
  );
};

export default ContactPage;
