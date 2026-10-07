export const projectCategories = [
  { id: "all", label: "Todos", emoji: "✦" },
  { id: "fullstack", label: "Full Stack", emoji: "🧩" },
  { id: "saas", label: "SaaS / Gestión", emoji: "⚙️" },
  { id: "backend", label: "Backend & Datos", emoji: "🗄️" },
  { id: "frontend", label: "Frontend & UX", emoji: "🎨" },
  { id: "desktop", label: "Desktop & Mobile", emoji: "📱" },
];

export const projects = [
  {
    id: "fullshine",
    slug: "fullshine-detailing",
    title: "Fullshine Detailing",
    tagline: "SaaS de gestión para talleres de detailing con reservas online",
    emoji: "🚗",
    categories: ["fullstack", "saas", "backend"],
    featured: true,
    year: "2025",
    status: "production",
    role: "Arquitectura, base de datos, backend y frontend",
    summary:
      "Sistema completo para talleres de detailing: sitio público con reservas en 3 pasos y un panel de administración con 14 módulos — órdenes de trabajo, agenda, clientes, contabilidad, inventario y recurrencias.",
    problem:
      "Los talleres gestionan turnos, clientes y cobros en planillas sueltas. No hay trazabilidad, se superponen turnos y el negocio no tiene una fuente única de verdad.",
    approach:
      "Next.js App Router con Server Components y Server Actions, Supabase (PostgreSQL) como backend con políticas RLS por tabla, y Supabase Auth + SSR para el panel privado. Emails transaccionales con Resend.",
    outcome:
      "Una plataforma en producción donde el cliente reserva online y el taller administra todo su negocio desde un único panel, con permisos finos a nivel de fila.",
    highlights: [
      "Booking público en 3 pasos con disponibilidad real",
      "Panel admin con 14 módulos (órdenes, agenda, contabilidad, inventario…)",
      "Políticas RLS por tabla: público lee, solo admin escribe",
      "Búsqueda global con Ctrl+K y atajos de teclado",
      "Emails transaccionales con Resend (Server Actions)",
      "SEO técnico: sitemap y robots generados",
    ],
    architecture: [
      { layer: "Frontend", tech: "Next.js 16 (App Router) · React 19" },
      { layer: "Estilos", tech: "Tailwind CSS v4" },
      { layer: "Datos", tech: "Supabase (PostgreSQL) · RLS" },
      { layer: "Auth", tech: "Supabase Auth + SSR · middleware" },
      { layer: "Emails", tech: "Resend" },
      { layer: "Deploy", tech: "Vercel" },
    ],
    stack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "lucide-react", "date-fns"],
      backend: ["Server Actions", "Supabase Auth", "Resend", "middleware"],
      database: ["PostgreSQL", "Supabase RLS", "migraciones SQL"],
      infra: ["Vercel", "Supabase"],
    },
    metrics: [
      { value: "14", label: "módulos de administración" },
      { value: "12+", label: "tablas con RLS" },
      { value: "3", label: "pasos para reservar" },
    ],
    links: { deploy: "https://fullshine-turnero.vercel.app", repo: "" },
  },
  {
    id: "inmo-automation",
    slug: "inmo-automation",
    title: "Inmo Automation",
    tagline: "Automatización de mensajes de WhatsApp para inmobiliarias",
    emoji: "🏠",
    categories: ["fullstack", "backend", "saas"],
    featured: true,
    year: "2025",
    status: "active",
    role: "Backend, motor de automatización y dashboard",
    summary:
      "Backend en Python + FastAPI que conecta WhatsApp Business API, clasifica mensajes de clientes y dispara reglas de automatización sobre propiedades, con un dashboard en React que muestra métricas en tiempo real.",
    problem:
      "Las inmobiliarias reciben cientos de consultas por WhatsApp y las responden a mano. Se pierden leads y no hay seguimiento ni métricas de conversión.",
    approach:
      "API REST con FastAPI organizada en capas (api / models / services), PostgreSQL vía Docker Compose y un motor de reglas que evalúa cada mensaje entrante. El dashboard en React consume los endpoints y grafica la actividad con Recharts.",
    outcome:
      "Una bandeja unificada con automatizaciones que responden por reglas, clasifican consultas y alimentan un dashboard de rendimiento comercial.",
    highlights: [
      "Endpoints REST para mensajes, propiedades, automatización y dashboard",
      "Motor de reglas configurable sobre mensajes entrantes",
      "Integración con WhatsApp Business API",
      "Dashboard con gráficos de actividad y rendimiento (Recharts)",
      "Arquitectura en capas: api / models / services",
      "Base de datos PostgreSQL con Docker Compose",
    ],
    architecture: [
      { layer: "Backend", tech: "Python · FastAPI" },
      { layer: "Frontend", tech: "React 18 · Vite" },
      { layer: "Datos", tech: "PostgreSQL (Docker Compose)" },
      { layer: "Integraciones", tech: "WhatsApp Business API" },
      { layer: "Visualización", tech: "Recharts" },
    ],
    stack: {
      frontend: ["React", "Tailwind CSS", "Recharts", "React Router", "Axios", "Lucide"],
      backend: ["Python", "FastAPI", "Pydantic", "SQLAlchemy"],
      database: ["PostgreSQL"],
      infra: ["Docker Compose"],
      integrations: ["WhatsApp Business API"],
    },
    metrics: [
      { value: "4", label: "grupos de endpoints REST" },
      { value: "3", label: "capas de backend" },
      { value: "∞", label: "reglas configurables" },
    ],
    links: { deploy: "", repo: "" },
  },
  {
    id: "sistema-gestion",
    slug: "sistema-gestion-interna",
    title: "Sistema de Gestión Operativa",
    tagline: "Rutas, visitas y cobranzas en campo — mobile-first",
    emoji: "🧭",
    categories: ["fullstack", "saas", "backend"],
    featured: true,
    year: "2025",
    status: "active",
    role: "Producto, arquitectura full-stack y sistema de diseño",
    summary:
      "Sistema web para empresas que hacen recorridos periódicos visitando clientes y comercios. Reemplaza planillas de Excel por una base de datos como única fuente de verdad, con historial inmutable y operación mobile-first.",
    problem:
      "La operación dependía de planillas (Excel/Google Sheets) y de un 'reset mensual' destructivo que borraba la trazabilidad de visitas, importes, medios de pago y comprobantes.",
    approach:
      "Full-stack React 19 + TypeScript + Vite con Express. Diseño mobile-first donde el operador registra visitas en el celular en mínimos toques, y el admin ve KPIs en tiempo real sin reconciliación manual. Períodos continuos acumulativos en vez de resets.",
    outcome:
      "El operador cierra su jornada con todas las visitas registradas y comprobantes adjuntos; el admin ve KPIs actualizados al instante. Trazabilidad histórica completa por cliente.",
    highlights: [
      "Historial inmutable: nada se borra, cada acción deja rastro",
      "Operador primero en móvil: flujo en mínimo toques",
      "KPIs en tiempo real para el admin, cero reconciliación manual",
      "Períodos continuos acumulativos (sin reset destructivo)",
      "Stack portable, sin vendor lock-in",
      "Semántica de color sobre estética (estados con significado)",
    ],
    architecture: [
      { layer: "Frontend", tech: "React 19 · TypeScript · Vite" },
      { layer: "Backend", tech: "Express (Node.js)" },
      { layer: "Estilos", tech: "Tailwind CSS v4 · Motion" },
      { layer: "Datos", tech: "PostgreSQL" },
    ],
    stack: {
      frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "lucide-react", "motion"],
      backend: ["Node.js", "Express"],
      database: ["PostgreSQL"],
      infra: ["Linux / VPS / container"],
    },
    metrics: [
      { value: "0", label: "reconciliación manual" },
      { value: "2", label: "roles: operador y admin" },
      { value: "100%", label: "trazabilidad histórica" },
    ],
    links: { deploy: "", repo: "" },
  },
  {
    id: "finanzas",
    slug: "finanzas-personales",
    title: "Finanzas Personales",
    tagline: "Gestor de dinero con agente IA y modelo intercambiable",
    emoji: "💰",
    categories: ["fullstack", "backend", "frontend"],
    featured: true,
    year: "2025",
    status: "active",
    role: "Backend, datos, agente IA y UI mobile-first",
    summary:
      "Aplicación de finanzas personales con un agente IA que registra movimientos por lenguaje natural. Backend en Python con SQLAlchemy, sesiones propias y un modelo de datos intercambiable entre SQLite y PostgreSQL.",
    problem:
      "Registrar gastos suele ser tedioso y los usuarios terminan abandonando. Además, muchas apps de finanzas guardan montos como floats y arrastran errores de redondeo.",
    approach:
      "Backend Python (FastAPI) con SQLAlchemy y montos en centavos como enteros —nunca floats—. Historia de usuario clave: registrar un movimiento en menos de 5 segundos. Agente IA con herramientas propias para confirmar en backend. Deploy en Vercel + Postgres manejado (Neon).",
    outcome:
      "Una app instalable en el celular (manifest + add to home screen) donde movimientos, presupuestos, objetivos y vencimientos conviven en una IA clara, con aislamiento por usuario verificado en API y en el agente.",
    highlights: [
      "Agente IA que registra movimientos por lenguaje natural",
      "Montos en centavos (enteros): cero errores de redondeo",
      "Modelo intercambiable: SQLite por defecto, PostgreSQL cambiando la URL",
      "Registrar un movimiento en menos de 5 segundos",
      "Sesiones revocables con token opaco (sin JWT innecesario)",
      "Aislamiento por usuario verificado (checks A-vs-B)",
    ],
    architecture: [
      { layer: "Backend", tech: "Python · FastAPI" },
      { layer: "ORM", tech: "SQLAlchemy" },
      { layer: "Agente", tech: "OpenAI (function calling)" },
      { layer: "Datos", tech: "SQLite / PostgreSQL (Neon)" },
      { layer: "Frontend", tech: "SPA sin build step (mobile-first)" },
    ],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript", "PWA manifest"],
      backend: ["Python", "FastAPI", "SQLAlchemy", "psycopg"],
      database: ["SQLite", "PostgreSQL"],
      infra: ["Vercel", "Neon"],
      integrations: ["OpenAI"],
    },
    metrics: [
      { value: "<5s", label: "para registrar un movimiento" },
      { value: "0", label: "floats en dinero (centavos)" },
      { value: "1", label: "variable para cambiar de base de datos" },
    ],
    links: { deploy: "", repo: "" },
  },
  {
    id: "detailing-pro",
    slug: "detailing-pro",
    title: "Detailing Pro",
    tagline: "Aplicación de escritorio para talleres de detailing",
    emoji: "🧰",
    categories: ["desktop", "frontend", "backend"],
    featured: false,
    year: "2024",
    status: "active",
    role: "Arquitectura, frontend y app desktop",
    summary:
      "App de escritorio para gestionar un taller de detailing, empaquetada con Tauri (Rust) para correr nativa y liviana sobre el sistema operativo, con datos locales.",
    problem:
      "Un taller necesita gestionar servicios, clientes y trabajo diario sin depender de una conexión a internet ni de un servidor externo.",
    approach:
      "Frontend en React 18 + Vite con Tailwind y estado en Zustand, data-fetching con TanStack Query y notificaciones con react-hot-toast. Empaquetado como app nativa con Tauri (Rust) y base de datos local.",
    outcome:
      "Una aplicación nativa de escritorio que funciona offline, arranca rápido y no requiere servidor.",
    highlights: [
      "App nativa de escritorio con Tauri (Rust)",
      "Funciona offline, sin servidor externo",
      "Estado global con Zustand + caché con TanStack Query",
      "Feedback de UI con react-hot-toast",
    ],
    architecture: [
      { layer: "Desktop", tech: "Tauri 2 (Rust)" },
      { layer: "Frontend", tech: "React 18 · Vite" },
      { layer: "Estilos", tech: "Tailwind CSS" },
      { layer: "Estado", tech: "Zustand · TanStack Query" },
      { layer: "Datos", tech: "SQLite local" },
    ],
    stack: {
      frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "lucide-react", "date-fns"],
      backend: ["Tauri", "Rust"],
      database: ["SQLite"],
      infra: ["App desktop nativa"],
    },
    metrics: [
      { value: "Rust", label: "runtime de escritorio (Tauri)" },
      { value: "0", label: "dependencia de servidor" },
    ],
    links: { deploy: "", repo: "" },
  },
  {
    id: "bithouse-dashboard",
    slug: "bithouse-dashboard",
    title: "Bit-House Dashboard",
    tagline: "Panel móvil de e-commerce de hardware con Expo",
    emoji: "💻",
    categories: ["desktop", "frontend", "fullstack"],
    featured: false,
    year: "2025",
    status: "active",
    role: "Frontend mobile y arquitectura de navegación",
    summary:
      "Dashboard móvil para administrar un e-commerce de hardware, construido con Expo + React Native y expo-router, con animaciones nativas vía Reanimated.",
    problem:
      "La tienda necesitaba administrar productos y pedidos desde el celular, con una experiencia nativa y fluida, no una web adaptada.",
    approach:
      "App con Expo (SDK 57) y React Native, navegación file-based con expo-router, animaciones con react-native-reanimated y componentes nativos con expo-glass-effect. También compilable a web con react-native-web.",
    outcome:
      "Una app móvil multiplataforma con navegación nativa y animaciones a 60fps para gestionar la tienda desde cualquier dispositivo.",
    highlights: [
      "Navegación file-based con expo-router",
      "Animaciones nativas con react-native-reanimated",
      "Efectos visuales nativos (expo-glass-effect)",
      "Multiplataforma: iOS, Android y web",
    ],
    architecture: [
      { layer: "App", tech: "Expo · React Native 0.86" },
      { layer: "Navegación", tech: "expo-router (file-based)" },
      { layer: "Animación", tech: "react-native-reanimated" },
      { layer: "Lenguaje", tech: "TypeScript" },
    ],
    stack: {
      frontend: ["React Native", "Expo", "expo-router", "TypeScript", "react-native-reanimated"],
      backend: [],
      database: [],
      infra: ["iOS", "Android", "web"],
    },
    metrics: [
      { value: "3", label: "plataformas: iOS, Android, web" },
      { value: "60fps", label: "animaciones nativas" },
    ],
    links: { deploy: "https://bithouse-dashboard.vercel.app", repo: "https://github.com/Etiketaa/bit-house" },
  },
  {
    id: "ozgym",
    slug: "ozgym",
    title: "Oz Gym",
    tagline: "Turnero para gimnasios con dashboard de métricas",
    emoji: "💪",
    categories: ["frontend", "fullstack", "saas"],
    featured: false,
    year: "2025",
    status: "production",
    role: "Frontend y visualización de datos",
    summary:
      "Aplicación de turnos para gimnasios con un dashboard interactivo que muestra métricas de asistencia en tiempo real mediante gráficos.",
    problem:
      "Los gimnasios necesitan organizar cupos por clase y ver de un vistazo la ocupación y el flujo de socios.",
    approach:
      "React con Vite y Supabase como backend, animaciones con Framer Motion y gráficos con Recharts para visualizar la actividad.",
    outcome:
      "Un panel claro con turnos gestionables y métricas visuales en tiempo real.",
    highlights: [
      "Dashboard con métricas en tiempo real",
      "Gráficos interactivos con Recharts",
      "Animaciones fluidas con Framer Motion",
      "Backend y auth con Supabase",
    ],
    architecture: [
      { layer: "Frontend", tech: "React · Vite" },
      { layer: "Datos", tech: "Supabase (PostgreSQL)" },
      { layer: "Animación", tech: "Framer Motion" },
      { layer: "Gráficos", tech: "Recharts" },
    ],
    stack: {
      frontend: ["React", "Vite", "Framer Motion", "Recharts"],
      backend: ["Supabase"],
      database: ["PostgreSQL"],
      infra: ["Vercel"],
    },
    metrics: [
      { value: "Real-time", label: "métricas de asistencia" },
    ],
    links: { deploy: "https://ozgym.vercel.app", repo: "" },
  },
  {
    id: "upestudio",
    slug: "upestudio",
    title: "UpStudio",
    tagline: "Plataforma de turnos SaaS multi-tenant para estudios",
    emoji: "📅",
    categories: ["saas", "fullstack", "backend"],
    featured: false,
    year: "2024",
    status: "production",
    role: "Arquitectura y desarrollo full-stack",
    summary:
      "Plataforma de turnos multi-tenant para estudios, con validación de datos tipada y aislamiento por organización.",
    problem:
      "Distintos estudios necesitan la misma lógica de reservas pero con datos separados y sin montar infraestructura propia.",
    approach:
      "Next.js con Supabase, validación de esquemas con Zod y arquitectura multi-tenant sobre políticas de la base de datos.",
    outcome:
      "Un sistema escalable donde cada estudio opera de forma aislada sobre la misma plataforma.",
    highlights: [
      "Arquitectura multi-tenant escalable",
      "Validación de datos con Zod",
      "Auth y datos con Supabase",
    ],
    architecture: [
      { layer: "Frontend", tech: "Next.js · React" },
      { layer: "Datos", tech: "Supabase (PostgreSQL)" },
      { layer: "Validación", tech: "Zod" },
    ],
    stack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Supabase"],
      database: ["PostgreSQL"],
      infra: ["Vercel"],
    },
    metrics: [{ value: "Multi-tenant", label: "aislamiento por estudio" }],
    links: { deploy: "https://upestudio.vercel.app", repo: "" },
  },
  {
    id: "gestor-flask",
    slug: "gestor-flask",
    title: "Gestor Flask",
    tagline: "Dashboard de administración con Python y Firebase",
    emoji: "🐍",
    categories: ["backend", "fullstack", "saas"],
    featured: false,
    year: "2024",
    status: "production",
    role: "Backend y frontend",
    summary:
      "Dashboard de administración construido en Flask que gestiona recursos apoyándose en Firebase como base de datos.",
    problem:
      "Se necesitaba una interfaz liviana para administrar registros sin montar un stack pesado.",
    approach:
      "Flask sirviendo vistas y lógica de negocio, con Firebase como almacenamiento. Deploy en PythonAnywhere.",
    outcome:
      "Un panel funcional y accesible para administrar recursos desde el navegador.",
    highlights: [
      "Backend en Python con Flask",
      "Persistencia en Firebase",
      "Deploy en PythonAnywhere",
    ],
    architecture: [
      { layer: "Backend", tech: "Python · Flask" },
      { layer: "Datos", tech: "Firebase" },
    ],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Python", "Flask"],
      database: ["Firebase"],
      infra: ["PythonAnywhere"],
    },
    metrics: [{ value: "Demo", label: "credenciales públicas de prueba" }],
    links: { deploy: "https://fparedes92.pythonanywhere.com", repo: "" },
    demo: { user: "adminsdemo", pass: "admon1234" },
  },
  {
    id: "pomodoro",
    slug: "pomodoro-timer",
    title: "Pomodoro Timer",
    tagline: "Temporizador de productividad con reproductor lofi e i18n",
    emoji: "⏱️",
    categories: ["frontend", "desktop"],
    featured: false,
    year: "2025",
    status: "active",
    role: "Frontend, UX e internacionalización",
    summary:
      "Temporizador Pomodoro con modos de trabajo y descanso, reproductor de música lofi, gestor de tareas e interfaz bilingüe (español/inglés).",
    problem:
      "Las sesiones de concentración se cortan por cambiar de app: uno pone el timer, otro la música y otro anota las tareas.",
    approach:
      "Una sola interfaz que integra timer, música y tareas. Configuración personalizable, i18n en inglés y español, y formulario de feedback.",
    outcome:
      "Una herramienta todo-en-uno de productividad con foco en la experiencia de uso.",
    highlights: [
      "Modos Pomodoro, descanso corto y descanso largo",
      "Reproductor de música lofi (play, pausa, skip, volumen)",
      "Gestor de tareas integrado",
      "Internacionalización: español e inglés",
      "Temporizador personalizable",
    ],
    architecture: [
      { layer: "Frontend", tech: "React" },
      { layer: "i18n", tech: "Español / Inglés" },
    ],
    stack: {
      frontend: ["React", "JavaScript", "CSS"],
      backend: [],
      database: [],
      infra: [],
    },
    metrics: [
      { value: "2", label: "idiomas soportados" },
      { value: "3", label: "modos de temporizador" },
    ],
    links: { deploy: "", repo: "" },
  },
  {
    id: "vas",
    slug: "vas-centro-estetica",
    title: "VAS Centro de Estética",
    tagline: "Landing con reservas y emails automáticos",
    emoji: "💅",
    categories: ["fullstack", "frontend", "saas"],
    featured: false,
    year: "2024",
    status: "production",
    role: "Desarrollo full-stack",
    summary:
      "Landing page con sistema de turnos y panel de administración, con confirmaciones por email automáticas.",
    problem:
      "El centro recibía reservas por mensaje y las coordinaba a mano, con riesgo de cruces y olvidos.",
    approach:
      "Backend en Node.js + Express con Supabase para los datos y Resend para los emails transaccionales. Deploy en Vercel.",
    outcome:
      "Un sistema completo donde el cliente reserva, recibe confirmación automática y el centro administra los turnos.",
    highlights: [
      "Sistema de turnos con panel de administración",
      "Emails automáticos con Resend",
      "Datos en Supabase",
    ],
    architecture: [
      { layer: "Frontend", tech: "HTML · CSS · JavaScript" },
      { layer: "Backend", tech: "Node.js · Express" },
      { layer: "Datos", tech: "Supabase (PostgreSQL)" },
      { layer: "Emails", tech: "Resend" },
    ],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Node.js", "Express"],
      database: ["PostgreSQL", "Supabase"],
      infra: ["Vercel"],
      integrations: ["Resend"],
    },
    metrics: [{ value: "Automático", label: "emails de confirmación" }],
    links: { deploy: "https://vas-centro.vercel.app", repo: "https://github.com/Etiketaa/landing-vas" },
  },
  {
    id: "oude",
    slug: "oude",
    title: "Oude",
    tagline: "E-commerce autogestionable con panel propio",
    emoji: "🛒",
    categories: ["fullstack", "backend", "saas"],
    featured: false,
    year: "2024",
    status: "production",
    role: "Desarrollo full-stack",
    summary:
      "E-commerce completo con panel de administración para que el dueño gestione productos y pedidos sin depender de terceros.",
    problem:
      "El negocio necesitaba vender online y autogestionar el catálogo, sin costos de plataformas cerradas.",
    approach:
      "Stack PHP con SQLite como base de datos embebida y JavaScript en el cliente para la interacción.",
    outcome:
      "Una tienda en producción con funciones de autogestión para el negocio.",
    highlights: [
      "Panel de administración autogestionable",
      "Carrito y catálogo",
      "Base de datos embebida (SQLite), sin servidor extra",
    ],
    architecture: [
      { layer: "Backend", tech: "PHP" },
      { layer: "Datos", tech: "SQLite" },
      { layer: "Frontend", tech: "JavaScript" },
    ],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["PHP"],
      database: ["SQLite"],
      infra: ["Hosting compartido"],
    },
    metrics: [{ value: "Autogestión", label: "sin dependencia de terceros" }],
    links: { deploy: "https://oudeonline.site", repo: "" },
  },
  {
    id: "domus",
    slug: "domus-tienda",
    title: "Domus Tienda",
    tagline: "Tienda de aromas con experiencia de usuario elegante",
    emoji: "✨",
    categories: ["frontend"],
    featured: false,
    year: "2024",
    status: "production",
    role: "Frontend y UX",
    summary:
      "Tienda online de sahumerios, perfuminas y difusores con foco en una experiencia de compra visual y cuidada.",
    problem:
      "La marca necesitaba un escaparate digital que transmitiera una sensación premium coherente con sus productos.",
    approach:
      "Sitio en HTML, CSS y JavaScript, con foco en jerarquía visual, espaciado y presentación del producto.",
    outcome:
      "Una tienda en producción con una identidad visual elegante y navegación clara.",
    highlights: [
      "Diseño visual premium",
      "Navegación intuitiva",
      "Site en producción con dominio propio",
    ],
    architecture: [{ layer: "Frontend", tech: "HTML · CSS · JavaScript" }],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: [],
      database: [],
      infra: ["Dominio propio"],
    },
    metrics: [{ value: "Producción", label: "domustienda.com.ar" }],
    links: { deploy: "https://domustienda.com.ar/", repo: "https://github.com/Etiketaa/Domus-tienda" },
  },
  {
    id: "bit-house",
    slug: "bit-house",
    title: "Bit-House",
    tagline: "E-commerce de hardware con carrito y filtros",
    emoji: "🖥️",
    categories: ["frontend"],
    featured: false,
    year: "2024",
    status: "production",
    role: "Frontend",
    summary:
      "E-commerce de hardware con carrito de compras y filtrado de productos, enfocado en una interfaz clara para comparar componentes.",
    problem:
      "Comprar hardware implica comparar muchas especificaciones; el sitio debía ordenar esa complejidad.",
    approach:
      "React con JavaScript, con foco en filtros de producto y un carrito de compras simple de usar.",
    outcome:
      "Una tienda funcional con navegación y filtrado que facilita encontrar el producto correcto.",
    highlights: [
      "Carrito de compras funcional",
      "Filtrado de productos",
      "Interfaz orientada a comparar hardware",
    ],
    architecture: [{ layer: "Frontend", tech: "React · JavaScript" }],
    stack: {
      frontend: ["React", "JavaScript"],
      backend: [],
      database: [],
      infra: [],
    },
    metrics: [{ value: "React", label: "UI basada en componentes" }],
    links: { deploy: "https://bit-house.ct.ws/", repo: "https://github.com/Etiketaa/bit-house" },
  },
  {
    id: "up-catalogo",
    slug: "up-catalogo",
    title: "Up Catálogo",
    tagline: "Catálogo digital de suplementos con navegación rápida",
    emoji: "🏋️",
    categories: ["frontend"],
    featured: false,
    year: "2024",
    status: "production",
    role: "Frontend",
    summary:
      "Catálogo digital de suplementos con navegación ágil y presentación clara de productos.",
    problem:
      "El negocio necesitaba mostrar su catálogo sin la fricción de una tienda completa.",
    approach:
      "Sitio estático en HTML, CSS y JavaScript, optimizado para rapidez y navegación simple.",
    outcome:
      "Un catálogo en producción rápido de cargar y fácil de recorrer.",
    highlights: [
      "Carga rápida (sitio estático)",
      "Navegación simple",
      "Presentación clara de productos",
    ],
    architecture: [{ layer: "Frontend", tech: "HTML · CSS · JavaScript" }],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: [],
      database: [],
      infra: ["Vercel"],
    },
    metrics: [{ value: "Estático", label: "sin backend, carga instantánea" }],
    links: { deploy: "https://up-catalogo.vercel.app/", repo: "https://github.com/Etiketaa/Up-catalogo" },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
