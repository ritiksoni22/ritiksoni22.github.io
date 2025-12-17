import { useEffect, useState } from 'react';
import './app.css';
// components
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from './components/Projects/Projects';
import Experiences from './components/Experiences/Experiences';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      return;
    }
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(prefersLight ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="page">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Experiences />
        <div className="footer-note">
          Loosely designed in <span className="underline">Figma</span> and coded in <span className="underline">Visual Studio Code</span> by yours truly. Built with <span className="underline">React.js</span>.
        </div>
      </main>
      <button
        className="theme-toggle"
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span className="toggle-dot" aria-hidden="true"></span>
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
      </button>
    </div>
  );
}

export default App;
