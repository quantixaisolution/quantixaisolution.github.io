import { Accordion, Reveal, Section, SectionHeader } from "@/components/ui";
import { faqs } from "@/data/site";

export function FAQ() {
  return (
    <Section id="faq" size="md">
      <SectionHeader title="Questions, answered" />
      <Reveal>
        <Accordion items={faqs} />
      </Reveal>
    </Section>
  );
}
