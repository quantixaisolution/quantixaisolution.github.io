import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { IconBox, RevealGroup, RevealItem, Section, SectionHeader } from "@/components/ui";
import { process } from "@/data/site";

export function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });

  return (
    <Section id="process" size="lg">
      <SectionHeader
        title="From challenge to solution in weeks"
        description="A transparent, milestone-based process. You see progress every couple of weeks and always know what's next."
      />
      <div ref={ref} className="relative">
        {/* progress rail */}
        <div className="absolute top-0 bottom-0 left-[1.375rem] w-px bg-line md:left-1/2" aria-hidden />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 bottom-0 left-[1.375rem] w-px origin-top bg-gradient-to-b from-primary to-accent md:left-1/2"
          aria-hidden
        />
        <RevealGroup as="ol" gap={0.15} className="space-y-12">
          {process.map((step, i) => (
            <RevealItem
              as="li"
              key={step.title}
              className={`relative grid items-center gap-6 pl-16 md:grid-cols-2 md:pl-0 ${i % 2 ? "" : "md:[&>div:first-of-type]:col-start-2"}`}
            >
              <div className={i % 2 ? "md:pr-16 md:text-right" : "md:row-start-1 md:pl-16"}>
                <span className="text-xs font-medium tracking-widest text-highlight uppercase">
                  Step {i + 1} · {step.duration}
                </span>
                <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted">{step.description}</p>
              </div>
              <div className="absolute top-0 left-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                <IconBox icon={step.icon} className="bg-surface ring-primary/40" />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
