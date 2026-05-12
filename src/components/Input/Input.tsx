import { forwardRef, useState, type InputHTMLAttributes, type ReactNode } from "react";
import { cx } from "../../utils/cx";
import "./Input.css";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  fullWidth?: boolean;
  required?: boolean;
}

let _id = 0;
const useUid = (prefix = "in") => {
  const [id] = useState(() => `${prefix}-${++_id}`);
  return id;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, size = "md", leftAddon, rightAddon, fullWidth, required, disabled, id, className, ...rest },
  ref,
) {
  const fallbackId = useUid();
  const inputId = id ?? fallbackId;
  const helpId = `${inputId}-help`;
  const [focused, setFocused] = useState(false);
  const invalid = !!error;

  return (
    <label className={cx("ds-field", className)} data-full={fullWidth || undefined} htmlFor={inputId}>
      {label && (
        <span className="ds-field-label">
          {label}{required && <span className="ds-field-required" aria-hidden>*</span>}
        </span>
      )}
      <span
        className="ds-field-control"
        data-size={size}
        data-focused={focused || undefined}
        data-invalid={invalid || undefined}
        data-disabled={disabled || undefined}
      >
        {leftAddon && <span className="ds-field-affix" data-side="left">{leftAddon}</span>}
        <input
          ref={ref}
          id={inputId}
          className="ds-field-input"
          disabled={disabled}
          aria-invalid={invalid || undefined}
          aria-describedby={hint || error ? helpId : undefined}
          onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
          {...rest}
        />
        {rightAddon && <span className="ds-field-affix" data-side="right">{rightAddon}</span>}
      </span>
      {(error || hint) && (
        <span id={helpId} className="ds-field-help" data-state={error ? "error" : undefined}>
          {error ?? hint}
        </span>
      )}
    </label>
  );
});
