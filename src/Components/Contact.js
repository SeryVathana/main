import React from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import "../App.css";

const Contact = () => {
  return (
    <div className="contact-main">
      <h1>Contact Me</h1>
      <div className="contact-logo">
        <a
          href="https://www.facebook.com/seryvathanaa"
          className="logo"
          target={"_blank"}
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://www.instagram.com/znaamz/"
          className="logo"
          target={"_blank"}
        >
          <AiFillInstagram />
        </a>
        <a href="https://t.me/seryvathana" className="logo" target={"_blank"}>
          <FaTelegramPlane />
        </a>
      </div>
    </div>
  );
};

export default Contact;
