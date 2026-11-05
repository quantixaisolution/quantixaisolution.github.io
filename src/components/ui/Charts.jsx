import { useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

/*
 * Tiny decorative charts. They animate in on view and read colors from the
 * active theme (primary / accent), so they match every theme automatically.
 */

const view = { once: true, margin: "-40px" };

/** Smooth line with a soft gradient fill. `data` = array of numbers. */
export function Sparkline({ data, className, strokeWidth = 2, fill = true }) {
  const id = useId();
  const w = 100;
  const h = 32;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const pts = data.map((v, i) => [(i / (data.length - 1)) * w, h - 2 - ((v - min) / (max - min || 1)) * (h - 4)]);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${w},${h} L0,${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className={cn("h-10 w-full overflow-visible", className)} aria-hidden>
      <defs>
        <linearGradient id={`${id}-s`} x1="0" x2="1">
          <stop offset="0" style={{ stopColor: "var(--color-primary)" }} />
          <stop offset="1" style={{ stopColor: "var(--color-accent)" }} />
        </linearGradient>
        <linearGradient id={`${id}-f`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--color-primary)", stopOpacity: 0.28 }} />
          <stop offset="1" style={{ stopColor: "var(--color-primary)", stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      {fill && (
        <motion.path d={area} fill={`url(#${id}-f)`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={view} transition={{ duration: 1, delay: 0.6 }} />
      )}
      <motion.path
        d={line}
        fill="none"
        stroke={`url(#${id}-s)`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={view}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
    </svg>
  );
}

/** Animated vertical bars. `data` = array of numbers; last bar is emphasized. */
export function BarChart({ data, className }) {
  const max = Math.max(...data);
  return (
    <div className={cn("flex h-28 items-end gap-1.5", className)} aria-hidden>
      {data.map((v, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${(v / max) * 100}%` }}
          viewport={view}
          transition={{ duration: 0.8, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "flex-1 rounded-t-md bg-gradient-to-t from-primary to-accent",
            i === data.length - 1 ? "opacity-100" : "opacity-40"
          )}
        />
      ))}
    </div>
  );
}

/** Progress ring. `value` 0–100. */
export function Donut({ value, size = 64, stroke = 7, className, children }) {
  const id = useId();
  const r = (size - stroke) / 2;
  return (
    <div className={cn("relative inline-grid place-items-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <defs>
          <linearGradient id={id}>
            <stop offset="0" style={{ stopColor: "var(--color-primary)" }} />
            <stop offset="1" style={{ stopColor: "var(--color-accent)" }} />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} className="stroke-fg/10" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: value / 100 }}
          viewport={view}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">{children}</div>
    </div>
  );
}
