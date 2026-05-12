import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils/cx";
import "./Avatar.css";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  square?: boolean;
  fallback?: ReactNode;
}

function initials(name?: string) {
  if (!name) return null;
  const words = name.trim().split(/\s+/).slice(0, 2);
  return words.map(w => w[0]?.toUpperCase()).join("");
}

export function Avatar({ src, alt, name, size = "md", square, fallback, className, ...rest }: AvatarProps) {
  return (
    <span className={cx("ds-avatar", className)} data-size={size} data-square={square || undefined} aria-label={alt ?? name} {...rest}>
      {src ? <img src={src} alt={alt ?? name ?? ""} /> : (fallback ?? initials(name))}
    </span>
  );
}

export function AvatarGroup({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cx("ds-avatar-group", className)}>{children}</span>;
}
