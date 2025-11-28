import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { HERO_DATA, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-900/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-indigo-400 font-medium tracking-wide uppercase text-sm">
                {HERO_DATA.availability}
              </h2>
              <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">{HERO_DATA.name.split(' ')[0]}</span>.
                <br />
                <span className="text-slate-300 text-3xl sm:text-5xl block mt-2">{HERO_DATA.role}</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                {HERO_DATA.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all transform hover:scale-105"
              >
                View Work <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all border border-slate-700 hover:border-slate-600"
              >
                Download CV <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-400 transition-colors transform hover:scale-110"
                  title={link.platform}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-2xl rotate-6 opacity-30 blur-lg"></div>
                <div className="absolute inset-0 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden">
                    <img 
                        src="https://picsum.photos/600/600" 
                        alt="Profile" 
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;