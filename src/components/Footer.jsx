import React, { useRef } from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import "../styles/Footer.css";

const Footer = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1d4rid8",
        "template_19hcqa3",
        form.current,
        "_EsJktmkCslBo8Tt-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <footer id="footer">
      <div className="footer__text__container">
        <h2>Contact me</h2>
        <span>
          If you want to get in touch with me write me an email at <br />
          stackware@gmail.com or message me on my socials.
        </span>
        <span>© Stackware 2023, All rights reserved</span>
        <div className="social__links">
          <a href="https://twitter.com/stackwareWeb">
            <RiTwitterXFill className="link" />
          </a>
          <a href="https://www.instagram.com/stackwareweb/">
            <AiFillInstagram className="link" />
          </a>
          <a href="https://github.com/Shadq">
            <AiFillGithub className="link" />
          </a>
        </div>
      </div>
      <form
        className="footer__email__container"
        ref={form}
        onSubmit={sendEmail}
      >
        <div>
          <input type="text" placeholder="Name" name="name" />
        </div>
        <div>
          <input type="email" placeholder="Email" name="email" />
        </div>
        <div>
          <textarea placeholder="Messagge" name="message" />
        </div>
        <button onClick={sendEmail}>Send</button>
      </form>
    </footer>
  );
};

export default Footer;
