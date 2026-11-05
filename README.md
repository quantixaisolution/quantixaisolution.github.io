# Quantix AI — Website

React 19 · Vite · Framer Motion · Tailwind CSS v4 · lucide-react

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure

```
src/
├─ components/
│  ├─ ui/          ← reusable component library (no site content inside)
│  └─ layout/      ← Navbar, Footer, ScrollProgress
├─ sections/       ← page sections composed from ui/ components
├─ data/site.js    ← ALL text, services, pricing, FAQs — edit here
├─ theme/          ← ThemeProvider, useTheme, theme list
├─ hooks/          ← useScrolled, useLockBody, useEscape
├─ lib/            ← cn() class merger, shared motion presets
└─ index.css       ← design tokens (colors, fonts) — re-theme here
```

## Using the UI library

Everything is exported from one place:

```jsx
import { Button, Card, Section, SectionHeader, Reveal, Accordion, Tabs, Counter } from "@/components/ui";
import { ArrowRight, Rocket } from "lucide-react";

<Section id="demo">
  <SectionHeader eyebrow="New" title="Any section" description="Same look everywhere." />
  <Reveal>
    <Card spotlight>
      <IconBox icon={Rocket} />
      <Counter to={250} suffix="+" />
      <Button href="#contact" icon={ArrowRight}>Talk to us</Button>
    </Card>
  </Reveal>
</Section>
```

| Component | Purpose |
|---|---|
| `Button` | Variants `primary · secondary · ghost · white`, sizes `sm · md · lg`; renders `<a>` when `href` is set |
| `Card` | Surface with optional cursor `spotlight` glow and hover lift |
| `Section` / `Container` | Consistent spacing and max-widths |
| `SectionHeader` | Eyebrow + title + description |
| `Reveal`, `RevealGroup`, `RevealItem` | Scroll-triggered (staggered) animations |
| `Tabs` | Animated pill tabs (controlled) |
| `Accordion` | Accessible FAQ-style disclosure |
| `Marquee` | Infinite scrolling row |
| `Counter` | Count-up number when in view |
| `Field` | Labeled input / textarea / select with error state |
| `SmartImage` | Lazy image with blur-in on load, optional hover zoom, overlay children |
| `TiltCard`, `Magnetic`, `Float`, `Parallax` | Mouse-tilt 3D, magnetic pull, idle floating, scroll parallax |
| `TextReveal` | Word-by-word heading reveal (auto-used by `SectionHeader`) |
| `Sparkline`, `BarChart`, `Donut` | Tiny animated SVG charts that follow the active theme |
| `Dropdown` | Accessible popover menu (outside-click, Escape, arrow keys) |
| `ThemeSwitcher` | Theme picker built on `Dropdown` |
| `Badge`, `IconBox`, `GradientText`, `Logo`, `GridBackground`, `Glow` | Small building blocks |

To reuse in another project, copy `src/components/ui`, `src/lib`, and the `@theme` block from `index.css`.

## Themes

Seven themes ship out of the box — **Quantix** (official brand, default), **Aurora, Ocean, Sunset, Candy** (light) and **Midnight, Forest** (dark) — selectable from the palette button in the navbar. The choice is saved per visitor; first-time visitors get Quantix or Midnight based on their OS light/dark setting. Append `?theme=sunset` to a URL to open it in a specific theme.

How it works: components only use semantic color tokens (`bg-surface`, `text-muted`, `from-primary`, `text-highlight`, `text-on-primary`…). Each theme is a `[data-theme="…"]` block in `src/index.css` that redefines those tokens.

**Add a theme:** copy a block in `index.css`, change the colors, then add `{ id, name, mode }` to `src/theme/themes.js` and the id list in the inline script in `index.html`.

```jsx
import { useTheme } from "@/theme";
const { theme, setTheme, themes } = useTheme();
```

## Brand assets

`public/brand/` — generated from the official logo and banner:

| File | Use |
|---|---|
| `quantix-mark.png` | Q mark (transparent) used by `<Logo>` in navbar & footer |
| `quantix-logo.png` | Full logo, transparent background (light backgrounds only) |
| `favicon-64.png`, `apple-touch-icon.png` | Browser tab & home-screen icons |
| `og-banner.jpg` | Social share preview (LinkedIn, WhatsApp, X) |

Brand colors: navy `#001C58` · blue `#0164C9` · cyan `#01D2F4`. The wordmark uses Montserrat (`font-brand`); the rest of the site uses DM Sans.
Once the domain is live, change `og:image` in `index.html` to an absolute URL (e.g. `https://yourdomain.com/brand/og-banner.jpg`) so every platform picks it up.

## Images

Photos live in `public/images` (WebP, ~2 MB total) and are referenced from `src/data/site.js`. They are free-licence Unsplash photos — see `public/images/CREDITS.md`. Swap any file (same name) to use your own team or project photos.

## Before launch

- Replace **sample** stats, case studies, testimonials and prices in `src/data/site.js` with real data.
- Set the real contact email in `brand.email`.
- The contact form currently opens the visitor's email app; connect it to an API/Formspree/CRM in `src/sections/Contact.jsx`.
