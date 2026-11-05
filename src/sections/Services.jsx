import { ArrowUpRight } from "lucide-react";
import { Card, IconBox, RevealGroup, RevealItem, Section, SectionHeader, SmartImage } from "@/components/ui";
import { services } from "@/data/site";

export function Services() {
  return (
    <Section id="services">
      <SectionHeader
        title="From pricing to AI agents — one accountable team"
        description="Skip the search for separate analysts, data scientists, AI engineers, accountants and developers. We cover it all."
      />
      <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <RevealItem key={s.title}>
            <Card spotlight className="flex h-full flex-col p-0">
              <SmartImage src={s.image} alt="" zoom className="h-40 rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                <span className="absolute top-3 right-3 rounded-full bg-surface/80 px-2.5 py-1 font-mono text-[11px] text-muted backdrop-blur">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </SmartImage>
              <div className="relative -mt-7 flex flex-1 flex-col px-6 pb-6">
                <IconBox icon={s.icon} className="bg-surface shadow-lg shadow-black/10" />
                <h3 className="mt-4 flex items-start justify-between gap-2 text-lg font-semibold">
                  {s.title}
                  <ArrowUpRight
                    className="mt-1 size-4 shrink-0 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-highlight group-hover:opacity-100"
                    aria-hidden
                  />
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">{s.description}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-md bg-fg/5 px-2 py-0.5 text-xs text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
