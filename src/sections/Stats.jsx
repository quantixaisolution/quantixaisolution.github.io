import { Container, Counter, GradientText, RevealGroup, RevealItem } from "@/components/ui";
import { stats } from "@/data/site";

export function Stats() {
  return (
    <section aria-label="Results in numbers" className="py-10">
      <Container>
        <RevealGroup className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-surface/60 lg:grid-cols-4">
          {stats.map((s, i) => (
            <RevealItem
              key={s.label}
              className={`p-8 text-center ${i % 2 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <GradientText className="font-display text-4xl font-semibold sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </GradientText>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
