import React from "react";
import "../Homepage/home.css"
import Navbar from "../Navbar/Navbar";

const Home = () => {
  
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="left-section">
          <h1>Bibek Dash</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ut rerum aut magnam beatae esse officia ullam et culpa velit.
          </p>
        <a href="./DashBibek.pdf" download="Bibek_Dash.pdf"><button>CV</button></a>

        </div>

        

        <div className="right-section">
          <div className="status-card">
            <h4>AT THE MOMENT</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, est exercitationem? Excepturi quos voluptatem provident numquam necessitatibus. Ducimus, nihil illo! Repellendus soluta id recusandae impedit fuga officia quisquam perspiciatis sapiente.
            </p>
          </div>

          <div className="niche-card">
            <h4>FOCUS</h4>
            <div className="niche-tags">
              <button>No-code</button>
              <button>Illustration</button>
              <button>UI/UX</button>
              <button>AI Tools</button>
              <button>Visual Design</button>
              <button>SaaS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
