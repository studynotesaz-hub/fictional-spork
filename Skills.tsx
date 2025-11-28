import React from 'react';
import { SKILLS } from '../constants';
import { Code, Server, PenTool, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch(category) {
      case 'Frontend': return <Code className="w-5 h-5" />;
      case 'Backend': return <Server className="w-5 h-5" />;
      case 'Design': return <PenTool className="w-5 h-5" />;
      case 'Tools': return <Terminal className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Proficiency</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                  {getIcon(category)}
                </div>
                <h3 className="text-xl font-semibold text-white">{category}</h3>
              </div>
              
              <div className="space-y-4">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs font-medium text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-indigo-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;