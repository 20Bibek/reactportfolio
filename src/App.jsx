import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Homepage/Home";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Collaborate from "./components/Collaborate/Collaborate";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route for Collaborate page */}
        <Route path="/collaborate" element={<Collaborate />} />
        
        {/* Static content */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Project />
              <Contact />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
