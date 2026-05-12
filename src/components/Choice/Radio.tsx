import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cx } from "../../utils/cx";
import "./Choice.css";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  description?: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, description, disabled, className, ...rest },
  ref,
) {
  return (
    <label className={cx("ds-choice", className)} data-disabled={disabled || undefined}>
      <input ref={ref} type="radio" className="ds-choice-input" disabled={disabled} {...rest} />
      <span className="ds-choice-radio" aria-hidden />
      {(label || description) && (
        <span className="ds-choice-text">
          {label}
          {description && <span className="ds-choice-desc">{description}</span>}
        </span>
      )}
    </label>
  );
});
