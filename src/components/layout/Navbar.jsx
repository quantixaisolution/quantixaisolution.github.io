import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button, Container, Logo, ThemeSwitcher } from "@/components/ui";
import { useEscape, useLockBody, useScrolled } from "@/hooks";
import { cn } from "@/lib/cn";
import { brand, nav } from "@/data/site";

export function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  useLockBody(open);
  useEscape(close, open);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-line bg-bg/75 backdrop-blur-xl" : "border-b border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Logo markSrc={brand.mark} name={brand.name} subtitle={brand.subtitle} />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-fg/5 hover:text-fg">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Button href="#contact" size="sm" icon={ArrowRight} className="hidden sm:inline-flex">
            Hire us
          </Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-full text-fg hover:bg-fg/5 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  className="rounded-xl px-3 py-3 font-display text-2xl font-medium hover:bg-fg/5"
                >
                  {item.label}
                </motion.a>
              ))}
              <Button href="#contact" onClick={close} size="lg" icon={ArrowRight} className="mt-6">
                Hire us
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
