import SiteShell from "@/components/site-shell"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notícias",
  description: "Atualizações da GIHAL: lançamentos, tecnologia e mercados.",
}

const posts = [
  { slug: "lancamento-flutuador-automatico", titulo: "Flutuador lateral automático: tecnologia com apoio da FINEP", data: "2025-06-15" },
  { slug: "exportacao-novos-mercados", titulo: "GIHAL avança em mercados internacionais", data: "2025-05-10" },
  { slug: "manutencao-plantadeiras", titulo: "Dicas de manutenção para a sua plantadeira render mais", data: "2025-04-02" },
]

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold">Notícias</h1>
        <div className="mt-6 grid gap-4">
          {posts.map((p) => (
            <article key={p.slug} id={p.slug} className="rounded-xl border p-5">
              <div className="text-xs text-muted-foreground">{new Date(p.data).toLocaleDateString("pt-BR")}</div>
              <h2 className="mt-1 font-semibold">{p.titulo}</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Conteúdo do post. Substitua por CMS ou MDX conforme necessidade.
              </p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
