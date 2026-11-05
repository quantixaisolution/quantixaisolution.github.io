import { Quote, Sparkles } from "lucide-react";
import { Float, GradientText, Parallax, Reveal, RevealGroup, RevealItem, Section, SmartImage, TextReveal } from "@/components/ui";
import { about } from "@/data/site";

function Collage() {
  const { main, secondary } = about.images;
  return (
    <div className="relative pb-16 sm:pr-16">
      <Parallax offset={30} className="aspect-[4/3] rounded-3xl border border-line shadow-2xl shadow-black/20">
        <SmartImage src={main.src} alt={main.alt} className="size-full scale-110" />
      </Parallax>

      <Reveal
        delay={0.2}
        className="absolute bottom-0 left-4 w-1/2 overflow-hidden rounded-2xl border-4 border-bg shadow-2xl shadow-black/30 sm:left-auto sm:right-0"
      >
        <SmartImage src={secondary.src} alt={secondary.alt} className="aspect-[4/3]" />
      </Reveal>

      <Float distance={8} duration={5} className="absolute -top-5 -left-3 sm:-left-6">
        <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur">
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-on-primary">
            <Sparkles className="size-5" aria-hidden />
          </span>
          <div>
            <p className="font-display text-xl leading-none font-semibold">8 practices</p>
            <p className="mt-1 text-xs text-muted">One accountable team</p>
          </div>
        </div>
      </Float>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Collage />
          </Reveal>

          <div>
            <TextReveal as="h2" text={about.title} className="text-3xl font-semibold text-balance sm:text-5xl" />
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg text-pretty text-muted">{about.description}</p>
            </Reveal>

            <RevealGroup className="mt-8 grid grid-cols-3 gap-3">
              {about.pillars.map((p) => (
                <RevealItem key={p.label} className="rounded-2xl border border-line bg-surface/60 p-4 transition-colors hover:border-primary/40">
                  <GradientText className="font-display text-base font-semibold sm:text-lg">{p.label}</GradientText>
                  <p className="mt-1 text-xs text-muted">{p.detail}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>

        {/* Mission banner */}
        <Reveal className="relative mt-20 overflow-hidden rounded-3xl bg-gradient-to-br from-primary/15 via-surface to-accent/10 p-px">
          <div className="relative rounded-[calc(1.5rem-1px)] bg-surface/80 px-6 py-12 text-center backdrop-blur sm:px-16 sm:py-16">
            <p className="text-xs font-semibold tracking-[0.25em] text-highlight uppercase">Our mission</p>
            <p className="mx-auto mt-5 max-w-4xl font-display text-2xl leading-snug font-medium text-balance sm:text-4xl">
              {about.mission}
            </p>
            <p className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-2 text-muted italic">
              <Quote className="size-4 shrink-0 text-primary" aria-hidden />
              {about.belief}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
