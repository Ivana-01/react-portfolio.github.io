import React from 'react';
import './Portfolio.css';
import clockImg from '../../img/clockJs.png';
import weatherJs from '../../img/weather-app.png';
import stopwatchJs from '../../img/StopwatchJs.png';
import weatherR from '../../img/weather-app-react.png';
import movieR from '../../img/movie-app.png';
import cart from '../../img/cart.png';

const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
        <h1 className='Ptitle'>My Portfolio</h1>
        <h2 className='Psubtitle'>JavaScript projects</h2>
        <div className="card-container">
            <a href='https://ivana-01.github.io/clock.github.io/' target='_blank' className='project'><img src={ clockImg } alt='' className='projectImg'/></a>
            <a href='https://ivana-01.github.io/stopwatch.github.io/' target='_blank' className='project'><img src={ stopwatchJs } alt='' className='projectImg'/></a>
            <a href='https://ivana-01.github.io/weather-app-js.github.io/' target='_blank' className='project'><img src={ weatherJs } alt='' className='projectImg'/></a>
        </div>
        <h2 className='Psubtitle'>React projects</h2>
        <div className="card-container">
            <a href='https://ivana-01.github.io/weather-app.github.io/' target='_blank' className='project'><img src={ weatherR } alt='' className='projectImg'/></a>
            <a href='https://ivana-01.github.io/cart.github.io/' target='_blank' className='project'><img src={ cart } alt='' className='projectImg'/></a>
            <a href='https://ivana-01.github.io/movie-app.github.io/' target='_blank' className='project'><img src={ movieR } alt='' className='projectImg'/></a>
        </div>
    </section>
  )
}

export default Portfolio;
