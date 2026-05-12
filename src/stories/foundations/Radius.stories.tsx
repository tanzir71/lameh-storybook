import type { Meta, StoryObj } from "@storybook/react";
import "./foundations.css";

const SCALE = [
  { token: "radius-none", value: "0",     usage: "Tooltips, sharp data-viz edges" },
  { token: "radius-xs",   value: "2 px",  usage: "Small buttons, chips, badges, tags, checkboxes, small inputs" },
  { token: "radius-sm",   value: "3 px",  usage: "Default — medium buttons, icon buttons, inputs, select, tabs" },
  { token: "radius-md",   value: "4 px",  usage: "Max — cards, modals, alerts, panels, large containers" },
  { token: "radius-pill", value: "pill",  usage: "Switch track only (functional, not stylistic)" },
];

function Radius() {
  return (
    <div>
      <div className="f-eyebrow">Foundations · Radius</div>
      <h1 className="f-title">Corner radius</h1>
      <p className="f-sub">
        Lameh corners are <b>sharp and architectural</b>. Small components stay at 2 px,
        medium controls use 3 px, and large containers cap at 4 px. Tooltips have no
        radius at all. <code>radius-pill</code> is reserved for the switch track —
        nothing else.
      </p>
      <div className="f-grid f-grid-fit">
        {SCALE.map(({ token, value, usage }) => (
          <div key={token} className="swatch">
            <div
              style={{
                height: 96,
                background: "var(--bg-surface-2)",
                border: "1px solid var(--border-default)",
                borderRadius: `var(--${token})`,
              }}
            />
            <div className="swatch-name">--{token}</div>
            <div className="swatch-hex">{value}</div>
            <div style={{ font: "var(--type-caption-sm)", color: "var(--text-tertiary)", marginTop: 2 }}>{usage}</div>
          </div>
        ))}
      </div>

      <section className="f-section" style={{ marginTop: 32 }}>
        <div className="f-eyebrow">In practice</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {[
            { label: "Button · sm", h: 28, w: 96, r: "var(--radius-xs)" },
            { label: "Button · md", h: 36, w: 120, r: "var(--radius-sm)" },
            { label: "Button · lg", h: 44, w: 140, r: "var(--radius-md)" },
            { label: "Card",        h: 88, w: 220, r: "var(--radius-md)" },
            { label: "Tooltip",     h: 28, w: 120, r: "var(--radius-none)" },
            { label: "Badge",       h: 22, w: 56,  r: "var(--radius-xs)" },
          ].map(d => (
            <div key={d.label} style={{ display: "grid", placeItems: "center", padding: 16, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}>
              <div
                style={{
                  height: d.h, width: d.w,
                  display: "grid", placeItems: "center",
                  background: "var(--action-brand)", color: "var(--action-brand-text)",
                  font: "var(--type-label-md)",
                  borderRadius: d.r,
                }}
              >
                {d.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const meta: Meta = { title: "Foundations/Radius" };
export default meta;
type Story = StoryObj;
export const Scale: Story = { render: () => <Radius /> };
