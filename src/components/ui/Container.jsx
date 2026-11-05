import { cn } from "@/lib/cn";

const sizes = { md: "max-w-4xl", lg: "max-w-6xl", xl: "max-w-7xl" };

/** Centered max-width wrapper with responsive gutters. */
export function Container({ as: Tag = "div", size = "xl", className, ...props }) {
  return <Tag className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)} {...props} />;
}
