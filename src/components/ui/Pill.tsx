import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type PillVariant = "alert" | "neutral" | "brand";

const VARIANTS: Record<PillVariant, string> = {
  alert: "bg-red-soft text-red",
  neutral: "bg-paper-alt text-ink-soft ring-1 ring-rule",
  brand: "bg-navy-soft text-navy ring-1 ring-navy/10",
};

interface PillProps {
  children: ReactNode;
  variant?: PillVariant;
  className?: string;
}

export function Pill({ children, variant = "neutral", className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2 py-1 text-[11px] font-medium",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
