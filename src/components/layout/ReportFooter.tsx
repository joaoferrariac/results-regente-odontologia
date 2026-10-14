import { Container } from "@/components/ui/Container";

interface ReportFooterProps {
  text: string;
  client: string;
}

export function ReportFooter({ text, client }: ReportFooterProps) {
  return (
    <footer className="border-t border-rule bg-paper">
      <Container className="flex flex-col gap-3 py-10 text-[13px] leading-relaxed text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:py-12">
        <p className="max-w-2xl">{text}</p>
        <p className="shrink-0 text-xs text-ink-soft">
          {client}
        </p>
      </Container>
    </footer>
  );
}
