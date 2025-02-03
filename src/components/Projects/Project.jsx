import React from "react";
import "../Projects/project.css";

const Project = () => {
  return (
    <section className="project-section" id="project">
      <div className="project-info">
        <h1>PROJECTS</h1>
        <p>
          Visualisations of all types of designs, I create for clients. From
          Awesome projects to Illustrations and landing pages.
        </p>
      </div>
      <div className="project-cards">
        <div className="project-card">
          <h2>Weather App</h2>
          <div className="project-image" id="weather"></div>
          <div className="project-buttons">
            <a href="https://github.com/20Bibek/Weather-app" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://2025weather-app.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <h2>Calculator</h2>
          <div className="project-image" id="calculator"></div>
          <div className="project-buttons">
            <a href="https://github.com/20Bibek/Calculator" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://dynamic-calculat0r.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <h2>PUMA Clone</h2>
          <div className="project-image" id="puma"></div>
          <div className="project-buttons">
            <a href="https://github.com/20Bibek/PUMA-clone" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://pumaonline.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
        <div className="project-card">
          <h2>PUMA Clone</h2>
          <div className="project-image" id="puma"></div>
          <div className="project-buttons">
            <a href="https://github.com/20Bibek/PUMA-clone" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://pumaonline.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
