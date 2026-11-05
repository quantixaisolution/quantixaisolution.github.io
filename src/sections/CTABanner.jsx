import { ArrowRight, Mail } from "lucide-react";
import { Button, Container, Magnetic, Parallax, Reveal, SmartImage, TextReveal } from "@/components/ui";
import { cta } from "@/data/site";

/** Full-width photo banner with a theme-colored overlay. */
export function CTABanner() {
  return (
    <section aria-label="Get started" className="py-12 sm:py-16">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/20">
          <Parallax offset={50} className="absolute inset-0 -z-10">
            <SmartImage src={cta.image} alt="" className="size-full scale-125" />
          </Parallax>
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-strong/95 via-primary/85 to-accent/80 mix-blend-multiply" />
          <div className="absolute inset-0 -z-10 bg-black/30" />

          <div className="px-6 py-16 text-center text-white sm:px-16 sm:py-24">
            <TextReveal as="h2" text={cta.title} className="mx-auto max-w-3xl text-3xl font-semibold text-balance sm:text-5xl" />
            <p className="mx-auto mt-5 max-w-xl text-white/85 sm:text-lg">{cta.description}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Magnetic>
                <Button href={cta.primary.href} variant="light" size="lg" icon={ArrowRight}>
                  {cta.primary.label}
                </Button>
              </Magnetic>
              <Button href={cta.secondary.href} variant="glass" size="lg" iconLeft={Mail}>
                {cta.secondary.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
