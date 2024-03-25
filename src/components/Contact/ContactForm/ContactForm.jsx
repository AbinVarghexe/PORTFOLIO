import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
          "service_evatijd",
        "template_93uhmph",
        form.current,
        "3Hm36DD86CEG7S2Fg",
        )
    .then((result) => {
      console.log(result.text);
      alert('Email sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send email. Please try again.');
    });
  };

  return (
    <div className="contact-form-content">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-container">
          <input type="text" name="user_first_name" placeholder="First Name" required />
          <input type="text" name="user_last_name" placeholder="Last Name" required />
        </div>
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows="3" required></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm