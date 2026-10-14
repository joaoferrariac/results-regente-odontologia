import { FrequencyGauge } from "@/components/charts/FrequencyGauge";
import { Pill } from "@/components/ui/Pill";
import type { PriorityAlert as PriorityAlertContent } from "@/types/report";

interface PriorityAlertProps {
  alert: PriorityAlertContent;
}

/** The one call-out the client should read first. */
export function PriorityAlert({ alert }: PriorityAlertProps) {
  return (
    <div className="border-l-2 border-red bg-paper-alt px-5 py-6 sm:px-8 sm:py-8">
      <Pill variant="alert">{alert.eyebrow}</Pill>

      <h3 className="mt-4 max-w-2xl text-lg font-medium leading-snug text-navy sm:text-xl">
        {alert.title}
      </h3>

      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
        {alert.body}
      </p>

      <FrequencyGauge className="mt-8" {...alert.gauge} />
    </div>
  );
}
