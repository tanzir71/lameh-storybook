import type { Meta, StoryObj } from "@storybook/react";
import { FolderOpen, Plus } from "lucide-react";
import { EmptyState } from "./EmptyState";
import { Button } from "../Button/Button";

const meta: Meta<typeof EmptyState> = {
  title: "Components/Empty State",
  component: EmptyState,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const NoResults: Story = {
  render: () => (
    <EmptyState
      title="No companies match your filters"
      description="Try widening the sector or removing the market-cap floor to see more results."
      actions={<Button variant="secondary">Clear filters</Button>}
    />
  ),
};

export const FirstRun: Story = {
  render: () => (
    <EmptyState
      icon={<FolderOpen size={28} strokeWidth={1.75} />}
      title="No reports yet"
      description="Generate a report from the watchlist or import an existing PDF."
      actions={<>
        <Button variant="secondary">Import PDF</Button>
        <Button leftIcon={<Plus size={16} />}>New report</Button>
      </>}
    />
  ),
};
