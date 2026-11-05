import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

const spring = { stiffness: 150, damping: 18, mass: 0.4 };

/**
 * 3D tilt that follows the cursor.
 * @example <TiltCard max={8}><Dashboard /></TiltCard>
 */
export function TiltCard({ max = 8, className, children }) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), spring);

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div style={{ perspective: 1200 }} className={className}>
      <motion.div onMouseMove={onMove} onMouseLeave={reset} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Pulls its child toward the cursor while hovered.
 * @example <Magnetic><Button>Hire us</Button></Magnetic>
 */
export function Magnetic({ strength = 0.3, className, children }) {
  const reduce = useReducedMotion();
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div onMouseMove={onMove} onMouseLeave={reset} style={{ x, y }} className={cn("inline-flex", className)}>
      {children}
    </motion.div>
  );
}

/** Gentle, endless floating motion. */
export function Float({ distance = 10, duration = 5, delay = 0, className, children }) {
  return (
    <motion.div
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Moves its content slower/faster than the page scroll.
 * Wrap an oversized child (e.g. an image with `scale-110`) to avoid gaps.
 */
export function Parallax({ offset = 60, className, children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y }} className="size-full">
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Headline that reveals word by word when scrolled into view.
 * @example <TextReveal as="h2" text="Hello world" className="text-5xl" />
 */
export function TextReveal({ text, as = "span", className, delay = 0 }) {
  const Comp = motion[as];
  const words = text.split(" ");
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      className={className}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.1em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "105%" },
              show: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {w}
            {i < words.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}
