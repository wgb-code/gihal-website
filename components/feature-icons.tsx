import { ShieldCheck, BadgeDollarSign, Globe2, Wrench, Sparkles, Clock } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: "Qualidade e Robustez", desc: "Implementos duráveis para alta performance no campo." },
  { icon: BadgeDollarSign, title: "Preço Competitivo", desc: "Equilíbrio ideal entre tecnologia e acessibilidade." },
  { icon: Sparkles, title: "Inovação Contínua", desc: "Tecnologias próprias e apoio de P&D." },
  { icon: Wrench, title: "Suporte e Pós-venda", desc: "Assistência técnica e peças com agilidade." },
  { icon: Globe2, title: "Expansão Internacional", desc: "Presença em diversos mercados globais." },
  { icon: Clock, title: "+30 Anos de História", desc: "Tradição e credibilidade no agronegócio." },
]

export default function FeatureIcons() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="rounded-xl border p-6 hover:shadow-sm transition">
            <f.icon className="h-6 w-6 text-green-700" aria-hidden="true" />
            <h3 className="mt-3 font-semibold">{f.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
