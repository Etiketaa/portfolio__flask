import {
  Code,
  Database,
  Server,
  Globe,
  Layers,
  Terminal,
  GitBranch,
  Container,
  Smartphone,
  Monitor,
  Box,
} from "lucide-react";

export const skillPillars = [
  {
    id: "frontend",
    title: "Frontend & UX",
    icon: Code,
    description:
      "Interfaces accesibles y performantes. Diseño con tokens, jerarquía visual y motion con propósito.",
    skills: [
      { name: "React", icon: Code },
      { name: "Next.js", icon: Code },
      { name: "TypeScript", icon: Code },
      { name: "JavaScript", icon: Code },
      { name: "Tailwind CSS", icon: Code },
      { name: "HTML5", icon: Code },
      { name: "CSS3", icon: Code },
      { name: "Figma", icon: Layers },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: Server,
    description:
      "APIs REST robustas, validación tipada y lógica de negocio en capas. Server Actions y servicios.",
    skills: [
      { name: "Python", icon: Terminal },
      { name: "FastAPI", icon: Server },
      { name: "Node.js", icon: Code },
      { name: "Express", icon: Code },
      { name: "PHP", icon: Code },
      { name: "Laravel", icon: Code },
      { name: "Symfony", icon: Code },
      { name: "Flask", icon: Terminal },
    ],
  },
  {
    id: "database",
    title: "Datos & Arquitectura",
    icon: Database,
    description:
      "Modelado de datos, PostgreSQL, RLS, migraciones versionadas y decisiones que evitan errores caros.",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "Supabase", icon: Database },
      { name: "SQL", icon: Database },
      { name: "SQLAlchemy", icon: Database },
      { name: "Firebase", icon: Database },
      { name: "SQLite", icon: Database },
      { name: "RLS Policies", icon: Database },
      { name: "Migraciones", icon: Database },
    ],
  },
  {
    id: "platform",
    title: "Plataforma & Desktop",
    icon: Globe,
    description:
      "Deploy, containerización y apps nativas. Del commit a producción con el menor vendor lock-in posible.",
    skills: [
      { name: "Docker", icon: Container },
      { name: "Vercel", icon: Globe },
      { name: "Tauri (Rust)", icon: Monitor },
      { name: "React Native", icon: Smartphone },
      { name: "Expo", icon: Smartphone },
      { name: "Git & GitHub", icon: GitBranch },
      { name: "iOS / Android", icon: Smartphone },
      { name: "Docker Compose", icon: Box },
    ],
  },
];

export const skills = skillPillars.flatMap((p) => p.skills);