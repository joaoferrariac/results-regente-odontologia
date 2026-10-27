import type { ChartTone } from "@/types/report";

/**
 * Maps a semantic tone to the concrete Tailwind classes used by charts, cards
 * and legends. Centralising this is what keeps a creative the *same* colour in
 * every visualisation on the page.
 */
interface ToneStyle {
  /** Solid fill — bars, legend dots, stacked slices. */
  fill: string;
  /** Tinted surface for cards. */
  surface: string;
  /** Border matching the surface. */
  border: string;
  /** Text in the accent colour. */
  text: string;
}

export const TONES: Record<ChartTone, ToneStyle> = {
  familia: {
    fill: "bg-purple",
    surface: "bg-purple-soft",
    border: "border-purple/20",
    text: "text-purple",
  },
  estetica: {
    fill: "bg-teal",
    surface: "bg-teal-soft",
    border: "border-teal/20",
    text: "text-teal",
  },
  perda: {
    fill: "bg-amber",
    surface: "bg-amber-soft",
    border: "border-amber/20",
    text: "text-amber",
  },
  reabilitacao: {
    fill: "bg-blue",
    surface: "bg-blue-soft",
    border: "border-blue/20",
    text: "text-blue",
  },
  protese: {
    fill: "bg-rose",
    surface: "bg-rose-soft",
    border: "border-rose/20",
    text: "text-rose",
  },
  neutral: {
    fill: "bg-ink-soft",
    surface: "bg-paper-alt",
    border: "border-rule",
    text: "text-ink-soft",
  },
  /** Winning variant in a comparison — always read as a positive signal. */
  highlight: {
    fill: "bg-green",
    surface: "bg-green-soft",
    border: "border-green-border",
    text: "text-green",
  },
};
