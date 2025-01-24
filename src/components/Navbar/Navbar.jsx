import React, { useState } from "react";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="leftnav">
        <div className="logo">
          <h2>Bibek Dash</h2>
        </div>
      </div>

      <div className="midnav">
        
          <ul className={isMenuOpen ? "showMenu" : ""}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
          <li><Link to="/collaborate">Collaborate</Link></li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
      </div>

      <div className="rightnav">
        <a href="./DashBibek.pdf" download="Bibek_Dash.pdf"><button>CV</button></a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
