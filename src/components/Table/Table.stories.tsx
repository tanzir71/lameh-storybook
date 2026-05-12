import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./Table";
import { Badge } from "../Badge/Badge";
import { Avatar } from "../Avatar/Avatar";

type Row = { ticker: string; name: string; sector: string; price: number; change: number; status: "active" | "watch" | "alert" };

const ROWS: Row[] = [
  { ticker: "2222", name: "Saudi Aramco", sector: "Energy", price: 32.40, change: 1.4, status: "active" },
  { ticker: "2010", name: "SABIC",         sector: "Materials", price: 76.10, change: -0.6, status: "watch" },
  { ticker: "7010", name: "STC",           sector: "Telecom",   price: 42.55, change: 0.2, status: "active" },
  { ticker: "1120", name: "Al Rajhi Bank", sector: "Banks",     price: 84.30, change: 2.1, status: "alert" },
  { ticker: "1180", name: "Saudi National Bank", sector: "Banks", price: 36.90, change: -1.3, status: "active" },
];

const meta: Meta = { title: "Components/Table" };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <DataTable<Row>
      rows={ROWS}
      rowKey={(r) => r.ticker}
      columns={[
        { key: "ticker", header: "Ticker", render: (r) => (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Avatar size="sm" name={r.name} />
            <div>
              <div style={{ font: "var(--type-label-md)", color: "var(--text-primary)" }}>{r.ticker}</div>
              <div style={{ font: "var(--type-caption-sm)", color: "var(--text-tertiary)" }}>{r.name}</div>
            </div>
          </div>
        )},
        { key: "sector", header: "Sector" },
        { key: "price", header: "Price (SAR)", numeric: true, render: (r) => r.price.toFixed(2) },
        { key: "change", header: "Δ 1D", numeric: true, render: (r) => (
          <span className={r.change >= 0 ? "pos" : "neg"}>
            {r.change >= 0 ? "+" : ""}{r.change.toFixed(2)}%
          </span>
        )},
        { key: "status", header: "Status", render: (r) => {
          const map: Record<Row["status"], { tone: any; text: string }> = {
            active: { tone: "success", text: "Active" },
            watch:  { tone: "info",    text: "Watch" },
            alert:  { tone: "warning", text: "Alert" },
          };
          const x = map[r.status];
          return <Badge tone={x.tone} dot>{x.text}</Badge>;
        }},
      ]}
    />
  ),
};
