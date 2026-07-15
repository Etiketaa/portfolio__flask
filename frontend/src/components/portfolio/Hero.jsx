import { Github, Linkedin, Mail, Sparkles, ArrowRight } from 'lucide-react';
import userPhoto from '../../assets/images/foto-portfolio.png';
import AnimatedSection from '../common/AnimatedSection';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <AnimatedSection delay={0}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center lg:text-left relative z-10">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="text-cyan-400" size={16} />
              <span className="text-cyan-400 font-bold text-sm">Full Stack Developer • 2+ años de experiencia</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
              CONSTRUYO<br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                APLICACIONES
              </span><br />
              QUE ESCALAN
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              +2 años transformando ideas en productos digitales de alto rendimiento con{' '}
              <span className="text-cyan-400 font-bold">React, Next.js, Laravel, Symfony, Python y Supabase</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <a
                href="#proyectos"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center gap-2"
              >
                VER PROYECTOS
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contacto"
                className="border-2 border-cyan-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-500/10 transition-all hover:scale-105"
              >
                HABLEMOS
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://github.com/Etiketaa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors transform hover:scale-110"
                aria-label="GitHub de Franco Paredes"
              >
                <Github size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/francoparedes1992/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors transform hover:scale-110"
                aria-label="LinkedIn de Franco Paredes"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="mailto:francoparedes1992@gmail.com"
                className="hover:text-cyan-400 transition-colors transform hover:scale-110"
                aria-label="Enviar email a Franco Paredes"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={userPhoto}
              alt="Franco Paredes - Desarrollador Full Stack"
              loading="lazy"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/20"
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}