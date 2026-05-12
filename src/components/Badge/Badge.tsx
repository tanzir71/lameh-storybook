import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils/cx";
import "./Badge.css";

export type BadgeTone = "neutral" | "brand" | "success" | "warning" | "error" | "info";
export type BadgeVariant = "subtle" | "solid";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  variant?: BadgeVariant;
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  leftIcon?: ReactNode;
}

export function Badge({
  tone = "neutral",
  variant = "subtle",
  size = "sm",
  dot,
  leftIcon,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cx("ds-badge", className)}
      data-tone={tone}
      data-variant={variant}
      data-size={size}
      {...rest}
    >
      {dot && <span className="ds-badge-dot" aria-hidden />}
      {leftIcon}
      {children}
    </span>
  );
}
