import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img
          src="/agricultural-machinery-action.png"
          alt="Implementos GIHAL em operação no campo"
          className="h-[60vh] w-full object-cover object-center sm:h-[70vh] md:h-[75vh]"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
      </div>
      <div className="relative container mx-auto px-4 py-20 sm:py-24 md:py-28 flex items-end h-[60vh] sm:h-[70vh] md:h-[75vh]">
        <div className="max-w-3xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            GIHAL: Inovação e Produtividade no Campo
          </h1>
          <p className="mt-3 text-white/90 max-w-2xl">
            Implementos agrícolas robustos, de alta qualidade e preço competitivo. Mais de 30 anos de tradição impulsionando a agricultura sustentável.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/produtos">
              <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white">
                Explore Nossos Produtos
              </Button>
            </Link>
            <Link href="/revendedores">
              <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100">
                Encontre um Revendedor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
