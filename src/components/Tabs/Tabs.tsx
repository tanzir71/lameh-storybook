import { Children, isValidElement, useState, type ReactElement, type ReactNode } from "react";
import { cx } from "../../utils/cx";
import "./Tabs.css";

export interface TabItemProps {
  id: string;
  label: ReactNode;
  children?: ReactNode;
  /** Optional icon shown before the label */
  icon?: ReactNode;
}

export function Tab(_: TabItemProps): ReactElement | null { return null; }

export interface TabsProps {
  /** Tab IDs/labels declared as <Tab id="..." label="..." /> children */
  children: ReactNode;
  /** Initially active tab id (uncontrolled) */
  defaultValue?: string;
  /** Controlled mode */
  value?: string;
  onValueChange?: (value: string) => void;
  /**
   * Visual style.
   * - `segmented` - codex-preferred name: track `bg-surface-2`, 28-px tabs.
   * - `pill` - legacy alias for `segmented`, kept for backwards compatibility.
   * - `underline` - 40-px tabs with a 2-px brand bottom-border on active.
   */
  variant?: "segmented" | "pill" | "underline";
  className?: string;
}

export function Tabs({ children, defaultValue, value, onValueChange, variant = "segmented", className }: TabsProps) {
  const tabs = Children.toArray(children).filter(isValidElement) as ReactElement<TabItemProps>[];
  const ids = tabs.map(t => t.props.id);
  const [internal, setInternal] = useState(defaultValue ?? ids[0]);
  const active = value ?? internal;
  const setActive = (id: string) => {
    if (value === undefined) setInternal(id);
    onValueChange?.(id);
  };
  const current = tabs.find(t => t.props.id === active) ?? tabs[0];

  return (
    <div className={cx("ds-tabs", className)}>
      <div role="tablist" className="ds-tablist" data-variant={variant}>
        {tabs.map(t => (
          <button
            key={t.props.id}
            role="tab"
            type="button"
            aria-selected={t.props.id === active}
            tabIndex={t.props.id === active ? 0 : -1}
            className="ds-tab"
            onClick={() => setActive(t.props.id)}
          >
            {t.props.icon}
            {t.props.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="ds-tabpanel">
        {current?.props.children}
      </div>
    </div>
  );
}
