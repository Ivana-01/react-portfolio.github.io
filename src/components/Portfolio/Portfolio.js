import React from 'react';
import './Portfolio.css';
import clockImg from '../../img/clockJs.png';
import weatherJs from '../../img/weather-app.png';
import stopwatchJs from '../../img/StopwatchJs.png';
import weatherR from '../../img/weather-app-react.png';
import movieR from '../../img/movie-app.png';
import sasori from '../../img/sasori.png';
import books from '../../img/books-bookstore.png';
import book from '../../img/book-bookstore.png';
import addbook from '../../img/addbook-bookstore.png';
import reg from '../../img/reg.png';
import log from '../../img/log.png';
import app from '../../img/app.png';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';


const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
        <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut" className='PortfolioTitle'>My Portfolio</AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeOut" className='PortfolioSubtitle'>MERN stack projects</AnimatedOnScroll>
        <div className="mernProjects">
          <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut" className='mernProject'>
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay='500' animationOut="fadeOut">Bookstore project:</AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay='1000' animationOut="fadeOut" className='projectRepo'>
              <a href='https://github.com/Ivana-01/mernBookstore.github.io/' target='_blank'>GitHub Repo</a>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay='2000' animationOut="fadeOut" className='mernImgDiv'>
              <img src={ books } alt='index page' className='mernImg'/>
              <div className='mernImgDivCol2'>
                <img src={ book } alt='index page' className='mernImg2'/>
                <img src={ addbook } alt='index page' className='mernImg2'/>
              </div>
            </AnimatedOnScroll>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut" className='mernProject'>
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay='500' animationOut="fadeOut">Chat App project:</AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay='1000' animationOut="fadeOut" className='projectRepo'>
              <a href='https://github.com/Ivana-01/mern-chat-app/' target='_blank'>GitHub Repo</a>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeIn" animationInDelay='2000' animationOut="fadeOut" className='mernImgDiv'>
              <img src={ app } alt='index page' className='mern2Img'/>
              <div className='mernImgDivCol2'>
                <img src={ log } alt='index page' className='mern2Img2'/>
                <img src={ reg } alt='index page' className='mern2Img2'/>
              </div>
            </AnimatedOnScroll>
          </AnimatedOnScroll>
        </div>
        <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeOut" className='PortfolioSubtitle'>JavaScript projects</AnimatedOnScroll>
        <div className="card-container">
          <AnimatedOnScroll animationIn="flipInY" animationInDelay='500' animationOut="flipOutY" className='card'>
            <a href='https://ivana-01.github.io/clock.github.io/' target='_blank' className='project'><img src={ clockImg } alt='' className='projectImg'/></a>
            <a href='https://github.com/Ivana-01/clock.github.io' target='_blank' className='projectRepo'>GitHub Repo</a>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="flipInY" animationInDelay='1000' animationOut="flipOutY" className='card'>
            <a href='https://ivana-01.github.io/stopwatch.github.io/' target='_blank' className='project'><img src={ stopwatchJs } alt='' className='projectImg'/></a>
            <a href='https://github.com/Ivana-01/stopwatch.github.io' target='_blank' className='projectRepo'>GitHub Repo</a>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="flipInY" animationInDelay='1500' animationOut="flipOutY" className='card'>
            <a href='https://ivana-01.github.io/weather-app-js.github.io/' target='_blank' className='project'><img src={ weatherJs } alt='' className='projectImg'/></a>
            <a href='https://github.com/Ivana-01/weather-app-js.github.io' target='_blank' className='projectRepo'>GitHub Repo</a>
          </AnimatedOnScroll>
        </div>
        <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeOut" className='PortfolioSubtitle'>React projects</AnimatedOnScroll>
        <div className="card-container">
        <AnimatedOnScroll animationIn="flipInY" animationInDelay='500' animationOut="flipOutY" className='card'>
            <a href='https://ivana-01.github.io/weather-app.github.io/' target='_blank' className='project'><img src={ weatherR } alt='' className='projectImg'/></a>
            <a href='https://github.com/Ivana-01/weather-app.github.io' target='_blank' className='projectRepo'>GitHub Repo</a>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="flipInY" animationInDelay='1000' animationOut="flipOutY" className='card'>
            <a href='https://ivana-01.github.io/sasorisstore.github.io/' target='_blank' className='project'><img src={ sasori } alt='' className='projectImg'/></a>
            <a href='https://github.com/Ivana-01/sasorisstore.github.io' target='_blank' className='projectRepo'>GitHub Repo</a>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="flipInY" animationInDelay='1500' animationOut="flipOutY" className='card'>
            <a href='https://ivana-01.github.io/movie-app.github.io/' target='_blank' className='project'><img src={ movieR } alt='' className='projectImg'/></a>
            <a href='https://github.com/Ivana-01/movie-app.github.io' target='_blank' className='projectRepo'>GitHub Repo</a>
          </AnimatedOnScroll>
        </div>
    </section>
  )
}

export default Portfolio;
