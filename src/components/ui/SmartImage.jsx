import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Lazy image that fades/blurs in once loaded. Fills its wrapper (object-cover).
 * Children render on top — use them for gradient overlays or captions.
 *
 * @param zoom      scale up on hover of the nearest `.group` ancestor
 * @param priority  load eagerly (above-the-fold images)
 * @example <SmartImage src="/images/a.webp" alt="…" className="aspect-video rounded-2xl" zoom />
 */
export function SmartImage({ src, alt, className, imgClassName, zoom = false, priority = false, children, ...props }) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // Cached images can finish before React attaches onLoad.
  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth) setLoaded(true);
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden bg-fg/5", className)}>
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "absolute inset-0 size-full object-cover transition-[opacity,transform,filter] duration-700 ease-out",
          loaded ? "opacity-100 blur-0" : "scale-105 opacity-0 blur-md",
          zoom && "group-hover:scale-110",
          imgClassName
        )}
        {...props}
      />
      {children}
    </div>
  );
}
