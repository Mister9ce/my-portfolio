import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m2xk9ur', 'template_m15sv8r', form.current, 'Ui2xKfpZUSFgRJ4tP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

   

  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="container contact__options">
            <article className="contact__option">
              <AiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>ankomah01@gmail.com</h5>
              <a href="mailto:ankomah01@gmail.com" rel="noreferrer" target='_blank'>Send a message</a>
            </article>

            <article className="contact__option">
              <AiFillLinkedin contact__option-icon/>
              <h4>LinkedIn</h4>
              <h5>Kissi Emmanuel</h5>
              <a href="https://www.linkedin.com/in/emmanuel-a-851838121/"  rel="noreferrer" target='_blank'>Send a message</a>
            </article>

            <article className="contact__option">
              <AiOutlineWhatsApp contact__option-icon/>
              <h4>WhatsApp</h4>
              <h5>+233205281662</h5>
              <a href="https://wa.me/233205281662"rel="noreferrer" target='_blank'>Send a message</a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name'  placeholder='Your Full Name' required/>
            <input type="text" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>

            <button type='submit' className='btn btn-primary'>Send Message</button>

          </form>
        </div>
 </section>
  )
}

export default Contact
