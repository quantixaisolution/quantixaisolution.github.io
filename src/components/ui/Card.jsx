import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Surface card. `spotlight` adds a cursor-following glow; `hover` lifts it on hover.
 */
export function Card({ spotlight = false, hover = true, className, children, ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const background = useMotionTemplate`radial-gradient(320px circle at ${x}px ${y}px, color-mix(in oklab, var(--color-primary) 18%, transparent), transparent 70%)`;

  const onMove = (e) => {
    if (!spotlight || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  const onLeave = () => {
    x.set(-400);
    y.set(-400);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 transition-colors duration-300 hover:border-fg/15",
        className
      )}
      {...props}
    >
      {spotlight && <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background }} />}
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
