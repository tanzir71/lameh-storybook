import type { Meta, StoryObj } from "@storybook/react";
import "./foundations.css";

type Row = { name: string; cssVar: string; family: string; weight: string; size: string; lh: string; tracking?: string; sample: string; upper?: boolean };

const ROWS: Row[] = [
  { name: "Display/Lg", cssVar: "--type-display-lg", family: "DM Sans", weight: "500 Medium", size: "32", lh: "40", tracking: "-1.0", sample: "Pricing momentum and earnings revisions." },
  { name: "Display/Md", cssVar: "--type-display-md", family: "DM Sans", weight: "500 Medium", size: "28", lh: "36", tracking: "-0.5", sample: "Pricing momentum and earnings revisions." },
  { name: "Display/Sm", cssVar: "--type-display-sm", family: "DM Sans", weight: "500 Medium", size: "24", lh: "32", tracking: "-0.5", sample: "Pricing momentum and earnings revisions." },
  { name: "Heading/Xl", cssVar: "--type-heading-xl", family: "DM Sans", weight: "400 Regular", size: "22", lh: "28", tracking: "-0.5", sample: "Quarterly performance overview" },
  { name: "Heading/Lg", cssVar: "--type-heading-lg", family: "DM Sans", weight: "400 Regular", size: "20", lh: "28", tracking: "-0.25", sample: "Quarterly performance overview" },
  { name: "Heading/Md", cssVar: "--type-heading-md", family: "DM Sans", weight: "400 Regular", size: "18", lh: "24", tracking: "-0.25", sample: "Quarterly performance overview" },
  { name: "Heading/Sm", cssVar: "--type-heading-sm", family: "DM Sans", weight: "400 Regular", size: "16", lh: "22", sample: "Quarterly performance overview" },
  { name: "Heading/Xs", cssVar: "--type-heading-xs", family: "DM Sans", weight: "400 Regular", size: "14", lh: "20", sample: "Quarterly performance overview" },
  { name: "Body/Lg", cssVar: "--type-body-lg", family: "DM Sans", weight: "400 Regular", size: "16", lh: "24", sample: "Markets opened higher on accelerating revenue at Saudi industrials." },
  { name: "Body/Lg-Regular", cssVar: "--type-body-lg-regular", family: "DM Sans", weight: "400 Regular", size: "16", lh: "24", sample: "Markets opened higher on accelerating revenue at Saudi industrials." },
  { name: "Body/Md (default)", cssVar: "--type-body-md", family: "DM Sans", weight: "400 Regular", size: "14", lh: "20", sample: "Markets opened higher on accelerating revenue at Saudi industrials." },
  { name: "Body/Md-Regular", cssVar: "--type-body-md-regular", family: "DM Sans", weight: "400 Regular", size: "14", lh: "20", sample: "Markets opened higher on accelerating revenue at Saudi industrials." },
  { name: "Body/Sm", cssVar: "--type-body-sm", family: "DM Sans", weight: "400 Regular", size: "13", lh: "18", sample: "Markets opened higher on accelerating revenue at Saudi industrials." },
  { name: "Body/Sm-Regular", cssVar: "--type-body-sm-regular", family: "DM Sans", weight: "400 Regular", size: "13", lh: "18", sample: "Markets opened higher on accelerating revenue at Saudi industrials." },
  { name: "Label/Lg", cssVar: "--type-label-lg", family: "DM Sans", weight: "600 SemiBold", size: "14", lh: "20", sample: "Filter by sector" },
  { name: "Label/Md", cssVar: "--type-label-md", family: "DM Sans", weight: "600 SemiBold", size: "12", lh: "16", tracking: "0.25", sample: "Filter by sector" },
  { name: "Label/Sm", cssVar: "--type-label-sm", family: "DM Sans", weight: "600 SemiBold", size: "11", lh: "14", tracking: "0.5", sample: "Filter by sector" },
  { name: "Label/Xs", cssVar: "--type-label-xs", family: "DM Sans", weight: "600 SemiBold", size: "10", lh: "14", tracking: "0.5", sample: "Filter by sector" },
  { name: "Caption/Md", cssVar: "--type-caption-md", family: "DM Sans", weight: "500 Medium", size: "12", lh: "16", sample: "Updated 4 minutes ago" },
  { name: "Caption/Sm", cssVar: "--type-caption-sm", family: "DM Sans", weight: "500 Medium", size: "11", lh: "14", tracking: "0.25", sample: "Updated 4 minutes ago" },
  { name: "Caption/Xs", cssVar: "--type-caption-xs", family: "DM Sans", weight: "500 Medium", size: "10", lh: "14", tracking: "0.5", sample: "Updated 4 minutes ago" },
  { name: "Overline/Md", cssVar: "--type-overline", family: "DM Sans", weight: "600 SemiBold", size: "11", lh: "16", tracking: "1.5", upper: true, sample: "section overline" },
  { name: "Eyebrow/Md", cssVar: "--type-eyebrow", family: "Space Grotesk", weight: "700 Bold", size: "12", lh: "16", tracking: "2.0", upper: true, sample: "brand eyebrow" },
  { name: "Company Page Title/Lg", cssVar: "--type-company-title-lg", family: "Janna LT Bold + Noto Sans Arabic", weight: "700 Bold", size: "22", lh: "1.3", sample: "شركة الرياض للتعمير" },
  { name: "Company Page Title/Md", cssVar: "--type-company-title-md", family: "Janna LT Bold + Noto Sans Arabic", weight: "700 Bold", size: "17", lh: "1.3", sample: "شركة الرياض للتعمير" },
  { name: "Company Page Title/Sm", cssVar: "--type-company-title-sm", family: "Janna LT Bold + Noto Sans Arabic", weight: "700 Bold", size: "16", lh: "1.3", sample: "شركة الرياض للتعمير" },
];

function Type() {
  return (
    <div>
      <div className="f-eyebrow">Foundations · Type</div>
      <h1 className="f-title">Type scale</h1>
      <p className="f-sub">
        DM Sans for everything except brand eyebrows, which use Space Grotesk. Display sizes use tight tracking; labels and overlines open up. The token is encoded as a CSS shorthand so you can apply with <code>font: var(--type-heading-lg);</code>.
      </p>

      <div style={{ display: "grid", gap: 28 }}>
        {ROWS.map(r => (
          <div key={r.name} style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 24, alignItems: "baseline" }}>
            <div>
              <div style={{ font: "var(--type-label-md)", color: "var(--text-primary)" }}>{r.name}</div>
              <div style={{ font: "var(--type-caption-sm)", color: "var(--text-tertiary)" }}>{r.family} · {r.weight}</div>
              <div style={{ font: "var(--type-caption-sm)", color: "var(--text-tertiary)" }}>{r.size}px / {r.lh}px{r.tracking ? ` · letter-spacing ${r.tracking}` : ""}</div>
              <code style={{ font: "var(--type-caption-xs)", color: "var(--text-muted)" }}>{r.cssVar}</code>
            </div>
            <div
              style={{
                font: `var(${r.cssVar})`,
                letterSpacing: r.tracking ? (r.tracking.startsWith("-") ? `${parseFloat(r.tracking) / parseFloat(r.size)}em` : `${parseFloat(r.tracking) / parseFloat(r.size)}em`) : undefined,
                textTransform: r.upper ? "uppercase" : undefined,
                color: "var(--text-primary)",
              }}
            >
              {r.sample}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta = { title: "Foundations/Typography" };
export default meta;
type Story = StoryObj;
export const Scale: Story = { render: () => <Type /> };
