"use client"

import SiteShell from "@/components/site-shell"
import DealersMap from "@/components/dealers-map.client"
import DealerFinder from "@/components/dealer-finder"
import {
  EstadoFilter,
  RevendedoresStats,
  RevendedoresList,
  Pagination
} from "@/components/revendedores"
import { useRevendedores } from "@/hooks/use-revendedores"

export default function RevendedoresPage() {
  const {
    filters,
    estadosDisponiveis,
    revendedoresFiltrados,
    paginationResult,
    handleEstadoChange,
    paginaAnterior,
    proximaPagina
  } = useRevendedores()

  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold">Revendedores</h1>
        <p className="mt-3 text-muted-foreground">
          Encontre o revendedor mais próximo e fale com um especialista local.
        </p>

        <div className="mt-6">
          <DealersMap />
        </div>

        <div className="mt-6">
          <DealerFinder />
        </div>

        <div className="mt-8 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <EstadoFilter
              estadoSelecionado={filters.estadoSelecionado}
              estadosDisponiveis={estadosDisponiveis}
              onEstadoChange={handleEstadoChange}
            />
          </div>

          <RevendedoresStats
            estadoSelecionado={filters.estadoSelecionado}
            total={paginationResult.total}
            revendedoresFiltrados={revendedoresFiltrados.length}
            estadosDisponiveis={estadosDisponiveis}
          />
        </div>

        <RevendedoresList revendedores={paginationResult.revendedores} />

        <Pagination
          paginaAtual={filters.paginaAtual}
          totalPaginas={paginationResult.totalPaginas}
          onPaginaAnterior={paginaAnterior}
          onProximaPagina={proximaPagina}
        />
      </section>
    </SiteShell>
  )
}
