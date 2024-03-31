// eslint-disable-next-line react/prop-types
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";

const Form = ({ home }) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    subject: "",
    message: "",
    phone: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e, type) => {
    if (type === "phone") {
      setForm({ ...form, phone: e });
      return;
    }
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();

    // Perform form validation
    if (form.name === "" || form.email === "" || form.address === "" || form.subject === "" || form.message === "") {
      // Display an error message or handle the validation error
      return;
    }

    setForm({
      name: "",
      email: "",
      address: "",
      phone: "",
      subject: "",
      message: "",
    });
    setFormSubmitted(true);
    emailjs.sendForm("service_b2dd41m", "template_xb3875r", formRef.current, "yc3W_UBJFUCM_EIp7").then(() => {
      setFormSubmitted(true);
    });
  };

  if (home) {
    return (
      <div className="form" name="contact">
        {home && (
          <>
            <h2 className="form__title">
              Request an <span className="form__title--strong"> Estimate</span>
            </h2>
            {formSubmitted && <div className="form__success">Email sent!</div>}
          </>
        )}
        <form action="" onSubmit={handleSubmit} ref={formRef}>
          <div className="form__inputs__grid">
            <div className="form__left__container">
              <input
                type="text"
                placeholder="Full Name"
                onChange={e => handleChange(e)}
                name="name"
                value={form.name}
              />
              <input
                type="email"
                placeholder="Email Address"
                onChange={e => handleChange(e)}
                name="email"
                value={form.email}
              />
              <input
                type="text"
                placeholder="Home Address"
                onChange={e => handleChange(e)}
                name="address"
                value={form.address}
              />
              <PhoneInput
                inputProps={{ name: "phone" }}
                country={"us"}
                value={form.phone}
                onChange={e => handleChange(e, "phone")}
              />
            </div>
            <div className="form__right__container">
              <input
                type="text"
                placeholder="Subject"
                onChange={e => handleChange(e)}
                name="subject"
                value={form.subject}
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="4"
                placeholder="Message"
                onChange={e => handleChange(e)}
                value={form.message}
              ></textarea>
            </div>
          </div>
          <div className="form__separator--dashed"></div>

          <button className="form__button">Submit</button>
        </form>
      </div>
    );
  } else {
    console.log("inside else");
    return (
      <div className="contact__form">
        <form action="" onSubmit={handleSubmit} ref={formRef}>
          <div className="form__inputs__grid">
            {formSubmitted && <div className="form__success">Email sent!</div>}

            <div className="form__left__container">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={form.name}
                onChange={e => handleChange(e)}
              />

              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                name="email"
                onChange={e => handleChange(e)}
              />
              <input
                type="text"
                placeholder="Home Address"
                value={form.address}
                onChange={e => handleChange(e)}
                name="address"
              />
              <PhoneInput
                inputProps={{ name: "phone" }}
                country={"us"}
                value={form.phone}
                onChange={e => handleChange(e, "phone")}
              />
            </div>
            <div className="form__right__container">
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={e => handleChange(e)}
                name="subject"
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="4"
                placeholder="Message"
                value={form.message}
                onChange={e => handleChange(e)}
              ></textarea>
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
