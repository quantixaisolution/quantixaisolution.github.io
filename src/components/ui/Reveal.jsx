import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

const viewport = { once: true, margin: "-80px" };

/**
 * Animate children into view once when scrolled to.
 * @example <Reveal variants={scaleIn} delay={0.1}>...</Reveal>
 */
export function Reveal({ as = "div", variants = fadeUp, delay = 0, className, children, ...props }) {
  const Comp = motion[as];
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={variants}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </Comp>
  );
}

/** Parent that staggers its <RevealItem> children. */
export function RevealGroup({ as = "div", gap = 0.08, delay = 0, className, children, ...props }) {
  const Comp = motion[as];
  return (
    <Comp initial="hidden" whileInView="show" viewport={viewport} variants={stagger(gap, delay)} className={className} {...props}>
      {children}
    </Comp>
  );
}

/** Child of <RevealGroup>; inherits the parent's animation timing. */
export function RevealItem({ as = "div", variants = fadeUp, className, children, ...props }) {
  const Comp = motion[as];
  return (
    <Comp variants={variants} className={className} {...props}>
      {children}
    </Comp>
  );
}
