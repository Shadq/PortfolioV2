import React from "react";
import { Link } from "react-scroll";
import { BsArrowDown } from "react-icons/bs";
import logo from "../assets/LogoPNG.png";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero__container" id="hero">
      <img src={logo} alt="logo" className="hero__logo" />
      <h1 className="hero__title">
        Developing <span className="hero__st">The Future.</span>
      </h1>
      <Link to="services" spy={true} smooth={true} offset={-100} duration={500}>
        <BsArrowDown className="hero__arrow" />
      </Link>
    </div>
  );
};

export default Hero;
