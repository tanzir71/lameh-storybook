import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cx } from "../../utils/cx";
import "./IconButton.css";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string; // required for a11y
  icon: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "ghost" | "primary";
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { icon, size = "md", variant = "default", className, type = "button", ...rest },
  ref,
) {
  return (
    <button ref={ref} type={type} className={cx("ds-iconbtn", className)} data-size={size} data-variant={variant} {...rest}>
      {icon}
    </button>
  );
});
