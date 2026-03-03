// src/components/sections/Skills.tsx
import { skills } from '../../data';
import { Reveal } from '../ui/Reveal';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-100/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        <Reveal>
          <div className="flex items-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors">Tecnologías y Herramientas</h2>
            <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow ml-6 transition-colors"></div>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <Reveal key={skill.id} delay={index * 100} className="h-full">
              <div className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 group">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:text-white dark:group-hover:text-white transition-all duration-300">
                  {skill.icon}
                </div>
                <p className="text-slate-900 dark:text-slate-100 font-bold text-lg mb-1 transition-colors">{skill.name}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-mono transition-colors">{skill.category}</p>
              </div>
            </Reveal>
          ))}
        </div>
        
      </div>
    </section>
  );
};