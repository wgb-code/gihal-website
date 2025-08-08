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

export const revendedores = [
  { nome: "AgroSul Máquinas", cidade: "Carazinho - RS", telefone: "(54) 3333-0000", email: "contato@agrosul.com.br" },
  { nome: "Campo Forte Equipamentos", cidade: "Cascavel - PR", telefone: "(45) 3020-1234", email: "vendas@campoforte.com.br" },
  { nome: "Agro Norte", cidade: "Sorriso - MT", telefone: "(66) 3545-9988", email: "comercial@agronorte.com" },
]

export const faq = [
  { q: "Como solicitar orçamento?", a: "Acesse a página de Contato e selecione o produto. Nossa equipe retornará rapidamente." },
  { q: "Há peças de reposição?", a: "Sim, trabalhamos com estoque e rede de revendedores para garantir disponibilidade." },
  { q: "A GIHAL exporta?", a: "Sim, já atendemos Uruguai, Paraguai, China e estudamos novos mercados." },
]
