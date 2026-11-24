import type { Report } from "@/types/report";

/**
 * Single source of truth for the Dia 48 reading (24/11/2026, morning).
 *
 * Phase 1 runs one top-of-funnel campaign (REGMM_TOF_ENGAJAMENTO_202610) with
 * a single open audience optimised for ThruPlays. Delivery started on 08/10
 * (Dia 1); 24/11 is partial. The daily budget dropped from R$ 33 to R$ 16 on
 * 03/11, and the estética video has been off since 26/10.
 * Derived metrics (CPM, frequency, cost per ThruPlay) are recomputed from the
 * accumulated totals, never averaged across days.
 *
 * Per-video figures are for November (01 to 24/11), the window the pulse
 * reading uses. Completion by video is the last one read (until 23/11).
 *
 * Numbers are stored raw (for chart geometry) alongside their pt-BR display
 * string, so formatting never depends on the runtime locale of the server.
 */
export const report: Report = {
  meta: {
    client: "Regente Odontologia",
    title: "Relatório de performance - Mídia Paga",
    period: "Dia 48 de veiculação",
    range: "08/10 a 24/11/2026, até a manhã",
  },

  hero: {
    headline:
      "Em 48 dias, 39.202 visualizações de vídeo a 3 centavos cada. A repetição passou do teto, e o saldo da conta cobre cerca de 7 dias.",
    lead: "Desde 08/10 foram investidos R$ 1.218,87 na campanha que apresenta a Regente como clínica da família toda, adultos incluídos. Os vídeos chegaram a 16.142 pessoas num raio de 12 km de Mogi Mirim e somaram 39.202 ThruPlays, que é como o Meta conta quem assistiu a pelo menos 15 segundos ou ao vídeo inteiro. O custo de cada ThruPlay segue na faixa de referência, em R$ 0,0311. O ponto de atenção é a repetição: cada pessoa já viu os anúncios 3,93 vezes, acima do teto de 3,5, e o vídeo da família concentra o gasto. Há também a conta de anúncios, que tem R$ 112,58 de saldo e nenhuma forma de pagamento cadastrada.",
  },

  highlights: [
    {
      label: "Pessoas alcançadas",
      value: "16.142",
      detail: "63.468 impressões · cerca de 7% do público da região",
      positive: "Eram 11.544 pessoas no Dia 20 e 6.796 no fim da primeira semana",
    },
    {
      label: "ThruPlays",
      value: "39.202",
      detail: "62% das impressões viraram ThruPlay",
      positive: "Eram 60% no Dia 20 e 54% no fim da primeira semana",
    },
    {
      label: "Custo por ThruPlay",
      value: "R$ 0,0311",
      detail: "acumulado · R$ 1.218,87 investidos",
      positive: "Dentro da faixa de referência, de R$ 0,025 a R$ 0,033",
    },
  ],

  dailyCostChart: {
    title: "Custo por ThruPlay: primeira semana, acumulado e últimos dias",
    max: 0.04,
    ticks: ["R$ 0", "R$ 0,01", "R$ 0,02", "R$ 0,03", "R$ 0,04"],
    data: [
      { label: "Primeira semana", sublabel: "08 a 14/10", value: 0.0285, display: "R$ 0,0285", tone: "neutral" },
      { label: "Acumulado", sublabel: "08/10 a 24/11", value: 0.0311, display: "R$ 0,0311", tone: "highlight" },
      { label: "Novembro", sublabel: "01 a 24/11", value: 0.032, display: "R$ 0,0320", tone: "neutral" },
      { label: "Últimos 5 dias fechados", sublabel: "19 a 23/11", value: 0.0319, display: "R$ 0,0319", tone: "neutral" },
      { label: "23/11", sublabel: "segunda, dia fechado", value: 0.0281, display: "R$ 0,0281", tone: "neutral" },
    ],
  },

  spend: {
    title: "Como o investimento foi dividido entre os vídeos",
    slices: [
      { creative: "familia", label: "Família", amount: 515.87, display: "R$ 515,87" },
      { creative: "estetica", label: "Estética (desativado)", amount: 311.98, display: "R$ 311,98" },
      { creative: "perda", label: "Perda do dente", amount: 287.23, display: "R$ 287,23" },
      { creative: "reabilitacao", label: "Reabilitação", amount: 75.33, display: "R$ 75,33" },
      { creative: "protese", label: "Prótese sobre implante", amount: 28.46, display: "R$ 28,46" },
    ],
    totalLabel: "Total investido na campanha (08/10 a 24/11)",
    totalDisplay: "R$ 1.218,87",
  },

  alert: {
    eyebrow: "Ponto de atenção",
    intro:
      "A repetição dos anúncios passou do teto de 3,5 e segue subindo. O vídeo da família é o que mais pesa e a decisão sobre ele está em aberto.",
    title:
      "A repetição chegou a 3,93, acima do teto de 3,5, e o vídeo da família está em 4,19",
    body: "A repetição da campanha subiu de 3,07 no Dia 20 para 3,93 hoje, e o excesso sobre o teto passou de 0,41 para 0,43 desde a leitura de ontem. O alcance de 16.142 pessoas cobre só 6% a 7% do público estimado da região, mas a entrega vem se fechando sobre quem já viu os vídeos: no último dia, 15% das impressões chegaram a pessoas novas, contra 10% no período anterior, uma amostra de apenas um dia. O vídeo da família ficou com 65% do gasto de novembro e com 77% do gasto desde ontem, a um CPM de R$ 24,00, contra R$ 9,40 da perda do dente. Quanto mais a família concentra a verba, mais a repetição sobe. As opções em estudo são pausar a família, trocá-la por um vídeo novo ou reativar a estética, que está em 2,69.",
    gauge: {
      label: "Repetição dos anúncios da campanha",
      value: 3.93,
      threshold: 3.5,
      max: 5,
      valueLabel: "3,93 hoje",
      thresholdLabel: "teto 3,5",
      minLabel: "0",
      maxLabel: "5,0",
    },
  },

  comparison: {
    title: "O Dia 20 e hoje",
    subtitle:
      "Compara os números acumulados da campanha em 27/10 (Dia 20, até 08h) e em 24/11 (Dia 48, até a manhã).",
    beforeLabel: "27/10 (dia 20)",
    nowLabel: "24/11 (dia 48)",
    rows: [
      {
        metric: "Pessoas alcançadas",
        before: "11.544",
        now: "16.142",
        verdict: "better",
        takeaway: "O alcance cresceu 40% em 28 dias e ainda cobre só cerca de 7% do público da região.",
      },
      {
        metric: "Custo por ThruPlay",
        before: "R$ 0,0300",
        now: "R$ 0,0311",
        verdict: "same",
        takeaway:
          "Subiu 4%, dentro da faixa de referência de R$ 0,025 a R$ 0,033.",
      },
      {
        metric: "Impressões que viram ThruPlay",
        before: "60%",
        now: "62%",
        verdict: "better",
        takeaway:
          "Mais gente assiste ao trecho principal dos vídeos, o que ajuda a segurar o custo por ThruPlay.",
      },
      {
        metric: "Custo por mil impressões (CPM)",
        before: "R$ 17,98",
        now: "R$ 19,20",
        verdict: "attention",
        takeaway:
          "Aparecer ficou 7% mais caro. Em novembro o CPM foi de R$ 20,90, puxado pelo vídeo da família.",
      },
      {
        metric: "Repetição",
        before: "3,07",
        now: "3,93",
        verdict: "attention",
        takeaway:
          "Cada pessoa alcançada viu os anúncios quase 4 vezes, em média, acima do teto de 3,5.",
      },
      {
        metric: "Conversas iniciadas no WhatsApp",
        before: "3",
        now: "4",
        verdict: "attention",
        takeaway:
          "Só uma conversa nova em 28 dias, a última em 29/10.",
      },
    ],
    note: "O orçamento diário está em R$ 16 desde 03/11, contra R$ 33 antes. De 04/11 a 23/11 o gasto médio foi de R$ 16,46 por dia, 103% do previsto, com picos de 125% a 140% em domingos e segundas. Novembro deve fechar perto de R$ 526, e a média desde o início é de R$ 25,39 por dia, ainda influenciada pelos R$ 33 do começo. Ontem (23/11) o gasto fechou em R$ 19,97, o dia de melhor custo por ThruPlay (R$ 0,0281) e CPM (R$ 18,27) entre os que gastaram mais de R$ 15 desde 03/11. É um dia só, e a leitura de amanhã mostra se isso se mantém.",
  },

  creatives: {
    title: "Leitura por vídeo",
    subtitle:
      "Os vídeos rodam no mesmo público, de 25 a 65+ anos, num raio de 12 km. Números de novembro (01 a 24/11), com a conclusão do vídeo lida até 23/11. A estética segue desligada e não gastou nada no mês, e os valores dela estão no acumulado do gráfico de investimento. A soma dos vídeos fica R$ 0,01 acima do total da campanha, diferença de atualização do Meta.",
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
    note: "O vídeo da família custa 75% mais que o da perda do dente para aparecer e recebeu 65% do gasto de novembro, contra 20% da perda do dente, que alcançou 3.105 pessoas com R$ 82,54, perto das 2.615 da família com R$ 270,42. A estética, desligada, teve CPM acumulado de R$ 22,36. O CPM da prótese vem de 587 impressões e ainda não serve de comparação.",
  },

  retentionChart: {
    title: "Até onde as pessoas assistem, somando os vídeos",
    max: 50000,
    ticks: ["0", "10.000", "20.000", "30.000", "40.000", "50.000 reproduções"],
    data: [
      { label: "25% do vídeo", sublabel: "64% das impressões", value: 40807, display: "40.807", tone: "neutral" },
      { label: "50% do vídeo", sublabel: "47% das impressões", value: 30055, display: "30.055", tone: "neutral" },
      { label: "75% do vídeo", sublabel: "28% das impressões", value: 17892, display: "17.892", tone: "neutral" },
      { label: "95% do vídeo", sublabel: "19% das impressões", value: 11952, display: "11.952", tone: "neutral" },
      { label: "Vídeo inteiro", sublabel: "18% das impressões", value: 11496, display: "11.496", tone: "neutral" },
    ],
    note: "As 30.055 reproduções até a metade são a base do remarketing da Fase 2, que estava prevista para 21/11 e ainda não foi aberto. São reproduções e não pessoas: o alcance de 16.142 é o limite de quantas pessoas diferentes podem estar nessa lista. Em novembro os primeiros marcos ficaram mais altos (67% das impressões chegam a 25% e 54% a 50%) e os finais mais baixos (17% veem o vídeo inteiro), o que combina com o peso do vídeo da família, o mais longo.",
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
      { label: "Cliques no botão", value: "112", detail: "42 deles em novembro" },
      { label: "Taxa de cliques", value: "0,18%", detail: "das impressões" },
      { label: "Conversas iniciadas", value: "4", detail: "a última em 29/10" },
      { label: "Custo por conversa", value: "R$ 304,72" },
    ],
    clicksChart: {
      title: "Cliques no botão do WhatsApp em novembro, por vídeo",
      max: 30,
      ticks: ["0", "10", "20", "30 cliques"],
      data: [
        { label: "Família", sublabel: "sem conversa em novembro", value: 24, display: "24", tone: "familia" },
        { label: "Perda do dente", sublabel: "sem conversa em novembro", value: 12, display: "12", tone: "perda" },
        { label: "Reabilitação", sublabel: "sem conversa em novembro", value: 6, display: "6", tone: "reabilitacao" },
        { label: "Prótese sobre implante", sublabel: "sem conversa em novembro", value: 0, display: "0", tone: "protese" },
      ],
      note: "São 26 dias sem conversa nova: foram 42 cliques em novembro e nenhuma conversa, e 112 cliques para 4 conversas desde o início (3,6%). As quatro conversas vieram duas da família, uma da estética e uma da reabilitação. A perda do dente tem 21.201 impressões acumuladas e nenhuma conversa, apesar de um CTR de 0,21% em novembro, perto dos 0,23% da família. A hipótese é o áudio do vídeo pedir para clicar em \"Saiba Mais\", enquanto o botão do anúncio é \"Enviar mensagem\", ainda sem confirmação. Sem o registro da origem na recepção, não dá para saber se há conversas chegando por outros caminhos.",
    },
  },

  actionPlan: [
    {
      title: "Adicionar saldo ou cadastrar uma forma de pagamento",
      description:
        "O saldo pré-pago da conta é de R$ 112,58, o que cobre cerca de 7 dias ao ritmo de R$ 16,46 por dia, até por volta de 01/12. A conta não tem forma de pagamento cadastrada, e, se o saldo acabar, os anúncios pausam. Aqui precisamos do Daniel para reabastecer a conta ou cadastrar um cartão.",
      urgent: true,
    },
    {
      title: "Decidir o que fazer com o vídeo da família",
      description:
        "A família está em 4,19 de repetição, ficou com 77% do gasto desde ontem e tem o CPM mais alto da campanha (R$ 24,00 no último dia, contra R$ 9,40 da perda do dente). As opções são pausar, trocar por um vídeo novo ou reativar a estética, que está em 2,69 de repetição e com qualidade acima da média no Meta, mas foi o vídeo de maior custo por ThruPlay na primeira fase. A proposta é decidir em conjunto antes da próxima leitura, porque a decisão segue em aberto há semanas.",
      urgent: true,
    },
    {
      title: "Definir a data e a verba do remarketing da Fase 2",
      description:
        "A abertura do remarketing estava prevista para 21/11 e ainda não aconteceu. A divisão prevista, de R$ 23 por dia no topo e R$ 10 por dia no remarketing, se baseava em R$ 33 por dia, e hoje o orçamento é de R$ 16. A proposta é abrir, adiar ou rever a divisão de verba. A lista tem 30.055 reproduções até a metade, mas o limite real é o alcance de 16.142 pessoas.",
    },
    {
      title: "Confirmar o orçamento diário de R$ 16 e o tamanho do público",
      description:
        "O orçamento passou de R$ 33 para R$ 16 em 03/11, e falta combinar o motivo e por quanto tempo ele vale. Com a repetição acima do teto, também vale avaliar se o público ou o raio (hoje 25 a 65+ anos, a 12 km) deve ser ampliado. A proposta é não alterar nada antes de definir isso em conjunto.",
    },
    {
      title: "Registrar na recepção de qual anúncio vem cada conversa",
      description:
        "O objetivo da campanha é mostrar que a Regente atende adultos, e a forma de saber se isso funciona é ver quantas conversas pedem tratamento adulto. Hoje não há esse registro, nem para as 4 conversas até agora. A recepção precisa anotar o motivo do contato e o anúncio de origem, e vale perguntar se chegaram mensagens por outros caminhos nos últimos 26 dias. Do nosso lado, falta confirmar o evento de clique no WhatsApp.",
      urgent: true,
    },
    {
      title: "Conferir o áudio do vídeo da perda do dente",
      description:
        "O vídeo pede para clicar em \"Saiba Mais\", mas o botão do anúncio é \"Enviar mensagem\". É o vídeo mais barato da campanha, com R$ 0,030 por ThruPlay em novembro, e ainda não gerou nenhuma conversa em 21.201 impressões. Se o áudio for o que segura as conversas, uma versão ajustada pode transformá-lo também no que mais gera contatos.",
    },
    {
      title: "Fechar os critérios da Fase 1 e do remarketing",
      description:
        "O custo de referência do ThruPlay ficou em R$ 0,028 a R$ 0,029 na primeira semana e em R$ 0,0311 no acumulado, numa faixa de R$ 0,025 a R$ 0,033. Com esse número, dá para definir o que conta como sucesso da Fase 1 e quem entra no público do remarketing, olhando pessoas únicas e tempo assistido, não só reproduções.",
    },
    {
      title: "Confirmar a autorização de imagem dos pacientes",
      description:
        "Os vídeos trazem depoimentos de pacientes reais. É preciso confirmar que há termo de autorização de uso de imagem assinado para cada um deles.",
    },
  ],

  footer:
    "Relatório preparado a partir das leituras de performance acompanhadas desde o início da veiculação, em 08/10/2026. Última leitura: 24/11/2026, pela manhã.",
};
