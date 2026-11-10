import type { Report } from "@/types/report";

/**
 * Single source of truth for the Dia 34 reading (10/11/2026, around 18h05).
 *
 * Phase 1 runs one top-of-funnel campaign (REGMM_TOF_ENGAJAMENTO_202610) with
 * a single open audience optimised for ThruPlays. Delivery started on 08/10
 * (Dia 1); 10/11 is partial. On 26/10 the estética video was switched off and
 * the two reserve videos (reabilitação and prótese) went live. On 03/11 the
 * daily budget was cut from R$ 33 to R$ 16.
 *
 * The report covers November only (01 to 10/11). The one exception is the
 * frequency gauge, which uses the campaign-since-08/10 figure because the
 * 3.5 ceiling rule is defined on it. October (08 to 31/10) is derived as
 * cumulative minus November, for comparison.
 * Derived metrics (CPM, frequency, cost per ThruPlay) are recomputed from the
 * accumulated totals, never averaged across days.
 *
 * Numbers are stored raw (for chart geometry) alongside their pt-BR display
 * string, so formatting never depends on the runtime locale of the server.
 */
export const report: Report = {
  meta: {
    client: "Regente Odontologia",
    title: "Relatório de performance - Mídia Paga",
    period: "Dia 34 de veiculação",
    range: "01 a 10/11/2026, até 18h",
  },

  hero: {
    headline:
      "Em novembro, 6.167 visualizações de vídeo a 3 centavos cada. A repetição acumulada da campanha passou do teto de 3,5 e pede uma decisão sobre o vídeo da família.",
    lead: "De 01 a 10/11 foram investidos R$ 193,09 na campanha que apresenta a Regente como clínica da família toda, adultos incluídos. Os vídeos chegaram a 4.136 pessoas num raio de 12 km de Mogi Mirim e somaram 6.167 ThruPlays, que é como o Meta conta quem assistiu a pelo menos 15 segundos ou ao vídeo inteiro. O custo de cada ThruPlay ficou em R$ 0,0313, dentro da faixa de referência, mas encostou no limite de cima nos últimos dias. Em 03/11 o orçamento diário foi reduzido de R$ 33 para R$ 16, e o gasto acompanha o novo valor. Não houve conversa no WhatsApp em novembro.",
  },

  highlights: [
    {
      label: "Pessoas alcançadas em novembro",
      value: "4.136",
      detail: "9.723 impressões · cerca de 2% do público da região",
      positive: "Desde 08/10 foram 14.949 pessoas",
    },
    {
      label: "ThruPlays",
      value: "6.167",
      detail: "63% das impressões viraram ThruPlay",
      positive: "Em outubro eram 60%",
    },
    {
      label: "Custo por ThruPlay",
      value: "R$ 0,0313",
      detail: "novembro · R$ 193,09 investidos",
      positive: "Dentro da faixa de referência, de R$ 0,025 a R$ 0,033",
    },
  ],

  dailyCostChart: {
    title: "Custo por ThruPlay: outubro, novembro e últimos dias",
    max: 0.04,
    ticks: ["R$ 0", "R$ 0,01", "R$ 0,02", "R$ 0,03", "R$ 0,04"],
    data: [
      { label: "Outubro", sublabel: "08 a 31/10", value: 0.0307, display: "R$ 0,0307", tone: "neutral" },
      { label: "Novembro", sublabel: "01 a 10/11, até 18h", value: 0.0313, display: "R$ 0,0313", tone: "highlight" },
      { label: "08/11", sublabel: "domingo", value: 0.0315, display: "R$ 0,0315", tone: "neutral" },
      { label: "09/11", sublabel: "segunda, dia fechado", value: 0.033, display: "R$ 0,0330", tone: "neutral" },
    ],
  },

  spend: {
    title: "Como o investimento de novembro foi dividido entre os vídeos",
    slices: [
      { creative: "familia", label: "Família", amount: 111.18, display: "R$ 111,18" },
      { creative: "perda", label: "Perda do dente", amount: 44.26, display: "R$ 44,26" },
      { creative: "reabilitacao", label: "Reabilitação", amount: 33.56, display: "R$ 33,56" },
      { creative: "protese", label: "Prótese sobre implante", amount: 4.09, display: "R$ 4,09" },
    ],
    totalLabel:
      "Total investido em novembro (01 a 10/11), com a estética desligada",
    totalDisplay: "R$ 193,09",
  },

  alert: {
    eyebrow: "Ponto de atenção",
    intro:
      "A repetição dos anúncios passou do teto de 3,5, e a regra combinada é decidir sobre isso antes de esperar o dia 45.",
    title:
      "A repetição chegou a 3,57, acima do teto de 3,5, e o vídeo da família concentra o gasto",
    body: "A repetição da campanha subiu de 3,48, em 06/11, para 3,57, 0,07 acima do limite. A previsão da leitura anterior, de que o teto seria atingido entre 08/11 e 09/11, se confirmou com pequeno atraso. O alcance novo está diminuindo: só 17% das impressões desde 06/11 chegaram a pessoas novas, contra 24% no intervalo anterior, o que indica que a entrega se concentra em quem já viu os vídeos. Em novembro a repetição foi de 2,35, mas o teto vale para o acumulado desde 08/10, em que 14.949 pessoas foram alcançadas, 6% a 7% do público estimado da região. O vídeo da família recebeu 58% do gasto de novembro, com repetição de 2,70 no mês, o maior CPM entre os vídeos (R$ 24,09) e só 15% dos ThruPlays assistidos até o fim. Em 06/11 a repetição dele acumulada era de 3,25, a maior da campanha. A decisão sobre a família está em aberto desde 30/10 e agora é urgente.",
    gauge: {
      label: "Repetição dos anúncios da campanha, acumulada desde 08/10",
      value: 3.57,
      threshold: 3.5,
      max: 5,
      valueLabel: "3,57 hoje",
      thresholdLabel: "teto 3,5",
      minLabel: "0",
      maxLabel: "5,0",
    },
  },

  comparison: {
    title: "Outubro e novembro",
    subtitle:
      "Compara outubro (08 a 31/10, 24 dias) com novembro (01 a 10/11, até 18h, 10 dias). Outubro é o acumulado da campanha menos novembro.",
    beforeLabel: "Outubro",
    nowLabel: "Novembro",
    rows: [
      {
        metric: "Gasto por dia",
        before: "R$ 33,53",
        now: "R$ 19,31",
        verdict: "same",
        takeaway:
          "Efeito do corte de orçamento de R$ 33 para R$ 16 por dia em 03/11. Desde 04/11 a média é de R$ 17,13.",
      },
      {
        metric: "Custo por ThruPlay",
        before: "R$ 0,0307",
        now: "R$ 0,0313",
        verdict: "same",
        takeaway:
          "Praticamente igual e dentro da faixa de R$ 0,025 a R$ 0,033. Nos últimos dias encostou no limite de cima.",
      },
      {
        metric: "Impressões que viram ThruPlay",
        before: "60%",
        now: "63%",
        verdict: "better",
        takeaway:
          "Um pouco mais de gente assiste ao trecho principal dos vídeos.",
      },
      {
        metric: "Custo por mil impressões (CPM)",
        before: "R$ 18,43",
        now: "R$ 19,85",
        verdict: "attention",
        takeaway:
          "Aparecer ficou 8% mais caro. Nos quatro últimos dias fechados o CPM foi de R$ 21,12.",
      },
    ],
    note: "O dia 08/11 passou 31% do orçamento programado (R$ 21,04). Em novembro foram gastos R$ 193,09, e no ritmo atual o mês fecharia perto de R$ 530. O CPM e o custo por ThruPlay subiram nos dias mais recentes, e a leitura é que o público está mais caro de alcançar com o aumento da repetição, uma interpretação sem confirmação do Meta. A repetição de outubro isolada não pode ser calculada, porque o alcance não se subtrai entre períodos.",
  },

  creatives: {
    title: "Leitura por vídeo",
    subtitle:
      "Os vídeos rodam no mesmo público, de 25 a 65+ anos, num raio de 12 km. Os números por vídeo são de novembro, de 01 a 10/11, até 18h. A estética segue desligada e não gastou nada no mês. A repetição por vídeo é a do mês, e não a acumulada desde 08/10.",
    rows: [
      {
        creative: "familia",
        name: "Atendimento família",
        duration: "47 s",
        invested: "R$ 111,18",
        impressions: "4.616",
        frequency: "2,70",
        thruPlays: "3.429",
        costPerThruPlay: "R$ 0,032",
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
        invested: "R$ 44,26",
        impressions: "2.654",
        frequency: "1,74",
        thruPlays: "1.537",
        costPerThruPlay: "R$ 0,029",
        completion: "58%",
        positiveResult: true,
      },
      {
        creative: "reabilitacao",
        name: "Reabilitação oral",
        duration: "40 s",
        invested: "R$ 33,56",
        impressions: "2.250",
        frequency: "1,67",
        thruPlays: "1.079",
        costPerThruPlay: "R$ 0,031",
        completion: "15%",
      },
      {
        creative: "protese",
        name: "Prótese sobre implante",
        duration: "26 s",
        invested: "R$ 4,09",
        impressions: "203",
        frequency: "1,38",
        thruPlays: "122",
        costPerThruPlay: "R$ 0,034",
        completion: "19%",
      },
    ],
  },

  cpmChart: {
    title: "Custo por mil impressões (CPM), por vídeo, em novembro",
    max: 25,
    ticks: ["0", "R$ 5", "R$ 10", "R$ 15", "R$ 20", "R$ 25"],
    data: [
      { label: "Família", value: 24.09, display: "R$ 24,09", tone: "familia" },
      { label: "Perda do dente", value: 16.68, display: "R$ 16,68", tone: "perda" },
      { label: "Reabilitação", value: 14.92, display: "R$ 14,92", tone: "reabilitacao" },
      { label: "Prótese sobre implante", sublabel: "poucos dados", value: 20.15, display: "R$ 20,15", tone: "protese" },
    ],
    note: "O vídeo da família custa 44% mais que o da perda do dente para aparecer, e mesmo assim recebeu 58% do gasto do mês, contra 23% da perda do dente. A reabilitação tem o menor CPM, mas a prótese sobre implante recebeu só R$ 4,09 em dez dias, e o CPM dela vem de 203 impressões, pouco para comparar.",
  },

  retentionChart: {
    title: "Até onde as pessoas assistem, somando os vídeos, em novembro",
    max: 8000,
    ticks: ["0", "2.000", "4.000", "6.000", "8.000 reproduções"],
    data: [
      { label: "25% do vídeo", sublabel: "66% das impressões", value: 6367, display: "6.367", tone: "neutral" },
      { label: "75% do vídeo", sublabel: "26% das impressões", value: 2562, display: "2.562", tone: "neutral" },
      { label: "95% do vídeo", sublabel: "17% das impressões", value: 1662, display: "1.662", tone: "neutral" },
      { label: "Vídeo inteiro", sublabel: "16% das impressões", value: 1597, display: "1.597", tone: "neutral" },
    ],
    note: "A leitura de 10/11 não coletou o marco de 50% de novembro, por isso ele não aparece. A retenção do mês ficou abaixo da acumulada nos marcos finais, porque o vídeo da família, que retém menos, concentrou 58% do gasto de novembro. O remarketing da Fase 2 deve abrir por volta de 21/11, daqui a 11 dias, e vai falar de novo com quem já conheceu a clínica. A base são reproduções e não pessoas, e o alcance é o limite de quantas pessoas diferentes podem estar nessa lista.",
  },

  completionChart: {
    title: "Quantos ThruPlays chegam ao fim do vídeo, em novembro",
    max: 100,
    ticks: ["0%", "25%", "50%", "75%", "100%"],
    data: [
      {
        label: "Perda do dente",
        sublabel: "27 s · R$ 0,050 por vídeo inteiro",
        value: 58,
        display: "58%",
        tone: "perda",
      },
      {
        label: "Prótese sobre implante",
        sublabel: "26 s · poucos dados · R$ 0,178 por vídeo inteiro",
        value: 19,
        display: "19%",
        tone: "protese",
      },
      {
        label: "Família",
        sublabel: "47 s · R$ 0,211 por vídeo inteiro",
        value: 15,
        display: "15%",
        tone: "familia",
      },
      {
        label: "Reabilitação",
        sublabel: "40 s · R$ 0,210 por vídeo inteiro",
        value: 15,
        display: "15%",
        tone: "reabilitacao",
      },
    ],
    note: "A perda do dente é o vídeo mais curto, então é natural que mais gente chegue ao fim, e ainda assim a diferença é grande: cada vídeo inteiro custa R$ 0,050, contra R$ 0,211 da família. A família e a reabilitação, os dois mais longos entre os ativos, perdem a maior parte do público antes do fim. A prótese tem só 122 ThruPlays no mês, então o percentual dela ainda não é conclusivo. A estética não gastou em novembro.",
  },

  messages: {
    title: "Quem chamou no WhatsApp",
    subtitle:
      "Nesta fase a campanha busca visualização, e o WhatsApp é um efeito secundário: o botão está em todos os anúncios para quem já quiser conversar.",
    stats: [
      { label: "Cliques no botão", value: "27", detail: "em novembro" },
      { label: "Taxa de cliques", value: "0,28%", detail: "das impressões" },
      { label: "Conversas iniciadas", value: "0", detail: "a última foi em 29/10" },
      { label: "Custo por conversa", value: "—", detail: "sem conversa no mês" },
    ],
    clicksChart: {
      title: "Cliques no botão do WhatsApp, por vídeo, em novembro",
      max: 15,
      ticks: ["0", "5", "10", "15 cliques"],
      data: [
        { label: "Família", sublabel: "sem conversa", value: 14, display: "14", tone: "familia" },
        { label: "Perda do dente", sublabel: "sem conversa", value: 9, display: "9", tone: "perda" },
        { label: "Reabilitação", sublabel: "sem conversa", value: 4, display: "4", tone: "reabilitacao" },
        { label: "Prótese sobre implante", sublabel: "sem conversa", value: 0, display: "0", tone: "protese" },
      ],
      note: "Em novembro foram 27 cliques (0,28% das impressões) e nenhuma conversa. São doze dias sem conversa nova: a última foi a da reabilitação, em 29/10. A perda do dente teve o maior índice de cliques do mês (0,34%), mas sem conversa. A hipótese de que o áudio do vídeo, que pede para clicar em \"Saiba Mais\", atrapalha o botão \"Enviar mensagem\" segue sem confirmação.",
    },
  },

  actionPlan: [
    {
      title: "Decidir o que fazer com o vídeo da família",
      description:
        "A repetição da campanha está em 3,57, acima do teto de 3,5, e a família é o vídeo com maior CPM, só 15% de conclusão e 58% do gasto de novembro. As opções são pausar, trocar por um vídeo novo ou reativar a estética. Pela regra combinada, a repetição tem prioridade sobre a janela de aprendizado, então a decisão não precisa esperar o dia 45. Qualquer troca deve ser registrada no Setup da Fase 1.",
      urgent: true,
    },
    {
      title: "Registrar na recepção de qual anúncio vem cada conversa",
      description:
        "O objetivo da campanha é mostrar que a Regente atende adultos, e a forma de saber se isso está funcionando é ver quantas conversas pedem tratamento adulto. Hoje não há esse registro, nem para as 4 conversas até agora, em especial a da reabilitação em 29/10. Também falta confirmar o evento de clique no WhatsApp e a Conversions API no gerenciador de negócios.",
    },
    {
      title: "Definir o orçamento até o dia 45 e refazer a divisão da Fase 2",
      description:
        "O orçamento caiu de R$ 33 para R$ 16 por dia em 03/11 e isso ainda não está documentado, nem o motivo ou o prazo. A divisão prevista para a abertura do remarketing em 21/11, de R$ 23 por dia no topo e R$ 10 por dia no remarketing, foi calculada sobre R$ 33. É preciso decidir se o corte vale até lá e refazer a conta sobre a nova base.",
    },
    {
      title: "Avaliar se vale ampliar o público ou o raio",
      description:
        "Só 17% das impressões desde 06/11 chegaram a pessoas novas, e a repetição passou do teto. A proposta é avaliar se vale ampliar o público ou o raio de 12 km, hoje em 25 a 65+ anos, e decidir isso antes de mexer em qualquer configuração. O nome do conjunto ainda traz a faixa 25-55 e pode ser atualizado.",
    },
    {
      title: "Reler o desempenho amanhã com 10/11 fechado",
      description:
        "A proposta é reler os números amanhã cedo, no Dia 35 (11/11), para confirmar CPM, custo por ThruPlay e repetição com o dia fechado. Também falta conferir saldo, forma de pagamento e limite de gasto da conta, que não foram verificados nesta leitura.",
    },
    {
      title: "Conferir o áudio do vídeo da perda do dente",
      description:
        "O vídeo pede para clicar em \"Saiba Mais\", mas o botão do anúncio é \"Enviar mensagem\". É o vídeo mais eficiente da campanha, com o melhor índice de cliques de novembro, mas nenhum clique virou conversa. Se o áudio for o que atrapalha, uma versão ajustada pode transformá-lo também no que mais gera conversas.",
    },
    {
      title: "Fechar os critérios da Fase 1 e do remarketing",
      description:
        "O custo de referência do ThruPlay ficou em R$ 0,028 a R$ 0,029 na primeira semana e em R$ 0,0308 no acumulado. Com esse número, dá para definir o que conta como sucesso da Fase 1 e quem entra no público do remarketing, olhando pessoas únicas e tempo assistido, não só reproduções. A meta de 300 a 500 pessoas já foi superada em reproduções, mas o alcance de 14.949 pessoas é o limite real.",
    },
    {
      title: "Confirmar a autorização de imagem dos pacientes",
      description:
        "Os vídeos trazem depoimentos de pacientes reais. É preciso confirmar que há termo de autorização de uso de imagem assinado para cada um deles.",
    },
  ],

  footer:
    "Relatório preparado a partir das leituras de performance acompanhadas desde o início da veiculação, em 08/10/2026. Última leitura: 10/11/2026, por volta das 18h.",
};
