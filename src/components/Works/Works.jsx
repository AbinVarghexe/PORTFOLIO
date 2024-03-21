import React from 'react'
import './Works.css'
import { PROJECT } from '../../utils/data'
import WorkCard from './WorkCard/WorkCard'


const works = () => {
  return (
    <section className="experience-container">
    <h5>PROJECTS</h5>
    <div className="experience-content">
        {PROJECT.map((item) =>(
            <WorkCard key={item.title} details={item}/>
        ))}
    </div>
  </section>
  
  )
}

export default works