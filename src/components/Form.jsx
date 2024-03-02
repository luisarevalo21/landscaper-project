// eslint-disable-next-line react/prop-types
import React, { useState } from "react";

//email //
//https://www.youtube.com/watch?v=Lz8yx-zn-O4&ab_channel=TheIvoryCoder
//https://www.emailjs.com/
const Form = ({ home }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    subject: "",
    message: "",
  });
  const handleChange = e => {
    console.log("event", e.target);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();

    // Perform form validation
    if (form.name === "" || form.email === "" || form.address === "" || form.subject === "" || form.message === "") {
      // Display an error message or handle the validation error
      console.log("Please fill out all fields");
      return;
    }
    // Submit the form or perform any other necessary actions
    console.log("Form submitted successfully");
    // emailjs.sendForm("service_id", "template_id", form, "public_key");
    // Reset the form fields
    setForm({
      name: "",
      email: "",
      address: "",
      subject: "",
      message: "",
    });
  };

  if (home) {
    return (
      <div className="form">
        {home && (
          <h2 className="form__title">
            Request an <span className="form__title--strong"> Estimate</span>
          </h2>
        )}
        <form action="" onSubmit={handleSubmit}>
          <div className="form__inputs__grid">
            <div className="form__left__container">
              <input type="text" placeholder="Full Name" onChange={e => handleChange(e)} name="name" />
              <input type="email" placeholder="Email Address" onChange={e => handleChange(e)} name="email" />
              <input type="text" placeholder="Home Address" onChange={e => handleChange(e)} name="address" />
            </div>
            <div className="form__right__container">
              <input type="text" placeholder="Subject" onChange={e => handleChange(e)} name="subject" />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="4"
                placeholder="Message"
                onChange={e => handleChange(e)}
              ></textarea>
            </div>
          </div>
          <div className="form__separator--dashed"></div>
          <button className="form__button">Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="contact__form">
        <form action="">
          <div className="form__inputs__grid">
            <div className="form__left__container">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Home Address" />
            </div>
            <div className="form__right__container">
              <input type="text" placeholder="Subject" />
              <textarea name="" id="" cols="30" rows="4" placeholder="Message"></textarea>
            </div>
          </div>
          <div className="form__separator--dashed"></div>
          <button className="form__button form__button--margin--top">Submit message</button>
        </form>
      </div>
    );
  }
};

export default Form;
