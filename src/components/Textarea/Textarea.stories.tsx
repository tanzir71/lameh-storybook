import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    label: "Research note",
    placeholder: "Add context for the model…",
    hint: "Markdown is supported.",
    rows: 5,
    fullWidth: true,
  },
  render: (args) => <div style={{ width: 480 }}><Textarea {...args} /></div>,
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
export const ErrorState: Story = { args: { error: "Note cannot be empty", value: "" } };
export const Disabled: Story = { args: { disabled: true, value: "Locked" } };
