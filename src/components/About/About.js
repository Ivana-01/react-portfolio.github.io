import React from 'react';
import './About.css';
import html from '../../img/html.png';
import css from '../../img/css.png';
import js from '../../img/js.png'
import git from '../../img/git.png'
import react from '../../img/react.png'
import mongodb from '../../img/mongodb.png'
import node from '../../img/nodejs.png'
import express from '../../img/express.png'
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

const About = () => {
  return (
    <section id='about'>
        <div className='aboutMe'>
            <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut" className='aboutTitle'>About me</AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay='500' animationOut="fadeOut" className='aboutPara'>Goal-oriented and ambitious Full stack Developer Intern with solid foundation of <strong>MERN stack.</strong> Demonstrated proficiency in writing visually appealing and responsive web interfaces. Eager to apply academic knowledge in a practical, real-world projects and gain experience in frontend development. Seeking a position opportunity to further enhance skills with innovative collaboration environment.</AnimatedOnScroll>
        </div>
        <div className='codeSkill'>
            <h1 className='title'>My skills</h1>
            <h2 className='subtitle'>Coding knowledge</h2>
            <div className='blocks'>
                <AnimatedOnScroll animationIn="flipInY" animationInDelay='500' animationOut="flipOutY" className='block'>
                    <img className='blockImg' src={ html } alt='HTML'/>
                    <span className='blockTitle'>HTML</span>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="flipInY" animationInDelay='1000' animationOut="flipOutY" className='block'>
                    <img className='blockImg' src={ css } alt='CSS'/>
                    <span className='blockTitle'>CSS</span>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="flipInY" animationInDelay='1500' animationOut="flipOutY" className='block'>
                    <img className='blockImg' src={ js } alt='Javascript'/>
                    <span className='blockTitle'>JavaScript</span>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="flipInY" animationInDelay='2000' animationOut="flipOutY" className='block'>
                    <img className='blockImg' src={ git } alt='Git'/>
                    <span className='blockTitle'>Git</span>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="flipInY" animationInDelay='3000' animationOut="flipOutY" className='block'>
                    <img className='blockImg' src={ mongodb } alt='mongoDB'/>
                    <span className='blockTitle'>MongoDB</span>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="flipInY" animationInDelay='3500' animationOut="flipOutY" className='block'>
                    <img className='blockImg' src={ express } alt='Express.js'/>
                    <span className='blockTitle'>Express.js</span>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="flipInY" animationInDelay='4000' animationOut="flipOutY" className='block'>
                    <img className='blockImg' src={ react } alt='ReactJS'/>
                    <span className='blockTitle'>ReactJS</span>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="flipInY" animationInDelay='4500' animationOut="flipOutY" className='block'>
                    <img className='blockImg' src={ node } alt='Node.js'/>
                    <span className='blockTitle'>Node.js</span>
                </AnimatedOnScroll>
            </div>
        </div>
        <div className='personalSkill'>
            <h2 className='subtitle'>Personal skills</h2>
            <ul className="list">
                <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeOutRight">
                    <li className='listItem zero'>Fluency in english</li>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInLeft" animationInDelay='500' animationOut="fadeOutRight" >
                    <li className='listItem one'>Continuous learning and improvement</li>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInLeft" animationInDelay='1000' animationOut="fadeOutRight">
                    <li className='listItem two'>Quick learner</li>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInLeft" animationInDelay='1500' animationOut="fadeOutRight">
                    <li className='listItem three'>Analytical and logical thinking</li>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInLeft" animationInDelay='2000' animationOut="fadeOutRight">
                    <li className='listItem four'>Collaboration and teamwork</li>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInLeft" animationInDelay='2500' animationOut="fadeOutRight">
                    <li className='listItem five'>Prioritization and adaptability</li>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInLeft" animationInDelay='3000' animationOut="fadeOutRight">
                    <li className='listItem six'>Creativity and innovative approach</li>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInLeft" animationInDelay='3500' animationOut="fadeOutRight">
                    <li className='listItem seven'>Attention to detail</li>
                </AnimatedOnScroll>
            </ul>
        </div>
    </section>
  )
}

export default About;