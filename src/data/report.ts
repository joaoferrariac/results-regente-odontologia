import type { Report } from "@/types/report";

/**
 * Single source of truth for the Dia 7 reading (14/10/2026, around 18h50).
 *
 * Phase 1 runs one top-of-funnel campaign (REGMM_TOF_ENGAJAMENTO_202610) with
 * a single open audience optimised for ThruPlays and three videos, each with a
 * WhatsApp button. Delivery started on 08/10 (Dia 1); 14/10 is partial.
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
    period: "Dia 7 de veiculação",
    range: "primeira semana, 08 a 14/10/2026",
  },

  hero: {
    headline:
      "A primeira semana fecha com 8.512 visualizações de vídeo a menos de 3 centavos cada, e o custo caiu todos os dias.",
    lead: "Desde 08/10 foram investidos R$ 242,66 na campanha que apresenta a Regente como clínica da família toda, adultos incluídos. Os três vídeos chegaram a 6.796 pessoas num raio de 12 km de Mogi Mirim e somaram 8.512 ThruPlays, que é como o Meta conta quem assistiu a pelo menos 15 segundos ou ao vídeo inteiro. O custo de cada ThruPlay caiu de R$ 0,033 no primeiro dia para R$ 0,025 hoje, porque uma parte cada vez maior das pessoas passou a assistir ao trecho principal dos vídeos. O ponto de atenção é a repetição: os anúncios estão voltando às mesmas pessoas, e a troca de vídeos deve ser antecipada.",
  },

  highlights: [
    {
      label: "Pessoas alcançadas",
      value: "6.796",
      detail: "15.906 impressões · cerca de 3% do público da região",
    },
    {
      label: "ThruPlays",
      value: "8.512",
      detail: "54% das impressões viraram ThruPlay",
      positive: "Eram 37% no primeiro dia e chegaram a 69% hoje",
    },
    {
      label: "Custo por ThruPlay",
      value: "R$ 0,0285",
      detail: "acumulado da semana · R$ 242,66 investidos",
      positive: "Caiu de R$ 0,033 em 08/10 para R$ 0,025 hoje",
    },
  ],

  dailyCostChart: {
    title: "Custo por ThruPlay, dia a dia",
    max: 0.04,
    ticks: ["R$ 0", "R$ 0,01", "R$ 0,02", "R$ 0,03", "R$ 0,04"],
    data: [
      { label: "08/10", sublabel: "quinta", value: 0.0327, display: "R$ 0,033", tone: "neutral" },
      { label: "09/10", sublabel: "sexta", value: 0.0306, display: "R$ 0,031", tone: "neutral" },
      { label: "10/10", sublabel: "sábado", value: 0.0291, display: "R$ 0,029", tone: "neutral" },
      { label: "11/10", sublabel: "domingo", value: 0.0289, display: "R$ 0,029", tone: "neutral" },
      { label: "12/10", sublabel: "segunda", value: 0.0267, display: "R$ 0,027", tone: "neutral" },
      { label: "13/10", sublabel: "terça", value: 0.0259, display: "R$ 0,026", tone: "highlight" },
      { label: "14/10", sublabel: "quarta, até 18h50", value: 0.0252, display: "R$ 0,025", tone: "highlight" },
    ],
  },

  spend: {
    title: "Como o investimento foi dividido entre os vídeos",
    slices: [
      { creative: "familia", label: "Família", amount: 66.36, display: "R$ 66,36" },
      { creative: "estetica", label: "Estética", amount: 96.93, display: "R$ 96,93" },
      { creative: "perda", label: "Perda do dente", amount: 79.37, display: "R$ 79,37" },
    ],
    totalLabel: "Total investido (08 a 14/10)",
    totalDisplay: "R$ 242,66",
  },

  alert: {
    eyebrow: "Ponto de atenção",
    intro:
      "A repetição dos anúncios está em 2,34, abaixo do teto de 3,5, mas sobe cerca de 0,2 por dia. É o indicador que vai definir quando os vídeos de reserva entram no ar.",
    title:
      "Os anúncios estão voltando às mesmas pessoas, e o teto de repetição deve chegar antes da troca de vídeos",
    body: "Nos primeiros seis dias, quase metade das impressões chegava a alguém que ainda não tinha visto a Regente. Desde ontem, só 19% chegaram a pessoas novas, e o alcance diário caiu de 2.364 pessoas em 09/10 para 947 em 13/10, mesmo com só 3% do público da região alcançado. O Meta está concentrando a entrega em quem mais assiste aos vídeos, o que ajuda a baratear o ThruPlay, mas acelera a repetição. No ritmo atual, a repetição chega a 3,5 entre 20 e 21/10, um ou dois dias antes da troca de vídeos prevista para 22/10. O vídeo da família é o que está mais perto do teto, com 2,39.",
    gauge: {
      label: "Repetição dos anúncios da campanha",
      value: 2.34,
      threshold: 3.5,
      max: 5,
      valueLabel: "2,34 hoje",
      thresholdLabel: "teto 3,5",
      minLabel: "0",
      maxLabel: "5,0",
    },
  },

  comparison: {
    title: "O primeiro dia e o último dia fechado",
    subtitle:
      "Comparar 08/10 com 13/10, dois dias completos, mostra o que mudou na entrega ao longo da primeira semana.",
    beforeLabel: "08/10 (dia 1)",
    nowLabel: "13/10 (dia 6)",
    rows: [
      {
        metric: "Custo por ThruPlay",
        before: "R$ 0,033",
        now: "R$ 0,026",
        verdict: "better",
        takeaway: "Cada visualização ficou 21% mais barata em seis dias.",
      },
      {
        metric: "Impressões que viram ThruPlay",
        before: "37%",
        now: "64%",
        verdict: "better",
        takeaway:
          "Mais gente assiste ao trecho principal do vídeo, e é isso que puxa o custo para baixo.",
      },
      {
        metric: "Custo por mil impressões (CPM)",
        before: "R$ 12,05",
        now: "R$ 16,65",
        verdict: "attention",
        takeaway:
          "Aparecer ficou 38% mais caro, mas a retenção maior compensou com folga.",
      },
      {
        metric: "Pessoas novas alcançadas no dia",
        before: "2.217",
        now: "947",
        verdict: "attention",
        takeaway:
          "A campanha encontra menos gente nova por dia, sinal de que a entrega está se concentrando.",
      },
      {
        metric: "Repetição no dia",
        before: "1,15",
        now: "2,16",
        verdict: "attention",
        takeaway:
          "Cada pessoa alcançada no dia viu o anúncio duas vezes, em média.",
      },
    ],
    note: "O orçamento combinado é de R$ 33 por dia. Nos seis dias fechados a média foi de R$ 36,92, 12% acima, com picos de R$ 46,72 em 09/10 e R$ 44,78 em 11/10. O Meta costuma compensar esse excesso nos dias seguintes, mas isso ainda não aconteceu. Mantida a média, o mês fecharia perto de R$ 1.110 em vez dos R$ 1.000 planejados.",
  },

  creatives: {
    title: "Leitura por vídeo",
    subtitle:
      "Os três vídeos rodam no mesmo público, de 25 a 65+ anos, num raio de 12 km. Números acumulados de 08 a 14/10, até 18h50.",
    rows: [
      {
        creative: "familia",
        name: "Atendimento família",
        duration: "47 s",
        invested: "R$ 66,36",
        impressions: "3.647",
        frequency: "2,39",
        thruPlays: "2.418",
        costPerThruPlay: "R$ 0,027",
        completion: "20%",
        attention: true,
      },
      {
        creative: "estetica",
        name: "Estética e clareamento",
        duration: "44 s",
        invested: "R$ 96,93",
        impressions: "4.762",
        frequency: "2,01",
        thruPlays: "3.060",
        costPerThruPlay: "R$ 0,032",
        completion: "11%",
      },
      {
        creative: "perda",
        name: "Perda do dente",
        duration: "27 s",
        invested: "R$ 79,37",
        impressions: "7.497",
        frequency: "1,79",
        thruPlays: "3.034",
        costPerThruPlay: "R$ 0,026",
        completion: "61%",
        positiveResult: true,
      },
    ],
  },

  cpmChart: {
    title: "Custo por mil impressões (CPM), por vídeo",
    max: 25,
    ticks: ["0", "R$ 5", "R$ 10", "R$ 15", "R$ 20", "R$ 25"],
    data: [
      { label: "Família", value: 18.2, display: "R$ 18,20", tone: "familia" },
      { label: "Estética", value: 20.35, display: "R$ 20,35", tone: "estetica" },
      { label: "Perda do dente", value: 10.59, display: "R$ 10,59", tone: "perda" },
    ],
    note: "O vídeo da perda do dente custa metade do da estética para aparecer, por isso recebe 47% das impressões com 33% da verba. A estética tem o CPM mais alto, o maior custo por ThruPlay e 40% do investimento, o que a torna a primeira candidata à troca quando os vídeos de reserva entrarem.",
  },

  retentionChart: {
    title: "Até onde as pessoas assistem, somando os três vídeos",
    max: 10000,
    ticks: ["0", "2.500", "5.000", "7.500", "10.000 reproduções"],
    data: [
      { label: "25% do vídeo", sublabel: "57% das impressões", value: 9027, display: "9.027", tone: "neutral" },
      { label: "50% do vídeo", sublabel: "39% das impressões", value: 6260, display: "6.260", tone: "neutral" },
      { label: "75% do vídeo", sublabel: "24% das impressões", value: 3887, display: "3.887", tone: "neutral" },
      { label: "95% do vídeo", sublabel: "17% das impressões", value: 2782, display: "2.782", tone: "neutral" },
      { label: "Vídeo inteiro", sublabel: "17% das impressões", value: 2685, display: "2.685", tone: "neutral" },
    ],
    note: "As 6.260 reproduções até a metade são a base do remarketing da Fase 2, que começa por volta de 21/11 e vai falar de novo com quem já conheceu a clínica. São reproduções e não pessoas: o alcance de 6.796 é o limite de quantas pessoas diferentes podem estar nessa lista.",
  },

  completionChart: {
    title: "Quantos ThruPlays chegam ao fim do vídeo",
    max: 100,
    ticks: ["0%", "25%", "50%", "75%", "100%"],
    data: [
      {
        label: "Perda do dente",
        sublabel: "27 s · R$ 0,043 por vídeo inteiro",
        value: 61,
        display: "61%",
        tone: "perda",
      },
      {
        label: "Família",
        sublabel: "47 s · R$ 0,134 por vídeo inteiro",
        value: 20,
        display: "20%",
        tone: "familia",
      },
      {
        label: "Estética",
        sublabel: "44 s · R$ 0,284 por vídeo inteiro",
        value: 11,
        display: "11%",
        tone: "estetica",
      },
    ],
    note: "A perda do dente é o vídeo mais curto, então é natural que mais gente chegue ao fim. Mesmo assim, a família retém bem: 75% de quem fez ThruPlay assiste pelo menos até a metade, 23 segundos, onde já ouviu que a Regente atende adultos. Na estética esse número é 45%.",
  },

  messages: {
    title: "Quem chamou no WhatsApp",
    subtitle:
      "Nesta fase a campanha busca visualização, e o WhatsApp é um efeito secundário: o botão está em todos os anúncios para quem já quiser conversar.",
    stats: [
      { label: "Cliques no botão", value: "13" },
      { label: "Taxa de cliques", value: "0,08%", detail: "das impressões" },
      { label: "Conversas iniciadas", value: "2", detail: "em 09 e 10/10" },
      { label: "Custo por conversa", value: "R$ 121,33" },
    ],
    clicksChart: {
      title: "Cliques no botão do WhatsApp, por vídeo",
      max: 8,
      ticks: ["0", "2", "4", "6", "8 cliques"],
      data: [
        { label: "Família", sublabel: "1 conversa", value: 6, display: "6", tone: "familia" },
        { label: "Estética", sublabel: "1 conversa", value: 6, display: "6", tone: "estetica" },
        { label: "Perda do dente", sublabel: "sem conversa", value: 1, display: "1", tone: "perda" },
      ],
      note: "A perda do dente recebeu quase metade das impressões e só 1 clique. No ritmo da família, seriam cerca de 12. A hipótese é o áudio do vídeo pedir para clicar em \"Saiba Mais\", enquanto o botão do anúncio é \"Enviar mensagem\". Isso será conferido nesta semana.",
    },
  },

  actionPlan: [
    {
      title: "Registrar na recepção de qual anúncio vem cada conversa",
      description:
        "O objetivo da campanha é mostrar que a Regente atende adultos, e a forma de saber se isso está funcionando é ver quantas conversas pedem tratamento adulto. Hoje não há esse registro, nem para as 2 conversas da semana. A recepção precisa anotar o motivo do contato e o anúncio de origem, e do nosso lado falta confirmar o evento de clique no WhatsApp no gerenciador de negócios.",
      urgent: true,
    },
    {
      title: "Antecipar a entrada dos vídeos de reserva",
      description:
        "Os vídeos de reabilitação oral e prótese sobre implante estão prontos para entrar em 22/10, mas a repetição deve chegar ao teto antes disso. A proposta é colocá-los no ar quando a repetição da campanha chegar a 3,0. O vídeo da estética é o primeiro candidato a sair, por ter o maior custo. O da família fica, porque carrega a mensagem principal.",
    },
    {
      title: "Trazer o gasto diário de volta aos R$ 33",
      description:
        "A média dos seis primeiros dias foi de R$ 36,92. Se o Meta não compensar nos próximos dias, o orçamento diário será ajustado para que o mês feche perto dos R$ 1.000 combinados, já que os créditos são cobrados por semana.",
    },
    {
      title: "Conferir o áudio do vídeo da perda do dente",
      description:
        "O vídeo pede para clicar em \"Saiba Mais\", mas o botão do anúncio é \"Enviar mensagem\". Se for isso que segura os cliques, uma versão com o áudio ajustado pode transformar o vídeo mais barato da campanha também no que mais gera conversas.",
    },
    {
      title: "Fechar os critérios da Fase 1 e do remarketing",
      description:
        "Com uma semana de dados, o custo de referência do ThruPlay fica em R$ 0,029, numa faixa diária de R$ 0,025 a R$ 0,033. Com esse número, dá para definir o que conta como sucesso da Fase 1 e quem entra no público do remarketing, olhando pessoas únicas e tempo assistido, não só reproduções.",
    },
    {
      title: "Confirmar a autorização de imagem dos pacientes",
      description:
        "Os vídeos trazem depoimentos de pacientes reais. É preciso confirmar que há termo de autorização de uso de imagem assinado para cada um deles.",
    },
  ],

  footer:
    "Relatório preparado a partir das leituras de performance acompanhadas desde o início da veiculação, em 08/10/2026.",
};
