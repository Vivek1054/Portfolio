import React from 'react';
import { Code, GraduationCap, Target } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50"
    >
      <div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              IT student with a passion for software
              development and emerging technologies
            </p>
          </div>

          {/* <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-emerald-400 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
              <img
                src="/img.jpg"
                alt="Vivek Gupta"
                className="w-full h-full object-cover"
              />
              
            </div>
          </div>

          <div className="space-y-8 mt-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hello! I'm Vivek</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                I'm a dedicated Computer Science Engineering student with a
                strong foundation in programming and software development. My
                journey in technology has equipped me with skills in Java,
                Python, and modern web technologies, along with experience in
                database management and system design.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm passionate about solving complex problems through code and
                continuously learning new technologies. My goal is to contribute
                to innovative projects that make a meaningful impact in the tech
                industry.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Code className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Programming</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Java, Python, Web Dev
                </p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <GraduationCap className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Education</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  BSc.IT (Graduated)
                </p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Target className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Focus</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Software Solutions
                </p>
              </div>
            </div> */}
          {/* </div> */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Image */}
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-emerald-400 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
              <img
                src="/img.jpg"
                alt="Vivek Gupta"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT: Text content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Hello! I'm Vivek</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  I'm a dedicated BSc.IT student with a strong foundation in programming
                  and software development. My journey in technology has equipped me with skills in Java, Python,
                  and modern web technologies, along with experience in database management and system design.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  I'm passionate about solving complex problems through code and continuously learning new
                  technologies. My goal is to contribute to innovative projects that make a meaningful impact
                  in the tech industry.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Code className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Programming</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Java, Python, Web Dev</p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <GraduationCap className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">BSc.IT (Completed 2025)</p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Target className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Focus</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Software Solutions</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
