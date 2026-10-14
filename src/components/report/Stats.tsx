import type { Stat } from "@/types/report";

interface StatsProps {
  stats: Stat[];
}

/** Row of plain numbers. Two columns on phones, one row from `sm` up. */
export function Stats({ stats }: StatsProps) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-7 border-y border-rule py-7 sm:grid-cols-4 sm:py-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="text-xs text-ink-soft">{stat.label}</dt>
          <dd className="mt-3">
            <span className="tabular block text-[34px] font-medium leading-none tracking-[-0.04em] text-ink">
              {stat.value}
            </span>
            {stat.detail ? (
              <span className="mt-2 block text-[12px] leading-relaxed text-ink-muted">
                {stat.detail}
              </span>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}
