import { cn } from "@/lib/cn";

/** Decorative fading grid. Place inside a `relative` parent. */
export function GridBackground({ className }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--color-fg)_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--color-fg)_6%,transparent)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
    </div>
  );
}

/** Soft blurred color blob. Position and color it with className. */
export function Glow({ className }) {
  return <div aria-hidden className={cn("pointer-events-none absolute rounded-full blur-3xl", className)} />;
}
