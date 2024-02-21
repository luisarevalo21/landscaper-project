// eslint-disable-next-line react/prop-types
const Form = ({ home }) => {
  if (home) {
    return (
      <div className="form">
        {home && (
          <h2 className="form__title">
            Request an <span className="form__title--strong"> Estimate</span>
          </h2>
        )}
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
