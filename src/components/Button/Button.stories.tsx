import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight, Plus, Trash2, Download } from "lucide-react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "ghost", "link"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    tone: { control: "inline-radio", options: ["default", "danger"] },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: { children: "Run analysis", variant: "primary", size: "md", tone: "default" },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button {...args} leftIcon={<Plus size={16} />}>New report</Button>
      <Button {...args} rightIcon={<ArrowRight size={16} />} variant="secondary">Continue</Button>
      <Button {...args} variant="ghost" leftIcon={<Download size={16} />}>Export</Button>
    </div>
  ),
};

export const Danger: Story = {
  args: { tone: "danger" },
  render: (args) => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button {...args} variant="primary" leftIcon={<Trash2 size={16} />}>Delete account</Button>
      <Button {...args} variant="secondary" leftIcon={<Trash2 size={16} />}>Delete</Button>
      <Button {...args} variant="ghost" leftIcon={<Trash2 size={16} />}>Delete</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { loading: true, children: "Generating…" },
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <div style={{ display: "flex", gap: 12 }}>
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="ghost">Ghost</Button>
    </div>
  ),
};
