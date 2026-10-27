import type { Report } from "@/types/report";

/**
 * Single source of truth for the Dia 20 reading (27/10/2026, around 08h).
 *
 * Phase 1 runs one top-of-funnel campaign (REGMM_TOF_ENGAJAMENTO_202610) with
 * a single open audience optimised for ThruPlays. Delivery started on 08/10
 * (Dia 1); 27/10 is partial. On 26/10 the estética video was switched off and
 * the two reserve videos (reabilitação and prótese) went live.
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
    period: "Dia 20 de veiculação",
    range: "08 a 27/10/2026, até 08h",
  },

  hero: {
    headline:
      "Em 20 dias, 21.235 visualizações de vídeo a 3 centavos cada. Os vídeos foram trocados, e o gasto de ontem ficou abaixo do previsto.",
    lead: "Desde 08/10 foram investidos R$ 638,03 na campanha que apresenta a Regente como clínica da família toda, adultos incluídos. Os vídeos chegaram a 11.544 pessoas num raio de 12 km de Mogi Mirim e somaram 21.235 ThruPlays, que é como o Meta conta quem assistiu a pelo menos 15 segundos ou ao vídeo inteiro. O custo de cada ThruPlay está estável em R$ 0,0300. A mudança desta leitura é a troca de vídeos: o da estética saiu e os de reabilitação oral e prótese sobre implante entraram no lugar. Ontem o gasto fechou em R$ 20,43, 62% dos R$ 33 diários, e o próximo passo é ver se ele volta ao normal.",
  },

  highlights: [
    {
      label: "Pessoas alcançadas",
      value: "11.544",
      detail: "35.479 impressões · cerca de 5% do público da região",
      positive: "Eram 6.796 pessoas no fim da primeira semana",
    },
    {
      label: "ThruPlays",
      value: "21.235",
      detail: "60% das impressões viraram ThruPlay",
      positive: "Eram 54% no fim da primeira semana",
    },
    {
      label: "Custo por ThruPlay",
      value: "R$ 0,0300",
      detail: "acumulado · R$ 638,03 investidos",
      positive: "Dentro da faixa de referência, de R$ 0,025 a R$ 0,033",
    },
  ],

  dailyCostChart: {
    title: "Custo por ThruPlay: primeira semana, acumulado e últimos dias",
    max: 0.04,
    ticks: ["R$ 0", "R$ 0,01", "R$ 0,02", "R$ 0,03", "R$ 0,04"],
    data: [
      { label: "Primeira semana", sublabel: "08 a 14/10", value: 0.0285, display: "R$ 0,0285", tone: "neutral" },
      { label: "Acumulado", sublabel: "08 a 27/10, até 08h", value: 0.03, display: "R$ 0,0300", tone: "highlight" },
      { label: "25/10", sublabel: "domingo", value: 0.0313, display: "R$ 0,0313", tone: "neutral" },
      { label: "26/10", sublabel: "segunda, dia fechado", value: 0.0309, display: "R$ 0,0309", tone: "neutral" },
    ],
  },

  spend: {
    title: "Como o investimento foi dividido entre os vídeos",
    slices: [
      { creative: "familia", label: "Família", amount: 175.19, display: "R$ 175,19" },
      { creative: "estetica", label: "Estética (desativado)", amount: 311.98, display: "R$ 311,98" },
      { creative: "perda", label: "Perda do dente", amount: 147.26, display: "R$ 147,26" },
      { creative: "reabilitacao", label: "Reabilitação", amount: 2.43, display: "R$ 2,43" },
      { creative: "protese", label: "Prótese sobre implante", amount: 0.98, display: "R$ 0,98" },
    ],
    totalLabel: "Total investido na campanha (08 a 27/10)",
    totalDisplay: "R$ 638,03",
  },

  alert: {
    eyebrow: "Ponto de atenção",
    intro:
      "A repetição dos anúncios passou de 3,0 pela primeira vez, ainda abaixo do teto de 3,5. A troca de vídeos deve segurar a alta.",
    title:
      "A repetição chegou a 3,07 e o vídeo da família já está acima de 3,0",
    body: "A repetição da campanha subiu de 3,04 para 3,07 em um dia e cresce cerca de 0,06 por dia desde o fim da primeira semana, quando estava em 2,34. É um ritmo bem mais lento que o projetado na leitura anterior, que apontava o teto de 3,5 entre 20 e 21/10. Só 4,5% a 5,3% do público estimado da região foi alcançado, e cerca de 24% das impressões das últimas 24 horas chegaram a pessoas novas, perto dos 25% da leitura anterior. Com a estética fora, a verba se divide entre família, perda do dente e os dois vídeos novos, o que tende a frear a alta. O vídeo da família é o que está mais perto do teto, com 3,02. Não há urgência até 3,5.",
    gauge: {
      label: "Repetição dos anúncios da campanha",
      value: 3.07,
      threshold: 3.5,
      max: 5,
      valueLabel: "3,07 hoje",
      thresholdLabel: "teto 3,5",
      minLabel: "0",
      maxLabel: "5,0",
    },
  },

  comparison: {
    title: "O fim da primeira semana e hoje",
    subtitle:
      "Compara os números acumulados da campanha em 14/10 (Dia 7, até 18h50) e em 27/10 (Dia 20, até 08h).",
    beforeLabel: "14/10 (dia 7)",
    nowLabel: "27/10 (dia 20)",
    rows: [
      {
        metric: "Pessoas alcançadas",
        before: "6.796",
        now: "11.544",
        verdict: "better",
        takeaway: "O alcance cresceu 70% e ainda cobre só cerca de 5% do público da região.",
      },
      {
        metric: "Custo por ThruPlay",
        before: "R$ 0,0285",
        now: "R$ 0,0300",
        verdict: "same",
        takeaway:
          "Subiu 5%, dentro da faixa de referência de R$ 0,025 a R$ 0,033.",
      },
      {
        metric: "Impressões que viram ThruPlay",
        before: "54%",
        now: "60%",
        verdict: "better",
        takeaway:
          "Mais gente assiste ao trecho principal dos vídeos, o que segura o custo por ThruPlay.",
      },
      {
        metric: "Custo por mil impressões (CPM)",
        before: "R$ 15,26",
        now: "R$ 17,98",
        verdict: "attention",
        takeaway:
          "Aparecer ficou 18% mais caro, compensado pela retenção maior.",
      },
      {
        metric: "Repetição",
        before: "2,34",
        now: "3,07",
        verdict: "attention",
        takeaway:
          "Cada pessoa alcançada viu os anúncios 3 vezes, em média, abaixo do teto de 3,5.",
      },
    ],
    note: "O orçamento combinado é de R$ 33 por dia. Ontem (26/10) o gasto fechou em R$ 20,43, 62% do previsto, no dia em que os vídeos foram trocados. A semana iniciada em 25/10 soma R$ 64,38 em dois dias fechados e parte de 27/10, contra R$ 99 se os três dias fossem completos. Desde o início, a média é de R$ 33,35 por dia. Uma queda de gasto logo após a troca é comum, enquanto os vídeos novos passam pela revisão do Meta e começam a entregar, mas essa explicação é uma hipótese ainda sem confirmação.",
  },

  creatives: {
    title: "Leitura por vídeo",
    subtitle:
      "Os vídeos rodam no mesmo público, de 25 a 65+ anos, num raio de 12 km. Números acumulados de 08 a 27/10, até 08h. Os dois vídeos de reserva entraram entre ontem e hoje, e seus números ainda são pequenos demais para comparar. A soma dos vídeos fica R$ 0,19 abaixo do total da campanha, diferença de atualização do Meta.",
    rows: [
      {
        creative: "familia",
        name: "Atendimento família",
        duration: "47 s",
        invested: "R$ 175,19",
        impressions: "8.287",
        frequency: "3,02",
        thruPlays: "6.009",
        costPerThruPlay: "R$ 0,029",
        completion: "18%",
        attention: true,
      },
      {
        creative: "estetica",
        name: "Estética e clareamento",
        duration: "44 s · desativado",
        invested: "R$ 311,98",
        impressions: "13.953",
        frequency: "2,69",
        thruPlays: "9.595",
        costPerThruPlay: "R$ 0,033",
        completion: "12%",
      },
      {
        creative: "perda",
        name: "Perda do dente",
        duration: "27 s",
        invested: "R$ 147,26",
        impressions: "12.809",
        frequency: "2,21",
        thruPlays: "5.559",
        costPerThruPlay: "R$ 0,026",
        completion: "67%",
        positiveResult: true,
      },
      {
        creative: "reabilitacao",
        name: "Reabilitação oral",
        duration: "40 s · novo",
        invested: "R$ 2,43",
        impressions: "339",
        frequency: "1,08",
        thruPlays: "45",
        costPerThruPlay: "R$ 0,054",
        completion: "—",
      },
      {
        creative: "protese",
        name: "Prótese sobre implante",
        duration: "26 s · novo",
        invested: "R$ 0,98",
        impressions: "82",
        frequency: "1,04",
        thruPlays: "27",
        costPerThruPlay: "R$ 0,036",
        completion: "—",
      },
    ],
  },

  cpmChart: {
    title: "Custo por mil impressões (CPM), por vídeo",
    max: 25,
    ticks: ["0", "R$ 5", "R$ 10", "R$ 15", "R$ 20", "R$ 25"],
    data: [
      { label: "Família", value: 21.14, display: "R$ 21,14", tone: "familia" },
      { label: "Estética", sublabel: "desativado", value: 22.36, display: "R$ 22,36", tone: "estetica" },
      { label: "Perda do dente", value: 11.5, display: "R$ 11,50", tone: "perda" },
      { label: "Reabilitação", sublabel: "poucos dados", value: 7.17, display: "R$ 7,17", tone: "reabilitacao" },
      { label: "Prótese sobre implante", sublabel: "poucos dados", value: 11.95, display: "R$ 11,95", tone: "protese" },
    ],
    note: "O vídeo da perda do dente custa metade do da estética para aparecer, por isso recebeu 36% das impressões com 23% da verba. A estética tinha o CPM mais alto, o maior custo por ThruPlay e 49% do investimento, e foi o vídeo que saiu na troca. Os CPMs de reabilitação e prótese vêm de 421 impressões e não servem de comparação ainda.",
  },

  retentionChart: {
    title: "Até onde as pessoas assistem, somando os vídeos",
    max: 25000,
    ticks: ["0", "5.000", "10.000", "15.000", "20.000", "25.000 reproduções"],
    data: [
      { label: "25% do vídeo", sublabel: "63% das impressões", value: 22196, display: "22.196", tone: "neutral" },
      { label: "50% do vídeo", sublabel: "43% das impressões", value: 15239, display: "15.239", tone: "neutral" },
      { label: "75% do vídeo", sublabel: "27% das impressões", value: 9611, display: "9.611", tone: "neutral" },
      { label: "95% do vídeo", sublabel: "18% das impressões", value: 6291, display: "6.291", tone: "neutral" },
      { label: "Vídeo inteiro", sublabel: "17% das impressões", value: 6054, display: "6.054", tone: "neutral" },
    ],
    note: "As 15.239 reproduções até a metade são a base do remarketing da Fase 2, que começa por volta de 21/11 e vai falar de novo com quem já conheceu a clínica. São reproduções e não pessoas: o alcance de 11.544 é o limite de quantas pessoas diferentes podem estar nessa lista. Além disso, 37% dessas reproduções vêm do vídeo da perda do dente, o mais curto. A retenção da campanha praticamente não mudou desde a leitura de ontem.",
  },

  completionChart: {
    title: "Quantos ThruPlays chegam ao fim do vídeo",
    max: 100,
    ticks: ["0%", "25%", "50%", "75%", "100%"],
    data: [
      {
        label: "Perda do dente",
        sublabel: "27 s · R$ 0,039 por vídeo inteiro",
        value: 67,
        display: "67%",
        tone: "perda",
      },
      {
        label: "Família",
        sublabel: "47 s · R$ 0,159 por vídeo inteiro",
        value: 18,
        display: "18%",
        tone: "familia",
      },
      {
        label: "Estética",
        sublabel: "44 s · desativado · R$ 0,260 por vídeo inteiro",
        value: 12,
        display: "12%",
        tone: "estetica",
      },
    ],
    note: "A perda do dente é o vídeo mais curto, então é natural que mais gente chegue ao fim. A família retém bem: 75% de quem fez ThruPlay assiste pelo menos até a metade, onde já ouviu que a Regente atende adultos. A estética tinha o pior custo por vídeo inteiro, mais que o dobro do da família, e isso pesou na decisão de tirá-la. Reabilitação e prótese ainda não têm volume para entrar neste gráfico.",
  },

  messages: {
    title: "Quem chamou no WhatsApp",
    subtitle:
      "Nesta fase a campanha busca visualização, e o WhatsApp é um efeito secundário: o botão está em todos os anúncios para quem já quiser conversar.",
    stats: [
      { label: "Cliques no botão", value: "58", detail: "2 novos desde ontem" },
      { label: "Taxa de cliques", value: "0,16%", detail: "das impressões" },
      { label: "Conversas iniciadas", value: "3", detail: "a última em 19/10" },
      { label: "Custo por conversa", value: "R$ 212,68" },
    ],
    clicksChart: {
      title: "Cliques no botão do WhatsApp, por vídeo",
      max: 30,
      ticks: ["0", "10", "20", "30 cliques"],
      data: [
        { label: "Família", sublabel: "2 conversas", value: 22, display: "22", tone: "familia" },
        { label: "Estética", sublabel: "1 conversa · desativado", value: 25, display: "25", tone: "estetica" },
        { label: "Perda do dente", sublabel: "sem conversa", value: 10, display: "10", tone: "perda" },
        { label: "Prótese sobre implante", sublabel: "sem conversa", value: 1, display: "1", tone: "protese" },
        { label: "Reabilitação", sublabel: "sem conversa", value: 0, display: "0", tone: "reabilitacao" },
      ],
      note: "Foram 58 cliques para 3 conversas (5,2%), e não houve conversa nova nos últimos 8 dias. O Meta avalia a qualidade dos anúncios da família e da estética como acima da média, mas a capacidade de gerar conversas dos dois como abaixo da média. A perda do dente recebeu 36% das impressões e só 10 cliques (0,08%, contra 0,27% da família). A hipótese é o áudio do vídeo pedir para clicar em \"Saiba Mais\", enquanto o botão do anúncio é \"Enviar mensagem\", ainda sem confirmação.",
    },
  },

  actionPlan: [
    {
      title: "Registrar na recepção de qual anúncio vem cada conversa",
      description:
        "O objetivo da campanha é mostrar que a Regente atende adultos, e a forma de saber se isso está funcionando é ver quantas conversas pedem tratamento adulto. Hoje não há esse registro, nem para as 3 conversas até agora. Sem ele, também não dá para saber se há conversas chegando por outros caminhos. A recepção precisa anotar o motivo do contato e o anúncio de origem, e do nosso lado falta confirmar o evento de clique no WhatsApp no gerenciador de negócios.",
      urgent: true,
    },
    {
      title: "Acompanhar o gasto diário depois da troca de vídeos",
      description:
        "Ontem o gasto fechou em R$ 20,43, 62% dos R$ 33 diários. A proposta é reler os números amanhã cedo, com 27/10 fechado. Se o gasto voltar perto de R$ 33, a queda foi só da transição. Se continuar bem abaixo, vale conferir o saldo, a forma de pagamento e o limite de gasto da conta, e o status de revisão dos dois vídeos novos. Aqui precisamos do Daniel para confirmar se houve algum bloqueio de cobrança, como nas paradas de 20 e 21/10.",
    },
    {
      title: "Deixar os vídeos novos ganharem volume, sem novas edições",
      description:
        "Reabilitação e prótese somam 72 ThruPlays desde a troca, o que é pouco para qualquer conclusão. A proposta é manter os anúncios como estão por 3 a 5 dias, até 29 a 31/10, e só então avaliar custo e retenção dos dois. A leitura só faz sentido depois de algumas centenas de ThruPlays para cada um.",
    },
    {
      title: "Definir o destino da estética e o plano para a família",
      description:
        "A estética foi desativada depois de concentrar 49% da verba com o pior custo da campanha. A proposta é decidir se ela fica guardada como reserva para a próxima rotação. Também vale combinar já o que entra no lugar do vídeo da família se a repetição dele passar de 3,5, hoje em 3,02.",
    },
    {
      title: "Conferir o áudio do vídeo da perda do dente",
      description:
        "O vídeo pede para clicar em \"Saiba Mais\", mas o botão do anúncio é \"Enviar mensagem\". É o vídeo mais barato da campanha e responde por 36% das impressões, mas só tem 10 cliques. Se o áudio for o que segura os cliques, uma versão ajustada pode transformá-lo também no que mais gera conversas.",
    },
    {
      title: "Fechar os critérios da Fase 1 e do remarketing",
      description:
        "O custo de referência do ThruPlay ficou em R$ 0,028 a R$ 0,029 na primeira semana e em R$ 0,0300 no acumulado, numa faixa diária de R$ 0,025 a R$ 0,033. Com esse número, dá para definir o que conta como sucesso da Fase 1 e quem entra no público do remarketing, olhando pessoas únicas e tempo assistido, não só reproduções. Faltam 25 dias para 21/11, quando o remarketing deve abrir.",
    },
    {
      title: "Confirmar a autorização de imagem dos pacientes",
      description:
        "Os vídeos trazem depoimentos de pacientes reais. É preciso confirmar que há termo de autorização de uso de imagem assinado para cada um deles.",
    },
  ],

  footer:
    "Relatório preparado a partir das leituras de performance acompanhadas desde o início da veiculação, em 08/10/2026. Última leitura: 27/10/2026, por volta das 08h.",
};
