import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-gradient-to-r from-primary to-accent text-on-primary shadow-[0_8px_30px_-8px_color-mix(in_oklab,var(--color-primary)_70%,transparent)] hover:shadow-[0_10px_40px_-6px_color-mix(in_oklab,var(--color-primary)_90%,transparent)]",
  secondary: "bg-fg/5 text-fg ring-1 ring-inset ring-line hover:bg-fg/10",
  ghost: "text-muted hover:text-fg hover:bg-fg/5",
  inverse: "bg-fg text-bg hover:bg-fg/90",
  /** For use on photos / colored panels, independent of theme. */
  light: "bg-white text-neutral-900 shadow-lg shadow-black/20 hover:bg-white/90",
  glass: "bg-white/10 text-white ring-1 ring-inset ring-white/30 backdrop-blur hover:bg-white/20",
};

const sizes = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-13 px-7 text-base gap-2",
};

/**
 * Polymorphic animated button. Renders <a> when `href` is set.
 * @example <Button href="#contact" icon={ArrowRight}>Start a project</Button>
 */
export const Button = forwardRef(function Button(
  { href, variant = "primary", size = "md", icon: Icon, iconLeft: IconLeft, className, children, ...props },
  ref
) {
  const Comp = href ? motion.a : motion.button;
  return (
    <Comp
      ref={ref}
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "group inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap transition-[background,box-shadow,color] duration-300 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {IconLeft && <IconLeft className="size-4" aria-hidden />}
      {children}
      {Icon && <Icon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />}
    </Comp>
  );
});
