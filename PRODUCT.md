# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React 19 + Vite 6 + Tailwind CSS v4. Frontend estático (SPA). Sin backend: el formulario de contacto abre el cliente de email del usuario (mailto). Build step: `npm run build` en frontend → `frontend/dist`. Dev: Vite dev server (puerto 5173). Deploy: GitHub Pages / Vercel estático.

## Users

**Primarios:**
- Clientes freelance (PYMEs, startups, emprendedores) que buscan un developer que entregue sistemas completos y operativos, no solo "features".
- Reclutadores técnicos / CTOs que evalúan capacidad de arquitectura end-to-end, modelado de datos, y criterio para elegir stack sin vendor lock-in.

**Secundarios:**
- Peers developers que revisan código, arquitectura y decisiones técnicas.

## Product Purpose

Demostrar que Franco Paredes diseña y construye **sistemas operativos reales** —no landing pages ni demos— que resuelven problemas de negocio concretos: turnos, cobranzas, automatizaciones, dashboards, gestión de inventario, contabilidad. El portfolio es la prueba viva de que el código sirve para operar, no solo para mostrar.

Success = que un cliente potencial o reclutador entienda en <30s que Franco entrega producto funcional, escalable, y con arquitectura que evita errores caros; y que contacte (WhatsApp / email) desde la página.

## Positioning

**"Sistemas que operan, no features que impresionan."** La mayoría de portfolios muestran stacks y capturas de UI. Este muestra: arquitectura en capas, decisiones de base de datos (RLS, migraciones, centavos vs floats), períodos acumulativos vs resets destructivos, aislamiento multi-tenant real, motor de reglas configurable, apps nativas offline-first. El diferencial es **evidencia operativa**: cada proyecto expone métricas reales (0 reconciliación manual, 14 módulos admin, 12+ tablas con RLS, <5s para registrar movimiento).

## Operating Context

- El visitante llega por referral directo, LinkedIn, GitHub, o búsqueda orgánica ("fullstack developer bahía blanca", "freelance react python argentina").
- Contexto de evaluación: móvil (reclutador en tren), desktop (cliente en oficina), o tablet.
- Ritual de decisión: scan hero → scan proyectos (métricas, stack, outcome) → ver código / deploy → contactar.
- El formulario de contacto / WhatsApp es la conversión primaria. No hay funnel de marketing, no hay newsletter, no hay lead magnet.

## Capabilities and Constraints

**Confirmado:**
- Frontend estático React (Vite). Sin backend ni API. Formulario de contacto vía `mailto:`.
- Frontend: React 19 + Vite 6 + Tailwind v4, design system con tokens CSS (`tokens.css`), componentes UI tipados (Button, Input, Textarea, Badge con CVA).
- Build step: `npm run build` → `frontend/dist/` (sitio estático).
- Dark/light mode con CSS custom properties + `localStorage` + `useTheme` hook.
- Fuentes: Geist + Geist Mono (variable fonts, Google Fonts).
- Imágenes: WebP optimizado, lazy load nativo.
- Deploy: estático (GitHub Pages o Vercel).

**Abierto / por decidir:**
- ¿SSG para pre-renderizar páginas de proyecto? (Astro, Next.js export, o script propio)
- ¿CMS headless para contenido de proyectos o se mantiene en JSON/JS local?
- ¿Analytics? (plausible, umami, o ninguno)

## Brand Commitments

- **Nombre:** Franco Paredes (marca personal, no nombre de estudio ficticio).
- **Ubicación:** Bahía Blanca, Buenos Aires, Argentina (explícito en hero y footer).
- **Voz:** Español rioplatense, voseo, tildes, `ñ`. Directa, sin marketing speak, técnica pero accesible.
- **Evidencia real:** No inventar métricas, no inflar roles. Cada proyecto tiene deploy real o repo público (o credenciales demo).
- **Estética:** Moderna, técnica, limpia. Tokens de color (brand azul, accent magenta, neutros), tipografía Geist, spacing consistente, sombras suaves, redondeos. Un acento gradiente estratégico (Hero "de punta a punta"). Sin decoración gratuita.
- **Accesibilidad:** Semántica HTML estricta, foco visible (`:focus-visible`), contraste AA+, `prefers-reduced-motion` respetado (animaciones CSS controlables).
- **Idioma:** `lang="es-AR"` en `<html>`, contenido en español rioplatense.
- **Imágenes:** `alt` descriptivo.
- **Formularios:** `label` explícitos, validación server-side + client-side.

## Evidence on Hand

- 16 proyectos documentados en `frontend/src/data/projects.js` con: title, tagline, summary, problem, approach, outcome, highlights, architecture, stack, metrics, links (deploy/repo), demo credentials donde aplica.
- Skills organizados en 4 pilares: Frontend & UX, Backend & APIs, Datos & Arquitectura, Plataforma & Desktop (`frontend/src/data/skills.js`).
- Foto de perfil: `frontend/src/assets/images/foto-portfolio.webp`.
- Certificados e imágenes de proyectos en `frontend/src/assets/images/` y `static/images/`.
- LinkedIn: https://www.linkedin.com/in/francoparedes1992/
- GitHub: https://github.com/Etiketaa
- Email: francoparedes1992@gmail.com

## Product Principles

1. **Honestidad brutal:** Si no está en producción, no es un case study. Si no hay métrica, no se inventa.
2. **Arquitectura visible:** El portfolio expone *cómo* se decidió, no solo *qué* se construyó.
3. **Cero vendor lock-in:** Stack portable, data ownable, deploy reproducible.
4. **Mobile-first real:** El operador usa el celular en campo; el portfolio debe ser usable en 375px sin scroll horizontal.
5. **La forma sigue a la función, la función sigue al dato:** Diseño expone estructura, no la oculta.

## Accessibility & Inclusion

- WCAG 2.1 AA mínimo (contraste AA+ verificado en nav links, form labels).
- Navegación por teclado completa (tab order lógico, skip link, focus visible).
- `prefers-reduced-motion`: desactiva animaciones (transitions controlables por media query).
- `prefers-color-scheme`: respeta preferencia del sistema, con toggle manual.
- Idioma: `lang="es-AR"` en `<html>`, contenido en español rioplatense.
- Imágenes con `alt` descriptivo (no decorativo).
- Formularios con `label` explícitos, validación client-side + server-side (`/api/contact`).