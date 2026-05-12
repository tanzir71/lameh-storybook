import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";
import { IconButton } from "../IconButton/IconButton";
import { HelpCircle, Bell } from "lucide-react";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: { content: "Trailing 12 months", side: "top" },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 40 }}>
      <Tooltip {...args}>
        <Button variant="secondary" leftIcon={<HelpCircle size={16} />}>Help</Button>
      </Tooltip>
    </div>
  ),
};

export const Sides: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 80, padding: 80 }}>
      {(["top", "right", "bottom", "left"] as const).map(side => (
        <Tooltip key={side} side={side} content={`Side: ${side}`}>
          <IconButton aria-label={side} icon={<Bell size={16} />} />
        </Tooltip>
      ))}
    </div>
  ),
};
