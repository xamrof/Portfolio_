import { personalInfo } from '../../data'
import {Icons} from '../../assets/icons'


interface NavbarProps {
    isDark: boolean,
  isSwitching: boolean,
    toggleTheme: () => void
}

export const Navbar = ({isDark, isSwitching, toggleTheme}: NavbarProps) => {
    const themeIconClass = isDark
      ? 'text-amber-400 hover:text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.45)]'
      : 'text-indigo-500 hover:text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.35)]'

    return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-indigo-600 dark:text-indigo-400 font-mono font-bold text-xl tracking-tighter hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
          &lt;{personalInfo.name.split(' ')[0]} /&gt;
        </a>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Sobre Mí</a>
          <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Tecnologías</a>
          <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Proyectos</a>
          <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Contacto</a>
          
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 ${themeIconClass} ${isSwitching ? 'theme-toggle-pulse' : ''}`}
            aria-label="Toggle Dark Mode"
          >
            {isDark ? Icons.Sun : Icons.Moon}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 ${themeIconClass} ${isSwitching ? 'theme-toggle-pulse' : ''}`}
          >
            {isDark ? Icons.Sun : Icons.Moon}
          </button>
          <button className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
    </nav>
    )
}