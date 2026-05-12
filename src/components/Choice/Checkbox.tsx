import { forwardRef, useEffect, useRef, type InputHTMLAttributes, type ReactNode } from "react";
import { Check } from "lucide-react";
import { cx } from "../../utils/cx";
import "./Choice.css";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  description?: ReactNode;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, description, indeterminate, disabled, className, ...rest },
  ref,
) {
  const localRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (localRef.current) localRef.current.indeterminate = !!indeterminate;
  }, [indeterminate]);

  return (
    <label className={cx("ds-choice", className)} data-disabled={disabled || undefined}>
      <input
        type="checkbox"
        ref={(el) => {
          localRef.current = el;
          if (typeof ref === "function") ref(el);
          else if (ref) ref.current = el;
        }}
        className="ds-choice-input"
        disabled={disabled}
        {...rest}
      />
      <span className="ds-choice-box" aria-hidden>
        <Check size={12} strokeWidth={3} />
      </span>
      {(label || description) && (
        <span className="ds-choice-text">
          {label}
          {description && <span className="ds-choice-desc">{description}</span>}
        </span>
      )}
    </label>
  );
});
