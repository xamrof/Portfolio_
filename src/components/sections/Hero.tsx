// src/components/sections/Hero.tsx
import { personalInfo } from '../../data';
import { Reveal } from '../ui/Reveal';
import { Typewriter } from '../ui/Typewriter';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 px-6">
      {/* Estilos para el Avatar Flotante */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
      
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
        
        {/* Lado Izquierdo: Textos */}
        <Reveal className="flex-1 text-center md:text-left">
          <p className="text-indigo-600 dark:text-indigo-400 font-mono mb-4 text-lg font-medium">Hola, mi nombre es</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors">
            {personalInfo.name}.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-500 dark:text-slate-400 mb-6 transition-colors min-h-[40px] md:min-h-[60px]">
            {/* ¡Nuestra Máquina de Escribir en acción! */}
            <Typewriter text="Construyo cosas para la web." speed={80} />
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed transition-colors">
            {personalInfo.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all shadow-md shadow-indigo-600/20 text-center">
              Ver Mis Proyectos
            </a>
            <a href="#contact" className="px-8 py-3 bg-white dark:bg-transparent border border-slate-300 dark:border-slate-600 hover:border-indigo-600 dark:hover:border-indigo-400 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg font-medium transition-all text-center shadow-sm">
              Contactar
            </a>
          </div>
        </Reveal>

        {/* Lado Derecho: Avatar */}
        <Reveal delay={200} className="flex-1 flex justify-center md:justify-end">
          <div className="relative group animate-float">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-500/50 dark:to-purple-500/50 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white dark:bg-slate-800 border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden flex items-center justify-center transition-colors">
               {/* Aquí puedes reemplazar el SVG por una etiqueta <img> con tu foto real */}
               <svg className="w-32 h-32 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
