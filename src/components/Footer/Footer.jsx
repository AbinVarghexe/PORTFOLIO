import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialIcons">
        <a href="https://github.com/ABIN-VARGHEXE" target="_blank"  className="icon">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/abin_varghese._/" target="_blank" className="icon">
          <FaInstagram />
        </a>
        <a href="mailto:abinvarghese092005@gmail.com"  className="icon">
        <SiGmail />
        </a>
        <a href="https://www.linkedin.com/in/abinvarghese0/" target="_blank" className="icon">
          <FaLinkedin />
        </a>
      </div>

      <div className="infoText">
        © {new Date().getFullYear()} - THANKS FOR VISITING..!!
      </div>
    </footer>
  );
};

export default Footer;
