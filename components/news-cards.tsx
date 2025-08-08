import Link from "next/link"

const posts = [
  {
    slug: "lancamento-flutuador-automatico",
    titulo: "Flutuador lateral automático: tecnologia com apoio da FINEP",
    data: "2025-06-15",
    imagem: "/automatic-side-float.png",
  },
  {
    slug: "exportacao-novos-mercados",
    titulo: "GIHAL avança em mercados internacionais",
    data: "2025-05-10",
    imagem: "/agricultural-implements-export-gihal.png",
  },
  {
    slug: "manutencao-plantadeiras",
    titulo: "Dicas de manutenção para a sua plantadeira render mais",
    data: "2025-04-02",
    imagem: "/plantadeira-manutencao-campo.png",
  },
]

export default function NewsCards() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold">Novidades</h2>
        <Link href="/noticias" className="text-sm text-green-700 hover:underline">Ver todas</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-xl border overflow-hidden bg-white">
            <img src={p.imagem || "/placeholder.svg"} alt={p.titulo} className="h-44 w-full object-cover" />
            <div className="p-4">
              <div className="text-xs text-muted-foreground">{new Date(p.data).toLocaleDateString("pt-BR")}</div>
              <h3 className="mt-1 font-semibold">{p.titulo}</h3>
              <Link href={`/noticias#${p.slug}`} className="text-sm mt-2 inline-block text-green-700 hover:underline">
                Leia mais
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
