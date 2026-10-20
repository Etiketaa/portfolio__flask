import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import userPhoto from "../../assets/images/foto-portfolio.webp";
import AnimatedSection from "../common/AnimatedSection";
import { Badge, Button, Typewriter } from "../ui";

const roles = ["Full Stack Developer", "UX Engineer", "Database Architect"];

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
                <Badge variant="success" size="md" className="gap-2 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  Disponible para proyectos
                </Badge>
              </div>

              <h1 className="font-display font-black text-ink text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-balance">
                <Typewriter
                  text="Construyo productos digitales"
                  speed={25}
                  startDelay={300}
                  className="block"
                />
                <Typewriter
                  text="de punta a punta"
                  speed={30}
                  startDelay={1200}
                  className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"
                />
              </h1>

              <p className="mt-6 font-body text-lg md:text-xl text-ink-muted max-w-2xl leading-relaxed">
                Soy <span className="text-ink font-semibold">Franco Paredes</span>. Diseño y
                desarrollo aplicaciones web completas: interfaces cuidadas, APIs sólidas y
                bases de datos bien modeladas. Todo con arquitectura que escala.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2">
                {roles.map((role, i) => (
                  <span key={role} className="inline-flex items-center gap-2">
                    {i > 0 && (
                      <span className="text-ink-subtle" aria-hidden="true">
                        ·
                      </span>
                    )}
                    <span className="text-sm font-medium text-ink-muted">{role}</span>
                  </span>
                ))}
                <span className="inline-flex items-center gap-1.5 text-sm text-ink-subtle">
                  <MapPin size={14} aria-hidden="true" />
                  Bahía Blanca, Argentina
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-muted">
                <span className="font-black text-primary">16</span> proyectos · 
                <span className="font-black text-primary">3</span> perfiles · 
                <span className="font-black text-primary">4</span> capas
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
                  variant="secondary"
                  size="lg"
                  leftIcon={<Sparkles size={18} />}
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Trabajemos juntos
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-5">
                <span className="text-sm text-ink-subtle">Encontrame en</span>
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
                <img
                  src={userPhoto}
                  alt="Franco Paredes, desarrollador Full Stack"
                  width={420}
                  height={420}
                  fetchPriority="high"
                  className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px] object-cover border-4 border-border shadow-xl"
                  style={{ borderRadius: 'var(--radius-none)' }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
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
      className="p-2 text-ink-muted hover:text-primary hover:bg-surface-muted transition-colors duration-100 brutalist-interactive"
      style={{ borderRadius: 'var(--radius-none)' }}
    >
      {children}
    </a>
  );
}