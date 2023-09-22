import React from "react";
import { projects } from "../projects";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects__container" id="projects">
      <div className="projects__content">
        <h2>Projects</h2>
      </div>
      <div className="projects__projects">
        {projects.map((project) => (
          <div className="project">
            <div className="project__image__container">
              <img src={project.image} className="project__image" />
            </div>
            <div className="project__content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project__tags">
                {project.tags.map((tag) => (
                  <button>{tag}</button>
                ))}
              </div>
              <div className="project__links">
                <a href={project.gitHubRepo}>
                  <AiFillGithub className="project__icon" />
                </a>
                <a href={project.websiteLink}>
                  <BiLinkExternal className="project__icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
