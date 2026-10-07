import { Code2, Database, Gauge, Layers, ShieldCheck } from "lucide-react";
import AnimatedSection from "../common/AnimatedSection";

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
    <section id="porque" className="section">
      <div className="container">
        <AnimatedSection delay={0}>
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-500 mb-3">
              Diferencial
            </p>
            <h2 className="section-title">
              Por qué trabajar{" "}
              <span className="bg-gradient-to-r from-brand-400 to-accent-500 bg-clip-text text-transparent">
                conmigo
              </span>
            </h2>
            <p className="section-subtitle">
              No entrego solo pantallas: entrego sistemas que se sostienen en el tiempo.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <AnimatedSection key={reason.title} delay={idx * 80}>
                <article className="h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:border-brand-500 hover:-translate-y-1">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 mb-5">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-content mb-2">{reason.title}</h3>
                  <p className="text-sm text-content-muted leading-relaxed">{reason.description}</p>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}