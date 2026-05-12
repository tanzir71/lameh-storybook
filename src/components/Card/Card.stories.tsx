import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <Card>
        <CardHeader title="Saudi Aramco" subtitle="2222 · Tadawul" actions={<Badge tone="success" dot>+3.4%</Badge>} />
        <CardBody>
          Earnings beat consensus by 4.2% on stronger downstream margins; capex guidance held flat.
        </CardBody>
        <CardFooter>
          <span style={{ font: "var(--type-caption-sm)", color: "var(--text-tertiary)" }}>Updated 12 min ago</span>
          <Button size="sm" variant="secondary">Open report</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <Card interactive onClick={() => alert("opened")}>
        <CardBody>
          <div style={{ font: "var(--type-heading-md)", color: "var(--text-primary)", marginBottom: 4 }}>
            Quarterly performance overview
          </div>
          <div style={{ font: "var(--type-body-sm)", color: "var(--text-tertiary)" }}>
            Click anywhere on the card.
          </div>
        </CardBody>
      </Card>
    </div>
  ),
};
