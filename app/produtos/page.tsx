"use client"

import { Suspense, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import SiteShell from "@/components/site-shell"
import ProductCard from "@/components/product-card"
import { produtos, categorias } from "@/lib/data"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Button } from "@/components/ui/button"

function ProdutosContent() {
  const searchParams = useSearchParams()
  const initialCat = (() => {
    const c = searchParams.get("categoria")
    return c && categorias.includes(c) ? c : "todas"
  })()
  const [q, setQ] = useState("")
  const [cat, setCat] = useState<string>(initialCat)
  const filtered = useMemo(() => {
    return produtos.filter((p) => {
      const okCat = cat === "todas" || p.categoria === cat
      const okQ = [p.nome, p.categoria, p.resumo].join(" ").toLowerCase().includes(q.toLowerCase())
      return okCat && okQ
    })
  }, [q, cat])

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl md:text-3xl font-bold">Produtos</h1>
        <Link href="/comparador">
          <Button variant="outline">Comparar Produtos</Button>
        </Link>
      </div>
      <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        <Input placeholder="Buscar produto..." value={q} onChange={(e) => setQ(e.target.value)} />
        <Select value={cat} onValueChange={setCat}>
          <SelectTrigger>
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todas">Todas</SelectItem>
            {categorias.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      {filtered.length === 0 && <div className="text-sm text-muted-foreground mt-8">Nenhum produto encontrado.</div>}
    </section>
  )
}

export default function Page() {
  return (
    <SiteShell>
      <Suspense>
        <ProdutosContent />
      </Suspense>
    </SiteShell>
  )
}
