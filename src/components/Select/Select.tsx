import { forwardRef, useState, type SelectHTMLAttributes, type ReactNode } from "react";
import { cx } from "../../utils/cx";
import "./Select.css";
import "../Input/Input.css";

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: ReactNode;
}

let _id = 0;
const useUid = (prefix = "sel") => {
  const [id] = useState(() => `${prefix}-${++_id}`);
  return id;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, hint, error, size = "md", fullWidth, id, className, children, ...rest },
  ref,
) {
  const fallbackId = useUid();
  const sid = id ?? fallbackId;
  const helpId = `${sid}-help`;
  const invalid = !!error;
  return (
    <label className={cx("ds-field", className)} data-full={fullWidth || undefined} htmlFor={sid}>
      {label && <span className="ds-field-label">{label}</span>}
      <select
        ref={ref}
        id={sid}
        className="ds-select"
        data-size={size}
        aria-invalid={invalid || undefined}
        aria-describedby={hint || error ? helpId : undefined}
        {...rest}
      >
        {children}
      </select>
      {(error || hint) && <span id={helpId} className="ds-field-help" data-state={error ? "error" : undefined}>{error ?? hint}</span>}
    </label>
  );
});
