import React from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";

const Header = () => {
  return (
    <nav>
      <h2 className="title">
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
          Stackware
        </Link>
      </h2>
      <ul>
        <li>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            to="technologies"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Technologies
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <button>
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact Me
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
