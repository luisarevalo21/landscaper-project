import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Info from "../components/Info";
import Footer from "../components/Footer";
import Form from "../components/Form";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Info />
      <Services />
      <div className="footer__form">
        <Form buttonTitle="submit" home={true} contact="" />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
