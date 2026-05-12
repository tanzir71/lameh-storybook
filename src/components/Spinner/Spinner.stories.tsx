import type { Meta, StoryObj } from "@storybook/react";
import { Spinner, Progress } from "./Spinner";

const meta: Meta = { title: "Components/Spinner" };
export default meta;
type Story = StoryObj;

export const Spinners: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const Determinate: Story = {
  render: () => (
    <div style={{ width: 320, display: "grid", gap: 16 }}>
      <Progress value={20} />
      <Progress value={56} />
      <Progress value={92} />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => <div style={{ width: 320 }}><Progress /></div>,
};
