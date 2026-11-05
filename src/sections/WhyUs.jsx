import { Check, Minus, X } from "lucide-react";
import { Card, IconBox, Reveal, RevealGroup, RevealItem, Section, SectionHeader } from "@/components/ui";
import { comparison, guarantees } from "@/data/site";
import { cn } from "@/lib/cn";

function Cell({ value, highlight }) {
  if (value === true) return <Check className={cn("mx-auto size-5", highlight ? "text-success" : "text-fg/70")} aria-label="Yes" />;
  if (value === false) return <X className="mx-auto size-5 text-muted" aria-label="No" />;
  if (value === "Varies")
    return (
      <span className="inline-flex items-center gap-1 text-muted">
        <Minus className="size-4" aria-hidden /> Varies
      </span>
    );
  return <span className={highlight ? "font-medium text-fg" : "text-muted"}>{value}</span>;
}

export function WhyUs() {
  return (
    <Section id="why">
      <SectionHeader
        title="Better than hiring freelancers one by one"
        description="Marketplaces give you individuals. Hiring takes months. Quantix gives you a cross-functional team across technology, analytics and finance — ready in days."
      />

      <Reveal className="overflow-x-auto rounded-3xl border border-line bg-surface/60">
        <table className="w-full min-w-[640px] text-sm">
          <caption className="sr-only">Quantix compared with freelance marketplaces and in-house hiring</caption>
          <thead>
            <tr className="border-b border-line">
              <th scope="col" className="p-5 text-left font-medium text-muted">
                &nbsp;
              </th>
              {comparison.columns.map((c, i) => (
                <th
                  scope="col"
                  key={c}
                  className={cn("p-5 text-center font-display text-base font-semibold", i === 0 && "bg-primary/10 text-highlight")}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr key={row.label} className="border-b border-line last:border-0">
                <th scope="row" className="p-5 text-left font-normal text-fg/90">
                  {row.label}
                </th>
                {row.values.map((v, i) => (
                  <td key={i} className={cn("p-5 text-center", i === 0 && "bg-primary/10")}>
                    <Cell value={v} highlight={i === 0} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {guarantees.map((g) => (
          <RevealItem key={g.title}>
            <Card hover={false} className="h-full">
              <IconBox icon={g.icon} size="sm" />
              <h3 className="mt-4 font-sans font-semibold">{g.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{g.description}</p>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
