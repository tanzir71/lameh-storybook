# Lameh Design System — Storybook frontend

A free, open Storybook implementation of the [Lameh Design System](https://www.figma.com/design/RomX9IbWWcEnTR20hBFuMH/Lameh-Design-System) (Figma source). Built with **React + TypeScript + Vite + Storybook 8**.

Every color ramp, type style, spacing step, radius, and elevation comes straight from the Figma file. The component library has been distilled from Lameh's domain-specific Figma nodes (Company Research Tabs, Graph Builder Modal, Primary CTA Large, …) into a focused, reusable set of primitives that compose into the same patterns.

## Quick start

```bash
npm install
npm run storybook
```

Storybook opens at <http://localhost:6006>. Use the paint-brush icon in the toolbar to toggle between **Light** and **Dark** themes.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run storybook` | Run Storybook dev server on port 6006 |
| `npm run build-storybook` | Build a static Storybook into `storybook-static/` (deployable) |
| `npm run typecheck` | TypeScript check, no emit |

## What's inside

### Foundations
- **Colors** — 6 primitive ramps (Neutral, Brand, Accent, Warning, Error, Info) with 13 steps each, plus the full set of semantic tokens (surface, text, border, status, action) for both light and dark.
- **Typography** — DM Sans (body + headings) and Space Grotesk (brand eyebrows), encoded as a 21-step type scale.
- **Spacing** — base-4 scale with half-steps for tight inner padding.
- **Radius** — sharp / architectural: 0 (tooltips), 2, 3, 4 px (cap), plus `pill` reserved for the switch track. Never exceeds 4 px.
- **Shadows** — 6 elevation levels + brand glow + focus rings.
- **Icons** — `lucide-react` set, mirroring the icons referenced in the Figma file.

### Components
Button · Icon Button · Input · Textarea · Select · Checkbox · Radio · Switch · Badge · Tag · Avatar (+ AvatarGroup) · Card · Alert · Tooltip · Tabs · Pagination · Modal · Empty State · Spinner · Progress · Data Table.

### Patterns
Domain-flavored compositions that preserve the original Lameh financial-research aesthetic:
- **Stat Cards** — Revenue / EBITDA / FCF / Net debt tiles
- **Company Card** — header + sparkline + KPI grid
- **News List** — filings & headlines
- **Filter Bar** — search + tag chips + CTAs

## Project structure

```
.
├── .storybook/              Storybook config, theme decorator, fonts
├── src/
│   ├── components/          Each component owns its .tsx + .css + .stories.tsx
│   ├── stories/
│   │   ├── Introduction.mdx
│   │   ├── foundations/     Color, type, spacing, radius, shadow, icons
│   │   └── patterns/        Domain showcase
│   ├── styles/
│   │   ├── tokens.css       Single source of truth for design tokens
│   │   ├── reset.css
│   │   └── index.css
│   └── utils/cx.ts          Tiny className joiner
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Theming

All visual tokens are CSS custom properties on `:root`. Light / dark are scoped via `[data-theme="light"]` and `[data-theme="dark"]`. Switching themes is instant — no rebuild. To embed components in your own app, copy `src/styles/tokens.css` into your project and add `data-theme="dark"` to your `<html>` or root container.

## Simplifications from the Figma source

- Consolidated 10+ button-like Figma nodes (Primary CTA Large, AI/Intelligence Button, Dropdown CTA, …) into one `Button` with `variant × size × tone` props.
- Replaced the Lameh-specific composite components (Company Research Tabs, Graph Builder Modal, Bulk Import) with general primitives that compose into the same patterns (Tabs, Modal, Empty State, Card).
- Encoded all Figma variables as CSS custom properties — no token compiler required.
- Added explicit focus rings, disabled states, and ARIA roles that were implicit or absent in the source.

## Notes

- `tsconfig.check.json` is a typecheck-only config used during scaffolding; you can delete it.
- `src/_alert-test.tsx` is a placeholder leftover from testing; safe to delete.
- The `node_modules` entry, if present as a symlink before you run `npm install`, will be replaced by a real directory on first install.

## License

Design tokens trace to the Lameh Design System Figma file (third-party). The code in this repository is provided as-is for educational use.
