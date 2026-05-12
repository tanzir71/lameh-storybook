import "./Spinner.css";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  "aria-label"?: string;
}

export function Spinner({ size = "md", ...rest }: SpinnerProps) {
  return <span className="ds-spinner" data-size={size} role="status" aria-label={rest["aria-label"] ?? "Loading"} />;
}

export interface ProgressProps {
  /** 0-100, or omit for indeterminate */
  value?: number;
}

export function Progress({ value }: ProgressProps) {
  const indeterminate = value === undefined;
  return (
    <div className="ds-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
      <div
        className="ds-progress-bar"
        data-indeterminate={indeterminate || undefined}
        style={indeterminate ? undefined : { width: `${Math.max(0, Math.min(100, value!))}%` }}
      />
    </div>
  );
}
