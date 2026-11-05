import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/** Number that counts up when scrolled into view. */
export function Counter({ to, from = 0, duration = 1.8, decimals = 0, prefix = "", suffix = "", className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    const format = (v) => `${prefix}${v.toFixed(decimals)}${suffix}`;
    if (reduce) {
      ref.current.textContent = format(to);
      return;
    }
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = format(v);
      },
    });
    return () => controls.stop();
  }, [inView, from, to, duration, decimals, prefix, suffix, reduce]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${from.toFixed(decimals)}${suffix}`}
    </span>
  );
}
