import { useState } from 'react';
import { Github, Linkedin, Mail, Rocket, Zap, CheckCircle } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:francoparedes1992@gmail.com?subject=Contacto desde el portfolio - ${form.name}&body=Nombre: ${form.name}%0D%0AEmail: ${form.email}%0D%0AMensaje: ${form.message}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: '', email: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const isFormValid = form.name && form.email && form.message;

  return (
    <section id="contacto" className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <AnimatedSection delay={800}>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Rocket className="text-cyan-400" size={16} aria-hidden="true" />
            <span className="text-cyan-400 font-bold text-sm">Disponible para nuevos proyectos</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-4">
            ¿TIENES UN{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              PROYECTO
            </span>{' '}
            EN MENTE?
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">Convirtamos tu idea en realidad</p>

          <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 md:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center gap-4 py-8">
                <CheckCircle className="text-green-500" size={64} />
                <h3 className="text-2xl font-bold text-green-400">¡Mensaje listo!</h3>
                <p className="text-gray-400">Se abrió tu cliente de correo. ¡No olvides enviarlo!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    className="w-full bg-black/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all"
                    value={form.name}
                    onChange={handleFormChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Tu email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Tu email"
                    className="w-full bg-black/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all"
                    value={form.email}
                    onChange={handleFormChange}
                    required
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Tu mensaje
                  </label>
                  <textarea
                    rows="5"
                    id="message"
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="w-full bg-black/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none"
                    value={form.message}
                    onChange={handleFormChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                    isFormValid && !isSubmitting
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-[1.02]'
                      : 'bg-gray-700 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⟳</span> Preparando...
                    </>
                  ) : (
                    <>
                      ENVIAR MENSAJE <Zap size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://github.com/Etiketaa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label="GitHub de Franco Paredes"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/francoparedes1992/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label="LinkedIn de Franco Paredes"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:francoparedes1992@gmail.com"
              className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label="Enviar email a Franco Paredes"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}