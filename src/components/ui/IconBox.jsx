import { cn } from "@/lib/cn";

const sizes = {
  sm: "size-9 [&>svg]:size-4",
  md: "size-11 [&>svg]:size-5",
  lg: "size-14 [&>svg]:size-6",
};

/** Rounded square that frames a lucide icon. */
export function IconBox({ icon: Icon, size = "md", className }) {
  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-highlight ring-1 ring-primary/20 ring-inset",
        sizes[size],
        className
      )}
    >
      <Icon aria-hidden />
    </div>
  );
}
