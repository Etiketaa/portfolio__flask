import { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Github,
} from "lucide-react";
import { projects, getProjectBySlug } from "../data/projects";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import ThemeToggle from "../components/common/ThemeToggle";

const statusLabel = {
  production: "En producción",
  active: "En desarrollo activo",
  prototype: "Prototipo / Demo",
  archived: "Archivado",
};

export default function WorkDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  const neighbors = useMemo(() => {
    const idx = projects.findIndex((p) => p.slug === slug);
    if (idx === -1) return { prev: null, next: null };
    return {
      prev: projects[(idx - 1 + projects.length) % projects.length],
      next: projects[(idx + 1) % projects.length],
    };
  }, [slug]);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Franco Paredes`;
    } else {
      document.title = "Proyecto no encontrado — Franco Paredes";
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-canvas flex flex-col items-center justify-center px-4 text-center">
        <p className="text-6xl mb-6" aria-hidden="true">
          🧭
        </p>
        <h1 className="text-2xl md:text-3xl font-black text-ink">
          No encontramos ese proyecto
        </h1>
        <p className="mt-2 text-ink-muted max-w-md">
          El enlace puede estar desactualizado o el proyecto fue renombrado.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button size="lg" onClick={() => navigate(-1)} leftIcon={<ArrowLeft size={18} />}>
            Volver
          </Button>
          <Button variant="outline" size="lg" onClick={() => navigate("/")}>
            Ir al inicio
          </Button>
        </div>
      </div>
    );
  }

  const sections = [
    { key: "problem", label: "El problema", body: project.problem },
    { key: "approach", label: "La solución", body: project.approach },
    { key: "outcome", label: "El resultado", body: project.outcome },
  ];

  return (
    <div className="min-h-screen bg-canvas">
      <header className="sticky top-0 z-[300] bg-canvas/80 backdrop-blur-xl border-b border-border">
        <nav
          role="navigation"
          aria-label="Navegación del proyecto"
          className="container flex items-center justify-between h-16"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Volver a proyectos
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="container py-10 md:py-16">
        <article>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <div className="lg:col-span-2">
              <div
                className="relative rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-brand-500/15 via-canvas to-accent-500/15 p-10 md:p-14 text-center"
                aria-hidden="true"
              >
                <span className="text-7xl md:text-8xl inline-block">{project.emoji}</span>
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="rounded-full bg-brand-500/10 border border-brand-500/30 px-3 py-1 text-xs font-semibold text-primary-hover dark:text-primary"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap items-center gap-3">
                  {project.status && (
                    <Badge variant={project.status === "production" ? "success" : "brand"} size="sm">
                      {statusLabel[project.status] || project.status}
                    </Badge>
                  )}
                  {project.year && (
                    <span className="text-sm font-medium text-ink-subtle">{project.year}</span>
                  )}
                  {project.role && (
                    <span className="text-sm font-medium text-ink-subtle">{project.role}</span>
                  )}
                </div>

                <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-balance text-ink">
                  {project.title}
                </h1>
                <p className="mt-3 text-lg md:text-xl text-ink-muted leading-relaxed">
                  {project.tagline}
                </p>

                <p className="mt-6 text-ink-muted leading-relaxed">{project.summary}</p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  {project.links.deploy && (
                    <Button
                      size="lg"
                      onClick={() => window.open(project.links.deploy, "_blank", "noopener,noreferrer")}
                      rightIcon={<ExternalLink size={18} />}
                    >
                      Ver en producción
                    </Button>
                  )}
                  {project.links.repo && (
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => window.open(project.links.repo, "_blank", "noopener,noreferrer")}
                      leftIcon={<Github size={18} />}
                    >
                      Ver código
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <aside className="lg:col-span-1 space-y-8">
              {project.metrics?.length > 0 && (
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                    Métricas
                  </h2>
                  <dl className="grid grid-cols-3 gap-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-border bg-surface p-4 text-center"
                      >
                        <dd className="text-2xl font-black text-primary">{metric.value}</dd>
                        <dt className="mt-1 text-xs text-ink-muted leading-snug">
                          {metric.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                  Stack técnico
                </h2>
                <div className="rounded-2xl border border-border bg-surface p-5 space-y-4">
                  {Object.entries(project.stack || {}).map(([group, techs]) =>
                    techs.length > 0 ? (
                      <div key={group} className="flex flex-col gap-1.5">
                        <span className="text-xs font-semibold text-ink-subtle capitalize">
                          {group}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {techs.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-none bg-canvas border border-border px-2 py-1 text-xs font-medium text-ink-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <div className="lg:col-span-2 space-y-10">
              {sections.map((section) => (
                <section key={section.key} aria-labelledby={`${section.key}-title`}>
                  <h2
                    id={`${section.key}-title`}
                    className="text-lg md:text-xl font-bold text-ink"
                  >
                    {section.label}
                  </h2>
                  <div className="mt-3 h-px bg-line" />
                  <p className="mt-5 text-ink-muted leading-relaxed">{section.body}</p>
                </section>
              ))}

              {project.highlights?.length > 0 && (
                <section aria-labelledby="highlights-title">
                  <h2 id="highlights-title" className="text-lg md:text-xl font-bold text-ink">
                    Puntos destacados
                  </h2>
                  <div className="mt-3 h-px bg-line" />
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 rounded-none border border-border bg-surface p-4 text-sm text-ink-muted"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 flex-shrink-0 text-success-500"
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-8">
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                    Arquitectura
                  </h2>
                  <div className="rounded-2xl border border-border bg-surface p-5 space-y-3">
                    {project.architecture?.map((item) => (
                      <div
                        key={`${item.layer}-${item.tech}`}
                        className="flex items-start justify-between gap-3"
                      >
                        <span className="text-sm font-semibold text-ink flex-shrink-0">
                          {item.layer}
                        </span>
                        <span className="text-sm text-ink-muted text-right">{item.tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </article>

        <nav
          aria-label="Otros proyectos"
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {neighbors.prev && (
            <Link
              to={`/work/${neighbors.prev.slug}`}
              className="group rounded-2xl border border-border bg-surface p-6 hover:border-brand-500 transition-colors"
            >
              <span className="flex items-center gap-1 text-xs font-semibold text-ink-subtle">
                <ArrowLeft size={14} aria-hidden="true" /> Anterior
              </span>
              <span className="mt-2 block font-bold text-ink group-hover:text-primary transition-colors">
                {neighbors.prev.emoji} {neighbors.prev.title}
              </span>
            </Link>
          )}
          {neighbors.next && (
            <Link
              to={`/work/${neighbors.next.slug}`}
              className="group rounded-2xl border border-border bg-surface p-6 text-right hover:border-brand-500 transition-colors sm:col-start-2"
            >
              <span className="flex items-center justify-end gap-1 text-xs font-semibold text-ink-subtle">
                Siguiente <ArrowRight size={14} aria-hidden="true" />
              </span>
              <span className="mt-2 block font-bold text-ink group-hover:text-primary transition-colors">
                {neighbors.next.emoji} {neighbors.next.title}
              </span>
            </Link>
          )}
        </nav>
      </main>
    </div>
  );
}