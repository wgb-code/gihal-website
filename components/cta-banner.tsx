"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

export default function CtaBanner() {
  return (
    <section className="container mx-auto px-4 pb-12">
      <div className="rounded-2xl border bg-gradient-to-r from-green-700 to-green-600 p-6 md:p-10 text-white">
        <h3 className="text-2xl font-bold">Pronto para elevar a produtividade da sua lavoura?</h3>
        <p className="text-white/90 mt-1">Baixe o catálogo de produtos ou fale com um consultor para um orçamento.</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <Link href="/contato" onClick={() => trackEvent("cta_click", { cta: "banner_contato" })}>
            <Button variant="secondary" size="lg" className="bg-white text-green-700 hover:bg-gray-100">Fale com um Consultor</Button>
          </Link>
          <Link href="/produtos" onClick={() => trackEvent("cta_click", { cta: "banner_catalogo" })}>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-transparent hover:border-white"
            >
              Baixar Catálogo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}