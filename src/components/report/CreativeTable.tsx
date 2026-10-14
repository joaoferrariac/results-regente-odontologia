import { cn } from "@/lib/cn";
import { TONES } from "@/lib/tones";
import type { CreativeRow, CreativeTable as CreativeTableData } from "@/types/report";

interface CreativeTableProps {
  table: CreativeTableData;
}

/** Column order, declared once and reused by both the table and the cards. */
const COLUMNS = [
  { key: "invested", label: "Investido" },
  { key: "impressions", label: "Impressões" },
  { key: "frequency", label: "Repetição" },
  { key: "thruPlays", label: "ThruPlays" },
  { key: "costPerThruPlay", label: "Custo por ThruPlay" },
  { key: "completion", label: "Assistem até o fim" },
] as const satisfies ReadonlyArray<{ key: keyof CreativeRow; label: string }>;

/**
 * Colour for cells that carry a signal: red for the metric needing attention,
 * green for positive results. `null` means the cell keeps its default ink.
 */
function signalTone(row: CreativeRow, key: keyof CreativeRow): string | null {
  if (row.attention && key === "frequency") return "text-red";
  if (row.positiveResult && (key === "costPerThruPlay" || key === "completion")) return "text-green";
  return null;
}

/**
 * Renders as a real `<table>` from `lg` up and as stacked definition cards
 * below it — a horizontally scrolling seven-column table is unusable on a phone.
 */
export function CreativeTable({ table }: CreativeTableProps) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden overflow-hidden border-y border-rule bg-surface lg:block">
        <table className="w-full border-collapse text-left text-[14.5px]">
          <caption className="sr-only">{table.subtitle}</caption>
          <thead>
            <tr className="border-b border-rule bg-paper-alt/50">
              <th
                scope="col"
                className="px-4 py-3.5 text-[11px] font-medium text-ink-muted"
              >
                Vídeo
              </th>
              {COLUMNS.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="px-4 py-3.5 text-[11px] font-medium text-ink-muted"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr
                key={row.creative}
                className={cn(
                  "border-b border-rule last:border-0",
                  row.attention && "bg-paper-alt/70",
                )}
              >
                <th scope="row" className="px-4 py-4 font-semibold text-ink">
                  <span className="inline-flex items-center gap-2.5">
                    <span
                      aria-hidden
                      className={cn("size-2 shrink-0 rounded-full", TONES[row.creative].fill)}
                    />
                    <span>
                      {row.name}
                      <span className="block text-[12px] font-normal text-ink-muted">
                        {row.duration}
                      </span>
                    </span>
                  </span>
                </th>
                {COLUMNS.map((column) => (
                  <td
                    key={column.key}
                    className={cn(
                      "tabular px-4 py-4",
                      signalTone(row, column.key) ??
                        (column.key === "thruPlays" ? "text-ink" : "text-ink-soft"),
                      (column.key === "thruPlays" || signalTone(row, column.key)) &&
                        "font-semibold",
                    )}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <ul className="space-y-4 lg:hidden">
        {table.rows.map((row) => (
          <li key={row.creative} className="border-t border-rule bg-surface py-5">
            <p className="flex items-center gap-2.5 font-semibold text-ink">
              <span
                aria-hidden
                className={cn("size-2 shrink-0 rounded-full", TONES[row.creative].fill)}
              />
              {row.name}
              <span className="text-[12px] font-normal text-ink-muted">
                {row.duration}
              </span>
            </p>

            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3.5">
              {COLUMNS.map((column) => (
                <div key={column.key}>
                  <dt className="text-[10.5px] font-medium text-ink-muted">
                    {column.label}
                  </dt>
                  <dd
                    className={cn(
                      "tabular mt-1 text-[14px] font-medium",
                      signalTone(row, column.key) ?? "text-ink",
                    )}
                  >
                    {row[column.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
