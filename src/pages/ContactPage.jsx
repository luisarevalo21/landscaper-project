import React from "react";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import contactImage from "../assets/contact.jpg";
import Form from "../components/Form";
const ContactPage = () => {
  const [contactDetails, setContactDetails] = React.useState([
    { image: contactImage, mainText: "Contact Us", subText: "Let's Talk Business, Get in Touch!" },
  ]);
  return (
    <div className="contact">
      <Carousel images={contactDetails} seperator={true} />
      <div className="contact__details">
        <h2>
          Get in touch <span className="contact__details--green"></span>With us
        </h2>
        <p>
          If you have any question about Zengarden or how we can help to maintenance your garden, please contact us
          directly by selecting from one of the below categories that is the most relevant to your inquiry and fill our
          short feedback form.
        </p>
      </div>

      <div className="contact__container">
        <Form buttonTitle="Send Message" contact="contact-form" />
      </div>

      <div className="contact__item">
        <span className="material-symbols-outlined contact__item__icon">domain</span>
        <p className="contact__item__address"> Office Address </p>
        <p className="contact__item__text">2778 Rollingwood Drive</p>
        <p>San Pablo, CA 94806</p>
      </div>
      <div className="contact__item">
        <span className="material-symbols-outlined contact__item__icon">schedule</span>
        <p className="contact__item__address">Office Hours </p>
        <p className="contact__item__text">Monday to Friday: 7:00am - 6:00pm</p>
        <p>Saturday: 9:30am - 4:00pm</p>
      </div>
      <div className="contact__item">
        <span className="material-symbols-outlined contact__item__icon">call</span>
        <p className="contact__item__text">English: (510)-426-2518</p>
        <p>Spanish: (510)-860-9831</p>
      </div>
      <div>google map goes ehre</div>

      <Footer />
    </div>
  );
};

export default ContactPage;
