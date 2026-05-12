import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  args: { label: "Sector", hint: "Pick the primary industry", fullWidth: true },
  render: (args) => (
    <div style={{ width: 320 }}>
      <Select {...args}>
        <option>Financial Services</option>
        <option>Energy</option>
        <option>Materials</option>
        <option>Health Care</option>
        <option>Industrials</option>
      </Select>
    </div>
  ),
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};
export const ErrorState: Story = { args: { error: "Pick a sector to continue" } };
export const Disabled: Story = { args: { disabled: true } };
