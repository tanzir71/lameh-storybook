import type { Meta, StoryObj } from "@storybook/react";
import { Search, Mail, Lock } from "lucide-react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    required: { control: "boolean" },
  },
  args: { label: "Company ticker", placeholder: "e.g. 2222", hint: "Tadawul symbol", size: "md" },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 16, width: 320 }}>
      <Input {...args} size="sm" label="Small" />
      <Input {...args} size="md" label="Medium" />
      <Input {...args} size="lg" label="Large" />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16, width: 360 }}>
      <Input label="Search" placeholder="Search companies, tickers, filings…" leftAddon={<Search size={16} />} />
      <Input label="Email" placeholder="you@example.com" type="email" leftAddon={<Mail size={16} />} />
      <Input label="Password" placeholder="••••••••" type="password" leftAddon={<Lock size={16} />} />
    </div>
  ),
};

export const ErrorState: Story = {
  args: { label: "Required field", value: "", error: "This field is required.", required: true },
};

export const Disabled: Story = {
  args: { disabled: true, value: "Cannot edit", hint: "Locked by admin" },
};
