import type { Meta, StoryObj } from "@storybook/react";
import "./foundations.css";

const RAMPS: { name: string; key: string; steps: { step: string; hex: string }[] }[] = [
  {
    name: "Neutral", key: "neutral",
    steps: [
      { step: "0", hex: "#FFFFFF" }, { step: "0.5", hex: "#EEF0F2" }, { step: "1", hex: "#DFE0E2" },
      { step: "2", hex: "#C8CACD" }, { step: "3", hex: "#A9ACB2" }, { step: "4", hex: "#93979F" },
      { step: "5", hex: "#777A80" }, { step: "6", hex: "#5A5D61" }, { step: "7", hex: "#3E3F43" },
      { step: "8", hex: "#303133" }, { step: "9", hex: "#212224" }, { step: "9.5", hex: "#131414" },
      { step: "10", hex: "#000000" },
    ],
  },
  {
    name: "Brand", key: "brand",
    steps: [
      { step: "0", hex: "#FFFFFF" }, { step: "0.5", hex: "#E6FDF5" }, { step: "1", hex: "#CCFAEB" },
      { step: "2", hex: "#99F5D7" }, { step: "3", hex: "#66F0C3" }, { step: "4", hex: "#33EAAF" },
      { step: "5", hex: "#00D991" }, { step: "6", hex: "#00B378" }, { step: "7", hex: "#008C5E" },
      { step: "8", hex: "#006645" }, { step: "9", hex: "#00402B" }, { step: "9.5", hex: "#002B1D" },
      { step: "10", hex: "#000000" },
    ],
  },
  {
    name: "Accent", key: "accent",
    steps: [
      { step: "0", hex: "#FFFFFF" }, { step: "0.5", hex: "#E8F6F0" }, { step: "1", hex: "#C8EADA" },
      { step: "2", hex: "#9DD6BD" }, { step: "3", hex: "#65BF99" }, { step: "4", hex: "#43B290" },
      { step: "5", hex: "#229876" }, { step: "6", hex: "#0E7D5E" }, { step: "7", hex: "#066147" },
      { step: "8", hex: "#024531" }, { step: "9", hex: "#012B1D" }, { step: "9.5", hex: "#051A12" },
      { step: "10", hex: "#000000" },
    ],
  },
  {
    name: "Warning", key: "warning",
    steps: [
      { step: "0", hex: "#FFFFFF" }, { step: "0.5", hex: "#FFF8E6" }, { step: "1", hex: "#FFEEBF" },
      { step: "2", hex: "#FFDC7E" }, { step: "3", hex: "#FFC83D" }, { step: "4", hex: "#FFB02E" },
      { step: "5", hex: "#E08A00" }, { step: "6", hex: "#B06700" }, { step: "7", hex: "#7A4700" },
      { step: "8", hex: "#4A2B00" }, { step: "9", hex: "#2A1800" }, { step: "9.5", hex: "#1B0F00" },
      { step: "10", hex: "#000000" },
    ],
  },
  {
    name: "Error", key: "error",
    steps: [
      { step: "0", hex: "#FFFFFF" }, { step: "0.5", hex: "#FDE8E9" }, { step: "1", hex: "#FBCCCD" },
      { step: "2", hex: "#F59697" }, { step: "3", hex: "#EE5A5D" }, { step: "4", hex: "#EE2E30" },
      { step: "5", hex: "#C91F24" }, { step: "6", hex: "#A01619" }, { step: "7", hex: "#770F12" },
      { step: "8", hex: "#4D090B" }, { step: "9", hex: "#2A0506" }, { step: "9.5", hex: "#1C0303" },
      { step: "10", hex: "#000000" },
    ],
  },
  {
    name: "Info", key: "info",
    steps: [
      { step: "0", hex: "#FFFFFF" }, { step: "0.5", hex: "#E7F4FB" }, { step: "1", hex: "#BFDEF0" },
      { step: "2", hex: "#82C0E1" }, { step: "3", hex: "#5BC0EB" }, { step: "4", hex: "#2FA0D6" },
      { step: "5", hex: "#1382B8" }, { step: "6", hex: "#0C6595" }, { step: "7", hex: "#084970" },
      { step: "8", hex: "#052E48" }, { step: "9", hex: "#021726" }, { step: "9.5", hex: "#030E17" },
      { step: "10", hex: "#000000" },
    ],
  },
];

const SEMANTIC = [
  { group: "Surface", tokens: ["bg-page", "bg-surface", "bg-surface-2", "bg-surface-3", "bg-subtle", "bg-muted", "bg-hover", "bg-pressed", "bg-selected", "bg-disabled", "bg-inverse"] },
  { group: "Text", tokens: ["text-primary", "text-secondary", "text-tertiary", "text-muted", "text-disabled", "text-inverse", "text-brand", "text-on-brand", "text-link", "text-success", "text-warning", "text-error"] },
  { group: "Border", tokens: ["border-subtle", "border-default", "border-emphasis", "border-strong", "border-brand", "border-error", "border-focus", "border-disabled"] },
  { group: "Status surface", tokens: ["surface-success", "surface-warning", "surface-error", "surface-info"] },
  { group: "Action / brand", tokens: ["action-brand", "action-brand-hover", "action-brand-pressed", "action-brand-subtle"] },
];

function Ramp({ name, steps }: { name: string; steps: { step: string; hex: string }[] }) {
  return (
    <section className="f-section">
      <div className="f-eyebrow">{name}</div>
      <div className="f-grid f-grid-fit">
        {steps.map(({ step, hex }) => (
          <div key={step} className="swatch">
            <div
              className="swatch-chip"
              style={{ background: hex, borderColor: step === "0" ? "var(--border-default)" : "var(--border-subtle)" }}
              title={`${name} ${step}`}
            />
            <div className="swatch-name">{name} {step}</div>
            <div className="swatch-hex">{hex}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PrimitiveRamps() {
  return (
    <div>
      <div className="f-eyebrow">Foundations · Color</div>
      <h1 className="f-title">Primitive ramps</h1>
      <p className="f-sub">
        13 steps per ramp, sourced directly from the Figma file. Use these as inputs into semantic tokens — avoid referencing primitives in product code.
      </p>
      {RAMPS.map(r => <Ramp key={r.key} name={r.name} steps={r.steps} />)}
    </div>
  );
}

function SemanticTokens() {
  return (
    <div>
      <div className="f-eyebrow">Foundations · Color</div>
      <h1 className="f-title">Semantic tokens</h1>
      <p className="f-sub">
        These are the names you should reference in product UI. Toggle the theme in the toolbar to see them remap between light and dark.
      </p>
      {SEMANTIC.map(g => (
        <section className="f-section" key={g.group}>
          <div className="f-eyebrow">{g.group}</div>
          <div className="f-grid f-grid-fit">
            {g.tokens.map(token => (
              <div key={token} className="swatch">
                <div
                  className="swatch-chip"
                  style={{
                    background: `var(--${token})`,
                    borderColor: "var(--border-default)",
                    boxShadow: token.startsWith("border")
                      ? `inset 0 0 0 4px var(--bg-surface), inset 0 0 0 6px var(--${token})`
                      : undefined,
                  }}
                />
                <div className="swatch-name">--{token}</div>
                <div className="swatch-hex">var(--{token})</div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

const meta: Meta = { title: "Foundations/Colors" };
export default meta;
type Story = StoryObj;

export const Primitive: Story = { render: () => <PrimitiveRamps /> };
export const Semantic: Story = { render: () => <SemanticTokens /> };
