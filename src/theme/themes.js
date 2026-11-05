/**
 * Available themes. Colors live in src/index.css under [data-theme="<id>"].
 * To add a theme: add a CSS block there and an entry here.
 */
export const themes = [
  { id: "quantix", name: "Quantix", mode: "light" },
  { id: "aurora", name: "Aurora", mode: "light" },
  { id: "midnight", name: "Midnight", mode: "dark" },
  { id: "ocean", name: "Ocean", mode: "light" },
  { id: "sunset", name: "Sunset", mode: "light" },
  { id: "forest", name: "Forest", mode: "dark" },
  { id: "candy", name: "Candy", mode: "light" },
];

export const STORAGE_KEY = "quantix-theme";
export const DEFAULT_LIGHT = "quantix";
export const DEFAULT_DARK = "midnight";

export const isTheme = (id) => themes.some((t) => t.id === id);
