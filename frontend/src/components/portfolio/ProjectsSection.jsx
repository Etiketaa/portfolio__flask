import { useMemo, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projectCategories, projects } from "../../data/projects";
import AnimatedSection from "../common/AnimatedSection";
import { Badge } from "../ui/Badge";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <AnimatedSection delay={0}>
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-500 mb-3">
              Trabajo
            </p>
            <h2 className="section-title">
              Proyectos que{" "}
              <span className="bg-gradient-to-r from-brand-400 to-accent-500 bg-clip-text text-transparent">
                resuelven problemas
              </span>
            </h2>
            <p className="section-subtitle">
              Una selección de productos reales, en producción, con la decisión de arquitectura
              detrás de cada uno.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div
            className="flex flex-wrap gap-2 mb-10"
            role="tablist"
            aria-label="Filtrar proyectos por categoría"
          >
            {projectCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.categories.includes(cat.id)).length;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-brand-600 text-white"
                      : "bg-surface text-content-muted border border-line hover:text-content hover:border-brand-500"
                  }`}
                >
                  <span aria-hidden="true">{cat.emoji}</span>
                  {cat.label}
                  <span className={isActive ? "text-white/70" : "text-content-subtle"}>{count}</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <AnimatedSection key={project.id} delay={Math.min(idx * 60, 300)}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group relative flex flex-col h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:border-brand-500 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between mb-4">
        <span
          className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-2xl"
          aria-hidden="true"
        >
          {project.emoji}
        </span>
        <div className="flex items-center gap-2">
          {project.status === "production" && (
            <Badge variant="success" size="sm">
              En producción
            </Badge>
          )}
          {project.year && (
            <span className="text-xs font-medium text-content-subtle">{project.year}</span>
          )}
        </div>
      </div>

      <h3 className="text-lg font-bold text-content">
        <Link
          to={`/work/${project.slug}`}
          className="group-hover:text-brand-500 transition-colors focus-visible:outline-none focus-visible:underline"
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-1.5 text-sm text-content-muted leading-relaxed">{project.tagline}</p>
      {project.role && (
        <span className="mt-2 block text-xs font-medium text-content-subtle">{project.role}</span>
      )}

      <p className="mt-3 text-sm text-content-muted/90 leading-relaxed flex-1">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.frontend.slice(0, 3).map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
        {project.stack.backend.slice(0, 2).map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
        {project.stack.database.slice(0, 1).map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
        <Link
          to={`/work/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors"
          aria-label={`Ver el case study de ${project.title}`}
        >
          Ver caso
          <ArrowUpRight size={16} />
        </Link>
        <div className="flex items-center gap-3">
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Repositorio de ${project.title}`}
              className="text-content-subtle hover:text-content transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {project.links.deploy && (
            <a
              href={project.links.deploy}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver ${project.title} en vivo`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors"
            >
              Ver
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function TechTag({ children }) {
  return (
    <span className="rounded-md bg-canvas px-2 py-1 text-xs font-medium text-content-muted border border-line">
      {children}
    </span>
  );
}