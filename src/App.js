import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro section/Intro";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import './App.css';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
