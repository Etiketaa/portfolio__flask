import { Search, PenTool, Database, Rocket, LineChart } from "lucide-react";
import AnimatedSection from "../common/AnimatedSection";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Descubrimiento",
    description:
      "Entiendo el problema, los usuarios y las restricciones reales antes de escribir una línea de código. Nada de features especulativas.",
  },
  {
    number: "02",
    icon: Database,
    title: "Modelado de datos",
    description:
      "Diseño primero el corazón del sistema: entidades, relaciones y reglas. Un modelo de datos sólido evita meses de parches después.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Diseño de interfaz",
    description:
      "Construyo con tokens y un sistema de diseño consistente. Mobile-first, accesible, y con jerarquía visual que guía al usuario.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Implementación",
    description:
      "APIs en capas, lógica de negocio validada en el backend, UI tipada. Versiono cada cambio y despliego a producción.",
  },
  {
    number: "05",
    icon: LineChart,
    title: "Medición y mejora",
    description:
      "Mido, itero y refactorizo con datos. El producto no termina en el launch: termina cuando hace bien su trabajo.",
  },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="section bg-surface">
      <div className="container">
        <AnimatedSection delay={0}>
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-500 mb-3">
              Cómo trabajo
            </p>
            <h2 className="section-title">
              Un proceso{" "}
              <span className="bg-gradient-to-r from-brand-400 to-accent-500 bg-clip-text text-transparent">
                probado
              </span>
            </h2>
            <p className="section-subtitle">
              Cinco etapas que aplico en cada proyecto, del problema al producto funcionando.
            </p>
          </div>
        </AnimatedSection>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={step.number} delay={idx * 80}>
                <li className="relative h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-sm font-bold text-brand-500">
                        {step.number}
                      </span>
                      <span
                        className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <Icon size={20} />
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-content mb-2">{step.title}</h3>
                    <p className="text-sm text-content-muted leading-relaxed">{step.description}</p>
                    {idx < steps.length - 1 && (
                      <span
                        className="hidden lg:block absolute top-5 -right-3 w-3 h-3 border-t-2 border-r-2 border-line-strong rotate-45"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </li>
              </AnimatedSection>
            );
          })}
        </ol>
      </div>
    </section>
  );
}