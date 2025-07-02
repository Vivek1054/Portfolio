import React from 'react';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Chanakya – Voice Assistant',
      organization: 'Final Year BSc IT Project',
      duration: '2024 - 2025',
      location: 'Malad, Mumbai, India',
      type: 'project',
      description:
        'Python-based voice assistant supporting both voice and text commands using NLP, speech recognition, and automation. Built with Eel, MySQL, and modern web technologies.',
      achievements: [
        'Dual Input Support: Voice via Porcupine & SpeechRecognition, Text via Chat UI',
        'Hotword Detection, Text-to-Speech, App/Web Automation, Chatbot via HugChat',
        'Web-based interactive UI with Textillate.js, SiriWave, and responsive design',
        'WhatsApp Messaging/Calling via ADB integration',
        'Multiple User Modes: Guest (trial), Login (full access), Incognito (no data stored)',
        'Login system with session-based access and chat history (MySQL backend)',
        'Integrated theming and incognito mode toggle for enhanced user privacy',
      ],
      technologies: [
        'Python', 'JavaScript', 'Eel', 'HTML', 'CSS', 'Bootstrap',
        'MySQL', 'SQLite', 'Textillate.js', 'Porcupine', 'pyttsx3'
      ],
    },
    {
      title: 'MarkTask – Smart To-Do App',
      organization: 'Personal React Project',
      duration: '2025',
      location: 'Malad, Mumbai, India',
      type: 'project',
      description:
        'MarkTask is a smart, animated To-Do list app built with React, Framer Motion, and Tailwind CSS. It lets users add, mark as complete, delete tasks, and set optional time-based reminders with local notifications. It features a modern dark/light mode, persistent local storage, and an intuitive UX.',
      achievements: [
        'Add, edit, complete, and delete tasks with smooth animations',
        'Tracks created, completed, and deleted timestamps for each task',
        'Optional reminders with custom duration and alerts',
        'Animated UI using Framer Motion for a modern feel',
        'Theme toggle with dark/light mode saved in localStorage',
        'View history of completed and deleted tasks',
        'Fully responsive, works on desktop and mobile',
        'Future-ready for backend integration with user login & database'
      ],
      technologies: [
        'React', 'JavaScript', 'Framer Motion', 'Tailwind CSS',
        'LocalStorage', 'HTML', 'CSS', 'Node.js (planned)', 'SQLite (planned)'
      ],
    },


  ];

  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-6 h-6 text-blue-500" />;
      default:
        return <div className="w-6 h-6 bg-blue-500 rounded-full" />;
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Experience</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A brief of my academic journey and technical projects so far.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-5 w-8 h-8 bg-white dark:bg-slate-900 border-4 border-blue-500 rounded-full flex items-center justify-center">
                  {getIcon(exp.type)}
                </div>

                <div className="ml-16 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                        {exp.organization}
                      </p>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar size={14} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium text-slate-800 dark:text-white mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-slate-600 dark:text-slate-300 text-sm flex items-start"
                        >
                          <span className="text-emerald-500 mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white mb-2">
                      Technologies Used:
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <li
                          key={i}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
