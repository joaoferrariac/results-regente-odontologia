import type { Report } from "@/types/report";

/**
 * Single source of truth for the Dia 41 reading (17/11/2026, around 09h15).
 *
 * Phase 1 runs one top-of-funnel campaign (REGMM_TOF_ENGAJAMENTO_202610) with
 * a single open audience optimised for ThruPlays. Delivery started on 08/10
 * (Dia 1); 17/11 is partial. On 26/10 the estética video was switched off and
 * the two reserve videos (reabilitação and prótese) went live. On 03/11 the
 * daily budget was cut from R$ 33 to R$ 16.
 * Derived metrics (CPM, frequency, cost per ThruPlay) are recomputed from the
 * accumulated totals, never averaged across days.
 *
 * Campaign-level figures are accumulated from 08/10. Per-video tables and
 * charts use November (01 to 17/11), the main window of this reading, because
 * the estética video has no spend in the month and per-video accumulated
 * ThruPlays were not collected.
 *
 * Numbers are stored raw (for chart geometry) alongside their pt-BR display
 * string, so formatting never depends on the runtime locale of the server.
 */
export const report: Report = {
  meta: {
    client: "Regente Odontologia",
    title: "Relatório de performance - Mídia Paga",
    period: "Dia 41 de veiculação",
    range: "08/10 a 17/11/2026, até 09h15",
  },

  hero: {
    headline:
      "Em 41 dias, 35.522 visualizações de vídeo a 3 centavos cada. A repetição passou do teto de 3,5 e a decisão sobre o vídeo da família segue em aberto.",
    lead: "Desde 08/10 foram investidos R$ 1.102,08 na campanha que apresenta a Regente como clínica da família toda, adultos incluídos. Os vídeos chegaram a 15.525 pessoas num raio de 12 km de Mogi Mirim e somaram 35.522 ThruPlays, que é como o Meta conta quem assistiu a pelo menos 15 segundos ou ao vídeo inteiro. O custo de cada ThruPlay está em R$ 0,0310, dentro da faixa de referência. O que pede decisão agora é a repetição, que chegou a 3,75, e o saldo da conta, que cobre cerca de 15 dias. Desde 03/11 o orçamento diário é de R$ 16, e são 19 dias sem conversa no WhatsApp.",
  },

  highlights: [
    {
      label: "Pessoas alcançadas",
      value: "15.525",
      detail: "58.174 impressões · entre 6,1% e 7,2% do público da região",
      positive: "Eram 11.544 pessoas na leitura de 27/10",
    },
    {
      label: "ThruPlays",
      value: "35.522",
      detail: "61% das impressões viraram ThruPlay",
      positive: "Eram 60% na leitura de 27/10",
    },
    {
      label: "Custo por ThruPlay",
      value: "R$ 0,0310",
      detail: "acumulado · R$ 1.102,08 investidos",
      positive: "Acumulado dentro da faixa de referência, de R$ 0,025 a R$ 0,033",
    },
  ],

  dailyCostChart: {
    title: "Custo por ThruPlay: primeira semana, acumulado e períodos recentes",
    max: 0.04,
    ticks: ["R$ 0", "R$ 0,01", "R$ 0,02", "R$ 0,03", "R$ 0,04"],
    data: [
      { label: "Primeira semana", sublabel: "08 a 14/10", value: 0.0285, display: "R$ 0,0285", tone: "neutral" },
      { label: "Acumulado", sublabel: "08/10 a 17/11, até 09h15", value: 0.031, display: "R$ 0,0310", tone: "highlight" },
      { label: "Novembro", sublabel: "01 a 17/11", value: 0.0321, display: "R$ 0,0321", tone: "neutral" },
      { label: "Últimos 5 dias fechados", sublabel: "12 a 16/11", value: 0.0335, display: "R$ 0,0335", tone: "neutral" },
      { label: "16/11", sublabel: "segunda, dia fechado", value: 0.0313, display: "R$ 0,0313", tone: "neutral" },
    ],
  },

  spend: {
    title: "Como o investimento foi dividido entre os vídeos",
    slices: [
      { creative: "familia", label: "Família", amount: 424.45, display: "R$ 424,45" },
      { creative: "estetica", label: "Estética (desativado)", amount: 311.98, display: "R$ 311,98" },
      { creative: "perda", label: "Perda do dente", amount: 270.9, display: "R$ 270,90" },
      { creative: "reabilitacao", label: "Reabilitação", amount: 70.23, display: "R$ 70,23" },
      { creative: "protese", label: "Prótese sobre implante", amount: 24.52, display: "R$ 24,52" },
    ],
    totalLabel: "Total investido na campanha (08/10 a 17/11)",
    totalDisplay: "R$ 1.102,08",
  },

  alert: {
    eyebrow: "Ponto de atenção",
    intro:
      "A repetição dos anúncios está em 3,75, acima do teto de 3,5 combinado. Pela regra do projeto, a frequência acima do teto tem prioridade sobre a janela de aprendizado.",
    title: "A repetição chegou a 3,75 e o vídeo da família está em 3,74",
    body: "A repetição da campanha subiu de 3,72 para 3,75 em um dia e de 3,07 para 3,75 desde a leitura de 27/10, passando do teto de 3,5. Só 6,1% a 7,2% do público estimado da região foi alcançado, e apenas 9,6% das impressões desde a leitura de ontem chegaram a pessoas novas (eram 12,4% e 17,1% nos dois intervalos anteriores), então a entrega se concentra em quem já viu os vídeos. O vídeo da família concentra o problema: 3,74 de repetição acumulada, 77,7% do gasto desde a leitura de ontem e o CPM mais alto, R$ 25,23 em novembro. O histórico da conta não mostra nenhuma alteração em anúncios ou público desde 03/11, quando só o orçamento diário mudou. A troca ou a pausa da família não precisa esperar o dia 45.",
    gauge: {
      label: "Repetição dos anúncios da campanha",
      value: 3.75,
      threshold: 3.5,
      max: 5,
      valueLabel: "3,75 hoje",
      thresholdLabel: "teto 3,5",
      minLabel: "0",
      maxLabel: "5,0",
    },
  },

  comparison: {
    title: "O Dia 20 e hoje",
    subtitle:
      "Compara os números acumulados da campanha em 27/10 (Dia 20, até 08h) e em 17/11 (Dia 41, até 09h15).",
    beforeLabel: "27/10 (dia 20)",
    nowLabel: "17/11 (dia 41)",
    rows: [
      {
        metric: "Pessoas alcançadas",
        before: "11.544",
        now: "15.525",
        verdict: "better",
        takeaway: "O alcance cresceu 34% e ainda cobre só entre 6% e 7% do público da região.",
      },
      {
        metric: "Custo por ThruPlay",
        before: "R$ 0,0300",
        now: "R$ 0,0310",
        verdict: "same",
        takeaway:
          "Subiu 3%, dentro da faixa de referência de R$ 0,025 a R$ 0,033. Os cinco últimos dias fechados estão em R$ 0,0335, um pouco acima.",
      },
      {
        metric: "Impressões que viram ThruPlay",
        before: "60%",
        now: "61%",
        verdict: "same",
        takeaway: "A retenção dos vídeos se manteve.",
      },
      {
        metric: "Custo por mil impressões (CPM)",
        before: "R$ 17,98",
        now: "R$ 18,94",
        verdict: "attention",
        takeaway:
          "Aparecer ficou 5% mais caro no acumulado. Em novembro o CPM está em R$ 20,48.",
      },
      {
        metric: "Repetição",
        before: "3,07",
        now: "3,75",
        verdict: "attention",
        takeaway:
          "Cada pessoa alcançada viu os anúncios quase 4 vezes, em média, acima do teto de 3,5.",
      },
      {
        metric: "Conversas no WhatsApp",
        before: "3",
        now: "4",
        verdict: "attention",
        takeaway:
          "Uma conversa nova em 21 dias, em 29/10. Desde então são 19 dias sem nenhuma.",
      },
    ],
    note: "O orçamento combinado era de R$ 33 por dia e foi cortado para R$ 16 em 03/11, sem motivo registrado. Os 13 dias fechados de 04 a 16/11 somam R$ 213,21, média de R$ 16,40 por dia, 102% do novo valor. Desde o início, a média é de R$ 26,88 por dia. O saldo pré-pago é de R$ 245,53 e cobre cerca de 15 dias, até por volta de 02/12. A conta não tem forma de pagamento cadastrada, então os anúncios pausam se o saldo acabar.",
  },

  creatives: {
    title: "Leitura por vídeo",
    subtitle:
      "Os vídeos rodam no mesmo público, de 25 a 65+ anos, num raio de 12 km. Números de novembro (01 a 17/11, até 09h15), a janela principal desta leitura. A estética não gastou nada no mês e segue desligada, e o acumulado dela aparece no gráfico de investimento. A prótese tem só 363 impressões no mês, amostra pequena para comparar.",
    rows: [
      {
        creative: "familia",
        name: "Atendimento família",
        duration: "47 s",
        invested: "R$ 179,00",
        impressions: "7.096",
        frequency: "3,22",
        thruPlays: "5.382",
        costPerThruPlay: "R$ 0,033",
        completion: "15%",
        attention: true,
      },
      {
        creative: "estetica",
        name: "Estética e clareamento",
        duration: "44 s · desativado",
        invested: "—",
        impressions: "—",
        frequency: "—",
        thruPlays: "—",
        costPerThruPlay: "—",
        completion: "—",
      },
      {
        creative: "perda",
        name: "Perda do dente",
        duration: "27 s",
        invested: "R$ 66,21",
        impressions: "4.172",
        frequency: "1,81",
        thruPlays: "2.248",
        costPerThruPlay: "R$ 0,029",
        completion: "61%",
        positiveResult: true,
      },
      {
        creative: "reabilitacao",
        name: "Reabilitação oral",
        duration: "40 s",
        invested: "R$ 45,38",
        impressions: "2.893",
        frequency: "1,80",
        thruPlays: "1.437",
        costPerThruPlay: "R$ 0,032",
        completion: "18%",
      },
      {
        creative: "protese",
        name: "Prótese sobre implante",
        duration: "26 s",
        invested: "R$ 6,89",
        impressions: "363",
        frequency: "1,43",
        thruPlays: "210",
        costPerThruPlay: "R$ 0,033",
        completion: "34%",
      },
    ],
  },

  cpmChart: {
    title: "Custo por mil impressões (CPM), por vídeo, em novembro",
    max: 30,
    ticks: ["0", "R$ 10", "R$ 20", "R$ 30"],
    data: [
      { label: "Família", value: 25.23, display: "R$ 25,23", tone: "familia" },
      { label: "Perda do dente", value: 15.87, display: "R$ 15,87", tone: "perda" },
      { label: "Reabilitação", value: 15.69, display: "R$ 15,69", tone: "reabilitacao" },
      { label: "Prótese sobre implante", sublabel: "poucos dados", value: 18.98, display: "R$ 18,98", tone: "protese" },
    ],
    note: "Em novembro, aparecer com o vídeo da família custa 59% mais que com o da perda do dente, e mesmo assim a família ficou com 60,2% da verba do mês, contra 22,3% da perda do dente. A perda do dente é também a que mais entrega ThruPlays por real, a R$ 0,0295. No acumulado desde 08/10 os CPMs são R$ 23,51 (família), R$ 22,36 (estética, desativada), R$ 13,69 (perda do dente) e R$ 13,74 (reabilitação).",
  },

  retentionChart: {
    title: "Até onde as pessoas assistem, somando os vídeos",
    max: 40000,
    ticks: ["0", "10.000", "20.000", "30.000", "40.000 reproduções"],
    data: [
      { label: "25% do vídeo", sublabel: "64% das impressões", value: 37017, display: "37.017", tone: "neutral" },
      { label: "50% do vídeo", sublabel: "46% das impressões", value: 26627, display: "26.627", tone: "neutral" },
      { label: "75% do vídeo", sublabel: "28% das impressões", value: 16349, display: "16.349", tone: "neutral" },
      { label: "95% do vídeo", sublabel: "19% das impressões", value: 11107, display: "11.107", tone: "neutral" },
      { label: "Vídeo inteiro", sublabel: "18% das impressões", value: 10697, display: "10.697", tone: "neutral" },
    ],
    note: "As 26.627 reproduções até a metade são a base do remarketing da Fase 2, que deve abrir no Dia 45 (21/11), daqui a 4 dias. São reproduções e não pessoas: o alcance de 15.525 é o limite de quantas pessoas diferentes podem estar nessa lista. Em novembro, a retenção até 25% e 50% ficou um pouco acima do acumulado (66% e 50% das impressões) e a dos marcos finais ficou um pouco abaixo.",
  },

  completionChart: {
    title: "Quantos ThruPlays chegam ao fim do vídeo, em novembro",
    max: 100,
    ticks: ["0%", "25%", "50%", "75%", "100%"],
    data: [
      {
        label: "Perda do dente",
        sublabel: "27 s · R$ 0,048 por vídeo inteiro",
        value: 61,
        display: "61%",
        tone: "perda",
      },
      {
        label: "Prótese sobre implante",
        sublabel: "26 s · R$ 0,097 por vídeo inteiro · poucos dados",
        value: 34,
        display: "34%",
        tone: "protese",
      },
      {
        label: "Reabilitação",
        sublabel: "40 s · R$ 0,178 por vídeo inteiro",
        value: 18,
        display: "18%",
        tone: "reabilitacao",
      },
      {
        label: "Família",
        sublabel: "47 s · R$ 0,219 por vídeo inteiro",
        value: 15,
        display: "15%",
        tone: "familia",
      },
    ],
    note: "A perda do dente é o vídeo mais curto, então é natural que mais gente chegue ao fim, mas a diferença é grande: cada vídeo inteiro assistido custa R$ 0,048 nela e R$ 0,219 na família, mais de quatro vezes. A prótese tem só 210 ThruPlays no mês, pouco para qualquer conclusão. A estética não rodou em novembro e não entra no gráfico.",
  },

  messages: {
    title: "Quem chamou no WhatsApp",
    subtitle:
      "Nesta fase a campanha busca visualização, e o WhatsApp é um efeito secundário: o botão está em todos os anúncios para quem já quiser conversar.",
    stats: [
      { label: "Cliques no link", value: "106", detail: "36 em novembro · 1 novo desde ontem" },
      { label: "Taxa de cliques", value: "0,18%", detail: "das impressões" },
      { label: "Conversas iniciadas", value: "4", detail: "a última em 29/10" },
      { label: "Custo por conversa", value: "R$ 275,52" },
    ],
    clicksChart: {
      title: "Cliques no link em novembro, por vídeo",
      max: 20,
      ticks: ["0", "5", "10", "15", "20 cliques"],
      data: [
        { label: "Família", sublabel: "2 conversas desde 08/10", value: 19, display: "19", tone: "familia" },
        { label: "Perda do dente", sublabel: "sem conversa", value: 11, display: "11", tone: "perda" },
        { label: "Reabilitação", sublabel: "1 conversa desde 08/10", value: 6, display: "6", tone: "reabilitacao" },
        { label: "Prótese sobre implante", sublabel: "sem conversa", value: 0, display: "0", tone: "protese" },
        { label: "Estética", sublabel: "1 conversa desde 08/10 · desativado", value: 0, display: "0", tone: "estetica" },
      ],
      note: "Foram 106 cliques para 4 conversas (3,8%), e novembro teve 36 cliques e nenhuma conversa. Não houve clique nos dias 14, 15 e 16/11, e o primeiro voltou na parcial de hoje. A Meta mudou a forma de relatar cliques a partir de 05/11, por isso o total de 106 não se compara direto com os 58 da leitura de 27/10. Pelo Gerenciador, família e estética têm qualidade acima da média, mas conversão abaixo da média. A perda do dente soma 19.782 impressões desde 08/10 e nenhuma conversa. A hipótese é o áudio do vídeo pedir para clicar em \"Saiba Mais\", enquanto o botão do anúncio é \"Enviar mensagem\", ainda sem confirmação.",
    },
  },

  footer:
    "Relatório preparado a partir das leituras de performance acompanhadas desde o início da veiculação, em 08/10/2026. Última leitura: 17/11/2026, por volta das 09h15.",
};
