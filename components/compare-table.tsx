"use client"

import { useMemo } from "react"
import type { ProductFull } from "@/lib/data"

export default function CompareTable({ items = [] as ProductFull[] }) {
  const specsKeys = useMemo(() => {
    const set = new Set<string>()
    items.forEach((p) => Object.keys(p.especificacoes).forEach((k) => set.add(k)))
    return Array.from(set)
  }, [items])

  if (items.length === 0) {
    return <div className="text-sm text-muted-foreground">Selecione até 3 produtos para comparar.</div>
  }

  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="min-w-[700px] w-full bg-white">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-3 w-56">Especificação</th>
            {items.map((p) => (
              <th key={p.id} className="text-left p-3">{p.nome}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {specsKeys.map((k) => (
            <tr key={k} className="border-t">
              <td className="p-3 font-medium">{k}</td>
              {items.map((p) => (
                <td key={p.id + k} className="p-3 text-sm text-muted-foreground">
                  {p.especificacoes[k] ?? "-"}
                </td>
              ))}
            </tr>
          ))}
          <tr className="border-t">
            <td className="p-3 font-medium">Benefícios</td>
            {items.map((p) => (
              <td key={p.id + "benef"} className="p-3">
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  {p.beneficios.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
