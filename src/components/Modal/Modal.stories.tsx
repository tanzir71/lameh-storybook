import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Create a custom metric"
          description="Build a derived KPI by combining columns from the company's financials."
          footer={
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Create metric</Button>
            </>
          }
        >
          <div style={{ display: "grid", gap: 16 }}>
            <Input label="Metric name" placeholder="e.g. Adjusted EBITDA margin" fullWidth />
            <Input label="Formula" placeholder="(EBITDA - one-offs) / Revenue" fullWidth hint="Use square brackets to reference columns." />
          </div>
        </Modal>
      </>
    );
  },
};

export const DangerConfirm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button tone="danger" onClick={() => setOpen(true)}>Delete report</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          size="sm"
          title="Delete this report?"
          description="This action can't be undone."
          footer={
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
              <Button tone="danger" onClick={() => setOpen(false)}>Delete</Button>
            </>
          }
        >
          The report and its attached notes will be removed from your workspace.
        </Modal>
      </>
    );
  },
};
