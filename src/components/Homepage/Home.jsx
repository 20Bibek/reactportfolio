import React from "react";
import "../Homepage/home.css"
import Navbar from "../Navbar/Navbar";

const Home = () => {
  
  return (
    <div className="home" id="home">
      <div className="lefthome">
        <div className="lefthome-card">
            <h1 className="animatedlogo">BIBEK DASH</h1>
            <p>MERN STACK DEVELOPER</p>
        </div>
      </div>
      <div className="righthome">
        <div className="leftone">
          <div className="img-container"></div>
        </div>
        <div className="rightone">
          <div className="card">
          <div id="motiv">
                <p>Every pixel <span id="onespan"></span> tells a story; <span id="twospan"></span> every line of code <span id="threespan"></span> makes it real :)</p>
              </div>
          </div>
          <div className="card">
            <h3>Focus</h3>
            <div className="btn-container">
              <button>Less-Code</button>
              <button>Illustration</button>
              <button>UI/UX</button>
              <button>AI</button>
              <button>Visualisation</button>
              <button>Colors</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
