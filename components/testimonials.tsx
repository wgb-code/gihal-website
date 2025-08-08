import { Quote } from 'lucide-react'

const testimonials = [
  {
    nome: "João Mendes",
    local: "Cruz Alta - RS",
    depoimento:
      "As plantadeiras GIHAL aumentaram nossa produtividade e reduziram paradas. Robustez de verdade no campo.",
  },
  {
    nome: "Cooperativa AgroVale",
    local: "PR",
    depoimento:
      "Excelente custo-benefício. Suporte pós-venda rápido e eficiente, garantindo a operação na safra.",
  },
  {
    nome: "Fazenda Rio Bonito",
    local: "MT",
    depoimento:
      "Tecnologia acessível e resultados reais. A GIHAL entende a realidade do produtor brasileiro.",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Quem compara, compra!</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-xl border bg-white p-6">
              <Quote className="h-6 w-6 text-green-700" aria-hidden="true" />
              <blockquote className="mt-3 text-sm text-muted-foreground">“{t.depoimento}”</blockquote>
              <figcaption className="mt-3 text-sm font-semibold">
                {t.nome} <span className="text-muted-foreground font-normal">• {t.local}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
