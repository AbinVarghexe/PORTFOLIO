import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container">
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
        <img src="./img1.png" alt="" />
      </div>
      <img src="./profile.jpg" alt="" />
    </div>
    <div>
        <div className="tech-icon">
            <img src ="./html.svg"/>
        </div>
        <div className="tech-icon">
            <img src ="./tail.svg"/>
        </div>
        <div className="tech-icon">
            <img src ="./css.svg"/>
        </div>
    </div>
  </div>
 </section>
  )
}

export default Hero
