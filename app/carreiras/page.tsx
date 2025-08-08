import SiteShell from "@/components/site-shell"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold">Carreiras</h1>
        <p className="mt-2 text-muted-foreground">
          Junte-se a um time apaixonado por tecnologia e pelo agro. Envie seu currículo para rh@gihal.com.br
        </p>
        <ul className="mt-6 space-y-3">
          <li className="rounded-xl border p-4">
            <div className="font-semibold">Engenheiro(a) de Produto</div>
            <div className="text-sm text-muted-foreground">Carazinho - RS • Híbrido</div>
          </li>
          <li className="rounded-xl border p-4">
            <div className="font-semibold">Técnico(a) de Pós-venda</div>
            <div className="text-sm text-muted-foreground">Sul do Brasil • Presencial</div>
          </li>
        </ul>
      </section>
    </SiteShell>
  )
}
