import React from 'react';
import './Contact.css';
import Icon from '../../img/linkedin.png';
import emailjs from '@emailjs/browser';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

const sendEmail = (e) => {
  e.preventDefault();
  alert('Your form is submitted successfully!');
  emailjs.sendForm('service_dvt7kk5', 'template_65ppc4l', e.target, 's-UiCzMcYi7iinlhQ');
}
const Contact = () => {
  return (
    <div className='contactForm' id='contact'>
        <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut" className="contactTitle">Contact me</AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeIn" animationInDelay='500' animationOut="fadeOut" className='sub'>by filling the form</AnimatedOnScroll>
        <form className='form' onSubmit={sendEmail}>
          <AnimatedOnScroll animationIn="fadeInLeft" animationInDelay='1000' animationOut="fadeOut" className='name'>
            <input type='text' className='nameInput' name='from_name' placeholder='Enter your name...'/>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="fadeInRight" animationInDelay='1500' animationOut="fadeOut" className='email'>
            <input type='email' className='emailInput' name='email_from' placeholder='Enter your email...'/>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="fadeInLeft" animationInDelay='2000' animationOut="fadeOut" className='msg'>
            <textarea className='msgInput' name='message' cols={30} rows={5} placeholder='Enter your message...'></textarea>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="fadeIn" animationInDelay='2500' animationOut="fadeOut">
            <button className='submit' type='submit' value='send'>Submit</button>
          </AnimatedOnScroll>
        </form>
        <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut" className='Linked'>
          <h2 className='sub'>by LinkedIn</h2>
          <a href='https://www.linkedin.com/in/ivana-stojadinović-4806582a8' target='_blank'><img src={ Icon } alt='LinkedIn' className='LinkedInLogo' /></a>
        </AnimatedOnScroll>
    </div>
  )
}

export default Contact;