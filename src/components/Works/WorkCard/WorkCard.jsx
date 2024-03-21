import React from 'react'
import './WorkCard.css'

const WorkCard = ({details}) => {
  return (
    <section className='project-session'>
        <div className="hero-content">
    <h2>Building Digital Experiences That Inspire</h2>
     <p>
      Passionate Frontend Developer I Transforming Ideas into Seamless and
      Visually Stunning Web Solutions
    </p>
  </div>
   
    <div className="work-experience-card">
      <h6>{details.title}</h6>
      <div className="work-duration">{details.description}
      <div className="project-image">
        <img src={details.imageUrl} alt={details.imageUrl} />
    </div>
      </div>
     
    </div>
    </section>
  )
}

export default WorkCard


