import SiteShell from "@/components/site-shell"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold">Termos de Uso</h1>
        <p className="mt-3 text-muted-foreground">
          Estes são termos de uso modelo. Substitua pelo conteúdo legal definitivo.
        </p>
      </section>
    </SiteShell>
  )
}
