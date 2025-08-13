export type ProductFull = {
  id: string
  slug: string
  nome: string
  categoria: string
  imagem: string
  resumo: string
  especificacoes: Record<string, string>
  beneficios: string[]
  videos?: string[]
}

export const produtos: ProductFull[] = [
  {
    id: "p1",
    slug: "plantadeira-direto-gp3000",
    nome: "Plantadeira Direto GP-3000",
    categoria: "Plantadeiras",
    imagem: "/gihal-gp-3000-planter.png",
    resumo: "Plantadeira de plantio direto com alta precisão e robustez para diferentes culturas.",
    especificacoes: {
      "Linhas": "7 a 13",
      "Espaçamento": "45–50 cm",
      "Capacidade de adubo": "800 L",
      "Capacidade de sementes": "600 L",
      "Peso": "3.200 kg",
      "Potência requerida": "120–160 cv",
    },
    beneficios: [
      "Maior produtividade com distribuição precisa",
      "Baixa manutenção e alta durabilidade",
      "Excelente custo-benefício",
    ],
    videos: [],
  },
  {
    id: "p2",
    slug: "patrola-frontal-gp-3600f",
    nome: "Patrola Frontal GP-3600F",
    categoria: "Patrolas",
    imagem: "/gihal-gp-3600f-patrol.png",
    resumo: "Patrola frontal versátil para aplicações agrícolas e rodoviárias, com alta resistência.",
    especificacoes: {
      "Largura da lâmina": "3,6 m",
      "Ajuste de inclinação": "Hidráulico",
      "Peso": "1.450 kg",
      "Compatibilidade": "Tratores 4x4",
    },
    beneficios: [
      "Operação precisa com ajuste hidráulico",
      "Construção robusta para longa vida útil",
      "Fácil acoplamento e uso",
    ],
  },
  {
    id: "p3",
    slug: "vagao-forrageiro-vf-12000",
    nome: "Vagão Forrageiro VF-12000",
    categoria: "Vagões",
    imagem: "/vagao-forrageiro-gihal.png",
    resumo: "Vagão forrageiro com alto desempenho na distribuição e mistura de forragens.",
    especificacoes: {
      "Capacidade": "12.000 L",
      "Sistema de distribuição": "Duplo sem-fim",
      "Acionamento": "TDP 540 rpm",
    },
    beneficios: [
      "Distribuição homogênea",
      "Baixo consumo de combustível",
      "Fácil manutenção",
    ],
  },
]

export const categorias = Array.from(new Set(produtos.map((p) => p.categoria)))

export type Revendedor = {
  nome: string
  cidade: string
  telefone?: string
  email?: string
  lat?: number
  lng?: number
}

export const revendedores: Revendedor[] = [
  /**
   *  Rio Grande do Sul - RS
  */
  {
    nome: "GN TRATORES",
    cidade: "Agudo - RS",
    telefone: "(55) 3265-3272",
    email: "gelsonabilio@terra.com.br",
    lat: -29.647044013309316,
    lng: -53.23772784576613
  },
  {
    nome: "COMERCIAL AGRÍCOLA KOLLER LTDA",
    cidade: "Ajuricaba - RS",
    telefone: "(55) 9955-1380",
    email: "egidiokoller@gmail.com",
    lat: -28.239262839979716,
    lng: -53.772628441881764
  },
  {
    nome: "COMERCIAL FERMAPE",
    cidade: "Boa Vista do Cadeado - RS",
    telefone: "(55) 3851-1818",
    email: "",
    lat: -28.5776404979927,
    lng: -53.811612143841025
  },
  {
    nome: "AGROPECUÁRIA BOM GOSTO",
    cidade: "Cacique Doble - RS",
    telefone: "(54) 3552-1345",
    email: "",
    lat: -27.770160622661642,
    lng: -51.66219803542872
  },
  {
    nome: "ROCHA EQUIPAMENTOS AGRÍCOLAS",
    cidade: "Camaquã - RS",
    telefone: "(51) 3671-6997",
    email: "rochaeqagricolas@gmail.com",
    lat: -30.86289718262266,
    lng: -51.82588164387082
  },
  {
    nome: "FERRARIA DO COLONO LTDA",
    cidade: "Camaquã - RS",
    telefone: "(51) 3671-2826",
    email: "",
    lat: -30.846445438272287,
    lng: -51.809038420806765
  },
  {
    nome: "AGROCAMPO COM E REP",
    cidade: "Campina das Missões - RS",
    telefone: "(55) 99623-2621",
    email: "",
    lat: -30.33036855657104,
    lng: -54.32901271124797
  },
  {
    nome: "AGRI PEÇAS",
    cidade: "Canguçu - RS",
    telefone: "(53) 9971-7701",
    email: "agripecas@yahoo.com.br",
    lat: -31.387534680394385,
    lng: -52.68169191686339
  },
  {
    nome: "AGM MISSÕES IMPLEMENTOS E PEÇAS LTDA",
    cidade: "Cerro Largo - RS",
    telefone: "(55) 3359-1166",
    email: "agmmissoes@hotmail.com",
    lat: -28.146937754845677,
    lng: -54.733906989999156
  },
  {
    nome: "MONTEIRO & CARGNELUTTI",
    cidade: "Coronel Bicaco - RS",
    telefone: "(55) 3557-1311",
    email: "gladis.weber@hotmail.com",
    lat: -27.7173814898605,
    lng: -53.70973304232896
  },
  /**
   * Santa Catarina - SC
  */
  {
    nome: "PIAZZA COMERCIO DE TRATORES E MÁQUINAS AGRÍCOLAS LTDA",
    cidade: "Chapecó - SC",
    telefone: "(49) 204-91900",
    email: "atendimento@piazzatratores.com.br",
    lat: -27.085931142292075,
    lng: -52.621470774695155
  },
  {
    nome: "TRATOR PEÇAS CHAPECÓ LTDA",
    cidade: "Chapecó - SC",
    telefone: "(49) 3361-2400",
    email: "",
    lat: -27.090424189675858,
    lng: -52.622055974694625
  },
  {
    nome: "MEAGRO MEC. AGRÍCOLA DE TRATORES LTDA",
    cidade: "Herval do Oeste - SC",
    telefone: "(49) 3554-0070",
    email: "andersongluzezak@hotmail.com",
    lat: -27.17172841141796,
    lng: -51.49687011702079
  },
  {
    nome: "AGRO RIBEIRO COM. PEÇAS AGRIIC. LTDA",
    cidade: "Lebon Regis - SC",
    telefone: "(49) 3247-1061",
    email: "agroribeirocomercios@hotmail.com",
    lat: -27.566915207149073,
    lng: -50.814382596239014
  },
  {
    nome: "EDILSON MÁQUINAS",
    cidade: "Ouro - SC",
    telefone: "(49) 3439-0191",
    email: "edilson_schranck@hotmail.com",
    lat: -27.257286448613463,
    lng: -51.73342819612846
  },
  {
    nome: "WALTER AGROPECUARIA",
    cidade: "Seara - SC",
    telefone: "(49) 3452-2124",
    email: "comerical@agrowalter.com.br",
    lat: -27.14908538175872,
    lng: -52.30917722921955
  },
  {
    nome: "COOPERURUBICI",
    cidade: "Urubici - SC",
    telefone: "(49) 3278-4000",
    email: "rodonei@cooperurubici.com",
    lat: -27.991634027759932,
    lng: -49.578119803498375
  },
  {
    nome: "ALESSI AGROPECUARIA LTDA",
    cidade: "Xaxim - SC",
    telefone: "(49) 3353-1622",
    email: "alessi@alessiagropecuaria.com.br",
    lat: -26.960759169731865,
    lng: -52.53588357654795
  }
]

export type FaqItem = {
  question: string
  answer: string
}

export const supportFaq: FaqItem[] = [
  {
    question: "Como solicitar orçamento?",
    answer:
      "Acesse a página de Contato e selecione o produto. Nossa equipe retornará rapidamente.",
  },
  {
    question: "Há peças de reposição?",
    answer:
      "Sim, trabalhamos com estoque e rede de revendedores para garantir disponibilidade.",
  },
  {
    question: "A GIHAL exporta?",
    answer: "Sim, já atendemos Uruguai, Paraguai, China e estudamos novos mercados.",
  },
]
