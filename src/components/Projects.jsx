import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Existing CHANAKYA images
import img1 from '../assets/Chanakya project images/homepage.png';
import img2 from '../assets/Chanakya project images/demo.png';
import img3 from '../assets/Chanakya project images/loginpage.png';
import img4 from '../assets/Chanakya project images/registerpage.png';
import img5 from '../assets/Chanakya project images/Explore or guest page.png';
import img6 from '../assets/Chanakya project images/try command.png';
import img7 from '../assets/Chanakya project images/demo1.png';
import img8 from '../assets/Chanakya project images/incognito page.png';
import img9 from '../assets/Chanakya project images/siri wave.png';
import img10 from '../assets/Chanakya project images/demo menu.png';

// ✅ MarkTask images
import completedTask from '../assets/MarkTask img/completed task.png';
import darkMode from '../assets/MarkTask img/dark mode.png';
import lightMode from '../assets/MarkTask img/light mode.png';
import deletedTask from '../assets/MarkTask img/deleted task.png';
import login from '../assets/MarkTask img/login.png';
import register from '../assets/MarkTask img/register.png';
import taskAdd from '../assets/MarkTask img/Task Add.png';
import taskAdd1 from '../assets/MarkTask img/Task Add1.png';
import taskFinishReminder from '../assets/MarkTask img/task finish reminder.png';

const Projects = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const projects = [
    {
      title: 'CHANAKYA Voice Assistant',
      description:
        'CHANAKYA is an AI-powered voice assistant and web application designed for managing student records and performing smart tasks. Built using Python, MySQL, SQLite, HTML, CSS, and JavaScript, it features student registration, grade management, reporting, and voice-controlled commands for enhanced usability.',
      images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
      technologies: ['Python', 'MySQL', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Vivek1054/CHANAKYA',
      featured: true,
      // ✅ Notice: No LiveUrl for CHANAKYA!
    },
    {
      title: 'MarkTask To-Do App',
      description:
        'MarkTask is a smart To-Do list app with dark mode, reminders, task completion, history, and login authentication screens. Built with React and TailwindCSS, it uses localStorage for data persistence and supports animated UI with Framer Motion.',
      images: [
        login,
        register,
        darkMode,
        lightMode,
        taskAdd,
        taskAdd1,
        completedTask,
        taskFinishReminder,
        deletedTask,
      ],
      technologies: ['React', 'TailwindCSS', 'Framer Motion'],
      githubUrl: 'https://github.com/Vivek1054/Project-MarkTask',
      LiveUrl: 'https://project-mark-task-6khw.vercel.app/',
      featured: true,
    },
  ];

  const openLightbox = (images) => {
    setSelectedImages(images);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setSelectedImages([]);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of my academic and personal projects demonstrating various technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <div
                key={index}
                onClick={() => openLightbox(project.images)}
                className="cursor-pointer group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.LiveUrl && (
                      <a
                        href={project.LiveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white text-2xl"
            >
              &times;
            </button>
            <div className="flex gap-4 overflow-x-auto p-4">
              {selectedImages.map((imgSrc, i) => (
                <img
                  key={i}
                  src={imgSrc}
                  alt={`Screenshot ${i + 1}`}
                  className="h-[80vh] object-contain rounded-lg"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
