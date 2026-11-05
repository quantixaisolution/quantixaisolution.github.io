import { Quote } from "lucide-react";
import { Marquee, Section, SectionHeader } from "@/components/ui";
import { testimonials } from "@/data/site";

function TestimonialCard({ quote, name, role }) {
  const initials = name.split(" ").map((p) => p[0]).join("");
  return (
    <figure className="w-[22rem] shrink-0 rounded-2xl border border-line bg-surface/80 p-6">
      <Quote className="size-6 text-primary/60" aria-hidden />
      <blockquote className="mt-3 text-sm leading-relaxed text-fg/90">{quote}</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-on-primary">
          {initials}
        </span>
        <span>
          <span className="block text-sm font-medium">{name}</span>
          <span className="block text-xs text-muted">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  return (
    <Section id="testimonials" containerClassName="max-w-none px-0 sm:px-0 lg:px-0">
      <SectionHeader title="What clients say" className="px-4" />
      <div className="space-y-4">
        <Marquee duration={50}>
          {testimonials.slice(0, half).map((t) => <TestimonialCard key={t.name} {...t} />)}
        </Marquee>
        <Marquee duration={50} reverse>
          {testimonials.slice(half).map((t) => <TestimonialCard key={t.name} {...t} />)}
        </Marquee>
      </div>
    </Section>
  );
}
