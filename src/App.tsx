import './App.css'
import { useEffect, useState } from 'react'

import { Navbar } from './components/layout/Navbar'
import{ Footer } from './components/layout/Footer'

import { Hero } from './components/sections/Hero'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

function App() {

    const [darkMode, setDarkMode] = useState(false)
    const [themeTransitioning, setThemeTransitioning] = useState(false)

    const toggleTheme = () => {
      setThemeTransitioning(true)
      setDarkMode(!darkMode)
      window.setTimeout(() => {
        setThemeTransitioning(false)
      }, 900)
    }

    useEffect(() => {
      document.documentElement.style.scrollBehavior = 'smooth'
      return () => {
        document.documentElement.style.scrollBehavior = 'auto'
      }
    }, [])

  return (
    <div className={`${darkMode ? 'dark': ''} theme-shell ${themeTransitioning ? 'is-switching' : ''}`}>

      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen text-slate-800 dark:text-slate-200 font-sans selection:bg-indigo-200 dark:selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-200">
      
        <Navbar isDark={darkMode} isSwitching={themeTransitioning} toggleTheme={toggleTheme } />

        <main>
            <Hero/>
            <Skills/>
            <Projects/>
            <Contact/>
        </main>

        <Footer/>

      </div>

    </div>
  )
}

export default App
