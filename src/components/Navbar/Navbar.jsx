import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FiAlignRight } from "react-icons/fi";
import MobileNav from "../MobileNav/MobileNav";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [navBarVisible, setNavBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setNavBarVisible(false);
    } else {
      setNavBarVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleMailClick = () => {
    // Open the default mail client with the specified email address
    window.open("mailto:abinvarghese092005@gmail.com");
  };

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <div>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className={`nav-wrapper ${navBarVisible ? "" : "hidden"}`}>
        <div className="nav-content">
          <h2 className="logo">ABIN.</h2>
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
                to="education"
                smooth={true}
                duration={500}
              >
                Education
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

            <button className="contact-btn" onClick={handleMailClick}>
              Hire Me
            </button>
          </ul>

          <button onClick={toggleMenu} className="menu-btn">
            <span>{openMenu ? <IoClose /> : <FiAlignRight />}</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
