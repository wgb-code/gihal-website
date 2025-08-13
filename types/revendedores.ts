export interface Revendedor {
    nome: string
    cidade: string
    telefone?: string
    email?: string
    lat?: number
    lng?: number
}

export interface Estado {
    sigla: string
    nome: string
}

export interface PaginationResult {
    revendedores: Revendedor[]
    total: number
    totalPaginas: number
}

export interface RevendedoresFilters {
    estadoSelecionado: string
    paginaAtual: number
    itensPorPagina: number
}
