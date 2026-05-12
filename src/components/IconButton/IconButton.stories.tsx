import type { Meta, StoryObj } from "@storybook/react";
import { Bell, Search, Plus, MoreHorizontal, Settings, Trash2 } from "lucide-react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/Icon Button",
  component: IconButton,
  tags: ["autodocs"],
  args: { "aria-label": "Notifications", icon: <Bell size={18} /> },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    variant: { control: "inline-radio", options: ["default", "ghost", "primary"] },
  },
};
export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <IconButton aria-label="Search" icon={<Search size={18} />} />
      <IconButton aria-label="Add" icon={<Plus size={18} />} variant="primary" />
      <IconButton aria-label="More" icon={<MoreHorizontal size={18} />} variant="ghost" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <IconButton size="sm" aria-label="Settings" icon={<Settings size={14} />} />
      <IconButton size="md" aria-label="Settings" icon={<Settings size={18} />} />
      <IconButton size="lg" aria-label="Settings" icon={<Settings size={22} />} />
    </div>
  ),
};

export const Danger: Story = {
  render: () => <IconButton aria-label="Delete" icon={<Trash2 size={18} color="var(--text-error)" />} />,
};
