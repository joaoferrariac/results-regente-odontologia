import { cn } from "@/lib/cn";
import type { GaugeData } from "@/types/report";

interface FrequencyGaugeProps extends GaugeData {
  className?: string;
}

/**
 * Threshold gauge: the fill up to `threshold` reads as safe, the overshoot
 * between `threshold` and `value` reads as the alert tone.
 */
export function FrequencyGauge({
  label,
  value,
  threshold,
  max,
  valueLabel,
  thresholdLabel,
  minLabel,
  maxLabel,
  className,
}: FrequencyGaugeProps) {
  const toPct = (n: number) => Math.min(100, Math.max(0, (n / max) * 100));

  const thresholdPct = toPct(threshold);
  const valuePct = toPct(value);
  const overshootPct = Math.max(0, valuePct - thresholdPct);
  const isOver = value > threshold;

  return (
    <div
      className={cn("pt-9", className)}
      role="meter"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuetext={`${valueLabel}, ${thresholdLabel}`}
      aria-label={label}
    >
      <div className="relative h-2 w-full rounded-sm bg-rule">
        <div
          className="absolute inset-y-0 left-0 rounded-l-sm bg-navy-mid/70"
          style={{ width: `${Math.min(valuePct, thresholdPct)}%` }}
        />
        <div
          className={cn(
            "absolute inset-y-0 rounded-r-sm",
            isOver ? "bg-red" : "bg-navy-mid/70",
          )}
          style={{
            left: `${thresholdPct}%`,
            width: `${overshootPct}%`,
            animationDelay: "200ms",
          }}
        />

        {/* Threshold marker */}
        <span
          aria-hidden
          className="absolute -top-1 bottom-[-0.25rem] w-0.5 bg-navy"
          style={{ left: `${thresholdPct}%` }}
        />

        {/* Current-value callout */}
        <span
          aria-hidden
          className={cn(
            "tabular absolute -top-8 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold",
            isOver ? "text-red" : "text-navy",
          )}
          style={{ left: `${valuePct}%` }}
        >
          {valueLabel}
        </span>
      </div>

      <div className="tabular relative mt-2.5 h-4 text-[11px] text-ink-muted">
        <span className="absolute left-0">{minLabel}</span>
        <span
          className="absolute -translate-x-1/2 font-semibold text-navy"
          style={{ left: `${thresholdPct}%` }}
        >
          {thresholdLabel}
        </span>
        <span className="absolute right-0">{maxLabel}</span>
      </div>
    </div>
  );
}
