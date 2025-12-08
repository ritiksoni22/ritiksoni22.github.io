import './app.css';
// components
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from './components/Projects/Projects';
import Experiences from './components/Experiences/Experiences';

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <div className="intro-grid">
          <About />
          <Skills />
        </div>
        <Projects />
        <Experiences />
        <div className="footer-note">
          <p>
            Loosely designed in <span className="underline">Figma</span> and coded in <span className="underline">Visual Studio Code</span> by yours truly. Built with <span className="underline">React.js</span>.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
