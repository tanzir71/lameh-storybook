import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";
import { Radio } from "./Radio";
import { Switch } from "./Switch";

const meta: Meta = { title: "Components/Choice" };
export default meta;
type Story = StoryObj;

export const Checkboxes: Story = {
  name: "Checkbox",
  render: () => {
    const [a, setA] = useState(true);
    const [b, setB] = useState(false);
    return (
      <div style={{ display: "grid", gap: 12 }}>
        <Checkbox label="Include subsidiaries" checked={a} onChange={(e) => setA(e.target.checked)} />
        <Checkbox label="Adjust for inflation" description="Uses CPI from Saudi Central Bank" checked={b} onChange={(e) => setB(e.target.checked)} />
        <Checkbox label="Indeterminate (some selected)" indeterminate />
        <Checkbox label="Disabled" disabled />
        <Checkbox label="Disabled & checked" disabled defaultChecked />
      </div>
    );
  },
};

export const Radios: Story = {
  name: "Radio",
  render: () => {
    const [value, setValue] = useState("quarterly");
    return (
      <div style={{ display: "grid", gap: 12 }}>
        {[
          { id: "annual", label: "Annual", desc: "12-month rolling" },
          { id: "quarterly", label: "Quarterly", desc: "3-month rolling" },
          { id: "monthly", label: "Monthly", desc: "Latest month" },
        ].map(o => (
          <Radio key={o.id} name="cadence" value={o.id} label={o.label} description={o.desc}
                 checked={value === o.id} onChange={() => setValue(o.id)} />
        ))}
        <Radio name="cadence" label="Disabled option" disabled />
      </div>
    );
  },
};

export const Switches: Story = {
  name: "Switch",
  render: () => {
    const [a, setA] = useState(true);
    return (
      <div style={{ display: "grid", gap: 12 }}>
        <Switch label="Show AI insights" checked={a} onChange={(e) => setA(e.target.checked)} />
        <Switch label="Email me a daily digest" description="Sent at 7:00 AM Riyadh time" />
        <Switch label="Disabled" disabled />
      </div>
    );
  },
};
