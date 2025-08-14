"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { trackEvent } from "@/lib/analytics"

export type Product = {
  id: string
  slug: string
  nome: string
  categoria: string
  imagem: string
  resumo: string
  destaque?: boolean
  precoSugerido?: string
}

export default function ProductCard({ product }: { product: Product }) {
  const img = product.imagem || "/gihal-agricultural-implement.png"
  return (
    <div className="group rounded-xl border overflow-hidden bg-white flex flex-col">
      <div className="relative h-52 w-full">
        <Image
          src={img || "/placeholder.svg"}
          alt={`Foto do produto ${product.nome}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
          className="object-cover transition group-hover:scale-[1.02]"
          priority={false}
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="text-xs uppercase tracking-wide text-muted-foreground">{product.categoria}</div>
        <h3 className="mt-1 font-semibold text-lg">{product.nome}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-3">{product.resumo}</p>
        <div className="mt-4 flex items-center gap-2">
          <Link href={`/produtos/${product.slug}`} className="flex-1" onClick={() => trackEvent("cta_click", { cta: "card_saiba_mais", slug: product.slug })}>
            <Button className="w-full bg-green-700 hover:bg-green-800 text-white">Saiba mais</Button>
          </Link>
          <Link href={`/contato?produto=${encodeURIComponent(product.nome)}`} onClick={() => trackEvent("cta_click", { cta: "card_orcamento", produto: product.nome })}>
            <Button variant="outline">Orçamento</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
