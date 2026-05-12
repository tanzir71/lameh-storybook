import type { Meta, StoryObj } from "@storybook/react";
import {
  ArrowRight, ArrowDownToLine, ArrowLeftFromLine, Bell, Check, ChevronDown, ChevronRight, ChevronUp,
  Columns2, Copy, Ellipsis, FileDown, Folder, Fullscreen, GripVertical, HardDriveUpload, Landmark,
  LayoutDashboard, List, ListFilter, Maximize2, Megaphone, MessageCircleQuestion, Mic, Minus,
  PanelLeft, PanelRight, PanelRightDashed, PencilRuler, Plus, RotateCw, SearchCheck, Square, Sigma,
  Table, TrendingDown, TrendingUp, Undo2, Upload, Waves, X, ZoomIn, ZoomOut, Play, ShieldCheck,
  ShieldAlert, CircleCheck,
} from "lucide-react";
import "./foundations.css";

const ICONS = [
  { Cmp: ArrowRight, name: "arrow-right" },
  { Cmp: ArrowDownToLine, name: "arrow-down-to-line" },
  { Cmp: ArrowLeftFromLine, name: "arrow-left-from-line" },
  { Cmp: Bell, name: "bell" },
  { Cmp: Check, name: "check" },
  { Cmp: ChevronDown, name: "chevron-down" },
  { Cmp: ChevronRight, name: "chevron-right" },
  { Cmp: ChevronUp, name: "chevron-up" },
  { Cmp: Columns2, name: "columns-02" },
  { Cmp: Copy, name: "copy" },
  { Cmp: Ellipsis, name: "ellipsis" },
  { Cmp: FileDown, name: "file-down" },
  { Cmp: Folder, name: "folder" },
  { Cmp: Fullscreen, name: "fullscreen" },
  { Cmp: GripVertical, name: "grip-vertical" },
  { Cmp: HardDriveUpload, name: "hard-drive-upload" },
  { Cmp: Landmark, name: "landmark" },
  { Cmp: LayoutDashboard, name: "layout-dashboard" },
  { Cmp: List, name: "list" },
  { Cmp: ListFilter, name: "list-filter" },
  { Cmp: Maximize2, name: "maximize-2" },
  { Cmp: Megaphone, name: "megaphone" },
  { Cmp: MessageCircleQuestion, name: "message-circle-question" },
  { Cmp: Mic, name: "mic" },
  { Cmp: Minus, name: "minus" },
  { Cmp: PanelLeft, name: "panel-left" },
  { Cmp: PanelRight, name: "panel-right" },
  { Cmp: PanelRightDashed, name: "panel-right-dashed" },
  { Cmp: PencilRuler, name: "pencil-ruler" },
  { Cmp: Plus, name: "plus" },
  { Cmp: RotateCw, name: "rotate-cw" },
  { Cmp: SearchCheck, name: "search-md" },
  { Cmp: Sigma, name: "square-sigma" },
  { Cmp: Table, name: "table" },
  { Cmp: TrendingDown, name: "trending-down" },
  { Cmp: TrendingUp, name: "trending-up" },
  { Cmp: Undo2, name: "undo-2" },
  { Cmp: Upload, name: "upload-02" },
  { Cmp: Waves, name: "waves" },
  { Cmp: X, name: "x" },
  { Cmp: ZoomIn, name: "zoom-in" },
  { Cmp: ZoomOut, name: "zoom-out" },
  { Cmp: Play, name: "play" },
  { Cmp: ShieldCheck, name: "shield-check" },
  { Cmp: ShieldAlert, name: "shield-warning" },
  { Cmp: CircleCheck, name: "tick-circle" },
  { Cmp: Square, name: "square" },
];

function Icons() {
  return (
    <div>
      <div className="f-eyebrow">Foundations · Icons</div>
      <h1 className="f-title">Iconography</h1>
      <p className="f-sub">
        Icons come from <code>lucide-react</code>, which mirrors the icon set referenced in the Figma file. Always render at 16px (inline), 20px (button), or 24px (header). Stroke 1.75 for inline icons matches the original Lameh aesthetic.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
        {ICONS.map(({ Cmp, name }) => (
          <div
            key={name}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 14px", borderRadius: "var(--radius-sm)",
              background: "var(--bg-surface)", border: "1px solid var(--border-subtle)",
            }}
          >
            <Cmp size={20} strokeWidth={1.75} color="var(--text-primary)" />
            <span style={{ font: "var(--type-caption-md)", color: "var(--text-secondary)" }}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta = { title: "Foundations/Icons" };
export default meta;
type Story = StoryObj;
export const Set: Story = { render: () => <Icons /> };
