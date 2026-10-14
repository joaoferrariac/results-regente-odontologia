import { cn } from "@/lib/cn";
import type { Comparison, ComparisonVerdict } from "@/types/report";

interface ComparisonTableProps {
  comparison: Comparison;
}

const VERDICTS: Record<ComparisonVerdict, { label: string; badge: string; value: string }> = {
  better: { label: "Melhor", badge: "bg-green-soft text-green", value: "text-green" },
  same: { label: "Equivalente", badge: "bg-paper-alt text-ink-soft ring-1 ring-rule", value: "text-ink" },
  attention: { label: "Atenção", badge: "bg-red-soft text-red", value: "text-red" },
};

/**
 * Previous agency vs current management. A real `<table>` from `lg` up,
 * stacked cards below it.
 */
export function ComparisonTable({ comparison }: ComparisonTableProps) {
  return (
    <figure className="m-0">
      {/* Desktop */}
      <div className="hidden overflow-hidden border-y border-rule bg-surface lg:block">
        <table className="w-full border-collapse text-left text-[14.5px]">
          <caption className="sr-only">{comparison.subtitle}</caption>
          <thead>
            <tr className="border-b border-rule bg-paper-alt/50">
              {["Indicador", comparison.beforeLabel, comparison.nowLabel, "Leitura"].map((label) => (
                <th key={label} scope="col" className="px-4 py-3.5 text-[11px] font-medium text-ink-muted">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => {
              const verdict = VERDICTS[row.verdict];

              return (
                <tr key={row.metric} className="border-b border-rule align-top last:border-0">
                  <th scope="row" className="w-[26%] px-4 py-4 font-semibold text-ink">
                    {row.metric}
                  </th>
                  <td className="tabular w-[22%] px-4 py-4 text-ink-soft">{row.before}</td>
                  <td className={cn("tabular w-[20%] px-4 py-4 font-semibold", verdict.value)}>
                    {row.now}
                  </td>
                  <td className="px-4 py-4">
                    <span className={cn("inline-flex rounded-sm px-2 py-1 text-[11px] font-medium", verdict.badge)}>
                      {verdict.label}
                    </span>
                    <span className="mt-1.5 block text-[13px] leading-snug text-ink-soft">
                      {row.takeaway}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <ul className="space-y-4 lg:hidden">
        {comparison.rows.map((row) => {
          const verdict = VERDICTS[row.verdict];

          return (
            <li key={row.metric} className="border-t border-rule bg-surface py-5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold text-ink">{row.metric}</p>
                <span className={cn("shrink-0 rounded-sm px-2 py-1 text-[11px] font-medium", verdict.badge)}>
                  {verdict.label}
                </span>
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3.5">
                <div>
                  <dt className="text-[10.5px] font-medium text-ink-muted">{comparison.beforeLabel}</dt>
                  <dd className="tabular mt-1 text-[14px] font-medium text-ink-soft">{row.before}</dd>
                </div>
                <div>
                  <dt className="text-[10.5px] font-medium text-ink-muted">{comparison.nowLabel}</dt>
                  <dd className={cn("tabular mt-1 text-[14px] font-semibold", verdict.value)}>{row.now}</dd>
                </div>
              </dl>

              <p className="mt-3 text-[13px] leading-snug text-ink-soft">{row.takeaway}</p>
            </li>
          );
        })}
      </ul>

      <figcaption className="mt-6 max-w-3xl text-[13px] leading-relaxed text-ink-soft">
        {comparison.note}
      </figcaption>
    </figure>
  );
}
