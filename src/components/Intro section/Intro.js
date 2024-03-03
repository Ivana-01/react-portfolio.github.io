import React from 'react';
import './Intro.css';
import me from '../../img/me.png'
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
const Intro = () => {
  return (
    <section id='intro' className='intro'>
        <div className='introText'>
            <AnimatedOnScroll animationIn="zoomInRight" animationInDelay='1000' animationOut="fadeOut" className='hello'>Hi, my name is</AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay='2000' animationOut="fadeOut" className='name'>Ivana Stojadinović</AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay='2500' animationOut="fadeOut" className='about'>Fullstack Developer<br/>- MERN stack -</AnimatedOnScroll>
        </div>
        <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut" className='meImg'>
        <img src={ me } alt="Ivana" className='me'/>
        </AnimatedOnScroll>
    </section>
  )
}

export default Intro