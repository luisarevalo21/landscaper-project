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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201212.43130781694!2d-122.47703890803662!3d38.00176107762278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808577c47504c10d%3A0x360b82bd722d1f2d!2sGreen%20lawn%20services!5e0!3m2!1sen!2sus!4v1708222682619!5m2!1sen!2sus"
        width="600"
        height="450"
        className="contact__map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </>
  );
};

export default HomePage;
