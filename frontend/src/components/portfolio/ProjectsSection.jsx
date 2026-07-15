import { projects } from '../../data/projects';
import AnimatedSection from '../common/AnimatedSection';

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <AnimatedSection delay={400}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              PROYECTOS QUE{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                GENERAN IMPACTO
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">Resultados medibles, código escalable</p>
          </div>

          <div className="space-y-12">
            {projects.map((project) => (
              <article key={project.id} className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity will-change-transform"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 md:p-8 hover:border-cyan-500 transition-all">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="text-5xl md:text-6xl" aria-hidden="true">{project.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full font-semibold text-sm border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
                        {project.deploy && (
                          <a
                            href={project.deploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 font-bold hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                          >
                            Ver Demo
                          </a>
                        )}
                        {project.repo && (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 font-bold hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                          >
                            Repositorio
                          </a>
                        )}
                        {project.credentials && (
                          <div className="text-xs text-gray-400">
                            <p>
                              User: {project.credentials.user} / Pass: {project.credentials.pass}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-left md:text-right mt-4 md:mt-0">
                      <div className="text-xl md:text-2xl font-bold text-cyan-400 mb-1">{project.impact}</div>
                      <div className="text-base md:text-lg text-gray-400">{project.metric}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}