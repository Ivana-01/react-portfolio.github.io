import React from 'react';
import './Portfolio.css';
import clockImg from '../../img/clockJs.png';
import weatherJs from '../../img/weather-app.png';
import stopwatchJs from '../../img/StopwatchJs.png';
import weatherR from '../../img/weather-app-react.png';
import movieR from '../../img/movie-app.png';
import sasori from '../../img/sasori.png';
import index from '../../img/index-bookstore.png';
import books from '../../img/books-bookstore.png';
import book from '../../img/book-bookstore.png';
import addbook from '../../img/addbook-bookstore.png';


const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
        <h1 className='Ptitle'>My Portfolio</h1>
        <h2 className='Psubtitle'>MERN stack projects</h2>
        <div className="mernProjects">
          <div className='mernProject'>
            <h3>Bookstore project:</h3>
            <a href='https://github.com/Ivana-01/mernBookstore.github.io/' target='_blank' className='projectRepo'>GitHub Repo</a>
            <div className='mernImgDiv'>
              <img src={ books } alt='index page' className='mernImg'/>
              <div className='mernImgDivCol2'>
                <img src={ book } alt='index page' className='mernImg2'/>
                <img src={ addbook } alt='index page' className='mernImg2'/>
              </div>
            </div>
          </div>
        </div>
        <h2 className='Psubtitle'>JavaScript projects</h2>
        <div className="card-container">
          <div className='card'>
            <a href='https://ivana-01.github.io/clock.github.io/' target='_blank' className='project'><img src={ clockImg } alt='' className='projectImg'/></a>
            <a href='https://github.com/Ivana-01/clock.github.io' target='_blank' className='projectRepo'>GitHub Repo</a>
          </div>
          <div className='card'>
            <a href='https://ivana-01.github.io/stopwatch.github.io/' target='_blank' className='project'><img src={ stopwatchJs } alt='' className='projectImg'/></a>
            <a href='https://github.com/Ivana-01/stopwatch.github.io' target='_blank' className='projectRepo'>GitHub Repo</a>
          </div>
          <div className='card'>
            <a href='https://ivana-01.github.io/weather-app-js.github.io/' target='_blank' className='project'><img src={ weatherJs } alt='' className='projectImg'/></a>
            <a href='https://github.com/Ivana-01/weather-app-js.github.io' target='_blank' className='projectRepo'>GitHub Repo</a>
          </div>
        </div>
        <h2 className='Psubtitle'>React projects</h2>
        <div className="card-container">
        <div className='card'>
            <a href='https://ivana-01.github.io/weather-app.github.io/' target='_blank' className='project'><img src={ weatherR } alt='' className='projectImg'/></a>
            <a href='https://github.com/Ivana-01/weather-app.github.io' target='_blank' className='projectRepo'>GitHub Repo</a>
          </div>
          <div className='card'>
            <a href='https://ivana-01.github.io/sasorisstore.github.io/' target='_blank' className='project'><img src={ sasori } alt='' className='projectImg'/></a>
            <a href='https://github.com/Ivana-01/sasorisstore.github.io' target='_blank' className='projectRepo'>GitHub Repo</a>
          </div>
          <div className='card'>
            <a href='https://ivana-01.github.io/movie-app.github.io/' target='_blank' className='project'><img src={ movieR } alt='' className='projectImg'/></a>
            <a href='https://github.com/Ivana-01/movie-app.github.io' target='_blank' className='projectRepo'>GitHub Repo</a>
          </div>
        </div>
    </section>
  )
}

export default Portfolio;
