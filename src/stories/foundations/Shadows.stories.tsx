import type { Meta, StoryObj } from "@storybook/react";
import "./foundations.css";

const SHADOWS = [
  { token: "shadow-xs",  use: "Subtle separation: chips, tags" },
  { token: "shadow-sm",  use: "Default elevation: cards at rest" },
  { token: "shadow-md",  use: "Hover for cards, dropdowns" },
  { token: "shadow-lg",  use: "Modals, popovers" },
  { token: "shadow-xl",  use: "Floating panels (offset shadow)" },
  { token: "shadow-2xl", use: "Large overlays in dark mode" },
];

const GLOWS = [
  { token: "glow-brand",      use: "CTA halo / hovered brand control" },
  { token: "glow-brand-soft", use: "Ambient brand wash on selected" },
  { token: "focus-brand",     use: "Focus indicator (3px ring)" },
  { token: "focus-error",     use: "Error focus (3px ring)" },
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
