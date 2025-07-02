import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollY = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${isDark ? 'dark' : ''} transition-colors duration-300`}>
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white min-h-screen">
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        <Navigation activeSection={activeSection} />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <footer className="bg-slate-100 dark:bg-slate-800 py-8 text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2025 Vivek Kumar. Crafted with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
