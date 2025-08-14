"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

interface PdpCtasProps {
  produtoNome: string
}

export default function PdpCtas({ produtoNome }: PdpCtasProps) {
  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-3">
      <Link
        href={`/contato?produto=${encodeURIComponent(produtoNome)}`}
        onClick={() => trackEvent("cta_click", { cta: "pdp_orcamento", produto: produtoNome })}
      >
        <Button className="bg-green-700 hover:bg-green-800 text-white">Solicite um Orçamento</Button>
      </Link>
      <Link href="/comparador" onClick={() => trackEvent("cta_click", { cta: "pdp_comparador", produto: produtoNome })}>
        <Button variant="outline">Adicionar ao Comparador</Button>
      </Link>
    </div>
  )
}


