import { CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

const reasons = [
  'Full Stack con experiencia en React, Next.js, Laravel, Symfony y Python',
  'Bases de datos modernas: Supabase, Firebase, SQL',
  'Interfaces responsivas y animaciones con Tailwind CSS y Framer Motion',
  'Autenticación, APIs REST y arquitectura escalable',
  'Despliegue continuo en Vercel y optimización de rendimiento'
];

export default function WhyWorkWithMe() {
  return (
    <section className="relative py-24 px-4">
      <AnimatedSection delay={600}>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              ¿POR QUÉ{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                TRABAJAR CONMIGO?
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 md:p-6 hover:border-cyan-500 transition-all"
              >
                <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={24} aria-hidden="true" />
                <span className="text-base md:text-lg font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}