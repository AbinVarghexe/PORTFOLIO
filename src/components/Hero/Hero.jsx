import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll';
import { Fade } from "react-awesome-reveal";

const Hero = () => {

  return (
    <section id='home' className="hero-container">
     
    <div className="hero-content">
    <Fade direction='down'delay={10} triggerOnce= {true}>
    <h2>I'AM ABIN VARGHESE</h2>
    </Fade>
    <Fade direction='down'delay={150} triggerOnce= {true}>
     <p>
      Passionate Frontend Developer
    </p>
    </Fade >
    <div className="btns">
      <Fade direction='up'delay={400} triggerOnce= {true}>
    <a href="./doc/Abin-Varghese.pdf" className='resume' download>Resume</a>
    </Fade>
    <Fade direction='up'delay={650} triggerOnce= {true} duration={900}>
    <Link className="Contact" to="contact" smooth={true} duration={500}>Contact Me</Link>
    </Fade>
    </div>
  </div>
  

  <Fade direction='up'delay={650} triggerOnce= {true} duration={1000}>
  <div className="hero-img">
    <div>
      <img src="./main-img/profile.jpg" alt="" />
    </div>
  </div>
  </Fade>
 </section>
  )
}

export default Hero
