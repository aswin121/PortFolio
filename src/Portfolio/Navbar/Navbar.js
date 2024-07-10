import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleLinkClick = () => {
    setTimeout(() => {
      AOS.refresh();
    }, 500); // Adjust delay as needed
  };

  return (
    <nav className="navbar" data-aos="fade-down">
      <div className="navbar-logo">Maria Antony Aswin S</div>
      <div className="navbar-links-div">
        <ul className="navbar-links">
          <li>
            <a href="#home" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
