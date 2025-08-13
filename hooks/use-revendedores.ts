import { useState, useMemo, useCallback } from "react"
import { revendedores, estadosBrasil } from "@/lib/revendedores-data"
import type { PaginationResult, RevendedoresFilters } from "@/types/revendedores"

export function useRevendedores() {
    const [filters, setFilters] = useState<RevendedoresFilters>({
        estadoSelecionado: "Todos",
        paginaAtual: 1,
        itensPorPagina: 20
    })

    const estadosDisponiveis = useMemo(() => estadosBrasil, [])

    const revendedoresFiltrados = useMemo(() => {
        if (filters.estadoSelecionado === "Todos") {
            return revendedores
        }
        return revendedores.filter(revendedor => {
            return revendedor.cidade.endsWith(` - ${filters.estadoSelecionado}`)
        })
    }, [filters.estadoSelecionado])

    const paginationResult = useMemo((): PaginationResult => {
        const total = revendedoresFiltrados.length
        const totalPaginas = Math.ceil(total / filters.itensPorPagina)
        const inicio = (filters.paginaAtual - 1) * filters.itensPorPagina
        const fim = inicio + filters.itensPorPagina

        return {
            revendedores: revendedoresFiltrados.slice(inicio, fim),
            total,
            totalPaginas
        }
    }, [revendedoresFiltrados, filters.paginaAtual, filters.itensPorPagina])

    const handleEstadoChange = useCallback((novoEstado: string) => {
        setFilters(prev => ({
            ...prev,
            estadoSelecionado: novoEstado,
            paginaAtual: 1
        }))
    }, [])

    const goToPage = useCallback((pagina: number) => {
        setFilters(prev => ({
            ...prev,
            paginaAtual: pagina
        }))
    }, [])

    const paginaAnterior = useCallback(() => {
        if (filters.paginaAtual > 1) {
            goToPage(filters.paginaAtual - 1)
        }
    }, [filters.paginaAtual, goToPage])

    const proximaPagina = useCallback(() => {
        if (filters.paginaAtual < paginationResult.totalPaginas) {
            goToPage(filters.paginaAtual + 1)
        }
    }, [filters.paginaAtual, paginationResult.totalPaginas, goToPage])

    return {
        filters,
        estadosDisponiveis,
        revendedoresFiltrados,
        paginationResult,
        handleEstadoChange,
        goToPage,
        paginaAnterior,
        proximaPagina
    }
}
