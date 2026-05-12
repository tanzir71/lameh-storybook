import { cloneElement, isValidElement, useId, useState, type ReactElement, type ReactNode } from "react";
import "./Tooltip.css";

export interface TooltipProps {
  content: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  children: ReactElement;
  /** Delay in ms before showing (default 120ms) */
  delay?: number;
}

export function Tooltip({ content, side = "top", children, delay = 120 }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  let timer: number | undefined;

  const show = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => setOpen(true), delay);
  };
  const hide = () => {
    window.clearTimeout(timer);
    setOpen(false);
  };

  if (!isValidElement(children)) return <>{children}</>;
  const trigger = cloneElement(children as ReactElement<any>, {
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide,
    "aria-describedby": id,
  });

  return (
    <span className="ds-tooltip-wrap">
      {trigger}
      <span role="tooltip" id={id} className="ds-tooltip" data-side={side} data-open={open || undefined}>
        {content}
      </span>
    </span>
  );
}
