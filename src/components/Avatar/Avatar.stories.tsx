import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: { name: "Tanzir Rahman", size: "md" },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar size="xs" name="A B" />
      <Avatar size="sm" name="C D" />
      <Avatar size="md" name="E F" />
      <Avatar size="lg" name="G H" />
      <Avatar size="xl" name="I J" />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar name="Aisha N" />
      <Avatar name="Khalid R" />
      <Avatar name="Layla S" />
      <Avatar name="+12" />
    </AvatarGroup>
  ),
};

export const Square: Story = { args: { name: "Aramco", square: true, size: "lg" } };
