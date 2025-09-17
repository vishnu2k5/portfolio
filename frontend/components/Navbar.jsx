import React from "react";
import "./Navbar.css";
import { Link, Element, Events, scrollSpy } from "react-scroll";
import { useEffect , useState,useRef } from "react";
import Home from "./Home";
import Projects from "./projects";

const Navbar = () => {
  return (

    <>
    <div className="navbar">
      <img src="logo.png" alt="Logo" />
      <nav className="navbar-links">
        <Link
          to="home"
          smooth={true}
          spy={true}
          offset={-70} // adjust for navbar height
          duration={500}
          activeClass="text-blue-600 font-bold"
          className="Link"
        >
          Home
        </Link>
      
        <Link
          to="projects"
          smooth={true}
          spy={true}
          offset={-70} // adjust for navbar height
          duration={500}
          activeClass="text-blue-600 font-bold"
          className="Link"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          spy={true}
          offset={-70} // adjust for navbar height
          duration={500}
          activeClass="text-blue-600 font-bold"
          className="Link"
        >
          Contact
        </Link>
      </nav>
    </div>
    <div className="home-section">
    <Element name="home">
      <Home />
    </Element>
    </div>
    <div>
    <Element
      name="projects"
    >
      <Projects />
    </Element>
    </div>
    </>
  );
};

export default Navbar;
