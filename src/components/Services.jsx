import React from "react";
import { BsHddStackFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services__container" id="services">
      <div className="service__title">
        <h1>Services</h1>
      </div>
      <div className="service__boxes__container">
        <div className="service">
          <BsHddStackFill className="service__icon" />
          <h3>Full Stack Apps</h3>
          <span>
            Get ahead of your competition and become the leading business with
            apps made by cutting hedge technologies
          </span>
        </div>
        <div className="service">
          <FaWallet className="service__icon" />
          <h3>Portfolios</h3>
          <span>
            Expand in your industry and get noticed by companies or potential
            clients with a modern portfolio
          </span>
        </div>
        <div className="service">
          <FaFileContract className="service__icon" />
          <h3>Smart Contracts</h3>
          <span>
            Create the next token that will rule the market or the next DAO that
            will change the crypto market with advanced smart contracts
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
