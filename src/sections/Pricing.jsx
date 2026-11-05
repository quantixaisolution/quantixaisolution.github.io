import { ArrowRight, Check } from "lucide-react";
import { Button, Card, RevealGroup, RevealItem, Section, SectionHeader } from "@/components/ui";
import { pricing } from "@/data/site";
import { cn } from "@/lib/cn";

export function Pricing() {
  return (
    <Section id="pricing" size="lg">
      <SectionHeader
        title="Flexible ways to work together"
        description="Start with a focused sprint, deliver a full project, or keep us on as your analytics, finance and AI partner. No platform fees."
      />
      <RevealGroup className="grid items-stretch gap-5 lg:grid-cols-3">
        {pricing.map((p) => (
          <RevealItem key={p.name}>
            <Card
              hover={!p.featured}
              className={cn(
                "flex h-full flex-col p-8",
                p.featured && "border-primary/50 bg-gradient-to-b from-primary/15 to-surface lg:-my-4 lg:py-12"
              )}
            >
              <div className="flex h-full flex-col">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-semibold">{p.price}</span>
                  <span className="text-sm text-muted">{p.unit}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-highlight" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="#contact" variant={p.featured ? "primary" : "secondary"} icon={ArrowRight} className="mt-8 w-full">
                  {p.cta}
                </Button>
              </div>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
