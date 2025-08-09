import SiteShell from "@/components/site-shell"
import { revendedores } from "@/lib/data"
import DealersMap from "@/components/dealers-map.client"
import DealerFinder from "@/components/dealer-finder"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold">Revendedores</h1>
        <p className="mt-3 text-muted-foreground">Encontre o revendedor mais próximo e fale com um especialista local.</p>

        <div className="mt-6">
          <DealersMap />
        </div>

        <div className="mt-6">
          <DealerFinder />
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {revendedores.map((revendedor, i) => (
            <div key={i} className="rounded-xl border p-4">
              <div className="font-semibold">{revendedor.nome}</div>
              <div className="text-sm text-muted-foreground">{revendedor.cidade}</div>
              <div className="text-sm mt-2">{revendedor.telefone}</div>
              <div className="text-sm">{revendedor.email}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
