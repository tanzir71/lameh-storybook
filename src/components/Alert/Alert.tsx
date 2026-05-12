import type { HTMLAttributes, ReactNode } from "react";
import { Info, CheckCircle2, AlertTriangle, XCircle, Sparkles, X } from "lucide-react";
import { cx } from "../../utils/cx";
import "./Alert.css";

export type AlertTone = "neutral" | "brand" | "info" | "success" | "warning" | "error";

function defaultIcon(tone: AlertTone) {
  switch (tone) {
    case "success": return <CheckCircle2 size={18} />;
    case "warning": return <AlertTriangle size={18} />;
    case "error":   return <XCircle size={18} />;
    case "brand":   return <Sparkles size={18} />;
    case "info":
    case "neutral":
    default:        return <Info size={18} />;
  }
}

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  tone?: AlertTone;
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  actions?: ReactNode;
  onClose?: () => void;
}

export function Alert(props: AlertProps) {
  const {
    tone = "neutral",
    title,
    description,
    icon,
    actions,
    onClose,
    className,
    children,
    ...rest
  } = props;

  return (
    <div role="alert" className={cx("ds-alert", className)} data-tone={tone} {...rest}>
      <div className="ds-alert-icon">{icon ?? defaultIcon(tone)}</div>
      <div className="ds-alert-body">
        {title ? <div className="ds-alert-title">{title}</div> : null}
        {description ? <p className="ds-alert-desc">{description}</p> : null}
        {children}
        {actions ? <div className="ds-alert-actions">{actions}</div> : null}
      </div>
      {onClose ? (
        <button type="button" className="ds-alert-close" aria-label="Dismiss" onClick={onClose}>
          <X size={16} />
        </button>
      ) : null}
    </div>
  );
}
