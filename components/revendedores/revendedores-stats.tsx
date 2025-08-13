import type { Estado } from "@/types/revendedores"

interface RevendedoresStatsProps {
    estadoSelecionado: string
    total: number
    revendedoresFiltrados: number
    estadosDisponiveis: Estado[]
}

export function RevendedoresStats({
    estadoSelecionado,
    total,
    revendedoresFiltrados,
    estadosDisponiveis
}: RevendedoresStatsProps) {
    const estadoAtual = estadosDisponiveis.find(e => e.sigla === estadoSelecionado)

    const mensagem = estadoSelecionado === "Todos"
        ? `${total} revendedores encontrados`
        : `${revendedoresFiltrados} revendedores em ${estadoAtual?.nome}`

    return (
        <div className="text-sm text-muted-foreground mt-2">
            {mensagem}
        </div>
    )
}
