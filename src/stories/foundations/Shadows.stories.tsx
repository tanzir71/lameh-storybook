import type { Meta, StoryObj } from "@storybook/react";
import "./foundations.css";

const SHADOWS = [
  { token: "shadow-xs",  use: "Chips, tags, inline pills" },
  { token: "shadow-sm",  use: "Cards at rest" },
  { token: "shadow-md",  use: "Hovered cards, dropdown menus" },
  { token: "shadow-lg",  use: "Popovers, tooltips, floating panels" },
  { token: "shadow-xl",  use: "Modals" },
  { token: "shadow-2xl", use: "Full-screen overlays, immersive search" },
];

const GLOWS = [
  { token: "glow-brand",      use: "Hovered CTA halo (24px blur, 8% brand)" },
  { token: "glow-brand-soft", use: "Ambient brand wash (64px blur, 8% brand)" },
  { token: "focus-brand",     use: "Focusable elements (3px outset ring)" },
  { token: "focus-error",     use: "Errored focusable elements (3px ring)" },
];

function Card({ token, use }: { token: string; use: string }) {
  return (
    <div className="swatch">
      <div
        style={{
          height: 120,
          background: "var(--bg-surface)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-md)",
          boxShadow: `var(--${token})`,
          display: "grid",
          placeItems: "center",
          font: "var(--type-label-md)",
          color: "var(--text-secondary)",
        }}
      >
        --{token}
      </div>
      <div className="swatch-name">{use}</div>
    </div>
  );
}

function Shadows() {
  return (
    <div>
      <div className="f-eyebrow">Foundations · Elevation</div>
      <h1 className="f-title">Shadows & focus rings</h1>
      <p className="f-sub">
        Shadows step up from chip → card → popover → modal → floating panel. Brand glows are reserved for hovered CTAs and active filter chips. Focus rings always use a 3px outset.
      </p>

      <section className="f-section">
        <div className="f-eyebrow">Elevation</div>
        <div className="f-grid f-grid-fit">
          {SHADOWS.map(s => <Card key={s.token} {...s} />)}
        </div>
      </section>

      <section className="f-section">
        <div className="f-eyebrow">Brand & focus</div>
        <div className="f-grid f-grid-fit">
          {GLOWS.map(s => <Card key={s.token} {...s} />)}
        </div>
      </section>
    </div>
  );
}

const meta: Meta = { title: "Foundations/Shadows" };
export default meta;
type Story = StoryObj;
export const Elevation: Story = { render: () => <Shadows /> };
