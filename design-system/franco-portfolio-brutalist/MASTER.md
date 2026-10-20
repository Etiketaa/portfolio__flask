# Design System: Franco Portfolio — Neo-Brutalist Golf Pastel

**Versión:** 1.0  
**Fecha:** 2026-10-20  
**Stack:** React 19 + Vite 6 + Tailwind CSS v4 + Flask  
**Fuente de verdad:** Este archivo. Los overrides por página están en `pages/*.md`.

---

## 🎨 Paleta de Colores (Golf-Inspired Pastel/Muted)

### Light Mode (Default)
| Rol | Hex | CSS Variable | Uso |
|-----|-----|--------------|-----|
| **Canvas (bg)** | `#FEFEF7` | `--color-canvas` | Fondo principal — crema cálido off-white |
| **Surface** | `#FFFFFF` | `--color-surface` | Tarjetas, modales, inputs |
| **Surface Muted** | `#F5F3ED` | `--color-surface-muted` | Hover sutil, secciones alternadas |
| **Ink (texto)** | `#1A1A1A` | `--color-ink` | Texto principal — negro suave |
| **Ink Muted** | `#525252` | `--color-ink-muted` | Texto secundario, labels, placeholders |
| **Border** | `#1A1A1A` | `--color-border` | Bordes negros 4px (brutalist) |
| **Primary (Golf Green)** | `#6BAA6B` | `--color-primary` | Botones primarios, acentos — verde menta pastel |
| **Primary Hover** | `#5A9A5A` | `--color-primary-hover` | Hover/active botón primario |
| **Accent (Golf Pink)** | `#E8A8B8` | `--color-accent` | Detalles, badges, focus — rosa pastel |
| **Accent Strong** | `#D48A9A` | `--color-accent-strong` | Hover accent |
| **Warning (Golf Yellow)** | `#F0E68C` | `--color-warning` | Alertas, highlights — amarillo crema |
| **Error** | `#C45A5A` | `--color-error` | Errores — rojo apagado |
| **Ring/Focus** | `#6BAA6B` | `--color-ring` | Focus visible |

### Dark Mode
```css
.dark {
  --color-canvas: #1A1A1A;
  --color-surface: #242424;
  --color-surface-muted: #2E2E2E;
  --color-ink: #FEFEF7;
  --color-ink-muted: #A3A3A3;
  --color-border: #FEFEF7;
  --color-primary: #6BAA6B;      /* Se mantiene */
  --color-primary-hover: #5A9A5A;
  --color-accent: #E8A8B8;       /* Se mantiene */
  --color-accent-strong: #D48A9A;
  --color-warning: #F0E68C;
  --color-error: #C45A5A;
  --color-ring: #6BAA6B;
}
```

---

## 🔤 Tipografía

| Rol | Fuente | Pesos | Variable CSS |
|-----|--------|-------|--------------|
| **Display/Headings** | `Space Grotesk` | 400, 500, 700 | `--font-display` |
| **Body/UI** | `Space Mono` | 400, 700 | `--font-body` |
| **Code/Mono** | `JetBrains Mono` | 400, 500 | `--font-mono` |

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

```css
:root {
  --font-display: "Space Grotesk", "Space Mono", ui-monospace, monospace;
  --font-body: "Space Mono", "JetBrains Mono", ui-monospace, monospace;
  --font-mono: "JetBrains Mono", "Space Mono", ui-monospace, monospace;
}
```

### Escala Tipográfica (Clamp para responsive)
```css
:root {
  --text-xs: clamp(0.7rem, 0.65rem + 0.25vw, 0.75rem);
  --text-sm: clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem);
  --text-base: clamp(0.9375rem, 0.875rem + 0.3125vw, 1rem);
  --text-lg: clamp(1.0625rem, 1rem + 0.3125vw, 1.125rem);
  --text-xl: clamp(1.25rem, 1.125rem + 0.625vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2rem);
  --text-3xl: clamp(2rem, 1.5rem + 2.5vw, 3rem);
  --text-4xl: clamp(2.5rem, 1.75rem + 3.75vw, 4.5rem);
  --text-5xl: clamp(3.5rem, 2rem + 7.5vw, 7rem);
  
  --leading-tight: 1.05;
  --leading-snug: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

---

## 📏 Espaciado (Sistema 8px)

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-8: 48px;
  --space-10: 64px;
  --space-12: 96px;
  --space-16: 128px;
}
```

---

## 📦 Bordes, Radio & Sombras (Neo-Brutalist)

```css
:root {
  /* Bordes */
  --border-thick: 4px solid var(--color-border);     /* Principal - 4px */
  --border-med: 2px solid var(--color-border);       /* Secundario - 2px */
  --border-hair: 1px solid var(--color-border);      /* Divisores - 1px */
  
  /* Radio: CERO brutalist (solo badges pill) */
  --radius-none: 0px;
  --radius-pill: 9999px;
  
  /* Sombras DURAS (offset, sin blur) */
  --shadow-sm: 2px 2px 0 0 var(--color-border);
  --shadow-md: 4px 4px 0 0 var(--color-border);
  --shadow-lg: 8px 8px 0 0 var(--color-border);
  --shadow-xl: 12px 12px 0 0 var(--color-border);
  
  /* Press state: esconder sombra */
  --shadow-press: 0 0 0 0 var(--color-border);
}
```

---

## ⚡ Estados Interactivos (Brutalist: Sin Transiciones en Transform/Sombra)

| Estado | Transform | Sombra | Transición |
|--------|-----------|--------|------------|
| **Default** | — | `--shadow-md` | `none` |
| **Hover** | `translate(-2px, -2px)` | `--shadow-lg` | `none` |
| **Active/Press** | `translate(2px, 2px)` | `--shadow-press` | `none` |
| **Focus** | — | `--shadow-md` + `outline` | `none` |

```css
/* Regla global: SOLO color/background tienen transición */
.brutalist-interactive {
  transition: background-color 100ms ease-out, color 100ms ease-out, border-color 100ms ease-out;
  /* NO transition en transform, box-shadow, outline */
}
```

---

## 🎭 Rotación Aleatoria (Tarjetas)

```css
/* Aplicar via inline style: style={{ transform: \`rotate(\${rot}deg)\` }} */
.card-rotated:nth-child(odd)  { --rot: -1deg; }
.card-rotated:nth-child(even) { --rot: 1deg; }
.card-rotated:hover { transform: rotate(0deg) translate(-2px, -2px) !important; }
```

---

## 🧱 Componentes Base (Especificaciones)

### Botón Primario (`.btn-primary`)
```css
.btn-primary {
  background: var(--color-primary);
  color: var(--color-ink);
  border: var(--border-thick);
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: var(--shadow-md);
  cursor: pointer;
}
.btn-primary:hover  { transform: translate(-2px, -2px); box-shadow: var(--shadow-lg); }
.btn-primary:active { transform: translate(2px, 2px); box-shadow: var(--shadow-press); }
.btn-primary:focus-visible { 
  outline: 3px solid var(--color-accent); 
  outline-offset: 2px; 
}
```

### Botón Secundario / Outline (`.btn-secondary`)
```css
.btn-secondary {
  background: transparent;
  color: var(--color-ink);
  border: var(--border-thick);
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: var(--shadow-md);
  cursor: pointer;
}
.btn-secondary:hover  { 
  background: var(--color-ink); 
  color: var(--color-canvas);
  transform: translate(-2px, -2px); 
  box-shadow: var(--shadow-lg); 
}
.btn-secondary:active { transform: translate(2px, 2px); box-shadow: var(--shadow-press); }
```

### Tarjeta Base (`.card`)
```css
.card {
  background: var(--color-surface);
  border: var(--border-thick);
  box-shadow: var(--shadow-md);
  padding: var(--space-5);
}
.card:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-lg);
}
```

### Tarjeta Proyecto (`.project-card`)
```css
.project-card {
  background: var(--color-surface);
  border: var(--border-thick);
  box-shadow: var(--shadow-md);
  padding: var(--space-5);
  transform: rotate(var(--rot, 0deg));
  transition: transform 150ms ease-out; /* Solo rotate en hover */
}
.project-card:hover {
  transform: rotate(0deg) translate(-2px, -2px);
  box-shadow: var(--shadow-lg);
}
```

### Badge / Tag (`.badge`)
```css
.badge {
  background: var(--color-accent);
  color: var(--color-ink);
  border: var(--border-med);
  border-radius: var(--radius-pill);
  padding: var(--space-1) var(--space-3);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.badge-primary { background: var(--color-primary); }
.badge-warning { background: var(--color-warning); }
.badge-error { background: var(--color-error); color: white; }
```

### Input / Textarea (`.input`, `.textarea`)
```css
.input, .textarea {
  background: var(--color-surface);
  color: var(--color-ink);
  border: var(--border-thick);
  padding: var(--space-3) var(--space-4);
  font-family: var(--font-body);
  font-size: var(--text-base);
  width: 100%;
  box-shadow: var(--shadow-sm);
}
.input:focus, .textarea:focus {
  outline: none;
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}
.input::placeholder, .textarea::placeholder {
  color: var(--color-ink-muted);
}
.input:disabled, .textarea:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Label (`.label`)
```css
.label {
  display: block;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-ink);
  margin-bottom: var(--space-2);
}
```

### Error Message (`.error-message`)
```css
.error-message {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-error);
  margin-top: var(--space-1);
  display: flex;
  align-items: center;
  gap: var(--space-1);
}
```

---

## ♿ Accesibilidad

- ✅ **Contraste Light**: Ink (#1A1A1A) sobre Canvas (#FEFEF7) = **12.6:1** (AAA)
- ✅ **Contraste Dark**: Ink (#FEFEF7) sobre Canvas (#1A1A1A) = **12.6:1** (AAA)
- ✅ **Focus visible**: `outline: 3px solid var(--color-accent); outline-offset: 2px;`
- ✅ **Reduced motion**: 
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition: none !important;
    animation: none !important;
    transform: none !important;
  }
}
```
- ✅ **Touch targets**: Mín 44×44px (botones altura mínima 48px)
- ✅ **Skip link**: Primer elemento enfocable, salta a `#main-content`

---

## 📱 Breakpoints (Mobile-first)

```css
:root {
  --bp-sm: 640px;    /* Mobile landscape / small tablet */
  --bp-md: 768px;    /* Tablet portrait */
  --bp-lg: 1024px;   /* Tablet landscape / small desktop */
  --bp-xl: 1280px;   /* Desktop */
  --bp-2xl: 1536px;  /* Wide desktop */
}
```

```css
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

---

## 🚫 Anti-Patrones (Lo que NO se hace)

| ❌ No hacer | ✅ Hacer en su lugar |
|-------------|---------------------|
| `border-radius > 0` (excepto badges pill) | `--radius-none: 0px` en todo |
| `box-shadow` con blur | Sombras offset sólidas `--shadow-*` |
| `transition` en `transform`/`box-shadow` | Transiciones solo en `color`/`background`/`border-color` |
| Gradientes decorativos | Colores planos, un solo acento estratégico |
| Emojis como iconos estructurales | Lucide React / SVG inline |
| Tipografía variable sin clamp | `clamp()` en todas las escalas |
| Sombras suaves / blur | Sombras duras, offset, sin blur |
| Redondeos en botones/inputs | Esquinas cuadradas (0px) |

---

## 📁 Estructura de Archivos

```
/home/franco/portfolio__flask/
├── design-system/
│   ├── MASTER.md          ← ESTE ARCHIVO
│   └── pages/
│       ├── home.md
│       ├── projects.md
│       ├── work-detail.md
│       └── contact.md
├── frontend/
│   ├── src/
│   │   ├── styles/
│   │   │   ├── tokens.css       ← Variables CSS (este design system)
│   │   │   ├── brutalist.css    ← Utilidades brutales (@utility)
│   │   │   └── index.css        ← Reset + base + globals
│   │   └── components/
│   │       └── ui/              ← Button, Card, Badge, Input, Textarea, Label
└── PRODUCT.md
```

---

## 🔄 Cómo Usar Este Design System

1. **Al crear/modificar un componente**: Leer MASTER.md → aplicar tokens/specs exactas
2. **Al crear una página**: Leer MASTER.md + `pages/[page].md` (si existe, overrridea MASTER)
3. **Al dudar**: Volver a MASTER.md. No inventar valores. Usar variables CSS.
4. **Nuevos componentes**: Seguir specs de "Componentes Base" arriba.

---

## 📝 Changelog

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | 2026-10-20 | Creación inicial: paleta Golf pastel, tipografía Space Grotesk/Mono, neo-brutalist specs |