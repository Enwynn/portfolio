import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import NavBar from './components/Nav/NavBar';
import About from './components/About/About';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Work />
      <Skills />
      <Education />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
