import React from 'react';
import './About.css';
import html from '../../img/html.png';
import css from '../../img/css.png';
import js from '../../img/js.png'
import git from '../../img/git.png'
import react from '../../img/react.png'

const About = () => {
  return (
    <section id='about'>
        <div className='aboutMe'>
            <h1 className='aboutTitle'>About me</h1>
            <p className='aboutPara'>Goal-oriented and ambitious Frontend Developer Intern with solid foundation of <strong>HTML, CSS, JavaScript and React.</strong> Demonstrated proficiency in writing visually appealing and responsive web interfaces. Eager to apply academic knowledge in a practical, real-world projects and gain experience in frontend development. Seeking a position opportunity to further enhance skills with innovative collaboration environment.</p>
        </div>
        <div className='codeSkill'>
            <h1 className='title'>My skills</h1>
            <h2 className='subtitle'>Coding knowledge</h2>
            <div className='blocks'>
                <div className='block'>
                    <img className='blockImg' src={ html } alt='HTML'/>
                    <span className='blockTitle'>HTML</span>
                </div>
                <div className='block'>
                    <img className='blockImg' src={ css } alt='CSS'/>
                    <span className='blockTitle'>CSS</span>
                </div>
                <div className='block'>
                    <img className='blockImg' src={ js } alt='Javascript'/>
                    <span className='blockTitle'>JavaScript</span>
                </div>
                <div className='block'>
                    <img className='blockImg' src={ git } alt='Git'/>
                    <span className='blockTitle'>Version control</span>
                </div>
                <div className='block'>
                    <img className='blockImg' src={ react } alt='ReactJS'/>
                    <span className='blockTitle'>ReactJS</span>
                </div>
            </div>
        </div>
        <div className='personalSkill'>
            <h2 className='subtitle'>Personal skills</h2>
            <ul className="list">
                <li className='listItem'>Fluency in english</li>
                <li className='listItem'>Continuous learning and improvement</li>
                <li className='listItem'>Quick learner</li>
                <li className='listItem'>Analytical and logical thinking</li>
                <li className='listItem'>Collaboration and teamwork</li>
                <li className='listItem'>Prioritization and adaptability</li>
                <li className='listItem'>Creativity and innovative approach</li>
                <li className='listItem'>Attention to detail</li>
            </ul>
        </div>
    </section>
  )
}

export default About;