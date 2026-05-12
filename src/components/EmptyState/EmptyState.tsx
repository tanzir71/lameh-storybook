import type { ReactNode } from "react";
import { Search } from "lucide-react";
import "./EmptyState.css";

export interface EmptyStateProps {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}

export function EmptyState({ icon, title, description, actions }: EmptyStateProps) {
  return (
    <div className="ds-empty">
      <div className="ds-empty-illo">{icon ?? <Search size={28} strokeWidth={1.75} />}</div>
      <h3 className="ds-empty-title">{title}</h3>
      {description && <p className="ds-empty-desc">{description}</p>}
      {actions && <div className="ds-empty-actions">{actions}</div>}
    </div>
  );
}
