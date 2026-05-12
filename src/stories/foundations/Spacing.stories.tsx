import type { Meta, StoryObj } from "@storybook/react";
import "./foundations.css";

const SCALE: { token: string; px: number }[] = [
  { token: "space-0", px: 0 }, { token: "space-px", px: 1 }, { token: "space-0-5", px: 2 },
  { token: "space-1", px: 4 }, { token: "space-1-5", px: 6 }, { token: "space-2", px: 8 },
  { token: "space-2-5", px: 10 }, { token: "space-3", px: 12 }, { token: "space-4", px: 16 },
  { token: "space-5", px: 20 }, { token: "space-6", px: 24 }, { token: "space-7", px: 28 },
  { token: "space-8", px: 32 }, { token: "space-10", px: 40 }, { token: "space-12", px: 48 },
  { token: "space-16", px: 64 }, { token: "space-20", px: 80 }, { token: "space-24", px: 96 },
];

function Spacing() {
  return (
    <div>
      <div className="f-eyebrow">Foundations · Spacing</div>
      <h1 className="f-title">Spacing scale</h1>
      <p className="f-sub">
        Base-4 with a few extra half-steps (0.5, 1.5, 2.5) for tight inner padding. Use <code>--space-4</code> as the default gutter inside cards and form rows.
      </p>
      <div style={{ display: "grid", gap: 8 }}>
        {SCALE.map(({ token, px }) => (
          <div key={token} style={{ display: "grid", gridTemplateColumns: "180px 80px 1fr", alignItems: "center", gap: 24, padding: "10px 0", borderBottom: "1px solid var(--border-subtle)" }}>
            <code style={{ font: "var(--type-label-md)", color: "var(--text-primary)" }}>--{token}</code>
            <div style={{ font: "var(--type-caption-md)", color: "var(--text-tertiary)", fontVariantNumeric: "tabular-nums" }}>{px} px</div>
            <div style={{ height: 12, width: px, background: "var(--action-brand)", borderRadius: 2, minWidth: 1 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta = { title: "Foundations/Spacing" };
export default meta;
type Story = StoryObj;
export const Scale: Story = { render: () => <Spacing /> };
