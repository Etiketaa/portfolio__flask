import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from '../../data/skills';
import AnimatedSection from '../common/AnimatedSection';

export default function SkillsSection() {
  return (
    <section id="habilidades" className="relative py-24 px-4">
      <AnimatedSection delay={200}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              MIS{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                SUPERPODERES
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">Tecnologías con las que desarrollo soluciones profesionales</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity will-change-transform"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500 transition-all h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-4xl md:text-5xl mb-4" aria-hidden="true">
                      <FontAwesomeIcon icon={skill.icon} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">{skill.name}</h3>
                      <div className="text-cyan-400 font-semibold text-base">{skill.level}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 mt-4 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name}: ${skill.level}%`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}