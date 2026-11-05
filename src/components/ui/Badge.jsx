import { cn } from "@/lib/cn";

/** Small accent label (plain text, no box). `dot` adds a live pulsing indicator. */
export function Badge({ children, dot = false, icon: Icon, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium text-highlight",
        className
      )}
    >
      {dot && (
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-success" />
        </span>
      )}
      {Icon && <Icon className="size-3.5" aria-hidden />}
      {children}
    </span>
  );
}
