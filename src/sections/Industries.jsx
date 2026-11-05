import { Check } from "lucide-react";
import { RevealGroup, RevealItem, Section, SectionHeader, SmartImage } from "@/components/ui";
import { industries } from "@/data/site";

/** Photo cards; use cases slide up on hover (always visible on touch screens). */
export function Industries() {
  return (
    <Section id="industries">
      <SectionHeader
        title="Built for the way your industry works"
        description="We combine domain context with data and AI, so solutions fit your operations from day one."
      />
      <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind) => (
          <RevealItem key={ind.name}>
            <article tabIndex={0} className="group relative h-80 overflow-hidden rounded-3xl border border-line outline-none">
              <SmartImage src={ind.image} alt="" zoom className="absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5 transition-colors duration-500 group-hover:via-black/60" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25 backdrop-blur">
                  <ind.icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold">{ind.name}</h3>
                <ul className="grid transition-all duration-500 ease-out [@media(hover:hover)]:grid-rows-[0fr] [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:grid-rows-[1fr] [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:grid-rows-[1fr] [@media(hover:hover)]:group-focus-visible:opacity-100">
                  <li className="overflow-hidden">
                    <div className="space-y-1.5 pt-3">
                      {ind.uses.map((u) => (
                        <p key={u} className="flex items-center gap-2 text-sm text-white/85">
                          <Check className="size-4 text-white" aria-hidden />
                          {u}
                        </p>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
