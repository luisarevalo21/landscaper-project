import React from "react";

const Form = () => {
  return (
    <div className="form">
      <h2 className="form__title">
        Request an <span className="form__title--strong"> Estimate</span>
      </h2>
      <form action="">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Home Address" />
        <input type="text" placeholder="Subject" />
        <textarea name="" id="" cols="30" rows="4" placeholder="Message"></textarea>
        <button className="form__button">Submit</button>
      </form>
    </div>
  );
};

export default Form;