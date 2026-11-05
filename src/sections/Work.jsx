import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Card, Reveal, Section, SectionHeader, SmartImage, Tabs } from "@/components/ui";
import { caseStudies, workCategories } from "@/data/site";
import { cn } from "@/lib/cn";

const ROTATE_MS = 5000;

export function Work() {
  const [filter, setFilter] = useState(workCategories[0]);
  const items = caseStudies.filter((c) => c.category === filter);

  // Auto-rotation pauses while the visitor hovers/focuses the section or it's off-screen.
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <Section id="work">
      <SectionHeader
        title="Measurable results, not demos"
        description="A sample of engagements across pricing, analytics, AI and web — every one tied to a business metric."
      />
      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setFocused(false)}
      >
        <Reveal className="mb-10 flex justify-center">
          <Tabs
            tabs={workCategories}
            value={filter}
            onChange={setFilter}
            autoAdvance={ROTATE_MS}
            paused={hovered || focused || !inView}
            layoutId="work-tabs"
          />
        </Reveal>

        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((c) => (
              <motion.div
                key={c.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <Card className="flex h-full flex-col p-0">
                  <SmartImage src={c.image} alt="" zoom className="h-52 rounded-t-2xl">
                    <div className={cn("absolute inset-0 bg-gradient-to-br mix-blend-multiply", c.gradient)} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-surface/75 text-fg px-3 py-1 text-xs font-medium backdrop-blur">
                      {c.category}
                    </span>
                    <span className="absolute top-4 right-4 inline-flex size-9 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="size-4" aria-hidden />
                    </span>
                  </SmartImage>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs text-muted">{c.client}</p>
                    <h3 className="mt-1 text-xl font-semibold">{c.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted">{c.description}</p>
                    <p className="mt-5 flex items-center gap-2 rounded-xl bg-success/10 px-3 py-2 text-sm font-medium text-success">
                      <TrendingUp className="size-4 shrink-0" aria-hidden />
                      {c.result}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
