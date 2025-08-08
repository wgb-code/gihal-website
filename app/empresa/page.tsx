import SiteShell from "@/components/site-shell"

export default function Page() {
  return (
    <SiteShell>
      <section className="relative">
        <img
          src="/placeholder.svg?height=480&width=1600"
          alt="Fábrica GIHAL"
          className="w-full h-64 md:h-80 object-cover"
        />
      </section>
      <section className="container mx-auto px-4 py-10 grid lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Sobre a GIHAL</h1>
          <p className="mt-3 text-muted-foreground">
            Fundada em 1994 em Carazinho (RS), a GIHAL iniciou transformando plantadeiras e semeadeiras convencionais para plantio direto. 
            Desde 1996, produz e lança suas próprias máquinas, aliando qualidade, robustez e preços competitivos.
          </p>
          <p className="mt-3 text-muted-foreground">
            Missão: oferecer tecnologia moderna e eficiente em implementos agrícolas a um preço competitivo, contribuindo para a agricultura sustentável.
          </p>
          <p className="mt-3 text-muted-foreground">
            Visão: ser referência em tecnologia e inovação no setor, consolidando e ampliando mercados no Brasil e no mundo.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="rounded-xl border p-5">
            <h2 className="font-semibold">Política de Qualidade</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Foco na satisfação do cliente, redução de retrabalho e desperdícios, padronização de processos e equipe treinada e motivada.
            </p>
          </div>
          <div className="rounded-xl border p-5">
            <h2 className="font-semibold">Expansão Internacional</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Exportação para Uruguai, Paraguai, China e prospecção de mercados como Bolívia, Colômbia, México, África do Sul e Rússia.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
