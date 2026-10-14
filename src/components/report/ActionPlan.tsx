import { cn } from "@/lib/cn";
import { Pill } from "@/components/ui/Pill";
import type { ActionItem } from "@/types/report";

interface ActionPlanProps {
  items: ActionItem[];
}

/** Ordered list — priority is semantic here, not just visual. */
export function ActionPlan({ items }: ActionPlanProps) {
  return (
    <ol className="divide-y divide-rule border-t border-rule">
      {items.map((item, index) => (
        <li
          key={item.title}
          className={cn(
            "flex gap-5 py-6 sm:gap-8 sm:py-7",
            item.urgent ? "text-red" : "text-ink-muted",
          )}
        >
          <span
            aria-hidden
            className={cn(
              "tabular w-6 shrink-0 pt-0.5 text-sm",
              item.urgent ? "text-red" : "text-ink-muted",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="min-w-0">
            <h3 className="flex flex-wrap items-center gap-x-3 gap-y-2 text-base font-medium leading-snug text-navy sm:text-base">
              {item.title}
              {item.urgent ? <Pill variant="alert">urgente</Pill> : null}
            </h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
