import {
  faReact,
  faJs,
  faPhp,
  faLaravel,
  faPython,
  faSymfony,
  faHtml5,
  faCss3,
  faNodeJs,
  faGitAlt,
  faDocker,
  faFigma,
  faAndroid,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCloud, faServer, faCode } from "@fortawesome/free-solid-svg-icons";

export const skillPillars = [
  {
    id: "frontend",
    title: "Frontend & UX",
    icon: faCode,
    description:
      "Interfaces accesibles y performantes. Diseño con tokens, jerarquía visual y motion con propósito.",
    skills: [
      { name: "React", icon: faReact },
      { name: "Next.js", icon: faCode },
      { name: "TypeScript", icon: faJs },
      { name: "JavaScript", icon: faJs },
      { name: "Tailwind CSS", icon: faCss3 },
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3 },
      { name: "Figma", icon: faFigma },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: faServer,
    description:
      "APIs REST robustas, validación tipada y lógica de negocio en capas. Server Actions y servicios.",
    skills: [
      { name: "Python", icon: faPython },
      { name: "FastAPI", icon: faServer },
      { name: "Node.js", icon: faNodeJs },
      { name: "Express", icon: faNodeJs },
      { name: "PHP", icon: faPhp },
      { name: "Laravel", icon: faLaravel },
      { name: "Symfony", icon: faSymfony },
      { name: "Flask", icon: faPython },
    ],
  },
  {
    id: "database",
    title: "Datos & Arquitectura",
    icon: faDatabase,
    description:
      "Modelado de datos, PostgreSQL, RLS, migraciones versionadas y decisiones que evitan errores caros.",
    skills: [
      { name: "PostgreSQL", icon: faDatabase },
      { name: "Supabase", icon: faDatabase },
      { name: "SQL", icon: faDatabase },
      { name: "SQLAlchemy", icon: faDatabase },
      { name: "Firebase", icon: faDatabase },
      { name: "SQLite", icon: faDatabase },
      { name: "RLS Policies", icon: faDatabase },
      { name: "Migraciones", icon: faDatabase },
    ],
  },
  {
    id: "platform",
    title: "Plataforma & Desktop",
    icon: faCloud,
    description:
      "Deploy, containerización y apps nativas. Del commit a producción con el menor vendor lock-in posible.",
    skills: [
      { name: "Docker", icon: faDocker },
      { name: "Vercel", icon: faCloud },
      { name: "Tauri (Rust)", icon: faServer },
      { name: "React Native", icon: faReact },
      { name: "Expo", icon: faAndroid },
      { name: "Git & GitHub", icon: faGitAlt },
      { name: "iOS / Android", icon: faApple },
      { name: "Docker Compose", icon: faDocker },
    ],
  },
];

export const skills = skillPillars.flatMap((p) => p.skills);