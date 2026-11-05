import { ChartColumnBig, Database, Network, Sheet, TreeDeciduous, Users } from "lucide-react";
import { Container, Marquee } from "@/components/ui";
import { techStack } from "@/data/site";
import { techLogos } from "@/data/techLogos";

/** Generic icons for tools with no freely-licensed logo available. */
const fallbackIcons = {
  SQL: Database,
  "Power BI": ChartColumnBig,
  Excel: Sheet,
  XGBoost: TreeDeciduous,
  LangGraph: Network,
  CrewAI: Users,
};

function TechIcon({ name }) {
  const logo = techLogos[name];
  if (logo) {
    return (
      <svg
        viewBox={logo.viewBox}
        className="size-5 shrink-0"
        style={{ color: logo.color ?? "var(--color-fg)" }}
        fill="currentColor"
        aria-hidden
      >
        <path d={logo.path} />
      </svg>
    );
  }
  const Icon = fallbackIcons[name] ?? Database;
  return <Icon className="size-5 shrink-0 text-highlight" aria-hidden />;
}

function Pill({ name }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-2.5 pr-5 pl-4 text-sm font-medium whitespace-nowrap text-fg/80 transition-colors hover:border-fg/20 hover:text-fg">
      <TechIcon name={name} />
      {name}
    </span>
  );
}

export function TechMarquee() {
  const half = Math.ceil(techStack.length / 2);
  return (
    <section aria-label="Technologies we use" className="border-y border-line py-10">
      <Container>
        <p className="mb-6 text-center text-xs font-medium tracking-[0.2em] text-muted uppercase">
          Built with the tools that power modern AI
        </p>
      </Container>
      <div className="space-y-4">
        <Marquee duration={40}>
          {techStack.slice(0, half).map((t) => <Pill key={t} name={t} />)}
        </Marquee>
        <Marquee duration={40} reverse>
          {techStack.slice(half).map((t) => <Pill key={t} name={t} />)}
        </Marquee>
      </div>
    </section>
  );
}
