import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code2, Sparkles, Rocket, Zap, ArrowRight, CheckCircle2, Menu, X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faPhp, faLaravel, faPython, faSymfony, faHtml5, faCss3, faNodeJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import userPhoto from '../../assets/images/foto-portfolio.png';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'React', icon: <FontAwesomeIcon icon={faReact} />, level: 95 },
    { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} />, level: 94 },
    { name: 'PHP', icon: <FontAwesomeIcon icon={faPhp} />, level: 92 },
    { name: 'Laravel', icon: <FontAwesomeIcon icon={faLaravel} />, level: 90 },
    { name: 'Python', icon: <FontAwesomeIcon icon={faPython} />, level: 88 },
    { name: 'Symfony', icon: <FontAwesomeIcon icon={faSymfony} />, level: 85 },
    { name: 'HTML5', icon: <FontAwesomeIcon icon={faHtml5} />, level: 95 },
    { name: 'CSS3', icon: <FontAwesomeIcon icon={faCss3} />, level: 95 },
    { name: 'Node.js', icon: <FontAwesomeIcon icon={faNodeJs} />, level: 80 },
    { name: 'SQL', icon: <FontAwesomeIcon icon={faDatabase} />, level: 80 },
    { name: 'Git & GitHub', icon: <FontAwesomeIcon icon={faGitAlt} />, level: 90 },
  ];

  const projects = [
    {
      title: 'Gestor Flask - Dashboard de Administración',
      impact: 'Gestión de datos con Firebase',
      tech: ['Flask', 'Python', 'Firebase'],
      metric: 'Interfaz para administrar recursos',
      emoji: '📊',
      deploy: 'https://fparedes92.pythonanywhere.com',
      repo: '',
      credentials: {
        user: 'adminsdemo',
        pass: 'admon1234'
      }
    },
    {
      title: 'Bit-House - E-commerce de hardware',
      impact: 'Carrito de compras y filtro de productos',
      tech: ['React', 'JavaScript'],
      metric: 'Interfaz de usuario intuitiva',
      emoji: '💻',
      deploy: 'https://bit-house.ct.ws/',
      repo: 'https://github.com/Etiketaa/bit-house'
    },
    {
      title: 'Domus Tienda - Tienda de aromas',
      impact: 'Sahumerios, perfuminas, difusores',
      tech: ['HTML', 'CSS', 'JavaScript'],
      metric: 'Experiencia de usuario elegante',
      emoji: '✨',
      deploy: 'https://domustienda.com.ar/',
      repo: 'https://github.com/Etiketaa/Domus-tienda'
    },
    {
      title: 'Up Catalogo - Catálogo de suplementos',
      impact: 'Catálogo de productos digital',
      tech: ['HTML', 'CSS', 'JavaScript'],
      metric: 'Navegación fácil y rápida',
      emoji: '💪',
      deploy: 'https://up-catalogo.vercel.app/',
      repo: 'https://github.com/Etiketaa/Up-catalogo'
    },
    {
      title: 'Oude - Ecommerce autogestionable',
      impact: 'Ecommerce completo con panel de administración',
      tech: ['PHP', 'JavaScript', 'SQLite'],
      metric: 'Funciones para autogestionar',
      emoji: '🛒',
      deploy: 'https://oudeonline.site',
      repo: ''
    }
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              FRANCO PAREDES
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-lg hover:text-cyan-400 transition-colors font-semibold">Inicio</a>
              <a href="#habilidades" className="text-lg hover:text-cyan-400 transition-colors font-semibold">Skills</a>
              <a href="#proyectos" className="text-lg hover:text-cyan-400 transition-colors font-semibold">Proyectos</a>
              <a href="#contacto" className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105">
                TRABAJEMOS JUNTOS
              </a>
            </div>

            <button className="md:hidden text-cyan-400" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20">
            <div className="px-6 py-6 space-y-4">
              <a href="#inicio" className="block text-xl font-semibold hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Inicio</a>
              <a href="#habilidades" className="block text-xl font-semibold hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Skills</a>
              <a href="#proyectos" className="block text-xl font-semibold hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Proyectos</a>
              <a href="#contacto" className="block text-center bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-bold" onClick={() => setMenuOpen(false)}>
                TRABAJEMOS JUNTOS
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center lg:text-left relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
              <Sparkles className="text-cyan-400" size={20} />
              <span className="text-cyan-400 font-bold">Desarrollador Full Stack Disponible</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight">
              CONSTRUYO<br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                APLICACIONES
              </span><br />
              QUE ESCALAN
            </h1>

            <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto lg:mx-0 mb-12 leading-relaxed">
              2 años transformando ideas en productos digitales de alto rendimiento con <span className="text-cyan-400 font-bold">React, Laravel, Symfony y Python</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16">
              <a href="#proyectos" className="group bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 rounded-full font-black text-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center gap-3">
                VER MIS PROYECTOS
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="#contacto" className="border-2 border-cyan-500 px-10 py-5 rounded-full font-black text-xl hover:bg-cyan-500/10 transition-all hover:scale-105">
                HABLEMOS
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-8 mb-8">
              <a href="https://github.com/Etiketaa" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors transform hover:scale-110">
                <Github size={36} />
              </a>
              <a href="https://www.linkedin.com/in/francoparedes1992/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors transform hover:scale-110">
                <Linkedin size={36} />
              </a>
              <a href="mailto:francoparedes1992@gmail.com" className="hover:text-cyan-400 transition-colors transform hover:scale-110">
                <Mail size={36} />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={userPhoto} alt="Franco Paredes" className="rounded-full w-80 h-80 lg:w-96 lg:h-96 object-cover border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/50" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-6">
              MIS <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">SUPERPODERES</span>
            </h2>
            <p className="text-2xl text-gray-400">Tecnologías con las que desarrollo soluciones profesionales</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-8 hover:border-cyan-500 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl">{skill.icon}</div>
                    <div>
                      <h3 className="text-3xl font-black">{skill.name}</h3>
                      <div className="text-cyan-400 font-bold text-xl">{skill.level}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="relative py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-6">
              PROYECTOS QUE <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">GENERAN IMPACTO</span>
            </h2>
            <p className="text-2xl text-gray-400">Resultados medibles, código escalable</p>
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-10 hover:border-cyan-500 transition-all">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                      <div className="text-7xl">{project.emoji}</div>
                      <div>
                        <h3 className="text-4xl font-black mb-3">{project.title}</h3>
                        <div className="flex flex-wrap gap-3 mb-4">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full font-bold border border-cyan-500/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4 items-center">
                          {project.deploy && <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-bold hover:underline">Ver Demo</a>}
                          {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-bold hover:underline">Repositorio</a>}
                          {project.credentials && (
                            <div className="text-sm text-gray-400">
                              <p>User: {project.credentials.user}</p>
                              <p>Pass: {project.credentials.pass}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-cyan-400 mb-2">{project.impact}</div>
                      <div className="text-xl text-gray-400">{project.metric}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-6">
              ¿POR QUÉ <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">TRABAJAR CONMIGO?</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              'Código limpio y escalable que otros desarrolladores entienden',
              'Comunicación constante - sin sorpresas de último minuto',
              'Experiencia con proyectos reales de producción',
              'Dominio de tecnologías modernas del mercado',
              'Entregas a tiempo, siempre'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500 transition-all">
                <CheckCircle2 className="text-cyan-400 flex-shrink-0" size={32} />
                <span className="text-2xl font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
            <Rocket className="text-cyan-400" size={20} />
            <span className="text-cyan-400 font-bold">Disponible para nuevos proyectos</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-8">
            ¿TIENES UN <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">PROYECTO</span> EN MENTE?
          </h2>

          <p className="text-3xl text-gray-400 mb-12 leading-relaxed">
            Convirtamos tu idea en realidad
          </p>

          <form action="https://formspree.io/f/mleqgjdr" method="POST" className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-10">
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                className="w-full bg-black/50 border border-cyan-500/30 rounded-2xl px-6 py-5 text-xl focus:outline-none focus:border-cyan-500 transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                className="w-full bg-black/50 border border-cyan-500/30 rounded-2xl px-6 py-5 text-xl focus:outline-none focus:border-cyan-500 transition-colors"
                required
              />
              <textarea
                rows="6"
                name="message"
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full bg-black/50 border border-cyan-500/30 rounded-2xl px-6 py-5 text-xl focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                required
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-6 rounded-2xl font-black text-2xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                ENVIAR MENSAJE
                <Zap />
              </button>
            </div>
          </form>

          <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com/Etiketaa" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Github size={40} />
            </a>
            <a href="https://www.linkedin.com/in/francoparedes1992/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin size={40} />
            </a>
            <a href="mailto:francoparedes1992@gmail.com" className="hover:text-cyan-400 transition-colors">
              <Mail size={40} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-lg">© 2024 Franco Paredes • Full Stack Developer • Hecho con React + Tailwind</p>
        </div>
      </footer>
    </div>
  );
}
