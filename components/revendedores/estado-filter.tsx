import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Estado } from "@/types/revendedores"

interface EstadoFilterProps {
    estadoSelecionado: string
    estadosDisponiveis: Estado[]
    onEstadoChange: (estado: string) => void
}

export function EstadoFilter({ estadoSelecionado, estadosDisponiveis, onEstadoChange }: EstadoFilterProps) {
    return (
        <div className="flex flex-col gap-2 min-w-[200px]">
            <label htmlFor="estado-select" className="font-semibold">
                Filtrar por Estado
            </label>

            <Select value={estadoSelecionado} onValueChange={onEstadoChange}>
                <SelectTrigger id="estado-select" className="w-full">
                    <SelectValue placeholder="Selecione um estado" />
                </SelectTrigger>

                <SelectContent
                    className="max-h-[300px]"
                    position="popper"
                    side="bottom"
                    align="start"
                    sideOffset={4}
                    avoidCollisions={true}
                >
                    {estadosDisponiveis.map((estado) => (
                        <SelectItem key={estado.sigla} value={estado.sigla}>
                            {estado.nome}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}
