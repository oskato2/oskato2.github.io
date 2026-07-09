# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint (0 warnings allowed)
npm run deploy     # Build + publish to GitHub Pages via gh-pages
```

## Architecture

Single-page portfolio app. React 18 + Vite 6 + Tailwind CSS 4 (via `@tailwindcss/vite` plugin — no PostCSS config needed).

**Entry flow:** `main.jsx` → initializes i18n → renders `App.jsx` → one `<section id="...">` per component, all in scroll order.

**Deployment:** Hosted at `oskato2.github.io/portafolio/`. Vite `base` is set to `/portafolio/`. All asset paths in data files and components must use `/portafolio/...` prefix. CV files live in `public/cvs/`, static assets in `public/assets/`.

**Styling:** Dark cyberpunk theme. CSS custom properties defined in `src/styles/globals.css` — neon green (`#00ff88`), neon blue (`#00d4ff`), neon purple (`#bf00ff`) on near-black backgrounds. Utility classes `.glass-card`, `.neon-green`, `.neon-blue`, `.neon-purple`, `.section-padding` are globally available. Components use inline styles for layout, CSS vars/utility classes for theming.

**i18n:** Spanish (default) + English. Translations in `src/i18n/es.json` and `src/i18n/en.json`. Every user-facing string goes through `useTranslation()`. Data files (`src/data/*.json`) store bilingual content as `{ "es": "...", "en": "..." }` objects — components pick the language by reading `i18n.language`.

**Content data:** `src/data/achievements.json` and `src/data/certifications.json` are the source of truth for portfolio content. Each item has bilingual `title`, `subtitle`, `description`, `highlights`, plus `tech[]`, `gallery[]`, and optional `coverImage`/`certificate` fields.

**Hooks:**
- `useScrollAnimation` — wraps `react-intersection-observer` for fade-in-on-scroll; `triggerOnce: true` by default.
- `useWindowWidth` — raw window width; mobile breakpoint is `< 900px`.

**Animations:** Framer Motion used for entrance animations in section components.
