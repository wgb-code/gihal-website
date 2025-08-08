import SiteShell from "@/components/site-shell"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold">Tecnologia GIHAL</h1>
        <p className="mt-3 text-muted-foreground">
          Soluções pensadas para quem nasceu pro agro. Conheça diferenciais como o flutuador lateral automático (desenvolvido com apoio da FINEP) e sistemas que elevam a produtividade.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="rounded-xl border overflow-hidden">
            <img src="/placeholder.svg?height=400&width=800" alt="Flutuador lateral automático" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h2 className="font-semibold">Flutuador Lateral Automático</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Estabilidade e precisão no plantio em terrenos irregulares, reduzindo falhas e aumentando o rendimento.
              </p>
            </div>
          </div>
          <div className="rounded-xl border overflow-hidden">
            <img src="/placeholder.svg?height=400&width=800" alt="Tecnologia de precisão" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h2 className="font-semibold">Tecnologia de Precisão</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Distribuição precisa de sementes e adubo com menor desperdício, integração com monitores e taxa variável.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
