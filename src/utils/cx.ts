// Tiny className joiner. Avoids a clsx/classnames dep.
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
