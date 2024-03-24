import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id='home' className="hero-container">
    <div className="hero-content">
    <h2>Building Digital Experiences That Inspire</h2>
     <p>
      Passionate Frontend Developer I Transforming Ideas into Seamless and
      Visually Stunning Web Solutions
    </p>
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
            <img src ="./element-icon/html.svg"/>
        </div>
        <div className="tech-icon">
            <img src ="./element-icon/tail.svg"/>
        </div>
        <div className="tech-icon">
            <img src ="./element-icon/css.svg"/>
        </div>
    </div>
  </div>
 </section>
  )
}

export default Hero
