import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-800"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 top-0 w-2.5 h-2.5 bg-indigo-500 rounded-full ring-4 ring-slate-900 z-10 mt-1.5"></div>

                <div className="flex-1 md:w-1/2"></div>
                
                <div className="flex-1 md:w-1/2 pl-6 md:pl-0">
                  <div className={`bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-colors ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded bg-indigo-900/30 text-indigo-300 border border-indigo-500/20">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-indigo-400 mb-4 font-medium">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {exp.company}
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-400 text-sm">
                          <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                          {item}
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