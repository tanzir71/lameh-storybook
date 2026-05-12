import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";
import { Button } from "../Button/Button";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    tone: "info",
    title: "New filings ingested",
    description: "12 new quarterly reports were synced from Tadawul this morning.",
  },
  render: (args) => <div style={{ width: 480 }}><Alert {...args} /></div>,
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {};
export const Brand: Story = { args: { tone: "brand", title: "AI insights ready", description: "Lameh has generated 4 new analyses on your watchlist." } };
export const Success: Story = { args: { tone: "success", title: "Saved", description: "Your filter preset was saved to Quick Filters." } };
export const Warning: Story = { args: { tone: "warning", title: "Data lag detected", description: "Some metrics are using values older than 24 hours." } };
export const ErrorAlert: Story = { name: "Error", args: { tone: "error", title: "Import failed", description: "Couldn't reach the data source. Retry in a few minutes." } };

export const WithActions: Story = {
  args: {
    tone: "warning",
    title: "Outdated indicator",
    description: "Three metrics in this report use stale data. Refresh to pull the latest values.",
    actions: (
      <>
        <Button size="sm" variant="secondary">Dismiss</Button>
        <Button size="sm">Refresh now</Button>
      </>
    ),
    onClose: () => {},
  },
};
