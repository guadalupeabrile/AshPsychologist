import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Popup from 'reactjs-popup';

const ContactFormThree = () => {

  const form = useRef();

  const [inputs, setInputs] = useState({});
  const [statusMessage, setStatusMessage] = useState("Sending...");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n33h1jc', 'template_roa6cr7', e.target, 'gH8gPEVte3skgnXsY')
      .then((result) => {
        console.log(result.text);
        if (inputs.name != "" && inputs.email != "" && inputs.message != "") {
          setStatusMessage("Thanks for contacting me! I'll be in touch soon.");
        }
        setInputs({
          name: "",
          email: "",
          message: "",
        });
      }, (error) => {
        console.log(error.text);
        setStatusMessage(`${error.text} happened`);
      });
  };


  return (

    <form
      name="contact-form"
      id="contact-form"
      ref={form}
      className="app-form"
      onSubmit={sendEmail}
    >
      <div className="messages"></div>
      <div className="row">
        <div
          className="col-md-6 col-sm-6"
          data-aos={"fade-up"}
          data-aos-delay={100}
          data-aos-duration={700}
        >
          <div className="form-floating">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              required="required"
              placeholder="Your Name"
              data-error="Your Name is Required"
              value={inputs.name}
              onChange={handleInputChange}
            />
            <label htmlFor="name">Name</label>
            <div className="help-block with-errors mt-20"></div>
          </div>
        </div>
        <div
          className="col-md-6 col-sm-6"
          data-aos={"fade-up"}
          data-aos-delay={100}
          data-aos-duration={700}
        >
          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control "
              id="email"
              placeholder="Your Email"
              required="required"
              data-error="Please Enter Valid Email"
              value={inputs.email}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email</label>
            <div className="help-block with-errors mt-20"></div>
          </div>
        </div>
      </div>
      <div
        className="form-floating"
        data-aos={"fade-up"}
        data-aos-delay={100}
        data-aos-duration={700}
      >
        <textarea
          name="message"
          className="form-control"
          id="message"
          rows="7"
          placeholder="Your Message"
          required
          data-error="Please, Leave us a message"
          value={inputs.message}
          onChange={handleInputChange}
        ></textarea>
        <label htmlFor="message">Message</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div
        className="text-center"
        data-aos={"fade-up"}
        data-aos-delay={100}
        data-aos-duration={700}
      >
        <Popup
          trigger={
            <button
              type="submit"
              name="submit"
              className="btn btn-color btn-circle"
              value="Send"
            >
              Send Message
            </button>
          }
          position="right center">
          {statusMessage}
        </Popup>
      </div>
    </form>
  );
};

export default ContactFormThree;
