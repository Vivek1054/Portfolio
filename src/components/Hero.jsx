import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-orange-500 bg-clip-text text-transparent">
              Vivek Lalchand Gupta
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-8 font-light">
            Software Developer & Technology Enthusiast
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about building intelligent software solutions with Python, Java, and modern web technologies.
            I have completed my BSc in Information Technology at Prahladrai Dalmia Lions College, Mumbai.
          </p>
        </div>

        <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Mail size={20} />
            Get In Touch
          </button>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Vivek1054"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/vivek-gupta-7142a4364"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="tel:+9198676 98367"
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-110 transition-all duration-300"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
