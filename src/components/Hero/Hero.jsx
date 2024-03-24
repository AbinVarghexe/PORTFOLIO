import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll';

const Hero = () => {

  return (
    <section id='home' className="hero-container">
    <div className="hero-content">
    <h2>I'AM ABIN VARGHESE</h2>
     <p>
      Passionate Frontend Developer
    </p>
    <div className="btns">
    <a href="./doc/Abin-Varghese.pdf" className='resume' download>Resume</a>
    <Link className="Contact" to="contact" smooth={true} duration={500}>Contact Me</Link>
    </div>
  </div>
  <div className="hero-img">
    <div>
      <div className="tech-icon">
        <img src="./element-icon/img1.png" alt="" />
      </div>
      <img src="./main-img/profile.jpg" alt="" />
    </div>
    <div>
        <div className="tech-icon">
            <img src ="./element-icon/html.svg" alt="html icon"/>
        </div>
        <div className="tech-icon">
            <img src ="./element-icon/tail.svg" alt="tailwind icon"/>
        </div>
        <div className="tech-icon">
            <img src ="./element-icon/css.svg" alt="css icon"/>
        </div>
    </div>
  </div>
 </section>
  )
}

export default Hero
