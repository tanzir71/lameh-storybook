import type { Meta, StoryObj } from "@storybook/react";
import { Bell, Filter, Search } from "lucide-react";
import { Badge } from "../../components/Badge/Badge";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Tag } from "../../components/Tag/Tag";
import "./patterns.css";

const meta: Meta = { title: "Patterns" };
export default meta;
type Story = StoryObj;

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
