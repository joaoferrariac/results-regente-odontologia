/**
 * Domain model for the paid-media performance report.
 *
 * The page is a pure projection of these types: every number, label and piece
 * of copy rendered on screen comes from `src/data/report.ts`. Swapping in a new
 * reading should never require touching a component.
 */

/**
 * Phase 1 runs a single top-of-funnel campaign with three videos, so the
 * creative — not the funnel stage — is what carries a colour across charts.
 */
export type Creative = "familia" | "estetica" | "perda";

/** Non-creative accents used by comparison charts. */
export type ChartTone = Creative | "neutral" | "highlight";

export interface ReportMeta {
  /** Client / account the report belongs to. */
  client: string;
  /** Human label for what the report covers. */
  title: string;
  /** e.g. "Dia 7 de veiculação". */
  period: string;
  /** e.g. "08 a 14/10/2026". */
  range: string;
}

export interface Hero {
  headline: string;
  lead: string;
}

export interface Highlight {
  /** Short label above the figure. */
  label: string;
  /** Headline number, already formatted for pt-BR. */
  value: string;
  /** Supporting detail under the figure. */
  detail: string;
  /** Optional positive takeaway, rendered in the positive tone. */
  positive?: string;
}

export interface BarDatum {
  label: string;
  /** Optional second line under the label. */
  sublabel?: string;
  /** Raw value, used to compute bar width against `max`. */
  value: number;
  /** Formatted value shown at the end of the row. */
  display: string;
  tone: ChartTone;
}

export interface BarChartData {
  title?: string;
  data: BarDatum[];
  /** Upper bound of the axis. Bars are sized as `value / max`. */
  max: number;
  /** Axis tick labels, evenly distributed from 0 to `max`. */
  ticks: string[];
  /** Optional analyst note rendered under the chart. */
  note?: string;
}

export interface SpendSlice {
  creative: Creative;
  label: string;
  amount: number;
  display: string;
}

export interface SpendBreakdown {
  title: string;
  slices: SpendSlice[];
  totalLabel: string;
  totalDisplay: string;
}

export interface GaugeData {
  /** Accessible name of the measured quantity. */
  label: string;
  /** Current measured value. */
  value: number;
  /** Safe-operating ceiling. Values above it render in the alert tone. */
  threshold: number;
  /** Axis upper bound. */
  max: number;
  valueLabel: string;
  thresholdLabel: string;
  maxLabel: string;
  minLabel: string;
}

export interface PriorityAlert {
  eyebrow: string;
  intro: string;
  title: string;
  body: string;
  gauge: GaugeData;
}

export interface CreativeRow {
  creative: Creative;
  name: string;
  /** Video length, e.g. "47 s". */
  duration: string;
  invested: string;
  impressions: string;
  frequency: string;
  thruPlays: string;
  costPerThruPlay: string;
  /** Share of ThruPlays that watched the whole video. */
  completion: string;
  /** Flags the row as the one requiring attention. */
  attention?: boolean;
  /** Renders cost and completion in the positive tone. */
  positiveResult?: boolean;
}

export interface CreativeTable {
  title: string;
  subtitle: string;
  rows: CreativeRow[];
}

/** How the latest number reads against the reference one. */
export type ComparisonVerdict = "better" | "same" | "attention";

export interface ComparisonRow {
  metric: string;
  /** Reference value, already formatted. */
  before: string;
  /** Latest value, already formatted. */
  now: string;
  verdict: ComparisonVerdict;
  /** Short plain-language takeaway. */
  takeaway: string;
}

export interface Comparison {
  title: string;
  subtitle: string;
  beforeLabel: string;
  nowLabel: string;
  rows: ComparisonRow[];
  note: string;
}

export interface Stat {
  label: string;
  /** Headline number, already formatted for pt-BR. */
  value: string;
  /** Optional supporting line under the number. */
  detail?: string;
}

/** WhatsApp button results — a secondary effect in Phase 1. */
export interface Messages {
  title: string;
  subtitle: string;
  stats: Stat[];
  clicksChart: BarChartData;
}

export interface ActionItem {
  title: string;
  description: string;
  /** Renders the "urgente" pill and the alert accent. */
  urgent?: boolean;
}

export interface Report {
  meta: ReportMeta;
  hero: Hero;
  highlights: Highlight[];
  dailyCostChart: BarChartData;
  spend: SpendBreakdown;
  alert: PriorityAlert;
  /** Omitted while there is no period-over-period comparison to show. */
  comparison?: Comparison;
  creatives: CreativeTable;
  cpmChart: BarChartData;
  retentionChart: BarChartData;
  completionChart: BarChartData;
  messages: Messages;
  actionPlan: ActionItem[];
  footer: string;
}
