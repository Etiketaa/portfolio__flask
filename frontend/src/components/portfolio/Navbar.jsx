import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['inicio', 'habilidades', 'proyectos', 'contacto'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio', id: 'inicio' },
    { href: '#habilidades', label: 'Skills', id: 'habilidades' },
    { href: '#proyectos', label: 'Proyectos', id: 'proyectos' },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Navegación principal"
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#inicio" className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            FRANCO PAREDES
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-lg transition-colors font-semibold ${
                  activeSection === link.id ? 'text-cyan-400' : 'hover:text-cyan-400'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              TRABAJEMOS JUNTOS
            </a>
          </div>

          <button
            className="md:hidden text-cyan-400 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-black/95 backdrop-blur-xl border-t border-cyan-500/20`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`block text-xl font-semibold transition-colors ${
                activeSection === link.id ? 'text-cyan-400' : 'hover:text-cyan-400'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="block text-center bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-bold"
            onClick={() => setMenuOpen(false)}
          >
            TRABAJEMOS JUNTOS
          </a>
        </div>
      </div>
    </nav>
  );
}