import { useCallback, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Generic popover menu: a trigger button + an animated panel.
 * Closes on outside click, Escape, or when `close()` is called from children.
 *
 * @example
 * <Dropdown label="Theme" trigger={<Palette />}>
 *   {({ close }) => <button onClick={close}>Item</button>}
 * </Dropdown>
 */
export function Dropdown({ trigger, label, align = "right", className, panelClassName, children }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const panelId = useId();
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => !rootRef.current?.contains(e.target) && close();
    const onKey = (e) => {
      if (e.key === "Escape") {
        close();
        rootRef.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    // Move focus into the panel for keyboard users.
    requestAnimationFrame(() => rootRef.current?.querySelector('[role="menu"] [aria-checked="true"], [role="menu"] button')?.focus());
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  // Arrow-key navigation between menu items.
  const onPanelKey = (e) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const items = [...e.currentTarget.querySelectorAll('[role^="menuitem"]')];
    const i = items.indexOf(document.activeElement);
    const next =
      e.key === "Home" ? 0 : e.key === "End" ? items.length - 1 : (i + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
    items[next]?.focus();
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex size-10 items-center justify-center rounded-full text-fg ring-1 ring-line transition-colors ring-inset hover:bg-fg/5"
      >
        {trigger}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="menu"
            aria-label={label}
            onKeyDown={onPanelKey}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className={cn(
              "absolute top-full z-50 mt-2 min-w-64 rounded-2xl border border-line bg-surface p-2 shadow-2xl shadow-black/20",
              align === "right" ? "right-0 origin-top-right" : "left-0 origin-top-left",
              panelClassName
            )}
          >
            {typeof children === "function" ? children({ close }) : children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
