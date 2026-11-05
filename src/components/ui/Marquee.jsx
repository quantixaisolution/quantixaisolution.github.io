import { cn } from "@/lib/cn";

/** Infinite horizontal scroller. Children are duplicated for a seamless loop. */
export function Marquee({ children, duration = 30, reverse = false, pauseOnHover = true, className }) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
      style={{ "--marquee-duration": `${duration}s` }}
    >
      <div
        className={cn(
          "flex w-max shrink-0 animate-marquee gap-4 pr-4",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        <div className="flex gap-4">{children}</div>
        <div aria-hidden className="flex gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}
