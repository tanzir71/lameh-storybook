import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cx } from "../../utils/cx";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonTone = "default" | "danger";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
  /** Optional icon rendered before the label. */
  leftIcon?: ReactNode;
  /** Optional icon rendered after the label. */
  rightIcon?: ReactNode;
  /** When true, the button shows a spinner and is disabled. */
  loading?: boolean;
  /** Stretch to fill its container. */
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    tone = "default",
    leftIcon,
    rightIcon,
    loading = false,
    fullWidth = false,
    disabled,
    className,
    children,
    type = "button",
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cx("ds-btn", className)}
      data-variant={variant}
      data-size={size}
      data-tone={tone}
      data-loading={loading || undefined}
      data-full={fullWidth || undefined}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <span className="ds-btn-spin" aria-hidden /> : leftIcon}
      {children}
      {!loading && rightIcon}
    </button>
  );
});
