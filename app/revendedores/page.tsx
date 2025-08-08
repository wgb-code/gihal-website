import SiteShell from "@/components/site-shell"
import DealersMap from "@/components/dealers-map"
import { revendedores } from "@/lib/data"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold">Revendedores</h1>
        <p className="mt-3 text-muted-foreground">Encontre o revendedor mais próximo e fale com um especialista local.</p>
        <div className="mt-6"><DealersMap /></div>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {revendedores.map((r, i) => (
            <div key={i} className="rounded-xl border p-4">
              <div className="font-semibold">{r.nome}</div>
              <div className="text-sm text-muted-foreground">{r.cidade}</div>
              <div className="text-sm mt-2">{r.telefone}</div>
              <div className="text-sm">{r.email}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
