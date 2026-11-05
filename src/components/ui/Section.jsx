import { cn } from "@/lib/cn";
import { Container } from "./Container";

/** Page section with consistent vertical rhythm and an anchor id. */
export function Section({ id, className, containerClassName, size, children, ...props }) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)} {...props}>
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
