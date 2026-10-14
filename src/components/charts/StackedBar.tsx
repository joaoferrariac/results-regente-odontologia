import { cn } from "@/lib/cn";
import { TONES } from "@/lib/tones";
import type { SpendBreakdown } from "@/types/report";

interface StackedBarProps extends SpendBreakdown {
  className?: string;
}

/** Share-of-spend bar. Slice widths are derived, never hard-coded. */
export function StackedBar({
  title,
  slices,
  totalLabel,
  totalDisplay,
  className,
}: StackedBarProps) {
  const total = slices.reduce((sum, slice) => sum + slice.amount, 0);

  return (
    <figure className={cn("m-0", className)}>
      <figcaption className="mb-6 text-sm font-medium text-ink">
        {title}
      </figcaption>

      <div className="flex h-2 w-full gap-1 overflow-hidden rounded-sm bg-paper-alt">
        {slices.map((slice, index) => (
          <div
            key={slice.creative}
            role="img"
            aria-label={`${slice.label}: ${slice.display}`}
            className={cn("h-full", TONES[slice.creative].fill)}
            style={{
              width: `${(slice.amount / total) * 100}%`,
              animationDelay: `${index * 90}ms`,
            }}
          />
        ))}
      </div>

      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        {slices.map((slice) => (
          <li
            key={slice.creative}
            className="inline-flex items-center gap-2 text-[13px] text-ink-soft"
          >
            <span
              aria-hidden
              className={cn("size-2 shrink-0 rounded-full", TONES[slice.creative].fill)}
            />
            {slice.label}
            <span className="tabular font-semibold text-ink">{slice.display}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 border-t border-rule pt-4 text-[14px] text-ink-soft">
        {totalLabel}:{" "}
        <strong className="tabular font-semibold text-navy">{totalDisplay}</strong>
      </p>
    </figure>
  );
}
