import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Pill tab switcher with an animated active indicator. Controlled component.
 *
 * @param tabs         string[] | { value, label }[]
 * @param autoAdvance  ms per tab; when set, shows a progress bar on the active
 *                     tab and moves to the next tab when it fills (loops).
 * @param paused       pause auto-advance (e.g. while hovered or off-screen)
 *
 * @example <Tabs tabs={["A","B"]} value={v} onChange={setV} autoAdvance={5000} paused={hovered} />
 */
export function Tabs({ tabs, value, onChange, autoAdvance, paused = false, layoutId = "tabs-pill", className }) {
  const reduce = useReducedMotion();
  const list = tabs.map((t) => (typeof t === "string" ? { value: t, label: t } : t));
  const auto = autoAdvance && !reduce;

  const next = () => {
    const i = list.findIndex((t) => t.value === value);
    onChange(list[(i + 1) % list.length].value);
  };

  return (
    <div
      role="tablist"
      className={cn("inline-flex flex-wrap justify-center gap-1 rounded-3xl border border-line bg-surface/70 p-1", className)}
    >
      {list.map((t) => {
        const active = t.value === value;
        return (
          <button
            key={t.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(t.value)}
            className={cn(
              "relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active ? "text-on-primary" : "text-muted hover:text-fg"
            )}
          >
            {active && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-strong"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {active && auto && (
              // CSS animation = the timer: pausing it pauses the countdown; its end advances the tab.
              <span aria-hidden className="absolute inset-x-4 bottom-1 h-0.5 overflow-hidden rounded-full bg-on-primary/25">
                <span
                  key={t.value}
                  onAnimationEnd={next}
                  className="block h-full origin-left rounded-full bg-on-primary/90"
                  style={{
                    animation: `tab-progress ${autoAdvance}ms linear forwards`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              </span>
            )}
            <span className="relative">{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}
