import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";
import { Button } from "../ui/Button";

const navLinks = [
  { href: "#inicio", label: "Inicio", id: "inicio" },
  { href: "#habilidades", label: "Capacidades", id: "habilidades" },
  { href: "#proyectos", label: "Proyectos", id: "proyectos" },
  { href: "#proceso", label: "Proceso", id: "proceso" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sectionIds = [...navLinks.map((l) => l.id), "contacto"];
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      let current = "inicio";
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 240) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[300] transition-all duration-300 ${
        scrolled
          ? "bg-canvas/80 backdrop-blur-xl border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        role="navigation"
        aria-label="Navegación principal"
        className="container flex items-center justify-between h-16 md:h-20"
      >
        <a
          href="#inicio"
          className="inline-flex items-center gap-2 font-black text-lg tracking-tight text-content"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-600 text-white">
            <Code2 size={18} aria-hidden="true" />
          </span>
          Franco Paredes
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={activeSection === link.id ? "true" : undefined}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-brand-500 bg-brand-500/10"
                  : "text-content-muted hover:text-content"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button
            size="sm"
            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contacto
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-content"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out bg-canvas border-t border-line ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                activeSection === link.id
                  ? "text-brand-500 bg-brand-500/10"
                  : "text-content-muted hover:text-content"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            fullWidth
            className="mt-2"
            onClick={() => {
              setMenuOpen(false);
              document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contacto
          </Button>
        </div>
      </div>
    </header>
  );
}