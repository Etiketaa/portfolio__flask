import { useState } from "react";
import { CheckCircle2, Github, Linkedin, Mail, Send } from "lucide-react";
import AnimatedSection from "../common/AnimatedSection";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";

const email = "francoparedes1992@gmail.com";

const contactLinks = [
  { href: "https://github.com/Etiketaa", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/francoparedes1992/", label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${email}`, label: email, icon: Mail },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto portfolio — ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  return (
    <section id="contacto" className="section bg-surface">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection delay={0}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-500 mb-3">
                Contacto
              </p>
              <h2 className="section-title">
                ¿Tenés un proyecto{" "}
                <span className="bg-gradient-to-r from-brand-400 to-accent-500 bg-clip-text text-transparent">
                  en mente?
                </span>
              </h2>
              <p className="section-subtitle">
                Contame qué necesitás y te respondo con un plan concreto: alcance, stack y
                próximos pasos. Sin vueltas.
              </p>

<div className="mt-8 space-y-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 rounded-xl border border-line bg-canvas p-4 text-content-muted hover:text-content hover:border-brand-500 transition-colors duration-200"
                    >
                      <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-500/10 text-brand-500 flex items-center justify-center">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <span className="font-medium text-sm">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="rounded-2xl border border-line bg-canvas p-6 md:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center text-center gap-4 py-12">
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-success-500/10 text-success-500">
                    <CheckCircle2 size={36} aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold text-content">¡Todo listo!</h3>
                  <p className="text-content-muted text-sm max-w-xs">
                    Se abrió tu cliente de correo con el mensaje preparado. Solo falta que lo
                    envíes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <Input
                    label="Nombre"
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                  <Input
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                  <Textarea
                    label="Mensaje"
                    id="message"
                    name="message"
                    placeholder="Contame sobre tu proyecto: objetivo, plazo y presupuesto estimado…"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    disabled={!isValid}
                    rightIcon={<Send size={18} />}
                  >
                    Enviar mensaje
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}