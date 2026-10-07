import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import userPhoto from "../../assets/images/foto-portfolio.webp";
import AnimatedSection from "../common/AnimatedSection";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

const roles = ["Full Stack Developer", "UX Engineer", "Database Architect"];

const metrics = [
  { value: "16", label: "proyectos en el portfolio" },
  { value: "3", label: "perfiles: UX/UI · Backend · Datos" },
  { value: "4", label: "capas: UI · API · Datos · Deploy" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-32"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <AnimatedSection delay={0}>
              <div className="inline-flex items-center gap-2 mb-6">
                <Badge variant="brand" size="md" className="gap-2 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500" />
                  </span>
                  Disponible para proyectos
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-balance">
                Construyo productos digitales
                <span className="block bg-gradient-to-r from-brand-400 via-brand-500 to-accent-500 bg-clip-text text-transparent">
                  de punta a punta
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-content-muted max-w-2xl leading-relaxed">
                Soy <span className="text-content font-semibold">Franco Paredes</span>. Diseño y
                desarrollo aplicaciones web completas: interfaces cuidadas, APIs sólidas y
                bases de datos bien modeladas. Todo con arquitectura que escala.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2">
                {roles.map((role, i) => (
                  <span key={role} className="inline-flex items-center gap-2">
                    {i > 0 && (
                      <span className="text-content-subtle" aria-hidden="true">
                        ·
                      </span>
                    )}
                    <span className="text-sm font-medium text-content-muted">{role}</span>
                  </span>
                ))}
                <span className="inline-flex items-center gap-1.5 text-sm text-content-subtle">
                  <MapPin size={14} aria-hidden="true" />
                  Bahía Blanca, Argentina
                </span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  rightIcon={<ArrowRight size={20} />}
                  onClick={() => document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver proyectos
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  leftIcon={<Sparkles size={18} />}
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Trabajemos juntos
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-5">
                <span className="text-sm text-content-subtle">Encontrame en</span>
                <div className="flex items-center gap-3">
                  <SocialLink href="https://github.com/Etiketaa" label="GitHub de Franco Paredes">
                    <Github size={22} />
                  </SocialLink>
                  <SocialLink
                    href="https://www.linkedin.com/in/francoparedes1992/"
                    label="LinkedIn de Franco Paredes"
                  >
                    <Linkedin size={22} />
                  </SocialLink>
                  <SocialLink href="mailto:francoparedes1992@gmail.com" label="Enviar email a Franco Paredes">
                    <Mail size={22} />
                  </SocialLink>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <AnimatedSection delay={150}>
              <div className="relative">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-brand-500/30 to-accent-500/30 rounded-full blur-3xl"
                  aria-hidden="true"
                />
                <img
                  src={userPhoto}
                  alt="Franco Paredes, desarrollador Full Stack"
                  width={420}
                  height={420}
                  fetchPriority="high"
                  className="relative rounded-full w-56 h-56 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px] object-cover border-4 border-line shadow-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection delay={300}>
          <dl className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-line bg-line">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-surface p-6 text-center sm:text-left">
                <dt className="sr-only">{metric.label}</dt>
                <dd>
                  <span className="block text-3xl md:text-4xl font-black text-brand-500">
                    {metric.value}
                  </span>
                  <span className="mt-1 block text-sm text-content-muted">{metric.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </AnimatedSection>
      </div>
    </section>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="p-2 rounded-lg text-content-muted hover:text-brand-500 hover:bg-brand-500/10 transition-colors duration-200"
    >
      {children}
    </a>
  );
}