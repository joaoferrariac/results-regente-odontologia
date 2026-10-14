import Image from "next/image";

import { Container } from "@/components/ui/Container";
import type { ReportMeta } from "@/types/report";

interface ReportHeaderProps {
  meta: ReportMeta;
}

/** Sticky masthead: logo on the left, reporting window on the right. */
export function ReportHeader({ meta }: ReportHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-paper">
      <Container className="flex items-center justify-between gap-4 py-4 sm:py-5">
        <Image
          src="/logo-regente.png"
          alt={meta.client}
          width={447}
          height={447}
          priority
          className="h-11 w-auto sm:h-12"
        />

        <div className="text-right text-[11px] leading-snug text-ink-soft sm:text-[13px]">
          <p className="font-medium text-ink">{meta.title}</p>
          <p className="mt-1 text-ink-muted">{meta.client}</p>
        </div>
      </Container>
      <Container>
        <nav aria-label="Seções do relatório" className="no-print flex gap-6 overflow-x-auto pb-3 text-xs text-ink-soft sm:gap-8">
          {[
            ["visao-geral", "Visão geral"],
            ["prioridade", "Prioridade"],
            ["comparativo", "Comparativo"],
            ["videos", "Vídeos"],
            ["whatsapp", "WhatsApp"],
            ["plano", "Plano de ação"],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} className="shrink-0 py-1 transition-colors hover:text-red">{label}</a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
