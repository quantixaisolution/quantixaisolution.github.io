import { Check, Palette } from "lucide-react";
import { useTheme } from "@/theme";
import { cn } from "@/lib/cn";
import { Dropdown } from "./Dropdown";

/**
 * Theme picker. Each swatch renders inside its own [data-theme] scope,
 * so it shows that theme's real colors straight from the CSS — no duplication.
 */
export function ThemeSwitcher({ className }) {
  const { theme, setTheme, themes } = useTheme();

  return (
    <Dropdown label="Change theme" trigger={<Palette className="size-[18px]" aria-hidden />} className={className}>
      {({ close }) => (
        <>
          <p className="px-3 pt-2 pb-2 text-xs font-semibold tracking-widest text-muted uppercase">Theme</p>
          {themes.map((t) => {
            const active = t.id === theme;
            return (
              <button
                key={t.id}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => {
                  setTheme(t.id);
                  close();
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left outline-none transition-colors hover:bg-fg/5 focus-visible:bg-fg/5",
                  active && "bg-primary/10 hover:bg-primary/10"
                )}
              >
                <span
                  data-theme={t.id}
                  aria-hidden
                  className="size-7 shrink-0 rounded-lg bg-gradient-to-br from-primary to-accent shadow-sm ring-1 ring-black/5"
                />
                <span className="flex-1 font-medium text-fg">{t.name}</span>
                <span className="text-xs text-muted capitalize">{t.mode}</span>
                <Check className={cn("size-4 text-fg", active ? "opacity-100" : "opacity-0")} aria-hidden />
              </button>
            );
          })}
        </>
      )}
    </Dropdown>
  );
}
