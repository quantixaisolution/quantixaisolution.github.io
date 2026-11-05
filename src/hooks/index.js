import { useEffect, useState } from "react";

/** True once the page has scrolled past `offset` pixels. */
export function useScrolled(offset = 12) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return scrolled;
}

/** Prevent page scroll while `locked` is true (e.g. mobile menu open). */
export function useLockBody(locked) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

/** Close something when Escape is pressed. */
export function useEscape(onEscape, active = true) {
  useEffect(() => {
    if (!active) return;
    const fn = (e) => e.key === "Escape" && onEscape();
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onEscape, active]);
}
