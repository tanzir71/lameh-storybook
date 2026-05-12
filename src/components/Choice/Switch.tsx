import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cx } from "../../utils/cx";
import "./Choice.css";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode;
  description?: ReactNode;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { label, description, disabled, className, ...rest },
  ref,
) {
  return (
    <label className={cx("ds-choice", className)} data-disabled={disabled || undefined}>
      <input ref={ref} type="checkbox" role="switch" className="ds-choice-input" disabled={disabled} {...rest} />
      <span className="ds-switch-track" aria-hidden />
      {(label || description) && (
        <span className="ds-choice-text">
          {label}
          {description && <span className="ds-choice-desc">{description}</span>}
        </span>
      )}
    </label>
  );
});
