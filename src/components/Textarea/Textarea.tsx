import { forwardRef, useState, type TextareaHTMLAttributes } from "react";
import { cx } from "../../utils/cx";
import "../Input/Input.css";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  fullWidth?: boolean;
}

let _id = 0;
const useUid = (prefix = "ta") => {
  const [id] = useState(() => `${prefix}-${++_id}`);
  return id;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, hint, error, fullWidth, id, className, ...rest },
  ref,
) {
  const fallbackId = useUid();
  const tid = id ?? fallbackId;
  const helpId = `${tid}-help`;
  const invalid = !!error;
  return (
    <label className={cx("ds-field", className)} data-full={fullWidth || undefined} htmlFor={tid}>
      {label && <span className="ds-field-label">{label}</span>}
      <textarea
        ref={ref}
        id={tid}
        className="ds-field-textarea"
        data-invalid={invalid || undefined}
        aria-invalid={invalid || undefined}
        aria-describedby={hint || error ? helpId : undefined}
        {...rest}
      />
      {(error || hint) && <span id={helpId} className="ds-field-help" data-state={error ? "error" : undefined}>{error ?? hint}</span>}
    </label>
  );
});
