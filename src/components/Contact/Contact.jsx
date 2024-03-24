import React from 'react'
import './Contact.css'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (

  <section id='contact' className="contact-container">
    <h5>Contact Me</h5>
    <div className="contact-content">
      <div style={{ flex: 1 }}>
        <ContactForm />
      </div>
      <div className='gif' style={{ flex: 1 }}>
        <img src="./main-img/msg.gif" alt="" />
      </div>
    </div>
  </section>

  )
}

export default Contact