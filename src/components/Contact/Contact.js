import React from 'react';
import './Contact.css';
import Icon from '../../img/linkedin.png';
import emailjs from '@emailjs/browser';

const sendEmail = (e) => {
  e.preventDefault();
  alert('Your form is submitted successfully!');
  emailjs.sendForm('service_dvt7kk5', 'template_65ppc4l', e.target, 's-UiCzMcYi7iinlhQ');
}
const Contact = () => {
  return (
    <div className='contactForm' id='contact'>
        <h1 className="contactTitle">Contact me</h1>
        <h2 className='sub'>by filling the form</h2>
        <form className='form' onSubmit={sendEmail}>
            <input type='text' className='nameInput' name='from_name' placeholder='Enter your name...'/>
            <input type='email' className='email' name='email_from' placeholder='Enter your email...'/>
            <textarea className='msg' name='message' cols={30} rows={5} placeholder='Enter your message...'></textarea>
            <button className='submit' type='submit' value='send'>Submit</button>
        </form>
        <div className='Linked'>
          <h2 className='sub'>by LinkedIn</h2>
          <a href='https://www.linkedin.com/in/ivana-stojadinović-4806582a8' target='_blank'><img src={ Icon } alt='LinkedIn' className='LinkedInLogo' /></a>
        </div>
    </div>
  )
}

export default Contact;