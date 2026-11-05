import { cn } from "@/lib/cn";

const sizes = {
  sm: { mark: "h-8", name: "text-base", sub: "text-[9px]", gap: "gap-2", divider: "h-7" },
  md: { mark: "h-10", name: "text-xl", sub: "text-[11px]", gap: "gap-2.5", divider: "h-8" },
  lg: { mark: "h-14", name: "text-3xl", sub: "text-sm", gap: "gap-3.5", divider: "h-12" },
};

/**
 * Brand lockup: image mark | two-line wordmark (mirrors the official logo).
 * The wordmark is live text so it follows the active theme's colors; the mark
 * gets a subtle light outline on dark themes via `--logo-filter`.
 *
 * @example <Logo markSrc="/brand/quantix-mark.png" name="Quantix" subtitle="AI Solutions" />
 */
export function Logo({ markSrc, name, subtitle, href = "#top", size = "md", className }) {
  const s = sizes[size];
  return (
    <a href={href} aria-label={`${name} ${subtitle ?? ""} — home`.trim()} className={cn("inline-flex items-center", s.gap, className)}>
      <img src={markSrc} alt="" className={cn("w-auto shrink-0", s.mark)} style={{ filter: "var(--logo-filter)" }} />
      <span aria-hidden className={cn("w-px shrink-0 bg-fg/30", s.divider)} />
      <span className="flex flex-col font-brand leading-none">
        <span className={cn("font-bold tracking-tight text-fg", s.name)}>{name}</span>
        {subtitle && <span className={cn("mt-1 font-semibold tracking-[0.08em] text-primary", s.sub)}>{subtitle}</span>}
      </span>
    </a>
  );
}
