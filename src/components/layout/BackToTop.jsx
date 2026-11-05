import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrolled } from "@/hooks";

/** Floating button that appears after scrolling and returns to the top. */
export function BackToTop() {
  const show = useScrolled(900);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -3 }}
          className="fixed right-5 bottom-5 z-40 inline-flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-on-primary shadow-lg shadow-primary/30"
        >
          <ArrowUp className="size-5" aria-hidden />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
