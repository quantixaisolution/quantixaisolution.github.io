import { cn } from "@/lib/cn";
import { Badge } from "./Badge";
import { Reveal } from "./Reveal";
import { TextReveal } from "./Motion";

/** Eyebrow + title + description block used at the top of sections. */
export function SectionHeader({ eyebrow, title, description, align = "center", className }) {
  return (
    <Reveal className={cn("mb-14 max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Badge className="mb-5">{eyebrow}</Badge>}
      {typeof title === "string" ? (
        <TextReveal as="h2" text={title} className="text-3xl font-semibold text-balance sm:text-5xl" />
      ) : (
        <h2 className="text-3xl font-semibold text-balance sm:text-5xl">{title}</h2>
      )}
      {description && <p className="mt-5 text-base text-pretty text-muted sm:text-lg">{description}</p>}
    </Reveal>
  );
}
