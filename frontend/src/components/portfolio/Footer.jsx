import { Code2, Github, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  { href: "#habilidades", label: "Capacidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

const socials = [
  { href: "https://github.com/Etiketaa", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/francoparedes1992/", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:francoparedes1992@gmail.com", label: "Email", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-canvas" role="contentinfo">
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <a href="#inicio" className="inline-flex items-center gap-2 font-display font-black text-lg text-ink">
              <span className="flex items-center justify-center w-8 h-8 border-2 border-border bg-surface flex items-center justify-center">
                <Code2 size={18} className="text-primary" aria-hidden="true" />
              </span>
              Franco Paredes
            </a>
            <p className="mt-4 font-body text-sm text-ink-muted max-w-sm leading-relaxed">
              Full Stack Developer, UX Engineer y Database Architect. Diseño y construyo
              productos digitales de punta a punta.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm text-ink mb-3">Navegación</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-ink-muted hover:text-primary brutalist-interactive"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm text-ink mb-3">Contacto</h3>
            <ul className="space-y-2">
              {socials.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 font-body text-sm text-ink-muted hover:text-primary brutalist-interactive"
                    >
                      <Icon size={16} aria-hidden="true" />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-ink-subtle">
            © {new Date().getFullYear()} Franco Paredes. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-ink-subtle">
            Hecho con React, Tailwind CSS y TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}