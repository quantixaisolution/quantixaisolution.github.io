import { forwardRef, useId } from "react";
import { cn } from "@/lib/cn";

const base =
  "w-full rounded-xl border border-line bg-fg/[0.03] px-4 py-3 text-sm text-fg placeholder:text-muted/60 outline-none transition focus:border-primary focus:bg-fg/[0.05] focus:ring-4 focus:ring-primary/15";

/**
 * Labeled form control. `as` = "input" | "textarea" | "select".
 * @example <Field label="Email" type="email" name="email" required />
 */
export const Field = forwardRef(function Field({ label, as: Tag = "input", error, className, children, ...props }, ref) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-fg/90">
          {label}
        </label>
      )}
      <Tag
        ref={ref}
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={cn(base, Tag === "textarea" && "min-h-32 resize-y", Tag === "select" && "cursor-pointer [&>option]:bg-surface")}
        {...props}
      >
        {children}
      </Tag>
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
});
