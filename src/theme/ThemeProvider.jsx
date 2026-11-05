import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_DARK, DEFAULT_LIGHT, STORAGE_KEY, isTheme, themes } from "./themes";

const ThemeContext = createContext(null);

function initialTheme() {
  // index.html sets data-theme before first paint (no flash); reuse it.
  const fromDom = document.documentElement.dataset.theme;
  if (isTheme(fromDom)) return fromDom;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? DEFAULT_LIGHT : DEFAULT_DARK;
}

/** Provides { theme, setTheme, themes } and applies the theme to <html>. */
export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(initialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    // Keep the mobile browser UI color in sync with the page background.
    const bg = getComputedStyle(root).getPropertyValue("--color-bg").trim();
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", bg);
  }, [theme]);

  const setTheme = useCallback((id) => {
    if (!isTheme(id)) return;
    setThemeState(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* storage unavailable (private mode) — theme still applies for this visit */
    }
  }, []);

  const value = useMemo(() => ({ theme, setTheme, themes }), [theme, setTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
