import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import "./Modal.css";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
  footer?: ReactNode;
}

export function Modal({ open, onClose, title, description, size = "md", children, footer }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="ds-modal-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div role="dialog" aria-modal="true" className="ds-modal" data-size={size}>
        <div className="ds-modal-header">
          <div>
            {title && <h2 className="ds-modal-title">{title}</h2>}
            {description && <p className="ds-modal-desc">{description}</p>}
          </div>
          <button type="button" className="ds-modal-close" aria-label="Close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <div className="ds-modal-body">{children}</div>
        {footer && <div className="ds-modal-footer">{footer}</div>}
      </div>
    </div>
  );
}
