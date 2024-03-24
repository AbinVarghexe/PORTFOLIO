import React from "react";
import { Link } from "react-scroll";
import "./MobileNav.css";
const handleMailClick = () => {
  // Open the default mail client with the specified email address
  window.open("mailto:abinvarghese092005@gmail.com");
};
const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <h2 className="logo" alt="">
            ABIN.
          </h2>
          <ul>
            <li>
              <Link
                className="menu-item"
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="menu-item"
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="menu-item"
                to="projects"
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="menu-item"
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>

            <button className="contact-btn" onClick={handleMailClick}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
