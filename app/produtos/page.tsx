import SiteShell from "@/components/site-shell"
import type { Metadata } from "next"
import ProdutosPageClient from "@/components/produtos-page.client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Produtos",
  description: "Catálogo GIHAL: plantadeiras, semeadeiras, carretas agrícolas, vagões e mais.",
}

export default function Page() {
  return (
    <SiteShell>
      <Suspense>
        <ProdutosPageClient />
      </Suspense>
    </SiteShell>
  )
}
