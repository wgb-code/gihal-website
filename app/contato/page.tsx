import SiteShell from "@/components/site-shell"
import type { Metadata } from "next"
import ContatoClient from "@/components/contato-page.client"

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a GIHAL: solicite orçamento ou suporte técnico.",
}


export default function Page() {
  return (
    <SiteShell>
      <ContatoClient />
    </SiteShell>
  )
}
