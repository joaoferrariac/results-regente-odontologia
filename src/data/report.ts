import type { Report } from "@/types/report";

/**
 * Single source of truth for the Dia 48 reading (24/11/2026, morning).
 *
 * The report covers November only (01 to 24/11); 24/11 is partial. Phase 1
 * runs one top-of-funnel campaign (REGMM_TOF_ENGAJAMENTO_202610) with a single
 * open audience optimised for ThruPlays. The daily budget dropped from R$ 33
 * to R$ 16 on 03/11, and the estética video has been off since 26/10, so it
 * does not appear in the November figures.
 * Derived metrics (CPM, frequency, cost per ThruPlay) are recomputed from the
 * window totals, never averaged across days. Weekly figures are summed from
 * the daily table. Completion by video is the last one read (until 23/11).
 *
 * Numbers are stored raw (for chart geometry) alongside their pt-BR display
 * string, so formatting never depends on the runtime locale of the server.
 */
export const report: Report = {
  meta: {
    client: "Regente Odontologia",
    title: "Relatório de performance - Mídia Paga",
    period: "Novembro de 2026",
    range: "01 a 24/11/2026, até a manhã",
  },

  hero: {
    headline:
      "Em novembro, 12.957 visualizações de vídeo a 3 centavos cada. O vídeo da família concentra o gasto e já passou do teto de repetição.",
    lead: "De 01 a 24/11 foram investidos R$ 414,26 na campanha que apresenta a Regente como clínica da família toda, adultos incluídos. Os vídeos chegaram a 6.282 pessoas num raio de 12 km de Mogi Mirim e somaram 12.957 ThruPlays, que é como o Meta conta quem assistiu a pelo menos 15 segundos ou ao vídeo inteiro. O custo de cada ThruPlay está em R$ 0,0320, dentro da faixa de referência. O orçamento diário é de R$ 16 desde 03/11. O ponto de atenção é o vídeo da família, que recebeu 65% do gasto do mês e já está em 3,99 de repetição, acima do teto de 3,5. Há também a conta de anúncios, que tem R$ 112,58 de saldo e nenhuma forma de pagamento cadastrada.",
  },

  highlights: [
    {
      label: "Pessoas alcançadas",
      value: "6.282",
      detail: "19.818 impressões em novembro · cerca de 3% do público da região",
    },
    {
      label: "ThruPlays",
      value: "12.957",
      detail: "65% das impressões viraram ThruPlay",
    },
    {
      label: "Custo por ThruPlay",
      value: "R$ 0,0320",
      detail: "em novembro · R$ 414,26 investidos",
      positive: "Dentro da faixa de referência, de R$ 0,025 a R$ 0,033",
    },
  ],

  dailyCostChart: {
    title: "Custo por ThruPlay em novembro, por período",
    max: 0.04,
    ticks: ["R$ 0", "R$ 0,01", "R$ 0,02", "R$ 0,03", "R$ 0,04"],
    data: [
      { label: "Novembro", sublabel: "01 a 24/11", value: 0.032, display: "R$ 0,0320", tone: "highlight" },
      { label: "01 a 07/11", sublabel: "semana 1", value: 0.0311, display: "R$ 0,0311", tone: "neutral" },
      { label: "08 a 14/11", sublabel: "semana 2", value: 0.0334, display: "R$ 0,0334", tone: "neutral" },
      { label: "15 a 21/11", sublabel: "semana 3", value: 0.0324, display: "R$ 0,0324", tone: "neutral" },
      { label: "22 e 23/11", sublabel: "dias fechados", value: 0.0309, display: "R$ 0,0309", tone: "neutral" },
    ],
  },

  spend: {
    title: "Como o investimento de novembro foi dividido entre os vídeos",
    slices: [
      { creative: "familia", label: "Família", amount: 270.42, display: "R$ 270,42" },
      { creative: "perda", label: "Perda do dente", amount: 82.54, display: "R$ 82,54" },
      { creative: "reabilitacao", label: "Reabilitação", amount: 50.48, display: "R$ 50,48" },
      { creative: "protese", label: "Prótese sobre implante", amount: 10.83, display: "R$ 10,83" },
    ],
    totalLabel: "Total investido na campanha em novembro (01 a 24/11)",
    totalDisplay: "R$ 414,26",
  },

  alert: {
    eyebrow: "Ponto de atenção",
    intro:
      "A repetição do mês está abaixo do teto de 3,5, mas o vídeo da família já passou dele e concentra o gasto.",
    title:
      "A repetição do mês está em 3,15, e o vídeo da família já está em 3,99, acima do teto de 3,5",
    body: "Em novembro, cada pessoa alcançada viu os anúncios 3,15 vezes, em média, e o dia de maior repetição foi 18/11, com 3,49. O alcance de 6.282 pessoas cobre só 3% do público estimado da região, mas a entrega vem se fechando sobre quem já viu os vídeos: no último dia, 15% das impressões chegaram a pessoas novas, contra 10% no período anterior, uma amostra de apenas um dia. O vídeo da família ficou com 65% do gasto do mês e com 77% do gasto desde ontem, a um CPM de R$ 24,00, contra R$ 9,40 da perda do dente. Quanto mais a família concentra a verba, mais a repetição sobe. Contando desde o início da campanha, em 08/10, a repetição é de 3,93, também acima do teto. As opções em estudo são pausar a família, trocá-la por um vídeo novo ou reativar a estética, desligada desde 26/10.",
    gauge: {
      label: "Repetição dos anúncios da campanha em novembro",
      value: 3.15,
      threshold: 3.5,
      max: 5,
      valueLabel: "3,15 no mês",
      thresholdLabel: "teto 3,5",
      minLabel: "0",
      maxLabel: "5,0",
    },
  },

  comparison: {
    title: "Duas semanas de novembro",
    subtitle:
      "Compara a primeira semana inteira com o orçamento de R$ 16 (04 a 10/11) e a mais recente (17 a 23/11), com os dias fechados.",
    beforeLabel: "04 a 10/11",
    nowLabel: "17 a 23/11",
    rows: [
      {
        metric: "Investimento",
        before: "R$ 116,18",
        now: "R$ 115,93",
        verdict: "same",
        takeaway: "O gasto ficou estável, perto de R$ 16,60 por dia.",
      },
      {
        metric: "ThruPlays",
        before: "3.581",
        now: "3.639",
        verdict: "same",
        takeaway: "Praticamente o mesmo volume, com 2% a mais.",
      },
      {
        metric: "Custo por ThruPlay",
        before: "R$ 0,0324",
        now: "R$ 0,0319",
        verdict: "same",
        takeaway: "Caiu 2% e segue na faixa de referência de R$ 0,025 a R$ 0,033.",
      },
      {
        metric: "Impressões que viram ThruPlay",
        before: "64%",
        now: "69%",
        verdict: "better",
        takeaway:
          "Mais gente assiste ao trecho principal dos vídeos, o que ajuda a segurar o custo por ThruPlay.",
      },
      {
        metric: "Custo por mil impressões (CPM)",
        before: "R$ 20,70",
        now: "R$ 22,12",
        verdict: "attention",
        takeaway:
          "Aparecer ficou 7% mais caro, com a entrega mais concentrada no vídeo da família.",
      },
      {
        metric: "Cliques no botão do WhatsApp",
        before: "13",
        now: "7",
        verdict: "attention",
        takeaway: "Os cliques caíram e nenhum deles virou conversa no mês.",
      },
    ],
    note: "O orçamento diário está em R$ 16 desde 03/11, contra R$ 33 antes. De 04/11 a 23/11 o gasto médio foi de R$ 16,46 por dia, 103% do previsto, com picos de 125% a 140% em domingos e segundas. Novembro deve fechar perto de R$ 526. Ontem (23/11) o gasto fechou em R$ 19,97, com o melhor custo por ThruPlay (R$ 0,0281) e CPM (R$ 18,27) entre os dias que gastaram mais de R$ 15 desde 03/11. É um dia só, e a leitura de amanhã mostra se isso se mantém.",
  },

  creatives: {
    title: "Leitura por vídeo",
    subtitle:
      "Os vídeos rodam no mesmo público, de 25 a 65+ anos, num raio de 12 km. Números de novembro (01 a 24/11), com a conclusão do vídeo lida até 23/11. A estética segue desligada e não gastou nada no mês. A soma dos vídeos fica R$ 0,01 acima do total da campanha, diferença de atualização do Meta.",
    rows: [
      {
        creative: "familia",
        name: "Atendimento família",
        duration: "47 s",
        invested: "R$ 270,42",
        impressions: "10.441",
        frequency: "3,99",
        thruPlays: "8.236",
        costPerThruPlay: "R$ 0,033",
        completion: "14%",
        attention: true,
      },
      {
        creative: "perda",
        name: "Perda do dente",
        duration: "27 s",
        invested: "R$ 82,54",
        impressions: "5.591",
        frequency: "1,80",
        thruPlays: "2.783",
        costPerThruPlay: "R$ 0,030",
        completion: "61%",
        positiveResult: true,
      },
      {
        creative: "reabilitacao",
        name: "Reabilitação oral",
        duration: "40 s",
        invested: "R$ 50,48",
        impressions: "3.200",
        frequency: "1,88",
        thruPlays: "1.609",
        costPerThruPlay: "R$ 0,031",
        completion: "17%",
      },
      {
        creative: "protese",
        name: "Prótese sobre implante",
        duration: "26 s",
        invested: "R$ 10,83",
        impressions: "587",
        frequency: "1,68",
        thruPlays: "332",
        costPerThruPlay: "R$ 0,033",
        completion: "50%",
      },
    ],
  },

  cpmChart: {
    title: "Custo por mil impressões (CPM) em novembro, por vídeo",
    max: 30,
    ticks: ["0", "R$ 5", "R$ 10", "R$ 15", "R$ 20", "R$ 25", "R$ 30"],
    data: [
      { label: "Família", value: 25.9, display: "R$ 25,90", tone: "familia" },
      { label: "Perda do dente", value: 14.76, display: "R$ 14,76", tone: "perda" },
      { label: "Reabilitação", value: 15.77, display: "R$ 15,77", tone: "reabilitacao" },
      { label: "Prótese sobre implante", sublabel: "poucos dados", value: 18.45, display: "R$ 18,45", tone: "protese" },
    ],
    note: "O vídeo da família custa 75% mais que o da perda do dente para aparecer e recebeu 65% do gasto de novembro, contra 20% da perda do dente, que alcançou 3.105 pessoas com R$ 82,54, perto das 2.615 da família com R$ 270,42. O CPM da prótese vem de 587 impressões e ainda não serve de comparação.",
  },

  retentionChart: {
    title: "Até onde as pessoas assistem em novembro, somando os vídeos",
    max: 15000,
    ticks: ["0", "5.000", "10.000", "15.000 reproduções"],
    data: [
      { label: "25% do vídeo", sublabel: "68% das impressões", value: 13381, display: "13.381", tone: "neutral" },
      { label: "50% do vídeo", sublabel: "54% das impressões", value: 10668, display: "10.668", tone: "neutral" },
      { label: "75% do vídeo", sublabel: "28% das impressões", value: 5574, display: "5.574", tone: "neutral" },
      { label: "95% do vídeo", sublabel: "18% das impressões", value: 3470, display: "3.470", tone: "neutral" },
      { label: "Vídeo inteiro", sublabel: "17% das impressões", value: 3315, display: "3.315", tone: "neutral" },
    ],
    note: "As 10.668 reproduções até a metade são a base do remarketing da Fase 2, que estava prevista para 21/11 e ainda não foi aberto. São reproduções e não pessoas: o alcance do mês, de 6.282, é o limite de quantas pessoas diferentes podem estar nessa contagem. Os primeiros marcos são altos (68% das impressões chegam a 25%), e só 17% veem o vídeo inteiro, o que combina com o peso do vídeo da família, o mais longo.",
  },

  completionChart: {
    title: "Quantos ThruPlays chegam ao fim do vídeo, em novembro",
    max: 100,
    ticks: ["0%", "25%", "50%", "75%", "100%"],
    data: [
      {
        label: "Perda do dente",
        sublabel: "27 s · R$ 0,049 por vídeo inteiro",
        value: 61,
        display: "61%",
        tone: "perda",
      },
      {
        label: "Prótese sobre implante",
        sublabel: "26 s · poucos dados · R$ 0,066 por vídeo inteiro",
        value: 50,
        display: "50%",
        tone: "protese",
      },
      {
        label: "Reabilitação",
        sublabel: "40 s · R$ 0,181 por vídeo inteiro",
        value: 17,
        display: "17%",
        tone: "reabilitacao",
      },
      {
        label: "Família",
        sublabel: "47 s · R$ 0,230 por vídeo inteiro",
        value: 14,
        display: "14%",
        tone: "familia",
      },
    ],
    note: "Números de 01 a 23/11, a última leitura com a conclusão por vídeo. A perda do dente é um dos vídeos mais curtos, então é natural que mais gente chegue ao fim, e ela entrega o vídeo inteiro por cerca de um quinto do custo da família (R$ 0,049 contra R$ 0,230). A família, que fica com 65% do gasto de novembro, é o vídeo de menor conclusão da campanha. A prótese tem 323 ThruPlays e ainda não permite conclusão firme.",
  },

  messages: {
    title: "Quem chamou no WhatsApp",
    subtitle:
      "Nesta fase a campanha busca visualização, e o WhatsApp é um efeito secundário: o botão está em todos os anúncios para quem já quiser conversar.",
    stats: [
      { label: "Cliques no botão", value: "42", detail: "em novembro" },
      { label: "Taxa de cliques", value: "0,21%", detail: "das impressões" },
      { label: "Conversas iniciadas", value: "0", detail: "em novembro" },
      { label: "Última conversa", value: "29/10", detail: "26 dias sem conversa nova" },
    ],
    clicksChart: {
      title: "Cliques no botão do WhatsApp em novembro, por vídeo",
      max: 30,
      ticks: ["0", "10", "20", "30 cliques"],
      data: [
        { label: "Família", sublabel: "sem conversa", value: 24, display: "24", tone: "familia" },
        { label: "Perda do dente", sublabel: "sem conversa", value: 12, display: "12", tone: "perda" },
        { label: "Reabilitação", sublabel: "sem conversa", value: 6, display: "6", tone: "reabilitacao" },
        { label: "Prótese sobre implante", sublabel: "sem conversa", value: 0, display: "0", tone: "protese" },
      ],
      note: "Foram 42 cliques em novembro e nenhuma conversa. A perda do dente teve CTR de 0,21%, perto dos 0,23% da família, e também não gerou conversa. A hipótese é o áudio do vídeo pedir para clicar em \"Saiba Mais\", enquanto o botão do anúncio é \"Enviar mensagem\", ainda sem confirmação. Sem o registro da origem na recepção, não dá para saber se há conversas chegando por outros caminhos.",
    },
  },

  footer:
    "Relatório preparado a partir das leituras de performance de novembro de 2026. Última leitura: 24/11/2026, pela manhã.",
};
