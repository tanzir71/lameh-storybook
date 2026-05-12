import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Filter, Building2 } from "lucide-react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: { children: "All sectors" },
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {};

export const Filterable: Story = {
  render: () => {
    const [active, setActive] = useState<string[]>(["banks", "energy"]);
    const sectors = ["Banks", "Energy", "Materials", "Real Estate", "Industrials", "Tech"];
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {sectors.map(s => {
          const key = s.toLowerCase().replace(" ", "-");
          const selected = active.includes(key);
          return (
            <Tag
              key={key}
              clickable
              selected={selected}
              leftIcon={<Filter size={12} />}
              onClick={() => setActive(a => selected ? a.filter(x => x !== key) : [...a, key])}
            >
              {s}
            </Tag>
          );
        })}
      </div>
    );
  },
};

export const Removable: Story = {
  render: () => {
    const [items, setItems] = useState(["Aramco", "SABIC", "STC", "Al Rajhi"]);
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {items.map(name => (
          <Tag key={name} leftIcon={<Building2 size={12} />} onRemove={() => setItems(items.filter(i => i !== name))}>
            {name}
          </Tag>
        ))}
      </div>
    );
  },
};
