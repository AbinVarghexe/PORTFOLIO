import React from "react";
import "./MobileNav.css";
const handleMailClick = () => {
  // Open the default mail client with the specified email address
  window.open("mailto:abinvarghese092005@gmail.com");
};

 const handleLinkClick = () => {
  // Close the menu after a link is clicked
  toggleMenu();
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
              <a
                className="menu-item"
                href="#home"
                onClick={handleLinkClick}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                href="#skills"
                onClick={handleLinkClick}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                className="menu-item"
                href="#education"
                onClick={handleLinkClick}
              >
                Education
              </a>
            </li>


            <li>
              <a
                className="menu-item"
                href="#projects"
                
              >
                Projects
              </a>
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
