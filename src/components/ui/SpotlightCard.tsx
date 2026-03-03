import React, {useState, useRef} from 'react'
import type {Project} from '../../data'

interface SpotLightCardProps {
    project: Project;
}

export const SpotlightCard = ({project}: SpotLightCardProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({x: 0, y: 0});
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if(!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect()
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    }
  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)} // Ratón entra -> Linterna On
      onMouseLeave={() => setOpacity(0)} // Ratón sale -> Linterna Off
      className="relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-600/10 dark:hover:shadow-indigo-500/20 transition-all duration-300 flex flex-col h-full group"
    >
      {/* --- LA LINTERNA (Resplandor Radial Dinámico) --- */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.15), transparent 40%)`,
        }}
      />
      
      {/* --- CONTENIDO DE LA TARJETA (z-10 para estar sobre la linterna) --- */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="h-56 bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center p-6 border-b border-slate-200 dark:border-slate-700 overflow-hidden transition-colors">
            <div className="w-full h-full bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center border border-slate-300 dark:border-slate-600 border-dashed shadow-sm group-hover:scale-105 transition-transform duration-500">
              <span className="text-slate-400 dark:text-slate-500 font-mono text-sm">&lt;Preview /&gt;</span>
            </div>
        </div>
        
        {/* Textos y Etiquetas */}
        <div className="p-8 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed transition-colors">
            {project.description}
          </p>
          
          {/* Loop de Tecnologías */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map(tech => (
              <span key={tech} className="text-xs font-mono font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-800/50 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}