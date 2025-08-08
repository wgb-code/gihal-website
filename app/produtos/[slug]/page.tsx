import SiteShell from "@/components/site-shell"
import Breadcrumbs from "@/components/breadcrumbs"
import { produtos } from "@/lib/data"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = produtos.find((p) => p.slug === slug)
  if (!product) {
    return (
      <SiteShell>
        <section className="container mx-auto px-4 py-10">
          <div className="text-sm text-muted-foreground">Produto não encontrado.</div>
        </section>
      </SiteShell>
    )
  }

  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-6">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/produtos", label: "Produtos" }, { label: product.nome }]} />
      </section>
      <section className="container mx-auto px-4 pb-10 grid lg:grid-cols-2 gap-8">
        <div className="rounded-xl border overflow-hidden">
          <img src={product.imagem || "/placeholder.svg"} alt={`Imagem do produto ${product.nome}`} className="w-full h-96 object-cover" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{product.nome}</h1>
          <div className="text-sm text-muted-foreground mt-1">{product.categoria}</div>
          <p className="mt-3 text-muted-foreground">{product.resumo}</p>

          <div className="mt-6">
            <h2 className="font-semibold">Especificações</h2>
            <dl className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {Object.entries(product.especificacoes).map(([k, v]) => (
                <div key={k} className="border-b py-2">
                  <dt className="text-sm font-medium">{k}</dt>
                  <dd className="text-sm text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6">
            <h2 className="font-semibold">Benefícios</h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {product.beneficios.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href={`/contato?produto=${encodeURIComponent(product.nome)}`}>
              <Button className="bg-green-700 hover:bg-green-800 text-white">Solicite um Orçamento</Button>
            </Link>
            <Link href="/comparador">
              <Button variant="outline">Adicionar ao Comparador</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-16">
        <h3 className="text-xl font-semibold mb-4">Produtos relacionados</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {produtos.filter((p) => p.categoria === product.categoria && p.slug !== product.slug).slice(0,3).map((rel) => (
            <Link key={rel.id} href={`/produtos/${rel.slug}`} className="rounded-xl border overflow-hidden hover:shadow-sm">
              <img src={rel.imagem || "/placeholder.svg"} alt={rel.nome} className="w-full h-44 object-cover" />
              <div className="p-3">
                <div className="text-xs text-muted-foreground">{rel.categoria}</div>
                <div className="font-medium">{rel.nome}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}

export function generateStaticParams() {
  return produtos.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false
