import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils/cx";
import "./Table.css";

export interface Column<T> {
  key: keyof T | string;
  header: ReactNode;
  align?: "left" | "right";
  numeric?: boolean;
  render?: (row: T) => ReactNode;
  width?: number | string;
}

export interface DataTableProps<T> extends HTMLAttributes<HTMLDivElement> {
  columns: Column<T>[];
  rows: T[];
  caption?: string;
  rowKey?: (row: T, idx: number) => string;
}

export function DataTable<T extends Record<string, any>>({
  columns,
  rows,
  caption,
  rowKey,
  className,
  ...rest
}: DataTableProps<T>) {
  return (
    <div className={cx("ds-table-wrap", className)} {...rest}>
      <table className="ds-table">
        {caption && <caption style={{ padding: 12, textAlign: "left", color: "var(--text-tertiary)" }}>{caption}</caption>}
        <thead>
          <tr>
            {columns.map(c => (
              <th key={String(c.key)} style={{ width: c.width, textAlign: c.numeric ? "right" : c.align }}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={rowKey ? rowKey(row, idx) : idx}>
              {columns.map(c => (
                <td key={String(c.key)} className={c.numeric ? "num" : undefined}>
                  {c.render ? c.render(row) : row[c.key as keyof T] as unknown as ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
