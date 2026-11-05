import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Bot, Check, CircleCheck, Play, TrendingUp } from "lucide-react";
import {
  BarChart,
  Button,
  Container,
  Donut,
  Float,
  Glow,
  GradientText,
  GridBackground,
  Magnetic,
  RevealGroup,
  RevealItem,
  Sparkline,
  TiltCard,
} from "@/components/ui";
import { hero } from "@/data/site";

function RotatingWords({ words, interval = 2600 }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduce]);

  // An invisible copy of the longest phrase reserves height, so wrapped lines never clip.
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");
  return (
    <span className="relative block overflow-hidden">
      <span aria-hidden className="invisible block">{longest}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 top-0"
        >
          <GradientText>{words[i]}</GradientText>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const kpis = [
  { label: "Revenue", value: "$2.4M", delta: "+12.4%" },
  { label: "Gross margin", value: "38.2%", delta: "+6.5%" },
  { label: "Cost / order", value: "$4.10", delta: "−9.1%" },
];
const revenue = [32, 38, 35, 44, 41, 50, 47, 58, 55, 63, 61, 74];

const floatCard = "rounded-2xl border border-line bg-surface/90 p-4 shadow-xl shadow-black/10 backdrop-blur-md";

/** Animated analytics dashboard composite with floating insight cards. */
function HeroVisual({ lines }) {
  return (
    <div className="relative mx-auto w-full max-w-xl pt-6 pb-6 sm:pt-16 sm:pb-10 lg:max-w-none">
      <Glow className="inset-10 bg-primary/25" />

      <TiltCard max={6}>
        <div className="relative rounded-3xl border border-line bg-surface/90 p-5 shadow-2xl shadow-primary/10 backdrop-blur-xl sm:p-6">
          {/* header */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-rose-400/80" />
              <span className="size-2.5 rounded-full bg-amber-400/80" />
              <span className="size-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-2 text-sm font-medium">Revenue Intelligence</span>
            </div>
          </div>

          {/* KPIs */}
          <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-xl border border-line bg-fg/[0.03] p-3">
                <p className="truncate text-[11px] text-muted">{k.label}</p>
                <p className="mt-1 font-display text-base font-semibold sm:text-xl">{k.value}</p>
                <p className="mt-0.5 text-[11px] font-medium text-success">{k.delta}</p>
              </div>
            ))}
          </div>

          {/* chart */}
          <div className="mt-4 rounded-xl border border-line bg-fg/[0.02] p-4">
            <div className="mb-3 flex items-center justify-between text-xs">
              <span className="text-muted">Monthly revenue</span>
              <span className="inline-flex items-center gap-1 font-medium text-success">
                <TrendingUp className="size-3.5" aria-hidden /> Forecast on track
              </span>
            </div>
            <BarChart data={revenue} className="h-24 sm:h-28" />
          </div>

          {/* activity feed */}
          <RevealGroup gap={0.3} delay={0.8} className="mt-4 space-y-2 font-mono text-[11px] sm:text-xs">
            {lines.map((l) => (
              <RevealItem key={l.k} variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } }} className="flex gap-2.5 truncate">
                <span className="text-highlight">❯ {l.k}</span>
                <span className="truncate text-fg/80">{l.v}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </TiltCard>

      {/* floating insight cards */}
      <Float distance={10} duration={6} className="absolute top-[46%] -left-4 z-10 hidden w-48 sm:block lg:-left-12">
        <div className={floatCard}>
          <p className="text-xs text-muted">Pricing uplift</p>
          <p className="font-display text-2xl font-semibold">
            <GradientText>+6.5%</GradientText>
          </p>
          <Sparkline data={[3, 4, 3.5, 5, 4.6, 6, 5.8, 7.2]} className="mt-1 h-8" />
        </div>
      </Float>

      <Float distance={8} duration={5} delay={1} className="absolute top-0 right-6 z-10 hidden sm:block lg:right-10">
        <div className={`${floatCard} flex items-center gap-3`}>
          <Donut value={94} size={52} stroke={6}>
            <span className="text-xs font-semibold">94%</span>
          </Donut>
          <div>
            <p className="text-xs text-muted">Forecast</p>
            <p className="text-sm font-semibold">accuracy</p>
          </div>
        </div>
      </Float>

      <Float distance={12} duration={7} delay={0.5} className="absolute -right-2 bottom-0 z-10 hidden w-64 sm:block lg:-right-10">
        <div className={floatCard}>
          <div className="flex items-center gap-2">
            <span className="inline-flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-on-primary">
              <Bot className="size-4" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold">Finance Agent</p>
              <p className="text-[11px] text-muted">just now</p>
            </div>
          </div>
          <p className="mt-3 flex items-start gap-1.5 text-xs text-fg/85">
            <CircleCheck className="mt-px size-3.5 shrink-0 text-success" aria-hidden />
            Reconciled 1,248 transactions and flagged 3 anomalies for review.
          </p>
        </div>
      </Float>
    </div>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      <GridBackground />
      <Glow className="top-[-12rem] left-1/2 h-[34rem] w-[64rem] -translate-x-1/2 bg-primary-strong/25" />
      <Glow className="top-40 right-[-10rem] h-96 w-96 bg-accent/20" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <motion.div style={{ y, opacity }} className="text-center lg:text-left">
          <RevealGroup gap={0.1}>
            <RevealItem as="h1" className="text-4xl leading-[1.08] font-semibold sm:text-6xl xl:text-7xl">
              {hero.titleStart}
              <RotatingWords words={hero.titleRotating} />
            </RevealItem>
            <RevealItem as="p" className="mx-auto mt-6 max-w-xl text-base text-pretty text-muted sm:text-lg lg:mx-0">
              {hero.description}
            </RevealItem>
            <RevealItem className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Magnetic>
                <Button href={hero.primaryCta.href} size="lg" icon={ArrowRight}>
                  {hero.primaryCta.label}
                </Button>
              </Magnetic>
              <Button href={hero.secondaryCta.href} size="lg" variant="secondary" iconLeft={Play}>
                {hero.secondaryCta.label}
              </Button>
            </RevealItem>
            <RevealItem as="ul" className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted lg:justify-start">
              {hero.trust.map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <Check className="size-4 text-success" aria-hidden />
                  {t}
                </li>
              ))}
            </RevealItem>
          </RevealGroup>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <HeroVisual lines={hero.console} />
        </motion.div>
      </Container>
    </section>
  );
}
