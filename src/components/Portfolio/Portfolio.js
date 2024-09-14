import React from 'react';
import './Portfolio.css';
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
        <AnimatedOnScroll 
          animationIn="fadeIn" 
          animationOut="fadeOut" 
          className='PortfolioTitle'>
            My Portfolio
        </AnimatedOnScroll>
        <AnimatedOnScroll 
          animationIn="fadeIn" 
          animationOut="fadeOut" 
          className='PortfolioTitleDesc'>
            - currently working on Next.js app -
        </AnimatedOnScroll>
        <AnimatedOnScroll 
          animationIn="fadeInLeft" 
          animationOut="fadeOut" 
          className='PortfolioSubtitle'>
            MERN stack projects
        </AnimatedOnScroll>
        <div className="mernProjects">
          <AnimatedOnScroll 
            animationIn="fadeIn" 
            animationOut="fadeOut" 
            className='mernProject'
          >
            <div className='titleContainer'>
              <AnimatedOnScroll 
                animationIn="fadeIn" 
                animationInDelay='500' 
                animationOut="fadeOut"
                className='projectTitle'
              >
                  Bookstore project:
              </AnimatedOnScroll>
              <AnimatedOnScroll 
                animationIn="fadeIn" 
                animationInDelay='1000' 
                animationOut="fadeOut" 
                className='projectRepo'
              >
                <a href='https://github.com/Ivana-01/mernBookstore.github.io/' target='_blank' rel='noreferrer'>
                  GitHub Repo
                </a>
              </AnimatedOnScroll>
            </div>
            <AnimatedOnScroll
              animationIn="fadeIn"
              animationOut="fadeOut"
              className='projectDesc'
            >
              The MERN Stack Bookstore App is a library-style application built using MongoDB, Express.js, React.js, and Node.js. It allows users to browse, search, and explore a collection of books, viewing detailed information such as titles, authors, genres, and descriptions. The app features a user-friendly interface, with book data stored in a MongoDB database and managed through an Express.js and Node.js backend. Designed as a virtual library, it provides a smooth browsing experience.
            </AnimatedOnScroll>
            <AnimatedOnScroll 
              animationIn="fadeIn" 
              animationInDelay='2000' 
              animationOut="fadeOut" 
              className='mernImgDiv'
            >
              <img src={ books } alt='index page' className='mernImg'/>
              <div className='mernImgDivCol2'>
                <img src={ book } alt='index page' className='mernImg2'/>
                <img src={ addbook } alt='index page' className='mernImg2'/>
              </div>
            </AnimatedOnScroll>
          </AnimatedOnScroll>
          <AnimatedOnScroll 
            animationIn="fadeIn" 
            animationOut="fadeOut" 
            className='mernProject'
          >
            <div className='titleContainer'>
              <AnimatedOnScroll 
                animationIn="fadeIn" 
                animationInDelay='500' 
                animationOut="fadeOut"
                className='projectTitle'
              >
                Chat App project:
              </AnimatedOnScroll>
              <AnimatedOnScroll 
                animationIn="fadeIn" 
                animationInDelay='1000' 
                animationOut="fadeOut" 
                className='projectRepo'
              >
                <a href='https://github.com/Ivana-01/mern-chat-app/' target='_blank' rel='noreferrer'>
                  GitHub Repo
                </a>
              </AnimatedOnScroll>
            </div>
            <AnimatedOnScroll
              animationIn="fadeIn"
              animationOut="fadeOut"
              className='projectDesc'
            >
              The MERN Stack Chat App is a messaging application built using MongoDB, Express.js, React.js, and Node.js. It enables users to send and receive messages, creating chat rooms or private conversations. The app features user authentication and stores messages in a MongoDB database for persistence. Although it does not use WebSocket for real-time updates, it periodically fetches new messages from the server to keep conversations up-to-date. The app provides a simple, responsive interface, utilizing the full power of the MERN stack for both frontend and backend development.
            </AnimatedOnScroll>
            <AnimatedOnScroll 
              animationIn="fadeIn" 
              animationInDelay='2000' 
              animationOut="fadeOut" 
              className='mernImgDiv'
            >
              <img src={ app } alt='index page' className='mern2Img'/>
              <div className='mernImgDivCol2'>
                <img src={ log } alt='index page' className='mern2Img2'/>
                <img src={ reg } alt='index page' className='mern2Img2'/>
              </div>
            </AnimatedOnScroll>
          </AnimatedOnScroll>
        </div>
        <AnimatedOnScroll 
          animationIn="fadeInLeft" 
          animationOut="fadeOut" 
          className='PortfolioSubtitle'
        >
          React projects
        </AnimatedOnScroll>
        <div className="card-container">
          <div className="card">
          <AnimatedOnScroll 
            animationIn="flipInY" 
            animationInDelay='500' 
            animationOut="flipOutY"
          >
            <a href='https://ivana-01.github.io/weather-app.github.io/' target='_blank' className='project' rel='noreferrer'>
              <img src={ weatherR } alt='' className='projectImg'/>
            </a>
          </AnimatedOnScroll>
          <AnimatedOnScroll
              animationIn='fadeIn'
              animationOut='fadeOut'
              className='projectBox'
            >
              <h1 className='projectTitle'>Weather App</h1>
              <p className='projectDesc'>The React Weather App is a user-friendly application that provides real-time weather updates for cities worldwide. It features a search bar for city-specific weather data, dynamic icons, and responsive design for a seamless experience on any device. Built with React.js and integrated with a weather API, it displays key information like temperature, humidity and wind speed.</p>
              <a href='https://github.com/Ivana-01/weather-app.github.io' target='_blank' className='projectRepo' rel='noreferrer'>
                GitHub Repo
              </a>
              <p>* Click on the project image for demo.</p>
            </AnimatedOnScroll>
          </div>
          <div className="card">
            <AnimatedOnScroll 
              animationIn="flipInY" 
              animationInDelay='1000' 
              animationOut="flipOutY" 
            >
              <a href='https://ivana-01.github.io/sasorisstore.github.io/' target='_blank' className='project' rel='noreferrer'>
                <img src={ sasori } alt='' className='projectImg'/>
              </a>
            </AnimatedOnScroll>
            <AnimatedOnScroll
                animationIn='fadeIn'
                animationOut='fadeOut'
                className='projectBox'
              >
                <h1 className='projectTitle'>Sasori's store - WebShop</h1>
                <p>The React Webshop App is a simple and intuitive e-commerce platform where users can browse and search for products, add items to their cart, and simulate a checkout process. Built entirely with React.js, the app uses local data to manage products and cart functionality, offering a smooth and responsive shopping experience without the need for user authentication or API integration.</p>
                <a href='https://github.com/Ivana-01/sasorisstore.github.io' target='_blank' className='projectRepo' rel='noreferrer'>
                  GitHub Repo
                </a>
                <p>* Click on the project image for demo.</p>
              </AnimatedOnScroll>
          </div>
          <div className="card">
          <AnimatedOnScroll 
            animationIn="flipInY" 
            animationInDelay='1500' 
            animationOut="flipOutY"
          >
            <a href='https://ivana-01.github.io/movie-app.github.io/' target='_blank' className='project' rel='noreferrer'>
              <img src={ movieR } alt='' className='projectImg'/>
            </a>
          </AnimatedOnScroll>
          <AnimatedOnScroll
              animationIn='fadeIn'
              animationOut='fadeOut'
              className='projectBox'
            >
              <h1 className='projectTitle'>Movie App</h1>
              <p>The React Movie App is a dynamic application that allows users to browse, search, and explore movie information in real-time. Built with React.js and integrated with a movie API, the app fetches and displays details like movie titles, genres, ratings, and descriptions. With features like a searchable movie catalog, filter options, and dynamic rendering of movie details, it provides an engaging and responsive user experience.</p>
              <a href='https://github.com/Ivana-01/movie-app.github.io' target='_blank' className='projectRepo' rel='noreferrer'>
                GitHub Repo
              </a>
              <p>* Click on the project image for demo.</p>
            </AnimatedOnScroll>
          </div>
        </div>
    </section>
  )
}

export default Portfolio;
