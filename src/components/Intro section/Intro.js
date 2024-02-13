import React from 'react';
import './Intro.css';
import me from '../../img/me.png'
import { Link } from 'react-scroll';
const Intro = () => {
  return (
    <section id='intro' className='intro'>
        <div className='introText'>
            <span className='hello'>Hello, my name is<br/></span>
            <span className='name'>Ivana Stojadinović<br/></span>
            <span className='about'>Frontend developer</span>
            <Link>
                <button className='introBtn' onClick={()=>{document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}>Contact me</button>
            </Link>
        </div>
        <img src={ me } alt="Ivana" className='me'/>
    </section>
  )
}

export default Intro