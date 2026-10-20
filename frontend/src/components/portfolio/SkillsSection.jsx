import { skillPillars } from "../../data/skills";
import AnimatedSection from "../common/AnimatedSection";
import { Badge, Card, SectionTitle } from "../ui";

export default function SkillsSection() {
  return (
    <section id="habilidades" className="section-brutal bg-surface-muted">
      <div className="container">
        <AnimatedSection delay={0}>
          <SectionTitle
            label="Capacidades"
            title="Cubro todo el ciclo del producto"
            subtitle="No solo escribo código: modelo datos, diseño interfaces y llevo el deploy a producción."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillPillars.map((pillar, idx) => (
            <AnimatedSection key={pillar.id} delay={idx * 100}>
              <Card variant="default" padding="lg" className="h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-border bg-surface flex items-center justify-center" style={{ borderRadius: 'var(--radius-none)' }}>
                    <pillar.icon className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-ink text-xl">{pillar.title}</h3>
                    <p className="font-body text-sm text-ink-muted mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {pillar.skills.map((skill) => (
                    <li key={skill.name}>
                      <Badge variant="outline" size="sm" icon={<skill.icon className="w-4 h-4" aria-hidden="true" />}>
                        {skill.name}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}