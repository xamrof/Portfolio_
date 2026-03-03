
import {useState} from 'react'
import {personalInfo} from '../../data'
import { Reveal } from '../ui/Reveal'


export const Contact = () => {
    const [copyStatus, setCopyStatus] = useState('Copiar Email')

    const handleCopy = () => {
        try{
            navigator.clipboard.writeText(personalInfo.email)
            setCopyStatus('¡Copiado!')
        }catch{
            const textArea = document.createElement('textarea')
            textArea.value = personalInfo.email
            document.body.appendChild(textArea)
            textArea.select()
            try{
                document.execCommand('copy')
                setCopyStatus('¡Copiado!')
            }catch (e){
                setCopyStatus('Error al copiar')
                console.log('error to copy', e)
            }
            document.body.removeChild(textArea)
        }
    }

    setTimeout(() => setCopyStatus('Copiar Email'), 2000)

    return (
    <section id="contact" className="py-32 px-6 text-center bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <Reveal className="max-w-2xl mx-auto">
        <p className="text-indigo-600 dark:text-indigo-400 font-mono mb-4 font-semibold transition-colors">04. ¿Qué sigue?</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 transition-colors">Ponte en Contacto</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed transition-colors">
          Actualmente estoy buscando nuevas oportunidades. Si tienes una pregunta o simplemente quieres saludar, ¡haré todo lo posible por responderte!
        </p>
        
        <div className="inline-flex flex-col items-center gap-6">
          {/* Botón principal que abre el cliente de correo predeterminado del usuario (mailto:) */}
          <a href={`mailto:${personalInfo.email}`} className="px-10 py-4 bg-white dark:bg-transparent border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white dark:hover:text-white rounded-lg font-bold transition-all duration-300 text-lg shadow-md hover:shadow-xl">
            Di Hola
          </a>
          
          {/* Botón secundario para copiar el email */}
          <button 
            onClick={handleCopy}
            className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-sm flex items-center gap-2 transition-colors mt-2"
          >
            {/* Icono de copiar */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            {copyStatus}
          </button>
        </div>
      </Reveal>
    </section>
  );
}