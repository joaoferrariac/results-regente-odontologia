import { cn } from "@/lib/cn";
import { TONES } from "@/lib/tones";
import type { BarChartData } from "@/types/report";

interface HorizontalBarChartProps extends BarChartData {
  className?: string;
}

/**
 * Horizontal bar chart built from layout primitives — no charting library.
 *
 * Layout: a single row collapses to `label over bar` on phones and expands to a
 * `label | track | value` grid from `sm` up. Gridlines are painted behind the
 * track so they line up with the axis ticks at every breakpoint.
 */
export function HorizontalBarChart({
  title,
  data,
  max,
  ticks,
  note,
  className,
}: HorizontalBarChartProps) {
  // Interior gridlines only: the 0 and max lines are the track's own edges.
  const gridlines = ticks.slice(1, -1).map((_, index) => ((index + 1) / (ticks.length - 1)) * 100);

  return (
    <figure className={cn("m-0", className)}>
      {title ? (
        <figcaption className="mb-6 text-sm font-medium text-ink">
          {title}
        </figcaption>
      ) : null}

      <div className="py-2">
        <ul className="space-y-5 sm:space-y-6">
          {data.map((datum, index) => {
            const pct = Math.min(100, (datum.value / max) * 100);

            return (
              <li
                key={datum.label}
                className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 sm:grid-cols-[minmax(7.5rem,9.5rem)_1fr_auto] sm:gap-y-0"
              >
                <div className="min-w-0 text-[13px] font-semibold leading-tight text-ink sm:text-sm">
                  {datum.label}
                  {datum.sublabel ? (
                    <span className="block text-[12px] font-normal text-ink-muted">
                      {datum.sublabel}
                    </span>
                  ) : null}
                </div>

                {/* Value sits beside the label on mobile, after the track on desktop. */}
                <div className="tabular text-right text-[13px] font-semibold text-ink sm:order-3 sm:min-w-20 sm:text-sm">
                  {datum.display}
                </div>

                <div className="relative col-span-2 h-2 overflow-hidden rounded-sm bg-paper-alt sm:col-span-1 sm:order-2 sm:h-2">
                  {gridlines.map((left) => (
                    <span
                      key={left}
                      aria-hidden
                      className="absolute inset-y-0 w-px bg-rule-strong/70"
                      style={{ left: `${left}%` }}
                    />
                  ))}
                  <div
                    role="img"
                    aria-label={`${datum.label}: ${datum.display}`}
                    className={cn(
                      "relative h-full rounded-sm",
                      TONES[datum.tone].fill,
                    )}
                    style={{
                      width: `${pct}%`,
                      animationDelay: `${index * 90}ms`,
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>

        {/* Axis — hidden on the narrowest screens where ticks would collide. */}
        <div className="mt-5 hidden sm:grid sm:grid-cols-[minmax(7.5rem,9.5rem)_1fr_auto]">
          <div />
          <div className="tabular relative h-4 border-t border-rule pt-2 text-[11px] text-ink-muted">
            {ticks.map((tick, index) => {
              const isFirst = index === 0;
              const isLast = index === ticks.length - 1;

              return (
                <span
                  key={tick}
                  className={cn(
                    "absolute top-2 whitespace-nowrap",
                    !isFirst && !isLast && "-translate-x-1/2",
                    isLast && "-translate-x-full",
                  )}
                  style={{ left: `${(index / (ticks.length - 1)) * 100}%` }}
                >
                  {tick}
                </span>
              );
            })}
          </div>
          <div className="sm:min-w-20" />
        </div>
      </div>

      {note ? (
        <p className="mt-6 max-w-3xl text-[13px] leading-relaxed text-ink-soft">
          {note}
        </p>
      ) : null}
    </figure>
  );
}
