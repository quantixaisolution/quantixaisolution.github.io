import { MotionConfig } from "framer-motion";
import { BackToTop, Footer, Navbar, ScrollProgress } from "@/components/layout";
import { About, CTABanner, Contact, Industries, FAQ, Hero, Pricing, Process, Services, Stats, TechMarquee, Testimonials, WhyUs, Work } from "@/sections";

export default function App() {
  return (
    // reducedMotion="user" respects the OS "reduce motion" setting for every animation.
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-lg focus:bg-fg focus:px-4 focus:py-2 focus:text-bg">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <TechMarquee />
        <Services />
        <About />
        <Stats />
        <Industries />
        <Work />
        <Process />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <CTABanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  );
}
