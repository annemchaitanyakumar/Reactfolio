import logo from './logo.svg';
import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import About from './components/About';
import Projects from './components/projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      < Navbar />
      < Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;