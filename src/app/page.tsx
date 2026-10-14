import { HorizontalBarChart } from "@/components/charts/HorizontalBarChart";
import { StackedBar } from "@/components/charts/StackedBar";
import { ReportFooter } from "@/components/layout/ReportFooter";
import { ReportHeader } from "@/components/layout/ReportHeader";
import { ActionPlan } from "@/components/report/ActionPlan";
import { ComparisonTable } from "@/components/report/ComparisonTable";
import { CreativeTable } from "@/components/report/CreativeTable";
import { Hero } from "@/components/report/Hero";
import { Highlights } from "@/components/report/Highlights";
import { PriorityAlert } from "@/components/report/PriorityAlert";
import { Stats } from "@/components/report/Stats";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { report } from "@/data/report";

export default function ReportPage() {
  return (
    <div className="min-h-dvh">
      <ReportHeader meta={report.meta} />

      <main>
        <Container>
          <Hero hero={report.hero} meta={report.meta} />

          <div className="space-y-10 pb-12 sm:space-y-12">
            <Highlights items={report.highlights} />
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
              <HorizontalBarChart {...report.dailyCostChart} />
              <StackedBar {...report.spend} />
            </div>
          </div>

          <div className="divide-y divide-rule">
            <Section
              id="prioridade"
              eyebrow="Atenção"
              title="O que acompanhar esta semana"
              subtitle={report.alert.intro}
            >
              <PriorityAlert alert={report.alert} />
            </Section>

            {report.comparison && (
              <Section
                id="comparativo"
                eyebrow="Comparativo"
                title={report.comparison.title}
                subtitle={report.comparison.subtitle}
              >
                <ComparisonTable comparison={report.comparison} />
              </Section>
            )}

            <Section
              id="videos"
              eyebrow="Vídeos"
              title={report.creatives.title}
              subtitle={report.creatives.subtitle}
            >
              <CreativeTable table={report.creatives} />
              <HorizontalBarChart className="mt-12" {...report.cpmChart} />
            </Section>

            <Section
              id="retencao"
              eyebrow="Retenção"
              title="Quanto dos vídeos as pessoas assistem"
              subtitle="A mensagem de que a Regente atende adultos só chega a quem continua assistindo. Por isso a retenção pesa tanto quanto o custo nesta fase."
            >
              <HorizontalBarChart {...report.retentionChart} />
              <HorizontalBarChart className="mt-12" {...report.completionChart} />
            </Section>

            <Section
              id="whatsapp"
              eyebrow="WhatsApp"
              title={report.messages.title}
              subtitle={report.messages.subtitle}
            >
              <Stats stats={report.messages.stats} />
              <HorizontalBarChart className="mt-12" {...report.messages.clicksChart} />
            </Section>

            <Section
              id="plano"
              eyebrow="Próximos passos"
              title="Plano de ação da semana"
              subtitle="Em ordem de prioridade."
            >
              <ActionPlan items={report.actionPlan} />
            </Section>
          </div>
        </Container>
      </main>

      <ReportFooter text={report.footer} client={report.meta.client} />
    </div>
  );
}
