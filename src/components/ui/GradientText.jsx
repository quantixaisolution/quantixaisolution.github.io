import { cn } from "@/lib/cn";

/** Inline text with the brand gradient fill. */
export function GradientText({ as: Tag = "span", className, ...props }) {
  return (
    <Tag
      className={cn(
        "bg-gradient-to-r from-highlight via-primary to-accent bg-clip-text text-transparent",
        className
      )}
      {...props}
    />
  );
}
