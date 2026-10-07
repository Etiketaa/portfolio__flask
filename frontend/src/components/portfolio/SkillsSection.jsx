import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skillPillars } from "../../data/skills";
import AnimatedSection from "../common/AnimatedSection";

export default function SkillsSection() {
  return (
    <section id="habilidades" className="section bg-surface">
      <div className="container">
        <AnimatedSection delay={0}>
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-500 mb-3">
              Capacidades
            </p>
            <h2 className="section-title">
              Cubro todo el ciclo{" "}
              <span className="bg-gradient-to-r from-brand-400 to-accent-500 bg-clip-text text-transparent">
                del producto
              </span>
            </h2>
            <p className="section-subtitle">
              No solo escribo código: modelo datos, diseño interfaces y llevo el deploy a
              producción.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillPillars.map((pillar, idx) => (
            <AnimatedSection key={pillar.id} delay={idx * 100}>
              <article className="h-full rounded-2xl border border-line bg-canvas p-6 md:p-8 transition-colors duration-300 hover:border-brand-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center text-xl">
                    <FontAwesomeIcon icon={pillar.icon} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-content">{pillar.title}</h3>
                    <p className="text-sm text-content-muted mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {pillar.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-content"
                    >
                      <span className="text-brand-500" aria-hidden="true">
                        <FontAwesomeIcon icon={skill.icon} />
                      </span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}