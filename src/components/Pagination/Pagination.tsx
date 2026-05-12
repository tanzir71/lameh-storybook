import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Pagination.css";

export interface PaginationProps {
  page: number;            // 1-based
  pageCount: number;
  onPageChange: (page: number) => void;
  /** Pages always shown adjacent to the current page (default 1) */
  siblings?: number;
}

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function buildItems(page: number, pageCount: number, siblings: number): (number | "...")[] {
  if (pageCount <= 7) return range(1, pageCount);
  const start = Math.max(2, page - siblings);
  const end = Math.min(pageCount - 1, page + siblings);
  const items: (number | "...")[] = [1];
  if (start > 2) items.push("...");
  items.push(...range(start, end));
  if (end < pageCount - 1) items.push("...");
  items.push(pageCount);
  return items;
}

export function Pagination({ page, pageCount, onPageChange, siblings = 1 }: PaginationProps) {
  const items = buildItems(page, pageCount, siblings);
  return (
    <nav className="ds-pagination" aria-label="Pagination">
      <button className="ds-page-btn" aria-label="Previous page" disabled={page <= 1} onClick={() => onPageChange(page - 1)}>
        <ChevronLeft size={16} />
      </button>
      {items.map((it, idx) =>
        it === "..." ? (
          <span key={`e${idx}`} className="ds-page-ellipsis">…</span>
        ) : (
          <button
            key={it}
            className="ds-page-btn"
            aria-current={it === page ? "page" : undefined}
            onClick={() => onPageChange(it)}
          >
            {it}
          </button>
        ),
      )}
      <button className="ds-page-btn" aria-label="Next page" disabled={page >= pageCount} onClick={() => onPageChange(page + 1)}>
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
