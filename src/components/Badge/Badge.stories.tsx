import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    tone: { control: "select", options: ["neutral", "brand", "success", "warning", "error", "info"] },
    variant: { control: "inline-radio", options: ["subtle", "solid"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    dot: { control: "boolean" },
  },
  args: { children: "Active", tone: "brand", variant: "subtle", size: "sm" },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Tones: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Badge tone="neutral">Draft</Badge>
      <Badge tone="brand" dot>Live</Badge>
      <Badge tone="success" dot>Up 4.2%</Badge>
      <Badge tone="warning" dot>Stale</Badge>
      <Badge tone="error" dot>Down 1.8%</Badge>
      <Badge tone="info" dot>Updated</Badge>
    </div>
  ),
};

export const Solid: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Badge tone="brand" variant="solid">Premium</Badge>
      <Badge tone="success" variant="solid">Approved</Badge>
      <Badge tone="warning" variant="solid">Review</Badge>
      <Badge tone="error" variant="solid">Blocked</Badge>
      <Badge tone="info" variant="solid">Beta</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge size="sm" tone="brand">SM</Badge>
      <Badge size="md" tone="brand">MD</Badge>
      <Badge size="lg" tone="brand">LG</Badge>
    </div>
  ),
};
