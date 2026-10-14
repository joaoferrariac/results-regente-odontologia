import { cn } from "@/lib/cn";
import { TONES } from "@/lib/tones";
import type { ChartTone } from "@/types/report";

export interface LegendItem {
  tone: ChartTone;
  label: string;
}

interface LegendProps {
  items: LegendItem[];
  className?: string;
}

/** Colour key shared by the funnel cards and the spend breakdown. */
export function Legend({ items, className }: LegendProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-5 gap-y-2", className)}>
      {items.map((item) => (
        <li
          key={item.label}
          className="inline-flex items-center gap-2 text-[13px] text-ink-soft"
        >
          <span
            aria-hidden
            className={cn("size-2 shrink-0 rounded-full", TONES[item.tone].fill)}
          />
          {item.label}
        </li>
      ))}
    </ul>
  );
}
