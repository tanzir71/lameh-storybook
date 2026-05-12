import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils/cx";
import "./Card.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({ interactive, padding = "md", className, children, ...rest }: CardProps) {
  return (
    <div className={cx("ds-card", className)} data-interactive={interactive || undefined} data-padding={padding} {...rest}>
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, actions }: { title: ReactNode; subtitle?: ReactNode; actions?: ReactNode }) {
  return (
    <div className="ds-card-header">
      <div>
        <div className="ds-card-title">{title}</div>
        {subtitle && <div className="ds-card-subtitle">{subtitle}</div>}
      </div>
      {actions}
    </div>
  );
}
export const CardBody = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cx("ds-card-body", className)}>{children}</div>
);
export const CardFooter = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cx("ds-card-footer", className)}>{children}</div>
);
