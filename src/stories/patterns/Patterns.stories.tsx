import type { Meta, StoryObj } from "@storybook/react";
import { TrendingUp, TrendingDown, ArrowRight, Bell, Filter, Search } from "lucide-react";
import { Avatar } from "../../components/Avatar/Avatar";
import { Badge } from "../../components/Badge/Badge";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Tag } from "../../components/Tag/Tag";
import "./patterns.css";

const meta: Meta = { title: "Patterns" };
export default meta;
type Story = StoryObj;

function Sparkline({ direction = "up" }: { direction?: "up" | "down" }) {
  // Tiny seeded sparkline; up = ascending, down = descending
  const pts = direction === "up"
    ? [4, 8, 6, 10, 9, 14, 12, 16, 18, 17, 22, 26]
    : [22, 20, 19, 21, 17, 18, 15, 14, 12, 13, 9, 6];
  const max = Math.max(...pts), min = Math.min(...pts);
  const path = pts.map((v, i) => {
    const x = (i / (pts.length - 1)) * 100;
    const y = 100 - ((v - min) / (max - min)) * 100;
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return (
    <svg className="p-company-sparkline" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      <path d={path} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function StatCard({ eyebrow, value, dir = "up", delta, helper }: { eyebrow: string; value: string; dir?: "up" | "down"; delta?: string; helper?: string }) {
  return (
    <div className="p-stat">
      <span className="p-stat-eyebrow">{eyebrow}</span>
      <div className="p-stat-value">{value}</div>
      <div className="p-stat-meta">
        {delta && (
          <span className="p-stat-chip" data-dir={dir}>
            {dir === "up" ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {delta}
          </span>
        )}
        {helper && <span>{helper}</span>}
      </div>
    </div>
  );
}

export const StatCards: Story = {
  name: "Stat cards",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, maxWidth: 960 }}>
      <StatCard eyebrow="Revenue · TTM" value="SAR 1.42B" dir="up" delta="+12.4%" helper="vs prior year" />
      <StatCard eyebrow="EBITDA margin" value="38.2%" dir="up" delta="+1.8pp" helper="Q-on-Q" />
      <StatCard eyebrow="Free cash flow" value="SAR 412M" dir="down" delta="-3.2%" helper="vs prior quarter" />
      <StatCard eyebrow="Net debt / EBITDA" value="1.6×" helper="Within covenant" />
    </div>
  ),
};

export const CompanyCard: Story = {
  name: "Company card",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, maxWidth: 760 }}>
      {[
        { name: "Saudi Aramco", ticker: "2222", sector: "Energy", price: "32.40", chg: "+1.4%", dir: "up" as const, cap: "SAR 7.84T", peRatio: "16.2×" },
        { name: "SABIC", ticker: "2010", sector: "Materials", price: "76.10", chg: "-0.6%", dir: "down" as const, cap: "SAR 228B", peRatio: "22.4×" },
      ].map((c) => (
        <div className="p-company" key={c.ticker}>
          <div className="p-company-header">
            <Avatar name={c.name} size="md" square />
            <div className="p-company-meta">
              <h3 className="p-company-name">{c.name}</h3>
              <div className="p-company-sub">{c.ticker} · {c.sector}</div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <Badge tone={c.dir === "up" ? "success" : "error"} dot>{c.chg}</Badge>
            </div>
          </div>
          <Sparkline direction={c.dir} />
          <div className="p-company-grid">
            <div className="p-company-cell">
              <div className="p-stat-eyebrow">Price</div>
              <div className="v">SAR {c.price}</div>
            </div>
            <div className="p-company-cell">
              <div className="p-stat-eyebrow">Market cap</div>
              <div className="v">{c.cap}</div>
            </div>
            <div className="p-company-cell">
              <div className="p-stat-eyebrow">P / E</div>
              <div className="v">{c.peRatio}</div>
            </div>
            <div className="p-company-cell" style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
              <Button size="sm" variant="ghost" rightIcon={<ArrowRight size={14} />}>Open</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const NewsList: Story = {
  name: "News list",
  render: () => (
    <div style={{ display: "grid", gap: 12, maxWidth: 640 }}>
      {[
        { tag: "Earnings", title: "Aramco beats Q1 consensus on stronger downstream margins", snippet: "Net income of SAR 102B exceeded estimates by 4.2% as refining margins held up against weaker crude.", time: "12m ago" },
        { tag: "M&A", title: "SABIC reportedly close to spinning off speciality chemicals unit", snippet: "Sources say the carve-out could raise SAR 14B and complete in Q4 if regulatory approvals hold.", time: "1h ago" },
        { tag: "Macro", title: "Saudi inflation cools to 1.6% in March, lowest in 22 months", snippet: "Housing rents continue to drive the headline figure; food prices edged lower.", time: "3h ago" },
      ].map((n, i) => (
        <article key={i} className="p-news">
          <div className="p-news-thumb" />
          <div className="p-news-body">
            <div className="p-news-meta">
              <Badge tone="info" size="sm">{n.tag}</Badge>
              <span>·</span>
              <span>Reuters</span>
              <span>·</span>
              <span>{n.time}</span>
            </div>
            <h3 className="p-news-title">{n.title}</h3>
            <p className="p-news-snippet">{n.snippet}</p>
          </div>
        </article>
      ))}
    </div>
  ),
};

export const FilterBar: Story = {
  name: "Filter bar",
  render: () => (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      padding: 12, background: "var(--bg-surface)",
      border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)",
      maxWidth: 880, flexWrap: "wrap",
    }}>
      <div style={{ flex: "1 1 240px", minWidth: 200 }}>
        <Input placeholder="Search companies, tickers, filings…" leftAddon={<Search size={16} />} fullWidth />
      </div>
      <Tag clickable leftIcon={<Filter size={12} />}>All sectors</Tag>
      <Tag clickable selected>Tadawul Main</Tag>
      <Tag clickable>Mid cap</Tag>
      <Tag clickable>Last 30 days</Tag>
      <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
        <Button variant="secondary" leftIcon={<Bell size={16} />}>Save alert</Button>
        <Button>Run analysis</Button>
      </div>
    </div>
  ),
};
