# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (uses webpack explicitly)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Architecture

This is a Next.js 15 portfolio site with React 19, Tailwind CSS, and a bilingual (EN/TH) UI.

### Pages

- `/` — Home dashboard: 3-column grid of ProfileCard, TechStack+ExpertArea, RecentProjects
- `/projects` — Full project grid with modal detail view

Both pages use `MainLayout` (animated gradient background + Navbar) and lazy-load all section components via `next/dynamic` with `ssr: false`.

### Internationalization

All user-facing strings go through `LanguageContext` (`src/components/context/LanguageContext.js`). The context provides a `t(key)` function. All translations (EN and TH) live inline in that file — add both languages whenever adding a new string. Language preference is persisted to `localStorage`. The context always defaults to `'en'` for SSR to avoid hydration mismatches.

### Project Data

`src/utils/projectData.js` — the single source of truth for all projects. Each entry has:
- `titleKey` — key used with `t()` to look up title/description from `LanguageContext`
- `image` + `type` (`"image"` or `"video"`) — thumbnail
- `images[]` — gallery array for the modal (each entry has `src` + `type`)
- `tags`, `technologies[]`, `features[]` — displayed in the modal

When adding a project: add the data object here AND add the `titleKey` translations to both `en` and `th` sections in `LanguageContext`.

### UI Components

- `OptimizedImage` — wraps Next.js `<Image>` with lazy loading and priority hints based on `usage` prop (`"profile"` | `"project"`) and `index`
- `OptimizedVideo` — wraps `<video>` with lazy loading via IntersectionObserver
- `ProjectModal` — full-screen modal with image/video gallery carousel, tech stack chips, and feature list
- `LazyLoad` — IntersectionObserver wrapper for deferring renders

### Styling Conventions

- Dark glassmorphism theme: `glass` utility class throughout (defined in `globals.css`)
- Staggered entrance animations: `animate-fade-in-up` + `stagger-{1..5}` classes
- Custom scrollbar: `custom-scrollbar` class
- Background: fixed gradient in `MainLayout` (indigo-950 → blue-900 → violet-900)

### Performance Notes

- All section components on the home page are dynamically imported with `ssr: false`
- Images use WebP/AVIF formats, 30-day cache TTL (configured in `next.config.mjs`)
- Bundle splitting: vendors chunk separated in production webpack config
