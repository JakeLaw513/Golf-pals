import React, { useState } from "react";
import { Link } from "react-router-dom";

const FORM_ENDPOINT = ""; 

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
    <Link to="/" className="home-2">back to home</Link>
      <div className="form">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="form"
          required
        />
      </div>
      <br/>
      <div className="form">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form"
          required
        />
      </div>
      <br/>
      <div className="form">
        <textarea
          placeholder="Your message"
          name="message"
          className="form"
          required
        />
      </div>
      <br/>
      <div className="form">
        <button
          className="form"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;