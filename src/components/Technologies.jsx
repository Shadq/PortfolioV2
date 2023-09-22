import React from "react";
import { firstRowTechnologies, secondRowTechnologies } from "../technologies";
import "../styles/Technologies.css";

const Technologies = () => {
  return (
    <div className="technologies__container" id="technologies">
      <div className="technologies__title">
        <h2>Technologies</h2>
      </div>
      <div className="technologies__boxes">
        <div className="firstRowTechnologies__container">
          {firstRowTechnologies.map((technology) => (
            <div className="technology">
              <h3>{technology.name}</h3>
              <p className="technology__icon">{technology.icon}</p>
            </div>
          ))}
        </div>
        <div className="secondRowTechnologies__container">
          {secondRowTechnologies.map((technology) => (
            <div className="technology">
              <h3>{technology.name}</h3>
              <p className="technology__icon">{technology.icon}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
