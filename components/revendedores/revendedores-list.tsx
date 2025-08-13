import type { Revendedor } from "@/types/revendedores"

interface RevendedoresListProps {
    revendedores: Revendedor[]
}

export function RevendedoresList({ revendedores }: RevendedoresListProps) {
    return (
        <div className="grid md:grid-cols-3 gap-4">
            {revendedores.map((revendedor, index) => (
                <div key={`${revendedor.nome}-${index}`} className="rounded-xl border p-4">
                    <div className="font-semibold">{revendedor.nome}</div>
                    <div className="text-sm text-muted-foreground">{revendedor.cidade}</div>

                    {revendedor.telefone && (
                        <div className="text-sm mt-2">{revendedor.telefone}</div>
                    )}

                    {revendedor.email && (
                        <div className="text-sm">{revendedor.email}</div>
                    )}
                </div>
            ))}
        </div>
    )
}
