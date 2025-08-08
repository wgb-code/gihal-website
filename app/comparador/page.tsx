"use client"

import SiteShell from "@/components/site-shell"
import CompareTable from "@/components/compare-table"
import { produtos, type ProductFull } from "@/lib/data"
import { useMemo, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Page() {
  const [sel, setSel] = useState<string[]>([])

  const items = useMemo<ProductFull[]>(() => {
    return produtos.filter((p) => sel.includes(p.id))
  }, [sel])

  function change(i: number, id: string) {
    setSel((prev) => {
      const next = [...prev]
      next[i] = id
      return Array.from(new Set(next.filter(Boolean))).slice(0,3)
    })
  }

  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold">Comparador de Produtos</h1>
        <p className="mt-2 text-muted-foreground">Selecione até 3 produtos para comparar especificações e benefícios.</p>

        <div className="grid md:grid-cols-3 gap-3 mt-6">
          {[0,1,2].map((i) => (
            <Select key={i} value={sel[i] ?? ""} onValueChange={(v) => change(i, v)}>
              <SelectTrigger><SelectValue placeholder={`Selecionar produto ${i+1}`} /></SelectTrigger>
              <SelectContent>
                {produtos.map((p) => <SelectItem key={p.id} value={p.id}>{p.nome}</SelectItem>)}
              </SelectContent>
            </Select>
          ))}
        </div>

        <div className="mt-6">
          <CompareTable items={items} />
        </div>
      </section>
    </SiteShell>
  )
}
