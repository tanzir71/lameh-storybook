import type { HTMLAttributes, ReactNode } from "react";
import { X } from "lucide-react";
import { cx } from "../../utils/cx";
import "./Tag.css";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  selected?: boolean;
  onRemove?: () => void;
  leftIcon?: ReactNode;
  clickable?: boolean;
}

export function Tag({ selected, onRemove, leftIcon, clickable, className, children, ...rest }: TagProps) {
  return (
    <span
      className={cx("ds-tag", className)}
      data-selected={selected || undefined}
      data-clickable={(clickable || rest.onClick) ? true : undefined}
      role={rest.onClick ? "button" : undefined}
      tabIndex={rest.onClick ? 0 : undefined}
      {...rest}
    >
      {leftIcon}
      {children}
      {onRemove && (
        <button
          type="button"
          aria-label="Remove"
          className="ds-tag-close"
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
        >
          <X size={12} />
        </button>
      )}
    </span>
  );
}
