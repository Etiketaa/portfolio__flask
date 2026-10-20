import { useMemo, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projectCategories, projects } from "../../data/projects";
import AnimatedSection from "../common/AnimatedSection";
import { Badge, Card, SectionTitle } from "../ui";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <section id="proyectos" className="section-brutal">
      <div className="container">
        <AnimatedSection delay={0}>
          <SectionTitle
            label="Trabajo"
            title="Proyectos que resuelven problemas"
            subtitle="Una selección de productos reales, en producción, con la decisión de arquitectura detrás de cada uno."
          />
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
                  className={`btn-brutal px-4 py-2 text-sm gap-1.5 ${
                    isActive
                      ? "btn-primary"
                      : "btn-secondary"
                  }`}
                >
                  <span aria-hidden="true">{cat.emoji}</span>
                  {cat.label}
                  <span className={isActive ? "text-white/70" : "text-ink-muted"}>{count}</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <AnimatedSection key={project.id} delay={Math.min(idx * 60, 300)}>
              <ProjectCard project={project} index={idx} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const rotateClass = index % 2 === 0 ? "rotated-even" : "rotated-odd";

  return (
    <Card variant="project" padding="md" className={rotateClass} style={{ '--rot': index % 2 === 0 ? '1deg' : '-1deg' }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {project.status === "production" && (
            <Badge variant="success" size="sm">En producción</Badge>
          )}
          {project.year && (
            <span className="font-body text-xs font-medium text-ink-subtle">{project.year}</span>
          )}
        </div>
      </div>

      <h3 className="font-display font-bold text-ink text-lg mb-2">
        <Link
          to={`/work/${project.slug}`}
          className="hover:text-primary brutalist-interactive focus-visible:underline"
        >
          {project.title}
        </Link>
      </h3>
      <p className="font-body text-sm text-ink-muted leading-relaxed mb-2">{project.tagline}</p>
      {project.role && (
        <span className="font-body text-xs font-medium text-ink-subtle mb-3 block">{project.role}</span>
      )}

      <p className="font-body text-sm text-ink-muted/90 leading-relaxed flex-1 mb-5">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.frontend.slice(0, 3).map((tech) => (
          <Badge key={tech} variant="default" size="sm">{tech}</Badge>
        ))}
        {project.stack.backend.slice(0, 2).map((tech) => (
          <Badge key={tech} variant="primary" size="sm">{tech}</Badge>
        ))}
        {project.stack.database.slice(0, 1).map((tech) => (
          <Badge key={tech} variant="accent" size="sm">{tech}</Badge>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
        <Link
          to={`/work/${project.slug}`}
          className="font-display font-semibold text-sm text-primary hover:text-primary-hover brutalist-interactive"
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
              className="text-ink-muted hover:text-ink brutalist-interactive"
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
              className="font-display font-semibold text-sm text-primary hover:text-primary-hover brutalist-interactive"
            >
              Ver
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}