import React from 'react'
import './EducationCard.css'

const EducationCard = ({ details }) => {
  return (
    <div className="education-card">
      <h6>{details.title}</h6>
      <div className="education-duration">{details.date}</div>
      <ul>
        {details.responsibilities.map((item) =>(
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>

  )
}

export default EducationCard