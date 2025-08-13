import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
    paginaAtual: number
    totalPaginas: number
    onPaginaAnterior: () => void
    onProximaPagina: () => void
}

export function Pagination({
    paginaAtual,
    totalPaginas,
    onPaginaAnterior,
    onProximaPagina
}: PaginationProps) {
    if (totalPaginas <= 1) return null

    return (
        <div className="mt-8 flex items-center justify-center gap-4">
            <Button
                variant="outline"
                size="sm"
                onClick={onPaginaAnterior}
                disabled={paginaAtual === 1}
            >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Anterior
            </Button>

            <div className="text-sm text-muted-foreground">
                Página {paginaAtual} de {totalPaginas}
            </div>

            <Button
                variant="outline"
                size="sm"
                onClick={onProximaPagina}
                disabled={paginaAtual === totalPaginas}
            >
                Próxima
                <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
    )
}
