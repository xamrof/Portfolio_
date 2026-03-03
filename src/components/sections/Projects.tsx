import { projects } from "../../data";
import { Reveal } from "../ui/Reveal";
import { SpotlightCard } from "../ui/SpotlightCard";


export const Projects = () => {
    
    return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">

            <Reveal>
                <div className="flex items-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors">Cosas que he construido</h2>
                <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow ml-6 transition-colors"></div>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 gap-10">
                {projects.map((project, index) => (
                    <Reveal key={project.id} delay={index * 150} className="h-full">
                        <SpotlightCard project={project} />
                    </Reveal>
                    )                    
                )}

            </div>

        </div>
    </section>
)    

}