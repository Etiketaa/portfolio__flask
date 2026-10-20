import { useState } from "react";
import { CheckCircle2, AlertCircle, Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";
import AnimatedSection from "../common/AnimatedSection";
import { Button, Input, Textarea, Card, SectionTitle } from "../ui";

const EMAIL = "francoparedes1992@gmail.com";

const contactLinks = [
  { href: "https://github.com/Etiketaa", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/francoparedes1992/", label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${EMAIL}`, label: EMAIL, icon: Mail },
];

const validateField = (name, value) => {
  switch (name) {
    case "name": {
      const trimmed = value.trim();
      if (!trimmed) return "El nombre es obligatorio";
      if (trimmed.length < 2) return "El nombre debe tener al menos 2 caracteres";
      if (trimmed.length > 80) return "El nombre no puede superar los 80 caracteres";
      return "";
    }
    case "email": {
      const trimmed = value.trim();
      if (!trimmed) return "El email es obligatorio";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) return "Ingresá un email válido";
      return "";
    }
    case "message": {
      const trimmed = value.trim();
      if (!trimmed) return "El mensaje es obligatorio";
      if (trimmed.length < 10) return "El mensaje debe tener al menos 10 caracteres";
      if (value.length > 2000) return "El mensaje no puede superar los 2000 caracteres";
      return "";
    }
    default:
      return "";
  }
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const validateAll = () => {
    const newErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      message: validateField("message", form.message),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const subject = encodeURIComponent(`Contacto portfolio — ${form.name.trim()}`);
      const body = encodeURIComponent(
        `Nombre: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`
      );
      const mailto = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      window.open(mailto, "_blank", "noopener,noreferrer");

      setIsSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch {
      setSubmitError("No se pudo abrir el cliente de email. Escribime directo a " + EMAIL + ".");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-brutal bg-surface-muted">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection delay={0}>
            <SectionTitle
              label="Contacto"
              title="¿Tenés un proyecto en mente?"
              subtitle="Contame qué necesitás y te respondo con un plan concreto: alcance, stack y próximos pasos. Sin vueltas."
            />

            <div className="mt-8 space-y-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 border-2 border-border bg-surface p-4 text-ink-muted hover:text-ink hover:border-primary brutalist-interactive"
                   
                  >
                    <span className="flex-shrink-0 w-10 h-10 border border-border bg-surface-muted flex items-center justify-center">
                      <Icon size={18} aria-hidden="true" className="text-primary" />
                    </span>
                    <span className="font-display font-medium text-sm">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <Card variant="default" padding="lg">
              {isSubmitted ? (
                <div className="flex flex-col items-center text-center gap-4 py-12">
                  <span className="flex items-center justify-center w-16 h-16 border-2 border-primary bg-surface flex items-center justify-center">
                    <CheckCircle2 size={36} aria-hidden="true" className="text-primary" />
                  </span>
                  <h3 className="font-display font-bold text-ink text-xl">¡Todo listo!</h3>
                  <p className="font-body text-sm text-ink-muted max-w-xs">
                    Se abrió tu cliente de email con el mensaje listo. Si no se abrió, escribime directo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {submitError && (
                    <div className="border-2 border-error bg-surface p-3 text-error text-sm flex items-center gap-2" role="alert">
                      <AlertCircle size={18} aria-hidden="true" flex-shrink={0} />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <Input
                    label="Nombre"
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="name"
                    required
                    error={touched.name ? errors.name : undefined}
                  />

                  <Input
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                    required
                    error={touched.email ? errors.email : undefined}
                  />

                  <Textarea
                    label="Mensaje"
                    id="message"
                    name="message"
                    placeholder="Contame sobre tu proyecto: objetivo, plazo y presupuesto estimado…"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    error={touched.message ? errors.message : undefined}
                    className="relative"
                  >
                    <div className="absolute bottom-2 right-3 font-body text-xs text-ink-muted pointer-events-none">
                      {form.message.length}/2000
                    </div>
                  </Textarea>

                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    rightIcon={isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  >
                    {isSubmitting ? "Enviando…" : "Enviar mensaje"}
                  </Button>
                </form>
              )}
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}