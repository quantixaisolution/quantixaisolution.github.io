import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Accessible accordion.
 * @param items     [{ question, answer }]
 * @param multiple  allow several panels open at once
 */
export function Accordion({ items, multiple = false, defaultOpen = [0], className }) {
  const [open, setOpen] = useState(() => new Set(defaultOpen));
  const baseId = useId();

  const toggle = (i) =>
    setOpen((prev) => {
      const next = new Set(multiple ? prev : []);
      if (prev.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className={cn("divide-y divide-line rounded-2xl border border-line bg-surface/60", className)}>
      {items.map((item, i) => {
        const isOpen = open.has(i);
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-sans font-medium transition-colors hover:text-highlight"
              >
                {item.question}
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0 text-muted">
                  <Plus className="size-5" aria-hidden />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-muted">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
