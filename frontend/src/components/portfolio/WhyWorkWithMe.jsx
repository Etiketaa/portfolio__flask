import { Code2, Database, Gauge, Layers, ShieldCheck } from "lucide-react";
import AnimatedSection from "../common/AnimatedSection";
import { Card, SectionTitle } from "../ui";

const reasons = [
  {
    icon: Layers,
    title: "Full-stack de verdad",
    description:
      "Frontend, backend, base de datos y deploy. Un solo responsable de punta a punta, sin traspasos que se pierden.",
  },
  {
    icon: Database,
    title: "Modelo de datos primero",
    description:
      "Diseño las entidades y las reglas antes de programar. Un buen modelo evita meses de parches.",
  },
  {
    icon: Gauge,
    title: "Foco en rendimiento",
    description:
      "Interfaces rápidas, queries eficientes y payloads mínimos. La velocidad es parte de la experiencia.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad por diseño",
    description:
      "RLS, validación en backend y aislamiento por usuario verificado. Los datos se protegen a nivel de fila.",
  },
  {
    icon: Code2,
    title: "Código mantenible",
    description:
      "Arquitectura en capas, tipado estricto y decisiones documentadas. Pensado para que el próximo dev no sufra.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section id="porque" className="section-brutal">
      <div className="container">
        <AnimatedSection delay={0}>
          <SectionTitle
            label="Diferencial"
            title="Por qué trabajar conmigo"
            subtitle="No entrego solo pantallas: entrego sistemas que se sostienen en el tiempo."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <AnimatedSection key={reason.title} delay={idx * 80}>
                <Card variant="default" padding="lg" className="h-full">
                  <span
                    className="flex items-center justify-center w-12 h-12 border-2 border-border bg-surface mb-5"
                    style={{ borderRadius: 'var(--radius-none)' }}
                  >
                    <Icon size={22} className="text-primary" aria-hidden="true" />
                  </span>
                  <h3 className="font-display font-bold text-ink text-lg mb-2">{reason.title}</h3>
                  <p className="font-body text-sm text-ink-muted leading-relaxed">{reason.description}</p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}