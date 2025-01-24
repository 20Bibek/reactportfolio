import React from "react";
import "../Projects/project.css";

const Project = () => {
  return (
    <div className="project" id="project">
      <div className="pleft">
        <div className="left-box">
        <h1>Projects</h1>
        <p>
        Visualisations of all types of designs, I have created. From Awesome projects to Illustrations and landing pages.
        </p>
        </div>
      </div>
      <div className="pright">
        <div className="pcard">
          <div className="ptop">
            <h2>Weather App</h2>
            <div className="btn">
            <a href="https://github.com/20Bibek/Weather-app"><button>GitHub</button></a>
                <a href="https://2025weather-app.netlify.app/"><button>Live Demo</button></a>
            </div>
          </div>
          <div className="pbottom" id="weather"></div>
        </div>
        <div className="pcard">
        <div className="ptop">
            <h2>Calculator</h2>
            <div className="btn">
                <a href="https://github.com/20Bibek/Calculator"><button>GitHub</button></a>
                <a href="https://dynamic-calculat0r.netlify.app/"><button>Live Demo</button></a>
            </div>
          </div>
          <div className="pbottom" id="calculator"></div>
        </div>
        <div className="pcard">
        <div className="ptop">
            <h2>PUMA Clone</h2>
            <div className="btn">
            <a href="https://github.com/20Bibek/PUMA-clone"><button>GitHub</button></a>
                <a href="https://pumaonline.netlify.app/"><button>Live Demo</button></a>
            </div>
          </div>
          <div className="pbottom" id="puma"></div>
        </div>
        <div className="pcard" id="box-card">
          <div className="imgbox">
            <button>Enhance</button>
          </div>
          <div className="imgbox">
            <button>Try it</button>
          </div>
          <div className="imgbox">
            <button>Bubble</button>
          </div>
          <div className="imgbox">
            <button>Design</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
