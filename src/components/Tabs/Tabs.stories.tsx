import type { Meta, StoryObj } from "@storybook/react";
import { TrendingUp, FileText, Layers } from "lucide-react";
import { Tabs, Tab } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Pill: Story = {
  render: () => (
    <Tabs variant="pill" defaultValue="overview">
      <Tab id="overview" label="Overview">Daily, weekly, and quarterly performance.</Tab>
      <Tab id="financials" label="Financials">Income statement and ratios.</Tab>
      <Tab id="news" label="News">Latest filings and headlines.</Tab>
    </Tabs>
  ),
};

export const Underline: Story = {
  render: () => (
    <Tabs variant="underline" defaultValue="metrics">
      <Tab id="metrics" label="Metrics" icon={<TrendingUp size={16} />}>Revenue growth, EBITDA margin, ROIC.</Tab>
      <Tab id="filings" label="Filings" icon={<FileText size={16} />}>10-K, 10-Q, and press releases.</Tab>
      <Tab id="ontology" label="Ontology" icon={<Layers size={16} />}>Sector and theme classification.</Tab>
    </Tabs>
  ),
};
