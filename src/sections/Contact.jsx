import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Mail, Send } from "lucide-react";
import { Button, Field, Glow, GradientText, Reveal, Section } from "@/components/ui";
import { brand, contact } from "@/data/site";

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function validate(data) {
  const errors = {};
  if (!data.name?.trim()) errors.name = "Please tell us your name.";
  if (!emailOk(data.email ?? "")) errors.email = "Enter a valid email address.";
  if ((data.message ?? "").trim().length < 10) errors.message = "A sentence or two helps us prepare.";
  return errors;
}

export function Contact() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    // No backend yet: open the visitor's mail client with the brief pre-filled.
    // Swap this for a POST to your API / Formspree / CRM when ready.
    const body = `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "-"}\nService: ${data.service}\nBudget: ${data.budget}\n\n${data.message}`;
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(`New project: ${data.service}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Section id="contact" className="overflow-hidden">
      <Glow className="bottom-0 left-1/2 h-96 w-[50rem] -translate-x-1/2 bg-primary-strong/20" />
      <div className="relative grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal>
          <h2 className="text-4xl font-semibold text-balance sm:text-5xl">
            {contact.title.split(" ").slice(0, -1).join(" ")} <GradientText>{contact.title.split(" ").at(-1)}</GradientText>
          </h2>
          <p className="mt-5 text-lg text-muted">{contact.description}</p>
          <a href={`mailto:${brand.email}`} className="mt-8 inline-flex items-center gap-3 text-fg transition-colors hover:text-highlight">
            <Mail className="size-5 text-primary" aria-hidden />
            {brand.email}
          </a>
        </Reveal>

        <Reveal delay={0.1} className="rounded-3xl border border-line bg-surface/80 p-6 backdrop-blur sm:p-8">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex min-h-80 flex-col items-center justify-center text-center"
                role="status"
              >
                <CheckCircle2 className="size-12 text-success" aria-hidden />
                <h3 className="mt-4 text-2xl font-semibold">Thanks — your email is ready to send.</h3>
                <p className="mt-2 text-muted">We reply within one business day.</p>
                <Button variant="ghost" className="mt-6" onClick={() => setSent(false)}>
                  Send another
                </Button>
              </motion.div>
            ) : (
              <motion.form key="form" noValidate onSubmit={onSubmit} exit={{ opacity: 0 }} className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" autoComplete="name" placeholder="Jane Doe" error={errors.name} />
                <Field label="Work email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" error={errors.email} />
                <Field label="Company" name="company" autoComplete="organization" placeholder="Optional" className="sm:col-span-2" />
                <Field as="select" label="What do you need?" name="service" defaultValue={contact.services[0]}>
                  {contact.services.map((s) => <option key={s}>{s}</option>)}
                </Field>
                <Field as="select" label="Budget" name="budget" defaultValue={contact.budgets.at(-1)}>
                  {contact.budgets.map((b) => <option key={b}>{b}</option>)}
                </Field>
                <Field
                  as="textarea"
                  label="Project details"
                  name="message"
                  placeholder="What problem should AI solve? Any timelines or data we should know about?"
                  className="sm:col-span-2"
                  error={errors.message}
                />
                <Button type="submit" size="lg" icon={Send} className="sm:col-span-2">
                  Send project brief
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </Section>
  );
}
