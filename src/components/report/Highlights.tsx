import type { Highlight } from "@/types/report";

interface HighlightsProps {
  items: Highlight[];
}

/** Three headline metrics for the reading. Stacks on phones. */
export function Highlights({ items }: HighlightsProps) {
  return (
    <dl className="grid divide-y divide-rule border-y border-rule sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {items.map((item) => (
        <div
          key={item.label}
          className="py-7 sm:px-6 sm:py-8 sm:first:pl-0 sm:last:pr-0"
        >
          <dt className="text-xs text-ink-soft">{item.label}</dt>
          <dd className="mt-4">
            <span className="tabular block text-[42px] font-medium leading-none tracking-[-0.05em] text-ink lg:text-5xl">
              {item.value}
            </span>
            <span className="mt-2.5 block text-[13px] leading-relaxed text-ink-soft">
              {item.detail}
            </span>
            {item.positive ? (
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-sm bg-green-soft px-2 py-1 text-[12px] font-medium text-green">
                <span aria-hidden>✓</span>
                {item.positive}
              </span>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}
