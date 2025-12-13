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
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center lg:text-left relative z-10">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="text-cyan-400" size={16} />
              <span className="text-cyan-400 font-bold text-sm">Desarrollador Full Stack Disponible</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
              CONSTRUYO<br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                APLICACIONES
              </span><br />
              QUE ESCALAN
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              2 años transformando ideas en productos digitales de alto rendimiento con <span className="text-cyan-400 font-bold">React, Laravel, Symfony y Python</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <a href="#proyectos" className="group bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center gap-2">
                VER PROYECTOS
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20}/>
              </a>
              <a href="#contacto" className="border-2 border-cyan-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-500/10 transition-all hover:scale-105">
                HABLEMOS
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-6">
              <a href="https://github.com/Etiketaa" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors transform hover:scale-110">
                <Github size={32} />
              </a>
              <a href="https://www.linkedin.com/in/francoparedes1992/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors transform hover:scale-110">
                <Linkedin size={32} />
              </a>
              <a href="mailto:francoparedes1992@gmail.com" className="hover:text-cyan-400 transition-colors transform hover:scale-110">
                <Mail size={32} />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <img src={userPhoto} alt="Franco Paredes" className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/20" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              MIS <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">SUPERPODERES</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">Tecnologías con las que desarrollo soluciones profesionales</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500 transition-all h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-4xl md:text-5xl mb-4">{skill.icon}</div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">{skill.name}</h3>
                      <div className="text-cyan-400 font-semibold text-base">{skill.level}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 mt-4 overflow-hidden">
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
      <section id="proyectos" className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              PROYECTOS QUE <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">GENERAN IMPACTO</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">Resultados medibles, código escalable</p>
          </div>

          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 md:p-8 hover:border-cyan-500 transition-all">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="text-5xl md:text-6xl">{project.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full font-semibold text-sm border border-cyan-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
                        {project.deploy && <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-bold hover:underline text-sm">Ver Demo</a>}
                        {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-bold hover:underline text-sm">Repositorio</a>}
                        {project.credentials && (
                          <div className="text-xs text-gray-400">
                            <p>User: {project.credentials.user} / Pass: {project.credentials.pass}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-left md:text-right mt-4 md:mt-0">
                      <div className="text-xl md:text-2xl font-bold text-cyan-400 mb-1">{project.impact}</div>
                      <div className="text-base md:text-lg text-gray-400">{project.metric}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              ¿POR QUÉ <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">TRABAJAR CONMIGO?</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              'Código limpio y escalable que otros desarrolladores entienden',
              'Comunicación constante - sin sorpresas de último minuto',
              'Experiencia con proyectos reales de producción',
              'Dominio de tecnologías modernas del mercado',
              'Entregas a tiempo, siempre'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 md:p-6 hover:border-cyan-500 transition-all">
                <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                <span className="text-base md:text-lg font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Rocket className="text-cyan-400" size={16} />
            <span className="text-cyan-400 font-bold text-sm">Disponible para nuevos proyectos</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-4">
            ¿TIENES UN <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">PROYECTO</span> EN MENTE?
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
            Convirtamos tu idea en realidad
          </p>

          <form action="https://formspree.io/f/mleqgjdr" method="POST" className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 md:p-8">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                className="w-full bg-black/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-cyan-500 transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                className="w-full bg-black/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-cyan-500 transition-colors"
                required
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full bg-black/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                required
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                ENVIAR MENSAJE
                <Zap size={20}/>
              </button>
            </div>
          </form>

          <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com/Etiketaa" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/francoparedes1992/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin size={32} />
            </a>
            <a href="mailto:francoparedes1992@gmail.com" className="hover:text-cyan-400 transition-colors">
              <Mail size={32} />
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
